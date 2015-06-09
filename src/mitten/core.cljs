(ns mitten.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [ajax.core :refer [GET]]
            [markdown.core :refer [md->html]]
            [dommy.core :as dommy :refer-macros [sel sel1]]))

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

(defn main []
  (om/root
    (fn [app owner]
      (reify
        om/IRender
        (render [_]
          (dom/section #js {:className "links"}
            (dom/h2 nil "Books")
            (apply dom/div #js {:className "books"}
              (om/build-all resource-view (:books app)))
            (dom/h2 nil "Projects")
            (apply dom/div #js {:className "projects"}
              (om/build-all resource-view (:projects app)))))))
    app-state
    {:target (. js/document (getElementById "app"))}))


;; kick off requests

(get-issue 1 :books)
(get-issue 2 :projects)
