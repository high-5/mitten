(ns mitten.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [ajax.core :refer [GET]]))

(defonce app-state (atom {
                          :books []
                          :projects []}))

(def url "https://api.github.com/repos/high-5/discussion/issues/")

(defn resource-view [{:keys [body user] :as resource} owner]
  (reify
    om/IRender
    (render [this]
      (dom/li nil
        (str body " - ")
        (dom/a #js {:href (:html_url user)}
               (:login user))))))

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

          (dom/div {:className "books"}
            (apply dom/ul nil
              (om/build-all resource-view (:books app)))))))
    app-state
    {:target (. js/document (getElementById "app"))}))


(defn get-issue [issue-number issue-key]
  (let [uri (str url issue-number "/comments")]
    (GET uri {:handler #(swap! app-state assoc issue-key %) :response-format :json :keywords? true})))


(get-issue 1 :books)
(get-issue 2 :projects)
