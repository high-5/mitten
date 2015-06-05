// Compiled by ClojureScript 0.0-2850 {:elide-asserts true, :static-fns true}
goog.provide('markdown.core');
goog.require('cljs.core');
goog.require('markdown.transformers');
markdown.core.init_transformer = (function init_transformer(p__21230){
var map__21238 = p__21230;
var map__21238__$1 = ((cljs.core.seq_QMARK_(map__21238))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21238):map__21238);
var custom_transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21238__$1,cljs.core.constant$keyword$80);
var replacement_transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21238__$1,cljs.core.constant$keyword$81);
return ((function (map__21238,map__21238__$1,custom_transformers,replacement_transformers){
return (function (html,line,next_line,state){
var _STAR_next_line_STAR_21239 = markdown.transformers._STAR_next_line_STAR_;
markdown.transformers._STAR_next_line_STAR_ = next_line;

try{var vec__21240 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (_STAR_next_line_STAR_21239,map__21238,map__21238__$1,custom_transformers,replacement_transformers){
return (function (p__21241,transformer){
var vec__21242 = p__21241;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21242,(0),null);
var state__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21242,(1),null);
var G__21243 = text;
var G__21244 = state__$1;
return (transformer.cljs$core$IFn$_invoke$arity$2 ? transformer.cljs$core$IFn$_invoke$arity$2(G__21243,G__21244) : transformer.call(null,G__21243,G__21244));
});})(_STAR_next_line_STAR_21239,map__21238,map__21238__$1,custom_transformers,replacement_transformers))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__3774__auto__ = replacement_transformers;
if(cljs.core.truth_(or__3774__auto__)){
return or__3774__auto__;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21240,(0),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21240,(1),null);
html.append(text);

return new_state;
}finally {markdown.transformers._STAR_next_line_STAR_ = _STAR_next_line_STAR_21239;
}});
;})(map__21238,map__21238__$1,custom_transformers,replacement_transformers))
});
/**
* Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
* @param {...*} var_args
*/
markdown.core.format = (function() { 
var format__delegate = function (fmt,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args);
};
var format = function (fmt,var_args){
var args = null;
if (arguments.length > 1) {
var G__21245__i = 0, G__21245__a = new Array(arguments.length -  1);
while (G__21245__i < G__21245__a.length) {G__21245__a[G__21245__i] = arguments[G__21245__i + 1]; ++G__21245__i;}
  args = new cljs.core.IndexedSeq(G__21245__a,0);
} 
return format__delegate.call(this,fmt,args);};
format.cljs$lang$maxFixedArity = 1;
format.cljs$lang$applyTo = (function (arglist__21246){
var fmt = cljs.core.first(arglist__21246);
var args = cljs.core.rest(arglist__21246);
return format__delegate(fmt,args);
});
format.cljs$core$IFn$_invoke$arity$variadic = format__delegate;
return format;
})()
;
markdown.core.parse_references = (function parse_references(lines){
var references = (function (){var G__21253 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21253) : cljs.core.atom.call(null,G__21253));
})();
var seq__21254_21259 = cljs.core.seq(lines);
var chunk__21255_21260 = null;
var count__21256_21261 = (0);
var i__21257_21262 = (0);
while(true){
if((i__21257_21262 < count__21256_21261)){
var line_21263 = chunk__21255_21260.cljs$core$IIndexed$_nth$arity$2(null,i__21257_21262);
markdown.transformers.parse_reference_link(line_21263,references);

var G__21264 = seq__21254_21259;
var G__21265 = chunk__21255_21260;
var G__21266 = count__21256_21261;
var G__21267 = (i__21257_21262 + (1));
seq__21254_21259 = G__21264;
chunk__21255_21260 = G__21265;
count__21256_21261 = G__21266;
i__21257_21262 = G__21267;
continue;
} else {
var temp__4126__auto___21268 = cljs.core.seq(seq__21254_21259);
if(temp__4126__auto___21268){
var seq__21254_21269__$1 = temp__4126__auto___21268;
if(cljs.core.chunked_seq_QMARK_(seq__21254_21269__$1)){
var c__4561__auto___21270 = cljs.core.chunk_first(seq__21254_21269__$1);
var G__21271 = cljs.core.chunk_rest(seq__21254_21269__$1);
var G__21272 = c__4561__auto___21270;
var G__21273 = cljs.core.count(c__4561__auto___21270);
var G__21274 = (0);
seq__21254_21259 = G__21271;
chunk__21255_21260 = G__21272;
count__21256_21261 = G__21273;
i__21257_21262 = G__21274;
continue;
} else {
var line_21275 = cljs.core.first(seq__21254_21269__$1);
markdown.transformers.parse_reference_link(line_21275,references);

var G__21276 = cljs.core.next(seq__21254_21269__$1);
var G__21277 = null;
var G__21278 = (0);
var G__21279 = (0);
seq__21254_21259 = G__21276;
chunk__21255_21260 = G__21277;
count__21256_21261 = G__21278;
i__21257_21262 = G__21279;
continue;
}
} else {
}
}
break;
}

var G__21258 = references;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21258) : cljs.core.deref.call(null,G__21258));
});
/**
* processes input text line by line and outputs an HTML string
* @param {...*} var_args
*/
markdown.core.md__GT_html = (function() { 
var md__GT_html__delegate = function (text,params){
var _STAR_substring_STAR_21298 = markdown.transformers._STAR_substring_STAR_;
var formatter21299 = markdown.transformers.formatter;
markdown.transformers._STAR_substring_STAR_ = ((function (_STAR_substring_STAR_21298,formatter21299){
return (function (s,n){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,s));
});})(_STAR_substring_STAR_21298,formatter21299))
;

markdown.transformers.formatter = markdown.core.format;

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = text.split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(cljs.core.constant$keyword$82.cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references(lines):null);
var transformer = markdown.core.init_transformer(params__$1);
var G__21301_21316 = lines;
var vec__21302_21317 = G__21301_21316;
var line_21318 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21302_21317,(0),null);
var more_21319 = cljs.core.nthnext(vec__21302_21317,(1));
var state_21320 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$70,true,cljs.core.constant$keyword$76,references,cljs.core.constant$keyword$71,true], null),params__$1], 0));
var G__21301_21321__$1 = G__21301_21316;
var state_21322__$1 = state_21320;
while(true){
var vec__21303_21323 = G__21301_21321__$1;
var line_21324__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21303_21323,(0),null);
var more_21325__$1 = cljs.core.nthnext(vec__21303_21323,(1));
var state_21326__$2 = state_21322__$1;
var state_21327__$3 = (cljs.core.truth_(cljs.core.constant$keyword$79.cljs$core$IFn$_invoke$arity$1(state_21326__$2))?(function (){var G__21304 = html;
var G__21305 = cljs.core.constant$keyword$79.cljs$core$IFn$_invoke$arity$1(state_21326__$2);
var G__21306 = cljs.core.first(more_21325__$1);
var G__21307 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state_21326__$2,cljs.core.constant$keyword$79,cljs.core.array_seq([cljs.core.constant$keyword$69], 0)),cljs.core.constant$keyword$71,true);
return (transformer.cljs$core$IFn$_invoke$arity$4 ? transformer.cljs$core$IFn$_invoke$arity$4(G__21304,G__21305,G__21306,G__21307) : transformer.call(null,G__21304,G__21305,G__21306,G__21307));
})():state_21326__$2);
if(cljs.core.truth_(cljs.core.first(more_21325__$1))){
var G__21328 = more_21325__$1;
var G__21329 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__21308 = html;
var G__21309 = line_21324__$1;
var G__21310 = cljs.core.first(more_21325__$1);
var G__21311 = state_21327__$3;
return (transformer.cljs$core$IFn$_invoke$arity$4 ? transformer.cljs$core$IFn$_invoke$arity$4(G__21308,G__21309,G__21310,G__21311) : transformer.call(null,G__21308,G__21309,G__21310,G__21311));
})(),cljs.core.constant$keyword$71,cljs.core.empty_QMARK_(line_21324__$1));
G__21301_21321__$1 = G__21328;
state_21322__$1 = G__21329;
continue;
} else {
var G__21312_21330 = html;
var G__21313_21331 = line_21324__$1;
var G__21314_21332 = "";
var G__21315_21333 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state_21327__$3,cljs.core.constant$keyword$74,true);
(transformer.cljs$core$IFn$_invoke$arity$4 ? transformer.cljs$core$IFn$_invoke$arity$4(G__21312_21330,G__21313_21331,G__21314_21332,G__21315_21333) : transformer.call(null,G__21312_21330,G__21313_21331,G__21314_21332,G__21315_21333));
}
break;
}

return html.toString();
}finally {markdown.transformers.formatter = formatter21299;

markdown.transformers._STAR_substring_STAR_ = _STAR_substring_STAR_21298;
}};
var md__GT_html = function (text,var_args){
var params = null;
if (arguments.length > 1) {
var G__21334__i = 0, G__21334__a = new Array(arguments.length -  1);
while (G__21334__i < G__21334__a.length) {G__21334__a[G__21334__i] = arguments[G__21334__i + 1]; ++G__21334__i;}
  params = new cljs.core.IndexedSeq(G__21334__a,0);
} 
return md__GT_html__delegate.call(this,text,params);};
md__GT_html.cljs$lang$maxFixedArity = 1;
md__GT_html.cljs$lang$applyTo = (function (arglist__21335){
var text = cljs.core.first(arglist__21335);
var params = cljs.core.rest(arglist__21335);
return md__GT_html__delegate(text,params);
});
md__GT_html.cljs$core$IFn$_invoke$arity$variadic = md__GT_html__delegate;
return md__GT_html;
})()
;
/**
* Js accessible wrapper
* @param {...*} var_args
*/
markdown.core.mdToHtml = (function() { 
var mdToHtml__delegate = function (params){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(markdown.core.md__GT_html,params);
};
var mdToHtml = function (var_args){
var params = null;
if (arguments.length > 0) {
var G__21336__i = 0, G__21336__a = new Array(arguments.length -  0);
while (G__21336__i < G__21336__a.length) {G__21336__a[G__21336__i] = arguments[G__21336__i + 0]; ++G__21336__i;}
  params = new cljs.core.IndexedSeq(G__21336__a,0);
} 
return mdToHtml__delegate.call(this,params);};
mdToHtml.cljs$lang$maxFixedArity = 0;
mdToHtml.cljs$lang$applyTo = (function (arglist__21337){
var params = cljs.core.seq(arglist__21337);
return mdToHtml__delegate(params);
});
mdToHtml.cljs$core$IFn$_invoke$arity$variadic = mdToHtml__delegate;
return mdToHtml;
})()
;
goog.exportSymbol('markdown.core.mdToHtml', markdown.core.mdToHtml);
