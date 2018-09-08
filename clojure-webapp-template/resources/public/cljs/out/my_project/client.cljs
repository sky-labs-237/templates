(ns my-project.client
  (:require [reagent.core :as r]))

(defn root-component []
  [:div [:h1 "Hello world from BYM!"]])

(defn ^:export mount-root []
  (r/render [root-component]
            (.getElementById js/document "app")))
