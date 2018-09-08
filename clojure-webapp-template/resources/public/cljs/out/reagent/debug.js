// Compiled by ClojureScript 1.10.312 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__32215__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__32215 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32216__i = 0, G__32216__a = new Array(arguments.length -  0);
while (G__32216__i < G__32216__a.length) {G__32216__a[G__32216__i] = arguments[G__32216__i + 0]; ++G__32216__i;}
  args = new cljs.core.IndexedSeq(G__32216__a,0,null);
} 
return G__32215__delegate.call(this,args);};
G__32215.cljs$lang$maxFixedArity = 0;
G__32215.cljs$lang$applyTo = (function (arglist__32217){
var args = cljs.core.seq(arglist__32217);
return G__32215__delegate(args);
});
G__32215.cljs$core$IFn$_invoke$arity$variadic = G__32215__delegate;
return G__32215;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__32218__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__32218 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32219__i = 0, G__32219__a = new Array(arguments.length -  0);
while (G__32219__i < G__32219__a.length) {G__32219__a[G__32219__i] = arguments[G__32219__i + 0]; ++G__32219__i;}
  args = new cljs.core.IndexedSeq(G__32219__a,0,null);
} 
return G__32218__delegate.call(this,args);};
G__32218.cljs$lang$maxFixedArity = 0;
G__32218.cljs$lang$applyTo = (function (arglist__32220){
var args = cljs.core.seq(arglist__32220);
return G__32218__delegate(args);
});
G__32218.cljs$core$IFn$_invoke$arity$variadic = G__32218__delegate;
return G__32218;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1531390888002
