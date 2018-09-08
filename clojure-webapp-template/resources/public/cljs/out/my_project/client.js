// Compiled by ClojureScript 1.10.312 {}
goog.provide('my_project.client');
goog.require('cljs.core');
goog.require('reagent.core');
my_project.client.root_component = (function my_project$client$root_component(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Hello world from BYM!"], null)], null);
});
my_project.client.mount_root = (function my_project$client$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.client.root_component], null),document.getElementById("app"));
});
goog.exportSymbol('my_project.client.mount_root', my_project.client.mount_root);

//# sourceMappingURL=client.js.map?rel=1531390963735
