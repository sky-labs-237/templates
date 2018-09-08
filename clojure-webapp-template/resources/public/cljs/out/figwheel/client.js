// Compiled by ClojureScript 1.10.312 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.14";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && (!((JSON.stringify == null)))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e34278){if((e34278 instanceof Error)){
var e = e34278;
return "Error: Unable to stringify";
} else {
throw e34278;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__34281 = arguments.length;
switch (G__34281) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__34279_SHARP_){
if(typeof p1__34279_SHARP_ === 'string'){
return p1__34279_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__34279_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4520__auto__ = [];
var len__4517__auto___34284 = arguments.length;
var i__4518__auto___34285 = (0);
while(true){
if((i__4518__auto___34285 < len__4517__auto___34284)){
args__4520__auto__.push((arguments[i__4518__auto___34285]));

var G__34286 = (i__4518__auto___34285 + (1));
i__4518__auto___34285 = G__34286;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq34283){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34283));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4520__auto__ = [];
var len__4517__auto___34288 = arguments.length;
var i__4518__auto___34289 = (0);
while(true){
if((i__4518__auto___34289 < len__4517__auto___34288)){
args__4520__auto__.push((arguments[i__4518__auto___34289]));

var G__34290 = (i__4518__auto___34289 + (1));
i__4518__auto___34289 = G__34290;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq34287){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34287));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__34291){
var map__34292 = p__34291;
var map__34292__$1 = ((((!((map__34292 == null)))?(((((map__34292.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34292.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34292):map__34292);
var message = cljs.core.get.call(null,map__34292__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__34292__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__3936__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__3925__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__3925__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__3925__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__28406__auto___34371 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28406__auto___34371,ch){
return (function (){
var f__28407__auto__ = (function (){var switch__28316__auto__ = ((function (c__28406__auto___34371,ch){
return (function (state_34343){
var state_val_34344 = (state_34343[(1)]);
if((state_val_34344 === (7))){
var inst_34339 = (state_34343[(2)]);
var state_34343__$1 = state_34343;
var statearr_34345_34372 = state_34343__$1;
(statearr_34345_34372[(2)] = inst_34339);

(statearr_34345_34372[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34344 === (1))){
var state_34343__$1 = state_34343;
var statearr_34346_34373 = state_34343__$1;
(statearr_34346_34373[(2)] = null);

(statearr_34346_34373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34344 === (4))){
var inst_34296 = (state_34343[(7)]);
var inst_34296__$1 = (state_34343[(2)]);
var state_34343__$1 = (function (){var statearr_34347 = state_34343;
(statearr_34347[(7)] = inst_34296__$1);

return statearr_34347;
})();
if(cljs.core.truth_(inst_34296__$1)){
var statearr_34348_34374 = state_34343__$1;
(statearr_34348_34374[(1)] = (5));

} else {
var statearr_34349_34375 = state_34343__$1;
(statearr_34349_34375[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34344 === (15))){
var inst_34303 = (state_34343[(8)]);
var inst_34318 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_34303);
var inst_34319 = cljs.core.first.call(null,inst_34318);
var inst_34320 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_34319);
var inst_34321 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_34320)].join('');
var inst_34322 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_34321);
var state_34343__$1 = state_34343;
var statearr_34350_34376 = state_34343__$1;
(statearr_34350_34376[(2)] = inst_34322);

(statearr_34350_34376[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34344 === (13))){
var inst_34327 = (state_34343[(2)]);
var state_34343__$1 = state_34343;
var statearr_34351_34377 = state_34343__$1;
(statearr_34351_34377[(2)] = inst_34327);

(statearr_34351_34377[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34344 === (6))){
var state_34343__$1 = state_34343;
var statearr_34352_34378 = state_34343__$1;
(statearr_34352_34378[(2)] = null);

(statearr_34352_34378[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34344 === (17))){
var inst_34325 = (state_34343[(2)]);
var state_34343__$1 = state_34343;
var statearr_34353_34379 = state_34343__$1;
(statearr_34353_34379[(2)] = inst_34325);

(statearr_34353_34379[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34344 === (3))){
var inst_34341 = (state_34343[(2)]);
var state_34343__$1 = state_34343;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34343__$1,inst_34341);
} else {
if((state_val_34344 === (12))){
var inst_34302 = (state_34343[(9)]);
var inst_34316 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_34302,opts);
var state_34343__$1 = state_34343;
if(cljs.core.truth_(inst_34316)){
var statearr_34354_34380 = state_34343__$1;
(statearr_34354_34380[(1)] = (15));

} else {
var statearr_34355_34381 = state_34343__$1;
(statearr_34355_34381[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34344 === (2))){
var state_34343__$1 = state_34343;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34343__$1,(4),ch);
} else {
if((state_val_34344 === (11))){
var inst_34303 = (state_34343[(8)]);
var inst_34308 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34309 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_34303);
var inst_34310 = cljs.core.async.timeout.call(null,(1000));
var inst_34311 = [inst_34309,inst_34310];
var inst_34312 = (new cljs.core.PersistentVector(null,2,(5),inst_34308,inst_34311,null));
var state_34343__$1 = state_34343;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34343__$1,(14),inst_34312);
} else {
if((state_val_34344 === (9))){
var inst_34303 = (state_34343[(8)]);
var inst_34329 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_34330 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_34303);
var inst_34331 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34330);
var inst_34332 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_34331)].join('');
var inst_34333 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_34332);
var state_34343__$1 = (function (){var statearr_34356 = state_34343;
(statearr_34356[(10)] = inst_34329);

return statearr_34356;
})();
var statearr_34357_34382 = state_34343__$1;
(statearr_34357_34382[(2)] = inst_34333);

(statearr_34357_34382[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34344 === (5))){
var inst_34296 = (state_34343[(7)]);
var inst_34298 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_34299 = (new cljs.core.PersistentArrayMap(null,2,inst_34298,null));
var inst_34300 = (new cljs.core.PersistentHashSet(null,inst_34299,null));
var inst_34301 = figwheel.client.focus_msgs.call(null,inst_34300,inst_34296);
var inst_34302 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_34301);
var inst_34303 = cljs.core.first.call(null,inst_34301);
var inst_34304 = figwheel.client.autoload_QMARK_.call(null);
var state_34343__$1 = (function (){var statearr_34358 = state_34343;
(statearr_34358[(9)] = inst_34302);

(statearr_34358[(8)] = inst_34303);

return statearr_34358;
})();
if(cljs.core.truth_(inst_34304)){
var statearr_34359_34383 = state_34343__$1;
(statearr_34359_34383[(1)] = (8));

} else {
var statearr_34360_34384 = state_34343__$1;
(statearr_34360_34384[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34344 === (14))){
var inst_34314 = (state_34343[(2)]);
var state_34343__$1 = state_34343;
var statearr_34361_34385 = state_34343__$1;
(statearr_34361_34385[(2)] = inst_34314);

(statearr_34361_34385[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34344 === (16))){
var state_34343__$1 = state_34343;
var statearr_34362_34386 = state_34343__$1;
(statearr_34362_34386[(2)] = null);

(statearr_34362_34386[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34344 === (10))){
var inst_34335 = (state_34343[(2)]);
var state_34343__$1 = (function (){var statearr_34363 = state_34343;
(statearr_34363[(11)] = inst_34335);

return statearr_34363;
})();
var statearr_34364_34387 = state_34343__$1;
(statearr_34364_34387[(2)] = null);

(statearr_34364_34387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34344 === (8))){
var inst_34302 = (state_34343[(9)]);
var inst_34306 = figwheel.client.reload_file_state_QMARK_.call(null,inst_34302,opts);
var state_34343__$1 = state_34343;
if(cljs.core.truth_(inst_34306)){
var statearr_34365_34388 = state_34343__$1;
(statearr_34365_34388[(1)] = (11));

} else {
var statearr_34366_34389 = state_34343__$1;
(statearr_34366_34389[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28406__auto___34371,ch))
;
return ((function (switch__28316__auto__,c__28406__auto___34371,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__28317__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__28317__auto____0 = (function (){
var statearr_34367 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34367[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__28317__auto__);

(statearr_34367[(1)] = (1));

return statearr_34367;
});
var figwheel$client$file_reloader_plugin_$_state_machine__28317__auto____1 = (function (state_34343){
while(true){
var ret_value__28318__auto__ = (function (){try{while(true){
var result__28319__auto__ = switch__28316__auto__.call(null,state_34343);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28319__auto__;
}
break;
}
}catch (e34368){if((e34368 instanceof Object)){
var ex__28320__auto__ = e34368;
var statearr_34369_34390 = state_34343;
(statearr_34369_34390[(5)] = ex__28320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34343);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34368;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34391 = state_34343;
state_34343 = G__34391;
continue;
} else {
return ret_value__28318__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__28317__auto__ = function(state_34343){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__28317__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__28317__auto____1.call(this,state_34343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__28317__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__28317__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__28317__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__28317__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__28317__auto__;
})()
;})(switch__28316__auto__,c__28406__auto___34371,ch))
})();
var state__28408__auto__ = (function (){var statearr_34370 = f__28407__auto__.call(null);
(statearr_34370[(6)] = c__28406__auto___34371);

return statearr_34370;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28408__auto__);
});})(c__28406__auto___34371,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__34392_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__34392_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_34394 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_34394){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e34393){if((e34393 instanceof Error)){
var e = e34393;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_34394], null));
} else {
var e = e34393;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_34394))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__34395){
var map__34396 = p__34395;
var map__34396__$1 = ((((!((map__34396 == null)))?(((((map__34396.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34396.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34396):map__34396);
var opts = map__34396__$1;
var build_id = cljs.core.get.call(null,map__34396__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__34396,map__34396__$1,opts,build_id){
return (function (p__34398){
var vec__34399 = p__34398;
var seq__34400 = cljs.core.seq.call(null,vec__34399);
var first__34401 = cljs.core.first.call(null,seq__34400);
var seq__34400__$1 = cljs.core.next.call(null,seq__34400);
var map__34402 = first__34401;
var map__34402__$1 = ((((!((map__34402 == null)))?(((((map__34402.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34402.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34402):map__34402);
var msg = map__34402__$1;
var msg_name = cljs.core.get.call(null,map__34402__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__34400__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__34399,seq__34400,first__34401,seq__34400__$1,map__34402,map__34402__$1,msg,msg_name,_,map__34396,map__34396__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__34399,seq__34400,first__34401,seq__34400__$1,map__34402,map__34402__$1,msg,msg_name,_,map__34396,map__34396__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__34396,map__34396__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__34404){
var vec__34405 = p__34404;
var seq__34406 = cljs.core.seq.call(null,vec__34405);
var first__34407 = cljs.core.first.call(null,seq__34406);
var seq__34406__$1 = cljs.core.next.call(null,seq__34406);
var map__34408 = first__34407;
var map__34408__$1 = ((((!((map__34408 == null)))?(((((map__34408.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34408.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34408):map__34408);
var msg = map__34408__$1;
var msg_name = cljs.core.get.call(null,map__34408__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__34406__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__34410){
var map__34411 = p__34410;
var map__34411__$1 = ((((!((map__34411 == null)))?(((((map__34411.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34411.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34411):map__34411);
var on_compile_warning = cljs.core.get.call(null,map__34411__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__34411__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__34411,map__34411__$1,on_compile_warning,on_compile_fail){
return (function (p__34413){
var vec__34414 = p__34413;
var seq__34415 = cljs.core.seq.call(null,vec__34414);
var first__34416 = cljs.core.first.call(null,seq__34415);
var seq__34415__$1 = cljs.core.next.call(null,seq__34415);
var map__34417 = first__34416;
var map__34417__$1 = ((((!((map__34417 == null)))?(((((map__34417.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34417.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34417):map__34417);
var msg = map__34417__$1;
var msg_name = cljs.core.get.call(null,map__34417__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__34415__$1;
var pred__34419 = cljs.core._EQ_;
var expr__34420 = msg_name;
if(cljs.core.truth_(pred__34419.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__34420))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__34419.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__34420))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__34411,map__34411__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__28406__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28406__auto__,msg_hist,msg_names,msg){
return (function (){
var f__28407__auto__ = (function (){var switch__28316__auto__ = ((function (c__28406__auto__,msg_hist,msg_names,msg){
return (function (state_34509){
var state_val_34510 = (state_34509[(1)]);
if((state_val_34510 === (7))){
var inst_34429 = (state_34509[(2)]);
var state_34509__$1 = state_34509;
if(cljs.core.truth_(inst_34429)){
var statearr_34511_34558 = state_34509__$1;
(statearr_34511_34558[(1)] = (8));

} else {
var statearr_34512_34559 = state_34509__$1;
(statearr_34512_34559[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34510 === (20))){
var inst_34503 = (state_34509[(2)]);
var state_34509__$1 = state_34509;
var statearr_34513_34560 = state_34509__$1;
(statearr_34513_34560[(2)] = inst_34503);

(statearr_34513_34560[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34510 === (27))){
var inst_34499 = (state_34509[(2)]);
var state_34509__$1 = state_34509;
var statearr_34514_34561 = state_34509__$1;
(statearr_34514_34561[(2)] = inst_34499);

(statearr_34514_34561[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34510 === (1))){
var inst_34422 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_34509__$1 = state_34509;
if(cljs.core.truth_(inst_34422)){
var statearr_34515_34562 = state_34509__$1;
(statearr_34515_34562[(1)] = (2));

} else {
var statearr_34516_34563 = state_34509__$1;
(statearr_34516_34563[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34510 === (24))){
var inst_34501 = (state_34509[(2)]);
var state_34509__$1 = state_34509;
var statearr_34517_34564 = state_34509__$1;
(statearr_34517_34564[(2)] = inst_34501);

(statearr_34517_34564[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34510 === (4))){
var inst_34507 = (state_34509[(2)]);
var state_34509__$1 = state_34509;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34509__$1,inst_34507);
} else {
if((state_val_34510 === (15))){
var inst_34505 = (state_34509[(2)]);
var state_34509__$1 = state_34509;
var statearr_34518_34565 = state_34509__$1;
(statearr_34518_34565[(2)] = inst_34505);

(statearr_34518_34565[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34510 === (21))){
var inst_34458 = (state_34509[(2)]);
var inst_34459 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34460 = figwheel.client.auto_jump_to_error.call(null,opts,inst_34459);
var state_34509__$1 = (function (){var statearr_34519 = state_34509;
(statearr_34519[(7)] = inst_34458);

return statearr_34519;
})();
var statearr_34520_34566 = state_34509__$1;
(statearr_34520_34566[(2)] = inst_34460);

(statearr_34520_34566[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34510 === (31))){
var inst_34488 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_34509__$1 = state_34509;
if(cljs.core.truth_(inst_34488)){
var statearr_34521_34567 = state_34509__$1;
(statearr_34521_34567[(1)] = (34));

} else {
var statearr_34522_34568 = state_34509__$1;
(statearr_34522_34568[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34510 === (32))){
var inst_34497 = (state_34509[(2)]);
var state_34509__$1 = state_34509;
var statearr_34523_34569 = state_34509__$1;
(statearr_34523_34569[(2)] = inst_34497);

(statearr_34523_34569[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34510 === (33))){
var inst_34484 = (state_34509[(2)]);
var inst_34485 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34486 = figwheel.client.auto_jump_to_error.call(null,opts,inst_34485);
var state_34509__$1 = (function (){var statearr_34524 = state_34509;
(statearr_34524[(8)] = inst_34484);

return statearr_34524;
})();
var statearr_34525_34570 = state_34509__$1;
(statearr_34525_34570[(2)] = inst_34486);

(statearr_34525_34570[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34510 === (13))){
var inst_34443 = figwheel.client.heads_up.clear.call(null);
var state_34509__$1 = state_34509;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34509__$1,(16),inst_34443);
} else {
if((state_val_34510 === (22))){
var inst_34464 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34465 = figwheel.client.heads_up.append_warning_message.call(null,inst_34464);
var state_34509__$1 = state_34509;
var statearr_34526_34571 = state_34509__$1;
(statearr_34526_34571[(2)] = inst_34465);

(statearr_34526_34571[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34510 === (36))){
var inst_34495 = (state_34509[(2)]);
var state_34509__$1 = state_34509;
var statearr_34527_34572 = state_34509__$1;
(statearr_34527_34572[(2)] = inst_34495);

(statearr_34527_34572[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34510 === (29))){
var inst_34475 = (state_34509[(2)]);
var inst_34476 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34477 = figwheel.client.auto_jump_to_error.call(null,opts,inst_34476);
var state_34509__$1 = (function (){var statearr_34528 = state_34509;
(statearr_34528[(9)] = inst_34475);

return statearr_34528;
})();
var statearr_34529_34573 = state_34509__$1;
(statearr_34529_34573[(2)] = inst_34477);

(statearr_34529_34573[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34510 === (6))){
var inst_34424 = (state_34509[(10)]);
var state_34509__$1 = state_34509;
var statearr_34530_34574 = state_34509__$1;
(statearr_34530_34574[(2)] = inst_34424);

(statearr_34530_34574[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34510 === (28))){
var inst_34471 = (state_34509[(2)]);
var inst_34472 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34473 = figwheel.client.heads_up.display_warning.call(null,inst_34472);
var state_34509__$1 = (function (){var statearr_34531 = state_34509;
(statearr_34531[(11)] = inst_34471);

return statearr_34531;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34509__$1,(29),inst_34473);
} else {
if((state_val_34510 === (25))){
var inst_34469 = figwheel.client.heads_up.clear.call(null);
var state_34509__$1 = state_34509;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34509__$1,(28),inst_34469);
} else {
if((state_val_34510 === (34))){
var inst_34490 = figwheel.client.heads_up.flash_loaded.call(null);
var state_34509__$1 = state_34509;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34509__$1,(37),inst_34490);
} else {
if((state_val_34510 === (17))){
var inst_34449 = (state_34509[(2)]);
var inst_34450 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34451 = figwheel.client.auto_jump_to_error.call(null,opts,inst_34450);
var state_34509__$1 = (function (){var statearr_34532 = state_34509;
(statearr_34532[(12)] = inst_34449);

return statearr_34532;
})();
var statearr_34533_34575 = state_34509__$1;
(statearr_34533_34575[(2)] = inst_34451);

(statearr_34533_34575[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34510 === (3))){
var inst_34441 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_34509__$1 = state_34509;
if(cljs.core.truth_(inst_34441)){
var statearr_34534_34576 = state_34509__$1;
(statearr_34534_34576[(1)] = (13));

} else {
var statearr_34535_34577 = state_34509__$1;
(statearr_34535_34577[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34510 === (12))){
var inst_34437 = (state_34509[(2)]);
var state_34509__$1 = state_34509;
var statearr_34536_34578 = state_34509__$1;
(statearr_34536_34578[(2)] = inst_34437);

(statearr_34536_34578[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34510 === (2))){
var inst_34424 = (state_34509[(10)]);
var inst_34424__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_34509__$1 = (function (){var statearr_34537 = state_34509;
(statearr_34537[(10)] = inst_34424__$1);

return statearr_34537;
})();
if(cljs.core.truth_(inst_34424__$1)){
var statearr_34538_34579 = state_34509__$1;
(statearr_34538_34579[(1)] = (5));

} else {
var statearr_34539_34580 = state_34509__$1;
(statearr_34539_34580[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34510 === (23))){
var inst_34467 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_34509__$1 = state_34509;
if(cljs.core.truth_(inst_34467)){
var statearr_34540_34581 = state_34509__$1;
(statearr_34540_34581[(1)] = (25));

} else {
var statearr_34541_34582 = state_34509__$1;
(statearr_34541_34582[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34510 === (35))){
var state_34509__$1 = state_34509;
var statearr_34542_34583 = state_34509__$1;
(statearr_34542_34583[(2)] = null);

(statearr_34542_34583[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34510 === (19))){
var inst_34462 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_34509__$1 = state_34509;
if(cljs.core.truth_(inst_34462)){
var statearr_34543_34584 = state_34509__$1;
(statearr_34543_34584[(1)] = (22));

} else {
var statearr_34544_34585 = state_34509__$1;
(statearr_34544_34585[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34510 === (11))){
var inst_34433 = (state_34509[(2)]);
var state_34509__$1 = state_34509;
var statearr_34545_34586 = state_34509__$1;
(statearr_34545_34586[(2)] = inst_34433);

(statearr_34545_34586[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34510 === (9))){
var inst_34435 = figwheel.client.heads_up.clear.call(null);
var state_34509__$1 = state_34509;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34509__$1,(12),inst_34435);
} else {
if((state_val_34510 === (5))){
var inst_34426 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_34509__$1 = state_34509;
var statearr_34546_34587 = state_34509__$1;
(statearr_34546_34587[(2)] = inst_34426);

(statearr_34546_34587[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34510 === (14))){
var inst_34453 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_34509__$1 = state_34509;
if(cljs.core.truth_(inst_34453)){
var statearr_34547_34588 = state_34509__$1;
(statearr_34547_34588[(1)] = (18));

} else {
var statearr_34548_34589 = state_34509__$1;
(statearr_34548_34589[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34510 === (26))){
var inst_34479 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_34509__$1 = state_34509;
if(cljs.core.truth_(inst_34479)){
var statearr_34549_34590 = state_34509__$1;
(statearr_34549_34590[(1)] = (30));

} else {
var statearr_34550_34591 = state_34509__$1;
(statearr_34550_34591[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34510 === (16))){
var inst_34445 = (state_34509[(2)]);
var inst_34446 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34447 = figwheel.client.heads_up.display_exception.call(null,inst_34446);
var state_34509__$1 = (function (){var statearr_34551 = state_34509;
(statearr_34551[(13)] = inst_34445);

return statearr_34551;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34509__$1,(17),inst_34447);
} else {
if((state_val_34510 === (30))){
var inst_34481 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34482 = figwheel.client.heads_up.display_warning.call(null,inst_34481);
var state_34509__$1 = state_34509;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34509__$1,(33),inst_34482);
} else {
if((state_val_34510 === (10))){
var inst_34439 = (state_34509[(2)]);
var state_34509__$1 = state_34509;
var statearr_34552_34592 = state_34509__$1;
(statearr_34552_34592[(2)] = inst_34439);

(statearr_34552_34592[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34510 === (18))){
var inst_34455 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34456 = figwheel.client.heads_up.display_exception.call(null,inst_34455);
var state_34509__$1 = state_34509;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34509__$1,(21),inst_34456);
} else {
if((state_val_34510 === (37))){
var inst_34492 = (state_34509[(2)]);
var state_34509__$1 = state_34509;
var statearr_34553_34593 = state_34509__$1;
(statearr_34553_34593[(2)] = inst_34492);

(statearr_34553_34593[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34510 === (8))){
var inst_34431 = figwheel.client.heads_up.flash_loaded.call(null);
var state_34509__$1 = state_34509;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34509__$1,(11),inst_34431);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28406__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__28316__auto__,c__28406__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28317__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28317__auto____0 = (function (){
var statearr_34554 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34554[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28317__auto__);

(statearr_34554[(1)] = (1));

return statearr_34554;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28317__auto____1 = (function (state_34509){
while(true){
var ret_value__28318__auto__ = (function (){try{while(true){
var result__28319__auto__ = switch__28316__auto__.call(null,state_34509);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28319__auto__;
}
break;
}
}catch (e34555){if((e34555 instanceof Object)){
var ex__28320__auto__ = e34555;
var statearr_34556_34594 = state_34509;
(statearr_34556_34594[(5)] = ex__28320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34509);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34555;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34595 = state_34509;
state_34509 = G__34595;
continue;
} else {
return ret_value__28318__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28317__auto__ = function(state_34509){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28317__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28317__auto____1.call(this,state_34509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28317__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28317__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28317__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28317__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28317__auto__;
})()
;})(switch__28316__auto__,c__28406__auto__,msg_hist,msg_names,msg))
})();
var state__28408__auto__ = (function (){var statearr_34557 = f__28407__auto__.call(null);
(statearr_34557[(6)] = c__28406__auto__);

return statearr_34557;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28408__auto__);
});})(c__28406__auto__,msg_hist,msg_names,msg))
);

return c__28406__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__28406__auto___34624 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28406__auto___34624,ch){
return (function (){
var f__28407__auto__ = (function (){var switch__28316__auto__ = ((function (c__28406__auto___34624,ch){
return (function (state_34610){
var state_val_34611 = (state_34610[(1)]);
if((state_val_34611 === (1))){
var state_34610__$1 = state_34610;
var statearr_34612_34625 = state_34610__$1;
(statearr_34612_34625[(2)] = null);

(statearr_34612_34625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34611 === (2))){
var state_34610__$1 = state_34610;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34610__$1,(4),ch);
} else {
if((state_val_34611 === (3))){
var inst_34608 = (state_34610[(2)]);
var state_34610__$1 = state_34610;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34610__$1,inst_34608);
} else {
if((state_val_34611 === (4))){
var inst_34598 = (state_34610[(7)]);
var inst_34598__$1 = (state_34610[(2)]);
var state_34610__$1 = (function (){var statearr_34613 = state_34610;
(statearr_34613[(7)] = inst_34598__$1);

return statearr_34613;
})();
if(cljs.core.truth_(inst_34598__$1)){
var statearr_34614_34626 = state_34610__$1;
(statearr_34614_34626[(1)] = (5));

} else {
var statearr_34615_34627 = state_34610__$1;
(statearr_34615_34627[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34611 === (5))){
var inst_34598 = (state_34610[(7)]);
var inst_34600 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_34598);
var state_34610__$1 = state_34610;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34610__$1,(8),inst_34600);
} else {
if((state_val_34611 === (6))){
var state_34610__$1 = state_34610;
var statearr_34616_34628 = state_34610__$1;
(statearr_34616_34628[(2)] = null);

(statearr_34616_34628[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34611 === (7))){
var inst_34606 = (state_34610[(2)]);
var state_34610__$1 = state_34610;
var statearr_34617_34629 = state_34610__$1;
(statearr_34617_34629[(2)] = inst_34606);

(statearr_34617_34629[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34611 === (8))){
var inst_34602 = (state_34610[(2)]);
var state_34610__$1 = (function (){var statearr_34618 = state_34610;
(statearr_34618[(8)] = inst_34602);

return statearr_34618;
})();
var statearr_34619_34630 = state_34610__$1;
(statearr_34619_34630[(2)] = null);

(statearr_34619_34630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__28406__auto___34624,ch))
;
return ((function (switch__28316__auto__,c__28406__auto___34624,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__28317__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__28317__auto____0 = (function (){
var statearr_34620 = [null,null,null,null,null,null,null,null,null];
(statearr_34620[(0)] = figwheel$client$heads_up_plugin_$_state_machine__28317__auto__);

(statearr_34620[(1)] = (1));

return statearr_34620;
});
var figwheel$client$heads_up_plugin_$_state_machine__28317__auto____1 = (function (state_34610){
while(true){
var ret_value__28318__auto__ = (function (){try{while(true){
var result__28319__auto__ = switch__28316__auto__.call(null,state_34610);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28319__auto__;
}
break;
}
}catch (e34621){if((e34621 instanceof Object)){
var ex__28320__auto__ = e34621;
var statearr_34622_34631 = state_34610;
(statearr_34622_34631[(5)] = ex__28320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34610);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34621;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34632 = state_34610;
state_34610 = G__34632;
continue;
} else {
return ret_value__28318__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__28317__auto__ = function(state_34610){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__28317__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__28317__auto____1.call(this,state_34610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__28317__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__28317__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__28317__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__28317__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__28317__auto__;
})()
;})(switch__28316__auto__,c__28406__auto___34624,ch))
})();
var state__28408__auto__ = (function (){var statearr_34623 = f__28407__auto__.call(null);
(statearr_34623[(6)] = c__28406__auto___34624);

return statearr_34623;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28408__auto__);
});})(c__28406__auto___34624,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__28406__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28406__auto__){
return (function (){
var f__28407__auto__ = (function (){var switch__28316__auto__ = ((function (c__28406__auto__){
return (function (state_34638){
var state_val_34639 = (state_34638[(1)]);
if((state_val_34639 === (1))){
var inst_34633 = cljs.core.async.timeout.call(null,(3000));
var state_34638__$1 = state_34638;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34638__$1,(2),inst_34633);
} else {
if((state_val_34639 === (2))){
var inst_34635 = (state_34638[(2)]);
var inst_34636 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_34638__$1 = (function (){var statearr_34640 = state_34638;
(statearr_34640[(7)] = inst_34635);

return statearr_34640;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34638__$1,inst_34636);
} else {
return null;
}
}
});})(c__28406__auto__))
;
return ((function (switch__28316__auto__,c__28406__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__28317__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__28317__auto____0 = (function (){
var statearr_34641 = [null,null,null,null,null,null,null,null];
(statearr_34641[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__28317__auto__);

(statearr_34641[(1)] = (1));

return statearr_34641;
});
var figwheel$client$enforce_project_plugin_$_state_machine__28317__auto____1 = (function (state_34638){
while(true){
var ret_value__28318__auto__ = (function (){try{while(true){
var result__28319__auto__ = switch__28316__auto__.call(null,state_34638);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28319__auto__;
}
break;
}
}catch (e34642){if((e34642 instanceof Object)){
var ex__28320__auto__ = e34642;
var statearr_34643_34645 = state_34638;
(statearr_34643_34645[(5)] = ex__28320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34638);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34642;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34646 = state_34638;
state_34638 = G__34646;
continue;
} else {
return ret_value__28318__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__28317__auto__ = function(state_34638){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__28317__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__28317__auto____1.call(this,state_34638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__28317__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__28317__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__28317__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__28317__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__28317__auto__;
})()
;})(switch__28316__auto__,c__28406__auto__))
})();
var state__28408__auto__ = (function (){var statearr_34644 = f__28407__auto__.call(null);
(statearr_34644[(6)] = c__28406__auto__);

return statearr_34644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28408__auto__);
});})(c__28406__auto__))
);

return c__28406__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__28406__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28406__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__28407__auto__ = (function (){var switch__28316__auto__ = ((function (c__28406__auto__,figwheel_version,temp__5457__auto__){
return (function (state_34653){
var state_val_34654 = (state_34653[(1)]);
if((state_val_34654 === (1))){
var inst_34647 = cljs.core.async.timeout.call(null,(2000));
var state_34653__$1 = state_34653;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34653__$1,(2),inst_34647);
} else {
if((state_val_34654 === (2))){
var inst_34649 = (state_34653[(2)]);
var inst_34650 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_34651 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_34650);
var state_34653__$1 = (function (){var statearr_34655 = state_34653;
(statearr_34655[(7)] = inst_34649);

return statearr_34655;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34653__$1,inst_34651);
} else {
return null;
}
}
});})(c__28406__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__28316__auto__,c__28406__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28317__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28317__auto____0 = (function (){
var statearr_34656 = [null,null,null,null,null,null,null,null];
(statearr_34656[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28317__auto__);

(statearr_34656[(1)] = (1));

return statearr_34656;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28317__auto____1 = (function (state_34653){
while(true){
var ret_value__28318__auto__ = (function (){try{while(true){
var result__28319__auto__ = switch__28316__auto__.call(null,state_34653);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28319__auto__;
}
break;
}
}catch (e34657){if((e34657 instanceof Object)){
var ex__28320__auto__ = e34657;
var statearr_34658_34660 = state_34653;
(statearr_34658_34660[(5)] = ex__28320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34653);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34657;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34661 = state_34653;
state_34653 = G__34661;
continue;
} else {
return ret_value__28318__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28317__auto__ = function(state_34653){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28317__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28317__auto____1.call(this,state_34653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28317__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28317__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28317__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28317__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28317__auto__;
})()
;})(switch__28316__auto__,c__28406__auto__,figwheel_version,temp__5457__auto__))
})();
var state__28408__auto__ = (function (){var statearr_34659 = f__28407__auto__.call(null);
(statearr_34659[(6)] = c__28406__auto__);

return statearr_34659;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28408__auto__);
});})(c__28406__auto__,figwheel_version,temp__5457__auto__))
);

return c__28406__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__34662){
var map__34663 = p__34662;
var map__34663__$1 = ((((!((map__34663 == null)))?(((((map__34663.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34663.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34663):map__34663);
var file = cljs.core.get.call(null,map__34663__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__34663__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__34663__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__34665 = "";
var G__34665__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34665),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__34665);
var G__34665__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34665__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__34665__$1);
if(cljs.core.truth_((function (){var and__3925__auto__ = line;
if(cljs.core.truth_(and__3925__auto__)){
return column;
} else {
return and__3925__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34665__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__34665__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__34666){
var map__34667 = p__34666;
var map__34667__$1 = ((((!((map__34667 == null)))?(((((map__34667.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34667.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34667):map__34667);
var ed = map__34667__$1;
var formatted_exception = cljs.core.get.call(null,map__34667__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__34667__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__34667__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__34669_34673 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__34670_34674 = null;
var count__34671_34675 = (0);
var i__34672_34676 = (0);
while(true){
if((i__34672_34676 < count__34671_34675)){
var msg_34677 = cljs.core._nth.call(null,chunk__34670_34674,i__34672_34676);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_34677);


var G__34678 = seq__34669_34673;
var G__34679 = chunk__34670_34674;
var G__34680 = count__34671_34675;
var G__34681 = (i__34672_34676 + (1));
seq__34669_34673 = G__34678;
chunk__34670_34674 = G__34679;
count__34671_34675 = G__34680;
i__34672_34676 = G__34681;
continue;
} else {
var temp__5457__auto___34682 = cljs.core.seq.call(null,seq__34669_34673);
if(temp__5457__auto___34682){
var seq__34669_34683__$1 = temp__5457__auto___34682;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34669_34683__$1)){
var c__4337__auto___34684 = cljs.core.chunk_first.call(null,seq__34669_34683__$1);
var G__34685 = cljs.core.chunk_rest.call(null,seq__34669_34683__$1);
var G__34686 = c__4337__auto___34684;
var G__34687 = cljs.core.count.call(null,c__4337__auto___34684);
var G__34688 = (0);
seq__34669_34673 = G__34685;
chunk__34670_34674 = G__34686;
count__34671_34675 = G__34687;
i__34672_34676 = G__34688;
continue;
} else {
var msg_34689 = cljs.core.first.call(null,seq__34669_34683__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_34689);


var G__34690 = cljs.core.next.call(null,seq__34669_34683__$1);
var G__34691 = null;
var G__34692 = (0);
var G__34693 = (0);
seq__34669_34673 = G__34690;
chunk__34670_34674 = G__34691;
count__34671_34675 = G__34692;
i__34672_34676 = G__34693;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__34694){
var map__34695 = p__34694;
var map__34695__$1 = ((((!((map__34695 == null)))?(((((map__34695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34695.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34695):map__34695);
var w = map__34695__$1;
var message = cljs.core.get.call(null,map__34695__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/cljs/out/figwheel/client.cljs",33,1,363,363,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/cljs/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__3925__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__3925__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__3925__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__34697 = cljs.core.seq.call(null,plugins);
var chunk__34698 = null;
var count__34699 = (0);
var i__34700 = (0);
while(true){
if((i__34700 < count__34699)){
var vec__34701 = cljs.core._nth.call(null,chunk__34698,i__34700);
var k = cljs.core.nth.call(null,vec__34701,(0),null);
var plugin = cljs.core.nth.call(null,vec__34701,(1),null);
if(cljs.core.truth_(plugin)){
var pl_34707 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__34697,chunk__34698,count__34699,i__34700,pl_34707,vec__34701,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_34707.call(null,msg_hist);
});})(seq__34697,chunk__34698,count__34699,i__34700,pl_34707,vec__34701,k,plugin))
);
} else {
}


var G__34708 = seq__34697;
var G__34709 = chunk__34698;
var G__34710 = count__34699;
var G__34711 = (i__34700 + (1));
seq__34697 = G__34708;
chunk__34698 = G__34709;
count__34699 = G__34710;
i__34700 = G__34711;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__34697);
if(temp__5457__auto__){
var seq__34697__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34697__$1)){
var c__4337__auto__ = cljs.core.chunk_first.call(null,seq__34697__$1);
var G__34712 = cljs.core.chunk_rest.call(null,seq__34697__$1);
var G__34713 = c__4337__auto__;
var G__34714 = cljs.core.count.call(null,c__4337__auto__);
var G__34715 = (0);
seq__34697 = G__34712;
chunk__34698 = G__34713;
count__34699 = G__34714;
i__34700 = G__34715;
continue;
} else {
var vec__34704 = cljs.core.first.call(null,seq__34697__$1);
var k = cljs.core.nth.call(null,vec__34704,(0),null);
var plugin = cljs.core.nth.call(null,vec__34704,(1),null);
if(cljs.core.truth_(plugin)){
var pl_34716 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__34697,chunk__34698,count__34699,i__34700,pl_34716,vec__34704,k,plugin,seq__34697__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_34716.call(null,msg_hist);
});})(seq__34697,chunk__34698,count__34699,i__34700,pl_34716,vec__34704,k,plugin,seq__34697__$1,temp__5457__auto__))
);
} else {
}


var G__34717 = cljs.core.next.call(null,seq__34697__$1);
var G__34718 = null;
var G__34719 = (0);
var G__34720 = (0);
seq__34697 = G__34717;
chunk__34698 = G__34718;
count__34699 = G__34719;
i__34700 = G__34720;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__34722 = arguments.length;
switch (G__34722) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__34723_34728 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__34724_34729 = null;
var count__34725_34730 = (0);
var i__34726_34731 = (0);
while(true){
if((i__34726_34731 < count__34725_34730)){
var msg_34732 = cljs.core._nth.call(null,chunk__34724_34729,i__34726_34731);
figwheel.client.socket.handle_incoming_message.call(null,msg_34732);


var G__34733 = seq__34723_34728;
var G__34734 = chunk__34724_34729;
var G__34735 = count__34725_34730;
var G__34736 = (i__34726_34731 + (1));
seq__34723_34728 = G__34733;
chunk__34724_34729 = G__34734;
count__34725_34730 = G__34735;
i__34726_34731 = G__34736;
continue;
} else {
var temp__5457__auto___34737 = cljs.core.seq.call(null,seq__34723_34728);
if(temp__5457__auto___34737){
var seq__34723_34738__$1 = temp__5457__auto___34737;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34723_34738__$1)){
var c__4337__auto___34739 = cljs.core.chunk_first.call(null,seq__34723_34738__$1);
var G__34740 = cljs.core.chunk_rest.call(null,seq__34723_34738__$1);
var G__34741 = c__4337__auto___34739;
var G__34742 = cljs.core.count.call(null,c__4337__auto___34739);
var G__34743 = (0);
seq__34723_34728 = G__34740;
chunk__34724_34729 = G__34741;
count__34725_34730 = G__34742;
i__34726_34731 = G__34743;
continue;
} else {
var msg_34744 = cljs.core.first.call(null,seq__34723_34738__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_34744);


var G__34745 = cljs.core.next.call(null,seq__34723_34738__$1);
var G__34746 = null;
var G__34747 = (0);
var G__34748 = (0);
seq__34723_34728 = G__34745;
chunk__34724_34729 = G__34746;
count__34725_34730 = G__34747;
i__34726_34731 = G__34748;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4520__auto__ = [];
var len__4517__auto___34753 = arguments.length;
var i__4518__auto___34754 = (0);
while(true){
if((i__4518__auto___34754 < len__4517__auto___34753)){
args__4520__auto__.push((arguments[i__4518__auto___34754]));

var G__34755 = (i__4518__auto___34754 + (1));
i__4518__auto___34754 = G__34755;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__34750){
var map__34751 = p__34750;
var map__34751__$1 = ((((!((map__34751 == null)))?(((((map__34751.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34751.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34751):map__34751);
var opts = map__34751__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq34749){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34749));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e34756){if((e34756 instanceof Error)){
var e = e34756;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e34756;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__34757){
var map__34758 = p__34757;
var map__34758__$1 = ((((!((map__34758 == null)))?(((((map__34758.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34758.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34758):map__34758);
var msg_name = cljs.core.get.call(null,map__34758__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1531390890837
