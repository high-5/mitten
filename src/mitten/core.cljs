(ns mitten.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [clojure.string :as string]
            [ajax.core :refer [GET]]
            [markdown.core :refer [md->html]]
            [dommy.core :as dommy :refer-macros [sel sel1]]
            [goog.events :as events]
            [goog.history.EventType :as EventType]
            [secretary.core :as sec :refer-macros [defroute]])
            (:import goog.History))

(sec/set-config! :prefix "#")

(let [history (History.)
      navigation EventType/NAVIGATE]
  (goog.events/listen history
                     navigation
                     #(-> % .-token sec/dispatch!))
  (doto history (.setEnabled true)))

;; keep atom up top

(defonce app-state (atom {
                          :books []
                          :projects []}))


;; data fetch + transform

(def url "https://api.github.com/repos/high-5/discussion/issues/")

(defn get-link-data [link]
  {:text (dommy/text link) :href (.-href link)})

(defn md->links [md]
  (let [el (. js/document createElement "div")]
    (aset el "innerHTML" (md->html md))
    (map get-link-data (sel el :a))))

(defn structure-links [{:keys [user body]}]
  (map #(zipmap [:user :link-data] [user %])
    (md->links body)))

(defn build-links [data]
  (filter not-empty
    (map structure-links data)))

(defn get-issue [issue-number issue-key]
  (let [uri (str url issue-number "/comments")]
    (GET uri {
      :handler #(swap! app-state assoc issue-key (build-links %))
      :response-format :json :keywords? true})))

;; om setup

(defn link-view [{:keys [user link-data]} owner]
  (let [{:keys [href text]} link-data {:keys [html_url login]} user]
    (reify
      om/IRender
      (render [this]
        (dom/li nil
          (dom/a #js {:href href} text)
          (dom/span nil " - " )
          (dom/a #js {:href html_url}
            (dom/span #js {:className "user"} login)))))))

(defn resource-view [resource owner]
  (reify
    om/IRender
    (render [this]
      (apply dom/ul #js {:className "r-ResetList"}
        (om/build-all link-view resource)))))

(defroute "/:page" {:as params}
  (om/root
    (fn [app owner]
      (reify
        om/IRender
        (render [_]
          (dom/section #js {:className "links"}
            (dom/ul #js {:className "r-ResetList nav"}
              (dom/li #js {:className "nav-el"}
                (dom/a #js {:href "#books" :className "nav-el_link"} "Books"))
              (dom/li #js {:className "nav-el"}
                (dom/a #js {:href "#projects" :className "nav-el_link"} "Projects")))
            (dom/h2 nil (string/capitalize (:page params)))
            (apply dom/div #js {:className "books"}
              (om/build-all resource-view ((keyword (:page params)) app)))))))
    app-state
    {:target (. js/document (getElementById "app"))}))


(defn main []
  (let [location (.-hash js/window.location)]
    (if (empty? location)
      (set! (.-hash js/window.location) "#books")
      (sec/dispatch! location))))

;; kick off requests

(get-issue 1 :books)
(get-issue 2 :projects)
