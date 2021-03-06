// Compiled by ClojureScript 1.10.312 {}
goog.provide('figwheel.connect.build_dev');
goog.require('cljs.core');
goog.require('my_project.client');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__35425__delegate = function (x){
if(cljs.core.truth_(my_project.client.mount_root)){
return cljs.core.apply.call(null,my_project.client.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'my-project.client/mount-root' is missing");
}
};
var G__35425 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__35426__i = 0, G__35426__a = new Array(arguments.length -  0);
while (G__35426__i < G__35426__a.length) {G__35426__a[G__35426__i] = arguments[G__35426__i + 0]; ++G__35426__i;}
  x = new cljs.core.IndexedSeq(G__35426__a,0,null);
} 
return G__35425__delegate.call(this,x);};
G__35425.cljs$lang$maxFixedArity = 0;
G__35425.cljs$lang$applyTo = (function (arglist__35427){
var x = cljs.core.seq(arglist__35427);
return G__35425__delegate(x);
});
G__35425.cljs$core$IFn$_invoke$arity$variadic = G__35425__delegate;
return G__35425;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3000/figwheel-ws"], null));

//# sourceMappingURL=build_dev.js.map?rel=1531390963764
