// Compiled by ClojureScript 1.10.312 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__34182){
var map__34183 = p__34182;
var map__34183__$1 = ((((!((map__34183 == null)))?(((((map__34183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34183.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34183):map__34183);
var m = map__34183__$1;
var n = cljs.core.get.call(null,map__34183__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__34183__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34185_34207 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34186_34208 = null;
var count__34187_34209 = (0);
var i__34188_34210 = (0);
while(true){
if((i__34188_34210 < count__34187_34209)){
var f_34211 = cljs.core._nth.call(null,chunk__34186_34208,i__34188_34210);
cljs.core.println.call(null,"  ",f_34211);


var G__34212 = seq__34185_34207;
var G__34213 = chunk__34186_34208;
var G__34214 = count__34187_34209;
var G__34215 = (i__34188_34210 + (1));
seq__34185_34207 = G__34212;
chunk__34186_34208 = G__34213;
count__34187_34209 = G__34214;
i__34188_34210 = G__34215;
continue;
} else {
var temp__5457__auto___34216 = cljs.core.seq.call(null,seq__34185_34207);
if(temp__5457__auto___34216){
var seq__34185_34217__$1 = temp__5457__auto___34216;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34185_34217__$1)){
var c__4337__auto___34218 = cljs.core.chunk_first.call(null,seq__34185_34217__$1);
var G__34219 = cljs.core.chunk_rest.call(null,seq__34185_34217__$1);
var G__34220 = c__4337__auto___34218;
var G__34221 = cljs.core.count.call(null,c__4337__auto___34218);
var G__34222 = (0);
seq__34185_34207 = G__34219;
chunk__34186_34208 = G__34220;
count__34187_34209 = G__34221;
i__34188_34210 = G__34222;
continue;
} else {
var f_34223 = cljs.core.first.call(null,seq__34185_34217__$1);
cljs.core.println.call(null,"  ",f_34223);


var G__34224 = cljs.core.next.call(null,seq__34185_34217__$1);
var G__34225 = null;
var G__34226 = (0);
var G__34227 = (0);
seq__34185_34207 = G__34224;
chunk__34186_34208 = G__34225;
count__34187_34209 = G__34226;
i__34188_34210 = G__34227;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_34228 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3936__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_34228);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_34228)))?cljs.core.second.call(null,arglists_34228):arglists_34228));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34189_34229 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34190_34230 = null;
var count__34191_34231 = (0);
var i__34192_34232 = (0);
while(true){
if((i__34192_34232 < count__34191_34231)){
var vec__34193_34233 = cljs.core._nth.call(null,chunk__34190_34230,i__34192_34232);
var name_34234 = cljs.core.nth.call(null,vec__34193_34233,(0),null);
var map__34196_34235 = cljs.core.nth.call(null,vec__34193_34233,(1),null);
var map__34196_34236__$1 = ((((!((map__34196_34235 == null)))?(((((map__34196_34235.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34196_34235.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34196_34235):map__34196_34235);
var doc_34237 = cljs.core.get.call(null,map__34196_34236__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34238 = cljs.core.get.call(null,map__34196_34236__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_34234);

cljs.core.println.call(null," ",arglists_34238);

if(cljs.core.truth_(doc_34237)){
cljs.core.println.call(null," ",doc_34237);
} else {
}


var G__34239 = seq__34189_34229;
var G__34240 = chunk__34190_34230;
var G__34241 = count__34191_34231;
var G__34242 = (i__34192_34232 + (1));
seq__34189_34229 = G__34239;
chunk__34190_34230 = G__34240;
count__34191_34231 = G__34241;
i__34192_34232 = G__34242;
continue;
} else {
var temp__5457__auto___34243 = cljs.core.seq.call(null,seq__34189_34229);
if(temp__5457__auto___34243){
var seq__34189_34244__$1 = temp__5457__auto___34243;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34189_34244__$1)){
var c__4337__auto___34245 = cljs.core.chunk_first.call(null,seq__34189_34244__$1);
var G__34246 = cljs.core.chunk_rest.call(null,seq__34189_34244__$1);
var G__34247 = c__4337__auto___34245;
var G__34248 = cljs.core.count.call(null,c__4337__auto___34245);
var G__34249 = (0);
seq__34189_34229 = G__34246;
chunk__34190_34230 = G__34247;
count__34191_34231 = G__34248;
i__34192_34232 = G__34249;
continue;
} else {
var vec__34198_34250 = cljs.core.first.call(null,seq__34189_34244__$1);
var name_34251 = cljs.core.nth.call(null,vec__34198_34250,(0),null);
var map__34201_34252 = cljs.core.nth.call(null,vec__34198_34250,(1),null);
var map__34201_34253__$1 = ((((!((map__34201_34252 == null)))?(((((map__34201_34252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34201_34252.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34201_34252):map__34201_34252);
var doc_34254 = cljs.core.get.call(null,map__34201_34253__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34255 = cljs.core.get.call(null,map__34201_34253__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_34251);

cljs.core.println.call(null," ",arglists_34255);

if(cljs.core.truth_(doc_34254)){
cljs.core.println.call(null," ",doc_34254);
} else {
}


var G__34256 = cljs.core.next.call(null,seq__34189_34244__$1);
var G__34257 = null;
var G__34258 = (0);
var G__34259 = (0);
seq__34189_34229 = G__34256;
chunk__34190_34230 = G__34257;
count__34191_34231 = G__34258;
i__34192_34232 = G__34259;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__34203 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__34204 = null;
var count__34205 = (0);
var i__34206 = (0);
while(true){
if((i__34206 < count__34205)){
var role = cljs.core._nth.call(null,chunk__34204,i__34206);
var temp__5457__auto___34260__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___34260__$1)){
var spec_34261 = temp__5457__auto___34260__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_34261));
} else {
}


var G__34262 = seq__34203;
var G__34263 = chunk__34204;
var G__34264 = count__34205;
var G__34265 = (i__34206 + (1));
seq__34203 = G__34262;
chunk__34204 = G__34263;
count__34205 = G__34264;
i__34206 = G__34265;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__34203);
if(temp__5457__auto____$1){
var seq__34203__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34203__$1)){
var c__4337__auto__ = cljs.core.chunk_first.call(null,seq__34203__$1);
var G__34266 = cljs.core.chunk_rest.call(null,seq__34203__$1);
var G__34267 = c__4337__auto__;
var G__34268 = cljs.core.count.call(null,c__4337__auto__);
var G__34269 = (0);
seq__34203 = G__34266;
chunk__34204 = G__34267;
count__34205 = G__34268;
i__34206 = G__34269;
continue;
} else {
var role = cljs.core.first.call(null,seq__34203__$1);
var temp__5457__auto___34270__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___34270__$2)){
var spec_34271 = temp__5457__auto___34270__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_34271));
} else {
}


var G__34272 = cljs.core.next.call(null,seq__34203__$1);
var G__34273 = null;
var G__34274 = (0);
var G__34275 = (0);
seq__34203 = G__34272;
chunk__34204 = G__34273;
count__34205 = G__34274;
i__34206 = G__34275;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1531390890634
