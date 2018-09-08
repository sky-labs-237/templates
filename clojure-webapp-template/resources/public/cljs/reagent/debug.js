// Compiled by ClojureScript 1.10.312 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__6199__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__6199 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6200__i = 0, G__6200__a = new Array(arguments.length -  0);
while (G__6200__i < G__6200__a.length) {G__6200__a[G__6200__i] = arguments[G__6200__i + 0]; ++G__6200__i;}
  args = new cljs.core.IndexedSeq(G__6200__a,0,null);
} 
return G__6199__delegate.call(this,args);};
G__6199.cljs$lang$maxFixedArity = 0;
G__6199.cljs$lang$applyTo = (function (arglist__6201){
var args = cljs.core.seq(arglist__6201);
return G__6199__delegate(args);
});
G__6199.cljs$core$IFn$_invoke$arity$variadic = G__6199__delegate;
return G__6199;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__6202__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__6202 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6203__i = 0, G__6203__a = new Array(arguments.length -  0);
while (G__6203__i < G__6203__a.length) {G__6203__a[G__6203__i] = arguments[G__6203__i + 0]; ++G__6203__i;}
  args = new cljs.core.IndexedSeq(G__6203__a,0,null);
} 
return G__6202__delegate.call(this,args);};
G__6202.cljs$lang$maxFixedArity = 0;
G__6202.cljs$lang$applyTo = (function (arglist__6204){
var args = cljs.core.seq(arglist__6204);
return G__6202__delegate(args);
});
G__6202.cljs$core$IFn$_invoke$arity$variadic = G__6202__delegate;
return G__6202;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});
