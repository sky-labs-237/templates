// Compiled by ClojureScript 1.10.312 {:static-fns true, :optimize-constants true}
goog.provide('my_project.client');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
my_project.client.root_component = (function my_project$client$root_component(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,"Hello world!"], null)], null);
});
my_project.client.mount_root = (function my_project$client$mount_root(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.client.root_component], null),document.getElementById("app"));
});
goog.exportSymbol('my_project.client.mount_root', my_project.client.mount_root);
