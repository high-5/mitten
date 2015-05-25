(ns mitten.test-runner
  (:require
   [cljs.test :refer-macros [run-tests]]
   [mitten.core-test]))

(enable-console-print!)

(defn runner []
  (if (cljs.test/successful?
       (run-tests
        'mitten.core-test))
    0
    1))
