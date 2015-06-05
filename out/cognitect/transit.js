// Compiled by ClojureScript 0.0-2850 {:elide-asserts true, :static-fns true}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('goog.math.Long');
goog.require('com.cognitect.transit.eq');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv(other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
var G__21957 = this$__$1;
return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__21957) : com.cognitect.transit.eq.hashCode.call(null,G__21957));
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
var G__21958 = this$__$1;
return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__21958) : com.cognitect.transit.eq.hashCode.call(null,G__21958));
});

goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
var G__21959 = this$__$1;
return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__21959) : com.cognitect.transit.eq.hashCode.call(null,G__21959));
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write(writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function opts_merge(a,b){
var seq__21964_21968 = cljs.core.seq(cljs.core.js_keys(b));
var chunk__21965_21969 = null;
var count__21966_21970 = (0);
var i__21967_21971 = (0);
while(true){
if((i__21967_21971 < count__21966_21970)){
var k_21972 = chunk__21965_21969.cljs$core$IIndexed$_nth$arity$2(null,i__21967_21971);
var v_21973 = (b[k_21972]);
(a[k_21972] = v_21973);

var G__21974 = seq__21964_21968;
var G__21975 = chunk__21965_21969;
var G__21976 = count__21966_21970;
var G__21977 = (i__21967_21971 + (1));
seq__21964_21968 = G__21974;
chunk__21965_21969 = G__21975;
count__21966_21970 = G__21976;
i__21967_21971 = G__21977;
continue;
} else {
var temp__4126__auto___21978 = cljs.core.seq(seq__21964_21968);
if(temp__4126__auto___21978){
var seq__21964_21979__$1 = temp__4126__auto___21978;
if(cljs.core.chunked_seq_QMARK_(seq__21964_21979__$1)){
var c__4561__auto___21980 = cljs.core.chunk_first(seq__21964_21979__$1);
var G__21981 = cljs.core.chunk_rest(seq__21964_21979__$1);
var G__21982 = c__4561__auto___21980;
var G__21983 = cljs.core.count(c__4561__auto___21980);
var G__21984 = (0);
seq__21964_21968 = G__21981;
chunk__21965_21969 = G__21982;
count__21966_21970 = G__21983;
i__21967_21971 = G__21984;
continue;
} else {
var k_21985 = cljs.core.first(seq__21964_21979__$1);
var v_21986 = (b[k_21985]);
(a[k_21985] = v_21986);

var G__21987 = cljs.core.next(seq__21964_21979__$1);
var G__21988 = null;
var G__21989 = (0);
var G__21990 = (0);
seq__21964_21968 = G__21987;
chunk__21965_21969 = G__21988;
count__21966_21970 = G__21989;
i__21967_21971 = G__21990;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_(m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
var G__21991 = arr;
var G__21992 = true;
var G__21993 = true;
return (cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3 ? cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3(G__21991,G__21992,G__21993) : cljs.core.PersistentArrayMap.fromArray.call(null,G__21991,G__21992,G__21993));
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__4361__auto__,writer__4362__auto__,opt__4363__auto__){
return cljs.core._write(writer__4362__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function __GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_(v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
var G__21994 = arr;
var G__21995 = true;
return (cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2 ? cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2(G__21994,G__21995) : cljs.core.PersistentVector.fromArray.call(null,G__21994,G__21995));
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__4361__auto__,writer__4362__auto__,opt__4363__auto__){
return cljs.core._write(writer__4362__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function __GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
* Return a transit reader. type may be either :json or :json-verbose.
* opts may be a map optionally containing a :handlers entry. The value
* of :handlers should be map from tag to a decoder function which returns
* then in-memory representation of the semantic transit value.
*/
cognitect.transit.reader = (function() {
var reader = null;
var reader__1 = (function (type){
return reader.cljs$core$IFn$_invoke$arity$2(type,null);
});
var reader__2 = (function (type,opts){
var G__22000 = cljs.core.name(type);
var G__22001 = cognitect.transit.opts_merge({"prefersStrings": false, "arrayBuilder": (new cognitect.transit.VectorBuilder()), "mapBuilder": (new cognitect.transit.MapBuilder()), "handlers": cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 5, ["$",((function (G__22000){
return (function (v){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(v);
});})(G__22000))
,":",((function (G__22000){
return (function (v){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);
});})(G__22000))
,"set",((function (G__22000){
return (function (v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,v);
});})(G__22000))
,"list",((function (G__22000){
return (function (v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.List.EMPTY,v.reverse());
});})(G__22000))
,"cmap",((function (G__22000){
return (function (v){
var i = (0);
var ret = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__22002 = (i + (2));
var G__22003 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,(v[i]),(v[(i + (1))]));
i = G__22002;
ret = G__22003;
continue;
} else {
return cljs.core.persistent_BANG_(ret);
}
break;
}
});})(G__22000))
], null),cljs.core.constant$keyword$20.cljs$core$IFn$_invoke$arity$1(opts)], 0)))},cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$20)));
return (com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(G__22000,G__22001) : com.cognitect.transit.reader.call(null,G__22000,G__22001));
});
reader = function(type,opts){
switch(arguments.length){
case 1:
return reader__1.call(this,type);
case 2:
return reader__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reader.cljs$core$IFn$_invoke$arity$1 = reader__1;
reader.cljs$core$IFn$_invoke$arity$2 = reader__2;
return reader;
})()
;
/**
* Read a transit encoded string into ClojureScript values given a
* transit reader.
*/
cognitect.transit.read = (function read(r,str){
return r.read(str);
});

/**
* @constructor
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__4361__auto__,writer__4362__auto__,opt__4363__auto__){
return cljs.core._write(writer__4362__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function __GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__4361__auto__,writer__4362__auto__,opt__4363__auto__){
return cljs.core._write(writer__4362__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function __GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__22004_22010 = cljs.core.seq(v);
var chunk__22005_22011 = null;
var count__22006_22012 = (0);
var i__22007_22013 = (0);
while(true){
if((i__22007_22013 < count__22006_22012)){
var x_22014 = chunk__22005_22011.cljs$core$IIndexed$_nth$arity$2(null,i__22007_22013);
ret.push(x_22014);

var G__22015 = seq__22004_22010;
var G__22016 = chunk__22005_22011;
var G__22017 = count__22006_22012;
var G__22018 = (i__22007_22013 + (1));
seq__22004_22010 = G__22015;
chunk__22005_22011 = G__22016;
count__22006_22012 = G__22017;
i__22007_22013 = G__22018;
continue;
} else {
var temp__4126__auto___22019 = cljs.core.seq(seq__22004_22010);
if(temp__4126__auto___22019){
var seq__22004_22020__$1 = temp__4126__auto___22019;
if(cljs.core.chunked_seq_QMARK_(seq__22004_22020__$1)){
var c__4561__auto___22021 = cljs.core.chunk_first(seq__22004_22020__$1);
var G__22022 = cljs.core.chunk_rest(seq__22004_22020__$1);
var G__22023 = c__4561__auto___22021;
var G__22024 = cljs.core.count(c__4561__auto___22021);
var G__22025 = (0);
seq__22004_22010 = G__22022;
chunk__22005_22011 = G__22023;
count__22006_22012 = G__22024;
i__22007_22013 = G__22025;
continue;
} else {
var x_22026 = cljs.core.first(seq__22004_22020__$1);
ret.push(x_22026);

var G__22027 = cljs.core.next(seq__22004_22020__$1);
var G__22028 = null;
var G__22029 = (0);
var G__22030 = (0);
seq__22004_22010 = G__22027;
chunk__22005_22011 = G__22028;
count__22006_22012 = G__22029;
i__22007_22013 = G__22030;
continue;
}
} else {
}
}
break;
}

var G__22008 = "array";
var G__22009 = ret;
return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2(G__22008,G__22009) : com.cognitect.transit.tagged.call(null,G__22008,G__22009));
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__4361__auto__,writer__4362__auto__,opt__4363__auto__){
return cljs.core._write(writer__4362__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function __GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__4361__auto__,writer__4362__auto__,opt__4363__auto__){
return cljs.core._write(writer__4362__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function __GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__22031_22037 = cljs.core.seq(v);
var chunk__22032_22038 = null;
var count__22033_22039 = (0);
var i__22034_22040 = (0);
while(true){
if((i__22034_22040 < count__22033_22039)){
var x_22041 = chunk__22032_22038.cljs$core$IIndexed$_nth$arity$2(null,i__22034_22040);
ret.push(x_22041);

var G__22042 = seq__22031_22037;
var G__22043 = chunk__22032_22038;
var G__22044 = count__22033_22039;
var G__22045 = (i__22034_22040 + (1));
seq__22031_22037 = G__22042;
chunk__22032_22038 = G__22043;
count__22033_22039 = G__22044;
i__22034_22040 = G__22045;
continue;
} else {
var temp__4126__auto___22046 = cljs.core.seq(seq__22031_22037);
if(temp__4126__auto___22046){
var seq__22031_22047__$1 = temp__4126__auto___22046;
if(cljs.core.chunked_seq_QMARK_(seq__22031_22047__$1)){
var c__4561__auto___22048 = cljs.core.chunk_first(seq__22031_22047__$1);
var G__22049 = cljs.core.chunk_rest(seq__22031_22047__$1);
var G__22050 = c__4561__auto___22048;
var G__22051 = cljs.core.count(c__4561__auto___22048);
var G__22052 = (0);
seq__22031_22037 = G__22049;
chunk__22032_22038 = G__22050;
count__22033_22039 = G__22051;
i__22034_22040 = G__22052;
continue;
} else {
var x_22053 = cljs.core.first(seq__22031_22047__$1);
ret.push(x_22053);

var G__22054 = cljs.core.next(seq__22031_22047__$1);
var G__22055 = null;
var G__22056 = (0);
var G__22057 = (0);
seq__22031_22037 = G__22054;
chunk__22032_22038 = G__22055;
count__22033_22039 = G__22056;
i__22034_22040 = G__22057;
continue;
}
} else {
}
}
break;
}

var G__22035 = "array";
var G__22036 = ret;
return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2(G__22035,G__22036) : com.cognitect.transit.tagged.call(null,G__22035,G__22036));
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__4361__auto__,writer__4362__auto__,opt__4363__auto__){
return cljs.core._write(writer__4362__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function __GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__22058_22062 = cljs.core.seq(v);
var chunk__22059_22063 = null;
var count__22060_22064 = (0);
var i__22061_22065 = (0);
while(true){
if((i__22061_22065 < count__22060_22064)){
var x_22066 = chunk__22059_22063.cljs$core$IIndexed$_nth$arity$2(null,i__22061_22065);
ret.push(x_22066);

var G__22067 = seq__22058_22062;
var G__22068 = chunk__22059_22063;
var G__22069 = count__22060_22064;
var G__22070 = (i__22061_22065 + (1));
seq__22058_22062 = G__22067;
chunk__22059_22063 = G__22068;
count__22060_22064 = G__22069;
i__22061_22065 = G__22070;
continue;
} else {
var temp__4126__auto___22071 = cljs.core.seq(seq__22058_22062);
if(temp__4126__auto___22071){
var seq__22058_22072__$1 = temp__4126__auto___22071;
if(cljs.core.chunked_seq_QMARK_(seq__22058_22072__$1)){
var c__4561__auto___22073 = cljs.core.chunk_first(seq__22058_22072__$1);
var G__22074 = cljs.core.chunk_rest(seq__22058_22072__$1);
var G__22075 = c__4561__auto___22073;
var G__22076 = cljs.core.count(c__4561__auto___22073);
var G__22077 = (0);
seq__22058_22062 = G__22074;
chunk__22059_22063 = G__22075;
count__22060_22064 = G__22076;
i__22061_22065 = G__22077;
continue;
} else {
var x_22078 = cljs.core.first(seq__22058_22072__$1);
ret.push(x_22078);

var G__22079 = cljs.core.next(seq__22058_22072__$1);
var G__22080 = null;
var G__22081 = (0);
var G__22082 = (0);
seq__22058_22062 = G__22079;
chunk__22059_22063 = G__22080;
count__22060_22064 = G__22081;
i__22061_22065 = G__22082;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__4361__auto__,writer__4362__auto__,opt__4363__auto__){
return cljs.core._write(writer__4362__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function __GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__4361__auto__,writer__4362__auto__,opt__4363__auto__){
return cljs.core._write(writer__4362__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function __GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
* Return a transit writer. type maybe either :json or :json-verbose.
* opts is a map containing a :handlers entry. :handlers is a map of
* type constructors to handler instances.
*/
cognitect.transit.writer = (function() {
var writer = null;
var writer__1 = (function (type){
return writer.cljs$core$IFn$_invoke$arity$2(type,null);
});
var writer__2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),cljs.core.constant$keyword$20.cljs$core$IFn$_invoke$arity$1(opts)], 0));
var G__22101 = cljs.core.name(type);
var G__22102 = cognitect.transit.opts_merge({"unpack": ((function (G__22101,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(G__22101,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x22106 = cljs.core.clone(handlers);
x22106.forEach = ((function (x22106,G__22101,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__22107 = cljs.core.seq(coll);
var chunk__22108 = null;
var count__22109 = (0);
var i__22110 = (0);
while(true){
if((i__22110 < count__22109)){
var vec__22111 = chunk__22108.cljs$core$IIndexed$_nth$arity$2(null,i__22110);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22111,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22111,(1),null);
var G__22112_22117 = v;
var G__22113_22118 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__22112_22117,G__22113_22118) : f.call(null,G__22112_22117,G__22113_22118));

var G__22119 = seq__22107;
var G__22120 = chunk__22108;
var G__22121 = count__22109;
var G__22122 = (i__22110 + (1));
seq__22107 = G__22119;
chunk__22108 = G__22120;
count__22109 = G__22121;
i__22110 = G__22122;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__22107);
if(temp__4126__auto__){
var seq__22107__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22107__$1)){
var c__4561__auto__ = cljs.core.chunk_first(seq__22107__$1);
var G__22123 = cljs.core.chunk_rest(seq__22107__$1);
var G__22124 = c__4561__auto__;
var G__22125 = cljs.core.count(c__4561__auto__);
var G__22126 = (0);
seq__22107 = G__22123;
chunk__22108 = G__22124;
count__22109 = G__22125;
i__22110 = G__22126;
continue;
} else {
var vec__22114 = cljs.core.first(seq__22107__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22114,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22114,(1),null);
var G__22115_22127 = v;
var G__22116_22128 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__22115_22127,G__22116_22128) : f.call(null,G__22115_22127,G__22116_22128));

var G__22129 = cljs.core.next(seq__22107__$1);
var G__22130 = null;
var G__22131 = (0);
var G__22132 = (0);
seq__22107 = G__22129;
chunk__22108 = G__22130;
count__22109 = G__22131;
i__22110 = G__22132;
continue;
}
} else {
return null;
}
}
break;
}
});})(x22106,G__22101,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x22106;
})(), "objectBuilder": ((function (G__22101,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv(((function (G__22101,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__22103 = obj;
G__22103.push((function (){var G__22104 = k;
return (kfn.cljs$core$IFn$_invoke$arity$1 ? kfn.cljs$core$IFn$_invoke$arity$1(G__22104) : kfn.call(null,G__22104));
})(),(function (){var G__22105 = v;
return (vfn.cljs$core$IFn$_invoke$arity$1 ? vfn.cljs$core$IFn$_invoke$arity$1(G__22105) : vfn.call(null,G__22105));
})());

return G__22103;
});})(G__22101,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(G__22101,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$20)));
return (com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(G__22101,G__22102) : com.cognitect.transit.writer.call(null,G__22101,G__22102));
});
writer = function(type,opts){
switch(arguments.length){
case 1:
return writer__1.call(this,type);
case 2:
return writer__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
writer.cljs$core$IFn$_invoke$arity$1 = writer__1;
writer.cljs$core$IFn$_invoke$arity$2 = writer__2;
return writer;
})()
;
/**
* Encode an object into a transit string given a transit writer.
*/
cognitect.transit.write = (function write(w,o){
return w.write(o);
});
/**
* Construct a read handler. Implemented as identity, exists primarily
* for API compatiblity with transit-clj
*/
cognitect.transit.read_handler = (function read_handler(from_rep){
return from_rep;
});
/**
* Creates a transit write handler whose tag, rep,
* stringRep, and verboseWriteHandler methods
* invoke the provided fns.
*/
cognitect.transit.write_handler = (function() {
var write_handler = null;
var write_handler__2 = (function (tag_fn,rep_fn){
return write_handler.cljs$core$IFn$_invoke$arity$4(tag_fn,rep_fn,null,null);
});
var write_handler__3 = (function (tag_fn,rep_fn,str_rep_fn){
return write_handler.cljs$core$IFn$_invoke$arity$4(tag_fn,rep_fn,str_rep_fn,null);
});
var write_handler__4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t22147 !== 'undefined'){
} else {

/**
* @constructor
*/
cognitect.transit.t22147 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta22148){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta22148 = meta22148;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t22147.prototype.tag = (function (o){
var self__ = this;
var _ = this;
var G__22150 = o;
return (self__.tag_fn.cljs$core$IFn$_invoke$arity$1 ? self__.tag_fn.cljs$core$IFn$_invoke$arity$1(G__22150) : self__.tag_fn.call(null,G__22150));
});

cognitect.transit.t22147.prototype.rep = (function (o){
var self__ = this;
var _ = this;
var G__22151 = o;
return (self__.rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.rep_fn.cljs$core$IFn$_invoke$arity$1(G__22151) : self__.rep_fn.call(null,G__22151));
});

cognitect.transit.t22147.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
var G__22152 = o;
return (self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1(G__22152) : self__.str_rep_fn.call(null,G__22152));
} else {
return null;
}
});

cognitect.transit.t22147.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return (self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0 ? self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0() : self__.verbose_handler_fn.call(null));
} else {
return null;
}
});

cognitect.transit.t22147.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22149){
var self__ = this;
var _22149__$1 = this;
return self__.meta22148;
});

cognitect.transit.t22147.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22149,meta22148__$1){
var self__ = this;
var _22149__$1 = this;
return (new cognitect.transit.t22147(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta22148__$1));
});

cognitect.transit.t22147.cljs$lang$type = true;

cognitect.transit.t22147.cljs$lang$ctorStr = "cognitect.transit/t22147";

cognitect.transit.t22147.cljs$lang$ctorPrWriter = (function (this__4361__auto__,writer__4362__auto__,opt__4363__auto__){
return cljs.core._write(writer__4362__auto__,"cognitect.transit/t22147");
});

cognitect.transit.__GT_t22147 = (function __GT_t22147(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta22148){
return (new cognitect.transit.t22147(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta22148));
});

}

return (new cognitect.transit.t22147(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,cljs.core.PersistentArrayMap.EMPTY));
});
write_handler = function(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
switch(arguments.length){
case 2:
return write_handler__2.call(this,tag_fn,rep_fn);
case 3:
return write_handler__3.call(this,tag_fn,rep_fn,str_rep_fn);
case 4:
return write_handler__4.call(this,tag_fn,rep_fn,str_rep_fn,verbose_handler_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
write_handler.cljs$core$IFn$_invoke$arity$2 = write_handler__2;
write_handler.cljs$core$IFn$_invoke$arity$3 = write_handler__3;
write_handler.cljs$core$IFn$_invoke$arity$4 = write_handler__4;
return write_handler;
})()
;
/**
* Construct a tagged value. tag must be a string and rep can
* be any transit encodeable value.
*/
cognitect.transit.tagged_value = (function tagged_value(tag,rep){
var G__22155 = tag;
var G__22156 = rep;
return (com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2(G__22155,G__22156) : com.cognitect.transit.types.taggedValue.call(null,G__22155,G__22156));
});
/**
* Returns true if x is a transit tagged value, false otherwise.
*/
cognitect.transit.tagged_value_QMARK_ = (function tagged_value_QMARK_(x){
var G__22158 = x;
return (com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1(G__22158) : com.cognitect.transit.types.isTaggedValue.call(null,G__22158));
});
/**
* Construct a transit integer value. Returns JavaScript number if
* in the 53bit integer range, a goog.math.Long instance if above. s
* may be a string or a JavaScript number.
*/
cognitect.transit.integer = (function integer(s){
var G__22160 = s;
return (com.cognitect.transit.types.integer.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.integer.cljs$core$IFn$_invoke$arity$1(G__22160) : com.cognitect.transit.types.integer.call(null,G__22160));
});
/**
* Returns true if x is an integer value between the 53bit and 64bit
* range, false otherwise.
*/
cognitect.transit.integer_QMARK_ = (function integer_QMARK_(x){
var G__22162 = x;
return (com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1(G__22162) : com.cognitect.transit.types.isInteger.call(null,G__22162));
});
/**
* Construct a big integer from a string.
*/
cognitect.transit.bigint = (function bigint(s){
var G__22164 = s;
return (com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1(G__22164) : com.cognitect.transit.types.bigInteger.call(null,G__22164));
});
/**
* Returns true if x is a transit big integer value, false otherwise.
*/
cognitect.transit.bigint_QMARK_ = (function bigint_QMARK_(x){
var G__22166 = x;
return (com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1(G__22166) : com.cognitect.transit.types.isBigInteger.call(null,G__22166));
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigdec = (function bigdec(s){
var G__22168 = s;
return (com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1(G__22168) : com.cognitect.transit.types.bigDecimalValue.call(null,G__22168));
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigdec_QMARK_ = (function bigdec_QMARK_(x){
var G__22170 = x;
return (com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1(G__22170) : com.cognitect.transit.types.isBigDecimal.call(null,G__22170));
});
/**
* Construct a URI from a string.
*/
cognitect.transit.uri = (function uri(s){
var G__22172 = s;
return (com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1(G__22172) : com.cognitect.transit.types.uri.call(null,G__22172));
});
/**
* Returns true if x is a transit URI value, false otherwise.
*/
cognitect.transit.uri_QMARK_ = (function uri_QMARK_(x){
var G__22174 = x;
return (com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1(G__22174) : com.cognitect.transit.types.isURI.call(null,G__22174));
});
/**
* Construct a UUID from a string.
*/
cognitect.transit.uuid = (function uuid(s){
var G__22176 = s;
return (com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1(G__22176) : com.cognitect.transit.types.uuid.call(null,G__22176));
});
/**
* Returns true if x is a transit UUID value, false otherwise.
*/
cognitect.transit.uuid_QMARK_ = (function uuid_QMARK_(x){
var G__22178 = x;
return (com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1(G__22178) : com.cognitect.transit.types.isUUID.call(null,G__22178));
});
/**
* Construct a transit binary value. s should be base64 encoded
* string.
*/
cognitect.transit.binary = (function binary(s){
var G__22180 = s;
return (com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1(G__22180) : com.cognitect.transit.types.binary.call(null,G__22180));
});
/**
* Returns true if x is a transit binary value, false otherwise.
*/
cognitect.transit.binary_QMARK_ = (function binary_QMARK_(x){
var G__22182 = x;
return (com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1(G__22182) : com.cognitect.transit.types.isBinary.call(null,G__22182));
});
/**
* Construct a quoted transit value. x should be a transit
* encodeable value.
*/
cognitect.transit.quoted = (function quoted(x){
var G__22184 = x;
return (com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1(G__22184) : com.cognitect.transit.types.quoted.call(null,G__22184));
});
/**
* Returns true if x is a transit quoted value, false otherwise.
*/
cognitect.transit.quoted_QMARK_ = (function quoted_QMARK_(x){
var G__22186 = x;
return (com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1(G__22186) : com.cognitect.transit.types.isQuoted.call(null,G__22186));
});
/**
* Construct a transit link value. x should be an IMap instance
* containing at a minimum the following keys: :href, :rel. It
* may optionall include :name, :render, and :prompt. :href must
* be a transit URI, all other values are strings, and :render must
* be either :image or :link.
*/
cognitect.transit.link = (function link(x){
var G__22188 = x;
return (com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1(G__22188) : com.cognitect.transit.types.link.call(null,G__22188));
});
/**
* Returns true if x a transit link value, false if otherwise.
*/
cognitect.transit.link_QMARK_ = (function link_QMARK_(x){
var G__22190 = x;
return (com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1(G__22190) : com.cognitect.transit.types.isLink.call(null,G__22190));
});
