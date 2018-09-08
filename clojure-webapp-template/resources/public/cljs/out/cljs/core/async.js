// Compiled by ClojureScript 1.10.312 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__28466 = arguments.length;
switch (G__28466) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28467 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28467 = (function (f,blockable,meta28468){
this.f = f;
this.blockable = blockable;
this.meta28468 = meta28468;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28467.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28469,meta28468__$1){
var self__ = this;
var _28469__$1 = this;
return (new cljs.core.async.t_cljs$core$async28467(self__.f,self__.blockable,meta28468__$1));
});

cljs.core.async.t_cljs$core$async28467.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28469){
var self__ = this;
var _28469__$1 = this;
return self__.meta28468;
});

cljs.core.async.t_cljs$core$async28467.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28467.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28467.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async28467.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async28467.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta28468","meta28468",-626638101,null)], null);
});

cljs.core.async.t_cljs$core$async28467.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28467.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28467";

cljs.core.async.t_cljs$core$async28467.cljs$lang$ctorPrWriter = (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write.call(null,writer__4180__auto__,"cljs.core.async/t_cljs$core$async28467");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28467.
 */
cljs.core.async.__GT_t_cljs$core$async28467 = (function cljs$core$async$__GT_t_cljs$core$async28467(f__$1,blockable__$1,meta28468){
return (new cljs.core.async.t_cljs$core$async28467(f__$1,blockable__$1,meta28468));
});

}

return (new cljs.core.async.t_cljs$core$async28467(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__28473 = arguments.length;
switch (G__28473) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__28476 = arguments.length;
switch (G__28476) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__28479 = arguments.length;
switch (G__28479) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_28481 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_28481);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_28481,ret){
return (function (){
return fn1.call(null,val_28481);
});})(val_28481,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__28483 = arguments.length;
switch (G__28483) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4394__auto___28485 = n;
var x_28486 = (0);
while(true){
if((x_28486 < n__4394__auto___28485)){
(a[x_28486] = (0));

var G__28487 = (x_28486 + (1));
x_28486 = G__28487;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__28488 = (i + (1));
i = G__28488;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28489 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28489 = (function (flag,meta28490){
this.flag = flag;
this.meta28490 = meta28490;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28489.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_28491,meta28490__$1){
var self__ = this;
var _28491__$1 = this;
return (new cljs.core.async.t_cljs$core$async28489(self__.flag,meta28490__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async28489.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_28491){
var self__ = this;
var _28491__$1 = this;
return self__.meta28490;
});})(flag))
;

cljs.core.async.t_cljs$core$async28489.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28489.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async28489.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28489.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28489.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28490","meta28490",1094013877,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async28489.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28489.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28489";

cljs.core.async.t_cljs$core$async28489.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write.call(null,writer__4180__auto__,"cljs.core.async/t_cljs$core$async28489");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28489.
 */
cljs.core.async.__GT_t_cljs$core$async28489 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async28489(flag__$1,meta28490){
return (new cljs.core.async.t_cljs$core$async28489(flag__$1,meta28490));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async28489(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28492 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28492 = (function (flag,cb,meta28493){
this.flag = flag;
this.cb = cb;
this.meta28493 = meta28493;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28492.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28494,meta28493__$1){
var self__ = this;
var _28494__$1 = this;
return (new cljs.core.async.t_cljs$core$async28492(self__.flag,self__.cb,meta28493__$1));
});

cljs.core.async.t_cljs$core$async28492.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28494){
var self__ = this;
var _28494__$1 = this;
return self__.meta28493;
});

cljs.core.async.t_cljs$core$async28492.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28492.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async28492.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28492.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async28492.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28493","meta28493",-1091759806,null)], null);
});

cljs.core.async.t_cljs$core$async28492.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28492.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28492";

cljs.core.async.t_cljs$core$async28492.cljs$lang$ctorPrWriter = (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write.call(null,writer__4180__auto__,"cljs.core.async/t_cljs$core$async28492");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28492.
 */
cljs.core.async.__GT_t_cljs$core$async28492 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async28492(flag__$1,cb__$1,meta28493){
return (new cljs.core.async.t_cljs$core$async28492(flag__$1,cb__$1,meta28493));
});

}

return (new cljs.core.async.t_cljs$core$async28492(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28495_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28495_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28496_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28496_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3936__auto__ = wport;
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return port;
}
})()], null));
} else {
var G__28497 = (i + (1));
i = G__28497;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3936__auto__ = ret;
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3925__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3925__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3925__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4520__auto__ = [];
var len__4517__auto___28503 = arguments.length;
var i__4518__auto___28504 = (0);
while(true){
if((i__4518__auto___28504 < len__4517__auto___28503)){
args__4520__auto__.push((arguments[i__4518__auto___28504]));

var G__28505 = (i__4518__auto___28504 + (1));
i__4518__auto___28504 = G__28505;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((1) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4521__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28500){
var map__28501 = p__28500;
var map__28501__$1 = ((((!((map__28501 == null)))?(((((map__28501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28501.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28501):map__28501);
var opts = map__28501__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28498){
var G__28499 = cljs.core.first.call(null,seq28498);
var seq28498__$1 = cljs.core.next.call(null,seq28498);
var self__4504__auto__ = this;
return self__4504__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28499,seq28498__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__28507 = arguments.length;
switch (G__28507) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28406__auto___28553 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28406__auto___28553){
return (function (){
var f__28407__auto__ = (function (){var switch__28316__auto__ = ((function (c__28406__auto___28553){
return (function (state_28531){
var state_val_28532 = (state_28531[(1)]);
if((state_val_28532 === (7))){
var inst_28527 = (state_28531[(2)]);
var state_28531__$1 = state_28531;
var statearr_28533_28554 = state_28531__$1;
(statearr_28533_28554[(2)] = inst_28527);

(statearr_28533_28554[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28532 === (1))){
var state_28531__$1 = state_28531;
var statearr_28534_28555 = state_28531__$1;
(statearr_28534_28555[(2)] = null);

(statearr_28534_28555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28532 === (4))){
var inst_28510 = (state_28531[(7)]);
var inst_28510__$1 = (state_28531[(2)]);
var inst_28511 = (inst_28510__$1 == null);
var state_28531__$1 = (function (){var statearr_28535 = state_28531;
(statearr_28535[(7)] = inst_28510__$1);

return statearr_28535;
})();
if(cljs.core.truth_(inst_28511)){
var statearr_28536_28556 = state_28531__$1;
(statearr_28536_28556[(1)] = (5));

} else {
var statearr_28537_28557 = state_28531__$1;
(statearr_28537_28557[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28532 === (13))){
var state_28531__$1 = state_28531;
var statearr_28538_28558 = state_28531__$1;
(statearr_28538_28558[(2)] = null);

(statearr_28538_28558[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28532 === (6))){
var inst_28510 = (state_28531[(7)]);
var state_28531__$1 = state_28531;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28531__$1,(11),to,inst_28510);
} else {
if((state_val_28532 === (3))){
var inst_28529 = (state_28531[(2)]);
var state_28531__$1 = state_28531;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28531__$1,inst_28529);
} else {
if((state_val_28532 === (12))){
var state_28531__$1 = state_28531;
var statearr_28539_28559 = state_28531__$1;
(statearr_28539_28559[(2)] = null);

(statearr_28539_28559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28532 === (2))){
var state_28531__$1 = state_28531;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28531__$1,(4),from);
} else {
if((state_val_28532 === (11))){
var inst_28520 = (state_28531[(2)]);
var state_28531__$1 = state_28531;
if(cljs.core.truth_(inst_28520)){
var statearr_28540_28560 = state_28531__$1;
(statearr_28540_28560[(1)] = (12));

} else {
var statearr_28541_28561 = state_28531__$1;
(statearr_28541_28561[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28532 === (9))){
var state_28531__$1 = state_28531;
var statearr_28542_28562 = state_28531__$1;
(statearr_28542_28562[(2)] = null);

(statearr_28542_28562[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28532 === (5))){
var state_28531__$1 = state_28531;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28543_28563 = state_28531__$1;
(statearr_28543_28563[(1)] = (8));

} else {
var statearr_28544_28564 = state_28531__$1;
(statearr_28544_28564[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28532 === (14))){
var inst_28525 = (state_28531[(2)]);
var state_28531__$1 = state_28531;
var statearr_28545_28565 = state_28531__$1;
(statearr_28545_28565[(2)] = inst_28525);

(statearr_28545_28565[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28532 === (10))){
var inst_28517 = (state_28531[(2)]);
var state_28531__$1 = state_28531;
var statearr_28546_28566 = state_28531__$1;
(statearr_28546_28566[(2)] = inst_28517);

(statearr_28546_28566[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28532 === (8))){
var inst_28514 = cljs.core.async.close_BANG_.call(null,to);
var state_28531__$1 = state_28531;
var statearr_28547_28567 = state_28531__$1;
(statearr_28547_28567[(2)] = inst_28514);

(statearr_28547_28567[(1)] = (10));


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
});})(c__28406__auto___28553))
;
return ((function (switch__28316__auto__,c__28406__auto___28553){
return (function() {
var cljs$core$async$state_machine__28317__auto__ = null;
var cljs$core$async$state_machine__28317__auto____0 = (function (){
var statearr_28548 = [null,null,null,null,null,null,null,null];
(statearr_28548[(0)] = cljs$core$async$state_machine__28317__auto__);

(statearr_28548[(1)] = (1));

return statearr_28548;
});
var cljs$core$async$state_machine__28317__auto____1 = (function (state_28531){
while(true){
var ret_value__28318__auto__ = (function (){try{while(true){
var result__28319__auto__ = switch__28316__auto__.call(null,state_28531);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28319__auto__;
}
break;
}
}catch (e28549){if((e28549 instanceof Object)){
var ex__28320__auto__ = e28549;
var statearr_28550_28568 = state_28531;
(statearr_28550_28568[(5)] = ex__28320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28531);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28549;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28569 = state_28531;
state_28531 = G__28569;
continue;
} else {
return ret_value__28318__auto__;
}
break;
}
});
cljs$core$async$state_machine__28317__auto__ = function(state_28531){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28317__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28317__auto____1.call(this,state_28531);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28317__auto____0;
cljs$core$async$state_machine__28317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28317__auto____1;
return cljs$core$async$state_machine__28317__auto__;
})()
;})(switch__28316__auto__,c__28406__auto___28553))
})();
var state__28408__auto__ = (function (){var statearr_28551 = f__28407__auto__.call(null);
(statearr_28551[(6)] = c__28406__auto___28553);

return statearr_28551;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28408__auto__);
});})(c__28406__auto___28553))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__28570){
var vec__28571 = p__28570;
var v = cljs.core.nth.call(null,vec__28571,(0),null);
var p = cljs.core.nth.call(null,vec__28571,(1),null);
var job = vec__28571;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__28406__auto___28742 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28406__auto___28742,res,vec__28571,v,p,job,jobs,results){
return (function (){
var f__28407__auto__ = (function (){var switch__28316__auto__ = ((function (c__28406__auto___28742,res,vec__28571,v,p,job,jobs,results){
return (function (state_28578){
var state_val_28579 = (state_28578[(1)]);
if((state_val_28579 === (1))){
var state_28578__$1 = state_28578;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28578__$1,(2),res,v);
} else {
if((state_val_28579 === (2))){
var inst_28575 = (state_28578[(2)]);
var inst_28576 = cljs.core.async.close_BANG_.call(null,res);
var state_28578__$1 = (function (){var statearr_28580 = state_28578;
(statearr_28580[(7)] = inst_28575);

return statearr_28580;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28578__$1,inst_28576);
} else {
return null;
}
}
});})(c__28406__auto___28742,res,vec__28571,v,p,job,jobs,results))
;
return ((function (switch__28316__auto__,c__28406__auto___28742,res,vec__28571,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28317__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28317__auto____0 = (function (){
var statearr_28581 = [null,null,null,null,null,null,null,null];
(statearr_28581[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28317__auto__);

(statearr_28581[(1)] = (1));

return statearr_28581;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28317__auto____1 = (function (state_28578){
while(true){
var ret_value__28318__auto__ = (function (){try{while(true){
var result__28319__auto__ = switch__28316__auto__.call(null,state_28578);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28319__auto__;
}
break;
}
}catch (e28582){if((e28582 instanceof Object)){
var ex__28320__auto__ = e28582;
var statearr_28583_28743 = state_28578;
(statearr_28583_28743[(5)] = ex__28320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28578);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28582;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28744 = state_28578;
state_28578 = G__28744;
continue;
} else {
return ret_value__28318__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28317__auto__ = function(state_28578){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28317__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28317__auto____1.call(this,state_28578);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28317__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28317__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28317__auto__;
})()
;})(switch__28316__auto__,c__28406__auto___28742,res,vec__28571,v,p,job,jobs,results))
})();
var state__28408__auto__ = (function (){var statearr_28584 = f__28407__auto__.call(null);
(statearr_28584[(6)] = c__28406__auto___28742);

return statearr_28584;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28408__auto__);
});})(c__28406__auto___28742,res,vec__28571,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__28585){
var vec__28586 = p__28585;
var v = cljs.core.nth.call(null,vec__28586,(0),null);
var p = cljs.core.nth.call(null,vec__28586,(1),null);
var job = vec__28586;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4394__auto___28745 = n;
var __28746 = (0);
while(true){
if((__28746 < n__4394__auto___28745)){
var G__28589_28747 = type;
var G__28589_28748__$1 = (((G__28589_28747 instanceof cljs.core.Keyword))?G__28589_28747.fqn:null);
switch (G__28589_28748__$1) {
case "compute":
var c__28406__auto___28750 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28746,c__28406__auto___28750,G__28589_28747,G__28589_28748__$1,n__4394__auto___28745,jobs,results,process,async){
return (function (){
var f__28407__auto__ = (function (){var switch__28316__auto__ = ((function (__28746,c__28406__auto___28750,G__28589_28747,G__28589_28748__$1,n__4394__auto___28745,jobs,results,process,async){
return (function (state_28602){
var state_val_28603 = (state_28602[(1)]);
if((state_val_28603 === (1))){
var state_28602__$1 = state_28602;
var statearr_28604_28751 = state_28602__$1;
(statearr_28604_28751[(2)] = null);

(statearr_28604_28751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28603 === (2))){
var state_28602__$1 = state_28602;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28602__$1,(4),jobs);
} else {
if((state_val_28603 === (3))){
var inst_28600 = (state_28602[(2)]);
var state_28602__$1 = state_28602;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28602__$1,inst_28600);
} else {
if((state_val_28603 === (4))){
var inst_28592 = (state_28602[(2)]);
var inst_28593 = process.call(null,inst_28592);
var state_28602__$1 = state_28602;
if(cljs.core.truth_(inst_28593)){
var statearr_28605_28752 = state_28602__$1;
(statearr_28605_28752[(1)] = (5));

} else {
var statearr_28606_28753 = state_28602__$1;
(statearr_28606_28753[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28603 === (5))){
var state_28602__$1 = state_28602;
var statearr_28607_28754 = state_28602__$1;
(statearr_28607_28754[(2)] = null);

(statearr_28607_28754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28603 === (6))){
var state_28602__$1 = state_28602;
var statearr_28608_28755 = state_28602__$1;
(statearr_28608_28755[(2)] = null);

(statearr_28608_28755[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28603 === (7))){
var inst_28598 = (state_28602[(2)]);
var state_28602__$1 = state_28602;
var statearr_28609_28756 = state_28602__$1;
(statearr_28609_28756[(2)] = inst_28598);

(statearr_28609_28756[(1)] = (3));


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
});})(__28746,c__28406__auto___28750,G__28589_28747,G__28589_28748__$1,n__4394__auto___28745,jobs,results,process,async))
;
return ((function (__28746,switch__28316__auto__,c__28406__auto___28750,G__28589_28747,G__28589_28748__$1,n__4394__auto___28745,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28317__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28317__auto____0 = (function (){
var statearr_28610 = [null,null,null,null,null,null,null];
(statearr_28610[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28317__auto__);

(statearr_28610[(1)] = (1));

return statearr_28610;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28317__auto____1 = (function (state_28602){
while(true){
var ret_value__28318__auto__ = (function (){try{while(true){
var result__28319__auto__ = switch__28316__auto__.call(null,state_28602);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28319__auto__;
}
break;
}
}catch (e28611){if((e28611 instanceof Object)){
var ex__28320__auto__ = e28611;
var statearr_28612_28757 = state_28602;
(statearr_28612_28757[(5)] = ex__28320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28602);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28611;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28758 = state_28602;
state_28602 = G__28758;
continue;
} else {
return ret_value__28318__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28317__auto__ = function(state_28602){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28317__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28317__auto____1.call(this,state_28602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28317__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28317__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28317__auto__;
})()
;})(__28746,switch__28316__auto__,c__28406__auto___28750,G__28589_28747,G__28589_28748__$1,n__4394__auto___28745,jobs,results,process,async))
})();
var state__28408__auto__ = (function (){var statearr_28613 = f__28407__auto__.call(null);
(statearr_28613[(6)] = c__28406__auto___28750);

return statearr_28613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28408__auto__);
});})(__28746,c__28406__auto___28750,G__28589_28747,G__28589_28748__$1,n__4394__auto___28745,jobs,results,process,async))
);


break;
case "async":
var c__28406__auto___28759 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28746,c__28406__auto___28759,G__28589_28747,G__28589_28748__$1,n__4394__auto___28745,jobs,results,process,async){
return (function (){
var f__28407__auto__ = (function (){var switch__28316__auto__ = ((function (__28746,c__28406__auto___28759,G__28589_28747,G__28589_28748__$1,n__4394__auto___28745,jobs,results,process,async){
return (function (state_28626){
var state_val_28627 = (state_28626[(1)]);
if((state_val_28627 === (1))){
var state_28626__$1 = state_28626;
var statearr_28628_28760 = state_28626__$1;
(statearr_28628_28760[(2)] = null);

(statearr_28628_28760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28627 === (2))){
var state_28626__$1 = state_28626;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28626__$1,(4),jobs);
} else {
if((state_val_28627 === (3))){
var inst_28624 = (state_28626[(2)]);
var state_28626__$1 = state_28626;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28626__$1,inst_28624);
} else {
if((state_val_28627 === (4))){
var inst_28616 = (state_28626[(2)]);
var inst_28617 = async.call(null,inst_28616);
var state_28626__$1 = state_28626;
if(cljs.core.truth_(inst_28617)){
var statearr_28629_28761 = state_28626__$1;
(statearr_28629_28761[(1)] = (5));

} else {
var statearr_28630_28762 = state_28626__$1;
(statearr_28630_28762[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28627 === (5))){
var state_28626__$1 = state_28626;
var statearr_28631_28763 = state_28626__$1;
(statearr_28631_28763[(2)] = null);

(statearr_28631_28763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28627 === (6))){
var state_28626__$1 = state_28626;
var statearr_28632_28764 = state_28626__$1;
(statearr_28632_28764[(2)] = null);

(statearr_28632_28764[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28627 === (7))){
var inst_28622 = (state_28626[(2)]);
var state_28626__$1 = state_28626;
var statearr_28633_28765 = state_28626__$1;
(statearr_28633_28765[(2)] = inst_28622);

(statearr_28633_28765[(1)] = (3));


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
});})(__28746,c__28406__auto___28759,G__28589_28747,G__28589_28748__$1,n__4394__auto___28745,jobs,results,process,async))
;
return ((function (__28746,switch__28316__auto__,c__28406__auto___28759,G__28589_28747,G__28589_28748__$1,n__4394__auto___28745,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28317__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28317__auto____0 = (function (){
var statearr_28634 = [null,null,null,null,null,null,null];
(statearr_28634[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28317__auto__);

(statearr_28634[(1)] = (1));

return statearr_28634;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28317__auto____1 = (function (state_28626){
while(true){
var ret_value__28318__auto__ = (function (){try{while(true){
var result__28319__auto__ = switch__28316__auto__.call(null,state_28626);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28319__auto__;
}
break;
}
}catch (e28635){if((e28635 instanceof Object)){
var ex__28320__auto__ = e28635;
var statearr_28636_28766 = state_28626;
(statearr_28636_28766[(5)] = ex__28320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28626);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28635;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28767 = state_28626;
state_28626 = G__28767;
continue;
} else {
return ret_value__28318__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28317__auto__ = function(state_28626){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28317__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28317__auto____1.call(this,state_28626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28317__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28317__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28317__auto__;
})()
;})(__28746,switch__28316__auto__,c__28406__auto___28759,G__28589_28747,G__28589_28748__$1,n__4394__auto___28745,jobs,results,process,async))
})();
var state__28408__auto__ = (function (){var statearr_28637 = f__28407__auto__.call(null);
(statearr_28637[(6)] = c__28406__auto___28759);

return statearr_28637;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28408__auto__);
});})(__28746,c__28406__auto___28759,G__28589_28747,G__28589_28748__$1,n__4394__auto___28745,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28589_28748__$1)].join('')));

}

var G__28768 = (__28746 + (1));
__28746 = G__28768;
continue;
} else {
}
break;
}

var c__28406__auto___28769 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28406__auto___28769,jobs,results,process,async){
return (function (){
var f__28407__auto__ = (function (){var switch__28316__auto__ = ((function (c__28406__auto___28769,jobs,results,process,async){
return (function (state_28659){
var state_val_28660 = (state_28659[(1)]);
if((state_val_28660 === (1))){
var state_28659__$1 = state_28659;
var statearr_28661_28770 = state_28659__$1;
(statearr_28661_28770[(2)] = null);

(statearr_28661_28770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28660 === (2))){
var state_28659__$1 = state_28659;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28659__$1,(4),from);
} else {
if((state_val_28660 === (3))){
var inst_28657 = (state_28659[(2)]);
var state_28659__$1 = state_28659;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28659__$1,inst_28657);
} else {
if((state_val_28660 === (4))){
var inst_28640 = (state_28659[(7)]);
var inst_28640__$1 = (state_28659[(2)]);
var inst_28641 = (inst_28640__$1 == null);
var state_28659__$1 = (function (){var statearr_28662 = state_28659;
(statearr_28662[(7)] = inst_28640__$1);

return statearr_28662;
})();
if(cljs.core.truth_(inst_28641)){
var statearr_28663_28771 = state_28659__$1;
(statearr_28663_28771[(1)] = (5));

} else {
var statearr_28664_28772 = state_28659__$1;
(statearr_28664_28772[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28660 === (5))){
var inst_28643 = cljs.core.async.close_BANG_.call(null,jobs);
var state_28659__$1 = state_28659;
var statearr_28665_28773 = state_28659__$1;
(statearr_28665_28773[(2)] = inst_28643);

(statearr_28665_28773[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28660 === (6))){
var inst_28640 = (state_28659[(7)]);
var inst_28645 = (state_28659[(8)]);
var inst_28645__$1 = cljs.core.async.chan.call(null,(1));
var inst_28646 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28647 = [inst_28640,inst_28645__$1];
var inst_28648 = (new cljs.core.PersistentVector(null,2,(5),inst_28646,inst_28647,null));
var state_28659__$1 = (function (){var statearr_28666 = state_28659;
(statearr_28666[(8)] = inst_28645__$1);

return statearr_28666;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28659__$1,(8),jobs,inst_28648);
} else {
if((state_val_28660 === (7))){
var inst_28655 = (state_28659[(2)]);
var state_28659__$1 = state_28659;
var statearr_28667_28774 = state_28659__$1;
(statearr_28667_28774[(2)] = inst_28655);

(statearr_28667_28774[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28660 === (8))){
var inst_28645 = (state_28659[(8)]);
var inst_28650 = (state_28659[(2)]);
var state_28659__$1 = (function (){var statearr_28668 = state_28659;
(statearr_28668[(9)] = inst_28650);

return statearr_28668;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28659__$1,(9),results,inst_28645);
} else {
if((state_val_28660 === (9))){
var inst_28652 = (state_28659[(2)]);
var state_28659__$1 = (function (){var statearr_28669 = state_28659;
(statearr_28669[(10)] = inst_28652);

return statearr_28669;
})();
var statearr_28670_28775 = state_28659__$1;
(statearr_28670_28775[(2)] = null);

(statearr_28670_28775[(1)] = (2));


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
});})(c__28406__auto___28769,jobs,results,process,async))
;
return ((function (switch__28316__auto__,c__28406__auto___28769,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28317__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28317__auto____0 = (function (){
var statearr_28671 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28671[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28317__auto__);

(statearr_28671[(1)] = (1));

return statearr_28671;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28317__auto____1 = (function (state_28659){
while(true){
var ret_value__28318__auto__ = (function (){try{while(true){
var result__28319__auto__ = switch__28316__auto__.call(null,state_28659);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28319__auto__;
}
break;
}
}catch (e28672){if((e28672 instanceof Object)){
var ex__28320__auto__ = e28672;
var statearr_28673_28776 = state_28659;
(statearr_28673_28776[(5)] = ex__28320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28659);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28672;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28777 = state_28659;
state_28659 = G__28777;
continue;
} else {
return ret_value__28318__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28317__auto__ = function(state_28659){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28317__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28317__auto____1.call(this,state_28659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28317__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28317__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28317__auto__;
})()
;})(switch__28316__auto__,c__28406__auto___28769,jobs,results,process,async))
})();
var state__28408__auto__ = (function (){var statearr_28674 = f__28407__auto__.call(null);
(statearr_28674[(6)] = c__28406__auto___28769);

return statearr_28674;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28408__auto__);
});})(c__28406__auto___28769,jobs,results,process,async))
);


var c__28406__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28406__auto__,jobs,results,process,async){
return (function (){
var f__28407__auto__ = (function (){var switch__28316__auto__ = ((function (c__28406__auto__,jobs,results,process,async){
return (function (state_28712){
var state_val_28713 = (state_28712[(1)]);
if((state_val_28713 === (7))){
var inst_28708 = (state_28712[(2)]);
var state_28712__$1 = state_28712;
var statearr_28714_28778 = state_28712__$1;
(statearr_28714_28778[(2)] = inst_28708);

(statearr_28714_28778[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28713 === (20))){
var state_28712__$1 = state_28712;
var statearr_28715_28779 = state_28712__$1;
(statearr_28715_28779[(2)] = null);

(statearr_28715_28779[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28713 === (1))){
var state_28712__$1 = state_28712;
var statearr_28716_28780 = state_28712__$1;
(statearr_28716_28780[(2)] = null);

(statearr_28716_28780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28713 === (4))){
var inst_28677 = (state_28712[(7)]);
var inst_28677__$1 = (state_28712[(2)]);
var inst_28678 = (inst_28677__$1 == null);
var state_28712__$1 = (function (){var statearr_28717 = state_28712;
(statearr_28717[(7)] = inst_28677__$1);

return statearr_28717;
})();
if(cljs.core.truth_(inst_28678)){
var statearr_28718_28781 = state_28712__$1;
(statearr_28718_28781[(1)] = (5));

} else {
var statearr_28719_28782 = state_28712__$1;
(statearr_28719_28782[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28713 === (15))){
var inst_28690 = (state_28712[(8)]);
var state_28712__$1 = state_28712;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28712__$1,(18),to,inst_28690);
} else {
if((state_val_28713 === (21))){
var inst_28703 = (state_28712[(2)]);
var state_28712__$1 = state_28712;
var statearr_28720_28783 = state_28712__$1;
(statearr_28720_28783[(2)] = inst_28703);

(statearr_28720_28783[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28713 === (13))){
var inst_28705 = (state_28712[(2)]);
var state_28712__$1 = (function (){var statearr_28721 = state_28712;
(statearr_28721[(9)] = inst_28705);

return statearr_28721;
})();
var statearr_28722_28784 = state_28712__$1;
(statearr_28722_28784[(2)] = null);

(statearr_28722_28784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28713 === (6))){
var inst_28677 = (state_28712[(7)]);
var state_28712__$1 = state_28712;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28712__$1,(11),inst_28677);
} else {
if((state_val_28713 === (17))){
var inst_28698 = (state_28712[(2)]);
var state_28712__$1 = state_28712;
if(cljs.core.truth_(inst_28698)){
var statearr_28723_28785 = state_28712__$1;
(statearr_28723_28785[(1)] = (19));

} else {
var statearr_28724_28786 = state_28712__$1;
(statearr_28724_28786[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28713 === (3))){
var inst_28710 = (state_28712[(2)]);
var state_28712__$1 = state_28712;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28712__$1,inst_28710);
} else {
if((state_val_28713 === (12))){
var inst_28687 = (state_28712[(10)]);
var state_28712__$1 = state_28712;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28712__$1,(14),inst_28687);
} else {
if((state_val_28713 === (2))){
var state_28712__$1 = state_28712;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28712__$1,(4),results);
} else {
if((state_val_28713 === (19))){
var state_28712__$1 = state_28712;
var statearr_28725_28787 = state_28712__$1;
(statearr_28725_28787[(2)] = null);

(statearr_28725_28787[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28713 === (11))){
var inst_28687 = (state_28712[(2)]);
var state_28712__$1 = (function (){var statearr_28726 = state_28712;
(statearr_28726[(10)] = inst_28687);

return statearr_28726;
})();
var statearr_28727_28788 = state_28712__$1;
(statearr_28727_28788[(2)] = null);

(statearr_28727_28788[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28713 === (9))){
var state_28712__$1 = state_28712;
var statearr_28728_28789 = state_28712__$1;
(statearr_28728_28789[(2)] = null);

(statearr_28728_28789[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28713 === (5))){
var state_28712__$1 = state_28712;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28729_28790 = state_28712__$1;
(statearr_28729_28790[(1)] = (8));

} else {
var statearr_28730_28791 = state_28712__$1;
(statearr_28730_28791[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28713 === (14))){
var inst_28690 = (state_28712[(8)]);
var inst_28692 = (state_28712[(11)]);
var inst_28690__$1 = (state_28712[(2)]);
var inst_28691 = (inst_28690__$1 == null);
var inst_28692__$1 = cljs.core.not.call(null,inst_28691);
var state_28712__$1 = (function (){var statearr_28731 = state_28712;
(statearr_28731[(8)] = inst_28690__$1);

(statearr_28731[(11)] = inst_28692__$1);

return statearr_28731;
})();
if(inst_28692__$1){
var statearr_28732_28792 = state_28712__$1;
(statearr_28732_28792[(1)] = (15));

} else {
var statearr_28733_28793 = state_28712__$1;
(statearr_28733_28793[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28713 === (16))){
var inst_28692 = (state_28712[(11)]);
var state_28712__$1 = state_28712;
var statearr_28734_28794 = state_28712__$1;
(statearr_28734_28794[(2)] = inst_28692);

(statearr_28734_28794[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28713 === (10))){
var inst_28684 = (state_28712[(2)]);
var state_28712__$1 = state_28712;
var statearr_28735_28795 = state_28712__$1;
(statearr_28735_28795[(2)] = inst_28684);

(statearr_28735_28795[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28713 === (18))){
var inst_28695 = (state_28712[(2)]);
var state_28712__$1 = state_28712;
var statearr_28736_28796 = state_28712__$1;
(statearr_28736_28796[(2)] = inst_28695);

(statearr_28736_28796[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28713 === (8))){
var inst_28681 = cljs.core.async.close_BANG_.call(null,to);
var state_28712__$1 = state_28712;
var statearr_28737_28797 = state_28712__$1;
(statearr_28737_28797[(2)] = inst_28681);

(statearr_28737_28797[(1)] = (10));


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
}
}
}
}
});})(c__28406__auto__,jobs,results,process,async))
;
return ((function (switch__28316__auto__,c__28406__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28317__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28317__auto____0 = (function (){
var statearr_28738 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28738[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28317__auto__);

(statearr_28738[(1)] = (1));

return statearr_28738;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28317__auto____1 = (function (state_28712){
while(true){
var ret_value__28318__auto__ = (function (){try{while(true){
var result__28319__auto__ = switch__28316__auto__.call(null,state_28712);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28319__auto__;
}
break;
}
}catch (e28739){if((e28739 instanceof Object)){
var ex__28320__auto__ = e28739;
var statearr_28740_28798 = state_28712;
(statearr_28740_28798[(5)] = ex__28320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28712);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28739;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28799 = state_28712;
state_28712 = G__28799;
continue;
} else {
return ret_value__28318__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28317__auto__ = function(state_28712){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28317__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28317__auto____1.call(this,state_28712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28317__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28317__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28317__auto__;
})()
;})(switch__28316__auto__,c__28406__auto__,jobs,results,process,async))
})();
var state__28408__auto__ = (function (){var statearr_28741 = f__28407__auto__.call(null);
(statearr_28741[(6)] = c__28406__auto__);

return statearr_28741;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28408__auto__);
});})(c__28406__auto__,jobs,results,process,async))
);

return c__28406__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__28801 = arguments.length;
switch (G__28801) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__28804 = arguments.length;
switch (G__28804) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__28807 = arguments.length;
switch (G__28807) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__28406__auto___28856 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28406__auto___28856,tc,fc){
return (function (){
var f__28407__auto__ = (function (){var switch__28316__auto__ = ((function (c__28406__auto___28856,tc,fc){
return (function (state_28833){
var state_val_28834 = (state_28833[(1)]);
if((state_val_28834 === (7))){
var inst_28829 = (state_28833[(2)]);
var state_28833__$1 = state_28833;
var statearr_28835_28857 = state_28833__$1;
(statearr_28835_28857[(2)] = inst_28829);

(statearr_28835_28857[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28834 === (1))){
var state_28833__$1 = state_28833;
var statearr_28836_28858 = state_28833__$1;
(statearr_28836_28858[(2)] = null);

(statearr_28836_28858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28834 === (4))){
var inst_28810 = (state_28833[(7)]);
var inst_28810__$1 = (state_28833[(2)]);
var inst_28811 = (inst_28810__$1 == null);
var state_28833__$1 = (function (){var statearr_28837 = state_28833;
(statearr_28837[(7)] = inst_28810__$1);

return statearr_28837;
})();
if(cljs.core.truth_(inst_28811)){
var statearr_28838_28859 = state_28833__$1;
(statearr_28838_28859[(1)] = (5));

} else {
var statearr_28839_28860 = state_28833__$1;
(statearr_28839_28860[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28834 === (13))){
var state_28833__$1 = state_28833;
var statearr_28840_28861 = state_28833__$1;
(statearr_28840_28861[(2)] = null);

(statearr_28840_28861[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28834 === (6))){
var inst_28810 = (state_28833[(7)]);
var inst_28816 = p.call(null,inst_28810);
var state_28833__$1 = state_28833;
if(cljs.core.truth_(inst_28816)){
var statearr_28841_28862 = state_28833__$1;
(statearr_28841_28862[(1)] = (9));

} else {
var statearr_28842_28863 = state_28833__$1;
(statearr_28842_28863[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28834 === (3))){
var inst_28831 = (state_28833[(2)]);
var state_28833__$1 = state_28833;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28833__$1,inst_28831);
} else {
if((state_val_28834 === (12))){
var state_28833__$1 = state_28833;
var statearr_28843_28864 = state_28833__$1;
(statearr_28843_28864[(2)] = null);

(statearr_28843_28864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28834 === (2))){
var state_28833__$1 = state_28833;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28833__$1,(4),ch);
} else {
if((state_val_28834 === (11))){
var inst_28810 = (state_28833[(7)]);
var inst_28820 = (state_28833[(2)]);
var state_28833__$1 = state_28833;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28833__$1,(8),inst_28820,inst_28810);
} else {
if((state_val_28834 === (9))){
var state_28833__$1 = state_28833;
var statearr_28844_28865 = state_28833__$1;
(statearr_28844_28865[(2)] = tc);

(statearr_28844_28865[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28834 === (5))){
var inst_28813 = cljs.core.async.close_BANG_.call(null,tc);
var inst_28814 = cljs.core.async.close_BANG_.call(null,fc);
var state_28833__$1 = (function (){var statearr_28845 = state_28833;
(statearr_28845[(8)] = inst_28813);

return statearr_28845;
})();
var statearr_28846_28866 = state_28833__$1;
(statearr_28846_28866[(2)] = inst_28814);

(statearr_28846_28866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28834 === (14))){
var inst_28827 = (state_28833[(2)]);
var state_28833__$1 = state_28833;
var statearr_28847_28867 = state_28833__$1;
(statearr_28847_28867[(2)] = inst_28827);

(statearr_28847_28867[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28834 === (10))){
var state_28833__$1 = state_28833;
var statearr_28848_28868 = state_28833__$1;
(statearr_28848_28868[(2)] = fc);

(statearr_28848_28868[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28834 === (8))){
var inst_28822 = (state_28833[(2)]);
var state_28833__$1 = state_28833;
if(cljs.core.truth_(inst_28822)){
var statearr_28849_28869 = state_28833__$1;
(statearr_28849_28869[(1)] = (12));

} else {
var statearr_28850_28870 = state_28833__$1;
(statearr_28850_28870[(1)] = (13));

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
});})(c__28406__auto___28856,tc,fc))
;
return ((function (switch__28316__auto__,c__28406__auto___28856,tc,fc){
return (function() {
var cljs$core$async$state_machine__28317__auto__ = null;
var cljs$core$async$state_machine__28317__auto____0 = (function (){
var statearr_28851 = [null,null,null,null,null,null,null,null,null];
(statearr_28851[(0)] = cljs$core$async$state_machine__28317__auto__);

(statearr_28851[(1)] = (1));

return statearr_28851;
});
var cljs$core$async$state_machine__28317__auto____1 = (function (state_28833){
while(true){
var ret_value__28318__auto__ = (function (){try{while(true){
var result__28319__auto__ = switch__28316__auto__.call(null,state_28833);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28319__auto__;
}
break;
}
}catch (e28852){if((e28852 instanceof Object)){
var ex__28320__auto__ = e28852;
var statearr_28853_28871 = state_28833;
(statearr_28853_28871[(5)] = ex__28320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28833);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28852;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28872 = state_28833;
state_28833 = G__28872;
continue;
} else {
return ret_value__28318__auto__;
}
break;
}
});
cljs$core$async$state_machine__28317__auto__ = function(state_28833){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28317__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28317__auto____1.call(this,state_28833);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28317__auto____0;
cljs$core$async$state_machine__28317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28317__auto____1;
return cljs$core$async$state_machine__28317__auto__;
})()
;})(switch__28316__auto__,c__28406__auto___28856,tc,fc))
})();
var state__28408__auto__ = (function (){var statearr_28854 = f__28407__auto__.call(null);
(statearr_28854[(6)] = c__28406__auto___28856);

return statearr_28854;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28408__auto__);
});})(c__28406__auto___28856,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__28406__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28406__auto__){
return (function (){
var f__28407__auto__ = (function (){var switch__28316__auto__ = ((function (c__28406__auto__){
return (function (state_28893){
var state_val_28894 = (state_28893[(1)]);
if((state_val_28894 === (7))){
var inst_28889 = (state_28893[(2)]);
var state_28893__$1 = state_28893;
var statearr_28895_28913 = state_28893__$1;
(statearr_28895_28913[(2)] = inst_28889);

(statearr_28895_28913[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28894 === (1))){
var inst_28873 = init;
var state_28893__$1 = (function (){var statearr_28896 = state_28893;
(statearr_28896[(7)] = inst_28873);

return statearr_28896;
})();
var statearr_28897_28914 = state_28893__$1;
(statearr_28897_28914[(2)] = null);

(statearr_28897_28914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28894 === (4))){
var inst_28876 = (state_28893[(8)]);
var inst_28876__$1 = (state_28893[(2)]);
var inst_28877 = (inst_28876__$1 == null);
var state_28893__$1 = (function (){var statearr_28898 = state_28893;
(statearr_28898[(8)] = inst_28876__$1);

return statearr_28898;
})();
if(cljs.core.truth_(inst_28877)){
var statearr_28899_28915 = state_28893__$1;
(statearr_28899_28915[(1)] = (5));

} else {
var statearr_28900_28916 = state_28893__$1;
(statearr_28900_28916[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28894 === (6))){
var inst_28873 = (state_28893[(7)]);
var inst_28876 = (state_28893[(8)]);
var inst_28880 = (state_28893[(9)]);
var inst_28880__$1 = f.call(null,inst_28873,inst_28876);
var inst_28881 = cljs.core.reduced_QMARK_.call(null,inst_28880__$1);
var state_28893__$1 = (function (){var statearr_28901 = state_28893;
(statearr_28901[(9)] = inst_28880__$1);

return statearr_28901;
})();
if(inst_28881){
var statearr_28902_28917 = state_28893__$1;
(statearr_28902_28917[(1)] = (8));

} else {
var statearr_28903_28918 = state_28893__$1;
(statearr_28903_28918[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28894 === (3))){
var inst_28891 = (state_28893[(2)]);
var state_28893__$1 = state_28893;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28893__$1,inst_28891);
} else {
if((state_val_28894 === (2))){
var state_28893__$1 = state_28893;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28893__$1,(4),ch);
} else {
if((state_val_28894 === (9))){
var inst_28880 = (state_28893[(9)]);
var inst_28873 = inst_28880;
var state_28893__$1 = (function (){var statearr_28904 = state_28893;
(statearr_28904[(7)] = inst_28873);

return statearr_28904;
})();
var statearr_28905_28919 = state_28893__$1;
(statearr_28905_28919[(2)] = null);

(statearr_28905_28919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28894 === (5))){
var inst_28873 = (state_28893[(7)]);
var state_28893__$1 = state_28893;
var statearr_28906_28920 = state_28893__$1;
(statearr_28906_28920[(2)] = inst_28873);

(statearr_28906_28920[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28894 === (10))){
var inst_28887 = (state_28893[(2)]);
var state_28893__$1 = state_28893;
var statearr_28907_28921 = state_28893__$1;
(statearr_28907_28921[(2)] = inst_28887);

(statearr_28907_28921[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28894 === (8))){
var inst_28880 = (state_28893[(9)]);
var inst_28883 = cljs.core.deref.call(null,inst_28880);
var state_28893__$1 = state_28893;
var statearr_28908_28922 = state_28893__$1;
(statearr_28908_28922[(2)] = inst_28883);

(statearr_28908_28922[(1)] = (10));


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
});})(c__28406__auto__))
;
return ((function (switch__28316__auto__,c__28406__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__28317__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28317__auto____0 = (function (){
var statearr_28909 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28909[(0)] = cljs$core$async$reduce_$_state_machine__28317__auto__);

(statearr_28909[(1)] = (1));

return statearr_28909;
});
var cljs$core$async$reduce_$_state_machine__28317__auto____1 = (function (state_28893){
while(true){
var ret_value__28318__auto__ = (function (){try{while(true){
var result__28319__auto__ = switch__28316__auto__.call(null,state_28893);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28319__auto__;
}
break;
}
}catch (e28910){if((e28910 instanceof Object)){
var ex__28320__auto__ = e28910;
var statearr_28911_28923 = state_28893;
(statearr_28911_28923[(5)] = ex__28320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28893);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28910;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28924 = state_28893;
state_28893 = G__28924;
continue;
} else {
return ret_value__28318__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28317__auto__ = function(state_28893){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28317__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28317__auto____1.call(this,state_28893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28317__auto____0;
cljs$core$async$reduce_$_state_machine__28317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28317__auto____1;
return cljs$core$async$reduce_$_state_machine__28317__auto__;
})()
;})(switch__28316__auto__,c__28406__auto__))
})();
var state__28408__auto__ = (function (){var statearr_28912 = f__28407__auto__.call(null);
(statearr_28912[(6)] = c__28406__auto__);

return statearr_28912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28408__auto__);
});})(c__28406__auto__))
);

return c__28406__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__28406__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28406__auto__,f__$1){
return (function (){
var f__28407__auto__ = (function (){var switch__28316__auto__ = ((function (c__28406__auto__,f__$1){
return (function (state_28930){
var state_val_28931 = (state_28930[(1)]);
if((state_val_28931 === (1))){
var inst_28925 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_28930__$1 = state_28930;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28930__$1,(2),inst_28925);
} else {
if((state_val_28931 === (2))){
var inst_28927 = (state_28930[(2)]);
var inst_28928 = f__$1.call(null,inst_28927);
var state_28930__$1 = state_28930;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28930__$1,inst_28928);
} else {
return null;
}
}
});})(c__28406__auto__,f__$1))
;
return ((function (switch__28316__auto__,c__28406__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__28317__auto__ = null;
var cljs$core$async$transduce_$_state_machine__28317__auto____0 = (function (){
var statearr_28932 = [null,null,null,null,null,null,null];
(statearr_28932[(0)] = cljs$core$async$transduce_$_state_machine__28317__auto__);

(statearr_28932[(1)] = (1));

return statearr_28932;
});
var cljs$core$async$transduce_$_state_machine__28317__auto____1 = (function (state_28930){
while(true){
var ret_value__28318__auto__ = (function (){try{while(true){
var result__28319__auto__ = switch__28316__auto__.call(null,state_28930);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28319__auto__;
}
break;
}
}catch (e28933){if((e28933 instanceof Object)){
var ex__28320__auto__ = e28933;
var statearr_28934_28936 = state_28930;
(statearr_28934_28936[(5)] = ex__28320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28930);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28933;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28937 = state_28930;
state_28930 = G__28937;
continue;
} else {
return ret_value__28318__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__28317__auto__ = function(state_28930){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__28317__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__28317__auto____1.call(this,state_28930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__28317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__28317__auto____0;
cljs$core$async$transduce_$_state_machine__28317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__28317__auto____1;
return cljs$core$async$transduce_$_state_machine__28317__auto__;
})()
;})(switch__28316__auto__,c__28406__auto__,f__$1))
})();
var state__28408__auto__ = (function (){var statearr_28935 = f__28407__auto__.call(null);
(statearr_28935[(6)] = c__28406__auto__);

return statearr_28935;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28408__auto__);
});})(c__28406__auto__,f__$1))
);

return c__28406__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__28939 = arguments.length;
switch (G__28939) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__28406__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28406__auto__){
return (function (){
var f__28407__auto__ = (function (){var switch__28316__auto__ = ((function (c__28406__auto__){
return (function (state_28964){
var state_val_28965 = (state_28964[(1)]);
if((state_val_28965 === (7))){
var inst_28946 = (state_28964[(2)]);
var state_28964__$1 = state_28964;
var statearr_28966_28987 = state_28964__$1;
(statearr_28966_28987[(2)] = inst_28946);

(statearr_28966_28987[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28965 === (1))){
var inst_28940 = cljs.core.seq.call(null,coll);
var inst_28941 = inst_28940;
var state_28964__$1 = (function (){var statearr_28967 = state_28964;
(statearr_28967[(7)] = inst_28941);

return statearr_28967;
})();
var statearr_28968_28988 = state_28964__$1;
(statearr_28968_28988[(2)] = null);

(statearr_28968_28988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28965 === (4))){
var inst_28941 = (state_28964[(7)]);
var inst_28944 = cljs.core.first.call(null,inst_28941);
var state_28964__$1 = state_28964;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28964__$1,(7),ch,inst_28944);
} else {
if((state_val_28965 === (13))){
var inst_28958 = (state_28964[(2)]);
var state_28964__$1 = state_28964;
var statearr_28969_28989 = state_28964__$1;
(statearr_28969_28989[(2)] = inst_28958);

(statearr_28969_28989[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28965 === (6))){
var inst_28949 = (state_28964[(2)]);
var state_28964__$1 = state_28964;
if(cljs.core.truth_(inst_28949)){
var statearr_28970_28990 = state_28964__$1;
(statearr_28970_28990[(1)] = (8));

} else {
var statearr_28971_28991 = state_28964__$1;
(statearr_28971_28991[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28965 === (3))){
var inst_28962 = (state_28964[(2)]);
var state_28964__$1 = state_28964;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28964__$1,inst_28962);
} else {
if((state_val_28965 === (12))){
var state_28964__$1 = state_28964;
var statearr_28972_28992 = state_28964__$1;
(statearr_28972_28992[(2)] = null);

(statearr_28972_28992[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28965 === (2))){
var inst_28941 = (state_28964[(7)]);
var state_28964__$1 = state_28964;
if(cljs.core.truth_(inst_28941)){
var statearr_28973_28993 = state_28964__$1;
(statearr_28973_28993[(1)] = (4));

} else {
var statearr_28974_28994 = state_28964__$1;
(statearr_28974_28994[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28965 === (11))){
var inst_28955 = cljs.core.async.close_BANG_.call(null,ch);
var state_28964__$1 = state_28964;
var statearr_28975_28995 = state_28964__$1;
(statearr_28975_28995[(2)] = inst_28955);

(statearr_28975_28995[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28965 === (9))){
var state_28964__$1 = state_28964;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28976_28996 = state_28964__$1;
(statearr_28976_28996[(1)] = (11));

} else {
var statearr_28977_28997 = state_28964__$1;
(statearr_28977_28997[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28965 === (5))){
var inst_28941 = (state_28964[(7)]);
var state_28964__$1 = state_28964;
var statearr_28978_28998 = state_28964__$1;
(statearr_28978_28998[(2)] = inst_28941);

(statearr_28978_28998[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28965 === (10))){
var inst_28960 = (state_28964[(2)]);
var state_28964__$1 = state_28964;
var statearr_28979_28999 = state_28964__$1;
(statearr_28979_28999[(2)] = inst_28960);

(statearr_28979_28999[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28965 === (8))){
var inst_28941 = (state_28964[(7)]);
var inst_28951 = cljs.core.next.call(null,inst_28941);
var inst_28941__$1 = inst_28951;
var state_28964__$1 = (function (){var statearr_28980 = state_28964;
(statearr_28980[(7)] = inst_28941__$1);

return statearr_28980;
})();
var statearr_28981_29000 = state_28964__$1;
(statearr_28981_29000[(2)] = null);

(statearr_28981_29000[(1)] = (2));


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
});})(c__28406__auto__))
;
return ((function (switch__28316__auto__,c__28406__auto__){
return (function() {
var cljs$core$async$state_machine__28317__auto__ = null;
var cljs$core$async$state_machine__28317__auto____0 = (function (){
var statearr_28982 = [null,null,null,null,null,null,null,null];
(statearr_28982[(0)] = cljs$core$async$state_machine__28317__auto__);

(statearr_28982[(1)] = (1));

return statearr_28982;
});
var cljs$core$async$state_machine__28317__auto____1 = (function (state_28964){
while(true){
var ret_value__28318__auto__ = (function (){try{while(true){
var result__28319__auto__ = switch__28316__auto__.call(null,state_28964);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28319__auto__;
}
break;
}
}catch (e28983){if((e28983 instanceof Object)){
var ex__28320__auto__ = e28983;
var statearr_28984_29001 = state_28964;
(statearr_28984_29001[(5)] = ex__28320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28964);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28983;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29002 = state_28964;
state_28964 = G__29002;
continue;
} else {
return ret_value__28318__auto__;
}
break;
}
});
cljs$core$async$state_machine__28317__auto__ = function(state_28964){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28317__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28317__auto____1.call(this,state_28964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28317__auto____0;
cljs$core$async$state_machine__28317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28317__auto____1;
return cljs$core$async$state_machine__28317__auto__;
})()
;})(switch__28316__auto__,c__28406__auto__))
})();
var state__28408__auto__ = (function (){var statearr_28985 = f__28407__auto__.call(null);
(statearr_28985[(6)] = c__28406__auto__);

return statearr_28985;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28408__auto__);
});})(c__28406__auto__))
);

return c__28406__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4229__auto__ = (((_ == null))?null:_);
var m__4230__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4229__auto__)]);
if(!((m__4230__auto__ == null))){
return m__4230__auto__.call(null,_);
} else {
var m__4230__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4230__auto____$1 == null))){
return m__4230__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4229__auto__ = (((m == null))?null:m);
var m__4230__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4229__auto__)]);
if(!((m__4230__auto__ == null))){
return m__4230__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4230__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4230__auto____$1 == null))){
return m__4230__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4229__auto__ = (((m == null))?null:m);
var m__4230__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4229__auto__)]);
if(!((m__4230__auto__ == null))){
return m__4230__auto__.call(null,m,ch);
} else {
var m__4230__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4230__auto____$1 == null))){
return m__4230__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4229__auto__ = (((m == null))?null:m);
var m__4230__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4229__auto__)]);
if(!((m__4230__auto__ == null))){
return m__4230__auto__.call(null,m);
} else {
var m__4230__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4230__auto____$1 == null))){
return m__4230__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29003 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29003 = (function (ch,cs,meta29004){
this.ch = ch;
this.cs = cs;
this.meta29004 = meta29004;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29003.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_29005,meta29004__$1){
var self__ = this;
var _29005__$1 = this;
return (new cljs.core.async.t_cljs$core$async29003(self__.ch,self__.cs,meta29004__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async29003.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_29005){
var self__ = this;
var _29005__$1 = this;
return self__.meta29004;
});})(cs))
;

cljs.core.async.t_cljs$core$async29003.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29003.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async29003.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29003.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29003.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29003.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29003.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta29004","meta29004",-205137327,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async29003.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29003.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29003";

cljs.core.async.t_cljs$core$async29003.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write.call(null,writer__4180__auto__,"cljs.core.async/t_cljs$core$async29003");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29003.
 */
cljs.core.async.__GT_t_cljs$core$async29003 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async29003(ch__$1,cs__$1,meta29004){
return (new cljs.core.async.t_cljs$core$async29003(ch__$1,cs__$1,meta29004));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async29003(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__28406__auto___29225 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28406__auto___29225,cs,m,dchan,dctr,done){
return (function (){
var f__28407__auto__ = (function (){var switch__28316__auto__ = ((function (c__28406__auto___29225,cs,m,dchan,dctr,done){
return (function (state_29140){
var state_val_29141 = (state_29140[(1)]);
if((state_val_29141 === (7))){
var inst_29136 = (state_29140[(2)]);
var state_29140__$1 = state_29140;
var statearr_29142_29226 = state_29140__$1;
(statearr_29142_29226[(2)] = inst_29136);

(statearr_29142_29226[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29141 === (20))){
var inst_29039 = (state_29140[(7)]);
var inst_29051 = cljs.core.first.call(null,inst_29039);
var inst_29052 = cljs.core.nth.call(null,inst_29051,(0),null);
var inst_29053 = cljs.core.nth.call(null,inst_29051,(1),null);
var state_29140__$1 = (function (){var statearr_29143 = state_29140;
(statearr_29143[(8)] = inst_29052);

return statearr_29143;
})();
if(cljs.core.truth_(inst_29053)){
var statearr_29144_29227 = state_29140__$1;
(statearr_29144_29227[(1)] = (22));

} else {
var statearr_29145_29228 = state_29140__$1;
(statearr_29145_29228[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29141 === (27))){
var inst_29083 = (state_29140[(9)]);
var inst_29008 = (state_29140[(10)]);
var inst_29081 = (state_29140[(11)]);
var inst_29088 = (state_29140[(12)]);
var inst_29088__$1 = cljs.core._nth.call(null,inst_29081,inst_29083);
var inst_29089 = cljs.core.async.put_BANG_.call(null,inst_29088__$1,inst_29008,done);
var state_29140__$1 = (function (){var statearr_29146 = state_29140;
(statearr_29146[(12)] = inst_29088__$1);

return statearr_29146;
})();
if(cljs.core.truth_(inst_29089)){
var statearr_29147_29229 = state_29140__$1;
(statearr_29147_29229[(1)] = (30));

} else {
var statearr_29148_29230 = state_29140__$1;
(statearr_29148_29230[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29141 === (1))){
var state_29140__$1 = state_29140;
var statearr_29149_29231 = state_29140__$1;
(statearr_29149_29231[(2)] = null);

(statearr_29149_29231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29141 === (24))){
var inst_29039 = (state_29140[(7)]);
var inst_29058 = (state_29140[(2)]);
var inst_29059 = cljs.core.next.call(null,inst_29039);
var inst_29017 = inst_29059;
var inst_29018 = null;
var inst_29019 = (0);
var inst_29020 = (0);
var state_29140__$1 = (function (){var statearr_29150 = state_29140;
(statearr_29150[(13)] = inst_29018);

(statearr_29150[(14)] = inst_29019);

(statearr_29150[(15)] = inst_29020);

(statearr_29150[(16)] = inst_29017);

(statearr_29150[(17)] = inst_29058);

return statearr_29150;
})();
var statearr_29151_29232 = state_29140__$1;
(statearr_29151_29232[(2)] = null);

(statearr_29151_29232[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29141 === (39))){
var state_29140__$1 = state_29140;
var statearr_29155_29233 = state_29140__$1;
(statearr_29155_29233[(2)] = null);

(statearr_29155_29233[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29141 === (4))){
var inst_29008 = (state_29140[(10)]);
var inst_29008__$1 = (state_29140[(2)]);
var inst_29009 = (inst_29008__$1 == null);
var state_29140__$1 = (function (){var statearr_29156 = state_29140;
(statearr_29156[(10)] = inst_29008__$1);

return statearr_29156;
})();
if(cljs.core.truth_(inst_29009)){
var statearr_29157_29234 = state_29140__$1;
(statearr_29157_29234[(1)] = (5));

} else {
var statearr_29158_29235 = state_29140__$1;
(statearr_29158_29235[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29141 === (15))){
var inst_29018 = (state_29140[(13)]);
var inst_29019 = (state_29140[(14)]);
var inst_29020 = (state_29140[(15)]);
var inst_29017 = (state_29140[(16)]);
var inst_29035 = (state_29140[(2)]);
var inst_29036 = (inst_29020 + (1));
var tmp29152 = inst_29018;
var tmp29153 = inst_29019;
var tmp29154 = inst_29017;
var inst_29017__$1 = tmp29154;
var inst_29018__$1 = tmp29152;
var inst_29019__$1 = tmp29153;
var inst_29020__$1 = inst_29036;
var state_29140__$1 = (function (){var statearr_29159 = state_29140;
(statearr_29159[(13)] = inst_29018__$1);

(statearr_29159[(18)] = inst_29035);

(statearr_29159[(14)] = inst_29019__$1);

(statearr_29159[(15)] = inst_29020__$1);

(statearr_29159[(16)] = inst_29017__$1);

return statearr_29159;
})();
var statearr_29160_29236 = state_29140__$1;
(statearr_29160_29236[(2)] = null);

(statearr_29160_29236[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29141 === (21))){
var inst_29062 = (state_29140[(2)]);
var state_29140__$1 = state_29140;
var statearr_29164_29237 = state_29140__$1;
(statearr_29164_29237[(2)] = inst_29062);

(statearr_29164_29237[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29141 === (31))){
var inst_29088 = (state_29140[(12)]);
var inst_29092 = done.call(null,null);
var inst_29093 = cljs.core.async.untap_STAR_.call(null,m,inst_29088);
var state_29140__$1 = (function (){var statearr_29165 = state_29140;
(statearr_29165[(19)] = inst_29092);

return statearr_29165;
})();
var statearr_29166_29238 = state_29140__$1;
(statearr_29166_29238[(2)] = inst_29093);

(statearr_29166_29238[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29141 === (32))){
var inst_29083 = (state_29140[(9)]);
var inst_29082 = (state_29140[(20)]);
var inst_29080 = (state_29140[(21)]);
var inst_29081 = (state_29140[(11)]);
var inst_29095 = (state_29140[(2)]);
var inst_29096 = (inst_29083 + (1));
var tmp29161 = inst_29082;
var tmp29162 = inst_29080;
var tmp29163 = inst_29081;
var inst_29080__$1 = tmp29162;
var inst_29081__$1 = tmp29163;
var inst_29082__$1 = tmp29161;
var inst_29083__$1 = inst_29096;
var state_29140__$1 = (function (){var statearr_29167 = state_29140;
(statearr_29167[(9)] = inst_29083__$1);

(statearr_29167[(20)] = inst_29082__$1);

(statearr_29167[(21)] = inst_29080__$1);

(statearr_29167[(11)] = inst_29081__$1);

(statearr_29167[(22)] = inst_29095);

return statearr_29167;
})();
var statearr_29168_29239 = state_29140__$1;
(statearr_29168_29239[(2)] = null);

(statearr_29168_29239[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29141 === (40))){
var inst_29108 = (state_29140[(23)]);
var inst_29112 = done.call(null,null);
var inst_29113 = cljs.core.async.untap_STAR_.call(null,m,inst_29108);
var state_29140__$1 = (function (){var statearr_29169 = state_29140;
(statearr_29169[(24)] = inst_29112);

return statearr_29169;
})();
var statearr_29170_29240 = state_29140__$1;
(statearr_29170_29240[(2)] = inst_29113);

(statearr_29170_29240[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29141 === (33))){
var inst_29099 = (state_29140[(25)]);
var inst_29101 = cljs.core.chunked_seq_QMARK_.call(null,inst_29099);
var state_29140__$1 = state_29140;
if(inst_29101){
var statearr_29171_29241 = state_29140__$1;
(statearr_29171_29241[(1)] = (36));

} else {
var statearr_29172_29242 = state_29140__$1;
(statearr_29172_29242[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29141 === (13))){
var inst_29029 = (state_29140[(26)]);
var inst_29032 = cljs.core.async.close_BANG_.call(null,inst_29029);
var state_29140__$1 = state_29140;
var statearr_29173_29243 = state_29140__$1;
(statearr_29173_29243[(2)] = inst_29032);

(statearr_29173_29243[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29141 === (22))){
var inst_29052 = (state_29140[(8)]);
var inst_29055 = cljs.core.async.close_BANG_.call(null,inst_29052);
var state_29140__$1 = state_29140;
var statearr_29174_29244 = state_29140__$1;
(statearr_29174_29244[(2)] = inst_29055);

(statearr_29174_29244[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29141 === (36))){
var inst_29099 = (state_29140[(25)]);
var inst_29103 = cljs.core.chunk_first.call(null,inst_29099);
var inst_29104 = cljs.core.chunk_rest.call(null,inst_29099);
var inst_29105 = cljs.core.count.call(null,inst_29103);
var inst_29080 = inst_29104;
var inst_29081 = inst_29103;
var inst_29082 = inst_29105;
var inst_29083 = (0);
var state_29140__$1 = (function (){var statearr_29175 = state_29140;
(statearr_29175[(9)] = inst_29083);

(statearr_29175[(20)] = inst_29082);

(statearr_29175[(21)] = inst_29080);

(statearr_29175[(11)] = inst_29081);

return statearr_29175;
})();
var statearr_29176_29245 = state_29140__$1;
(statearr_29176_29245[(2)] = null);

(statearr_29176_29245[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29141 === (41))){
var inst_29099 = (state_29140[(25)]);
var inst_29115 = (state_29140[(2)]);
var inst_29116 = cljs.core.next.call(null,inst_29099);
var inst_29080 = inst_29116;
var inst_29081 = null;
var inst_29082 = (0);
var inst_29083 = (0);
var state_29140__$1 = (function (){var statearr_29177 = state_29140;
(statearr_29177[(9)] = inst_29083);

(statearr_29177[(20)] = inst_29082);

(statearr_29177[(21)] = inst_29080);

(statearr_29177[(27)] = inst_29115);

(statearr_29177[(11)] = inst_29081);

return statearr_29177;
})();
var statearr_29178_29246 = state_29140__$1;
(statearr_29178_29246[(2)] = null);

(statearr_29178_29246[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29141 === (43))){
var state_29140__$1 = state_29140;
var statearr_29179_29247 = state_29140__$1;
(statearr_29179_29247[(2)] = null);

(statearr_29179_29247[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29141 === (29))){
var inst_29124 = (state_29140[(2)]);
var state_29140__$1 = state_29140;
var statearr_29180_29248 = state_29140__$1;
(statearr_29180_29248[(2)] = inst_29124);

(statearr_29180_29248[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29141 === (44))){
var inst_29133 = (state_29140[(2)]);
var state_29140__$1 = (function (){var statearr_29181 = state_29140;
(statearr_29181[(28)] = inst_29133);

return statearr_29181;
})();
var statearr_29182_29249 = state_29140__$1;
(statearr_29182_29249[(2)] = null);

(statearr_29182_29249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29141 === (6))){
var inst_29072 = (state_29140[(29)]);
var inst_29071 = cljs.core.deref.call(null,cs);
var inst_29072__$1 = cljs.core.keys.call(null,inst_29071);
var inst_29073 = cljs.core.count.call(null,inst_29072__$1);
var inst_29074 = cljs.core.reset_BANG_.call(null,dctr,inst_29073);
var inst_29079 = cljs.core.seq.call(null,inst_29072__$1);
var inst_29080 = inst_29079;
var inst_29081 = null;
var inst_29082 = (0);
var inst_29083 = (0);
var state_29140__$1 = (function (){var statearr_29183 = state_29140;
(statearr_29183[(9)] = inst_29083);

(statearr_29183[(20)] = inst_29082);

(statearr_29183[(30)] = inst_29074);

(statearr_29183[(21)] = inst_29080);

(statearr_29183[(11)] = inst_29081);

(statearr_29183[(29)] = inst_29072__$1);

return statearr_29183;
})();
var statearr_29184_29250 = state_29140__$1;
(statearr_29184_29250[(2)] = null);

(statearr_29184_29250[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29141 === (28))){
var inst_29080 = (state_29140[(21)]);
var inst_29099 = (state_29140[(25)]);
var inst_29099__$1 = cljs.core.seq.call(null,inst_29080);
var state_29140__$1 = (function (){var statearr_29185 = state_29140;
(statearr_29185[(25)] = inst_29099__$1);

return statearr_29185;
})();
if(inst_29099__$1){
var statearr_29186_29251 = state_29140__$1;
(statearr_29186_29251[(1)] = (33));

} else {
var statearr_29187_29252 = state_29140__$1;
(statearr_29187_29252[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29141 === (25))){
var inst_29083 = (state_29140[(9)]);
var inst_29082 = (state_29140[(20)]);
var inst_29085 = (inst_29083 < inst_29082);
var inst_29086 = inst_29085;
var state_29140__$1 = state_29140;
if(cljs.core.truth_(inst_29086)){
var statearr_29188_29253 = state_29140__$1;
(statearr_29188_29253[(1)] = (27));

} else {
var statearr_29189_29254 = state_29140__$1;
(statearr_29189_29254[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29141 === (34))){
var state_29140__$1 = state_29140;
var statearr_29190_29255 = state_29140__$1;
(statearr_29190_29255[(2)] = null);

(statearr_29190_29255[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29141 === (17))){
var state_29140__$1 = state_29140;
var statearr_29191_29256 = state_29140__$1;
(statearr_29191_29256[(2)] = null);

(statearr_29191_29256[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29141 === (3))){
var inst_29138 = (state_29140[(2)]);
var state_29140__$1 = state_29140;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29140__$1,inst_29138);
} else {
if((state_val_29141 === (12))){
var inst_29067 = (state_29140[(2)]);
var state_29140__$1 = state_29140;
var statearr_29192_29257 = state_29140__$1;
(statearr_29192_29257[(2)] = inst_29067);

(statearr_29192_29257[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29141 === (2))){
var state_29140__$1 = state_29140;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29140__$1,(4),ch);
} else {
if((state_val_29141 === (23))){
var state_29140__$1 = state_29140;
var statearr_29193_29258 = state_29140__$1;
(statearr_29193_29258[(2)] = null);

(statearr_29193_29258[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29141 === (35))){
var inst_29122 = (state_29140[(2)]);
var state_29140__$1 = state_29140;
var statearr_29194_29259 = state_29140__$1;
(statearr_29194_29259[(2)] = inst_29122);

(statearr_29194_29259[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29141 === (19))){
var inst_29039 = (state_29140[(7)]);
var inst_29043 = cljs.core.chunk_first.call(null,inst_29039);
var inst_29044 = cljs.core.chunk_rest.call(null,inst_29039);
var inst_29045 = cljs.core.count.call(null,inst_29043);
var inst_29017 = inst_29044;
var inst_29018 = inst_29043;
var inst_29019 = inst_29045;
var inst_29020 = (0);
var state_29140__$1 = (function (){var statearr_29195 = state_29140;
(statearr_29195[(13)] = inst_29018);

(statearr_29195[(14)] = inst_29019);

(statearr_29195[(15)] = inst_29020);

(statearr_29195[(16)] = inst_29017);

return statearr_29195;
})();
var statearr_29196_29260 = state_29140__$1;
(statearr_29196_29260[(2)] = null);

(statearr_29196_29260[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29141 === (11))){
var inst_29039 = (state_29140[(7)]);
var inst_29017 = (state_29140[(16)]);
var inst_29039__$1 = cljs.core.seq.call(null,inst_29017);
var state_29140__$1 = (function (){var statearr_29197 = state_29140;
(statearr_29197[(7)] = inst_29039__$1);

return statearr_29197;
})();
if(inst_29039__$1){
var statearr_29198_29261 = state_29140__$1;
(statearr_29198_29261[(1)] = (16));

} else {
var statearr_29199_29262 = state_29140__$1;
(statearr_29199_29262[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29141 === (9))){
var inst_29069 = (state_29140[(2)]);
var state_29140__$1 = state_29140;
var statearr_29200_29263 = state_29140__$1;
(statearr_29200_29263[(2)] = inst_29069);

(statearr_29200_29263[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29141 === (5))){
var inst_29015 = cljs.core.deref.call(null,cs);
var inst_29016 = cljs.core.seq.call(null,inst_29015);
var inst_29017 = inst_29016;
var inst_29018 = null;
var inst_29019 = (0);
var inst_29020 = (0);
var state_29140__$1 = (function (){var statearr_29201 = state_29140;
(statearr_29201[(13)] = inst_29018);

(statearr_29201[(14)] = inst_29019);

(statearr_29201[(15)] = inst_29020);

(statearr_29201[(16)] = inst_29017);

return statearr_29201;
})();
var statearr_29202_29264 = state_29140__$1;
(statearr_29202_29264[(2)] = null);

(statearr_29202_29264[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29141 === (14))){
var state_29140__$1 = state_29140;
var statearr_29203_29265 = state_29140__$1;
(statearr_29203_29265[(2)] = null);

(statearr_29203_29265[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29141 === (45))){
var inst_29130 = (state_29140[(2)]);
var state_29140__$1 = state_29140;
var statearr_29204_29266 = state_29140__$1;
(statearr_29204_29266[(2)] = inst_29130);

(statearr_29204_29266[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29141 === (26))){
var inst_29072 = (state_29140[(29)]);
var inst_29126 = (state_29140[(2)]);
var inst_29127 = cljs.core.seq.call(null,inst_29072);
var state_29140__$1 = (function (){var statearr_29205 = state_29140;
(statearr_29205[(31)] = inst_29126);

return statearr_29205;
})();
if(inst_29127){
var statearr_29206_29267 = state_29140__$1;
(statearr_29206_29267[(1)] = (42));

} else {
var statearr_29207_29268 = state_29140__$1;
(statearr_29207_29268[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29141 === (16))){
var inst_29039 = (state_29140[(7)]);
var inst_29041 = cljs.core.chunked_seq_QMARK_.call(null,inst_29039);
var state_29140__$1 = state_29140;
if(inst_29041){
var statearr_29208_29269 = state_29140__$1;
(statearr_29208_29269[(1)] = (19));

} else {
var statearr_29209_29270 = state_29140__$1;
(statearr_29209_29270[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29141 === (38))){
var inst_29119 = (state_29140[(2)]);
var state_29140__$1 = state_29140;
var statearr_29210_29271 = state_29140__$1;
(statearr_29210_29271[(2)] = inst_29119);

(statearr_29210_29271[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29141 === (30))){
var state_29140__$1 = state_29140;
var statearr_29211_29272 = state_29140__$1;
(statearr_29211_29272[(2)] = null);

(statearr_29211_29272[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29141 === (10))){
var inst_29018 = (state_29140[(13)]);
var inst_29020 = (state_29140[(15)]);
var inst_29028 = cljs.core._nth.call(null,inst_29018,inst_29020);
var inst_29029 = cljs.core.nth.call(null,inst_29028,(0),null);
var inst_29030 = cljs.core.nth.call(null,inst_29028,(1),null);
var state_29140__$1 = (function (){var statearr_29212 = state_29140;
(statearr_29212[(26)] = inst_29029);

return statearr_29212;
})();
if(cljs.core.truth_(inst_29030)){
var statearr_29213_29273 = state_29140__$1;
(statearr_29213_29273[(1)] = (13));

} else {
var statearr_29214_29274 = state_29140__$1;
(statearr_29214_29274[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29141 === (18))){
var inst_29065 = (state_29140[(2)]);
var state_29140__$1 = state_29140;
var statearr_29215_29275 = state_29140__$1;
(statearr_29215_29275[(2)] = inst_29065);

(statearr_29215_29275[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29141 === (42))){
var state_29140__$1 = state_29140;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29140__$1,(45),dchan);
} else {
if((state_val_29141 === (37))){
var inst_29008 = (state_29140[(10)]);
var inst_29108 = (state_29140[(23)]);
var inst_29099 = (state_29140[(25)]);
var inst_29108__$1 = cljs.core.first.call(null,inst_29099);
var inst_29109 = cljs.core.async.put_BANG_.call(null,inst_29108__$1,inst_29008,done);
var state_29140__$1 = (function (){var statearr_29216 = state_29140;
(statearr_29216[(23)] = inst_29108__$1);

return statearr_29216;
})();
if(cljs.core.truth_(inst_29109)){
var statearr_29217_29276 = state_29140__$1;
(statearr_29217_29276[(1)] = (39));

} else {
var statearr_29218_29277 = state_29140__$1;
(statearr_29218_29277[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29141 === (8))){
var inst_29019 = (state_29140[(14)]);
var inst_29020 = (state_29140[(15)]);
var inst_29022 = (inst_29020 < inst_29019);
var inst_29023 = inst_29022;
var state_29140__$1 = state_29140;
if(cljs.core.truth_(inst_29023)){
var statearr_29219_29278 = state_29140__$1;
(statearr_29219_29278[(1)] = (10));

} else {
var statearr_29220_29279 = state_29140__$1;
(statearr_29220_29279[(1)] = (11));

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
});})(c__28406__auto___29225,cs,m,dchan,dctr,done))
;
return ((function (switch__28316__auto__,c__28406__auto___29225,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__28317__auto__ = null;
var cljs$core$async$mult_$_state_machine__28317__auto____0 = (function (){
var statearr_29221 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29221[(0)] = cljs$core$async$mult_$_state_machine__28317__auto__);

(statearr_29221[(1)] = (1));

return statearr_29221;
});
var cljs$core$async$mult_$_state_machine__28317__auto____1 = (function (state_29140){
while(true){
var ret_value__28318__auto__ = (function (){try{while(true){
var result__28319__auto__ = switch__28316__auto__.call(null,state_29140);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28319__auto__;
}
break;
}
}catch (e29222){if((e29222 instanceof Object)){
var ex__28320__auto__ = e29222;
var statearr_29223_29280 = state_29140;
(statearr_29223_29280[(5)] = ex__28320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29140);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29222;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29281 = state_29140;
state_29140 = G__29281;
continue;
} else {
return ret_value__28318__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28317__auto__ = function(state_29140){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28317__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28317__auto____1.call(this,state_29140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28317__auto____0;
cljs$core$async$mult_$_state_machine__28317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28317__auto____1;
return cljs$core$async$mult_$_state_machine__28317__auto__;
})()
;})(switch__28316__auto__,c__28406__auto___29225,cs,m,dchan,dctr,done))
})();
var state__28408__auto__ = (function (){var statearr_29224 = f__28407__auto__.call(null);
(statearr_29224[(6)] = c__28406__auto___29225);

return statearr_29224;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28408__auto__);
});})(c__28406__auto___29225,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__29283 = arguments.length;
switch (G__29283) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4229__auto__ = (((m == null))?null:m);
var m__4230__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4229__auto__)]);
if(!((m__4230__auto__ == null))){
return m__4230__auto__.call(null,m,ch);
} else {
var m__4230__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4230__auto____$1 == null))){
return m__4230__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4229__auto__ = (((m == null))?null:m);
var m__4230__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4229__auto__)]);
if(!((m__4230__auto__ == null))){
return m__4230__auto__.call(null,m,ch);
} else {
var m__4230__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4230__auto____$1 == null))){
return m__4230__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4229__auto__ = (((m == null))?null:m);
var m__4230__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4229__auto__)]);
if(!((m__4230__auto__ == null))){
return m__4230__auto__.call(null,m);
} else {
var m__4230__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4230__auto____$1 == null))){
return m__4230__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4229__auto__ = (((m == null))?null:m);
var m__4230__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4229__auto__)]);
if(!((m__4230__auto__ == null))){
return m__4230__auto__.call(null,m,state_map);
} else {
var m__4230__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4230__auto____$1 == null))){
return m__4230__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4229__auto__ = (((m == null))?null:m);
var m__4230__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4229__auto__)]);
if(!((m__4230__auto__ == null))){
return m__4230__auto__.call(null,m,mode);
} else {
var m__4230__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4230__auto____$1 == null))){
return m__4230__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4520__auto__ = [];
var len__4517__auto___29295 = arguments.length;
var i__4518__auto___29296 = (0);
while(true){
if((i__4518__auto___29296 < len__4517__auto___29295)){
args__4520__auto__.push((arguments[i__4518__auto___29296]));

var G__29297 = (i__4518__auto___29296 + (1));
i__4518__auto___29296 = G__29297;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((3) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4521__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29289){
var map__29290 = p__29289;
var map__29290__$1 = ((((!((map__29290 == null)))?(((((map__29290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29290.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29290):map__29290);
var opts = map__29290__$1;
var statearr_29292_29298 = state;
(statearr_29292_29298[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__29290,map__29290__$1,opts){
return (function (val){
var statearr_29293_29299 = state;
(statearr_29293_29299[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__29290,map__29290__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_29294_29300 = state;
(statearr_29294_29300[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29285){
var G__29286 = cljs.core.first.call(null,seq29285);
var seq29285__$1 = cljs.core.next.call(null,seq29285);
var G__29287 = cljs.core.first.call(null,seq29285__$1);
var seq29285__$2 = cljs.core.next.call(null,seq29285__$1);
var G__29288 = cljs.core.first.call(null,seq29285__$2);
var seq29285__$3 = cljs.core.next.call(null,seq29285__$2);
var self__4504__auto__ = this;
return self__4504__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29286,G__29287,G__29288,seq29285__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29301 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29301 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta29302){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta29302 = meta29302;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29301.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29303,meta29302__$1){
var self__ = this;
var _29303__$1 = this;
return (new cljs.core.async.t_cljs$core$async29301(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta29302__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29301.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29303){
var self__ = this;
var _29303__$1 = this;
return self__.meta29302;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29301.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29301.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29301.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29301.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29301.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29301.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29301.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29301.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29301.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta29302","meta29302",435148252,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29301.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29301.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29301";

cljs.core.async.t_cljs$core$async29301.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write.call(null,writer__4180__auto__,"cljs.core.async/t_cljs$core$async29301");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29301.
 */
cljs.core.async.__GT_t_cljs$core$async29301 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async29301(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta29302){
return (new cljs.core.async.t_cljs$core$async29301(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta29302));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async29301(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28406__auto___29465 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28406__auto___29465,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__28407__auto__ = (function (){var switch__28316__auto__ = ((function (c__28406__auto___29465,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_29405){
var state_val_29406 = (state_29405[(1)]);
if((state_val_29406 === (7))){
var inst_29320 = (state_29405[(2)]);
var state_29405__$1 = state_29405;
var statearr_29407_29466 = state_29405__$1;
(statearr_29407_29466[(2)] = inst_29320);

(statearr_29407_29466[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (20))){
var inst_29332 = (state_29405[(7)]);
var state_29405__$1 = state_29405;
var statearr_29408_29467 = state_29405__$1;
(statearr_29408_29467[(2)] = inst_29332);

(statearr_29408_29467[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (27))){
var state_29405__$1 = state_29405;
var statearr_29409_29468 = state_29405__$1;
(statearr_29409_29468[(2)] = null);

(statearr_29409_29468[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (1))){
var inst_29307 = (state_29405[(8)]);
var inst_29307__$1 = calc_state.call(null);
var inst_29309 = (inst_29307__$1 == null);
var inst_29310 = cljs.core.not.call(null,inst_29309);
var state_29405__$1 = (function (){var statearr_29410 = state_29405;
(statearr_29410[(8)] = inst_29307__$1);

return statearr_29410;
})();
if(inst_29310){
var statearr_29411_29469 = state_29405__$1;
(statearr_29411_29469[(1)] = (2));

} else {
var statearr_29412_29470 = state_29405__$1;
(statearr_29412_29470[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (24))){
var inst_29379 = (state_29405[(9)]);
var inst_29356 = (state_29405[(10)]);
var inst_29365 = (state_29405[(11)]);
var inst_29379__$1 = inst_29356.call(null,inst_29365);
var state_29405__$1 = (function (){var statearr_29413 = state_29405;
(statearr_29413[(9)] = inst_29379__$1);

return statearr_29413;
})();
if(cljs.core.truth_(inst_29379__$1)){
var statearr_29414_29471 = state_29405__$1;
(statearr_29414_29471[(1)] = (29));

} else {
var statearr_29415_29472 = state_29405__$1;
(statearr_29415_29472[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (4))){
var inst_29323 = (state_29405[(2)]);
var state_29405__$1 = state_29405;
if(cljs.core.truth_(inst_29323)){
var statearr_29416_29473 = state_29405__$1;
(statearr_29416_29473[(1)] = (8));

} else {
var statearr_29417_29474 = state_29405__$1;
(statearr_29417_29474[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (15))){
var inst_29350 = (state_29405[(2)]);
var state_29405__$1 = state_29405;
if(cljs.core.truth_(inst_29350)){
var statearr_29418_29475 = state_29405__$1;
(statearr_29418_29475[(1)] = (19));

} else {
var statearr_29419_29476 = state_29405__$1;
(statearr_29419_29476[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (21))){
var inst_29355 = (state_29405[(12)]);
var inst_29355__$1 = (state_29405[(2)]);
var inst_29356 = cljs.core.get.call(null,inst_29355__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29357 = cljs.core.get.call(null,inst_29355__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29358 = cljs.core.get.call(null,inst_29355__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_29405__$1 = (function (){var statearr_29420 = state_29405;
(statearr_29420[(13)] = inst_29357);

(statearr_29420[(10)] = inst_29356);

(statearr_29420[(12)] = inst_29355__$1);

return statearr_29420;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_29405__$1,(22),inst_29358);
} else {
if((state_val_29406 === (31))){
var inst_29387 = (state_29405[(2)]);
var state_29405__$1 = state_29405;
if(cljs.core.truth_(inst_29387)){
var statearr_29421_29477 = state_29405__$1;
(statearr_29421_29477[(1)] = (32));

} else {
var statearr_29422_29478 = state_29405__$1;
(statearr_29422_29478[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (32))){
var inst_29364 = (state_29405[(14)]);
var state_29405__$1 = state_29405;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29405__$1,(35),out,inst_29364);
} else {
if((state_val_29406 === (33))){
var inst_29355 = (state_29405[(12)]);
var inst_29332 = inst_29355;
var state_29405__$1 = (function (){var statearr_29423 = state_29405;
(statearr_29423[(7)] = inst_29332);

return statearr_29423;
})();
var statearr_29424_29479 = state_29405__$1;
(statearr_29424_29479[(2)] = null);

(statearr_29424_29479[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (13))){
var inst_29332 = (state_29405[(7)]);
var inst_29339 = inst_29332.cljs$lang$protocol_mask$partition0$;
var inst_29340 = (inst_29339 & (64));
var inst_29341 = inst_29332.cljs$core$ISeq$;
var inst_29342 = (cljs.core.PROTOCOL_SENTINEL === inst_29341);
var inst_29343 = ((inst_29340) || (inst_29342));
var state_29405__$1 = state_29405;
if(cljs.core.truth_(inst_29343)){
var statearr_29425_29480 = state_29405__$1;
(statearr_29425_29480[(1)] = (16));

} else {
var statearr_29426_29481 = state_29405__$1;
(statearr_29426_29481[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (22))){
var inst_29364 = (state_29405[(14)]);
var inst_29365 = (state_29405[(11)]);
var inst_29363 = (state_29405[(2)]);
var inst_29364__$1 = cljs.core.nth.call(null,inst_29363,(0),null);
var inst_29365__$1 = cljs.core.nth.call(null,inst_29363,(1),null);
var inst_29366 = (inst_29364__$1 == null);
var inst_29367 = cljs.core._EQ_.call(null,inst_29365__$1,change);
var inst_29368 = ((inst_29366) || (inst_29367));
var state_29405__$1 = (function (){var statearr_29427 = state_29405;
(statearr_29427[(14)] = inst_29364__$1);

(statearr_29427[(11)] = inst_29365__$1);

return statearr_29427;
})();
if(cljs.core.truth_(inst_29368)){
var statearr_29428_29482 = state_29405__$1;
(statearr_29428_29482[(1)] = (23));

} else {
var statearr_29429_29483 = state_29405__$1;
(statearr_29429_29483[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (36))){
var inst_29355 = (state_29405[(12)]);
var inst_29332 = inst_29355;
var state_29405__$1 = (function (){var statearr_29430 = state_29405;
(statearr_29430[(7)] = inst_29332);

return statearr_29430;
})();
var statearr_29431_29484 = state_29405__$1;
(statearr_29431_29484[(2)] = null);

(statearr_29431_29484[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (29))){
var inst_29379 = (state_29405[(9)]);
var state_29405__$1 = state_29405;
var statearr_29432_29485 = state_29405__$1;
(statearr_29432_29485[(2)] = inst_29379);

(statearr_29432_29485[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (6))){
var state_29405__$1 = state_29405;
var statearr_29433_29486 = state_29405__$1;
(statearr_29433_29486[(2)] = false);

(statearr_29433_29486[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (28))){
var inst_29375 = (state_29405[(2)]);
var inst_29376 = calc_state.call(null);
var inst_29332 = inst_29376;
var state_29405__$1 = (function (){var statearr_29434 = state_29405;
(statearr_29434[(7)] = inst_29332);

(statearr_29434[(15)] = inst_29375);

return statearr_29434;
})();
var statearr_29435_29487 = state_29405__$1;
(statearr_29435_29487[(2)] = null);

(statearr_29435_29487[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (25))){
var inst_29401 = (state_29405[(2)]);
var state_29405__$1 = state_29405;
var statearr_29436_29488 = state_29405__$1;
(statearr_29436_29488[(2)] = inst_29401);

(statearr_29436_29488[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (34))){
var inst_29399 = (state_29405[(2)]);
var state_29405__$1 = state_29405;
var statearr_29437_29489 = state_29405__$1;
(statearr_29437_29489[(2)] = inst_29399);

(statearr_29437_29489[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (17))){
var state_29405__$1 = state_29405;
var statearr_29438_29490 = state_29405__$1;
(statearr_29438_29490[(2)] = false);

(statearr_29438_29490[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (3))){
var state_29405__$1 = state_29405;
var statearr_29439_29491 = state_29405__$1;
(statearr_29439_29491[(2)] = false);

(statearr_29439_29491[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (12))){
var inst_29403 = (state_29405[(2)]);
var state_29405__$1 = state_29405;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29405__$1,inst_29403);
} else {
if((state_val_29406 === (2))){
var inst_29307 = (state_29405[(8)]);
var inst_29312 = inst_29307.cljs$lang$protocol_mask$partition0$;
var inst_29313 = (inst_29312 & (64));
var inst_29314 = inst_29307.cljs$core$ISeq$;
var inst_29315 = (cljs.core.PROTOCOL_SENTINEL === inst_29314);
var inst_29316 = ((inst_29313) || (inst_29315));
var state_29405__$1 = state_29405;
if(cljs.core.truth_(inst_29316)){
var statearr_29440_29492 = state_29405__$1;
(statearr_29440_29492[(1)] = (5));

} else {
var statearr_29441_29493 = state_29405__$1;
(statearr_29441_29493[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (23))){
var inst_29364 = (state_29405[(14)]);
var inst_29370 = (inst_29364 == null);
var state_29405__$1 = state_29405;
if(cljs.core.truth_(inst_29370)){
var statearr_29442_29494 = state_29405__$1;
(statearr_29442_29494[(1)] = (26));

} else {
var statearr_29443_29495 = state_29405__$1;
(statearr_29443_29495[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (35))){
var inst_29390 = (state_29405[(2)]);
var state_29405__$1 = state_29405;
if(cljs.core.truth_(inst_29390)){
var statearr_29444_29496 = state_29405__$1;
(statearr_29444_29496[(1)] = (36));

} else {
var statearr_29445_29497 = state_29405__$1;
(statearr_29445_29497[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (19))){
var inst_29332 = (state_29405[(7)]);
var inst_29352 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29332);
var state_29405__$1 = state_29405;
var statearr_29446_29498 = state_29405__$1;
(statearr_29446_29498[(2)] = inst_29352);

(statearr_29446_29498[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (11))){
var inst_29332 = (state_29405[(7)]);
var inst_29336 = (inst_29332 == null);
var inst_29337 = cljs.core.not.call(null,inst_29336);
var state_29405__$1 = state_29405;
if(inst_29337){
var statearr_29447_29499 = state_29405__$1;
(statearr_29447_29499[(1)] = (13));

} else {
var statearr_29448_29500 = state_29405__$1;
(statearr_29448_29500[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (9))){
var inst_29307 = (state_29405[(8)]);
var state_29405__$1 = state_29405;
var statearr_29449_29501 = state_29405__$1;
(statearr_29449_29501[(2)] = inst_29307);

(statearr_29449_29501[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (5))){
var state_29405__$1 = state_29405;
var statearr_29450_29502 = state_29405__$1;
(statearr_29450_29502[(2)] = true);

(statearr_29450_29502[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (14))){
var state_29405__$1 = state_29405;
var statearr_29451_29503 = state_29405__$1;
(statearr_29451_29503[(2)] = false);

(statearr_29451_29503[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (26))){
var inst_29365 = (state_29405[(11)]);
var inst_29372 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_29365);
var state_29405__$1 = state_29405;
var statearr_29452_29504 = state_29405__$1;
(statearr_29452_29504[(2)] = inst_29372);

(statearr_29452_29504[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (16))){
var state_29405__$1 = state_29405;
var statearr_29453_29505 = state_29405__$1;
(statearr_29453_29505[(2)] = true);

(statearr_29453_29505[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (38))){
var inst_29395 = (state_29405[(2)]);
var state_29405__$1 = state_29405;
var statearr_29454_29506 = state_29405__$1;
(statearr_29454_29506[(2)] = inst_29395);

(statearr_29454_29506[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (30))){
var inst_29357 = (state_29405[(13)]);
var inst_29356 = (state_29405[(10)]);
var inst_29365 = (state_29405[(11)]);
var inst_29382 = cljs.core.empty_QMARK_.call(null,inst_29356);
var inst_29383 = inst_29357.call(null,inst_29365);
var inst_29384 = cljs.core.not.call(null,inst_29383);
var inst_29385 = ((inst_29382) && (inst_29384));
var state_29405__$1 = state_29405;
var statearr_29455_29507 = state_29405__$1;
(statearr_29455_29507[(2)] = inst_29385);

(statearr_29455_29507[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (10))){
var inst_29307 = (state_29405[(8)]);
var inst_29328 = (state_29405[(2)]);
var inst_29329 = cljs.core.get.call(null,inst_29328,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29330 = cljs.core.get.call(null,inst_29328,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29331 = cljs.core.get.call(null,inst_29328,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29332 = inst_29307;
var state_29405__$1 = (function (){var statearr_29456 = state_29405;
(statearr_29456[(16)] = inst_29331);

(statearr_29456[(7)] = inst_29332);

(statearr_29456[(17)] = inst_29330);

(statearr_29456[(18)] = inst_29329);

return statearr_29456;
})();
var statearr_29457_29508 = state_29405__$1;
(statearr_29457_29508[(2)] = null);

(statearr_29457_29508[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (18))){
var inst_29347 = (state_29405[(2)]);
var state_29405__$1 = state_29405;
var statearr_29458_29509 = state_29405__$1;
(statearr_29458_29509[(2)] = inst_29347);

(statearr_29458_29509[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (37))){
var state_29405__$1 = state_29405;
var statearr_29459_29510 = state_29405__$1;
(statearr_29459_29510[(2)] = null);

(statearr_29459_29510[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29406 === (8))){
var inst_29307 = (state_29405[(8)]);
var inst_29325 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29307);
var state_29405__$1 = state_29405;
var statearr_29460_29511 = state_29405__$1;
(statearr_29460_29511[(2)] = inst_29325);

(statearr_29460_29511[(1)] = (10));


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
});})(c__28406__auto___29465,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__28316__auto__,c__28406__auto___29465,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__28317__auto__ = null;
var cljs$core$async$mix_$_state_machine__28317__auto____0 = (function (){
var statearr_29461 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29461[(0)] = cljs$core$async$mix_$_state_machine__28317__auto__);

(statearr_29461[(1)] = (1));

return statearr_29461;
});
var cljs$core$async$mix_$_state_machine__28317__auto____1 = (function (state_29405){
while(true){
var ret_value__28318__auto__ = (function (){try{while(true){
var result__28319__auto__ = switch__28316__auto__.call(null,state_29405);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28319__auto__;
}
break;
}
}catch (e29462){if((e29462 instanceof Object)){
var ex__28320__auto__ = e29462;
var statearr_29463_29512 = state_29405;
(statearr_29463_29512[(5)] = ex__28320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29405);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29462;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29513 = state_29405;
state_29405 = G__29513;
continue;
} else {
return ret_value__28318__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28317__auto__ = function(state_29405){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28317__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28317__auto____1.call(this,state_29405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28317__auto____0;
cljs$core$async$mix_$_state_machine__28317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28317__auto____1;
return cljs$core$async$mix_$_state_machine__28317__auto__;
})()
;})(switch__28316__auto__,c__28406__auto___29465,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__28408__auto__ = (function (){var statearr_29464 = f__28407__auto__.call(null);
(statearr_29464[(6)] = c__28406__auto___29465);

return statearr_29464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28408__auto__);
});})(c__28406__auto___29465,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4229__auto__ = (((p == null))?null:p);
var m__4230__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4229__auto__)]);
if(!((m__4230__auto__ == null))){
return m__4230__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4230__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4230__auto____$1 == null))){
return m__4230__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4229__auto__ = (((p == null))?null:p);
var m__4230__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4229__auto__)]);
if(!((m__4230__auto__ == null))){
return m__4230__auto__.call(null,p,v,ch);
} else {
var m__4230__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4230__auto____$1 == null))){
return m__4230__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__29515 = arguments.length;
switch (G__29515) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4229__auto__ = (((p == null))?null:p);
var m__4230__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4229__auto__)]);
if(!((m__4230__auto__ == null))){
return m__4230__auto__.call(null,p);
} else {
var m__4230__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4230__auto____$1 == null))){
return m__4230__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4229__auto__ = (((p == null))?null:p);
var m__4230__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4229__auto__)]);
if(!((m__4230__auto__ == null))){
return m__4230__auto__.call(null,p,v);
} else {
var m__4230__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4230__auto____$1 == null))){
return m__4230__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__29519 = arguments.length;
switch (G__29519) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3936__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3936__auto__,mults){
return (function (p1__29517_SHARP_){
if(cljs.core.truth_(p1__29517_SHARP_.call(null,topic))){
return p1__29517_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__29517_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3936__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29520 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29520 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta29521){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta29521 = meta29521;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29520.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_29522,meta29521__$1){
var self__ = this;
var _29522__$1 = this;
return (new cljs.core.async.t_cljs$core$async29520(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta29521__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29520.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_29522){
var self__ = this;
var _29522__$1 = this;
return self__.meta29521;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29520.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29520.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29520.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29520.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29520.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29520.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29520.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29520.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta29521","meta29521",-792049890,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29520.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29520.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29520";

cljs.core.async.t_cljs$core$async29520.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write.call(null,writer__4180__auto__,"cljs.core.async/t_cljs$core$async29520");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29520.
 */
cljs.core.async.__GT_t_cljs$core$async29520 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async29520(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29521){
return (new cljs.core.async.t_cljs$core$async29520(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29521));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async29520(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28406__auto___29640 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28406__auto___29640,mults,ensure_mult,p){
return (function (){
var f__28407__auto__ = (function (){var switch__28316__auto__ = ((function (c__28406__auto___29640,mults,ensure_mult,p){
return (function (state_29594){
var state_val_29595 = (state_29594[(1)]);
if((state_val_29595 === (7))){
var inst_29590 = (state_29594[(2)]);
var state_29594__$1 = state_29594;
var statearr_29596_29641 = state_29594__$1;
(statearr_29596_29641[(2)] = inst_29590);

(statearr_29596_29641[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29595 === (20))){
var state_29594__$1 = state_29594;
var statearr_29597_29642 = state_29594__$1;
(statearr_29597_29642[(2)] = null);

(statearr_29597_29642[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29595 === (1))){
var state_29594__$1 = state_29594;
var statearr_29598_29643 = state_29594__$1;
(statearr_29598_29643[(2)] = null);

(statearr_29598_29643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29595 === (24))){
var inst_29573 = (state_29594[(7)]);
var inst_29582 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29573);
var state_29594__$1 = state_29594;
var statearr_29599_29644 = state_29594__$1;
(statearr_29599_29644[(2)] = inst_29582);

(statearr_29599_29644[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29595 === (4))){
var inst_29525 = (state_29594[(8)]);
var inst_29525__$1 = (state_29594[(2)]);
var inst_29526 = (inst_29525__$1 == null);
var state_29594__$1 = (function (){var statearr_29600 = state_29594;
(statearr_29600[(8)] = inst_29525__$1);

return statearr_29600;
})();
if(cljs.core.truth_(inst_29526)){
var statearr_29601_29645 = state_29594__$1;
(statearr_29601_29645[(1)] = (5));

} else {
var statearr_29602_29646 = state_29594__$1;
(statearr_29602_29646[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29595 === (15))){
var inst_29567 = (state_29594[(2)]);
var state_29594__$1 = state_29594;
var statearr_29603_29647 = state_29594__$1;
(statearr_29603_29647[(2)] = inst_29567);

(statearr_29603_29647[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29595 === (21))){
var inst_29587 = (state_29594[(2)]);
var state_29594__$1 = (function (){var statearr_29604 = state_29594;
(statearr_29604[(9)] = inst_29587);

return statearr_29604;
})();
var statearr_29605_29648 = state_29594__$1;
(statearr_29605_29648[(2)] = null);

(statearr_29605_29648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29595 === (13))){
var inst_29549 = (state_29594[(10)]);
var inst_29551 = cljs.core.chunked_seq_QMARK_.call(null,inst_29549);
var state_29594__$1 = state_29594;
if(inst_29551){
var statearr_29606_29649 = state_29594__$1;
(statearr_29606_29649[(1)] = (16));

} else {
var statearr_29607_29650 = state_29594__$1;
(statearr_29607_29650[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29595 === (22))){
var inst_29579 = (state_29594[(2)]);
var state_29594__$1 = state_29594;
if(cljs.core.truth_(inst_29579)){
var statearr_29608_29651 = state_29594__$1;
(statearr_29608_29651[(1)] = (23));

} else {
var statearr_29609_29652 = state_29594__$1;
(statearr_29609_29652[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29595 === (6))){
var inst_29575 = (state_29594[(11)]);
var inst_29525 = (state_29594[(8)]);
var inst_29573 = (state_29594[(7)]);
var inst_29573__$1 = topic_fn.call(null,inst_29525);
var inst_29574 = cljs.core.deref.call(null,mults);
var inst_29575__$1 = cljs.core.get.call(null,inst_29574,inst_29573__$1);
var state_29594__$1 = (function (){var statearr_29610 = state_29594;
(statearr_29610[(11)] = inst_29575__$1);

(statearr_29610[(7)] = inst_29573__$1);

return statearr_29610;
})();
if(cljs.core.truth_(inst_29575__$1)){
var statearr_29611_29653 = state_29594__$1;
(statearr_29611_29653[(1)] = (19));

} else {
var statearr_29612_29654 = state_29594__$1;
(statearr_29612_29654[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29595 === (25))){
var inst_29584 = (state_29594[(2)]);
var state_29594__$1 = state_29594;
var statearr_29613_29655 = state_29594__$1;
(statearr_29613_29655[(2)] = inst_29584);

(statearr_29613_29655[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29595 === (17))){
var inst_29549 = (state_29594[(10)]);
var inst_29558 = cljs.core.first.call(null,inst_29549);
var inst_29559 = cljs.core.async.muxch_STAR_.call(null,inst_29558);
var inst_29560 = cljs.core.async.close_BANG_.call(null,inst_29559);
var inst_29561 = cljs.core.next.call(null,inst_29549);
var inst_29535 = inst_29561;
var inst_29536 = null;
var inst_29537 = (0);
var inst_29538 = (0);
var state_29594__$1 = (function (){var statearr_29614 = state_29594;
(statearr_29614[(12)] = inst_29538);

(statearr_29614[(13)] = inst_29560);

(statearr_29614[(14)] = inst_29537);

(statearr_29614[(15)] = inst_29536);

(statearr_29614[(16)] = inst_29535);

return statearr_29614;
})();
var statearr_29615_29656 = state_29594__$1;
(statearr_29615_29656[(2)] = null);

(statearr_29615_29656[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29595 === (3))){
var inst_29592 = (state_29594[(2)]);
var state_29594__$1 = state_29594;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29594__$1,inst_29592);
} else {
if((state_val_29595 === (12))){
var inst_29569 = (state_29594[(2)]);
var state_29594__$1 = state_29594;
var statearr_29616_29657 = state_29594__$1;
(statearr_29616_29657[(2)] = inst_29569);

(statearr_29616_29657[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29595 === (2))){
var state_29594__$1 = state_29594;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29594__$1,(4),ch);
} else {
if((state_val_29595 === (23))){
var state_29594__$1 = state_29594;
var statearr_29617_29658 = state_29594__$1;
(statearr_29617_29658[(2)] = null);

(statearr_29617_29658[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29595 === (19))){
var inst_29575 = (state_29594[(11)]);
var inst_29525 = (state_29594[(8)]);
var inst_29577 = cljs.core.async.muxch_STAR_.call(null,inst_29575);
var state_29594__$1 = state_29594;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29594__$1,(22),inst_29577,inst_29525);
} else {
if((state_val_29595 === (11))){
var inst_29549 = (state_29594[(10)]);
var inst_29535 = (state_29594[(16)]);
var inst_29549__$1 = cljs.core.seq.call(null,inst_29535);
var state_29594__$1 = (function (){var statearr_29618 = state_29594;
(statearr_29618[(10)] = inst_29549__$1);

return statearr_29618;
})();
if(inst_29549__$1){
var statearr_29619_29659 = state_29594__$1;
(statearr_29619_29659[(1)] = (13));

} else {
var statearr_29620_29660 = state_29594__$1;
(statearr_29620_29660[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29595 === (9))){
var inst_29571 = (state_29594[(2)]);
var state_29594__$1 = state_29594;
var statearr_29621_29661 = state_29594__$1;
(statearr_29621_29661[(2)] = inst_29571);

(statearr_29621_29661[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29595 === (5))){
var inst_29532 = cljs.core.deref.call(null,mults);
var inst_29533 = cljs.core.vals.call(null,inst_29532);
var inst_29534 = cljs.core.seq.call(null,inst_29533);
var inst_29535 = inst_29534;
var inst_29536 = null;
var inst_29537 = (0);
var inst_29538 = (0);
var state_29594__$1 = (function (){var statearr_29622 = state_29594;
(statearr_29622[(12)] = inst_29538);

(statearr_29622[(14)] = inst_29537);

(statearr_29622[(15)] = inst_29536);

(statearr_29622[(16)] = inst_29535);

return statearr_29622;
})();
var statearr_29623_29662 = state_29594__$1;
(statearr_29623_29662[(2)] = null);

(statearr_29623_29662[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29595 === (14))){
var state_29594__$1 = state_29594;
var statearr_29627_29663 = state_29594__$1;
(statearr_29627_29663[(2)] = null);

(statearr_29627_29663[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29595 === (16))){
var inst_29549 = (state_29594[(10)]);
var inst_29553 = cljs.core.chunk_first.call(null,inst_29549);
var inst_29554 = cljs.core.chunk_rest.call(null,inst_29549);
var inst_29555 = cljs.core.count.call(null,inst_29553);
var inst_29535 = inst_29554;
var inst_29536 = inst_29553;
var inst_29537 = inst_29555;
var inst_29538 = (0);
var state_29594__$1 = (function (){var statearr_29628 = state_29594;
(statearr_29628[(12)] = inst_29538);

(statearr_29628[(14)] = inst_29537);

(statearr_29628[(15)] = inst_29536);

(statearr_29628[(16)] = inst_29535);

return statearr_29628;
})();
var statearr_29629_29664 = state_29594__$1;
(statearr_29629_29664[(2)] = null);

(statearr_29629_29664[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29595 === (10))){
var inst_29538 = (state_29594[(12)]);
var inst_29537 = (state_29594[(14)]);
var inst_29536 = (state_29594[(15)]);
var inst_29535 = (state_29594[(16)]);
var inst_29543 = cljs.core._nth.call(null,inst_29536,inst_29538);
var inst_29544 = cljs.core.async.muxch_STAR_.call(null,inst_29543);
var inst_29545 = cljs.core.async.close_BANG_.call(null,inst_29544);
var inst_29546 = (inst_29538 + (1));
var tmp29624 = inst_29537;
var tmp29625 = inst_29536;
var tmp29626 = inst_29535;
var inst_29535__$1 = tmp29626;
var inst_29536__$1 = tmp29625;
var inst_29537__$1 = tmp29624;
var inst_29538__$1 = inst_29546;
var state_29594__$1 = (function (){var statearr_29630 = state_29594;
(statearr_29630[(12)] = inst_29538__$1);

(statearr_29630[(14)] = inst_29537__$1);

(statearr_29630[(15)] = inst_29536__$1);

(statearr_29630[(17)] = inst_29545);

(statearr_29630[(16)] = inst_29535__$1);

return statearr_29630;
})();
var statearr_29631_29665 = state_29594__$1;
(statearr_29631_29665[(2)] = null);

(statearr_29631_29665[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29595 === (18))){
var inst_29564 = (state_29594[(2)]);
var state_29594__$1 = state_29594;
var statearr_29632_29666 = state_29594__$1;
(statearr_29632_29666[(2)] = inst_29564);

(statearr_29632_29666[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29595 === (8))){
var inst_29538 = (state_29594[(12)]);
var inst_29537 = (state_29594[(14)]);
var inst_29540 = (inst_29538 < inst_29537);
var inst_29541 = inst_29540;
var state_29594__$1 = state_29594;
if(cljs.core.truth_(inst_29541)){
var statearr_29633_29667 = state_29594__$1;
(statearr_29633_29667[(1)] = (10));

} else {
var statearr_29634_29668 = state_29594__$1;
(statearr_29634_29668[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__28406__auto___29640,mults,ensure_mult,p))
;
return ((function (switch__28316__auto__,c__28406__auto___29640,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__28317__auto__ = null;
var cljs$core$async$state_machine__28317__auto____0 = (function (){
var statearr_29635 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29635[(0)] = cljs$core$async$state_machine__28317__auto__);

(statearr_29635[(1)] = (1));

return statearr_29635;
});
var cljs$core$async$state_machine__28317__auto____1 = (function (state_29594){
while(true){
var ret_value__28318__auto__ = (function (){try{while(true){
var result__28319__auto__ = switch__28316__auto__.call(null,state_29594);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28319__auto__;
}
break;
}
}catch (e29636){if((e29636 instanceof Object)){
var ex__28320__auto__ = e29636;
var statearr_29637_29669 = state_29594;
(statearr_29637_29669[(5)] = ex__28320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29594);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29636;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29670 = state_29594;
state_29594 = G__29670;
continue;
} else {
return ret_value__28318__auto__;
}
break;
}
});
cljs$core$async$state_machine__28317__auto__ = function(state_29594){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28317__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28317__auto____1.call(this,state_29594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28317__auto____0;
cljs$core$async$state_machine__28317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28317__auto____1;
return cljs$core$async$state_machine__28317__auto__;
})()
;})(switch__28316__auto__,c__28406__auto___29640,mults,ensure_mult,p))
})();
var state__28408__auto__ = (function (){var statearr_29638 = f__28407__auto__.call(null);
(statearr_29638[(6)] = c__28406__auto___29640);

return statearr_29638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28408__auto__);
});})(c__28406__auto___29640,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__29672 = arguments.length;
switch (G__29672) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__29675 = arguments.length;
switch (G__29675) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__29678 = arguments.length;
switch (G__29678) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__28406__auto___29745 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28406__auto___29745,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__28407__auto__ = (function (){var switch__28316__auto__ = ((function (c__28406__auto___29745,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29717){
var state_val_29718 = (state_29717[(1)]);
if((state_val_29718 === (7))){
var state_29717__$1 = state_29717;
var statearr_29719_29746 = state_29717__$1;
(statearr_29719_29746[(2)] = null);

(statearr_29719_29746[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29718 === (1))){
var state_29717__$1 = state_29717;
var statearr_29720_29747 = state_29717__$1;
(statearr_29720_29747[(2)] = null);

(statearr_29720_29747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29718 === (4))){
var inst_29681 = (state_29717[(7)]);
var inst_29683 = (inst_29681 < cnt);
var state_29717__$1 = state_29717;
if(cljs.core.truth_(inst_29683)){
var statearr_29721_29748 = state_29717__$1;
(statearr_29721_29748[(1)] = (6));

} else {
var statearr_29722_29749 = state_29717__$1;
(statearr_29722_29749[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29718 === (15))){
var inst_29713 = (state_29717[(2)]);
var state_29717__$1 = state_29717;
var statearr_29723_29750 = state_29717__$1;
(statearr_29723_29750[(2)] = inst_29713);

(statearr_29723_29750[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29718 === (13))){
var inst_29706 = cljs.core.async.close_BANG_.call(null,out);
var state_29717__$1 = state_29717;
var statearr_29724_29751 = state_29717__$1;
(statearr_29724_29751[(2)] = inst_29706);

(statearr_29724_29751[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29718 === (6))){
var state_29717__$1 = state_29717;
var statearr_29725_29752 = state_29717__$1;
(statearr_29725_29752[(2)] = null);

(statearr_29725_29752[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29718 === (3))){
var inst_29715 = (state_29717[(2)]);
var state_29717__$1 = state_29717;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29717__$1,inst_29715);
} else {
if((state_val_29718 === (12))){
var inst_29703 = (state_29717[(8)]);
var inst_29703__$1 = (state_29717[(2)]);
var inst_29704 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29703__$1);
var state_29717__$1 = (function (){var statearr_29726 = state_29717;
(statearr_29726[(8)] = inst_29703__$1);

return statearr_29726;
})();
if(cljs.core.truth_(inst_29704)){
var statearr_29727_29753 = state_29717__$1;
(statearr_29727_29753[(1)] = (13));

} else {
var statearr_29728_29754 = state_29717__$1;
(statearr_29728_29754[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29718 === (2))){
var inst_29680 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29681 = (0);
var state_29717__$1 = (function (){var statearr_29729 = state_29717;
(statearr_29729[(9)] = inst_29680);

(statearr_29729[(7)] = inst_29681);

return statearr_29729;
})();
var statearr_29730_29755 = state_29717__$1;
(statearr_29730_29755[(2)] = null);

(statearr_29730_29755[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29718 === (11))){
var inst_29681 = (state_29717[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29717,(10),Object,null,(9));
var inst_29690 = chs__$1.call(null,inst_29681);
var inst_29691 = done.call(null,inst_29681);
var inst_29692 = cljs.core.async.take_BANG_.call(null,inst_29690,inst_29691);
var state_29717__$1 = state_29717;
var statearr_29731_29756 = state_29717__$1;
(statearr_29731_29756[(2)] = inst_29692);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29717__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29718 === (9))){
var inst_29681 = (state_29717[(7)]);
var inst_29694 = (state_29717[(2)]);
var inst_29695 = (inst_29681 + (1));
var inst_29681__$1 = inst_29695;
var state_29717__$1 = (function (){var statearr_29732 = state_29717;
(statearr_29732[(10)] = inst_29694);

(statearr_29732[(7)] = inst_29681__$1);

return statearr_29732;
})();
var statearr_29733_29757 = state_29717__$1;
(statearr_29733_29757[(2)] = null);

(statearr_29733_29757[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29718 === (5))){
var inst_29701 = (state_29717[(2)]);
var state_29717__$1 = (function (){var statearr_29734 = state_29717;
(statearr_29734[(11)] = inst_29701);

return statearr_29734;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29717__$1,(12),dchan);
} else {
if((state_val_29718 === (14))){
var inst_29703 = (state_29717[(8)]);
var inst_29708 = cljs.core.apply.call(null,f,inst_29703);
var state_29717__$1 = state_29717;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29717__$1,(16),out,inst_29708);
} else {
if((state_val_29718 === (16))){
var inst_29710 = (state_29717[(2)]);
var state_29717__$1 = (function (){var statearr_29735 = state_29717;
(statearr_29735[(12)] = inst_29710);

return statearr_29735;
})();
var statearr_29736_29758 = state_29717__$1;
(statearr_29736_29758[(2)] = null);

(statearr_29736_29758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29718 === (10))){
var inst_29685 = (state_29717[(2)]);
var inst_29686 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29717__$1 = (function (){var statearr_29737 = state_29717;
(statearr_29737[(13)] = inst_29685);

return statearr_29737;
})();
var statearr_29738_29759 = state_29717__$1;
(statearr_29738_29759[(2)] = inst_29686);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29717__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29718 === (8))){
var inst_29699 = (state_29717[(2)]);
var state_29717__$1 = state_29717;
var statearr_29739_29760 = state_29717__$1;
(statearr_29739_29760[(2)] = inst_29699);

(statearr_29739_29760[(1)] = (5));


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
});})(c__28406__auto___29745,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__28316__auto__,c__28406__auto___29745,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__28317__auto__ = null;
var cljs$core$async$state_machine__28317__auto____0 = (function (){
var statearr_29740 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29740[(0)] = cljs$core$async$state_machine__28317__auto__);

(statearr_29740[(1)] = (1));

return statearr_29740;
});
var cljs$core$async$state_machine__28317__auto____1 = (function (state_29717){
while(true){
var ret_value__28318__auto__ = (function (){try{while(true){
var result__28319__auto__ = switch__28316__auto__.call(null,state_29717);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28319__auto__;
}
break;
}
}catch (e29741){if((e29741 instanceof Object)){
var ex__28320__auto__ = e29741;
var statearr_29742_29761 = state_29717;
(statearr_29742_29761[(5)] = ex__28320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29717);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29741;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29762 = state_29717;
state_29717 = G__29762;
continue;
} else {
return ret_value__28318__auto__;
}
break;
}
});
cljs$core$async$state_machine__28317__auto__ = function(state_29717){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28317__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28317__auto____1.call(this,state_29717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28317__auto____0;
cljs$core$async$state_machine__28317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28317__auto____1;
return cljs$core$async$state_machine__28317__auto__;
})()
;})(switch__28316__auto__,c__28406__auto___29745,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__28408__auto__ = (function (){var statearr_29743 = f__28407__auto__.call(null);
(statearr_29743[(6)] = c__28406__auto___29745);

return statearr_29743;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28408__auto__);
});})(c__28406__auto___29745,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__29765 = arguments.length;
switch (G__29765) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28406__auto___29819 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28406__auto___29819,out){
return (function (){
var f__28407__auto__ = (function (){var switch__28316__auto__ = ((function (c__28406__auto___29819,out){
return (function (state_29797){
var state_val_29798 = (state_29797[(1)]);
if((state_val_29798 === (7))){
var inst_29777 = (state_29797[(7)]);
var inst_29776 = (state_29797[(8)]);
var inst_29776__$1 = (state_29797[(2)]);
var inst_29777__$1 = cljs.core.nth.call(null,inst_29776__$1,(0),null);
var inst_29778 = cljs.core.nth.call(null,inst_29776__$1,(1),null);
var inst_29779 = (inst_29777__$1 == null);
var state_29797__$1 = (function (){var statearr_29799 = state_29797;
(statearr_29799[(9)] = inst_29778);

(statearr_29799[(7)] = inst_29777__$1);

(statearr_29799[(8)] = inst_29776__$1);

return statearr_29799;
})();
if(cljs.core.truth_(inst_29779)){
var statearr_29800_29820 = state_29797__$1;
(statearr_29800_29820[(1)] = (8));

} else {
var statearr_29801_29821 = state_29797__$1;
(statearr_29801_29821[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29798 === (1))){
var inst_29766 = cljs.core.vec.call(null,chs);
var inst_29767 = inst_29766;
var state_29797__$1 = (function (){var statearr_29802 = state_29797;
(statearr_29802[(10)] = inst_29767);

return statearr_29802;
})();
var statearr_29803_29822 = state_29797__$1;
(statearr_29803_29822[(2)] = null);

(statearr_29803_29822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29798 === (4))){
var inst_29767 = (state_29797[(10)]);
var state_29797__$1 = state_29797;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29797__$1,(7),inst_29767);
} else {
if((state_val_29798 === (6))){
var inst_29793 = (state_29797[(2)]);
var state_29797__$1 = state_29797;
var statearr_29804_29823 = state_29797__$1;
(statearr_29804_29823[(2)] = inst_29793);

(statearr_29804_29823[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29798 === (3))){
var inst_29795 = (state_29797[(2)]);
var state_29797__$1 = state_29797;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29797__$1,inst_29795);
} else {
if((state_val_29798 === (2))){
var inst_29767 = (state_29797[(10)]);
var inst_29769 = cljs.core.count.call(null,inst_29767);
var inst_29770 = (inst_29769 > (0));
var state_29797__$1 = state_29797;
if(cljs.core.truth_(inst_29770)){
var statearr_29806_29824 = state_29797__$1;
(statearr_29806_29824[(1)] = (4));

} else {
var statearr_29807_29825 = state_29797__$1;
(statearr_29807_29825[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29798 === (11))){
var inst_29767 = (state_29797[(10)]);
var inst_29786 = (state_29797[(2)]);
var tmp29805 = inst_29767;
var inst_29767__$1 = tmp29805;
var state_29797__$1 = (function (){var statearr_29808 = state_29797;
(statearr_29808[(10)] = inst_29767__$1);

(statearr_29808[(11)] = inst_29786);

return statearr_29808;
})();
var statearr_29809_29826 = state_29797__$1;
(statearr_29809_29826[(2)] = null);

(statearr_29809_29826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29798 === (9))){
var inst_29777 = (state_29797[(7)]);
var state_29797__$1 = state_29797;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29797__$1,(11),out,inst_29777);
} else {
if((state_val_29798 === (5))){
var inst_29791 = cljs.core.async.close_BANG_.call(null,out);
var state_29797__$1 = state_29797;
var statearr_29810_29827 = state_29797__$1;
(statearr_29810_29827[(2)] = inst_29791);

(statearr_29810_29827[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29798 === (10))){
var inst_29789 = (state_29797[(2)]);
var state_29797__$1 = state_29797;
var statearr_29811_29828 = state_29797__$1;
(statearr_29811_29828[(2)] = inst_29789);

(statearr_29811_29828[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29798 === (8))){
var inst_29778 = (state_29797[(9)]);
var inst_29767 = (state_29797[(10)]);
var inst_29777 = (state_29797[(7)]);
var inst_29776 = (state_29797[(8)]);
var inst_29781 = (function (){var cs = inst_29767;
var vec__29772 = inst_29776;
var v = inst_29777;
var c = inst_29778;
return ((function (cs,vec__29772,v,c,inst_29778,inst_29767,inst_29777,inst_29776,state_val_29798,c__28406__auto___29819,out){
return (function (p1__29763_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29763_SHARP_);
});
;})(cs,vec__29772,v,c,inst_29778,inst_29767,inst_29777,inst_29776,state_val_29798,c__28406__auto___29819,out))
})();
var inst_29782 = cljs.core.filterv.call(null,inst_29781,inst_29767);
var inst_29767__$1 = inst_29782;
var state_29797__$1 = (function (){var statearr_29812 = state_29797;
(statearr_29812[(10)] = inst_29767__$1);

return statearr_29812;
})();
var statearr_29813_29829 = state_29797__$1;
(statearr_29813_29829[(2)] = null);

(statearr_29813_29829[(1)] = (2));


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
});})(c__28406__auto___29819,out))
;
return ((function (switch__28316__auto__,c__28406__auto___29819,out){
return (function() {
var cljs$core$async$state_machine__28317__auto__ = null;
var cljs$core$async$state_machine__28317__auto____0 = (function (){
var statearr_29814 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29814[(0)] = cljs$core$async$state_machine__28317__auto__);

(statearr_29814[(1)] = (1));

return statearr_29814;
});
var cljs$core$async$state_machine__28317__auto____1 = (function (state_29797){
while(true){
var ret_value__28318__auto__ = (function (){try{while(true){
var result__28319__auto__ = switch__28316__auto__.call(null,state_29797);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28319__auto__;
}
break;
}
}catch (e29815){if((e29815 instanceof Object)){
var ex__28320__auto__ = e29815;
var statearr_29816_29830 = state_29797;
(statearr_29816_29830[(5)] = ex__28320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29797);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29815;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29831 = state_29797;
state_29797 = G__29831;
continue;
} else {
return ret_value__28318__auto__;
}
break;
}
});
cljs$core$async$state_machine__28317__auto__ = function(state_29797){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28317__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28317__auto____1.call(this,state_29797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28317__auto____0;
cljs$core$async$state_machine__28317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28317__auto____1;
return cljs$core$async$state_machine__28317__auto__;
})()
;})(switch__28316__auto__,c__28406__auto___29819,out))
})();
var state__28408__auto__ = (function (){var statearr_29817 = f__28407__auto__.call(null);
(statearr_29817[(6)] = c__28406__auto___29819);

return statearr_29817;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28408__auto__);
});})(c__28406__auto___29819,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__29833 = arguments.length;
switch (G__29833) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28406__auto___29878 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28406__auto___29878,out){
return (function (){
var f__28407__auto__ = (function (){var switch__28316__auto__ = ((function (c__28406__auto___29878,out){
return (function (state_29857){
var state_val_29858 = (state_29857[(1)]);
if((state_val_29858 === (7))){
var inst_29839 = (state_29857[(7)]);
var inst_29839__$1 = (state_29857[(2)]);
var inst_29840 = (inst_29839__$1 == null);
var inst_29841 = cljs.core.not.call(null,inst_29840);
var state_29857__$1 = (function (){var statearr_29859 = state_29857;
(statearr_29859[(7)] = inst_29839__$1);

return statearr_29859;
})();
if(inst_29841){
var statearr_29860_29879 = state_29857__$1;
(statearr_29860_29879[(1)] = (8));

} else {
var statearr_29861_29880 = state_29857__$1;
(statearr_29861_29880[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29858 === (1))){
var inst_29834 = (0);
var state_29857__$1 = (function (){var statearr_29862 = state_29857;
(statearr_29862[(8)] = inst_29834);

return statearr_29862;
})();
var statearr_29863_29881 = state_29857__$1;
(statearr_29863_29881[(2)] = null);

(statearr_29863_29881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29858 === (4))){
var state_29857__$1 = state_29857;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29857__$1,(7),ch);
} else {
if((state_val_29858 === (6))){
var inst_29852 = (state_29857[(2)]);
var state_29857__$1 = state_29857;
var statearr_29864_29882 = state_29857__$1;
(statearr_29864_29882[(2)] = inst_29852);

(statearr_29864_29882[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29858 === (3))){
var inst_29854 = (state_29857[(2)]);
var inst_29855 = cljs.core.async.close_BANG_.call(null,out);
var state_29857__$1 = (function (){var statearr_29865 = state_29857;
(statearr_29865[(9)] = inst_29854);

return statearr_29865;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29857__$1,inst_29855);
} else {
if((state_val_29858 === (2))){
var inst_29834 = (state_29857[(8)]);
var inst_29836 = (inst_29834 < n);
var state_29857__$1 = state_29857;
if(cljs.core.truth_(inst_29836)){
var statearr_29866_29883 = state_29857__$1;
(statearr_29866_29883[(1)] = (4));

} else {
var statearr_29867_29884 = state_29857__$1;
(statearr_29867_29884[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29858 === (11))){
var inst_29834 = (state_29857[(8)]);
var inst_29844 = (state_29857[(2)]);
var inst_29845 = (inst_29834 + (1));
var inst_29834__$1 = inst_29845;
var state_29857__$1 = (function (){var statearr_29868 = state_29857;
(statearr_29868[(10)] = inst_29844);

(statearr_29868[(8)] = inst_29834__$1);

return statearr_29868;
})();
var statearr_29869_29885 = state_29857__$1;
(statearr_29869_29885[(2)] = null);

(statearr_29869_29885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29858 === (9))){
var state_29857__$1 = state_29857;
var statearr_29870_29886 = state_29857__$1;
(statearr_29870_29886[(2)] = null);

(statearr_29870_29886[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29858 === (5))){
var state_29857__$1 = state_29857;
var statearr_29871_29887 = state_29857__$1;
(statearr_29871_29887[(2)] = null);

(statearr_29871_29887[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29858 === (10))){
var inst_29849 = (state_29857[(2)]);
var state_29857__$1 = state_29857;
var statearr_29872_29888 = state_29857__$1;
(statearr_29872_29888[(2)] = inst_29849);

(statearr_29872_29888[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29858 === (8))){
var inst_29839 = (state_29857[(7)]);
var state_29857__$1 = state_29857;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29857__$1,(11),out,inst_29839);
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
});})(c__28406__auto___29878,out))
;
return ((function (switch__28316__auto__,c__28406__auto___29878,out){
return (function() {
var cljs$core$async$state_machine__28317__auto__ = null;
var cljs$core$async$state_machine__28317__auto____0 = (function (){
var statearr_29873 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29873[(0)] = cljs$core$async$state_machine__28317__auto__);

(statearr_29873[(1)] = (1));

return statearr_29873;
});
var cljs$core$async$state_machine__28317__auto____1 = (function (state_29857){
while(true){
var ret_value__28318__auto__ = (function (){try{while(true){
var result__28319__auto__ = switch__28316__auto__.call(null,state_29857);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28319__auto__;
}
break;
}
}catch (e29874){if((e29874 instanceof Object)){
var ex__28320__auto__ = e29874;
var statearr_29875_29889 = state_29857;
(statearr_29875_29889[(5)] = ex__28320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29857);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29874;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29890 = state_29857;
state_29857 = G__29890;
continue;
} else {
return ret_value__28318__auto__;
}
break;
}
});
cljs$core$async$state_machine__28317__auto__ = function(state_29857){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28317__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28317__auto____1.call(this,state_29857);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28317__auto____0;
cljs$core$async$state_machine__28317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28317__auto____1;
return cljs$core$async$state_machine__28317__auto__;
})()
;})(switch__28316__auto__,c__28406__auto___29878,out))
})();
var state__28408__auto__ = (function (){var statearr_29876 = f__28407__auto__.call(null);
(statearr_29876[(6)] = c__28406__auto___29878);

return statearr_29876;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28408__auto__);
});})(c__28406__auto___29878,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29892 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29892 = (function (f,ch,meta29893){
this.f = f;
this.ch = ch;
this.meta29893 = meta29893;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29892.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29894,meta29893__$1){
var self__ = this;
var _29894__$1 = this;
return (new cljs.core.async.t_cljs$core$async29892(self__.f,self__.ch,meta29893__$1));
});

cljs.core.async.t_cljs$core$async29892.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29894){
var self__ = this;
var _29894__$1 = this;
return self__.meta29893;
});

cljs.core.async.t_cljs$core$async29892.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29892.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29892.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29892.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29892.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29895 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29895 = (function (f,ch,meta29893,_,fn1,meta29896){
this.f = f;
this.ch = ch;
this.meta29893 = meta29893;
this._ = _;
this.fn1 = fn1;
this.meta29896 = meta29896;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29895.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29897,meta29896__$1){
var self__ = this;
var _29897__$1 = this;
return (new cljs.core.async.t_cljs$core$async29895(self__.f,self__.ch,self__.meta29893,self__._,self__.fn1,meta29896__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async29895.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29897){
var self__ = this;
var _29897__$1 = this;
return self__.meta29896;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29895.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29895.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29895.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29895.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29891_SHARP_){
return f1.call(null,(((p1__29891_SHARP_ == null))?null:self__.f.call(null,p1__29891_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async29895.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29893","meta29893",-1516329011,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29892","cljs.core.async/t_cljs$core$async29892",-740629805,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29896","meta29896",-1262846510,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29895.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29895.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29895";

cljs.core.async.t_cljs$core$async29895.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write.call(null,writer__4180__auto__,"cljs.core.async/t_cljs$core$async29895");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29895.
 */
cljs.core.async.__GT_t_cljs$core$async29895 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29895(f__$1,ch__$1,meta29893__$1,___$2,fn1__$1,meta29896){
return (new cljs.core.async.t_cljs$core$async29895(f__$1,ch__$1,meta29893__$1,___$2,fn1__$1,meta29896));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async29895(self__.f,self__.ch,self__.meta29893,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3925__auto__ = ret;
if(cljs.core.truth_(and__3925__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3925__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async29892.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29892.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async29892.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29893","meta29893",-1516329011,null)], null);
});

cljs.core.async.t_cljs$core$async29892.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29892.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29892";

cljs.core.async.t_cljs$core$async29892.cljs$lang$ctorPrWriter = (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write.call(null,writer__4180__auto__,"cljs.core.async/t_cljs$core$async29892");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29892.
 */
cljs.core.async.__GT_t_cljs$core$async29892 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29892(f__$1,ch__$1,meta29893){
return (new cljs.core.async.t_cljs$core$async29892(f__$1,ch__$1,meta29893));
});

}

return (new cljs.core.async.t_cljs$core$async29892(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29898 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29898 = (function (f,ch,meta29899){
this.f = f;
this.ch = ch;
this.meta29899 = meta29899;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29898.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29900,meta29899__$1){
var self__ = this;
var _29900__$1 = this;
return (new cljs.core.async.t_cljs$core$async29898(self__.f,self__.ch,meta29899__$1));
});

cljs.core.async.t_cljs$core$async29898.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29900){
var self__ = this;
var _29900__$1 = this;
return self__.meta29899;
});

cljs.core.async.t_cljs$core$async29898.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29898.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29898.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29898.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29898.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29898.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async29898.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29899","meta29899",178012200,null)], null);
});

cljs.core.async.t_cljs$core$async29898.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29898.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29898";

cljs.core.async.t_cljs$core$async29898.cljs$lang$ctorPrWriter = (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write.call(null,writer__4180__auto__,"cljs.core.async/t_cljs$core$async29898");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29898.
 */
cljs.core.async.__GT_t_cljs$core$async29898 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29898(f__$1,ch__$1,meta29899){
return (new cljs.core.async.t_cljs$core$async29898(f__$1,ch__$1,meta29899));
});

}

return (new cljs.core.async.t_cljs$core$async29898(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29901 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29901 = (function (p,ch,meta29902){
this.p = p;
this.ch = ch;
this.meta29902 = meta29902;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29901.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29903,meta29902__$1){
var self__ = this;
var _29903__$1 = this;
return (new cljs.core.async.t_cljs$core$async29901(self__.p,self__.ch,meta29902__$1));
});

cljs.core.async.t_cljs$core$async29901.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29903){
var self__ = this;
var _29903__$1 = this;
return self__.meta29902;
});

cljs.core.async.t_cljs$core$async29901.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29901.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29901.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29901.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29901.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29901.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29901.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async29901.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29902","meta29902",2088606056,null)], null);
});

cljs.core.async.t_cljs$core$async29901.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29901.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29901";

cljs.core.async.t_cljs$core$async29901.cljs$lang$ctorPrWriter = (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write.call(null,writer__4180__auto__,"cljs.core.async/t_cljs$core$async29901");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29901.
 */
cljs.core.async.__GT_t_cljs$core$async29901 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29901(p__$1,ch__$1,meta29902){
return (new cljs.core.async.t_cljs$core$async29901(p__$1,ch__$1,meta29902));
});

}

return (new cljs.core.async.t_cljs$core$async29901(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__29905 = arguments.length;
switch (G__29905) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28406__auto___29945 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28406__auto___29945,out){
return (function (){
var f__28407__auto__ = (function (){var switch__28316__auto__ = ((function (c__28406__auto___29945,out){
return (function (state_29926){
var state_val_29927 = (state_29926[(1)]);
if((state_val_29927 === (7))){
var inst_29922 = (state_29926[(2)]);
var state_29926__$1 = state_29926;
var statearr_29928_29946 = state_29926__$1;
(statearr_29928_29946[(2)] = inst_29922);

(statearr_29928_29946[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29927 === (1))){
var state_29926__$1 = state_29926;
var statearr_29929_29947 = state_29926__$1;
(statearr_29929_29947[(2)] = null);

(statearr_29929_29947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29927 === (4))){
var inst_29908 = (state_29926[(7)]);
var inst_29908__$1 = (state_29926[(2)]);
var inst_29909 = (inst_29908__$1 == null);
var state_29926__$1 = (function (){var statearr_29930 = state_29926;
(statearr_29930[(7)] = inst_29908__$1);

return statearr_29930;
})();
if(cljs.core.truth_(inst_29909)){
var statearr_29931_29948 = state_29926__$1;
(statearr_29931_29948[(1)] = (5));

} else {
var statearr_29932_29949 = state_29926__$1;
(statearr_29932_29949[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29927 === (6))){
var inst_29908 = (state_29926[(7)]);
var inst_29913 = p.call(null,inst_29908);
var state_29926__$1 = state_29926;
if(cljs.core.truth_(inst_29913)){
var statearr_29933_29950 = state_29926__$1;
(statearr_29933_29950[(1)] = (8));

} else {
var statearr_29934_29951 = state_29926__$1;
(statearr_29934_29951[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29927 === (3))){
var inst_29924 = (state_29926[(2)]);
var state_29926__$1 = state_29926;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29926__$1,inst_29924);
} else {
if((state_val_29927 === (2))){
var state_29926__$1 = state_29926;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29926__$1,(4),ch);
} else {
if((state_val_29927 === (11))){
var inst_29916 = (state_29926[(2)]);
var state_29926__$1 = state_29926;
var statearr_29935_29952 = state_29926__$1;
(statearr_29935_29952[(2)] = inst_29916);

(statearr_29935_29952[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29927 === (9))){
var state_29926__$1 = state_29926;
var statearr_29936_29953 = state_29926__$1;
(statearr_29936_29953[(2)] = null);

(statearr_29936_29953[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29927 === (5))){
var inst_29911 = cljs.core.async.close_BANG_.call(null,out);
var state_29926__$1 = state_29926;
var statearr_29937_29954 = state_29926__$1;
(statearr_29937_29954[(2)] = inst_29911);

(statearr_29937_29954[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29927 === (10))){
var inst_29919 = (state_29926[(2)]);
var state_29926__$1 = (function (){var statearr_29938 = state_29926;
(statearr_29938[(8)] = inst_29919);

return statearr_29938;
})();
var statearr_29939_29955 = state_29926__$1;
(statearr_29939_29955[(2)] = null);

(statearr_29939_29955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29927 === (8))){
var inst_29908 = (state_29926[(7)]);
var state_29926__$1 = state_29926;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29926__$1,(11),out,inst_29908);
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
});})(c__28406__auto___29945,out))
;
return ((function (switch__28316__auto__,c__28406__auto___29945,out){
return (function() {
var cljs$core$async$state_machine__28317__auto__ = null;
var cljs$core$async$state_machine__28317__auto____0 = (function (){
var statearr_29940 = [null,null,null,null,null,null,null,null,null];
(statearr_29940[(0)] = cljs$core$async$state_machine__28317__auto__);

(statearr_29940[(1)] = (1));

return statearr_29940;
});
var cljs$core$async$state_machine__28317__auto____1 = (function (state_29926){
while(true){
var ret_value__28318__auto__ = (function (){try{while(true){
var result__28319__auto__ = switch__28316__auto__.call(null,state_29926);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28319__auto__;
}
break;
}
}catch (e29941){if((e29941 instanceof Object)){
var ex__28320__auto__ = e29941;
var statearr_29942_29956 = state_29926;
(statearr_29942_29956[(5)] = ex__28320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29926);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29941;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29957 = state_29926;
state_29926 = G__29957;
continue;
} else {
return ret_value__28318__auto__;
}
break;
}
});
cljs$core$async$state_machine__28317__auto__ = function(state_29926){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28317__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28317__auto____1.call(this,state_29926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28317__auto____0;
cljs$core$async$state_machine__28317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28317__auto____1;
return cljs$core$async$state_machine__28317__auto__;
})()
;})(switch__28316__auto__,c__28406__auto___29945,out))
})();
var state__28408__auto__ = (function (){var statearr_29943 = f__28407__auto__.call(null);
(statearr_29943[(6)] = c__28406__auto___29945);

return statearr_29943;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28408__auto__);
});})(c__28406__auto___29945,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__29959 = arguments.length;
switch (G__29959) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__28406__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28406__auto__){
return (function (){
var f__28407__auto__ = (function (){var switch__28316__auto__ = ((function (c__28406__auto__){
return (function (state_30022){
var state_val_30023 = (state_30022[(1)]);
if((state_val_30023 === (7))){
var inst_30018 = (state_30022[(2)]);
var state_30022__$1 = state_30022;
var statearr_30024_30062 = state_30022__$1;
(statearr_30024_30062[(2)] = inst_30018);

(statearr_30024_30062[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30023 === (20))){
var inst_29988 = (state_30022[(7)]);
var inst_29999 = (state_30022[(2)]);
var inst_30000 = cljs.core.next.call(null,inst_29988);
var inst_29974 = inst_30000;
var inst_29975 = null;
var inst_29976 = (0);
var inst_29977 = (0);
var state_30022__$1 = (function (){var statearr_30025 = state_30022;
(statearr_30025[(8)] = inst_29976);

(statearr_30025[(9)] = inst_29975);

(statearr_30025[(10)] = inst_29999);

(statearr_30025[(11)] = inst_29977);

(statearr_30025[(12)] = inst_29974);

return statearr_30025;
})();
var statearr_30026_30063 = state_30022__$1;
(statearr_30026_30063[(2)] = null);

(statearr_30026_30063[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30023 === (1))){
var state_30022__$1 = state_30022;
var statearr_30027_30064 = state_30022__$1;
(statearr_30027_30064[(2)] = null);

(statearr_30027_30064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30023 === (4))){
var inst_29963 = (state_30022[(13)]);
var inst_29963__$1 = (state_30022[(2)]);
var inst_29964 = (inst_29963__$1 == null);
var state_30022__$1 = (function (){var statearr_30028 = state_30022;
(statearr_30028[(13)] = inst_29963__$1);

return statearr_30028;
})();
if(cljs.core.truth_(inst_29964)){
var statearr_30029_30065 = state_30022__$1;
(statearr_30029_30065[(1)] = (5));

} else {
var statearr_30030_30066 = state_30022__$1;
(statearr_30030_30066[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30023 === (15))){
var state_30022__$1 = state_30022;
var statearr_30034_30067 = state_30022__$1;
(statearr_30034_30067[(2)] = null);

(statearr_30034_30067[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30023 === (21))){
var state_30022__$1 = state_30022;
var statearr_30035_30068 = state_30022__$1;
(statearr_30035_30068[(2)] = null);

(statearr_30035_30068[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30023 === (13))){
var inst_29976 = (state_30022[(8)]);
var inst_29975 = (state_30022[(9)]);
var inst_29977 = (state_30022[(11)]);
var inst_29974 = (state_30022[(12)]);
var inst_29984 = (state_30022[(2)]);
var inst_29985 = (inst_29977 + (1));
var tmp30031 = inst_29976;
var tmp30032 = inst_29975;
var tmp30033 = inst_29974;
var inst_29974__$1 = tmp30033;
var inst_29975__$1 = tmp30032;
var inst_29976__$1 = tmp30031;
var inst_29977__$1 = inst_29985;
var state_30022__$1 = (function (){var statearr_30036 = state_30022;
(statearr_30036[(8)] = inst_29976__$1);

(statearr_30036[(9)] = inst_29975__$1);

(statearr_30036[(11)] = inst_29977__$1);

(statearr_30036[(12)] = inst_29974__$1);

(statearr_30036[(14)] = inst_29984);

return statearr_30036;
})();
var statearr_30037_30069 = state_30022__$1;
(statearr_30037_30069[(2)] = null);

(statearr_30037_30069[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30023 === (22))){
var state_30022__$1 = state_30022;
var statearr_30038_30070 = state_30022__$1;
(statearr_30038_30070[(2)] = null);

(statearr_30038_30070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30023 === (6))){
var inst_29963 = (state_30022[(13)]);
var inst_29972 = f.call(null,inst_29963);
var inst_29973 = cljs.core.seq.call(null,inst_29972);
var inst_29974 = inst_29973;
var inst_29975 = null;
var inst_29976 = (0);
var inst_29977 = (0);
var state_30022__$1 = (function (){var statearr_30039 = state_30022;
(statearr_30039[(8)] = inst_29976);

(statearr_30039[(9)] = inst_29975);

(statearr_30039[(11)] = inst_29977);

(statearr_30039[(12)] = inst_29974);

return statearr_30039;
})();
var statearr_30040_30071 = state_30022__$1;
(statearr_30040_30071[(2)] = null);

(statearr_30040_30071[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30023 === (17))){
var inst_29988 = (state_30022[(7)]);
var inst_29992 = cljs.core.chunk_first.call(null,inst_29988);
var inst_29993 = cljs.core.chunk_rest.call(null,inst_29988);
var inst_29994 = cljs.core.count.call(null,inst_29992);
var inst_29974 = inst_29993;
var inst_29975 = inst_29992;
var inst_29976 = inst_29994;
var inst_29977 = (0);
var state_30022__$1 = (function (){var statearr_30041 = state_30022;
(statearr_30041[(8)] = inst_29976);

(statearr_30041[(9)] = inst_29975);

(statearr_30041[(11)] = inst_29977);

(statearr_30041[(12)] = inst_29974);

return statearr_30041;
})();
var statearr_30042_30072 = state_30022__$1;
(statearr_30042_30072[(2)] = null);

(statearr_30042_30072[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30023 === (3))){
var inst_30020 = (state_30022[(2)]);
var state_30022__$1 = state_30022;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30022__$1,inst_30020);
} else {
if((state_val_30023 === (12))){
var inst_30008 = (state_30022[(2)]);
var state_30022__$1 = state_30022;
var statearr_30043_30073 = state_30022__$1;
(statearr_30043_30073[(2)] = inst_30008);

(statearr_30043_30073[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30023 === (2))){
var state_30022__$1 = state_30022;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30022__$1,(4),in$);
} else {
if((state_val_30023 === (23))){
var inst_30016 = (state_30022[(2)]);
var state_30022__$1 = state_30022;
var statearr_30044_30074 = state_30022__$1;
(statearr_30044_30074[(2)] = inst_30016);

(statearr_30044_30074[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30023 === (19))){
var inst_30003 = (state_30022[(2)]);
var state_30022__$1 = state_30022;
var statearr_30045_30075 = state_30022__$1;
(statearr_30045_30075[(2)] = inst_30003);

(statearr_30045_30075[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30023 === (11))){
var inst_29988 = (state_30022[(7)]);
var inst_29974 = (state_30022[(12)]);
var inst_29988__$1 = cljs.core.seq.call(null,inst_29974);
var state_30022__$1 = (function (){var statearr_30046 = state_30022;
(statearr_30046[(7)] = inst_29988__$1);

return statearr_30046;
})();
if(inst_29988__$1){
var statearr_30047_30076 = state_30022__$1;
(statearr_30047_30076[(1)] = (14));

} else {
var statearr_30048_30077 = state_30022__$1;
(statearr_30048_30077[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30023 === (9))){
var inst_30010 = (state_30022[(2)]);
var inst_30011 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_30022__$1 = (function (){var statearr_30049 = state_30022;
(statearr_30049[(15)] = inst_30010);

return statearr_30049;
})();
if(cljs.core.truth_(inst_30011)){
var statearr_30050_30078 = state_30022__$1;
(statearr_30050_30078[(1)] = (21));

} else {
var statearr_30051_30079 = state_30022__$1;
(statearr_30051_30079[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30023 === (5))){
var inst_29966 = cljs.core.async.close_BANG_.call(null,out);
var state_30022__$1 = state_30022;
var statearr_30052_30080 = state_30022__$1;
(statearr_30052_30080[(2)] = inst_29966);

(statearr_30052_30080[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30023 === (14))){
var inst_29988 = (state_30022[(7)]);
var inst_29990 = cljs.core.chunked_seq_QMARK_.call(null,inst_29988);
var state_30022__$1 = state_30022;
if(inst_29990){
var statearr_30053_30081 = state_30022__$1;
(statearr_30053_30081[(1)] = (17));

} else {
var statearr_30054_30082 = state_30022__$1;
(statearr_30054_30082[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30023 === (16))){
var inst_30006 = (state_30022[(2)]);
var state_30022__$1 = state_30022;
var statearr_30055_30083 = state_30022__$1;
(statearr_30055_30083[(2)] = inst_30006);

(statearr_30055_30083[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30023 === (10))){
var inst_29975 = (state_30022[(9)]);
var inst_29977 = (state_30022[(11)]);
var inst_29982 = cljs.core._nth.call(null,inst_29975,inst_29977);
var state_30022__$1 = state_30022;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30022__$1,(13),out,inst_29982);
} else {
if((state_val_30023 === (18))){
var inst_29988 = (state_30022[(7)]);
var inst_29997 = cljs.core.first.call(null,inst_29988);
var state_30022__$1 = state_30022;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30022__$1,(20),out,inst_29997);
} else {
if((state_val_30023 === (8))){
var inst_29976 = (state_30022[(8)]);
var inst_29977 = (state_30022[(11)]);
var inst_29979 = (inst_29977 < inst_29976);
var inst_29980 = inst_29979;
var state_30022__$1 = state_30022;
if(cljs.core.truth_(inst_29980)){
var statearr_30056_30084 = state_30022__$1;
(statearr_30056_30084[(1)] = (10));

} else {
var statearr_30057_30085 = state_30022__$1;
(statearr_30057_30085[(1)] = (11));

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
}
}
}
}
}
}
});})(c__28406__auto__))
;
return ((function (switch__28316__auto__,c__28406__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28317__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28317__auto____0 = (function (){
var statearr_30058 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30058[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28317__auto__);

(statearr_30058[(1)] = (1));

return statearr_30058;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28317__auto____1 = (function (state_30022){
while(true){
var ret_value__28318__auto__ = (function (){try{while(true){
var result__28319__auto__ = switch__28316__auto__.call(null,state_30022);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28319__auto__;
}
break;
}
}catch (e30059){if((e30059 instanceof Object)){
var ex__28320__auto__ = e30059;
var statearr_30060_30086 = state_30022;
(statearr_30060_30086[(5)] = ex__28320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30022);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30059;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30087 = state_30022;
state_30022 = G__30087;
continue;
} else {
return ret_value__28318__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28317__auto__ = function(state_30022){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28317__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28317__auto____1.call(this,state_30022);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28317__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28317__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28317__auto__;
})()
;})(switch__28316__auto__,c__28406__auto__))
})();
var state__28408__auto__ = (function (){var statearr_30061 = f__28407__auto__.call(null);
(statearr_30061[(6)] = c__28406__auto__);

return statearr_30061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28408__auto__);
});})(c__28406__auto__))
);

return c__28406__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__30089 = arguments.length;
switch (G__30089) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__30092 = arguments.length;
switch (G__30092) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__30095 = arguments.length;
switch (G__30095) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28406__auto___30142 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28406__auto___30142,out){
return (function (){
var f__28407__auto__ = (function (){var switch__28316__auto__ = ((function (c__28406__auto___30142,out){
return (function (state_30119){
var state_val_30120 = (state_30119[(1)]);
if((state_val_30120 === (7))){
var inst_30114 = (state_30119[(2)]);
var state_30119__$1 = state_30119;
var statearr_30121_30143 = state_30119__$1;
(statearr_30121_30143[(2)] = inst_30114);

(statearr_30121_30143[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30120 === (1))){
var inst_30096 = null;
var state_30119__$1 = (function (){var statearr_30122 = state_30119;
(statearr_30122[(7)] = inst_30096);

return statearr_30122;
})();
var statearr_30123_30144 = state_30119__$1;
(statearr_30123_30144[(2)] = null);

(statearr_30123_30144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30120 === (4))){
var inst_30099 = (state_30119[(8)]);
var inst_30099__$1 = (state_30119[(2)]);
var inst_30100 = (inst_30099__$1 == null);
var inst_30101 = cljs.core.not.call(null,inst_30100);
var state_30119__$1 = (function (){var statearr_30124 = state_30119;
(statearr_30124[(8)] = inst_30099__$1);

return statearr_30124;
})();
if(inst_30101){
var statearr_30125_30145 = state_30119__$1;
(statearr_30125_30145[(1)] = (5));

} else {
var statearr_30126_30146 = state_30119__$1;
(statearr_30126_30146[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30120 === (6))){
var state_30119__$1 = state_30119;
var statearr_30127_30147 = state_30119__$1;
(statearr_30127_30147[(2)] = null);

(statearr_30127_30147[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30120 === (3))){
var inst_30116 = (state_30119[(2)]);
var inst_30117 = cljs.core.async.close_BANG_.call(null,out);
var state_30119__$1 = (function (){var statearr_30128 = state_30119;
(statearr_30128[(9)] = inst_30116);

return statearr_30128;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30119__$1,inst_30117);
} else {
if((state_val_30120 === (2))){
var state_30119__$1 = state_30119;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30119__$1,(4),ch);
} else {
if((state_val_30120 === (11))){
var inst_30099 = (state_30119[(8)]);
var inst_30108 = (state_30119[(2)]);
var inst_30096 = inst_30099;
var state_30119__$1 = (function (){var statearr_30129 = state_30119;
(statearr_30129[(7)] = inst_30096);

(statearr_30129[(10)] = inst_30108);

return statearr_30129;
})();
var statearr_30130_30148 = state_30119__$1;
(statearr_30130_30148[(2)] = null);

(statearr_30130_30148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30120 === (9))){
var inst_30099 = (state_30119[(8)]);
var state_30119__$1 = state_30119;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30119__$1,(11),out,inst_30099);
} else {
if((state_val_30120 === (5))){
var inst_30099 = (state_30119[(8)]);
var inst_30096 = (state_30119[(7)]);
var inst_30103 = cljs.core._EQ_.call(null,inst_30099,inst_30096);
var state_30119__$1 = state_30119;
if(inst_30103){
var statearr_30132_30149 = state_30119__$1;
(statearr_30132_30149[(1)] = (8));

} else {
var statearr_30133_30150 = state_30119__$1;
(statearr_30133_30150[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30120 === (10))){
var inst_30111 = (state_30119[(2)]);
var state_30119__$1 = state_30119;
var statearr_30134_30151 = state_30119__$1;
(statearr_30134_30151[(2)] = inst_30111);

(statearr_30134_30151[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30120 === (8))){
var inst_30096 = (state_30119[(7)]);
var tmp30131 = inst_30096;
var inst_30096__$1 = tmp30131;
var state_30119__$1 = (function (){var statearr_30135 = state_30119;
(statearr_30135[(7)] = inst_30096__$1);

return statearr_30135;
})();
var statearr_30136_30152 = state_30119__$1;
(statearr_30136_30152[(2)] = null);

(statearr_30136_30152[(1)] = (2));


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
});})(c__28406__auto___30142,out))
;
return ((function (switch__28316__auto__,c__28406__auto___30142,out){
return (function() {
var cljs$core$async$state_machine__28317__auto__ = null;
var cljs$core$async$state_machine__28317__auto____0 = (function (){
var statearr_30137 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30137[(0)] = cljs$core$async$state_machine__28317__auto__);

(statearr_30137[(1)] = (1));

return statearr_30137;
});
var cljs$core$async$state_machine__28317__auto____1 = (function (state_30119){
while(true){
var ret_value__28318__auto__ = (function (){try{while(true){
var result__28319__auto__ = switch__28316__auto__.call(null,state_30119);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28319__auto__;
}
break;
}
}catch (e30138){if((e30138 instanceof Object)){
var ex__28320__auto__ = e30138;
var statearr_30139_30153 = state_30119;
(statearr_30139_30153[(5)] = ex__28320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30119);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30138;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30154 = state_30119;
state_30119 = G__30154;
continue;
} else {
return ret_value__28318__auto__;
}
break;
}
});
cljs$core$async$state_machine__28317__auto__ = function(state_30119){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28317__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28317__auto____1.call(this,state_30119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28317__auto____0;
cljs$core$async$state_machine__28317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28317__auto____1;
return cljs$core$async$state_machine__28317__auto__;
})()
;})(switch__28316__auto__,c__28406__auto___30142,out))
})();
var state__28408__auto__ = (function (){var statearr_30140 = f__28407__auto__.call(null);
(statearr_30140[(6)] = c__28406__auto___30142);

return statearr_30140;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28408__auto__);
});})(c__28406__auto___30142,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__30156 = arguments.length;
switch (G__30156) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28406__auto___30222 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28406__auto___30222,out){
return (function (){
var f__28407__auto__ = (function (){var switch__28316__auto__ = ((function (c__28406__auto___30222,out){
return (function (state_30194){
var state_val_30195 = (state_30194[(1)]);
if((state_val_30195 === (7))){
var inst_30190 = (state_30194[(2)]);
var state_30194__$1 = state_30194;
var statearr_30196_30223 = state_30194__$1;
(statearr_30196_30223[(2)] = inst_30190);

(statearr_30196_30223[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30195 === (1))){
var inst_30157 = (new Array(n));
var inst_30158 = inst_30157;
var inst_30159 = (0);
var state_30194__$1 = (function (){var statearr_30197 = state_30194;
(statearr_30197[(7)] = inst_30158);

(statearr_30197[(8)] = inst_30159);

return statearr_30197;
})();
var statearr_30198_30224 = state_30194__$1;
(statearr_30198_30224[(2)] = null);

(statearr_30198_30224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30195 === (4))){
var inst_30162 = (state_30194[(9)]);
var inst_30162__$1 = (state_30194[(2)]);
var inst_30163 = (inst_30162__$1 == null);
var inst_30164 = cljs.core.not.call(null,inst_30163);
var state_30194__$1 = (function (){var statearr_30199 = state_30194;
(statearr_30199[(9)] = inst_30162__$1);

return statearr_30199;
})();
if(inst_30164){
var statearr_30200_30225 = state_30194__$1;
(statearr_30200_30225[(1)] = (5));

} else {
var statearr_30201_30226 = state_30194__$1;
(statearr_30201_30226[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30195 === (15))){
var inst_30184 = (state_30194[(2)]);
var state_30194__$1 = state_30194;
var statearr_30202_30227 = state_30194__$1;
(statearr_30202_30227[(2)] = inst_30184);

(statearr_30202_30227[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30195 === (13))){
var state_30194__$1 = state_30194;
var statearr_30203_30228 = state_30194__$1;
(statearr_30203_30228[(2)] = null);

(statearr_30203_30228[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30195 === (6))){
var inst_30159 = (state_30194[(8)]);
var inst_30180 = (inst_30159 > (0));
var state_30194__$1 = state_30194;
if(cljs.core.truth_(inst_30180)){
var statearr_30204_30229 = state_30194__$1;
(statearr_30204_30229[(1)] = (12));

} else {
var statearr_30205_30230 = state_30194__$1;
(statearr_30205_30230[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30195 === (3))){
var inst_30192 = (state_30194[(2)]);
var state_30194__$1 = state_30194;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30194__$1,inst_30192);
} else {
if((state_val_30195 === (12))){
var inst_30158 = (state_30194[(7)]);
var inst_30182 = cljs.core.vec.call(null,inst_30158);
var state_30194__$1 = state_30194;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30194__$1,(15),out,inst_30182);
} else {
if((state_val_30195 === (2))){
var state_30194__$1 = state_30194;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30194__$1,(4),ch);
} else {
if((state_val_30195 === (11))){
var inst_30174 = (state_30194[(2)]);
var inst_30175 = (new Array(n));
var inst_30158 = inst_30175;
var inst_30159 = (0);
var state_30194__$1 = (function (){var statearr_30206 = state_30194;
(statearr_30206[(7)] = inst_30158);

(statearr_30206[(10)] = inst_30174);

(statearr_30206[(8)] = inst_30159);

return statearr_30206;
})();
var statearr_30207_30231 = state_30194__$1;
(statearr_30207_30231[(2)] = null);

(statearr_30207_30231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30195 === (9))){
var inst_30158 = (state_30194[(7)]);
var inst_30172 = cljs.core.vec.call(null,inst_30158);
var state_30194__$1 = state_30194;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30194__$1,(11),out,inst_30172);
} else {
if((state_val_30195 === (5))){
var inst_30158 = (state_30194[(7)]);
var inst_30159 = (state_30194[(8)]);
var inst_30167 = (state_30194[(11)]);
var inst_30162 = (state_30194[(9)]);
var inst_30166 = (inst_30158[inst_30159] = inst_30162);
var inst_30167__$1 = (inst_30159 + (1));
var inst_30168 = (inst_30167__$1 < n);
var state_30194__$1 = (function (){var statearr_30208 = state_30194;
(statearr_30208[(12)] = inst_30166);

(statearr_30208[(11)] = inst_30167__$1);

return statearr_30208;
})();
if(cljs.core.truth_(inst_30168)){
var statearr_30209_30232 = state_30194__$1;
(statearr_30209_30232[(1)] = (8));

} else {
var statearr_30210_30233 = state_30194__$1;
(statearr_30210_30233[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30195 === (14))){
var inst_30187 = (state_30194[(2)]);
var inst_30188 = cljs.core.async.close_BANG_.call(null,out);
var state_30194__$1 = (function (){var statearr_30212 = state_30194;
(statearr_30212[(13)] = inst_30187);

return statearr_30212;
})();
var statearr_30213_30234 = state_30194__$1;
(statearr_30213_30234[(2)] = inst_30188);

(statearr_30213_30234[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30195 === (10))){
var inst_30178 = (state_30194[(2)]);
var state_30194__$1 = state_30194;
var statearr_30214_30235 = state_30194__$1;
(statearr_30214_30235[(2)] = inst_30178);

(statearr_30214_30235[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30195 === (8))){
var inst_30158 = (state_30194[(7)]);
var inst_30167 = (state_30194[(11)]);
var tmp30211 = inst_30158;
var inst_30158__$1 = tmp30211;
var inst_30159 = inst_30167;
var state_30194__$1 = (function (){var statearr_30215 = state_30194;
(statearr_30215[(7)] = inst_30158__$1);

(statearr_30215[(8)] = inst_30159);

return statearr_30215;
})();
var statearr_30216_30236 = state_30194__$1;
(statearr_30216_30236[(2)] = null);

(statearr_30216_30236[(1)] = (2));


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
});})(c__28406__auto___30222,out))
;
return ((function (switch__28316__auto__,c__28406__auto___30222,out){
return (function() {
var cljs$core$async$state_machine__28317__auto__ = null;
var cljs$core$async$state_machine__28317__auto____0 = (function (){
var statearr_30217 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30217[(0)] = cljs$core$async$state_machine__28317__auto__);

(statearr_30217[(1)] = (1));

return statearr_30217;
});
var cljs$core$async$state_machine__28317__auto____1 = (function (state_30194){
while(true){
var ret_value__28318__auto__ = (function (){try{while(true){
var result__28319__auto__ = switch__28316__auto__.call(null,state_30194);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28319__auto__;
}
break;
}
}catch (e30218){if((e30218 instanceof Object)){
var ex__28320__auto__ = e30218;
var statearr_30219_30237 = state_30194;
(statearr_30219_30237[(5)] = ex__28320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30194);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30218;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30238 = state_30194;
state_30194 = G__30238;
continue;
} else {
return ret_value__28318__auto__;
}
break;
}
});
cljs$core$async$state_machine__28317__auto__ = function(state_30194){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28317__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28317__auto____1.call(this,state_30194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28317__auto____0;
cljs$core$async$state_machine__28317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28317__auto____1;
return cljs$core$async$state_machine__28317__auto__;
})()
;})(switch__28316__auto__,c__28406__auto___30222,out))
})();
var state__28408__auto__ = (function (){var statearr_30220 = f__28407__auto__.call(null);
(statearr_30220[(6)] = c__28406__auto___30222);

return statearr_30220;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28408__auto__);
});})(c__28406__auto___30222,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__30240 = arguments.length;
switch (G__30240) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28406__auto___30310 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28406__auto___30310,out){
return (function (){
var f__28407__auto__ = (function (){var switch__28316__auto__ = ((function (c__28406__auto___30310,out){
return (function (state_30282){
var state_val_30283 = (state_30282[(1)]);
if((state_val_30283 === (7))){
var inst_30278 = (state_30282[(2)]);
var state_30282__$1 = state_30282;
var statearr_30284_30311 = state_30282__$1;
(statearr_30284_30311[(2)] = inst_30278);

(statearr_30284_30311[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30283 === (1))){
var inst_30241 = [];
var inst_30242 = inst_30241;
var inst_30243 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_30282__$1 = (function (){var statearr_30285 = state_30282;
(statearr_30285[(7)] = inst_30242);

(statearr_30285[(8)] = inst_30243);

return statearr_30285;
})();
var statearr_30286_30312 = state_30282__$1;
(statearr_30286_30312[(2)] = null);

(statearr_30286_30312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30283 === (4))){
var inst_30246 = (state_30282[(9)]);
var inst_30246__$1 = (state_30282[(2)]);
var inst_30247 = (inst_30246__$1 == null);
var inst_30248 = cljs.core.not.call(null,inst_30247);
var state_30282__$1 = (function (){var statearr_30287 = state_30282;
(statearr_30287[(9)] = inst_30246__$1);

return statearr_30287;
})();
if(inst_30248){
var statearr_30288_30313 = state_30282__$1;
(statearr_30288_30313[(1)] = (5));

} else {
var statearr_30289_30314 = state_30282__$1;
(statearr_30289_30314[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30283 === (15))){
var inst_30272 = (state_30282[(2)]);
var state_30282__$1 = state_30282;
var statearr_30290_30315 = state_30282__$1;
(statearr_30290_30315[(2)] = inst_30272);

(statearr_30290_30315[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30283 === (13))){
var state_30282__$1 = state_30282;
var statearr_30291_30316 = state_30282__$1;
(statearr_30291_30316[(2)] = null);

(statearr_30291_30316[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30283 === (6))){
var inst_30242 = (state_30282[(7)]);
var inst_30267 = inst_30242.length;
var inst_30268 = (inst_30267 > (0));
var state_30282__$1 = state_30282;
if(cljs.core.truth_(inst_30268)){
var statearr_30292_30317 = state_30282__$1;
(statearr_30292_30317[(1)] = (12));

} else {
var statearr_30293_30318 = state_30282__$1;
(statearr_30293_30318[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30283 === (3))){
var inst_30280 = (state_30282[(2)]);
var state_30282__$1 = state_30282;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30282__$1,inst_30280);
} else {
if((state_val_30283 === (12))){
var inst_30242 = (state_30282[(7)]);
var inst_30270 = cljs.core.vec.call(null,inst_30242);
var state_30282__$1 = state_30282;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30282__$1,(15),out,inst_30270);
} else {
if((state_val_30283 === (2))){
var state_30282__$1 = state_30282;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30282__$1,(4),ch);
} else {
if((state_val_30283 === (11))){
var inst_30250 = (state_30282[(10)]);
var inst_30246 = (state_30282[(9)]);
var inst_30260 = (state_30282[(2)]);
var inst_30261 = [];
var inst_30262 = inst_30261.push(inst_30246);
var inst_30242 = inst_30261;
var inst_30243 = inst_30250;
var state_30282__$1 = (function (){var statearr_30294 = state_30282;
(statearr_30294[(7)] = inst_30242);

(statearr_30294[(8)] = inst_30243);

(statearr_30294[(11)] = inst_30262);

(statearr_30294[(12)] = inst_30260);

return statearr_30294;
})();
var statearr_30295_30319 = state_30282__$1;
(statearr_30295_30319[(2)] = null);

(statearr_30295_30319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30283 === (9))){
var inst_30242 = (state_30282[(7)]);
var inst_30258 = cljs.core.vec.call(null,inst_30242);
var state_30282__$1 = state_30282;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30282__$1,(11),out,inst_30258);
} else {
if((state_val_30283 === (5))){
var inst_30243 = (state_30282[(8)]);
var inst_30250 = (state_30282[(10)]);
var inst_30246 = (state_30282[(9)]);
var inst_30250__$1 = f.call(null,inst_30246);
var inst_30251 = cljs.core._EQ_.call(null,inst_30250__$1,inst_30243);
var inst_30252 = cljs.core.keyword_identical_QMARK_.call(null,inst_30243,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_30253 = ((inst_30251) || (inst_30252));
var state_30282__$1 = (function (){var statearr_30296 = state_30282;
(statearr_30296[(10)] = inst_30250__$1);

return statearr_30296;
})();
if(cljs.core.truth_(inst_30253)){
var statearr_30297_30320 = state_30282__$1;
(statearr_30297_30320[(1)] = (8));

} else {
var statearr_30298_30321 = state_30282__$1;
(statearr_30298_30321[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30283 === (14))){
var inst_30275 = (state_30282[(2)]);
var inst_30276 = cljs.core.async.close_BANG_.call(null,out);
var state_30282__$1 = (function (){var statearr_30300 = state_30282;
(statearr_30300[(13)] = inst_30275);

return statearr_30300;
})();
var statearr_30301_30322 = state_30282__$1;
(statearr_30301_30322[(2)] = inst_30276);

(statearr_30301_30322[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30283 === (10))){
var inst_30265 = (state_30282[(2)]);
var state_30282__$1 = state_30282;
var statearr_30302_30323 = state_30282__$1;
(statearr_30302_30323[(2)] = inst_30265);

(statearr_30302_30323[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30283 === (8))){
var inst_30242 = (state_30282[(7)]);
var inst_30250 = (state_30282[(10)]);
var inst_30246 = (state_30282[(9)]);
var inst_30255 = inst_30242.push(inst_30246);
var tmp30299 = inst_30242;
var inst_30242__$1 = tmp30299;
var inst_30243 = inst_30250;
var state_30282__$1 = (function (){var statearr_30303 = state_30282;
(statearr_30303[(7)] = inst_30242__$1);

(statearr_30303[(8)] = inst_30243);

(statearr_30303[(14)] = inst_30255);

return statearr_30303;
})();
var statearr_30304_30324 = state_30282__$1;
(statearr_30304_30324[(2)] = null);

(statearr_30304_30324[(1)] = (2));


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
});})(c__28406__auto___30310,out))
;
return ((function (switch__28316__auto__,c__28406__auto___30310,out){
return (function() {
var cljs$core$async$state_machine__28317__auto__ = null;
var cljs$core$async$state_machine__28317__auto____0 = (function (){
var statearr_30305 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30305[(0)] = cljs$core$async$state_machine__28317__auto__);

(statearr_30305[(1)] = (1));

return statearr_30305;
});
var cljs$core$async$state_machine__28317__auto____1 = (function (state_30282){
while(true){
var ret_value__28318__auto__ = (function (){try{while(true){
var result__28319__auto__ = switch__28316__auto__.call(null,state_30282);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28319__auto__;
}
break;
}
}catch (e30306){if((e30306 instanceof Object)){
var ex__28320__auto__ = e30306;
var statearr_30307_30325 = state_30282;
(statearr_30307_30325[(5)] = ex__28320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30282);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30306;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30326 = state_30282;
state_30282 = G__30326;
continue;
} else {
return ret_value__28318__auto__;
}
break;
}
});
cljs$core$async$state_machine__28317__auto__ = function(state_30282){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28317__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28317__auto____1.call(this,state_30282);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28317__auto____0;
cljs$core$async$state_machine__28317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28317__auto____1;
return cljs$core$async$state_machine__28317__auto__;
})()
;})(switch__28316__auto__,c__28406__auto___30310,out))
})();
var state__28408__auto__ = (function (){var statearr_30308 = f__28407__auto__.call(null);
(statearr_30308[(6)] = c__28406__auto___30310);

return statearr_30308;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28408__auto__);
});})(c__28406__auto___30310,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1531390884428
