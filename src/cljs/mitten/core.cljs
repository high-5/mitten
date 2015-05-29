(ns mitten.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [ajax.core :refer [GET]]
            [markdown.core :refer [md->html]]
            [dommy.core :as dommy :refer-macros [sel sel1]]))

(defonce app-state (atom {
                          :books []
                          :projects []}))

(def url "https://api.github.com/repos/high-5/discussion/issues/")

(defn get-link-data [link]
  {:text (dommy/text link) :href (.-href link)})

(defn md->links [md]
  (let [el (. js/document createElement "div")]
    (aset el "innerHTML" (md->html md))
    (map get-link-data (sel el :a))))

(defn link-view [{:keys [text href] :as link-data} owner]
  (reify
    om/IRender
    (render [this]
      (dom/a #js {:href href} text))))

(defn resource-view [{:keys [body user] :as resource} owner]
  (reify
    om/IRender
    (render [this]
      (apply dom/li nil
        (om/build-all link-view (md->links body))))))

(defn resources-view [resources owner]
  (reify
    (render [this]
            (apply dom/ul nil (om/build-all resource-view resources)))))

(defn main []
  (om/root
    (fn [app owner]
      (reify
        om/IRender
        (render [_]
          (dom/div #js {:className "books"}
            (apply dom/ul nil
              (om/build-all resource-view (:books app)))))))
    app-state
    {:target (. js/document (getElementById "app"))}))


(defn get-issue [issue-number issue-key]
  (let [uri (str url issue-number "/comments")]
    (GET uri {:handler #(swap! app-state assoc issue-key %) :response-format :json :keywords? true})))


(get-issue 1 :books)
(get-issue 2 :projects)
