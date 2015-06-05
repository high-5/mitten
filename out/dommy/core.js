// Compiled by ClojureScript 0.0-2850 {:elide-asserts true, :static-fns true}
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('dommy.utils');
goog.require('clojure.string');
/**
* Returns a selector in string format.
* Accepts string, keyword, or collection.
*/
dommy.core.selector = (function selector(data){
if(cljs.core.coll_QMARK_(data)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(selector,data));
} else {
if((typeof data === 'string') || ((data instanceof cljs.core.Keyword))){
return cljs.core.name(data);
} else {
return null;
}
}
});
dommy.core.text = (function text(elem){
var or__3774__auto__ = elem.textContent;
if(cljs.core.truth_(or__3774__auto__)){
return or__3774__auto__;
} else {
return elem.innerText;
}
});
dommy.core.html = (function html(elem){
return elem.innerHTML;
});
dommy.core.value = (function value(elem){
return elem.value;
});
dommy.core.class$ = (function class$(elem){
return elem.className;
});
dommy.core.attr = (function attr(elem,k){
if(cljs.core.truth_(k)){
return elem.getAttribute(dommy.utils.as_str(k));
} else {
return null;
}
});
/**
* The computed style of `elem`, optionally specifying the key of
* a particular style to return
*/
dommy.core.style = (function() {
var style = null;
var style__1 = (function (elem){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(window.getComputedStyle(elem));
});
var style__2 = (function (elem,k){
return (window.getComputedStyle(elem)[dommy.utils.as_str(k)]);
});
style = function(elem,k){
switch(arguments.length){
case 1:
return style__1.call(this,elem);
case 2:
return style__2.call(this,elem,k);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
style.cljs$core$IFn$_invoke$arity$1 = style__1;
style.cljs$core$IFn$_invoke$arity$2 = style__2;
return style;
})()
;
dommy.core.px = (function px(elem,k){

var pixels = dommy.core.style.cljs$core$IFn$_invoke$arity$2(elem,k);
if(cljs.core.seq(pixels)){
var G__19205 = pixels;
return parseInt(G__19205);
} else {
return null;
}
});
/**
* Does `elem` contain `c` in its class list
*/
dommy.core.has_class_QMARK_ = (function has_class_QMARK_(elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__4124__auto__ = elem.classList;
if(cljs.core.truth_(temp__4124__auto__)){
var class_list = temp__4124__auto__;
return class_list.contains(c__$1);
} else {
var temp__4126__auto__ = dommy.core.class$(elem);
if(cljs.core.truth_(temp__4126__auto__)){
var class_name = temp__4126__auto__;
var temp__4126__auto____$1 = dommy.utils.class_index(class_name,c__$1);
if(cljs.core.truth_(temp__4126__auto____$1)){
var i = temp__4126__auto____$1;
return (i >= (0));
} else {
return null;
}
} else {
return null;
}
}
});
/**
* Is `elem` hidden (as associated with hide!/show!/toggle!, using display: none)
*/
dommy.core.hidden_QMARK_ = (function hidden_QMARK_(elem){
return (dommy.core.style.cljs$core$IFn$_invoke$arity$2(elem,cljs.core.constant$keyword$125) === "none");
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.core.bounding_client_rect = (function bounding_client_rect(elem){
var r = elem.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$126,r.top,cljs.core.constant$keyword$127,r.bottom,cljs.core.constant$keyword$128,r.left,cljs.core.constant$keyword$129,r.right,cljs.core.constant$keyword$130,r.width,cljs.core.constant$keyword$131,r.height], null);
});
dommy.core.parent = (function parent(elem){
return elem.parentNode;
});
dommy.core.children = (function children(elem){
return elem.children;
});
/**
* Lazy seq of the ancestors of `elem`
*/
dommy.core.ancestors = (function ancestors(elem){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.iterate(dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
* Returns a predicate on nodes that match `selector` at the
* time of this `matches-pred` call (may return outdated results
* if you fuck with the DOM)
*/
dommy.core.matches_pred = (function() {
var matches_pred = null;
var matches_pred__1 = (function (selector){
return matches_pred.cljs$core$IFn$_invoke$arity$2(document,selector);
});
var matches_pred__2 = (function (base,selector){
var matches = dommy.utils.__GT_Array(base.querySelectorAll(dommy.core.selector(selector)));
return ((function (matches){
return (function (elem){
return (matches.indexOf(elem) >= (0));
});
;})(matches))
});
matches_pred = function(base,selector){
switch(arguments.length){
case 1:
return matches_pred__1.call(this,base);
case 2:
return matches_pred__2.call(this,base,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
matches_pred.cljs$core$IFn$_invoke$arity$1 = matches_pred__1;
matches_pred.cljs$core$IFn$_invoke$arity$2 = matches_pred__2;
return matches_pred;
})()
;
/**
* Closest ancestor of `elem` (up to `base`, if provided)
* that matches `selector`
*/
dommy.core.closest = (function() {
var closest = null;
var closest__2 = (function (elem,selector){
return closest.cljs$core$IFn$_invoke$arity$3(document.body,elem,selector);
});
var closest__3 = (function (base,elem,selector){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__19208_SHARP_){
return !((p1__19208_SHARP_ === base));
}),dommy.core.ancestors(elem))));
});
closest = function(base,elem,selector){
switch(arguments.length){
case 2:
return closest__2.call(this,base,elem);
case 3:
return closest__3.call(this,base,elem,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
closest.cljs$core$IFn$_invoke$arity$2 = closest__2;
closest.cljs$core$IFn$_invoke$arity$3 = closest__3;
return closest;
})()
;
/**
* Is `descendant` a descendant of `ancestor`?
* (http://goo.gl/T8pgCX)
*/
dommy.core.descendant_QMARK_ = (function descendant_QMARK_(descendant,ancestor){
if(cljs.core.truth_(ancestor.contains)){
return ancestor.contains(descendant);
} else {
if(cljs.core.truth_(ancestor.compareDocumentPosition)){
return ((ancestor.compareDocumentPosition(descendant) & (1 << (4))) != 0);
} else {
return null;
}
}
});
/**
* Set the textContent of `elem` to `text`, fall back to innerText
*/
dommy.core.set_text_BANG_ = (function set_text_BANG_(elem,text){
if(!((void 0 === elem.textContent))){
elem.textContent = text;
} else {
elem.innerText = text;
}

return elem;
});
/**
* Set the innerHTML of `elem` to `html`
*/
dommy.core.set_html_BANG_ = (function set_html_BANG_(elem,html){
elem.innerHTML = html;

return elem;
});
/**
* Set the value of `elem` to `value`
*/
dommy.core.set_value_BANG_ = (function set_value_BANG_(elem,value){
elem.value = value;

return elem;
});
/**
* Set the css class of `elem` to `elem`
*/
dommy.core.set_class_BANG_ = (function set_class_BANG_(elem,c){
return elem.className = c;
});
/**
* Set the style of `elem` using key-value pairs:
* 
* (set-style! elem :display "block" :color "red")
* @param {...*} var_args
*/
dommy.core.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (elem,kvs){

var style = elem.style;
var seq__19218_19224 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__19219_19225 = null;
var count__19220_19226 = (0);
var i__19221_19227 = (0);
while(true){
if((i__19221_19227 < count__19220_19226)){
var vec__19222_19228 = chunk__19219_19225.cljs$core$IIndexed$_nth$arity$2(null,i__19221_19227);
var k_19229 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19222_19228,(0),null);
var v_19230 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19222_19228,(1),null);
style.setProperty(dommy.utils.as_str(k_19229),v_19230);

var G__19231 = seq__19218_19224;
var G__19232 = chunk__19219_19225;
var G__19233 = count__19220_19226;
var G__19234 = (i__19221_19227 + (1));
seq__19218_19224 = G__19231;
chunk__19219_19225 = G__19232;
count__19220_19226 = G__19233;
i__19221_19227 = G__19234;
continue;
} else {
var temp__4126__auto___19235 = cljs.core.seq(seq__19218_19224);
if(temp__4126__auto___19235){
var seq__19218_19236__$1 = temp__4126__auto___19235;
if(cljs.core.chunked_seq_QMARK_(seq__19218_19236__$1)){
var c__4561__auto___19237 = cljs.core.chunk_first(seq__19218_19236__$1);
var G__19238 = cljs.core.chunk_rest(seq__19218_19236__$1);
var G__19239 = c__4561__auto___19237;
var G__19240 = cljs.core.count(c__4561__auto___19237);
var G__19241 = (0);
seq__19218_19224 = G__19238;
chunk__19219_19225 = G__19239;
count__19220_19226 = G__19240;
i__19221_19227 = G__19241;
continue;
} else {
var vec__19223_19242 = cljs.core.first(seq__19218_19236__$1);
var k_19243 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19223_19242,(0),null);
var v_19244 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19223_19242,(1),null);
style.setProperty(dommy.utils.as_str(k_19243),v_19244);

var G__19245 = cljs.core.next(seq__19218_19236__$1);
var G__19246 = null;
var G__19247 = (0);
var G__19248 = (0);
seq__19218_19224 = G__19245;
chunk__19219_19225 = G__19246;
count__19220_19226 = G__19247;
i__19221_19227 = G__19248;
continue;
}
} else {
}
}
break;
}

return elem;
};
var set_style_BANG_ = function (elem,var_args){
var kvs = null;
if (arguments.length > 1) {
var G__19249__i = 0, G__19249__a = new Array(arguments.length -  1);
while (G__19249__i < G__19249__a.length) {G__19249__a[G__19249__i] = arguments[G__19249__i + 1]; ++G__19249__i;}
  kvs = new cljs.core.IndexedSeq(G__19249__a,0);
} 
return set_style_BANG___delegate.call(this,elem,kvs);};
set_style_BANG_.cljs$lang$maxFixedArity = 1;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__19250){
var elem = cljs.core.first(arglist__19250);
var kvs = cljs.core.rest(arglist__19250);
return set_style_BANG___delegate(elem,kvs);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* Remove the style of `elem` using keywords:
* 
* (remove-style! elem :display :color)
* @param {...*} var_args
*/
dommy.core.remove_style_BANG_ = (function() { 
var remove_style_BANG___delegate = function (elem,keywords){
var style = elem.style;
var seq__19255_19259 = cljs.core.seq(keywords);
var chunk__19256_19260 = null;
var count__19257_19261 = (0);
var i__19258_19262 = (0);
while(true){
if((i__19258_19262 < count__19257_19261)){
var kw_19263 = chunk__19256_19260.cljs$core$IIndexed$_nth$arity$2(null,i__19258_19262);
style.removeProperty(dommy.utils.as_str(kw_19263));

var G__19264 = seq__19255_19259;
var G__19265 = chunk__19256_19260;
var G__19266 = count__19257_19261;
var G__19267 = (i__19258_19262 + (1));
seq__19255_19259 = G__19264;
chunk__19256_19260 = G__19265;
count__19257_19261 = G__19266;
i__19258_19262 = G__19267;
continue;
} else {
var temp__4126__auto___19268 = cljs.core.seq(seq__19255_19259);
if(temp__4126__auto___19268){
var seq__19255_19269__$1 = temp__4126__auto___19268;
if(cljs.core.chunked_seq_QMARK_(seq__19255_19269__$1)){
var c__4561__auto___19270 = cljs.core.chunk_first(seq__19255_19269__$1);
var G__19271 = cljs.core.chunk_rest(seq__19255_19269__$1);
var G__19272 = c__4561__auto___19270;
var G__19273 = cljs.core.count(c__4561__auto___19270);
var G__19274 = (0);
seq__19255_19259 = G__19271;
chunk__19256_19260 = G__19272;
count__19257_19261 = G__19273;
i__19258_19262 = G__19274;
continue;
} else {
var kw_19275 = cljs.core.first(seq__19255_19269__$1);
style.removeProperty(dommy.utils.as_str(kw_19275));

var G__19276 = cljs.core.next(seq__19255_19269__$1);
var G__19277 = null;
var G__19278 = (0);
var G__19279 = (0);
seq__19255_19259 = G__19276;
chunk__19256_19260 = G__19277;
count__19257_19261 = G__19278;
i__19258_19262 = G__19279;
continue;
}
} else {
}
}
break;
}

return elem;
};
var remove_style_BANG_ = function (elem,var_args){
var keywords = null;
if (arguments.length > 1) {
var G__19280__i = 0, G__19280__a = new Array(arguments.length -  1);
while (G__19280__i < G__19280__a.length) {G__19280__a[G__19280__i] = arguments[G__19280__i + 1]; ++G__19280__i;}
  keywords = new cljs.core.IndexedSeq(G__19280__a,0);
} 
return remove_style_BANG___delegate.call(this,elem,keywords);};
remove_style_BANG_.cljs$lang$maxFixedArity = 1;
remove_style_BANG_.cljs$lang$applyTo = (function (arglist__19281){
var elem = cljs.core.first(arglist__19281);
var keywords = cljs.core.rest(arglist__19281);
return remove_style_BANG___delegate(elem,keywords);
});
remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_style_BANG___delegate;
return remove_style_BANG_;
})()
;
/**
* @param {...*} var_args
*/
dommy.core.set_px_BANG_ = (function() { 
var set_px_BANG___delegate = function (elem,kvs){


var seq__19288_19294 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__19289_19295 = null;
var count__19290_19296 = (0);
var i__19291_19297 = (0);
while(true){
if((i__19291_19297 < count__19290_19296)){
var vec__19292_19298 = chunk__19289_19295.cljs$core$IIndexed$_nth$arity$2(null,i__19291_19297);
var k_19299 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19292_19298,(0),null);
var v_19300 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19292_19298,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.array_seq([k_19299,[cljs.core.str(v_19300),cljs.core.str("px")].join('')], 0));

var G__19301 = seq__19288_19294;
var G__19302 = chunk__19289_19295;
var G__19303 = count__19290_19296;
var G__19304 = (i__19291_19297 + (1));
seq__19288_19294 = G__19301;
chunk__19289_19295 = G__19302;
count__19290_19296 = G__19303;
i__19291_19297 = G__19304;
continue;
} else {
var temp__4126__auto___19305 = cljs.core.seq(seq__19288_19294);
if(temp__4126__auto___19305){
var seq__19288_19306__$1 = temp__4126__auto___19305;
if(cljs.core.chunked_seq_QMARK_(seq__19288_19306__$1)){
var c__4561__auto___19307 = cljs.core.chunk_first(seq__19288_19306__$1);
var G__19308 = cljs.core.chunk_rest(seq__19288_19306__$1);
var G__19309 = c__4561__auto___19307;
var G__19310 = cljs.core.count(c__4561__auto___19307);
var G__19311 = (0);
seq__19288_19294 = G__19308;
chunk__19289_19295 = G__19309;
count__19290_19296 = G__19310;
i__19291_19297 = G__19311;
continue;
} else {
var vec__19293_19312 = cljs.core.first(seq__19288_19306__$1);
var k_19313 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19293_19312,(0),null);
var v_19314 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19293_19312,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.array_seq([k_19313,[cljs.core.str(v_19314),cljs.core.str("px")].join('')], 0));

var G__19315 = cljs.core.next(seq__19288_19306__$1);
var G__19316 = null;
var G__19317 = (0);
var G__19318 = (0);
seq__19288_19294 = G__19315;
chunk__19289_19295 = G__19316;
count__19290_19296 = G__19317;
i__19291_19297 = G__19318;
continue;
}
} else {
}
}
break;
}

return elem;
};
var set_px_BANG_ = function (elem,var_args){
var kvs = null;
if (arguments.length > 1) {
var G__19319__i = 0, G__19319__a = new Array(arguments.length -  1);
while (G__19319__i < G__19319__a.length) {G__19319__a[G__19319__i] = arguments[G__19319__i + 1]; ++G__19319__i;}
  kvs = new cljs.core.IndexedSeq(G__19319__a,0);
} 
return set_px_BANG___delegate.call(this,elem,kvs);};
set_px_BANG_.cljs$lang$maxFixedArity = 1;
set_px_BANG_.cljs$lang$applyTo = (function (arglist__19320){
var elem = cljs.core.first(arglist__19320);
var kvs = cljs.core.rest(arglist__19320);
return set_px_BANG___delegate(elem,kvs);
});
set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_px_BANG___delegate;
return set_px_BANG_;
})()
;
/**
* Sets dom attributes on and returns `elem`.
* Attributes without values will be set to their name:
* 
* (set-attr! elem :disabled)
* 
* With values, the function takes variadic kv pairs:
* 
* (set-attr! elem :id "some-id"
* :name "some-name")
* @param {...*} var_args
*/
dommy.core.set_attr_BANG_ = (function() {
var set_attr_BANG_ = null;
var set_attr_BANG___2 = (function (elem,k){
return set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,dommy.utils.as_str(k));
});
var set_attr_BANG___3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_(v)){
var G__19338 = elem;
(G__19338[k__$1] = v);

return G__19338;
} else {
var G__19339 = elem;
G__19339.setAttribute(k__$1,v);

return G__19339;
}
} else {
return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__19346__delegate = function (elem,k,v,kvs){

var seq__19340_19347 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__19341_19348 = null;
var count__19342_19349 = (0);
var i__19343_19350 = (0);
while(true){
if((i__19343_19350 < count__19342_19349)){
var vec__19344_19351 = chunk__19341_19348.cljs$core$IIndexed$_nth$arity$2(null,i__19343_19350);
var k_19352__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19344_19351,(0),null);
var v_19353__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19344_19351,(1),null);
set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_19352__$1,v_19353__$1);

var G__19354 = seq__19340_19347;
var G__19355 = chunk__19341_19348;
var G__19356 = count__19342_19349;
var G__19357 = (i__19343_19350 + (1));
seq__19340_19347 = G__19354;
chunk__19341_19348 = G__19355;
count__19342_19349 = G__19356;
i__19343_19350 = G__19357;
continue;
} else {
var temp__4126__auto___19358 = cljs.core.seq(seq__19340_19347);
if(temp__4126__auto___19358){
var seq__19340_19359__$1 = temp__4126__auto___19358;
if(cljs.core.chunked_seq_QMARK_(seq__19340_19359__$1)){
var c__4561__auto___19360 = cljs.core.chunk_first(seq__19340_19359__$1);
var G__19361 = cljs.core.chunk_rest(seq__19340_19359__$1);
var G__19362 = c__4561__auto___19360;
var G__19363 = cljs.core.count(c__4561__auto___19360);
var G__19364 = (0);
seq__19340_19347 = G__19361;
chunk__19341_19348 = G__19362;
count__19342_19349 = G__19363;
i__19343_19350 = G__19364;
continue;
} else {
var vec__19345_19365 = cljs.core.first(seq__19340_19359__$1);
var k_19366__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19345_19365,(0),null);
var v_19367__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19345_19365,(1),null);
set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_19366__$1,v_19367__$1);

var G__19368 = cljs.core.next(seq__19340_19359__$1);
var G__19369 = null;
var G__19370 = (0);
var G__19371 = (0);
seq__19340_19347 = G__19368;
chunk__19341_19348 = G__19369;
count__19342_19349 = G__19370;
i__19343_19350 = G__19371;
continue;
}
} else {
}
}
break;
}

return elem;
};
var G__19346 = function (elem,k,v,var_args){
var kvs = null;
if (arguments.length > 3) {
var G__19372__i = 0, G__19372__a = new Array(arguments.length -  3);
while (G__19372__i < G__19372__a.length) {G__19372__a[G__19372__i] = arguments[G__19372__i + 3]; ++G__19372__i;}
  kvs = new cljs.core.IndexedSeq(G__19372__a,0);
} 
return G__19346__delegate.call(this,elem,k,v,kvs);};
G__19346.cljs$lang$maxFixedArity = 3;
G__19346.cljs$lang$applyTo = (function (arglist__19373){
var elem = cljs.core.first(arglist__19373);
arglist__19373 = cljs.core.next(arglist__19373);
var k = cljs.core.first(arglist__19373);
arglist__19373 = cljs.core.next(arglist__19373);
var v = cljs.core.first(arglist__19373);
var kvs = cljs.core.rest(arglist__19373);
return G__19346__delegate(elem,k,v,kvs);
});
G__19346.cljs$core$IFn$_invoke$arity$variadic = G__19346__delegate;
return G__19346;
})()
;
set_attr_BANG_ = function(elem,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 2:
return set_attr_BANG___2.call(this,elem,k);
case 3:
return set_attr_BANG___3.call(this,elem,k,v);
default:
var G__19374 = null;
if (arguments.length > 3) {
var G__19375__i = 0, G__19375__a = new Array(arguments.length -  3);
while (G__19375__i < G__19375__a.length) {G__19375__a[G__19375__i] = arguments[G__19375__i + 3]; ++G__19375__i;}
G__19374 = new cljs.core.IndexedSeq(G__19375__a,0);
}
return set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic(elem,k,v, G__19374);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_attr_BANG_.cljs$lang$maxFixedArity = 3;
set_attr_BANG_.cljs$lang$applyTo = set_attr_BANG___4.cljs$lang$applyTo;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = set_attr_BANG___2;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = set_attr_BANG___3;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic;
return set_attr_BANG_;
})()
;
/**
* Removes dom attributes on and returns `elem`.
* `class` and `classes` are special cases which clear
* out the class name on removal.
* @param {...*} var_args
*/
dommy.core.remove_attr_BANG_ = (function() {
var remove_attr_BANG_ = null;
var remove_attr_BANG___2 = (function (elem,k){
var k_19388__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_19388__$1))){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_19388__$1);
}

return elem;
});
var remove_attr_BANG___3 = (function() { 
var G__19389__delegate = function (elem,k,ks){
var seq__19384_19390 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__19385_19391 = null;
var count__19386_19392 = (0);
var i__19387_19393 = (0);
while(true){
if((i__19387_19393 < count__19386_19392)){
var k_19394__$1 = chunk__19385_19391.cljs$core$IIndexed$_nth$arity$2(null,i__19387_19393);
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_19394__$1);

var G__19395 = seq__19384_19390;
var G__19396 = chunk__19385_19391;
var G__19397 = count__19386_19392;
var G__19398 = (i__19387_19393 + (1));
seq__19384_19390 = G__19395;
chunk__19385_19391 = G__19396;
count__19386_19392 = G__19397;
i__19387_19393 = G__19398;
continue;
} else {
var temp__4126__auto___19399 = cljs.core.seq(seq__19384_19390);
if(temp__4126__auto___19399){
var seq__19384_19400__$1 = temp__4126__auto___19399;
if(cljs.core.chunked_seq_QMARK_(seq__19384_19400__$1)){
var c__4561__auto___19401 = cljs.core.chunk_first(seq__19384_19400__$1);
var G__19402 = cljs.core.chunk_rest(seq__19384_19400__$1);
var G__19403 = c__4561__auto___19401;
var G__19404 = cljs.core.count(c__4561__auto___19401);
var G__19405 = (0);
seq__19384_19390 = G__19402;
chunk__19385_19391 = G__19403;
count__19386_19392 = G__19404;
i__19387_19393 = G__19405;
continue;
} else {
var k_19406__$1 = cljs.core.first(seq__19384_19400__$1);
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_19406__$1);

var G__19407 = cljs.core.next(seq__19384_19400__$1);
var G__19408 = null;
var G__19409 = (0);
var G__19410 = (0);
seq__19384_19390 = G__19407;
chunk__19385_19391 = G__19408;
count__19386_19392 = G__19409;
i__19387_19393 = G__19410;
continue;
}
} else {
}
}
break;
}

return elem;
};
var G__19389 = function (elem,k,var_args){
var ks = null;
if (arguments.length > 2) {
var G__19411__i = 0, G__19411__a = new Array(arguments.length -  2);
while (G__19411__i < G__19411__a.length) {G__19411__a[G__19411__i] = arguments[G__19411__i + 2]; ++G__19411__i;}
  ks = new cljs.core.IndexedSeq(G__19411__a,0);
} 
return G__19389__delegate.call(this,elem,k,ks);};
G__19389.cljs$lang$maxFixedArity = 2;
G__19389.cljs$lang$applyTo = (function (arglist__19412){
var elem = cljs.core.first(arglist__19412);
arglist__19412 = cljs.core.next(arglist__19412);
var k = cljs.core.first(arglist__19412);
var ks = cljs.core.rest(arglist__19412);
return G__19389__delegate(elem,k,ks);
});
G__19389.cljs$core$IFn$_invoke$arity$variadic = G__19389__delegate;
return G__19389;
})()
;
remove_attr_BANG_ = function(elem,k,var_args){
var ks = var_args;
switch(arguments.length){
case 2:
return remove_attr_BANG___2.call(this,elem,k);
default:
var G__19413 = null;
if (arguments.length > 2) {
var G__19414__i = 0, G__19414__a = new Array(arguments.length -  2);
while (G__19414__i < G__19414__a.length) {G__19414__a[G__19414__i] = arguments[G__19414__i + 2]; ++G__19414__i;}
G__19413 = new cljs.core.IndexedSeq(G__19414__a,0);
}
return remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,k, G__19413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_attr_BANG_.cljs$lang$maxFixedArity = 2;
remove_attr_BANG_.cljs$lang$applyTo = remove_attr_BANG___3.cljs$lang$applyTo;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_attr_BANG___2;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_attr_BANG_;
})()
;
/**
* Toggles a dom attribute `k` on `elem`, optionally specifying
* the boolean value with `add?`
*/
dommy.core.toggle_attr_BANG_ = (function() {
var toggle_attr_BANG_ = null;
var toggle_attr_BANG___2 = (function (elem,k){
return toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,cljs.core.boolean$(dommy.core.attr(elem,k)));
});
var toggle_attr_BANG___3 = (function (elem,k,add_QMARK_){
if(add_QMARK_){
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k);
} else {
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k);
}
});
toggle_attr_BANG_ = function(elem,k,add_QMARK_){
switch(arguments.length){
case 2:
return toggle_attr_BANG___2.call(this,elem,k);
case 3:
return toggle_attr_BANG___3.call(this,elem,k,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_attr_BANG___2;
toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = toggle_attr_BANG___3;
return toggle_attr_BANG_;
})()
;
/**
* Add `classes` to `elem`, trying to use Element::classList, and
* falling back to fast string parsing/manipulation
* @param {...*} var_args
*/
dommy.core.add_class_BANG_ = (function() {
var add_class_BANG_ = null;
var add_class_BANG___2 = (function (elem,classes){
var classes__$1 = clojure.string.trim(dommy.utils.as_str(classes)).split(/\s+/);
if(cljs.core.seq(classes__$1)){
var temp__4124__auto___19446 = elem.classList;
if(cljs.core.truth_(temp__4124__auto___19446)){
var class_list_19447 = temp__4124__auto___19446;
var seq__19434_19448 = cljs.core.seq(classes__$1);
var chunk__19435_19449 = null;
var count__19436_19450 = (0);
var i__19437_19451 = (0);
while(true){
if((i__19437_19451 < count__19436_19450)){
var c_19452 = chunk__19435_19449.cljs$core$IIndexed$_nth$arity$2(null,i__19437_19451);
class_list_19447.add(c_19452);

var G__19453 = seq__19434_19448;
var G__19454 = chunk__19435_19449;
var G__19455 = count__19436_19450;
var G__19456 = (i__19437_19451 + (1));
seq__19434_19448 = G__19453;
chunk__19435_19449 = G__19454;
count__19436_19450 = G__19455;
i__19437_19451 = G__19456;
continue;
} else {
var temp__4126__auto___19457 = cljs.core.seq(seq__19434_19448);
if(temp__4126__auto___19457){
var seq__19434_19458__$1 = temp__4126__auto___19457;
if(cljs.core.chunked_seq_QMARK_(seq__19434_19458__$1)){
var c__4561__auto___19459 = cljs.core.chunk_first(seq__19434_19458__$1);
var G__19460 = cljs.core.chunk_rest(seq__19434_19458__$1);
var G__19461 = c__4561__auto___19459;
var G__19462 = cljs.core.count(c__4561__auto___19459);
var G__19463 = (0);
seq__19434_19448 = G__19460;
chunk__19435_19449 = G__19461;
count__19436_19450 = G__19462;
i__19437_19451 = G__19463;
continue;
} else {
var c_19464 = cljs.core.first(seq__19434_19458__$1);
class_list_19447.add(c_19464);

var G__19465 = cljs.core.next(seq__19434_19458__$1);
var G__19466 = null;
var G__19467 = (0);
var G__19468 = (0);
seq__19434_19448 = G__19465;
chunk__19435_19449 = G__19466;
count__19436_19450 = G__19467;
i__19437_19451 = G__19468;
continue;
}
} else {
}
}
break;
}
} else {
var seq__19438_19469 = cljs.core.seq(classes__$1);
var chunk__19439_19470 = null;
var count__19440_19471 = (0);
var i__19441_19472 = (0);
while(true){
if((i__19441_19472 < count__19440_19471)){
var c_19473 = chunk__19439_19470.cljs$core$IIndexed$_nth$arity$2(null,i__19441_19472);
var class_name_19474 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_19474,c_19473))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_19474 === ""))?c_19473:[cljs.core.str(class_name_19474),cljs.core.str(" "),cljs.core.str(c_19473)].join('')));
}

var G__19475 = seq__19438_19469;
var G__19476 = chunk__19439_19470;
var G__19477 = count__19440_19471;
var G__19478 = (i__19441_19472 + (1));
seq__19438_19469 = G__19475;
chunk__19439_19470 = G__19476;
count__19440_19471 = G__19477;
i__19441_19472 = G__19478;
continue;
} else {
var temp__4126__auto___19479 = cljs.core.seq(seq__19438_19469);
if(temp__4126__auto___19479){
var seq__19438_19480__$1 = temp__4126__auto___19479;
if(cljs.core.chunked_seq_QMARK_(seq__19438_19480__$1)){
var c__4561__auto___19481 = cljs.core.chunk_first(seq__19438_19480__$1);
var G__19482 = cljs.core.chunk_rest(seq__19438_19480__$1);
var G__19483 = c__4561__auto___19481;
var G__19484 = cljs.core.count(c__4561__auto___19481);
var G__19485 = (0);
seq__19438_19469 = G__19482;
chunk__19439_19470 = G__19483;
count__19440_19471 = G__19484;
i__19441_19472 = G__19485;
continue;
} else {
var c_19486 = cljs.core.first(seq__19438_19480__$1);
var class_name_19487 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_19487,c_19486))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_19487 === ""))?c_19486:[cljs.core.str(class_name_19487),cljs.core.str(" "),cljs.core.str(c_19486)].join('')));
}

var G__19488 = cljs.core.next(seq__19438_19480__$1);
var G__19489 = null;
var G__19490 = (0);
var G__19491 = (0);
seq__19438_19469 = G__19488;
chunk__19439_19470 = G__19489;
count__19440_19471 = G__19490;
i__19441_19472 = G__19491;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return elem;
});
var add_class_BANG___3 = (function() { 
var G__19492__delegate = function (elem,classes,more_classes){
var seq__19442_19493 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__19443_19494 = null;
var count__19444_19495 = (0);
var i__19445_19496 = (0);
while(true){
if((i__19445_19496 < count__19444_19495)){
var c_19497 = chunk__19443_19494.cljs$core$IIndexed$_nth$arity$2(null,i__19445_19496);
add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_19497);

var G__19498 = seq__19442_19493;
var G__19499 = chunk__19443_19494;
var G__19500 = count__19444_19495;
var G__19501 = (i__19445_19496 + (1));
seq__19442_19493 = G__19498;
chunk__19443_19494 = G__19499;
count__19444_19495 = G__19500;
i__19445_19496 = G__19501;
continue;
} else {
var temp__4126__auto___19502 = cljs.core.seq(seq__19442_19493);
if(temp__4126__auto___19502){
var seq__19442_19503__$1 = temp__4126__auto___19502;
if(cljs.core.chunked_seq_QMARK_(seq__19442_19503__$1)){
var c__4561__auto___19504 = cljs.core.chunk_first(seq__19442_19503__$1);
var G__19505 = cljs.core.chunk_rest(seq__19442_19503__$1);
var G__19506 = c__4561__auto___19504;
var G__19507 = cljs.core.count(c__4561__auto___19504);
var G__19508 = (0);
seq__19442_19493 = G__19505;
chunk__19443_19494 = G__19506;
count__19444_19495 = G__19507;
i__19445_19496 = G__19508;
continue;
} else {
var c_19509 = cljs.core.first(seq__19442_19503__$1);
add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_19509);

var G__19510 = cljs.core.next(seq__19442_19503__$1);
var G__19511 = null;
var G__19512 = (0);
var G__19513 = (0);
seq__19442_19493 = G__19510;
chunk__19443_19494 = G__19511;
count__19444_19495 = G__19512;
i__19445_19496 = G__19513;
continue;
}
} else {
}
}
break;
}

return elem;
};
var G__19492 = function (elem,classes,var_args){
var more_classes = null;
if (arguments.length > 2) {
var G__19514__i = 0, G__19514__a = new Array(arguments.length -  2);
while (G__19514__i < G__19514__a.length) {G__19514__a[G__19514__i] = arguments[G__19514__i + 2]; ++G__19514__i;}
  more_classes = new cljs.core.IndexedSeq(G__19514__a,0);
} 
return G__19492__delegate.call(this,elem,classes,more_classes);};
G__19492.cljs$lang$maxFixedArity = 2;
G__19492.cljs$lang$applyTo = (function (arglist__19515){
var elem = cljs.core.first(arglist__19515);
arglist__19515 = cljs.core.next(arglist__19515);
var classes = cljs.core.first(arglist__19515);
var more_classes = cljs.core.rest(arglist__19515);
return G__19492__delegate(elem,classes,more_classes);
});
G__19492.cljs$core$IFn$_invoke$arity$variadic = G__19492__delegate;
return G__19492;
})()
;
add_class_BANG_ = function(elem,classes,var_args){
var more_classes = var_args;
switch(arguments.length){
case 2:
return add_class_BANG___2.call(this,elem,classes);
default:
var G__19516 = null;
if (arguments.length > 2) {
var G__19517__i = 0, G__19517__a = new Array(arguments.length -  2);
while (G__19517__i < G__19517__a.length) {G__19517__a[G__19517__i] = arguments[G__19517__i + 2]; ++G__19517__i;}
G__19516 = new cljs.core.IndexedSeq(G__19517__a,0);
}
return add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,classes, G__19516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_class_BANG_.cljs$lang$maxFixedArity = 2;
add_class_BANG_.cljs$lang$applyTo = add_class_BANG___3.cljs$lang$applyTo;
add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = add_class_BANG___2;
add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return add_class_BANG_;
})()
;
/**
* Remove `c` from `elem` class list
* @param {...*} var_args
*/
dommy.core.remove_class_BANG_ = (function() {
var remove_class_BANG_ = null;
var remove_class_BANG___2 = (function (elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__4124__auto___19530 = elem.classList;
if(cljs.core.truth_(temp__4124__auto___19530)){
var class_list_19531 = temp__4124__auto___19530;
class_list_19531.remove(c__$1);
} else {
var class_name_19532 = dommy.core.class$(elem);
var new_class_name_19533 = dommy.utils.remove_class_str(class_name_19532,c__$1);
if((class_name_19532 === new_class_name_19533)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_19533);
}
}

return elem;
});
var remove_class_BANG___3 = (function() { 
var G__19534__delegate = function (elem,class$,classes){
var seq__19526 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__19527 = null;
var count__19528 = (0);
var i__19529 = (0);
while(true){
if((i__19529 < count__19528)){
var c = chunk__19527.cljs$core$IIndexed$_nth$arity$2(null,i__19529);
remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);

var G__19535 = seq__19526;
var G__19536 = chunk__19527;
var G__19537 = count__19528;
var G__19538 = (i__19529 + (1));
seq__19526 = G__19535;
chunk__19527 = G__19536;
count__19528 = G__19537;
i__19529 = G__19538;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__19526);
if(temp__4126__auto__){
var seq__19526__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19526__$1)){
var c__4561__auto__ = cljs.core.chunk_first(seq__19526__$1);
var G__19539 = cljs.core.chunk_rest(seq__19526__$1);
var G__19540 = c__4561__auto__;
var G__19541 = cljs.core.count(c__4561__auto__);
var G__19542 = (0);
seq__19526 = G__19539;
chunk__19527 = G__19540;
count__19528 = G__19541;
i__19529 = G__19542;
continue;
} else {
var c = cljs.core.first(seq__19526__$1);
remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);

var G__19543 = cljs.core.next(seq__19526__$1);
var G__19544 = null;
var G__19545 = (0);
var G__19546 = (0);
seq__19526 = G__19543;
chunk__19527 = G__19544;
count__19528 = G__19545;
i__19529 = G__19546;
continue;
}
} else {
return null;
}
}
break;
}
};
var G__19534 = function (elem,class$,var_args){
var classes = null;
if (arguments.length > 2) {
var G__19547__i = 0, G__19547__a = new Array(arguments.length -  2);
while (G__19547__i < G__19547__a.length) {G__19547__a[G__19547__i] = arguments[G__19547__i + 2]; ++G__19547__i;}
  classes = new cljs.core.IndexedSeq(G__19547__a,0);
} 
return G__19534__delegate.call(this,elem,class$,classes);};
G__19534.cljs$lang$maxFixedArity = 2;
G__19534.cljs$lang$applyTo = (function (arglist__19548){
var elem = cljs.core.first(arglist__19548);
arglist__19548 = cljs.core.next(arglist__19548);
var class$ = cljs.core.first(arglist__19548);
var classes = cljs.core.rest(arglist__19548);
return G__19534__delegate(elem,class$,classes);
});
G__19534.cljs$core$IFn$_invoke$arity$variadic = G__19534__delegate;
return G__19534;
})()
;
remove_class_BANG_ = function(elem,class$,var_args){
var classes = var_args;
switch(arguments.length){
case 2:
return remove_class_BANG___2.call(this,elem,class$);
default:
var G__19549 = null;
if (arguments.length > 2) {
var G__19550__i = 0, G__19550__a = new Array(arguments.length -  2);
while (G__19550__i < G__19550__a.length) {G__19550__a[G__19550__i] = arguments[G__19550__i + 2]; ++G__19550__i;}
G__19549 = new cljs.core.IndexedSeq(G__19550__a,0);
}
return remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,class$, G__19549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_class_BANG_.cljs$lang$maxFixedArity = 2;
remove_class_BANG_.cljs$lang$applyTo = remove_class_BANG___3.cljs$lang$applyTo;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_class_BANG___2;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_class_BANG_;
})()
;
/**
* (toggle-class! elem class) will add-class! if elem does not have class
* and remove-class! otherwise.
* (toggle-class! elem class add?) will add-class! if add? is truthy,
* otherwise it will remove-class!
*/
dommy.core.toggle_class_BANG_ = (function() {
var toggle_class_BANG_ = null;
var toggle_class_BANG___2 = (function (elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__4124__auto___19554 = elem.classList;
if(cljs.core.truth_(temp__4124__auto___19554)){
var class_list_19555 = temp__4124__auto___19554;
class_list_19555.toggle(c__$1);
} else {
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3(elem,c__$1,!(dommy.core.has_class_QMARK_(elem,c__$1)));
}

return elem;
});
var toggle_class_BANG___3 = (function (elem,class$,add_QMARK_){
if(add_QMARK_){
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,class$);
} else {
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,class$);
}

return elem;
});
toggle_class_BANG_ = function(elem,class$,add_QMARK_){
switch(arguments.length){
case 2:
return toggle_class_BANG___2.call(this,elem,class$);
case 3:
return toggle_class_BANG___3.call(this,elem,class$,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_class_BANG___2;
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = toggle_class_BANG___3;
return toggle_class_BANG_;
})()
;
/**
* Display or hide the given `elem` (using display: none).
* Takes an optional boolean `show?`
*/
dommy.core.toggle_BANG_ = (function() {
var toggle_BANG_ = null;
var toggle_BANG___1 = (function (elem){
return toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,dommy.core.hidden_QMARK_(elem));
});
var toggle_BANG___2 = (function (elem,show_QMARK_){
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.array_seq([cljs.core.constant$keyword$125,((show_QMARK_)?"":"none")], 0));
});
toggle_BANG_ = function(elem,show_QMARK_){
switch(arguments.length){
case 1:
return toggle_BANG___1.call(this,elem);
case 2:
return toggle_BANG___2.call(this,elem,show_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = toggle_BANG___1;
toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_BANG___2;
return toggle_BANG_;
})()
;
dommy.core.hide_BANG_ = (function hide_BANG_(elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,false);
});
dommy.core.show_BANG_ = (function show_BANG_(elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,true);
});
dommy.core.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){
var top = cljs.core.constant$keyword$126.cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect(elem));
if((window.innerHeight < (top + elem.offsetHeight))){
return elem.scrollIntoView(align_with_top_QMARK_);
} else {
return null;
}
});
dommy.core.create_element = (function() {
var create_element = null;
var create_element__1 = (function (tag){
return document.createElement(dommy.utils.as_str(tag));
});
var create_element__2 = (function (tag_ns,tag){
return document.createElementNS(dommy.utils.as_str(tag_ns),dommy.utils.as_str(tag));
});
create_element = function(tag_ns,tag){
switch(arguments.length){
case 1:
return create_element__1.call(this,tag_ns);
case 2:
return create_element__2.call(this,tag_ns,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_element.cljs$core$IFn$_invoke$arity$1 = create_element__1;
create_element.cljs$core$IFn$_invoke$arity$2 = create_element__2;
return create_element;
})()
;
dommy.core.create_text_node = (function create_text_node(text){
return document.createTextNode(text);
});
/**
* Clears all children from `elem`
*/
dommy.core.clear_BANG_ = (function clear_BANG_(elem){
return dommy.core.set_html_BANG_(elem,"");
});
/**
* Append `child` to `parent`
* @param {...*} var_args
*/
dommy.core.append_BANG_ = (function() {
var append_BANG_ = null;
var append_BANG___2 = (function (parent,child){
var G__19567 = parent;
G__19567.appendChild(child);

return G__19567;
});
var append_BANG___3 = (function() { 
var G__19572__delegate = function (parent,child,more_children){
var seq__19568_19573 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__19569_19574 = null;
var count__19570_19575 = (0);
var i__19571_19576 = (0);
while(true){
if((i__19571_19576 < count__19570_19575)){
var c_19577 = chunk__19569_19574.cljs$core$IIndexed$_nth$arity$2(null,i__19571_19576);
append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_19577);

var G__19578 = seq__19568_19573;
var G__19579 = chunk__19569_19574;
var G__19580 = count__19570_19575;
var G__19581 = (i__19571_19576 + (1));
seq__19568_19573 = G__19578;
chunk__19569_19574 = G__19579;
count__19570_19575 = G__19580;
i__19571_19576 = G__19581;
continue;
} else {
var temp__4126__auto___19582 = cljs.core.seq(seq__19568_19573);
if(temp__4126__auto___19582){
var seq__19568_19583__$1 = temp__4126__auto___19582;
if(cljs.core.chunked_seq_QMARK_(seq__19568_19583__$1)){
var c__4561__auto___19584 = cljs.core.chunk_first(seq__19568_19583__$1);
var G__19585 = cljs.core.chunk_rest(seq__19568_19583__$1);
var G__19586 = c__4561__auto___19584;
var G__19587 = cljs.core.count(c__4561__auto___19584);
var G__19588 = (0);
seq__19568_19573 = G__19585;
chunk__19569_19574 = G__19586;
count__19570_19575 = G__19587;
i__19571_19576 = G__19588;
continue;
} else {
var c_19589 = cljs.core.first(seq__19568_19583__$1);
append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_19589);

var G__19590 = cljs.core.next(seq__19568_19583__$1);
var G__19591 = null;
var G__19592 = (0);
var G__19593 = (0);
seq__19568_19573 = G__19590;
chunk__19569_19574 = G__19591;
count__19570_19575 = G__19592;
i__19571_19576 = G__19593;
continue;
}
} else {
}
}
break;
}

return parent;
};
var G__19572 = function (parent,child,var_args){
var more_children = null;
if (arguments.length > 2) {
var G__19594__i = 0, G__19594__a = new Array(arguments.length -  2);
while (G__19594__i < G__19594__a.length) {G__19594__a[G__19594__i] = arguments[G__19594__i + 2]; ++G__19594__i;}
  more_children = new cljs.core.IndexedSeq(G__19594__a,0);
} 
return G__19572__delegate.call(this,parent,child,more_children);};
G__19572.cljs$lang$maxFixedArity = 2;
G__19572.cljs$lang$applyTo = (function (arglist__19595){
var parent = cljs.core.first(arglist__19595);
arglist__19595 = cljs.core.next(arglist__19595);
var child = cljs.core.first(arglist__19595);
var more_children = cljs.core.rest(arglist__19595);
return G__19572__delegate(parent,child,more_children);
});
G__19572.cljs$core$IFn$_invoke$arity$variadic = G__19572__delegate;
return G__19572;
})()
;
append_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return append_BANG___2.call(this,parent,child);
default:
var G__19596 = null;
if (arguments.length > 2) {
var G__19597__i = 0, G__19597__a = new Array(arguments.length -  2);
while (G__19597__i < G__19597__a.length) {G__19597__a[G__19597__i] = arguments[G__19597__i + 2]; ++G__19597__i;}
G__19596 = new cljs.core.IndexedSeq(G__19597__a,0);
}
return append_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, G__19596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
append_BANG_.cljs$lang$maxFixedArity = 2;
append_BANG_.cljs$lang$applyTo = append_BANG___3.cljs$lang$applyTo;
append_BANG_.cljs$core$IFn$_invoke$arity$2 = append_BANG___2;
append_BANG_.cljs$core$IFn$_invoke$arity$variadic = append_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return append_BANG_;
})()
;
/**
* Prepend `child` to `parent`
* @param {...*} var_args
*/
dommy.core.prepend_BANG_ = (function() {
var prepend_BANG_ = null;
var prepend_BANG___2 = (function (parent,child){
var G__19607 = parent;
G__19607.insertBefore(child,parent.firstChild);

return G__19607;
});
var prepend_BANG___3 = (function() { 
var G__19612__delegate = function (parent,child,more_children){
var seq__19608_19613 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__19609_19614 = null;
var count__19610_19615 = (0);
var i__19611_19616 = (0);
while(true){
if((i__19611_19616 < count__19610_19615)){
var c_19617 = chunk__19609_19614.cljs$core$IIndexed$_nth$arity$2(null,i__19611_19616);
prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_19617);

var G__19618 = seq__19608_19613;
var G__19619 = chunk__19609_19614;
var G__19620 = count__19610_19615;
var G__19621 = (i__19611_19616 + (1));
seq__19608_19613 = G__19618;
chunk__19609_19614 = G__19619;
count__19610_19615 = G__19620;
i__19611_19616 = G__19621;
continue;
} else {
var temp__4126__auto___19622 = cljs.core.seq(seq__19608_19613);
if(temp__4126__auto___19622){
var seq__19608_19623__$1 = temp__4126__auto___19622;
if(cljs.core.chunked_seq_QMARK_(seq__19608_19623__$1)){
var c__4561__auto___19624 = cljs.core.chunk_first(seq__19608_19623__$1);
var G__19625 = cljs.core.chunk_rest(seq__19608_19623__$1);
var G__19626 = c__4561__auto___19624;
var G__19627 = cljs.core.count(c__4561__auto___19624);
var G__19628 = (0);
seq__19608_19613 = G__19625;
chunk__19609_19614 = G__19626;
count__19610_19615 = G__19627;
i__19611_19616 = G__19628;
continue;
} else {
var c_19629 = cljs.core.first(seq__19608_19623__$1);
prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_19629);

var G__19630 = cljs.core.next(seq__19608_19623__$1);
var G__19631 = null;
var G__19632 = (0);
var G__19633 = (0);
seq__19608_19613 = G__19630;
chunk__19609_19614 = G__19631;
count__19610_19615 = G__19632;
i__19611_19616 = G__19633;
continue;
}
} else {
}
}
break;
}

return parent;
};
var G__19612 = function (parent,child,var_args){
var more_children = null;
if (arguments.length > 2) {
var G__19634__i = 0, G__19634__a = new Array(arguments.length -  2);
while (G__19634__i < G__19634__a.length) {G__19634__a[G__19634__i] = arguments[G__19634__i + 2]; ++G__19634__i;}
  more_children = new cljs.core.IndexedSeq(G__19634__a,0);
} 
return G__19612__delegate.call(this,parent,child,more_children);};
G__19612.cljs$lang$maxFixedArity = 2;
G__19612.cljs$lang$applyTo = (function (arglist__19635){
var parent = cljs.core.first(arglist__19635);
arglist__19635 = cljs.core.next(arglist__19635);
var child = cljs.core.first(arglist__19635);
var more_children = cljs.core.rest(arglist__19635);
return G__19612__delegate(parent,child,more_children);
});
G__19612.cljs$core$IFn$_invoke$arity$variadic = G__19612__delegate;
return G__19612;
})()
;
prepend_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return prepend_BANG___2.call(this,parent,child);
default:
var G__19636 = null;
if (arguments.length > 2) {
var G__19637__i = 0, G__19637__a = new Array(arguments.length -  2);
while (G__19637__i < G__19637__a.length) {G__19637__a[G__19637__i] = arguments[G__19637__i + 2]; ++G__19637__i;}
G__19636 = new cljs.core.IndexedSeq(G__19637__a,0);
}
return prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, G__19636);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prepend_BANG_.cljs$lang$maxFixedArity = 2;
prepend_BANG_.cljs$lang$applyTo = prepend_BANG___3.cljs$lang$applyTo;
prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = prepend_BANG___2;
prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return prepend_BANG_;
})()
;
/**
* Insert `elem` before `other`, `other` must have a parent
*/
dommy.core.insert_before_BANG_ = (function insert_before_BANG_(elem,other){
var p = dommy.core.parent(other);

p.insertBefore(elem,other);

return elem;
});
/**
* Insert `elem` after `other`, `other` must have a parent
*/
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){
var temp__4124__auto___19638 = other.nextSibling;
if(cljs.core.truth_(temp__4124__auto___19638)){
var next_19639 = temp__4124__auto___19638;
dommy.core.insert_before_BANG_(elem,next_19639);
} else {
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.parent(other),elem);
}

return elem;
});
/**
* Replace `elem` with `new`, return `new`
*/
dommy.core.replace_BANG_ = (function replace_BANG_(elem,new$){
var p = dommy.core.parent(elem);

p.replaceChild(new$,elem);

return new$;
});
/**
* Replace children of `elem` with `child`
*/
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(p,child){
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.clear_BANG_(p),child);
});
/**
* Remove `elem` from `parent`, return `parent`
*/
dommy.core.remove_BANG_ = (function() {
var remove_BANG_ = null;
var remove_BANG___1 = (function (elem){
var p = dommy.core.parent(elem);

return remove_BANG_.cljs$core$IFn$_invoke$arity$2(p,elem);
});
var remove_BANG___2 = (function (p,elem){
var G__19643 = p;
G__19643.removeChild(elem);

return G__19643;
});
remove_BANG_ = function(p,elem){
switch(arguments.length){
case 1:
return remove_BANG___1.call(this,p);
case 2:
return remove_BANG___2.call(this,p,elem);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_BANG_.cljs$core$IFn$_invoke$arity$1 = remove_BANG___1;
remove_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_BANG___2;
return remove_BANG_;
})()
;
dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__19644){
var vec__19645 = p__19644;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19645,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19645,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__19645,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__19645,special_mouse_event,real_mouse_event){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__3774__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__3774__auto__)){
return or__3774__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__3762__auto__ = related_target;
if(cljs.core.truth_(and__3762__auto__)){
return dommy.core.descendant_QMARK_(related_target,listener_target);
} else {
return and__3762__auto__;
}
})())){
return null;
} else {
var G__19646 = event;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__19646) : f.call(null,G__19646));
}
});
;})(vec__19645,special_mouse_event,real_mouse_event))
});})(vec__19645,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$132,cljs.core.constant$keyword$134,cljs.core.constant$keyword$133,cljs.core.constant$keyword$135], null)));
/**
* fires f if event.target is found with `selector`
*/
dommy.core.live_listener = (function live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.cljs$core$IFn$_invoke$arity$3(elem,event.target,selector);
if(cljs.core.truth_((function (){var and__3762__auto__ = selected_target;
if(cljs.core.truth_(and__3762__auto__)){
return cljs.core.not(dommy.core.attr(selected_target,cljs.core.constant$keyword$136));
} else {
return and__3762__auto__;
}
})())){
event.selectedTarget = selected_target;

var G__19648 = event;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__19648) : f.call(null,G__19648));
} else {
return null;
}
});
});
/**
* Returns a nested map of event listeners on `elem`
*/
dommy.core.event_listeners = (function event_listeners(elem){
var or__3774__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__3774__auto__)){
return or__3774__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
/**
* @param {...*} var_args
*/
dommy.core.update_event_listeners_BANG_ = (function() { 
var update_event_listeners_BANG___delegate = function (elem,f,args){
var elem__$1 = elem;
return elem__$1.dommyEventListeners = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,dommy.core.event_listeners(elem__$1),args);
};
var update_event_listeners_BANG_ = function (elem,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__19649__i = 0, G__19649__a = new Array(arguments.length -  2);
while (G__19649__i < G__19649__a.length) {G__19649__a[G__19649__i] = arguments[G__19649__i + 2]; ++G__19649__i;}
  args = new cljs.core.IndexedSeq(G__19649__a,0);
} 
return update_event_listeners_BANG___delegate.call(this,elem,f,args);};
update_event_listeners_BANG_.cljs$lang$maxFixedArity = 2;
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__19650){
var elem = cljs.core.first(arglist__19650);
arglist__19650 = cljs.core.next(arglist__19650);
var f = cljs.core.first(arglist__19650);
var args = cljs.core.rest(arglist__19650);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_(elem_sel)){
return cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest).call(null,elem_sel);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_sel,null], null);
}
});
/**
* Adds `f` as a listener for events of type `event-type` on
* `elem-sel`, which must either be a DOM node, or a sequence
* whose first item is a DOM node.
* 
* In other words, the call to `listen!` can take two forms:
* 
* If `elem-sel` is a DOM node, i.e., you're doing something like:
* 
* (listen! elem :click click-handler)
* 
* then `click-handler` will be set as a listener for `click` events
* on the `elem`.
* 
* If `elem-sel` is a sequence:
* 
* (listen! [elem :.selector.for :.some.descendants] :click click-handler)
* 
* then `click-handler` will be set as a listener for `click` events
* on descendants of `elem` that match the selector
* 
* Also accepts any number of event-type and handler pairs for setting
* multiple listeners at once:
* 
* (listen! some-elem :click click-handler :hover hover-handler)
* @param {...*} var_args
*/
dommy.core.listen_BANG_ = (function() { 
var listen_BANG___delegate = function (elem_sel,type_fs){

var vec__19678_19705 = dommy.core.elem_and_selector(elem_sel);
var elem_19706 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19678_19705,(0),null);
var selector_19707 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19678_19705,(1),null);
var seq__19679_19708 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__19686_19709 = null;
var count__19687_19710 = (0);
var i__19688_19711 = (0);
while(true){
if((i__19688_19711 < count__19687_19710)){
var vec__19695_19712 = chunk__19686_19709.cljs$core$IIndexed$_nth$arity$2(null,i__19688_19711);
var orig_type_19713 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19695_19712,(0),null);
var f_19714 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19695_19712,(1),null);
var seq__19689_19715 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_19713,new cljs.core.PersistentArrayMap.fromArray([orig_type_19713,cljs.core.identity], true, false)));
var chunk__19691_19716 = null;
var count__19692_19717 = (0);
var i__19693_19718 = (0);
while(true){
if((i__19693_19718 < count__19692_19717)){
var vec__19696_19719 = chunk__19691_19716.cljs$core$IIndexed$_nth$arity$2(null,i__19693_19718);
var actual_type_19720 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19696_19719,(0),null);
var factory_19721 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19696_19719,(1),null);
var canonical_f_19722 = (cljs.core.truth_(selector_19707)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_19706,selector_19707):cljs.core.identity).call(null,(function (){var G__19697 = f_19714;
return (factory_19721.cljs$core$IFn$_invoke$arity$1 ? factory_19721.cljs$core$IFn$_invoke$arity$1(G__19697) : factory_19721.call(null,G__19697));
})());
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_19706,cljs.core.assoc_in,cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_19707,actual_type_19720,f_19714], null),canonical_f_19722], 0));

if(cljs.core.truth_(elem_19706.addEventListener)){
elem_19706.addEventListener(cljs.core.name(actual_type_19720),canonical_f_19722);
} else {
elem_19706.attachEvent(cljs.core.name(actual_type_19720),canonical_f_19722);
}

var G__19723 = seq__19689_19715;
var G__19724 = chunk__19691_19716;
var G__19725 = count__19692_19717;
var G__19726 = (i__19693_19718 + (1));
seq__19689_19715 = G__19723;
chunk__19691_19716 = G__19724;
count__19692_19717 = G__19725;
i__19693_19718 = G__19726;
continue;
} else {
var temp__4126__auto___19727 = cljs.core.seq(seq__19689_19715);
if(temp__4126__auto___19727){
var seq__19689_19728__$1 = temp__4126__auto___19727;
if(cljs.core.chunked_seq_QMARK_(seq__19689_19728__$1)){
var c__4561__auto___19729 = cljs.core.chunk_first(seq__19689_19728__$1);
var G__19730 = cljs.core.chunk_rest(seq__19689_19728__$1);
var G__19731 = c__4561__auto___19729;
var G__19732 = cljs.core.count(c__4561__auto___19729);
var G__19733 = (0);
seq__19689_19715 = G__19730;
chunk__19691_19716 = G__19731;
count__19692_19717 = G__19732;
i__19693_19718 = G__19733;
continue;
} else {
var vec__19698_19734 = cljs.core.first(seq__19689_19728__$1);
var actual_type_19735 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19698_19734,(0),null);
var factory_19736 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19698_19734,(1),null);
var canonical_f_19737 = (cljs.core.truth_(selector_19707)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_19706,selector_19707):cljs.core.identity).call(null,(function (){var G__19699 = f_19714;
return (factory_19736.cljs$core$IFn$_invoke$arity$1 ? factory_19736.cljs$core$IFn$_invoke$arity$1(G__19699) : factory_19736.call(null,G__19699));
})());
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_19706,cljs.core.assoc_in,cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_19707,actual_type_19735,f_19714], null),canonical_f_19737], 0));

if(cljs.core.truth_(elem_19706.addEventListener)){
elem_19706.addEventListener(cljs.core.name(actual_type_19735),canonical_f_19737);
} else {
elem_19706.attachEvent(cljs.core.name(actual_type_19735),canonical_f_19737);
}

var G__19738 = cljs.core.next(seq__19689_19728__$1);
var G__19739 = null;
var G__19740 = (0);
var G__19741 = (0);
seq__19689_19715 = G__19738;
chunk__19691_19716 = G__19739;
count__19692_19717 = G__19740;
i__19693_19718 = G__19741;
continue;
}
} else {
}
}
break;
}

var G__19742 = seq__19679_19708;
var G__19743 = chunk__19686_19709;
var G__19744 = count__19687_19710;
var G__19745 = (i__19688_19711 + (1));
seq__19679_19708 = G__19742;
chunk__19686_19709 = G__19743;
count__19687_19710 = G__19744;
i__19688_19711 = G__19745;
continue;
} else {
var temp__4126__auto___19746 = cljs.core.seq(seq__19679_19708);
if(temp__4126__auto___19746){
var seq__19679_19747__$1 = temp__4126__auto___19746;
if(cljs.core.chunked_seq_QMARK_(seq__19679_19747__$1)){
var c__4561__auto___19748 = cljs.core.chunk_first(seq__19679_19747__$1);
var G__19749 = cljs.core.chunk_rest(seq__19679_19747__$1);
var G__19750 = c__4561__auto___19748;
var G__19751 = cljs.core.count(c__4561__auto___19748);
var G__19752 = (0);
seq__19679_19708 = G__19749;
chunk__19686_19709 = G__19750;
count__19687_19710 = G__19751;
i__19688_19711 = G__19752;
continue;
} else {
var vec__19700_19753 = cljs.core.first(seq__19679_19747__$1);
var orig_type_19754 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19700_19753,(0),null);
var f_19755 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19700_19753,(1),null);
var seq__19680_19756 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_19754,new cljs.core.PersistentArrayMap.fromArray([orig_type_19754,cljs.core.identity], true, false)));
var chunk__19682_19757 = null;
var count__19683_19758 = (0);
var i__19684_19759 = (0);
while(true){
if((i__19684_19759 < count__19683_19758)){
var vec__19701_19760 = chunk__19682_19757.cljs$core$IIndexed$_nth$arity$2(null,i__19684_19759);
var actual_type_19761 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19701_19760,(0),null);
var factory_19762 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19701_19760,(1),null);
var canonical_f_19763 = (cljs.core.truth_(selector_19707)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_19706,selector_19707):cljs.core.identity).call(null,(function (){var G__19702 = f_19755;
return (factory_19762.cljs$core$IFn$_invoke$arity$1 ? factory_19762.cljs$core$IFn$_invoke$arity$1(G__19702) : factory_19762.call(null,G__19702));
})());
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_19706,cljs.core.assoc_in,cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_19707,actual_type_19761,f_19755], null),canonical_f_19763], 0));

if(cljs.core.truth_(elem_19706.addEventListener)){
elem_19706.addEventListener(cljs.core.name(actual_type_19761),canonical_f_19763);
} else {
elem_19706.attachEvent(cljs.core.name(actual_type_19761),canonical_f_19763);
}

var G__19764 = seq__19680_19756;
var G__19765 = chunk__19682_19757;
var G__19766 = count__19683_19758;
var G__19767 = (i__19684_19759 + (1));
seq__19680_19756 = G__19764;
chunk__19682_19757 = G__19765;
count__19683_19758 = G__19766;
i__19684_19759 = G__19767;
continue;
} else {
var temp__4126__auto___19768__$1 = cljs.core.seq(seq__19680_19756);
if(temp__4126__auto___19768__$1){
var seq__19680_19769__$1 = temp__4126__auto___19768__$1;
if(cljs.core.chunked_seq_QMARK_(seq__19680_19769__$1)){
var c__4561__auto___19770 = cljs.core.chunk_first(seq__19680_19769__$1);
var G__19771 = cljs.core.chunk_rest(seq__19680_19769__$1);
var G__19772 = c__4561__auto___19770;
var G__19773 = cljs.core.count(c__4561__auto___19770);
var G__19774 = (0);
seq__19680_19756 = G__19771;
chunk__19682_19757 = G__19772;
count__19683_19758 = G__19773;
i__19684_19759 = G__19774;
continue;
} else {
var vec__19703_19775 = cljs.core.first(seq__19680_19769__$1);
var actual_type_19776 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19703_19775,(0),null);
var factory_19777 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19703_19775,(1),null);
var canonical_f_19778 = (cljs.core.truth_(selector_19707)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_19706,selector_19707):cljs.core.identity).call(null,(function (){var G__19704 = f_19755;
return (factory_19777.cljs$core$IFn$_invoke$arity$1 ? factory_19777.cljs$core$IFn$_invoke$arity$1(G__19704) : factory_19777.call(null,G__19704));
})());
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_19706,cljs.core.assoc_in,cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_19707,actual_type_19776,f_19755], null),canonical_f_19778], 0));

if(cljs.core.truth_(elem_19706.addEventListener)){
elem_19706.addEventListener(cljs.core.name(actual_type_19776),canonical_f_19778);
} else {
elem_19706.attachEvent(cljs.core.name(actual_type_19776),canonical_f_19778);
}

var G__19779 = cljs.core.next(seq__19680_19769__$1);
var G__19780 = null;
var G__19781 = (0);
var G__19782 = (0);
seq__19680_19756 = G__19779;
chunk__19682_19757 = G__19780;
count__19683_19758 = G__19781;
i__19684_19759 = G__19782;
continue;
}
} else {
}
}
break;
}

var G__19783 = cljs.core.next(seq__19679_19747__$1);
var G__19784 = null;
var G__19785 = (0);
var G__19786 = (0);
seq__19679_19708 = G__19783;
chunk__19686_19709 = G__19784;
count__19687_19710 = G__19785;
i__19688_19711 = G__19786;
continue;
}
} else {
}
}
break;
}

return elem_sel;
};
var listen_BANG_ = function (elem_sel,var_args){
var type_fs = null;
if (arguments.length > 1) {
var G__19787__i = 0, G__19787__a = new Array(arguments.length -  1);
while (G__19787__i < G__19787__a.length) {G__19787__a[G__19787__i] = arguments[G__19787__i + 1]; ++G__19787__i;}
  type_fs = new cljs.core.IndexedSeq(G__19787__a,0);
} 
return listen_BANG___delegate.call(this,elem_sel,type_fs);};
listen_BANG_.cljs$lang$maxFixedArity = 1;
listen_BANG_.cljs$lang$applyTo = (function (arglist__19788){
var elem_sel = cljs.core.first(arglist__19788);
var type_fs = cljs.core.rest(arglist__19788);
return listen_BANG___delegate(elem_sel,type_fs);
});
listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_BANG___delegate;
return listen_BANG_;
})()
;
/**
* Removes event listener for the element defined in `elem-sel`,
* which is the same format as listen!.
* 
* The following forms are allowed, and will remove all handlers
* that match the parameters passed in:
* 
* (unlisten! [elem :.selector] :click event-listener)
* 
* (unlisten! [elem :.selector]
* :click event-listener
* :mouseover other-event-listener)
* @param {...*} var_args
*/
dommy.core.unlisten_BANG_ = (function() { 
var unlisten_BANG___delegate = function (elem_sel,type_fs){

var vec__19812_19835 = dommy.core.elem_and_selector(elem_sel);
var elem_19836 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19812_19835,(0),null);
var selector_19837 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19812_19835,(1),null);
var seq__19813_19838 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__19820_19839 = null;
var count__19821_19840 = (0);
var i__19822_19841 = (0);
while(true){
if((i__19822_19841 < count__19821_19840)){
var vec__19829_19842 = chunk__19820_19839.cljs$core$IIndexed$_nth$arity$2(null,i__19822_19841);
var orig_type_19843 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19829_19842,(0),null);
var f_19844 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19829_19842,(1),null);
var seq__19823_19845 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_19843,new cljs.core.PersistentArrayMap.fromArray([orig_type_19843,cljs.core.identity], true, false)));
var chunk__19825_19846 = null;
var count__19826_19847 = (0);
var i__19827_19848 = (0);
while(true){
if((i__19827_19848 < count__19826_19847)){
var vec__19830_19849 = chunk__19825_19846.cljs$core$IIndexed$_nth$arity$2(null,i__19827_19848);
var actual_type_19850 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19830_19849,(0),null);
var __19851 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19830_19849,(1),null);
var keys_19852 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_19837,actual_type_19850,f_19844], null);
var canonical_f_19853 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_19836),keys_19852);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_19836,dommy.utils.dissoc_in,cljs.core.array_seq([keys_19852], 0));

if(cljs.core.truth_(elem_19836.removeEventListener)){
elem_19836.removeEventListener(cljs.core.name(actual_type_19850),canonical_f_19853);
} else {
elem_19836.detachEvent(cljs.core.name(actual_type_19850),canonical_f_19853);
}

var G__19854 = seq__19823_19845;
var G__19855 = chunk__19825_19846;
var G__19856 = count__19826_19847;
var G__19857 = (i__19827_19848 + (1));
seq__19823_19845 = G__19854;
chunk__19825_19846 = G__19855;
count__19826_19847 = G__19856;
i__19827_19848 = G__19857;
continue;
} else {
var temp__4126__auto___19858 = cljs.core.seq(seq__19823_19845);
if(temp__4126__auto___19858){
var seq__19823_19859__$1 = temp__4126__auto___19858;
if(cljs.core.chunked_seq_QMARK_(seq__19823_19859__$1)){
var c__4561__auto___19860 = cljs.core.chunk_first(seq__19823_19859__$1);
var G__19861 = cljs.core.chunk_rest(seq__19823_19859__$1);
var G__19862 = c__4561__auto___19860;
var G__19863 = cljs.core.count(c__4561__auto___19860);
var G__19864 = (0);
seq__19823_19845 = G__19861;
chunk__19825_19846 = G__19862;
count__19826_19847 = G__19863;
i__19827_19848 = G__19864;
continue;
} else {
var vec__19831_19865 = cljs.core.first(seq__19823_19859__$1);
var actual_type_19866 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19831_19865,(0),null);
var __19867 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19831_19865,(1),null);
var keys_19868 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_19837,actual_type_19866,f_19844], null);
var canonical_f_19869 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_19836),keys_19868);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_19836,dommy.utils.dissoc_in,cljs.core.array_seq([keys_19868], 0));

if(cljs.core.truth_(elem_19836.removeEventListener)){
elem_19836.removeEventListener(cljs.core.name(actual_type_19866),canonical_f_19869);
} else {
elem_19836.detachEvent(cljs.core.name(actual_type_19866),canonical_f_19869);
}

var G__19870 = cljs.core.next(seq__19823_19859__$1);
var G__19871 = null;
var G__19872 = (0);
var G__19873 = (0);
seq__19823_19845 = G__19870;
chunk__19825_19846 = G__19871;
count__19826_19847 = G__19872;
i__19827_19848 = G__19873;
continue;
}
} else {
}
}
break;
}

var G__19874 = seq__19813_19838;
var G__19875 = chunk__19820_19839;
var G__19876 = count__19821_19840;
var G__19877 = (i__19822_19841 + (1));
seq__19813_19838 = G__19874;
chunk__19820_19839 = G__19875;
count__19821_19840 = G__19876;
i__19822_19841 = G__19877;
continue;
} else {
var temp__4126__auto___19878 = cljs.core.seq(seq__19813_19838);
if(temp__4126__auto___19878){
var seq__19813_19879__$1 = temp__4126__auto___19878;
if(cljs.core.chunked_seq_QMARK_(seq__19813_19879__$1)){
var c__4561__auto___19880 = cljs.core.chunk_first(seq__19813_19879__$1);
var G__19881 = cljs.core.chunk_rest(seq__19813_19879__$1);
var G__19882 = c__4561__auto___19880;
var G__19883 = cljs.core.count(c__4561__auto___19880);
var G__19884 = (0);
seq__19813_19838 = G__19881;
chunk__19820_19839 = G__19882;
count__19821_19840 = G__19883;
i__19822_19841 = G__19884;
continue;
} else {
var vec__19832_19885 = cljs.core.first(seq__19813_19879__$1);
var orig_type_19886 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19832_19885,(0),null);
var f_19887 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19832_19885,(1),null);
var seq__19814_19888 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_19886,new cljs.core.PersistentArrayMap.fromArray([orig_type_19886,cljs.core.identity], true, false)));
var chunk__19816_19889 = null;
var count__19817_19890 = (0);
var i__19818_19891 = (0);
while(true){
if((i__19818_19891 < count__19817_19890)){
var vec__19833_19892 = chunk__19816_19889.cljs$core$IIndexed$_nth$arity$2(null,i__19818_19891);
var actual_type_19893 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19833_19892,(0),null);
var __19894 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19833_19892,(1),null);
var keys_19895 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_19837,actual_type_19893,f_19887], null);
var canonical_f_19896 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_19836),keys_19895);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_19836,dommy.utils.dissoc_in,cljs.core.array_seq([keys_19895], 0));

if(cljs.core.truth_(elem_19836.removeEventListener)){
elem_19836.removeEventListener(cljs.core.name(actual_type_19893),canonical_f_19896);
} else {
elem_19836.detachEvent(cljs.core.name(actual_type_19893),canonical_f_19896);
}

var G__19897 = seq__19814_19888;
var G__19898 = chunk__19816_19889;
var G__19899 = count__19817_19890;
var G__19900 = (i__19818_19891 + (1));
seq__19814_19888 = G__19897;
chunk__19816_19889 = G__19898;
count__19817_19890 = G__19899;
i__19818_19891 = G__19900;
continue;
} else {
var temp__4126__auto___19901__$1 = cljs.core.seq(seq__19814_19888);
if(temp__4126__auto___19901__$1){
var seq__19814_19902__$1 = temp__4126__auto___19901__$1;
if(cljs.core.chunked_seq_QMARK_(seq__19814_19902__$1)){
var c__4561__auto___19903 = cljs.core.chunk_first(seq__19814_19902__$1);
var G__19904 = cljs.core.chunk_rest(seq__19814_19902__$1);
var G__19905 = c__4561__auto___19903;
var G__19906 = cljs.core.count(c__4561__auto___19903);
var G__19907 = (0);
seq__19814_19888 = G__19904;
chunk__19816_19889 = G__19905;
count__19817_19890 = G__19906;
i__19818_19891 = G__19907;
continue;
} else {
var vec__19834_19908 = cljs.core.first(seq__19814_19902__$1);
var actual_type_19909 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19834_19908,(0),null);
var __19910 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19834_19908,(1),null);
var keys_19911 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_19837,actual_type_19909,f_19887], null);
var canonical_f_19912 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_19836),keys_19911);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_19836,dommy.utils.dissoc_in,cljs.core.array_seq([keys_19911], 0));

if(cljs.core.truth_(elem_19836.removeEventListener)){
elem_19836.removeEventListener(cljs.core.name(actual_type_19909),canonical_f_19912);
} else {
elem_19836.detachEvent(cljs.core.name(actual_type_19909),canonical_f_19912);
}

var G__19913 = cljs.core.next(seq__19814_19902__$1);
var G__19914 = null;
var G__19915 = (0);
var G__19916 = (0);
seq__19814_19888 = G__19913;
chunk__19816_19889 = G__19914;
count__19817_19890 = G__19915;
i__19818_19891 = G__19916;
continue;
}
} else {
}
}
break;
}

var G__19917 = cljs.core.next(seq__19813_19879__$1);
var G__19918 = null;
var G__19919 = (0);
var G__19920 = (0);
seq__19813_19838 = G__19917;
chunk__19820_19839 = G__19918;
count__19821_19840 = G__19919;
i__19822_19841 = G__19920;
continue;
}
} else {
}
}
break;
}

return elem_sel;
};
var unlisten_BANG_ = function (elem_sel,var_args){
var type_fs = null;
if (arguments.length > 1) {
var G__19921__i = 0, G__19921__a = new Array(arguments.length -  1);
while (G__19921__i < G__19921__a.length) {G__19921__a[G__19921__i] = arguments[G__19921__i + 1]; ++G__19921__i;}
  type_fs = new cljs.core.IndexedSeq(G__19921__a,0);
} 
return unlisten_BANG___delegate.call(this,elem_sel,type_fs);};
unlisten_BANG_.cljs$lang$maxFixedArity = 1;
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__19922){
var elem_sel = cljs.core.first(arglist__19922);
var type_fs = cljs.core.rest(arglist__19922);
return unlisten_BANG___delegate(elem_sel,type_fs);
});
unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = unlisten_BANG___delegate;
return unlisten_BANG_;
})()
;
/**
* Behaves like `listen!`, but removes the listener after the first event occurs.
* @param {...*} var_args
*/
dommy.core.listen_once_BANG_ = (function() { 
var listen_once_BANG___delegate = function (elem_sel,type_fs){

var vec__19934_19945 = dommy.core.elem_and_selector(elem_sel);
var elem_19946 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19934_19945,(0),null);
var selector_19947 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19934_19945,(1),null);
var seq__19935_19948 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__19936_19949 = null;
var count__19937_19950 = (0);
var i__19938_19951 = (0);
while(true){
if((i__19938_19951 < count__19937_19950)){
var vec__19939_19952 = chunk__19936_19949.cljs$core$IIndexed$_nth$arity$2(null,i__19938_19951);
var type_19953 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19939_19952,(0),null);
var f_19954 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19939_19952,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.array_seq([type_19953,((function (seq__19935_19948,chunk__19936_19949,count__19937_19950,i__19938_19951,vec__19939_19952,type_19953,f_19954,vec__19934_19945,elem_19946,selector_19947){
return (function this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.array_seq([type_19953,this_fn], 0));

var G__19941 = e;
return (f_19954.cljs$core$IFn$_invoke$arity$1 ? f_19954.cljs$core$IFn$_invoke$arity$1(G__19941) : f_19954.call(null,G__19941));
});})(seq__19935_19948,chunk__19936_19949,count__19937_19950,i__19938_19951,vec__19939_19952,type_19953,f_19954,vec__19934_19945,elem_19946,selector_19947))
], 0));

var G__19955 = seq__19935_19948;
var G__19956 = chunk__19936_19949;
var G__19957 = count__19937_19950;
var G__19958 = (i__19938_19951 + (1));
seq__19935_19948 = G__19955;
chunk__19936_19949 = G__19956;
count__19937_19950 = G__19957;
i__19938_19951 = G__19958;
continue;
} else {
var temp__4126__auto___19959 = cljs.core.seq(seq__19935_19948);
if(temp__4126__auto___19959){
var seq__19935_19960__$1 = temp__4126__auto___19959;
if(cljs.core.chunked_seq_QMARK_(seq__19935_19960__$1)){
var c__4561__auto___19961 = cljs.core.chunk_first(seq__19935_19960__$1);
var G__19962 = cljs.core.chunk_rest(seq__19935_19960__$1);
var G__19963 = c__4561__auto___19961;
var G__19964 = cljs.core.count(c__4561__auto___19961);
var G__19965 = (0);
seq__19935_19948 = G__19962;
chunk__19936_19949 = G__19963;
count__19937_19950 = G__19964;
i__19938_19951 = G__19965;
continue;
} else {
var vec__19942_19966 = cljs.core.first(seq__19935_19960__$1);
var type_19967 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19942_19966,(0),null);
var f_19968 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19942_19966,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.array_seq([type_19967,((function (seq__19935_19948,chunk__19936_19949,count__19937_19950,i__19938_19951,vec__19942_19966,type_19967,f_19968,seq__19935_19960__$1,temp__4126__auto___19959,vec__19934_19945,elem_19946,selector_19947){
return (function this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.array_seq([type_19967,this_fn], 0));

var G__19944 = e;
return (f_19968.cljs$core$IFn$_invoke$arity$1 ? f_19968.cljs$core$IFn$_invoke$arity$1(G__19944) : f_19968.call(null,G__19944));
});})(seq__19935_19948,chunk__19936_19949,count__19937_19950,i__19938_19951,vec__19942_19966,type_19967,f_19968,seq__19935_19960__$1,temp__4126__auto___19959,vec__19934_19945,elem_19946,selector_19947))
], 0));

var G__19969 = cljs.core.next(seq__19935_19960__$1);
var G__19970 = null;
var G__19971 = (0);
var G__19972 = (0);
seq__19935_19948 = G__19969;
chunk__19936_19949 = G__19970;
count__19937_19950 = G__19971;
i__19938_19951 = G__19972;
continue;
}
} else {
}
}
break;
}

return elem_sel;
};
var listen_once_BANG_ = function (elem_sel,var_args){
var type_fs = null;
if (arguments.length > 1) {
var G__19973__i = 0, G__19973__a = new Array(arguments.length -  1);
while (G__19973__i < G__19973__a.length) {G__19973__a[G__19973__i] = arguments[G__19973__i + 1]; ++G__19973__i;}
  type_fs = new cljs.core.IndexedSeq(G__19973__a,0);
} 
return listen_once_BANG___delegate.call(this,elem_sel,type_fs);};
listen_once_BANG_.cljs$lang$maxFixedArity = 1;
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__19974){
var elem_sel = cljs.core.first(arglist__19974);
var type_fs = cljs.core.rest(arglist__19974);
return listen_once_BANG___delegate(elem_sel,type_fs);
});
listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_once_BANG___delegate;
return listen_once_BANG_;
})()
;
