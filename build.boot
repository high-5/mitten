(set-env!
 :source-paths   #{"src"}
 :resource-paths #{"html"}
 :dependencies '[[adzerk/boot-cljs      "0.0-2814-3" :scope "test"]
                 [adzerk/boot-cljs-repl "0.1.10-SNAPSHOT" :scope "test"]
                 [adzerk/boot-reload    "0.2.6"      :scope "test"]
                 [boot-cljs-test/node-runner "0.1.0" :scope "test"]
                 [pandeiro/boot-http    "0.3.0"      :scope "test"]
                 [org.omcljs/om "0.8.8" :scope "test"]
                 [cljs-ajax "0.3.11" :scope "test"]
                 [markdown-clj "0.9.66" :scope "test"]
                 [prismatic/dommy "1.1.0" :scope "test"]])

(require
 '[adzerk.boot-cljs      :refer [cljs]]
 '[adzerk.boot-cljs-repl :refer [cljs-repl start-repl]]
 '[boot-cljs-test.node-runner :refer :all]
 '[adzerk.boot-reload    :refer [reload]]
 '[pandeiro.http         :refer [serve]])

(deftask dev []
  (set-env! :source-paths #{"src" "test"})
  (comp (serve :dir "target/")
        (watch)
        (speak)
        (reload :on-jsload 'mitten.core/main)
        (cljs-repl)

        (cljs :source-map true :optimizations :none)))

(deftask build []
  (set-env! :source-paths #{"src"})
  (comp (cljs :optimizations :advanced)))
