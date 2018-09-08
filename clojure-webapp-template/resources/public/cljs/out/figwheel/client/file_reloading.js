// Compiled by ClojureScript 1.10.312 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__3936__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__3936__auto__){
return or__3936__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__3936__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
var or__3936__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__3936__auto____$1)){
return or__3936__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__32715_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__32715_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__32716 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__32717 = null;
var count__32718 = (0);
var i__32719 = (0);
while(true){
if((i__32719 < count__32718)){
var n = cljs.core._nth.call(null,chunk__32717,i__32719);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__32720 = seq__32716;
var G__32721 = chunk__32717;
var G__32722 = count__32718;
var G__32723 = (i__32719 + (1));
seq__32716 = G__32720;
chunk__32717 = G__32721;
count__32718 = G__32722;
i__32719 = G__32723;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__32716);
if(temp__5457__auto__){
var seq__32716__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32716__$1)){
var c__4337__auto__ = cljs.core.chunk_first.call(null,seq__32716__$1);
var G__32724 = cljs.core.chunk_rest.call(null,seq__32716__$1);
var G__32725 = c__4337__auto__;
var G__32726 = cljs.core.count.call(null,c__4337__auto__);
var G__32727 = (0);
seq__32716 = G__32724;
chunk__32717 = G__32725;
count__32718 = G__32726;
i__32719 = G__32727;
continue;
} else {
var n = cljs.core.first.call(null,seq__32716__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__32728 = cljs.core.next.call(null,seq__32716__$1);
var G__32729 = null;
var G__32730 = (0);
var G__32731 = (0);
seq__32716 = G__32728;
chunk__32717 = G__32729;
count__32718 = G__32730;
i__32719 = G__32731;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__32732){
var vec__32733 = p__32732;
var _ = cljs.core.nth.call(null,vec__32733,(0),null);
var v = cljs.core.nth.call(null,vec__32733,(1),null);
var and__3925__auto__ = v;
if(cljs.core.truth_(and__3925__auto__)){
return v.call(null,dep);
} else {
return and__3925__auto__;
}
}),cljs.core.filter.call(null,(function (p__32736){
var vec__32737 = p__32736;
var k = cljs.core.nth.call(null,vec__32737,(0),null);
var v = cljs.core.nth.call(null,vec__32737,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__32749_32757 = cljs.core.seq.call(null,deps);
var chunk__32750_32758 = null;
var count__32751_32759 = (0);
var i__32752_32760 = (0);
while(true){
if((i__32752_32760 < count__32751_32759)){
var dep_32761 = cljs.core._nth.call(null,chunk__32750_32758,i__32752_32760);
if(cljs.core.truth_((function (){var and__3925__auto__ = dep_32761;
if(cljs.core.truth_(and__3925__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_32761));
} else {
return and__3925__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_32761,(depth + (1)),state);
} else {
}


var G__32762 = seq__32749_32757;
var G__32763 = chunk__32750_32758;
var G__32764 = count__32751_32759;
var G__32765 = (i__32752_32760 + (1));
seq__32749_32757 = G__32762;
chunk__32750_32758 = G__32763;
count__32751_32759 = G__32764;
i__32752_32760 = G__32765;
continue;
} else {
var temp__5457__auto___32766 = cljs.core.seq.call(null,seq__32749_32757);
if(temp__5457__auto___32766){
var seq__32749_32767__$1 = temp__5457__auto___32766;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32749_32767__$1)){
var c__4337__auto___32768 = cljs.core.chunk_first.call(null,seq__32749_32767__$1);
var G__32769 = cljs.core.chunk_rest.call(null,seq__32749_32767__$1);
var G__32770 = c__4337__auto___32768;
var G__32771 = cljs.core.count.call(null,c__4337__auto___32768);
var G__32772 = (0);
seq__32749_32757 = G__32769;
chunk__32750_32758 = G__32770;
count__32751_32759 = G__32771;
i__32752_32760 = G__32772;
continue;
} else {
var dep_32773 = cljs.core.first.call(null,seq__32749_32767__$1);
if(cljs.core.truth_((function (){var and__3925__auto__ = dep_32773;
if(cljs.core.truth_(and__3925__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_32773));
} else {
return and__3925__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_32773,(depth + (1)),state);
} else {
}


var G__32774 = cljs.core.next.call(null,seq__32749_32767__$1);
var G__32775 = null;
var G__32776 = (0);
var G__32777 = (0);
seq__32749_32757 = G__32774;
chunk__32750_32758 = G__32775;
count__32751_32759 = G__32776;
i__32752_32760 = G__32777;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__32753){
var vec__32754 = p__32753;
var seq__32755 = cljs.core.seq.call(null,vec__32754);
var first__32756 = cljs.core.first.call(null,seq__32755);
var seq__32755__$1 = cljs.core.next.call(null,seq__32755);
var x = first__32756;
var xs = seq__32755__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__32754,seq__32755,first__32756,seq__32755__$1,x,xs,get_deps__$1){
return (function (p1__32740_SHARP_){
return clojure.set.difference.call(null,p1__32740_SHARP_,x);
});})(vec__32754,seq__32755,first__32756,seq__32755__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__32778 = cljs.core.seq.call(null,provides);
var chunk__32779 = null;
var count__32780 = (0);
var i__32781 = (0);
while(true){
if((i__32781 < count__32780)){
var prov = cljs.core._nth.call(null,chunk__32779,i__32781);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__32782_32790 = cljs.core.seq.call(null,requires);
var chunk__32783_32791 = null;
var count__32784_32792 = (0);
var i__32785_32793 = (0);
while(true){
if((i__32785_32793 < count__32784_32792)){
var req_32794 = cljs.core._nth.call(null,chunk__32783_32791,i__32785_32793);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32794,prov);


var G__32795 = seq__32782_32790;
var G__32796 = chunk__32783_32791;
var G__32797 = count__32784_32792;
var G__32798 = (i__32785_32793 + (1));
seq__32782_32790 = G__32795;
chunk__32783_32791 = G__32796;
count__32784_32792 = G__32797;
i__32785_32793 = G__32798;
continue;
} else {
var temp__5457__auto___32799 = cljs.core.seq.call(null,seq__32782_32790);
if(temp__5457__auto___32799){
var seq__32782_32800__$1 = temp__5457__auto___32799;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32782_32800__$1)){
var c__4337__auto___32801 = cljs.core.chunk_first.call(null,seq__32782_32800__$1);
var G__32802 = cljs.core.chunk_rest.call(null,seq__32782_32800__$1);
var G__32803 = c__4337__auto___32801;
var G__32804 = cljs.core.count.call(null,c__4337__auto___32801);
var G__32805 = (0);
seq__32782_32790 = G__32802;
chunk__32783_32791 = G__32803;
count__32784_32792 = G__32804;
i__32785_32793 = G__32805;
continue;
} else {
var req_32806 = cljs.core.first.call(null,seq__32782_32800__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32806,prov);


var G__32807 = cljs.core.next.call(null,seq__32782_32800__$1);
var G__32808 = null;
var G__32809 = (0);
var G__32810 = (0);
seq__32782_32790 = G__32807;
chunk__32783_32791 = G__32808;
count__32784_32792 = G__32809;
i__32785_32793 = G__32810;
continue;
}
} else {
}
}
break;
}


var G__32811 = seq__32778;
var G__32812 = chunk__32779;
var G__32813 = count__32780;
var G__32814 = (i__32781 + (1));
seq__32778 = G__32811;
chunk__32779 = G__32812;
count__32780 = G__32813;
i__32781 = G__32814;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__32778);
if(temp__5457__auto__){
var seq__32778__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32778__$1)){
var c__4337__auto__ = cljs.core.chunk_first.call(null,seq__32778__$1);
var G__32815 = cljs.core.chunk_rest.call(null,seq__32778__$1);
var G__32816 = c__4337__auto__;
var G__32817 = cljs.core.count.call(null,c__4337__auto__);
var G__32818 = (0);
seq__32778 = G__32815;
chunk__32779 = G__32816;
count__32780 = G__32817;
i__32781 = G__32818;
continue;
} else {
var prov = cljs.core.first.call(null,seq__32778__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__32786_32819 = cljs.core.seq.call(null,requires);
var chunk__32787_32820 = null;
var count__32788_32821 = (0);
var i__32789_32822 = (0);
while(true){
if((i__32789_32822 < count__32788_32821)){
var req_32823 = cljs.core._nth.call(null,chunk__32787_32820,i__32789_32822);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32823,prov);


var G__32824 = seq__32786_32819;
var G__32825 = chunk__32787_32820;
var G__32826 = count__32788_32821;
var G__32827 = (i__32789_32822 + (1));
seq__32786_32819 = G__32824;
chunk__32787_32820 = G__32825;
count__32788_32821 = G__32826;
i__32789_32822 = G__32827;
continue;
} else {
var temp__5457__auto___32828__$1 = cljs.core.seq.call(null,seq__32786_32819);
if(temp__5457__auto___32828__$1){
var seq__32786_32829__$1 = temp__5457__auto___32828__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32786_32829__$1)){
var c__4337__auto___32830 = cljs.core.chunk_first.call(null,seq__32786_32829__$1);
var G__32831 = cljs.core.chunk_rest.call(null,seq__32786_32829__$1);
var G__32832 = c__4337__auto___32830;
var G__32833 = cljs.core.count.call(null,c__4337__auto___32830);
var G__32834 = (0);
seq__32786_32819 = G__32831;
chunk__32787_32820 = G__32832;
count__32788_32821 = G__32833;
i__32789_32822 = G__32834;
continue;
} else {
var req_32835 = cljs.core.first.call(null,seq__32786_32829__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32835,prov);


var G__32836 = cljs.core.next.call(null,seq__32786_32829__$1);
var G__32837 = null;
var G__32838 = (0);
var G__32839 = (0);
seq__32786_32819 = G__32836;
chunk__32787_32820 = G__32837;
count__32788_32821 = G__32838;
i__32789_32822 = G__32839;
continue;
}
} else {
}
}
break;
}


var G__32840 = cljs.core.next.call(null,seq__32778__$1);
var G__32841 = null;
var G__32842 = (0);
var G__32843 = (0);
seq__32778 = G__32840;
chunk__32779 = G__32841;
count__32780 = G__32842;
i__32781 = G__32843;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__32844_32848 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__32845_32849 = null;
var count__32846_32850 = (0);
var i__32847_32851 = (0);
while(true){
if((i__32847_32851 < count__32846_32850)){
var ns_32852 = cljs.core._nth.call(null,chunk__32845_32849,i__32847_32851);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_32852);


var G__32853 = seq__32844_32848;
var G__32854 = chunk__32845_32849;
var G__32855 = count__32846_32850;
var G__32856 = (i__32847_32851 + (1));
seq__32844_32848 = G__32853;
chunk__32845_32849 = G__32854;
count__32846_32850 = G__32855;
i__32847_32851 = G__32856;
continue;
} else {
var temp__5457__auto___32857 = cljs.core.seq.call(null,seq__32844_32848);
if(temp__5457__auto___32857){
var seq__32844_32858__$1 = temp__5457__auto___32857;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32844_32858__$1)){
var c__4337__auto___32859 = cljs.core.chunk_first.call(null,seq__32844_32858__$1);
var G__32860 = cljs.core.chunk_rest.call(null,seq__32844_32858__$1);
var G__32861 = c__4337__auto___32859;
var G__32862 = cljs.core.count.call(null,c__4337__auto___32859);
var G__32863 = (0);
seq__32844_32848 = G__32860;
chunk__32845_32849 = G__32861;
count__32846_32850 = G__32862;
i__32847_32851 = G__32863;
continue;
} else {
var ns_32864 = cljs.core.first.call(null,seq__32844_32858__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_32864);


var G__32865 = cljs.core.next.call(null,seq__32844_32858__$1);
var G__32866 = null;
var G__32867 = (0);
var G__32868 = (0);
seq__32844_32848 = G__32865;
chunk__32845_32849 = G__32866;
count__32846_32850 = G__32867;
i__32847_32851 = G__32868;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__3936__auto__ = goog.require__;
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__32869__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__32869 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32870__i = 0, G__32870__a = new Array(arguments.length -  0);
while (G__32870__i < G__32870__a.length) {G__32870__a[G__32870__i] = arguments[G__32870__i + 0]; ++G__32870__i;}
  args = new cljs.core.IndexedSeq(G__32870__a,0,null);
} 
return G__32869__delegate.call(this,args);};
G__32869.cljs$lang$maxFixedArity = 0;
G__32869.cljs$lang$applyTo = (function (arglist__32871){
var args = cljs.core.seq(arglist__32871);
return G__32869__delegate(args);
});
G__32869.cljs$core$IFn$_invoke$arity$variadic = G__32869__delegate;
return G__32869;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__32872_SHARP_,p2__32873_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__32872_SHARP_)].join('')),p2__32873_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__32874_SHARP_,p2__32875_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__32874_SHARP_)].join(''),p2__32875_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__32876 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__32876.addCallback(((function (G__32876){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__32876))
);

G__32876.addErrback(((function (G__32876){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__32876))
);

return G__32876;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e32877){if((e32877 instanceof Error)){
var e = e32877;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e32877;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e32878){if((e32878 instanceof Error)){
var e = e32878;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e32878;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__32879 = cljs.core._EQ_;
var expr__32880 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__32879.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__32880))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__32879.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__32880))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__32879.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__32880))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__32879,expr__32880){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__32879,expr__32880))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__32882,callback){
var map__32883 = p__32882;
var map__32883__$1 = ((((!((map__32883 == null)))?(((((map__32883.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32883.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32883):map__32883);
var file_msg = map__32883__$1;
var request_url = cljs.core.get.call(null,map__32883__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3936__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__32883,map__32883__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__32883,map__32883__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__28406__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28406__auto__){
return (function (){
var f__28407__auto__ = (function (){var switch__28316__auto__ = ((function (c__28406__auto__){
return (function (state_32923){
var state_val_32924 = (state_32923[(1)]);
if((state_val_32924 === (7))){
var inst_32919 = (state_32923[(2)]);
var state_32923__$1 = state_32923;
var statearr_32925_32952 = state_32923__$1;
(statearr_32925_32952[(2)] = inst_32919);

(statearr_32925_32952[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32924 === (1))){
var state_32923__$1 = state_32923;
var statearr_32926_32953 = state_32923__$1;
(statearr_32926_32953[(2)] = null);

(statearr_32926_32953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32924 === (4))){
var inst_32887 = (state_32923[(7)]);
var inst_32887__$1 = (state_32923[(2)]);
var state_32923__$1 = (function (){var statearr_32927 = state_32923;
(statearr_32927[(7)] = inst_32887__$1);

return statearr_32927;
})();
if(cljs.core.truth_(inst_32887__$1)){
var statearr_32928_32954 = state_32923__$1;
(statearr_32928_32954[(1)] = (5));

} else {
var statearr_32929_32955 = state_32923__$1;
(statearr_32929_32955[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32924 === (15))){
var inst_32904 = (state_32923[(8)]);
var inst_32901 = (state_32923[(9)]);
var inst_32906 = inst_32904.call(null,inst_32901);
var state_32923__$1 = state_32923;
var statearr_32930_32956 = state_32923__$1;
(statearr_32930_32956[(2)] = inst_32906);

(statearr_32930_32956[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32924 === (13))){
var inst_32913 = (state_32923[(2)]);
var state_32923__$1 = state_32923;
var statearr_32931_32957 = state_32923__$1;
(statearr_32931_32957[(2)] = inst_32913);

(statearr_32931_32957[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32924 === (6))){
var state_32923__$1 = state_32923;
var statearr_32932_32958 = state_32923__$1;
(statearr_32932_32958[(2)] = null);

(statearr_32932_32958[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32924 === (17))){
var inst_32910 = (state_32923[(2)]);
var state_32923__$1 = state_32923;
var statearr_32933_32959 = state_32923__$1;
(statearr_32933_32959[(2)] = inst_32910);

(statearr_32933_32959[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32924 === (3))){
var inst_32921 = (state_32923[(2)]);
var state_32923__$1 = state_32923;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32923__$1,inst_32921);
} else {
if((state_val_32924 === (12))){
var state_32923__$1 = state_32923;
var statearr_32934_32960 = state_32923__$1;
(statearr_32934_32960[(2)] = null);

(statearr_32934_32960[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32924 === (2))){
var state_32923__$1 = state_32923;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32923__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_32924 === (11))){
var inst_32892 = (state_32923[(10)]);
var inst_32899 = figwheel.client.file_reloading.blocking_load.call(null,inst_32892);
var state_32923__$1 = state_32923;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32923__$1,(14),inst_32899);
} else {
if((state_val_32924 === (9))){
var inst_32892 = (state_32923[(10)]);
var state_32923__$1 = state_32923;
if(cljs.core.truth_(inst_32892)){
var statearr_32935_32961 = state_32923__$1;
(statearr_32935_32961[(1)] = (11));

} else {
var statearr_32936_32962 = state_32923__$1;
(statearr_32936_32962[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32924 === (5))){
var inst_32893 = (state_32923[(11)]);
var inst_32887 = (state_32923[(7)]);
var inst_32892 = cljs.core.nth.call(null,inst_32887,(0),null);
var inst_32893__$1 = cljs.core.nth.call(null,inst_32887,(1),null);
var state_32923__$1 = (function (){var statearr_32937 = state_32923;
(statearr_32937[(10)] = inst_32892);

(statearr_32937[(11)] = inst_32893__$1);

return statearr_32937;
})();
if(cljs.core.truth_(inst_32893__$1)){
var statearr_32938_32963 = state_32923__$1;
(statearr_32938_32963[(1)] = (8));

} else {
var statearr_32939_32964 = state_32923__$1;
(statearr_32939_32964[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32924 === (14))){
var inst_32892 = (state_32923[(10)]);
var inst_32904 = (state_32923[(8)]);
var inst_32901 = (state_32923[(2)]);
var inst_32902 = console.log("Loading!",inst_32892);
var inst_32903 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_32904__$1 = cljs.core.get.call(null,inst_32903,inst_32892);
var state_32923__$1 = (function (){var statearr_32940 = state_32923;
(statearr_32940[(12)] = inst_32902);

(statearr_32940[(8)] = inst_32904__$1);

(statearr_32940[(9)] = inst_32901);

return statearr_32940;
})();
if(cljs.core.truth_(inst_32904__$1)){
var statearr_32941_32965 = state_32923__$1;
(statearr_32941_32965[(1)] = (15));

} else {
var statearr_32942_32966 = state_32923__$1;
(statearr_32942_32966[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32924 === (16))){
var inst_32901 = (state_32923[(9)]);
var inst_32908 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_32901);
var state_32923__$1 = state_32923;
var statearr_32943_32967 = state_32923__$1;
(statearr_32943_32967[(2)] = inst_32908);

(statearr_32943_32967[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32924 === (10))){
var inst_32915 = (state_32923[(2)]);
var state_32923__$1 = (function (){var statearr_32944 = state_32923;
(statearr_32944[(13)] = inst_32915);

return statearr_32944;
})();
var statearr_32945_32968 = state_32923__$1;
(statearr_32945_32968[(2)] = null);

(statearr_32945_32968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32924 === (8))){
var inst_32893 = (state_32923[(11)]);
var inst_32895 = console.log("Evaling!",inst_32893);
var inst_32896 = eval(inst_32893);
var state_32923__$1 = (function (){var statearr_32946 = state_32923;
(statearr_32946[(14)] = inst_32895);

return statearr_32946;
})();
var statearr_32947_32969 = state_32923__$1;
(statearr_32947_32969[(2)] = inst_32896);

(statearr_32947_32969[(1)] = (10));


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
});})(c__28406__auto__))
;
return ((function (switch__28316__auto__,c__28406__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__28317__auto__ = null;
var figwheel$client$file_reloading$state_machine__28317__auto____0 = (function (){
var statearr_32948 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32948[(0)] = figwheel$client$file_reloading$state_machine__28317__auto__);

(statearr_32948[(1)] = (1));

return statearr_32948;
});
var figwheel$client$file_reloading$state_machine__28317__auto____1 = (function (state_32923){
while(true){
var ret_value__28318__auto__ = (function (){try{while(true){
var result__28319__auto__ = switch__28316__auto__.call(null,state_32923);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28319__auto__;
}
break;
}
}catch (e32949){if((e32949 instanceof Object)){
var ex__28320__auto__ = e32949;
var statearr_32950_32970 = state_32923;
(statearr_32950_32970[(5)] = ex__28320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32923);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32949;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32971 = state_32923;
state_32923 = G__32971;
continue;
} else {
return ret_value__28318__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__28317__auto__ = function(state_32923){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__28317__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__28317__auto____1.call(this,state_32923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__28317__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__28317__auto____0;
figwheel$client$file_reloading$state_machine__28317__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__28317__auto____1;
return figwheel$client$file_reloading$state_machine__28317__auto__;
})()
;})(switch__28316__auto__,c__28406__auto__))
})();
var state__28408__auto__ = (function (){var statearr_32951 = f__28407__auto__.call(null);
(statearr_32951[(6)] = c__28406__auto__);

return statearr_32951;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28408__auto__);
});})(c__28406__auto__))
);

return c__28406__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__32973 = arguments.length;
switch (G__32973) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__32975,callback){
var map__32976 = p__32975;
var map__32976__$1 = ((((!((map__32976 == null)))?(((((map__32976.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32976.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32976):map__32976);
var file_msg = map__32976__$1;
var namespace = cljs.core.get.call(null,map__32976__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__32976,map__32976__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__32976,map__32976__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__32978){
var map__32979 = p__32978;
var map__32979__$1 = ((((!((map__32979 == null)))?(((((map__32979.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32979.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32979):map__32979);
var file_msg = map__32979__$1;
var namespace = cljs.core.get.call(null,map__32979__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__32981){
var map__32982 = p__32981;
var map__32982__$1 = ((((!((map__32982 == null)))?(((((map__32982.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32982.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32982):map__32982);
var file_msg = map__32982__$1;
var namespace = cljs.core.get.call(null,map__32982__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__3925__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__3925__auto__){
var or__3936__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
var or__3936__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3936__auto____$1)){
return or__3936__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__3925__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__32984,callback){
var map__32985 = p__32984;
var map__32985__$1 = ((((!((map__32985 == null)))?(((((map__32985.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32985.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32985):map__32985);
var file_msg = map__32985__$1;
var request_url = cljs.core.get.call(null,map__32985__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__32985__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__28406__auto___33035 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28406__auto___33035,out){
return (function (){
var f__28407__auto__ = (function (){var switch__28316__auto__ = ((function (c__28406__auto___33035,out){
return (function (state_33020){
var state_val_33021 = (state_33020[(1)]);
if((state_val_33021 === (1))){
var inst_32994 = cljs.core.seq.call(null,files);
var inst_32995 = cljs.core.first.call(null,inst_32994);
var inst_32996 = cljs.core.next.call(null,inst_32994);
var inst_32997 = files;
var state_33020__$1 = (function (){var statearr_33022 = state_33020;
(statearr_33022[(7)] = inst_32995);

(statearr_33022[(8)] = inst_32996);

(statearr_33022[(9)] = inst_32997);

return statearr_33022;
})();
var statearr_33023_33036 = state_33020__$1;
(statearr_33023_33036[(2)] = null);

(statearr_33023_33036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33021 === (2))){
var inst_33003 = (state_33020[(10)]);
var inst_32997 = (state_33020[(9)]);
var inst_33002 = cljs.core.seq.call(null,inst_32997);
var inst_33003__$1 = cljs.core.first.call(null,inst_33002);
var inst_33004 = cljs.core.next.call(null,inst_33002);
var inst_33005 = (inst_33003__$1 == null);
var inst_33006 = cljs.core.not.call(null,inst_33005);
var state_33020__$1 = (function (){var statearr_33024 = state_33020;
(statearr_33024[(10)] = inst_33003__$1);

(statearr_33024[(11)] = inst_33004);

return statearr_33024;
})();
if(inst_33006){
var statearr_33025_33037 = state_33020__$1;
(statearr_33025_33037[(1)] = (4));

} else {
var statearr_33026_33038 = state_33020__$1;
(statearr_33026_33038[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33021 === (3))){
var inst_33018 = (state_33020[(2)]);
var state_33020__$1 = state_33020;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33020__$1,inst_33018);
} else {
if((state_val_33021 === (4))){
var inst_33003 = (state_33020[(10)]);
var inst_33008 = figwheel.client.file_reloading.reload_js_file.call(null,inst_33003);
var state_33020__$1 = state_33020;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33020__$1,(7),inst_33008);
} else {
if((state_val_33021 === (5))){
var inst_33014 = cljs.core.async.close_BANG_.call(null,out);
var state_33020__$1 = state_33020;
var statearr_33027_33039 = state_33020__$1;
(statearr_33027_33039[(2)] = inst_33014);

(statearr_33027_33039[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33021 === (6))){
var inst_33016 = (state_33020[(2)]);
var state_33020__$1 = state_33020;
var statearr_33028_33040 = state_33020__$1;
(statearr_33028_33040[(2)] = inst_33016);

(statearr_33028_33040[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33021 === (7))){
var inst_33004 = (state_33020[(11)]);
var inst_33010 = (state_33020[(2)]);
var inst_33011 = cljs.core.async.put_BANG_.call(null,out,inst_33010);
var inst_32997 = inst_33004;
var state_33020__$1 = (function (){var statearr_33029 = state_33020;
(statearr_33029[(9)] = inst_32997);

(statearr_33029[(12)] = inst_33011);

return statearr_33029;
})();
var statearr_33030_33041 = state_33020__$1;
(statearr_33030_33041[(2)] = null);

(statearr_33030_33041[(1)] = (2));


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
});})(c__28406__auto___33035,out))
;
return ((function (switch__28316__auto__,c__28406__auto___33035,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28317__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28317__auto____0 = (function (){
var statearr_33031 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33031[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28317__auto__);

(statearr_33031[(1)] = (1));

return statearr_33031;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28317__auto____1 = (function (state_33020){
while(true){
var ret_value__28318__auto__ = (function (){try{while(true){
var result__28319__auto__ = switch__28316__auto__.call(null,state_33020);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28319__auto__;
}
break;
}
}catch (e33032){if((e33032 instanceof Object)){
var ex__28320__auto__ = e33032;
var statearr_33033_33042 = state_33020;
(statearr_33033_33042[(5)] = ex__28320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33020);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33032;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33043 = state_33020;
state_33020 = G__33043;
continue;
} else {
return ret_value__28318__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28317__auto__ = function(state_33020){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28317__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28317__auto____1.call(this,state_33020);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28317__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28317__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28317__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28317__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28317__auto__;
})()
;})(switch__28316__auto__,c__28406__auto___33035,out))
})();
var state__28408__auto__ = (function (){var statearr_33034 = f__28407__auto__.call(null);
(statearr_33034[(6)] = c__28406__auto___33035);

return statearr_33034;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28408__auto__);
});})(c__28406__auto___33035,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__33044,opts){
var map__33045 = p__33044;
var map__33045__$1 = ((((!((map__33045 == null)))?(((((map__33045.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33045.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33045):map__33045);
var eval_body = cljs.core.get.call(null,map__33045__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__33045__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__3925__auto__ = eval_body;
if(cljs.core.truth_(and__3925__auto__)){
return typeof eval_body === 'string';
} else {
return and__3925__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e33047){var e = e33047;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__33048_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__33048_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__33049){
var vec__33050 = p__33049;
var k = cljs.core.nth.call(null,vec__33050,(0),null);
var v = cljs.core.nth.call(null,vec__33050,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__33053){
var vec__33054 = p__33053;
var k = cljs.core.nth.call(null,vec__33054,(0),null);
var v = cljs.core.nth.call(null,vec__33054,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__33060,p__33061){
var map__33062 = p__33060;
var map__33062__$1 = ((((!((map__33062 == null)))?(((((map__33062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33062.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33062):map__33062);
var opts = map__33062__$1;
var before_jsload = cljs.core.get.call(null,map__33062__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__33062__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__33062__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__33063 = p__33061;
var map__33063__$1 = ((((!((map__33063 == null)))?(((((map__33063.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33063.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33063):map__33063);
var msg = map__33063__$1;
var files = cljs.core.get.call(null,map__33063__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__33063__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__33063__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__28406__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28406__auto__,map__33062,map__33062__$1,opts,before_jsload,on_jsload,reload_dependents,map__33063,map__33063__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__28407__auto__ = (function (){var switch__28316__auto__ = ((function (c__28406__auto__,map__33062,map__33062__$1,opts,before_jsload,on_jsload,reload_dependents,map__33063,map__33063__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_33217){
var state_val_33218 = (state_33217[(1)]);
if((state_val_33218 === (7))){
var inst_33078 = (state_33217[(7)]);
var inst_33077 = (state_33217[(8)]);
var inst_33080 = (state_33217[(9)]);
var inst_33079 = (state_33217[(10)]);
var inst_33085 = cljs.core._nth.call(null,inst_33078,inst_33080);
var inst_33086 = figwheel.client.file_reloading.eval_body.call(null,inst_33085,opts);
var inst_33087 = (inst_33080 + (1));
var tmp33219 = inst_33078;
var tmp33220 = inst_33077;
var tmp33221 = inst_33079;
var inst_33077__$1 = tmp33220;
var inst_33078__$1 = tmp33219;
var inst_33079__$1 = tmp33221;
var inst_33080__$1 = inst_33087;
var state_33217__$1 = (function (){var statearr_33222 = state_33217;
(statearr_33222[(11)] = inst_33086);

(statearr_33222[(7)] = inst_33078__$1);

(statearr_33222[(8)] = inst_33077__$1);

(statearr_33222[(9)] = inst_33080__$1);

(statearr_33222[(10)] = inst_33079__$1);

return statearr_33222;
})();
var statearr_33223_33306 = state_33217__$1;
(statearr_33223_33306[(2)] = null);

(statearr_33223_33306[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33218 === (20))){
var inst_33120 = (state_33217[(12)]);
var inst_33128 = figwheel.client.file_reloading.sort_files.call(null,inst_33120);
var state_33217__$1 = state_33217;
var statearr_33224_33307 = state_33217__$1;
(statearr_33224_33307[(2)] = inst_33128);

(statearr_33224_33307[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33218 === (27))){
var state_33217__$1 = state_33217;
var statearr_33225_33308 = state_33217__$1;
(statearr_33225_33308[(2)] = null);

(statearr_33225_33308[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33218 === (1))){
var inst_33069 = (state_33217[(13)]);
var inst_33066 = before_jsload.call(null,files);
var inst_33067 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_33068 = (function (){return ((function (inst_33069,inst_33066,inst_33067,state_val_33218,c__28406__auto__,map__33062,map__33062__$1,opts,before_jsload,on_jsload,reload_dependents,map__33063,map__33063__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__33057_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__33057_SHARP_);
});
;})(inst_33069,inst_33066,inst_33067,state_val_33218,c__28406__auto__,map__33062,map__33062__$1,opts,before_jsload,on_jsload,reload_dependents,map__33063,map__33063__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33069__$1 = cljs.core.filter.call(null,inst_33068,files);
var inst_33070 = cljs.core.not_empty.call(null,inst_33069__$1);
var state_33217__$1 = (function (){var statearr_33226 = state_33217;
(statearr_33226[(14)] = inst_33067);

(statearr_33226[(13)] = inst_33069__$1);

(statearr_33226[(15)] = inst_33066);

return statearr_33226;
})();
if(cljs.core.truth_(inst_33070)){
var statearr_33227_33309 = state_33217__$1;
(statearr_33227_33309[(1)] = (2));

} else {
var statearr_33228_33310 = state_33217__$1;
(statearr_33228_33310[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33218 === (24))){
var state_33217__$1 = state_33217;
var statearr_33229_33311 = state_33217__$1;
(statearr_33229_33311[(2)] = null);

(statearr_33229_33311[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33218 === (39))){
var inst_33170 = (state_33217[(16)]);
var state_33217__$1 = state_33217;
var statearr_33230_33312 = state_33217__$1;
(statearr_33230_33312[(2)] = inst_33170);

(statearr_33230_33312[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33218 === (46))){
var inst_33212 = (state_33217[(2)]);
var state_33217__$1 = state_33217;
var statearr_33231_33313 = state_33217__$1;
(statearr_33231_33313[(2)] = inst_33212);

(statearr_33231_33313[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33218 === (4))){
var inst_33114 = (state_33217[(2)]);
var inst_33115 = cljs.core.List.EMPTY;
var inst_33116 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_33115);
var inst_33117 = (function (){return ((function (inst_33114,inst_33115,inst_33116,state_val_33218,c__28406__auto__,map__33062,map__33062__$1,opts,before_jsload,on_jsload,reload_dependents,map__33063,map__33063__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__33058_SHARP_){
var and__3925__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__33058_SHARP_);
if(cljs.core.truth_(and__3925__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__33058_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__33058_SHARP_))));
} else {
return and__3925__auto__;
}
});
;})(inst_33114,inst_33115,inst_33116,state_val_33218,c__28406__auto__,map__33062,map__33062__$1,opts,before_jsload,on_jsload,reload_dependents,map__33063,map__33063__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33118 = cljs.core.filter.call(null,inst_33117,files);
var inst_33119 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_33120 = cljs.core.concat.call(null,inst_33118,inst_33119);
var state_33217__$1 = (function (){var statearr_33232 = state_33217;
(statearr_33232[(17)] = inst_33114);

(statearr_33232[(12)] = inst_33120);

(statearr_33232[(18)] = inst_33116);

return statearr_33232;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_33233_33314 = state_33217__$1;
(statearr_33233_33314[(1)] = (16));

} else {
var statearr_33234_33315 = state_33217__$1;
(statearr_33234_33315[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33218 === (15))){
var inst_33104 = (state_33217[(2)]);
var state_33217__$1 = state_33217;
var statearr_33235_33316 = state_33217__$1;
(statearr_33235_33316[(2)] = inst_33104);

(statearr_33235_33316[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33218 === (21))){
var inst_33130 = (state_33217[(19)]);
var inst_33130__$1 = (state_33217[(2)]);
var inst_33131 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_33130__$1);
var state_33217__$1 = (function (){var statearr_33236 = state_33217;
(statearr_33236[(19)] = inst_33130__$1);

return statearr_33236;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33217__$1,(22),inst_33131);
} else {
if((state_val_33218 === (31))){
var inst_33215 = (state_33217[(2)]);
var state_33217__$1 = state_33217;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33217__$1,inst_33215);
} else {
if((state_val_33218 === (32))){
var inst_33170 = (state_33217[(16)]);
var inst_33175 = inst_33170.cljs$lang$protocol_mask$partition0$;
var inst_33176 = (inst_33175 & (64));
var inst_33177 = inst_33170.cljs$core$ISeq$;
var inst_33178 = (cljs.core.PROTOCOL_SENTINEL === inst_33177);
var inst_33179 = ((inst_33176) || (inst_33178));
var state_33217__$1 = state_33217;
if(cljs.core.truth_(inst_33179)){
var statearr_33237_33317 = state_33217__$1;
(statearr_33237_33317[(1)] = (35));

} else {
var statearr_33238_33318 = state_33217__$1;
(statearr_33238_33318[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33218 === (40))){
var inst_33192 = (state_33217[(20)]);
var inst_33191 = (state_33217[(2)]);
var inst_33192__$1 = cljs.core.get.call(null,inst_33191,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_33193 = cljs.core.get.call(null,inst_33191,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_33194 = cljs.core.not_empty.call(null,inst_33192__$1);
var state_33217__$1 = (function (){var statearr_33239 = state_33217;
(statearr_33239[(20)] = inst_33192__$1);

(statearr_33239[(21)] = inst_33193);

return statearr_33239;
})();
if(cljs.core.truth_(inst_33194)){
var statearr_33240_33319 = state_33217__$1;
(statearr_33240_33319[(1)] = (41));

} else {
var statearr_33241_33320 = state_33217__$1;
(statearr_33241_33320[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33218 === (33))){
var state_33217__$1 = state_33217;
var statearr_33242_33321 = state_33217__$1;
(statearr_33242_33321[(2)] = false);

(statearr_33242_33321[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33218 === (13))){
var inst_33090 = (state_33217[(22)]);
var inst_33094 = cljs.core.chunk_first.call(null,inst_33090);
var inst_33095 = cljs.core.chunk_rest.call(null,inst_33090);
var inst_33096 = cljs.core.count.call(null,inst_33094);
var inst_33077 = inst_33095;
var inst_33078 = inst_33094;
var inst_33079 = inst_33096;
var inst_33080 = (0);
var state_33217__$1 = (function (){var statearr_33243 = state_33217;
(statearr_33243[(7)] = inst_33078);

(statearr_33243[(8)] = inst_33077);

(statearr_33243[(9)] = inst_33080);

(statearr_33243[(10)] = inst_33079);

return statearr_33243;
})();
var statearr_33244_33322 = state_33217__$1;
(statearr_33244_33322[(2)] = null);

(statearr_33244_33322[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33218 === (22))){
var inst_33133 = (state_33217[(23)]);
var inst_33134 = (state_33217[(24)]);
var inst_33138 = (state_33217[(25)]);
var inst_33130 = (state_33217[(19)]);
var inst_33133__$1 = (state_33217[(2)]);
var inst_33134__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_33133__$1);
var inst_33135 = (function (){var all_files = inst_33130;
var res_SINGLEQUOTE_ = inst_33133__$1;
var res = inst_33134__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_33133,inst_33134,inst_33138,inst_33130,inst_33133__$1,inst_33134__$1,state_val_33218,c__28406__auto__,map__33062,map__33062__$1,opts,before_jsload,on_jsload,reload_dependents,map__33063,map__33063__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__33059_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__33059_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_33133,inst_33134,inst_33138,inst_33130,inst_33133__$1,inst_33134__$1,state_val_33218,c__28406__auto__,map__33062,map__33062__$1,opts,before_jsload,on_jsload,reload_dependents,map__33063,map__33063__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33136 = cljs.core.filter.call(null,inst_33135,inst_33133__$1);
var inst_33137 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_33138__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_33137);
var inst_33139 = cljs.core.not_empty.call(null,inst_33138__$1);
var state_33217__$1 = (function (){var statearr_33245 = state_33217;
(statearr_33245[(26)] = inst_33136);

(statearr_33245[(23)] = inst_33133__$1);

(statearr_33245[(24)] = inst_33134__$1);

(statearr_33245[(25)] = inst_33138__$1);

return statearr_33245;
})();
if(cljs.core.truth_(inst_33139)){
var statearr_33246_33323 = state_33217__$1;
(statearr_33246_33323[(1)] = (23));

} else {
var statearr_33247_33324 = state_33217__$1;
(statearr_33247_33324[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33218 === (36))){
var state_33217__$1 = state_33217;
var statearr_33248_33325 = state_33217__$1;
(statearr_33248_33325[(2)] = false);

(statearr_33248_33325[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33218 === (41))){
var inst_33192 = (state_33217[(20)]);
var inst_33196 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_33197 = cljs.core.map.call(null,inst_33196,inst_33192);
var inst_33198 = cljs.core.pr_str.call(null,inst_33197);
var inst_33199 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_33198)].join('');
var inst_33200 = figwheel.client.utils.log.call(null,inst_33199);
var state_33217__$1 = state_33217;
var statearr_33249_33326 = state_33217__$1;
(statearr_33249_33326[(2)] = inst_33200);

(statearr_33249_33326[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33218 === (43))){
var inst_33193 = (state_33217[(21)]);
var inst_33203 = (state_33217[(2)]);
var inst_33204 = cljs.core.not_empty.call(null,inst_33193);
var state_33217__$1 = (function (){var statearr_33250 = state_33217;
(statearr_33250[(27)] = inst_33203);

return statearr_33250;
})();
if(cljs.core.truth_(inst_33204)){
var statearr_33251_33327 = state_33217__$1;
(statearr_33251_33327[(1)] = (44));

} else {
var statearr_33252_33328 = state_33217__$1;
(statearr_33252_33328[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33218 === (29))){
var inst_33136 = (state_33217[(26)]);
var inst_33133 = (state_33217[(23)]);
var inst_33134 = (state_33217[(24)]);
var inst_33170 = (state_33217[(16)]);
var inst_33138 = (state_33217[(25)]);
var inst_33130 = (state_33217[(19)]);
var inst_33166 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_33169 = (function (){var all_files = inst_33130;
var res_SINGLEQUOTE_ = inst_33133;
var res = inst_33134;
var files_not_loaded = inst_33136;
var dependencies_that_loaded = inst_33138;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33136,inst_33133,inst_33134,inst_33170,inst_33138,inst_33130,inst_33166,state_val_33218,c__28406__auto__,map__33062,map__33062__$1,opts,before_jsload,on_jsload,reload_dependents,map__33063,map__33063__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__33168){
var map__33253 = p__33168;
var map__33253__$1 = ((((!((map__33253 == null)))?(((((map__33253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33253.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33253):map__33253);
var namespace = cljs.core.get.call(null,map__33253__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33136,inst_33133,inst_33134,inst_33170,inst_33138,inst_33130,inst_33166,state_val_33218,c__28406__auto__,map__33062,map__33062__$1,opts,before_jsload,on_jsload,reload_dependents,map__33063,map__33063__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33170__$1 = cljs.core.group_by.call(null,inst_33169,inst_33136);
var inst_33172 = (inst_33170__$1 == null);
var inst_33173 = cljs.core.not.call(null,inst_33172);
var state_33217__$1 = (function (){var statearr_33255 = state_33217;
(statearr_33255[(16)] = inst_33170__$1);

(statearr_33255[(28)] = inst_33166);

return statearr_33255;
})();
if(inst_33173){
var statearr_33256_33329 = state_33217__$1;
(statearr_33256_33329[(1)] = (32));

} else {
var statearr_33257_33330 = state_33217__$1;
(statearr_33257_33330[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33218 === (44))){
var inst_33193 = (state_33217[(21)]);
var inst_33206 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_33193);
var inst_33207 = cljs.core.pr_str.call(null,inst_33206);
var inst_33208 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_33207)].join('');
var inst_33209 = figwheel.client.utils.log.call(null,inst_33208);
var state_33217__$1 = state_33217;
var statearr_33258_33331 = state_33217__$1;
(statearr_33258_33331[(2)] = inst_33209);

(statearr_33258_33331[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33218 === (6))){
var inst_33111 = (state_33217[(2)]);
var state_33217__$1 = state_33217;
var statearr_33259_33332 = state_33217__$1;
(statearr_33259_33332[(2)] = inst_33111);

(statearr_33259_33332[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33218 === (28))){
var inst_33136 = (state_33217[(26)]);
var inst_33163 = (state_33217[(2)]);
var inst_33164 = cljs.core.not_empty.call(null,inst_33136);
var state_33217__$1 = (function (){var statearr_33260 = state_33217;
(statearr_33260[(29)] = inst_33163);

return statearr_33260;
})();
if(cljs.core.truth_(inst_33164)){
var statearr_33261_33333 = state_33217__$1;
(statearr_33261_33333[(1)] = (29));

} else {
var statearr_33262_33334 = state_33217__$1;
(statearr_33262_33334[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33218 === (25))){
var inst_33134 = (state_33217[(24)]);
var inst_33150 = (state_33217[(2)]);
var inst_33151 = cljs.core.not_empty.call(null,inst_33134);
var state_33217__$1 = (function (){var statearr_33263 = state_33217;
(statearr_33263[(30)] = inst_33150);

return statearr_33263;
})();
if(cljs.core.truth_(inst_33151)){
var statearr_33264_33335 = state_33217__$1;
(statearr_33264_33335[(1)] = (26));

} else {
var statearr_33265_33336 = state_33217__$1;
(statearr_33265_33336[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33218 === (34))){
var inst_33186 = (state_33217[(2)]);
var state_33217__$1 = state_33217;
if(cljs.core.truth_(inst_33186)){
var statearr_33266_33337 = state_33217__$1;
(statearr_33266_33337[(1)] = (38));

} else {
var statearr_33267_33338 = state_33217__$1;
(statearr_33267_33338[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33218 === (17))){
var state_33217__$1 = state_33217;
var statearr_33268_33339 = state_33217__$1;
(statearr_33268_33339[(2)] = recompile_dependents);

(statearr_33268_33339[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33218 === (3))){
var state_33217__$1 = state_33217;
var statearr_33269_33340 = state_33217__$1;
(statearr_33269_33340[(2)] = null);

(statearr_33269_33340[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33218 === (12))){
var inst_33107 = (state_33217[(2)]);
var state_33217__$1 = state_33217;
var statearr_33270_33341 = state_33217__$1;
(statearr_33270_33341[(2)] = inst_33107);

(statearr_33270_33341[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33218 === (2))){
var inst_33069 = (state_33217[(13)]);
var inst_33076 = cljs.core.seq.call(null,inst_33069);
var inst_33077 = inst_33076;
var inst_33078 = null;
var inst_33079 = (0);
var inst_33080 = (0);
var state_33217__$1 = (function (){var statearr_33271 = state_33217;
(statearr_33271[(7)] = inst_33078);

(statearr_33271[(8)] = inst_33077);

(statearr_33271[(9)] = inst_33080);

(statearr_33271[(10)] = inst_33079);

return statearr_33271;
})();
var statearr_33272_33342 = state_33217__$1;
(statearr_33272_33342[(2)] = null);

(statearr_33272_33342[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33218 === (23))){
var inst_33136 = (state_33217[(26)]);
var inst_33133 = (state_33217[(23)]);
var inst_33134 = (state_33217[(24)]);
var inst_33138 = (state_33217[(25)]);
var inst_33130 = (state_33217[(19)]);
var inst_33141 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_33143 = (function (){var all_files = inst_33130;
var res_SINGLEQUOTE_ = inst_33133;
var res = inst_33134;
var files_not_loaded = inst_33136;
var dependencies_that_loaded = inst_33138;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33136,inst_33133,inst_33134,inst_33138,inst_33130,inst_33141,state_val_33218,c__28406__auto__,map__33062,map__33062__$1,opts,before_jsload,on_jsload,reload_dependents,map__33063,map__33063__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__33142){
var map__33273 = p__33142;
var map__33273__$1 = ((((!((map__33273 == null)))?(((((map__33273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33273.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33273):map__33273);
var request_url = cljs.core.get.call(null,map__33273__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33136,inst_33133,inst_33134,inst_33138,inst_33130,inst_33141,state_val_33218,c__28406__auto__,map__33062,map__33062__$1,opts,before_jsload,on_jsload,reload_dependents,map__33063,map__33063__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33144 = cljs.core.reverse.call(null,inst_33138);
var inst_33145 = cljs.core.map.call(null,inst_33143,inst_33144);
var inst_33146 = cljs.core.pr_str.call(null,inst_33145);
var inst_33147 = figwheel.client.utils.log.call(null,inst_33146);
var state_33217__$1 = (function (){var statearr_33275 = state_33217;
(statearr_33275[(31)] = inst_33141);

return statearr_33275;
})();
var statearr_33276_33343 = state_33217__$1;
(statearr_33276_33343[(2)] = inst_33147);

(statearr_33276_33343[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33218 === (35))){
var state_33217__$1 = state_33217;
var statearr_33277_33344 = state_33217__$1;
(statearr_33277_33344[(2)] = true);

(statearr_33277_33344[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33218 === (19))){
var inst_33120 = (state_33217[(12)]);
var inst_33126 = figwheel.client.file_reloading.expand_files.call(null,inst_33120);
var state_33217__$1 = state_33217;
var statearr_33278_33345 = state_33217__$1;
(statearr_33278_33345[(2)] = inst_33126);

(statearr_33278_33345[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33218 === (11))){
var state_33217__$1 = state_33217;
var statearr_33279_33346 = state_33217__$1;
(statearr_33279_33346[(2)] = null);

(statearr_33279_33346[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33218 === (9))){
var inst_33109 = (state_33217[(2)]);
var state_33217__$1 = state_33217;
var statearr_33280_33347 = state_33217__$1;
(statearr_33280_33347[(2)] = inst_33109);

(statearr_33280_33347[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33218 === (5))){
var inst_33080 = (state_33217[(9)]);
var inst_33079 = (state_33217[(10)]);
var inst_33082 = (inst_33080 < inst_33079);
var inst_33083 = inst_33082;
var state_33217__$1 = state_33217;
if(cljs.core.truth_(inst_33083)){
var statearr_33281_33348 = state_33217__$1;
(statearr_33281_33348[(1)] = (7));

} else {
var statearr_33282_33349 = state_33217__$1;
(statearr_33282_33349[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33218 === (14))){
var inst_33090 = (state_33217[(22)]);
var inst_33099 = cljs.core.first.call(null,inst_33090);
var inst_33100 = figwheel.client.file_reloading.eval_body.call(null,inst_33099,opts);
var inst_33101 = cljs.core.next.call(null,inst_33090);
var inst_33077 = inst_33101;
var inst_33078 = null;
var inst_33079 = (0);
var inst_33080 = (0);
var state_33217__$1 = (function (){var statearr_33283 = state_33217;
(statearr_33283[(7)] = inst_33078);

(statearr_33283[(32)] = inst_33100);

(statearr_33283[(8)] = inst_33077);

(statearr_33283[(9)] = inst_33080);

(statearr_33283[(10)] = inst_33079);

return statearr_33283;
})();
var statearr_33284_33350 = state_33217__$1;
(statearr_33284_33350[(2)] = null);

(statearr_33284_33350[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33218 === (45))){
var state_33217__$1 = state_33217;
var statearr_33285_33351 = state_33217__$1;
(statearr_33285_33351[(2)] = null);

(statearr_33285_33351[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33218 === (26))){
var inst_33136 = (state_33217[(26)]);
var inst_33133 = (state_33217[(23)]);
var inst_33134 = (state_33217[(24)]);
var inst_33138 = (state_33217[(25)]);
var inst_33130 = (state_33217[(19)]);
var inst_33153 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_33155 = (function (){var all_files = inst_33130;
var res_SINGLEQUOTE_ = inst_33133;
var res = inst_33134;
var files_not_loaded = inst_33136;
var dependencies_that_loaded = inst_33138;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33136,inst_33133,inst_33134,inst_33138,inst_33130,inst_33153,state_val_33218,c__28406__auto__,map__33062,map__33062__$1,opts,before_jsload,on_jsload,reload_dependents,map__33063,map__33063__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__33154){
var map__33286 = p__33154;
var map__33286__$1 = ((((!((map__33286 == null)))?(((((map__33286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33286.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33286):map__33286);
var namespace = cljs.core.get.call(null,map__33286__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__33286__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33136,inst_33133,inst_33134,inst_33138,inst_33130,inst_33153,state_val_33218,c__28406__auto__,map__33062,map__33062__$1,opts,before_jsload,on_jsload,reload_dependents,map__33063,map__33063__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33156 = cljs.core.map.call(null,inst_33155,inst_33134);
var inst_33157 = cljs.core.pr_str.call(null,inst_33156);
var inst_33158 = figwheel.client.utils.log.call(null,inst_33157);
var inst_33159 = (function (){var all_files = inst_33130;
var res_SINGLEQUOTE_ = inst_33133;
var res = inst_33134;
var files_not_loaded = inst_33136;
var dependencies_that_loaded = inst_33138;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33136,inst_33133,inst_33134,inst_33138,inst_33130,inst_33153,inst_33155,inst_33156,inst_33157,inst_33158,state_val_33218,c__28406__auto__,map__33062,map__33062__$1,opts,before_jsload,on_jsload,reload_dependents,map__33063,map__33063__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33136,inst_33133,inst_33134,inst_33138,inst_33130,inst_33153,inst_33155,inst_33156,inst_33157,inst_33158,state_val_33218,c__28406__auto__,map__33062,map__33062__$1,opts,before_jsload,on_jsload,reload_dependents,map__33063,map__33063__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33160 = setTimeout(inst_33159,(10));
var state_33217__$1 = (function (){var statearr_33288 = state_33217;
(statearr_33288[(33)] = inst_33158);

(statearr_33288[(34)] = inst_33153);

return statearr_33288;
})();
var statearr_33289_33352 = state_33217__$1;
(statearr_33289_33352[(2)] = inst_33160);

(statearr_33289_33352[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33218 === (16))){
var state_33217__$1 = state_33217;
var statearr_33290_33353 = state_33217__$1;
(statearr_33290_33353[(2)] = reload_dependents);

(statearr_33290_33353[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33218 === (38))){
var inst_33170 = (state_33217[(16)]);
var inst_33188 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33170);
var state_33217__$1 = state_33217;
var statearr_33291_33354 = state_33217__$1;
(statearr_33291_33354[(2)] = inst_33188);

(statearr_33291_33354[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33218 === (30))){
var state_33217__$1 = state_33217;
var statearr_33292_33355 = state_33217__$1;
(statearr_33292_33355[(2)] = null);

(statearr_33292_33355[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33218 === (10))){
var inst_33090 = (state_33217[(22)]);
var inst_33092 = cljs.core.chunked_seq_QMARK_.call(null,inst_33090);
var state_33217__$1 = state_33217;
if(inst_33092){
var statearr_33293_33356 = state_33217__$1;
(statearr_33293_33356[(1)] = (13));

} else {
var statearr_33294_33357 = state_33217__$1;
(statearr_33294_33357[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33218 === (18))){
var inst_33124 = (state_33217[(2)]);
var state_33217__$1 = state_33217;
if(cljs.core.truth_(inst_33124)){
var statearr_33295_33358 = state_33217__$1;
(statearr_33295_33358[(1)] = (19));

} else {
var statearr_33296_33359 = state_33217__$1;
(statearr_33296_33359[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33218 === (42))){
var state_33217__$1 = state_33217;
var statearr_33297_33360 = state_33217__$1;
(statearr_33297_33360[(2)] = null);

(statearr_33297_33360[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33218 === (37))){
var inst_33183 = (state_33217[(2)]);
var state_33217__$1 = state_33217;
var statearr_33298_33361 = state_33217__$1;
(statearr_33298_33361[(2)] = inst_33183);

(statearr_33298_33361[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33218 === (8))){
var inst_33090 = (state_33217[(22)]);
var inst_33077 = (state_33217[(8)]);
var inst_33090__$1 = cljs.core.seq.call(null,inst_33077);
var state_33217__$1 = (function (){var statearr_33299 = state_33217;
(statearr_33299[(22)] = inst_33090__$1);

return statearr_33299;
})();
if(inst_33090__$1){
var statearr_33300_33362 = state_33217__$1;
(statearr_33300_33362[(1)] = (10));

} else {
var statearr_33301_33363 = state_33217__$1;
(statearr_33301_33363[(1)] = (11));

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
}
});})(c__28406__auto__,map__33062,map__33062__$1,opts,before_jsload,on_jsload,reload_dependents,map__33063,map__33063__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__28316__auto__,c__28406__auto__,map__33062,map__33062__$1,opts,before_jsload,on_jsload,reload_dependents,map__33063,map__33063__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28317__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28317__auto____0 = (function (){
var statearr_33302 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33302[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__28317__auto__);

(statearr_33302[(1)] = (1));

return statearr_33302;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28317__auto____1 = (function (state_33217){
while(true){
var ret_value__28318__auto__ = (function (){try{while(true){
var result__28319__auto__ = switch__28316__auto__.call(null,state_33217);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28319__auto__;
}
break;
}
}catch (e33303){if((e33303 instanceof Object)){
var ex__28320__auto__ = e33303;
var statearr_33304_33364 = state_33217;
(statearr_33304_33364[(5)] = ex__28320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33217);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33303;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33365 = state_33217;
state_33217 = G__33365;
continue;
} else {
return ret_value__28318__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__28317__auto__ = function(state_33217){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28317__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28317__auto____1.call(this,state_33217);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__28317__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28317__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__28317__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28317__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28317__auto__;
})()
;})(switch__28316__auto__,c__28406__auto__,map__33062,map__33062__$1,opts,before_jsload,on_jsload,reload_dependents,map__33063,map__33063__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__28408__auto__ = (function (){var statearr_33305 = f__28407__auto__.call(null);
(statearr_33305[(6)] = c__28406__auto__);

return statearr_33305;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28408__auto__);
});})(c__28406__auto__,map__33062,map__33062__$1,opts,before_jsload,on_jsload,reload_dependents,map__33063,map__33063__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__28406__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__33368,link){
var map__33369 = p__33368;
var map__33369__$1 = ((((!((map__33369 == null)))?(((((map__33369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33369.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33369):map__33369);
var file = cljs.core.get.call(null,map__33369__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__33369,map__33369__$1,file){
return (function (p1__33366_SHARP_,p2__33367_SHARP_){
if(cljs.core._EQ_.call(null,p1__33366_SHARP_,p2__33367_SHARP_)){
return p1__33366_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__33369,map__33369__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__33372){
var map__33373 = p__33372;
var map__33373__$1 = ((((!((map__33373 == null)))?(((((map__33373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33373.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33373):map__33373);
var match_length = cljs.core.get.call(null,map__33373__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__33373__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__33371_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__33371_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__33375_SHARP_,p2__33376_SHARP_){
return cljs.core.assoc.call(null,p1__33375_SHARP_,cljs.core.get.call(null,p2__33376_SHARP_,key),p2__33376_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_33377 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_33377);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_33377);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__33378,p__33379){
var map__33380 = p__33378;
var map__33380__$1 = ((((!((map__33380 == null)))?(((((map__33380.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33380.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33380):map__33380);
var on_cssload = cljs.core.get.call(null,map__33380__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__33381 = p__33379;
var map__33381__$1 = ((((!((map__33381 == null)))?(((((map__33381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33381.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33381):map__33381);
var files_msg = map__33381__$1;
var files = cljs.core.get.call(null,map__33381__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1531390889384
