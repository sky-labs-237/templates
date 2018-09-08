(ns github
  (:gen-class) ; for -main method in uberjar 
  (:require [io.pedestal.http as http]))

(defn respond-hello [request]
  {:status 200
   :body "Hello, world!"})

(def routes
  #{["/get" :get `respond-hello]})



(defn start []
  (-> {::http/routes routes
       ::http/port 8890
       ::http/type :jetty}
      http/create-server
      http/start))

;; This is an adapted service map, that can be started and stopped
;; From the REPL you can call http/start and http/stop on this service
(defonce runnable-service  (http/create-server service))


(defn run-dev
  "The entry-point for 'clojure -A:run-dev'"
  [& args]
  (println "\nCreating your [DEV] server...")
  (-> service ;; start with production configuration
      (merge {:env :dev
              ;; do not block thread that starts web server
              ::http/join? false
              ;; Routes can be a function that resolve routes,
              ;;  we can use this to set the routes to be reloadable
              ::http/routes #(deref #'service/routes)
              ;; all origins are allowed in dev mode
              ::http/allowed-origins  {:creds true :allowed-origins  (constantly true)}})
      ;; Wire up interceptor chains
      http/default-interceptors
      http/dev-interceptors
      http/create-server
      http/start))

(defn -main
    "The entry-point for 'clojure -A:run'"
      [& args]
        (println "\nCreating your server...")
          (http/start runnable-service)
  )
