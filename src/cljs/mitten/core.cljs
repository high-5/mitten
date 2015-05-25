(ns mitten.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [ajax.core :refer [GET]]))

(defonce app-state (atom {:books `() :projects `()}))

(defn main []
  (om/root
    (fn [app owner]
      (reify
        om/IRender
        (render [_]
          (dom/h1 nil "TODO"))))
    app-state
    {:target (. js/document (getElementById "app"))}))
