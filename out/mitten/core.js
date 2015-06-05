// Compiled by ClojureScript 0.0-2850 {:elide-asserts true, :static-fns true}
goog.provide('mitten.core');
goog.require('cljs.core');
goog.require('dommy.core');
goog.require('markdown.core');
goog.require('ajax.core');
goog.require('om.dom');
goog.require('om.core');
if(typeof mitten.core.app_state !== 'undefined'){
} else {
mitten.core.app_state = (function (){var G__19137 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$137,cljs.core.PersistentVector.EMPTY,cljs.core.constant$keyword$138,cljs.core.PersistentVector.EMPTY], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19137) : cljs.core.atom.call(null,G__19137));
})();
}
mitten.core.url = "https://api.github.com/repos/high-5/discussion/issues/";
mitten.core.get_link_data = (function get_link_data(link){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$139,dommy.core.text(link),cljs.core.constant$keyword$140,link.href], null);
});
mitten.core.md__GT_links = (function md__GT_links(md){
var el = document.createElement("div");
(el["innerHTML"] = markdown.core.md__GT_html(md));

return cljs.core.map.cljs$core$IFn$_invoke$arity$2(mitten.core.get_link_data,dommy.utils.__GT_Array(el.getElementsByTagName("a")));
});
mitten.core.link_view = (function link_view(p__19138,owner){
var map__19153 = p__19138;
var map__19153__$1 = ((cljs.core.seq_QMARK_(map__19153))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19153):map__19153);
var link_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19153__$1,cljs.core.constant$keyword$141);
var user = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19153__$1,cljs.core.constant$keyword$142);
if(typeof mitten.core.t19154 !== 'undefined'){
} else {

/**
* @constructor
*/
mitten.core.t19154 = (function (user,link_data,map__19153,owner,p__19138,link_view,meta19155){
this.user = user;
this.link_data = link_data;
this.map__19153 = map__19153;
this.owner = owner;
this.p__19138 = p__19138;
this.link_view = link_view;
this.meta19155 = meta19155;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mitten.core.t19154.prototype.om$core$IRender$ = true;

mitten.core.t19154.prototype.om$core$IRender$render$arity$1 = ((function (map__19153,map__19153__$1,link_data,user){
return (function (this$){
var self__ = this;
var this$__$1 = this;
var G__19157 = null;
var G__19158 = (function (){var G__19161 = {"href": cljs.core.constant$keyword$140.cljs$core$IFn$_invoke$arity$1(self__.link_data)};
var G__19162 = cljs.core.constant$keyword$139.cljs$core$IFn$_invoke$arity$1(self__.link_data);
return React.DOM.a(G__19161,G__19162);
})();
var G__19159 = (function (){var G__19163 = null;
var G__19164 = " - ";
return React.DOM.span(G__19163,G__19164);
})();
var G__19160 = (function (){var G__19165 = {"href": cljs.core.constant$keyword$143.cljs$core$IFn$_invoke$arity$1(self__.user)};
var G__19166 = cljs.core.constant$keyword$144.cljs$core$IFn$_invoke$arity$1(self__.user);
return React.DOM.a(G__19165,G__19166);
})();
return React.DOM.li(G__19157,G__19158,G__19159,G__19160);
});})(map__19153,map__19153__$1,link_data,user))
;

mitten.core.t19154.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__19153,map__19153__$1,link_data,user){
return (function (_19156){
var self__ = this;
var _19156__$1 = this;
return self__.meta19155;
});})(map__19153,map__19153__$1,link_data,user))
;

mitten.core.t19154.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__19153,map__19153__$1,link_data,user){
return (function (_19156,meta19155__$1){
var self__ = this;
var _19156__$1 = this;
return (new mitten.core.t19154(self__.user,self__.link_data,self__.map__19153,self__.owner,self__.p__19138,self__.link_view,meta19155__$1));
});})(map__19153,map__19153__$1,link_data,user))
;

mitten.core.t19154.cljs$lang$type = true;

mitten.core.t19154.cljs$lang$ctorStr = "mitten.core/t19154";

mitten.core.t19154.cljs$lang$ctorPrWriter = ((function (map__19153,map__19153__$1,link_data,user){
return (function (this__4361__auto__,writer__4362__auto__,opt__4363__auto__){
return cljs.core._write(writer__4362__auto__,"mitten.core/t19154");
});})(map__19153,map__19153__$1,link_data,user))
;

mitten.core.__GT_t19154 = ((function (map__19153,map__19153__$1,link_data,user){
return (function __GT_t19154(user__$1,link_data__$1,map__19153__$2,owner__$1,p__19138__$1,link_view__$1,meta19155){
return (new mitten.core.t19154(user__$1,link_data__$1,map__19153__$2,owner__$1,p__19138__$1,link_view__$1,meta19155));
});})(map__19153,map__19153__$1,link_data,user))
;

}

return (new mitten.core.t19154(user,link_data,map__19153__$1,owner,p__19138,link_view,cljs.core.PersistentArrayMap.EMPTY));
});
mitten.core.resource_view = (function resource_view(p__19168,owner){
var map__19173 = p__19168;
var map__19173__$1 = ((cljs.core.seq_QMARK_(map__19173))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19173):map__19173);
var resource = map__19173__$1;
var user = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19173__$1,cljs.core.constant$keyword$142);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19173__$1,cljs.core.constant$keyword$145);
if(typeof mitten.core.t19174 !== 'undefined'){
} else {

/**
* @constructor
*/
mitten.core.t19174 = (function (body,user,resource,map__19173,owner,p__19168,resource_view,meta19175){
this.body = body;
this.user = user;
this.resource = resource;
this.map__19173 = map__19173;
this.owner = owner;
this.p__19168 = p__19168;
this.resource_view = resource_view;
this.meta19175 = meta19175;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mitten.core.t19174.prototype.om$core$IRender$ = true;

mitten.core.t19174.prototype.om$core$IRender$render$arity$1 = ((function (map__19173,map__19173__$1,resource,user,body){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.ul,null,om.core.build_all.cljs$core$IFn$_invoke$arity$2(mitten.core.link_view,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (this$__$1,map__19173,map__19173__$1,resource,user,body){
return (function (p1__19167_SHARP_){
return cljs.core.zipmap(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$142,cljs.core.constant$keyword$141], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.user,p1__19167_SHARP_], null));
});})(this$__$1,map__19173,map__19173__$1,resource,user,body))
,mitten.core.md__GT_links(self__.body))));
});})(map__19173,map__19173__$1,resource,user,body))
;

mitten.core.t19174.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__19173,map__19173__$1,resource,user,body){
return (function (_19176){
var self__ = this;
var _19176__$1 = this;
return self__.meta19175;
});})(map__19173,map__19173__$1,resource,user,body))
;

mitten.core.t19174.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__19173,map__19173__$1,resource,user,body){
return (function (_19176,meta19175__$1){
var self__ = this;
var _19176__$1 = this;
return (new mitten.core.t19174(self__.body,self__.user,self__.resource,self__.map__19173,self__.owner,self__.p__19168,self__.resource_view,meta19175__$1));
});})(map__19173,map__19173__$1,resource,user,body))
;

mitten.core.t19174.cljs$lang$type = true;

mitten.core.t19174.cljs$lang$ctorStr = "mitten.core/t19174";

mitten.core.t19174.cljs$lang$ctorPrWriter = ((function (map__19173,map__19173__$1,resource,user,body){
return (function (this__4361__auto__,writer__4362__auto__,opt__4363__auto__){
return cljs.core._write(writer__4362__auto__,"mitten.core/t19174");
});})(map__19173,map__19173__$1,resource,user,body))
;

mitten.core.__GT_t19174 = ((function (map__19173,map__19173__$1,resource,user,body){
return (function __GT_t19174(body__$1,user__$1,resource__$1,map__19173__$2,owner__$1,p__19168__$1,resource_view__$1,meta19175){
return (new mitten.core.t19174(body__$1,user__$1,resource__$1,map__19173__$2,owner__$1,p__19168__$1,resource_view__$1,meta19175));
});})(map__19173,map__19173__$1,resource,user,body))
;

}

return (new mitten.core.t19174(body,user,resource,map__19173__$1,owner,p__19168,resource_view,cljs.core.PersistentArrayMap.EMPTY));
});
mitten.core.main = (function main(){
return om.core.root((function (app,owner){
if(typeof mitten.core.t19189 !== 'undefined'){
} else {

/**
* @constructor
*/
mitten.core.t19189 = (function (owner,app,main,meta19190){
this.owner = owner;
this.app = app;
this.main = main;
this.meta19190 = meta19190;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mitten.core.t19189.prototype.om$core$IRender$ = true;

mitten.core.t19189.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__19192 = {"className": "links"};
var G__19193 = (function (){var G__19197 = null;
var G__19198 = "Books";
return React.DOM.h2(G__19197,G__19198);
})();
var G__19194 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.div,{"className": "books"},om.core.build_all.cljs$core$IFn$_invoke$arity$2(mitten.core.resource_view,cljs.core.constant$keyword$137.cljs$core$IFn$_invoke$arity$1(self__.app)));
var G__19195 = (function (){var G__19199 = null;
var G__19200 = "Projects";
return React.DOM.h2(G__19199,G__19200);
})();
var G__19196 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.div,{"className": "projects"},om.core.build_all.cljs$core$IFn$_invoke$arity$2(mitten.core.resource_view,cljs.core.constant$keyword$138.cljs$core$IFn$_invoke$arity$1(self__.app)));
return React.DOM.section(G__19192,G__19193,G__19194,G__19195,G__19196);
});

mitten.core.t19189.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19191){
var self__ = this;
var _19191__$1 = this;
return self__.meta19190;
});

mitten.core.t19189.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19191,meta19190__$1){
var self__ = this;
var _19191__$1 = this;
return (new mitten.core.t19189(self__.owner,self__.app,self__.main,meta19190__$1));
});

mitten.core.t19189.cljs$lang$type = true;

mitten.core.t19189.cljs$lang$ctorStr = "mitten.core/t19189";

mitten.core.t19189.cljs$lang$ctorPrWriter = (function (this__4361__auto__,writer__4362__auto__,opt__4363__auto__){
return cljs.core._write(writer__4362__auto__,"mitten.core/t19189");
});

mitten.core.__GT_t19189 = (function __GT_t19189(owner__$1,app__$1,main__$1,meta19190){
return (new mitten.core.t19189(owner__$1,app__$1,main__$1,meta19190));
});

}

return (new mitten.core.t19189(owner,app,main,cljs.core.PersistentArrayMap.EMPTY));
}),mitten.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$122,document.getElementById("app")], null));
});
mitten.core.get_issue = (function get_issue(issue_number,issue_key){
var uri = [cljs.core.str(mitten.core.url),cljs.core.str(issue_number),cljs.core.str("/comments")].join('');
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(uri,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$59,((function (uri){
return (function (p1__19201_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mitten.core.app_state,cljs.core.assoc,issue_key,p1__19201_SHARP_);
});})(uri))
,cljs.core.constant$keyword$43,cljs.core.constant$keyword$38,cljs.core.constant$keyword$41,true], null)], 0));
});
mitten.core.get_issue((1),cljs.core.constant$keyword$137);
mitten.core.get_issue((2),cljs.core.constant$keyword$138);
