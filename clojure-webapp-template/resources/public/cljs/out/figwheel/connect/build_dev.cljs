(ns figwheel.connect.build-dev (:require [my-project.client] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/my-project.client.mount-root (apply js/my-project.client.mount-root x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'my-project.client/mount-root' is missing"))), :build-id "dev", :websocket-url "ws://localhost:3000/figwheel-ws"})

