// Compiled by ClojureScript 0.0-2850 {:elide-asserts true, :static-fns true}
goog.provide('ajax.core');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cognitect.transit');
goog.require('goog.net.XhrIo');
goog.require('goog.net.XhrManager');
goog.require('goog.json');
goog.require('goog.Uri.QueryData');
goog.require('goog.net.EventType');
goog.require('goog.events');
goog.require('goog.structs');
goog.require('goog.json.Serializer');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('goog.net.ErrorCode');

ajax.core.AjaxImpl = (function (){var obj21461 = {};
return obj21461;
})();

ajax.core._js_ajax_request = (function _js_ajax_request(this$,uri,method,body,headers,handler,opts){
if((function (){var and__3762__auto__ = this$;
if(and__3762__auto__){
return this$.ajax$core$AjaxImpl$_js_ajax_request$arity$7;
} else {
return and__3762__auto__;
}
})()){
return this$.ajax$core$AjaxImpl$_js_ajax_request$arity$7(this$,uri,method,body,headers,handler,opts);
} else {
var x__4418__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3774__auto__ = (ajax.core._js_ajax_request[(function (){var G__21465 = x__4418__auto__;
return goog.typeOf(G__21465);
})()]);
if(or__3774__auto__){
return or__3774__auto__;
} else {
var or__3774__auto____$1 = (ajax.core._js_ajax_request["_"]);
if(or__3774__auto____$1){
return or__3774__auto____$1;
} else {
throw cljs.core.missing_protocol("AjaxImpl.-js-ajax-request",this$);
}
}
})().call(null,this$,uri,method,body,headers,handler,opts);
}
});


ajax.core.AjaxRequest = (function (){var obj21467 = {};
return obj21467;
})();

ajax.core._abort = (function _abort(this$){
if((function (){var and__3762__auto__ = this$;
if(and__3762__auto__){
return this$.ajax$core$AjaxRequest$_abort$arity$1;
} else {
return and__3762__auto__;
}
})()){
return this$.ajax$core$AjaxRequest$_abort$arity$1(this$);
} else {
var x__4418__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3774__auto__ = (ajax.core._abort[(function (){var G__21471 = x__4418__auto__;
return goog.typeOf(G__21471);
})()]);
if(or__3774__auto__){
return or__3774__auto__;
} else {
var or__3774__auto____$1 = (ajax.core._abort["_"]);
if(or__3774__auto____$1){
return or__3774__auto____$1;
} else {
throw cljs.core.missing_protocol("AjaxRequest.-abort",this$);
}
}
})().call(null,this$);
}
});


ajax.core.DirectlySubmittable = (function (){var obj21473 = {};
return obj21473;
})();


ajax.core.AjaxResponse = (function (){var obj21475 = {};
return obj21475;
})();

ajax.core._status = (function _status(this$){
if((function (){var and__3762__auto__ = this$;
if(and__3762__auto__){
return this$.ajax$core$AjaxResponse$_status$arity$1;
} else {
return and__3762__auto__;
}
})()){
return this$.ajax$core$AjaxResponse$_status$arity$1(this$);
} else {
var x__4418__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3774__auto__ = (ajax.core._status[(function (){var G__21479 = x__4418__auto__;
return goog.typeOf(G__21479);
})()]);
if(or__3774__auto__){
return or__3774__auto__;
} else {
var or__3774__auto____$1 = (ajax.core._status["_"]);
if(or__3774__auto____$1){
return or__3774__auto____$1;
} else {
throw cljs.core.missing_protocol("AjaxResponse.-status",this$);
}
}
})().call(null,this$);
}
});

ajax.core._status_text = (function _status_text(this$){
if((function (){var and__3762__auto__ = this$;
if(and__3762__auto__){
return this$.ajax$core$AjaxResponse$_status_text$arity$1;
} else {
return and__3762__auto__;
}
})()){
return this$.ajax$core$AjaxResponse$_status_text$arity$1(this$);
} else {
var x__4418__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3774__auto__ = (ajax.core._status_text[(function (){var G__21483 = x__4418__auto__;
return goog.typeOf(G__21483);
})()]);
if(or__3774__auto__){
return or__3774__auto__;
} else {
var or__3774__auto____$1 = (ajax.core._status_text["_"]);
if(or__3774__auto____$1){
return or__3774__auto____$1;
} else {
throw cljs.core.missing_protocol("AjaxResponse.-status-text",this$);
}
}
})().call(null,this$);
}
});

ajax.core._body = (function _body(this$){
if((function (){var and__3762__auto__ = this$;
if(and__3762__auto__){
return this$.ajax$core$AjaxResponse$_body$arity$1;
} else {
return and__3762__auto__;
}
})()){
return this$.ajax$core$AjaxResponse$_body$arity$1(this$);
} else {
var x__4418__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3774__auto__ = (ajax.core._body[(function (){var G__21487 = x__4418__auto__;
return goog.typeOf(G__21487);
})()]);
if(or__3774__auto__){
return or__3774__auto__;
} else {
var or__3774__auto____$1 = (ajax.core._body["_"]);
if(or__3774__auto____$1){
return or__3774__auto____$1;
} else {
throw cljs.core.missing_protocol("AjaxResponse.-body",this$);
}
}
})().call(null,this$);
}
});

ajax.core._get_response_header = (function _get_response_header(this$,header){
if((function (){var and__3762__auto__ = this$;
if(and__3762__auto__){
return this$.ajax$core$AjaxResponse$_get_response_header$arity$2;
} else {
return and__3762__auto__;
}
})()){
return this$.ajax$core$AjaxResponse$_get_response_header$arity$2(this$,header);
} else {
var x__4418__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3774__auto__ = (ajax.core._get_response_header[(function (){var G__21491 = x__4418__auto__;
return goog.typeOf(G__21491);
})()]);
if(or__3774__auto__){
return or__3774__auto__;
} else {
var or__3774__auto____$1 = (ajax.core._get_response_header["_"]);
if(or__3774__auto____$1){
return or__3774__auto____$1;
} else {
throw cljs.core.missing_protocol("AjaxResponse.-get-response-header",this$);
}
}
})().call(null,this$,header);
}
});

ajax.core._was_aborted = (function _was_aborted(this$){
if((function (){var and__3762__auto__ = this$;
if(and__3762__auto__){
return this$.ajax$core$AjaxResponse$_was_aborted$arity$1;
} else {
return and__3762__auto__;
}
})()){
return this$.ajax$core$AjaxResponse$_was_aborted$arity$1(this$);
} else {
var x__4418__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3774__auto__ = (ajax.core._was_aborted[(function (){var G__21495 = x__4418__auto__;
return goog.typeOf(G__21495);
})()]);
if(or__3774__auto__){
return or__3774__auto__;
} else {
var or__3774__auto____$1 = (ajax.core._was_aborted["_"]);
if(or__3774__auto____$1){
return or__3774__auto____$1;
} else {
throw cljs.core.missing_protocol("AjaxResponse.-was-aborted",this$);
}
}
})().call(null,this$);
}
});

if(typeof FormData !== 'undefined'){
FormData.prototype.ajax$core$DirectlySubmittable$ = true;
} else {
}

if(typeof ArrayBufferView !== 'undefined'){
ArrayBufferView.prototype.ajax$core$DirectlySubmittable$ = true;
} else {
}

if(typeof Blob !== 'undefined'){
Blob.prototype.ajax$core$DirectlySubmittable$ = true;
} else {
}

if(typeof Document !== 'undefined'){
Document.prototype.ajax$core$DirectlySubmittable$ = true;
} else {
}
ajax.core.submittable_QMARK_ = (function submittable_QMARK_(params){
var or__3774__auto__ = (function (){var G__21499 = params;
if(G__21499){
var bit__4455__auto__ = null;
if(cljs.core.truth_((function (){var or__3774__auto__ = bit__4455__auto__;
if(cljs.core.truth_(or__3774__auto__)){
return or__3774__auto__;
} else {
return G__21499.ajax$core$DirectlySubmittable$;
}
})())){
return true;
} else {
if((!G__21499.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(ajax.core.DirectlySubmittable,G__21499);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(ajax.core.DirectlySubmittable,G__21499);
}
})();
if(or__3774__auto__){
return or__3774__auto__;
} else {
return typeof params === 'string';
}
});
goog.net.XhrIo.prototype.ajax$core$AjaxResponse$ = true;

goog.net.XhrIo.prototype.ajax$core$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getResponseText();
});

goog.net.XhrIo.prototype.ajax$core$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getStatus();
});

goog.net.XhrIo.prototype.ajax$core$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getStatusText();
});

goog.net.XhrIo.prototype.ajax$core$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

goog.net.XhrIo.prototype.ajax$core$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});

goog.net.XhrIo.prototype.ajax$core$AjaxRequest$ = true;

goog.net.XhrIo.prototype.ajax$core$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort(goog.net.ErrorCode.ABORT);
});

goog.net.XhrIo.prototype.ajax$core$AjaxImpl$ = true;

goog.net.XhrIo.prototype.ajax$core$AjaxImpl$_js_ajax_request$arity$7 = (function (this$,uri,method,body,headers,handler,p__21501){
var map__21502 = p__21501;
var map__21502__$1 = ((cljs.core.seq_QMARK_(map__21502))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21502):map__21502);
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21502__$1,cljs.core.constant$keyword$22,false);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21502__$1,cljs.core.constant$keyword$23,(0));
var this$__$1 = this;
var G__21503 = this$__$1;
var G__21504_21508 = G__21503;
var G__21505_21509 = goog.net.EventType.COMPLETE;
var G__21506_21510 = ((function (G__21504_21508,G__21505_21509,G__21503,this$__$1,map__21502,map__21502__$1,with_credentials,timeout){
return (function (p1__21500_SHARP_){
var G__21507 = p1__21500_SHARP_.target;
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(G__21507) : handler.call(null,G__21507));
});})(G__21504_21508,G__21505_21509,G__21503,this$__$1,map__21502,map__21502__$1,with_credentials,timeout))
;
goog.events.listen(G__21504_21508,G__21505_21509,G__21506_21510);

G__21503.setTimeoutInterval(timeout);

G__21503.setWithCredentials(with_credentials);

G__21503.send(uri,method,body,cljs.core.clj__GT_js(headers));

return G__21503;
});
ajax.core.ready_state = (function ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),cljs.core.constant$keyword$24,(1),cljs.core.constant$keyword$25,(2),cljs.core.constant$keyword$26,(3),cljs.core.constant$keyword$27,(4),cljs.core.constant$keyword$28], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$core$AjaxResponse$ = true;

XMLHttpRequest.prototype.ajax$core$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$core$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$core$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$core$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$core$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
});

XMLHttpRequest.prototype.ajax$core$AjaxRequest$ = true;

XMLHttpRequest.prototype.ajax$core$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$core$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$core$AjaxImpl$_js_ajax_request$arity$7 = (function (this$,uri,method,body,headers,handler,p__21512){
var map__21513 = p__21512;
var map__21513__$1 = ((cljs.core.seq_QMARK_(map__21513))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21513):map__21513);
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21513__$1,cljs.core.constant$keyword$22,false);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21513__$1,cljs.core.constant$keyword$23,(0));
var this$__$1 = this;
this$__$1.timeout = timeout;

this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__21513,map__21513__$1,with_credentials,timeout){
return (function (p1__21511_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$28,ajax.core.ready_state(p1__21511_SHARP_))){
var G__21514 = this$__$1;
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(G__21514) : handler.call(null,G__21514));
} else {
return null;
}
});})(this$__$1,map__21513,map__21513__$1,with_credentials,timeout))
;

var G__21515 = this$__$1;
G__21515.open(method,uri,true);

var t_21522 = G__21515;
var t_21523__$1 = (function (){var seq__21516 = cljs.core.seq(headers);
var chunk__21517 = null;
var count__21518 = (0);
var i__21519 = (0);
while(true){
if((i__21519 < count__21518)){
var vec__21520 = chunk__21517.cljs$core$IIndexed$_nth$arity$2(null,i__21519);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21520,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21520,(1),null);
t_21522.setRequestHeader(k,v);

var G__21524 = seq__21516;
var G__21525 = chunk__21517;
var G__21526 = count__21518;
var G__21527 = (i__21519 + (1));
seq__21516 = G__21524;
chunk__21517 = G__21525;
count__21518 = G__21526;
i__21519 = G__21527;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__21516);
if(temp__4126__auto__){
var seq__21516__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21516__$1)){
var c__4561__auto__ = cljs.core.chunk_first(seq__21516__$1);
var G__21528 = cljs.core.chunk_rest(seq__21516__$1);
var G__21529 = c__4561__auto__;
var G__21530 = cljs.core.count(c__4561__auto__);
var G__21531 = (0);
seq__21516 = G__21528;
chunk__21517 = G__21529;
count__21518 = G__21530;
i__21519 = G__21531;
continue;
} else {
var vec__21521 = cljs.core.first(seq__21516__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21521,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21521,(1),null);
t_21522.setRequestHeader(k,v);

var G__21532 = cljs.core.next(seq__21516__$1);
var G__21533 = null;
var G__21534 = (0);
var G__21535 = (0);
seq__21516 = G__21532;
chunk__21517 = G__21533;
count__21518 = G__21534;
i__21519 = G__21535;
continue;
}
} else {
return null;
}
}
break;
}
})();

G__21515.send((function (){var or__3774__auto__ = body;
if(cljs.core.truth_(or__3774__auto__)){
return or__3774__auto__;
} else {
return "";
}
})());

return G__21515;
});
goog.net.XhrManager.prototype.ajax$core$AjaxImpl$ = true;

goog.net.XhrManager.prototype.ajax$core$AjaxImpl$_js_ajax_request$arity$7 = (function (this$,uri,method,body,headers,handler,p__21536){
var map__21537 = p__21536;
var map__21537__$1 = ((cljs.core.seq_QMARK_(map__21537))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21537):map__21537);
var max_retries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21537__$1,cljs.core.constant$keyword$29);
var priority = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21537__$1,cljs.core.constant$keyword$30);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21537__$1,cljs.core.constant$keyword$23);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21537__$1,cljs.core.constant$keyword$31);
var this$__$1 = this;
return this$__$1.send(id,uri,method,body,cljs.core.clj__GT_js(headers),priority,handler,max_retries);
});
ajax.core.abort = (function abort(this$){
return ajax.core._abort(this$);
});
ajax.core.success_QMARK_ = (function success_QMARK_(status){
return cljs.core.some(cljs.core.PersistentHashSet.fromArray([status], true),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(201),(202),(204),(205),(206)], null));
});
ajax.core.read_edn = (function read_edn(xhrio){
return cljs.reader.read_string(ajax.core._body(xhrio));
});
ajax.core.edn_response_format = (function() {
var edn_response_format = null;
var edn_response_format__0 = (function (){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$32,ajax.core.read_edn,cljs.core.constant$keyword$33,"EDN",cljs.core.constant$keyword$34,"application/edn"], null);
});
var edn_response_format__1 = (function (opts){
return edn_response_format.cljs$core$IFn$_invoke$arity$0();
});
edn_response_format = function(opts){
switch(arguments.length){
case 0:
return edn_response_format__0.call(this);
case 1:
return edn_response_format__1.call(this,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
edn_response_format.cljs$core$IFn$_invoke$arity$0 = edn_response_format__0;
edn_response_format.cljs$core$IFn$_invoke$arity$1 = edn_response_format__1;
return edn_response_format;
})()
;
ajax.core.edn_request_format = (function edn_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$35,cljs.core.pr_str,cljs.core.constant$keyword$34,"application/edn"], null);
});
ajax.core.transit_content_type = "application/transit+json; charset=utf-8";
ajax.core.transit_write = (function() {
var transit_write = null;
var transit_write__1 = (function (writer){
return (function (params){
return cognitect.transit.write(writer,params);
});
});
var transit_write__2 = (function (writer,params){
return cognitect.transit.write(writer,params);
});
transit_write = function(writer,params){
switch(arguments.length){
case 1:
return transit_write__1.call(this,writer);
case 2:
return transit_write__2.call(this,writer,params);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
transit_write.cljs$core$IFn$_invoke$arity$1 = transit_write__1;
transit_write.cljs$core$IFn$_invoke$arity$2 = transit_write__2;
return transit_write;
})()
;
ajax.core.transit_request_format = (function() {
var transit_request_format = null;
var transit_request_format__0 = (function (){
return transit_request_format.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
});
var transit_request_format__1 = (function (p__21538){
var map__21541 = p__21538;
var map__21541__$1 = ((cljs.core.seq_QMARK_(map__21541))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21541):map__21541);
var opts = map__21541__$1;
var writer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21541__$1,cljs.core.constant$keyword$36);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21541__$1,cljs.core.constant$keyword$37);
var writer__$1 = (function (){var or__3774__auto__ = writer;
if(cljs.core.truth_(or__3774__auto__)){
return or__3774__auto__;
} else {
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((function (){var or__3774__auto____$1 = type;
if(cljs.core.truth_(or__3774__auto____$1)){
return or__3774__auto____$1;
} else {
return cljs.core.constant$keyword$38;
}
})(),opts);
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$35,ajax.core.transit_write.cljs$core$IFn$_invoke$arity$1(writer__$1),cljs.core.constant$keyword$34,ajax.core.transit_content_type], null);
});
transit_request_format = function(p__21538){
switch(arguments.length){
case 0:
return transit_request_format__0.call(this);
case 1:
return transit_request_format__1.call(this,p__21538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
transit_request_format.cljs$core$IFn$_invoke$arity$0 = transit_request_format__0;
transit_request_format.cljs$core$IFn$_invoke$arity$1 = transit_request_format__1;
return transit_request_format;
})()
;
ajax.core.transit_read = (function() {
var transit_read = null;
var transit_read__1 = (function (reader){
return (function (raw,xhrio){
var text = ajax.core._body(xhrio);
var data = cognitect.transit.read(reader,text);
if(cljs.core.truth_(raw)){
return data;
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(data);
}
});
});
var transit_read__2 = (function (reader,raw){
return (function (xhrio){
var text = ajax.core._body(xhrio);
var data = cognitect.transit.read(reader,text);
if(cljs.core.truth_(raw)){
return data;
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(data);
}
});
});
var transit_read__3 = (function (reader,raw,xhrio){
var text = ajax.core._body(xhrio);
var data = cognitect.transit.read(reader,text);
if(cljs.core.truth_(raw)){
return data;
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(data);
}
});
transit_read = function(reader,raw,xhrio){
switch(arguments.length){
case 1:
return transit_read__1.call(this,reader);
case 2:
return transit_read__2.call(this,reader,raw);
case 3:
return transit_read__3.call(this,reader,raw,xhrio);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
transit_read.cljs$core$IFn$_invoke$arity$1 = transit_read__1;
transit_read.cljs$core$IFn$_invoke$arity$2 = transit_read__2;
transit_read.cljs$core$IFn$_invoke$arity$3 = transit_read__3;
return transit_read;
})()
;
ajax.core.transit_response_format = (function() {
var transit_response_format = null;
var transit_response_format__0 = (function (){
return transit_response_format.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
});
var transit_response_format__1 = (function (p__21542){
var map__21545 = p__21542;
var map__21545__$1 = ((cljs.core.seq_QMARK_(map__21545))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21545):map__21545);
var opts = map__21545__$1;
var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21545__$1,cljs.core.constant$keyword$39);
var reader = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21545__$1,cljs.core.constant$keyword$40);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21545__$1,cljs.core.constant$keyword$37);
var reader__$1 = (function (){var or__3774__auto__ = reader;
if(cljs.core.truth_(or__3774__auto__)){
return or__3774__auto__;
} else {
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((function (){var or__3774__auto____$1 = type;
if(cljs.core.truth_(or__3774__auto____$1)){
return or__3774__auto____$1;
} else {
return cljs.core.constant$keyword$38;
}
})(),opts);
}
})();
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$32,ajax.core.transit_read.cljs$core$IFn$_invoke$arity$2(reader__$1,raw),cljs.core.constant$keyword$33,"Transit",cljs.core.constant$keyword$34,"application/transit+json"], null);
});
transit_response_format = function(p__21542){
switch(arguments.length){
case 0:
return transit_response_format__0.call(this);
case 1:
return transit_response_format__1.call(this,p__21542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
transit_response_format.cljs$core$IFn$_invoke$arity$0 = transit_response_format__0;
transit_response_format.cljs$core$IFn$_invoke$arity$1 = transit_response_format__1;
return transit_response_format;
})()
;
ajax.core.params_to_str = (function params_to_str(params){
if(cljs.core.truth_(params)){
return (function (){var G__21547 = (new goog.structs.Map(cljs.core.clj__GT_js(params)));
return goog.Uri.QueryData.createFromMap(G__21547);
})().toString();
} else {
return null;
}
});
ajax.core.url_request_format = (function url_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$35,ajax.core.params_to_str,cljs.core.constant$keyword$34,"application/x-www-form-urlencoded"], null);
});
ajax.core.raw_response_format = (function() {
var raw_response_format = null;
var raw_response_format__0 = (function (){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$32,ajax.core._body,cljs.core.constant$keyword$33,"raw text",cljs.core.constant$keyword$34,"*/*"], null);
});
var raw_response_format__1 = (function (opts){
return raw_response_format.cljs$core$IFn$_invoke$arity$0();
});
raw_response_format = function(opts){
switch(arguments.length){
case 0:
return raw_response_format__0.call(this);
case 1:
return raw_response_format__1.call(this,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
raw_response_format.cljs$core$IFn$_invoke$arity$0 = raw_response_format__0;
raw_response_format.cljs$core$IFn$_invoke$arity$1 = raw_response_format__1;
return raw_response_format;
})()
;
ajax.core.write_json = (function write_json(data){
return (new goog.json.Serializer()).serialize(cljs.core.clj__GT_js(data));
});
ajax.core.json_request_format = (function json_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$35,ajax.core.write_json,cljs.core.constant$keyword$34,"application/json"], null);
});
ajax.core.json_read = (function() {
var json_read = null;
var json_read__1 = (function (prefix){
return (function (raw,keywords_QMARK_,xhrio){
var text = ajax.core._body(xhrio);
var text__$1 = (cljs.core.truth_((function (){var and__3762__auto__ = prefix;
if(cljs.core.truth_(and__3762__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),text.indexOf(prefix));
} else {
return and__3762__auto__;
}
})())?text.substring(prefix.length()):text);
var json = (function (){var G__21555 = text__$1;
return goog.json.parse(G__21555);
})();
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(json,cljs.core.array_seq([cljs.core.constant$keyword$14,keywords_QMARK_], 0));
}
});
});
var json_read__2 = (function (prefix,raw){
return (function (keywords_QMARK_,xhrio){
var text = ajax.core._body(xhrio);
var text__$1 = (cljs.core.truth_((function (){var and__3762__auto__ = prefix;
if(cljs.core.truth_(and__3762__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),text.indexOf(prefix));
} else {
return and__3762__auto__;
}
})())?text.substring(prefix.length()):text);
var json = (function (){var G__21554 = text__$1;
return goog.json.parse(G__21554);
})();
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(json,cljs.core.array_seq([cljs.core.constant$keyword$14,keywords_QMARK_], 0));
}
});
});
var json_read__3 = (function (prefix,raw,keywords_QMARK_){
return (function (xhrio){
var text = ajax.core._body(xhrio);
var text__$1 = (cljs.core.truth_((function (){var and__3762__auto__ = prefix;
if(cljs.core.truth_(and__3762__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),text.indexOf(prefix));
} else {
return and__3762__auto__;
}
})())?text.substring(prefix.length()):text);
var json = (function (){var G__21553 = text__$1;
return goog.json.parse(G__21553);
})();
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(json,cljs.core.array_seq([cljs.core.constant$keyword$14,keywords_QMARK_], 0));
}
});
});
var json_read__4 = (function (prefix,raw,keywords_QMARK_,xhrio){
var text = ajax.core._body(xhrio);
var text__$1 = (cljs.core.truth_((function (){var and__3762__auto__ = prefix;
if(cljs.core.truth_(and__3762__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),text.indexOf(prefix));
} else {
return and__3762__auto__;
}
})())?text.substring(prefix.length()):text);
var json = (function (){var G__21552 = text__$1;
return goog.json.parse(G__21552);
})();
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(json,cljs.core.array_seq([cljs.core.constant$keyword$14,keywords_QMARK_], 0));
}
});
json_read = function(prefix,raw,keywords_QMARK_,xhrio){
switch(arguments.length){
case 1:
return json_read__1.call(this,prefix);
case 2:
return json_read__2.call(this,prefix,raw);
case 3:
return json_read__3.call(this,prefix,raw,keywords_QMARK_);
case 4:
return json_read__4.call(this,prefix,raw,keywords_QMARK_,xhrio);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
json_read.cljs$core$IFn$_invoke$arity$1 = json_read__1;
json_read.cljs$core$IFn$_invoke$arity$2 = json_read__2;
json_read.cljs$core$IFn$_invoke$arity$3 = json_read__3;
json_read.cljs$core$IFn$_invoke$arity$4 = json_read__4;
return json_read;
})()
;
/**
* Returns a JSON response format.  Options include
* :keywords? Returns the keys as keywords
* :prefix A prefix that needs to be stripped off.  This is to
* combat JSON hijacking.  If you're using JSON with GET request,
* you should think about using this.
* http://stackoverflow.com/questions/2669690/why-does-google-prepend-while1-to-their-json-responses
* http://haacked.com/archive/2009/06/24/json-hijacking.aspx
*/
ajax.core.json_response_format = (function() {
var json_response_format = null;
var json_response_format__0 = (function (){
return json_response_format.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
});
var json_response_format__1 = (function (p__21556){
var map__21559 = p__21556;
var map__21559__$1 = ((cljs.core.seq_QMARK_(map__21559))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21559):map__21559);
var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21559__$1,cljs.core.constant$keyword$39);
var keywords_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21559__$1,cljs.core.constant$keyword$41);
var prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21559__$1,cljs.core.constant$keyword$42);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$32,ajax.core.json_read.cljs$core$IFn$_invoke$arity$3(prefix,raw,keywords_QMARK_),cljs.core.constant$keyword$33,[cljs.core.str("JSON"),cljs.core.str((cljs.core.truth_(prefix)?[cljs.core.str(" prefix '"),cljs.core.str(prefix),cljs.core.str("'")].join(''):null)),cljs.core.str((cljs.core.truth_(keywords_QMARK_)?" keywordize":null))].join(''),cljs.core.constant$keyword$34,"application/json"], null);
});
json_response_format = function(p__21556){
switch(arguments.length){
case 0:
return json_response_format__0.call(this);
case 1:
return json_response_format__1.call(this,p__21556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
json_response_format.cljs$core$IFn$_invoke$arity$0 = json_response_format__0;
json_response_format.cljs$core$IFn$_invoke$arity$1 = json_response_format__1;
return json_response_format;
})()
;
ajax.core.default_formats = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [ajax.core.json_response_format,ajax.core.edn_response_format,ajax.core.transit_response_format,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/plain",ajax.core.raw_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/html",ajax.core.raw_response_format], null),ajax.core.raw_response_format], null);
ajax.core.get_format = (function() {
var get_format = null;
var get_format__1 = (function (opts){
return (function (format_entry){
if(cljs.core.vector_QMARK_(format_entry)){
return get_format.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.second(format_entry));
} else {
if(cljs.core.map_QMARK_(format_entry)){
return format_entry;
} else {
var G__21567 = opts;
return (format_entry.cljs$core$IFn$_invoke$arity$1 ? format_entry.cljs$core$IFn$_invoke$arity$1(G__21567) : format_entry.call(null,G__21567));

}
}
});
});
var get_format__2 = (function (opts,format_entry){
if(cljs.core.vector_QMARK_(format_entry)){
return get_format.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.second(format_entry));
} else {
if(cljs.core.map_QMARK_(format_entry)){
return format_entry;
} else {
var G__21566 = opts;
return (format_entry.cljs$core$IFn$_invoke$arity$1 ? format_entry.cljs$core$IFn$_invoke$arity$1(G__21566) : format_entry.call(null,G__21566));

}
}
});
get_format = function(opts,format_entry){
switch(arguments.length){
case 1:
return get_format__1.call(this,opts);
case 2:
return get_format__2.call(this,opts,format_entry);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_format.cljs$core$IFn$_invoke$arity$1 = get_format__1;
get_format.cljs$core$IFn$_invoke$arity$2 = get_format__2;
return get_format;
})()
;
ajax.core.accept_entry = (function() {
var accept_entry = null;
var accept_entry__1 = (function (opts){
return (function (format_entry){
var or__3774__auto__ = ((cljs.core.vector_QMARK_(format_entry))?cljs.core.first(format_entry):cljs.core.constant$keyword$34.cljs$core$IFn$_invoke$arity$1(ajax.core.get_format.cljs$core$IFn$_invoke$arity$2(opts,format_entry)));
if(cljs.core.truth_(or__3774__auto__)){
return or__3774__auto__;
} else {
return "*/*";
}
});
});
var accept_entry__2 = (function (opts,format_entry){
var or__3774__auto__ = ((cljs.core.vector_QMARK_(format_entry))?cljs.core.first(format_entry):cljs.core.constant$keyword$34.cljs$core$IFn$_invoke$arity$1(ajax.core.get_format.cljs$core$IFn$_invoke$arity$2(opts,format_entry)));
if(cljs.core.truth_(or__3774__auto__)){
return or__3774__auto__;
} else {
return "*/*";
}
});
accept_entry = function(opts,format_entry){
switch(arguments.length){
case 1:
return accept_entry__1.call(this,opts);
case 2:
return accept_entry__2.call(this,opts,format_entry);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
accept_entry.cljs$core$IFn$_invoke$arity$1 = accept_entry__1;
accept_entry.cljs$core$IFn$_invoke$arity$2 = accept_entry__2;
return accept_entry;
})()
;
ajax.core.detect_content_type = (function() {
var detect_content_type = null;
var detect_content_type__1 = (function (content_type){
return (function (opts,format_entry){
var accept = ajax.core.accept_entry.cljs$core$IFn$_invoke$arity$2(opts,format_entry);
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(accept,"*/*")) || ((content_type.indexOf(accept) >= (0)));
});
});
var detect_content_type__2 = (function (content_type,opts){
return (function (format_entry){
var accept = ajax.core.accept_entry.cljs$core$IFn$_invoke$arity$2(opts,format_entry);
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(accept,"*/*")) || ((content_type.indexOf(accept) >= (0)));
});
});
var detect_content_type__3 = (function (content_type,opts,format_entry){
var accept = ajax.core.accept_entry.cljs$core$IFn$_invoke$arity$2(opts,format_entry);
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(accept,"*/*")) || ((content_type.indexOf(accept) >= (0)));
});
detect_content_type = function(content_type,opts,format_entry){
switch(arguments.length){
case 1:
return detect_content_type__1.call(this,content_type);
case 2:
return detect_content_type__2.call(this,content_type,opts);
case 3:
return detect_content_type__3.call(this,content_type,opts,format_entry);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
detect_content_type.cljs$core$IFn$_invoke$arity$1 = detect_content_type__1;
detect_content_type.cljs$core$IFn$_invoke$arity$2 = detect_content_type__2;
detect_content_type.cljs$core$IFn$_invoke$arity$3 = detect_content_type__3;
return detect_content_type;
})()
;
ajax.core.get_default_format = (function get_default_format(xhrio,p__21568){
var map__21570 = p__21568;
var map__21570__$1 = ((cljs.core.seq_QMARK_(map__21570))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21570):map__21570);
var opts = map__21570__$1;
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21570__$1,cljs.core.constant$keyword$43);
var f = ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$2((function (){var or__3774__auto__ = ajax.core._get_response_header(xhrio,"Content-Type");
if(cljs.core.truth_(or__3774__auto__)){
return or__3774__auto__;
} else {
return "";
}
})(),opts);
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(f,response_format)));
});
ajax.core.detect_response_format_read = (function() {
var detect_response_format_read = null;
var detect_response_format_read__1 = (function (opts){
return (function (xhrio){
return cljs.core.constant$keyword$32.cljs$core$IFn$_invoke$arity$1(ajax.core.get_default_format(xhrio,opts)).call(null,xhrio);
});
});
var detect_response_format_read__2 = (function (opts,xhrio){
return cljs.core.constant$keyword$32.cljs$core$IFn$_invoke$arity$1(ajax.core.get_default_format(xhrio,opts)).call(null,xhrio);
});
detect_response_format_read = function(opts,xhrio){
switch(arguments.length){
case 1:
return detect_response_format_read__1.call(this,opts);
case 2:
return detect_response_format_read__2.call(this,opts,xhrio);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
detect_response_format_read.cljs$core$IFn$_invoke$arity$1 = detect_response_format_read__1;
detect_response_format_read.cljs$core$IFn$_invoke$arity$2 = detect_response_format_read__2;
return detect_response_format_read;
})()
;
ajax.core.accept_header = (function accept_header(p__21571){
var map__21573 = p__21571;
var map__21573__$1 = ((cljs.core.seq_QMARK_(map__21573))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21573):map__21573);
var opts = map__21573__$1;
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21573__$1,cljs.core.constant$keyword$43);
if(cljs.core.vector_QMARK_(response_format)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(ajax.core.accept_entry.cljs$core$IFn$_invoke$arity$1(opts),response_format));
} else {
return ajax.core.accept_entry.cljs$core$IFn$_invoke$arity$2(opts,response_format);
}
});
ajax.core.detect_response_format = (function() {
var detect_response_format = null;
var detect_response_format__0 = (function (){
return detect_response_format.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$43,ajax.core.default_formats], null));
});
var detect_response_format__1 = (function (opts){
var accept = ajax.core.accept_header(opts);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$32,ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$44,[cljs.core.str("(from "),cljs.core.str(accept),cljs.core.str(")")].join(''),cljs.core.constant$keyword$34,accept], null);
});
detect_response_format = function(opts){
switch(arguments.length){
case 0:
return detect_response_format__0.call(this);
case 1:
return detect_response_format__1.call(this,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
detect_response_format.cljs$core$IFn$_invoke$arity$0 = detect_response_format__0;
detect_response_format.cljs$core$IFn$_invoke$arity$1 = detect_response_format__1;
return detect_response_format;
})()
;
ajax.core.get_response_format = (function get_response_format(p__21575){
var map__21577 = p__21575;
var map__21577__$1 = ((cljs.core.seq_QMARK_(map__21577))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21577):map__21577);
var opts = map__21577__$1;
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21577__$1,cljs.core.constant$keyword$43);
if(cljs.core.vector_QMARK_(response_format)){
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$1(opts);
} else {
if(cljs.core.map_QMARK_(response_format)){
return response_format;
} else {
if(cljs.core.ifn_QMARK_(response_format)){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$32,response_format,cljs.core.constant$keyword$33,"custom",cljs.core.constant$keyword$34,"*/*"], null);
} else {
throw (new Error([cljs.core.str("unrecognized response format: "),cljs.core.str(response_format)].join('')));

}
}
}
});
ajax.core.exception_response = (function exception_response(e,status,p__21578,xhrio){
var map__21580 = p__21578;
var map__21580__$1 = ((cljs.core.seq_QMARK_(map__21580))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21580):map__21580);
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21580__$1,cljs.core.constant$keyword$33);
var response = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$45,status,cljs.core.constant$keyword$46,cljs.core.constant$keyword$48,cljs.core.constant$keyword$47,null], null);
var status_text = [cljs.core.str(e.message),cljs.core.str("  Format should have been "),cljs.core.str(description)].join('');
var parse_error = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.constant$keyword$49,status_text,cljs.core.array_seq([cljs.core.constant$keyword$46,cljs.core.constant$keyword$50,cljs.core.constant$keyword$51,ajax.core._body(xhrio)], 0));
if(cljs.core.truth_(ajax.core.success_QMARK_(status))){
return parse_error;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.constant$keyword$49,ajax.core._status_text(xhrio),cljs.core.array_seq([cljs.core.constant$keyword$52,parse_error], 0));
}
});
/**
* @param {...*} var_args
*/
ajax.core.fail = (function() { 
var fail__delegate = function (status,status_text,failure,params){
var response = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$45,status,cljs.core.constant$keyword$49,status_text,cljs.core.constant$keyword$46,failure], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,response,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),params)))], null);
};
var fail = function (status,status_text,failure,var_args){
var params = null;
if (arguments.length > 3) {
var G__21581__i = 0, G__21581__a = new Array(arguments.length -  3);
while (G__21581__i < G__21581__a.length) {G__21581__a[G__21581__i] = arguments[G__21581__i + 3]; ++G__21581__i;}
  params = new cljs.core.IndexedSeq(G__21581__a,0);
} 
return fail__delegate.call(this,status,status_text,failure,params);};
fail.cljs$lang$maxFixedArity = 3;
fail.cljs$lang$applyTo = (function (arglist__21582){
var status = cljs.core.first(arglist__21582);
arglist__21582 = cljs.core.next(arglist__21582);
var status_text = cljs.core.first(arglist__21582);
arglist__21582 = cljs.core.next(arglist__21582);
var failure = cljs.core.first(arglist__21582);
var params = cljs.core.rest(arglist__21582);
return fail__delegate(status,status_text,failure,params);
});
fail.cljs$core$IFn$_invoke$arity$variadic = fail__delegate;
return fail;
})()
;
ajax.core.interpret_response = (function interpret_response(p__21583,xhrio){
var map__21596 = p__21583;
var map__21596__$1 = ((cljs.core.seq_QMARK_(map__21596))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21596):map__21596);
var format = map__21596__$1;
var read = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21596__$1,cljs.core.constant$keyword$32);
try{var status = ajax.core._status(xhrio);
var fail = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(ajax.core.fail,status);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),status)){
if(cljs.core.truth_(ajax.core._was_aborted(xhrio))){
var G__21598 = "Request aborted by client.";
var G__21599 = cljs.core.constant$keyword$54;
return (fail.cljs$core$IFn$_invoke$arity$2 ? fail.cljs$core$IFn$_invoke$arity$2(G__21598,G__21599) : fail.call(null,G__21598,G__21599));
} else {
var G__21600 = "Request timed out.";
var G__21601 = cljs.core.constant$keyword$23;
return (fail.cljs$core$IFn$_invoke$arity$2 ? fail.cljs$core$IFn$_invoke$arity$2(G__21600,G__21601) : fail.call(null,G__21600,G__21601));
}
} else {
try{var response = (function (){var G__21603 = xhrio;
return (read.cljs$core$IFn$_invoke$arity$1 ? read.cljs$core$IFn$_invoke$arity$1(G__21603) : read.call(null,G__21603));
})();
if(cljs.core.truth_(ajax.core.success_QMARK_(status))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,response], null);
} else {
var G__21604 = ajax.core._status_text(xhrio);
var G__21605 = cljs.core.constant$keyword$48;
var G__21606 = cljs.core.constant$keyword$47;
var G__21607 = response;
return (fail.cljs$core$IFn$_invoke$arity$4 ? fail.cljs$core$IFn$_invoke$arity$4(G__21604,G__21605,G__21606,G__21607) : fail.call(null,G__21604,G__21605,G__21606,G__21607));
}
}catch (e21602){if((e21602 instanceof Object)){
var e = e21602;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ajax.core.exception_response(e,status,format,xhrio)], null);
} else {
throw e21602;

}
}}
}catch (e21597){if((e21597 instanceof Object)){
var e = e21597;
return ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic((0),e.message,cljs.core.constant$keyword$53,cljs.core.array_seq([cljs.core.constant$keyword$53,e], 0));
} else {
throw e21597;

}
}});
ajax.core.no_format = (function no_format(xhrio){
throw (new Error("No response format was supplied."));
});
ajax.core.uri_with_params = (function uri_with_params(uri,params){
if(cljs.core.truth_(params)){
return [cljs.core.str(uri),cljs.core.str("?"),cljs.core.str(ajax.core.params_to_str(params))].join('');
} else {
return uri;
}
});
ajax.core.get_request_format = (function get_request_format(format){
if(cljs.core.map_QMARK_(format)){
return format;
} else {
if(cljs.core.ifn_QMARK_(format)){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$35,format,cljs.core.constant$keyword$34,"text/plain"], null);
} else {
return null;

}
}
});
ajax.core.normalize_method = (function normalize_method(method){
if((method instanceof cljs.core.Keyword)){
return clojure.string.upper_case(cljs.core.name(method));
} else {
return method;
}
});
ajax.core.process_inputs = (function process_inputs(p__21608,p__21609){
var map__21614 = p__21608;
var map__21614__$1 = ((cljs.core.seq_QMARK_(map__21614))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21614):map__21614);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21614__$1,cljs.core.constant$keyword$55);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21614__$1,cljs.core.constant$keyword$56);
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21614__$1,cljs.core.constant$keyword$44);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21614__$1,cljs.core.constant$keyword$57);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21614__$1,cljs.core.constant$keyword$58);
var map__21615 = p__21609;
var map__21615__$1 = ((cljs.core.seq_QMARK_(map__21615))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21615):map__21615);
var content_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21615__$1,cljs.core.constant$keyword$34);
var headers__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, ["Accept",content_type], null),(function (){var or__3774__auto__ = headers;
if(cljs.core.truth_(or__3774__auto__)){
return or__3774__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()], 0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ajax.core.normalize_method(method),"GET")){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ajax.core.uri_with_params(uri,params),null,headers__$1], null);
} else {
var map__21616 = ajax.core.get_request_format(format);
var map__21616__$1 = ((cljs.core.seq_QMARK_(map__21616))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21616):map__21616);
var content_type__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21616__$1,cljs.core.constant$keyword$34);
var write = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21616__$1,cljs.core.constant$keyword$35);
var body = ((!((write == null)))?(function (){var G__21617 = params;
return (write.cljs$core$IFn$_invoke$arity$1 ? write.cljs$core$IFn$_invoke$arity$1(G__21617) : write.call(null,G__21617));
})():((ajax.core.submittable_QMARK_(params))?params:(function(){throw (new Error([cljs.core.str("unrecognized request format: "),cljs.core.str(format)].join('')))})()
));
var content_type__$2 = (cljs.core.truth_(content_type__$1)?new cljs.core.PersistentArrayMap(null, 1, ["Content-Type",content_type__$1], null):null);
var headers__$2 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([headers__$1,content_type__$2], 0));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,body,headers__$2], null);
}
});
ajax.core.js_handler = (function() {
var js_handler = null;
var js_handler__1 = (function (response_format){
return (function (handler,xhrio){
var response = ajax.core.interpret_response(response_format,xhrio);
var G__21623 = response;
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(G__21623) : handler.call(null,G__21623));
});
});
var js_handler__2 = (function (response_format,handler){
return (function (xhrio){
var response = ajax.core.interpret_response(response_format,xhrio);
var G__21622 = response;
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(G__21622) : handler.call(null,G__21622));
});
});
var js_handler__3 = (function (response_format,handler,xhrio){
var response = ajax.core.interpret_response(response_format,xhrio);
var G__21621 = response;
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(G__21621) : handler.call(null,G__21621));
});
js_handler = function(response_format,handler,xhrio){
switch(arguments.length){
case 1:
return js_handler__1.call(this,response_format);
case 2:
return js_handler__2.call(this,response_format,handler);
case 3:
return js_handler__3.call(this,response_format,handler,xhrio);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
js_handler.cljs$core$IFn$_invoke$arity$1 = js_handler__1;
js_handler.cljs$core$IFn$_invoke$arity$2 = js_handler__2;
js_handler.cljs$core$IFn$_invoke$arity$3 = js_handler__3;
return js_handler;
})()
;
ajax.core.base_handler = (function base_handler(response_format,p__21624){
var map__21626 = p__21624;
var map__21626__$1 = ((cljs.core.seq_QMARK_(map__21626))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21626):map__21626);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21626__$1,cljs.core.constant$keyword$59);
if(cljs.core.truth_(handler)){
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$2(response_format,handler);
} else {
throw (new Error("No ajax handler provided."));
}
});
ajax.core.ajax_request = (function ajax_request(p__21627){
var map__21630 = p__21627;
var map__21630__$1 = ((cljs.core.seq_QMARK_(map__21630))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21630):map__21630);
var opts = map__21630__$1;
var api = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21630__$1,cljs.core.constant$keyword$60);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21630__$1,cljs.core.constant$keyword$57);
var response_format = ajax.core.get_response_format(opts);
var method__$1 = ajax.core.normalize_method(method);
var vec__21631 = ajax.core.process_inputs(opts,response_format);
var uri = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21631,(0),null);
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21631,(1),null);
var headers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21631,(2),null);
var handler = ajax.core.base_handler(response_format,opts);
var api__$1 = (function (){var or__3774__auto__ = api;
if(cljs.core.truth_(or__3774__auto__)){
return or__3774__auto__;
} else {
return (new goog.net.XhrIo());
}
})();
return ajax.core._js_ajax_request(api__$1,uri,method__$1,body,headers,handler,opts);
});
ajax.core.keyword_request_format = (function keyword_request_format(format,format_params){
if(cljs.core.map_QMARK_(format)){
return format;
} else {
if(cljs.core.fn_QMARK_(format)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$35,format], null);
} else {
if((format == null)){
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1(format_params);
} else {
var G__21633 = (((format instanceof cljs.core.Keyword))?format.fqn:null);
switch (G__21633) {
case "url":
return ajax.core.url_request_format();

break;
case "raw":
return ajax.core.url_request_format();

break;
case "edn":
return ajax.core.edn_request_format();

break;
case "json":
return ajax.core.json_request_format();

break;
case "transit":
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1(format_params);

break;
default:
return null;

}

}
}
}
});
ajax.core.keyword_response_format_2 = (function keyword_response_format_2(format,format_params){
if(cljs.core.vector_QMARK_(format)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(format),keyword_response_format_2(cljs.core.second(format),format_params)], null);
} else {
if(cljs.core.map_QMARK_(format)){
return format;
} else {
if(cljs.core.fn_QMARK_(format)){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$32,format,cljs.core.constant$keyword$33,"custom"], null);
} else {
if((format == null)){
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$0();
} else {
var G__21638 = (((format instanceof cljs.core.Keyword))?format.fqn:null);
switch (G__21638) {
case "detect":
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case "raw":
return ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case "edn":
return ajax.core.edn_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case "json":
return ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(format_params);

break;
case "transit":
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$1(format_params);

break;
default:
return null;

}

}
}
}
}
});
ajax.core.keyword_response_format = (function keyword_response_format(format,format_params){
if(cljs.core.vector_QMARK_(format)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__21640_SHARP_){
return ajax.core.keyword_response_format_2(p1__21640_SHARP_,format_params);
}),format));
} else {
return ajax.core.keyword_response_format_2(format,format_params);
}
});
ajax.core.transform_handler = (function() {
var transform_handler = null;
var transform_handler__1 = (function (p__21643){
var map__21654 = p__21643;
var map__21654__$1 = ((cljs.core.seq_QMARK_(map__21654))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21654):map__21654);
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21654__$1,cljs.core.constant$keyword$61);
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21654__$1,cljs.core.constant$keyword$62);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21654__$1,cljs.core.constant$keyword$59);
return ((function (map__21654,map__21654__$1,finally$,error_handler,handler){
return (function (p__21655){
var vec__21656 = p__21655;
var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21656,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21656,(1),null);
var temp__4124__auto___21658 = (cljs.core.truth_(ok)?handler:error_handler);
if(cljs.core.truth_(temp__4124__auto___21658)){
var h_21659 = temp__4124__auto___21658;
var G__21657_21660 = result;
(h_21659.cljs$core$IFn$_invoke$arity$1 ? h_21659.cljs$core$IFn$_invoke$arity$1(G__21657_21660) : h_21659.call(null,G__21657_21660));
} else {
}

if(cljs.core.fn_QMARK_(finally$)){
return (finally$.cljs$core$IFn$_invoke$arity$0 ? finally$.cljs$core$IFn$_invoke$arity$0() : finally$.call(null));
} else {
return null;
}
});
;})(map__21654,map__21654__$1,finally$,error_handler,handler))
});
var transform_handler__2 = (function (p__21641,p__21642){
var map__21651 = p__21641;
var map__21651__$1 = ((cljs.core.seq_QMARK_(map__21651))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21651):map__21651);
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21651__$1,cljs.core.constant$keyword$61);
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21651__$1,cljs.core.constant$keyword$62);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21651__$1,cljs.core.constant$keyword$59);
var vec__21652 = p__21642;
var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21652,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21652,(1),null);
var temp__4124__auto___21661 = (cljs.core.truth_(ok)?handler:error_handler);
if(cljs.core.truth_(temp__4124__auto___21661)){
var h_21662 = temp__4124__auto___21661;
var G__21653_21663 = result;
(h_21662.cljs$core$IFn$_invoke$arity$1 ? h_21662.cljs$core$IFn$_invoke$arity$1(G__21653_21663) : h_21662.call(null,G__21653_21663));
} else {
}

if(cljs.core.fn_QMARK_(finally$)){
return (finally$.cljs$core$IFn$_invoke$arity$0 ? finally$.cljs$core$IFn$_invoke$arity$0() : finally$.call(null));
} else {
return null;
}
});
transform_handler = function(p__21641,p__21642){
switch(arguments.length){
case 1:
return transform_handler__1.call(this,p__21641);
case 2:
return transform_handler__2.call(this,p__21641,p__21642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
transform_handler.cljs$core$IFn$_invoke$arity$1 = transform_handler__1;
transform_handler.cljs$core$IFn$_invoke$arity$2 = transform_handler__2;
return transform_handler;
})()
;
ajax.core.transform_opts = (function transform_opts(p__21664){
var map__21666 = p__21664;
var map__21666__$1 = ((cljs.core.seq_QMARK_(map__21666))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21666):map__21666);
var opts = map__21666__$1;
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21666__$1,cljs.core.constant$keyword$56);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21666__$1,cljs.core.constant$keyword$43);
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21666__$1,cljs.core.constant$keyword$44);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21666__$1,cljs.core.constant$keyword$57);

var needs_format = !((ajax.core.submittable_QMARK_(params)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(method,"GET")));
var rf = (cljs.core.truth_((function (){var or__3774__auto__ = format;
if(cljs.core.truth_(or__3774__auto__)){
return or__3774__auto__;
} else {
return needs_format;
}
})())?ajax.core.keyword_request_format(format,opts):null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.constant$keyword$59,ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.array_seq([cljs.core.constant$keyword$44,rf,cljs.core.constant$keyword$43,ajax.core.keyword_response_format(response_format,opts)], 0));
});
ajax.core.easy_ajax_request = (function easy_ajax_request(uri,method,opts){
return ajax.core.ajax_request(ajax.core.transform_opts(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.constant$keyword$58,uri,cljs.core.array_seq([cljs.core.constant$keyword$57,method], 0))));
});
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the
* deserialized response
* :error-handler - the handler function for errors, should accept a
* map with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.GET = (function() { 
var GET__delegate = function (uri,opts){
var f__10841__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"GET",(((f__10841__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__10841__auto__));
};
var GET = function (uri,var_args){
var opts = null;
if (arguments.length > 1) {
var G__21667__i = 0, G__21667__a = new Array(arguments.length -  1);
while (G__21667__i < G__21667__a.length) {G__21667__a[G__21667__i] = arguments[G__21667__i + 1]; ++G__21667__i;}
  opts = new cljs.core.IndexedSeq(G__21667__a,0);
} 
return GET__delegate.call(this,uri,opts);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__21668){
var uri = cljs.core.first(arglist__21668);
var opts = cljs.core.rest(arglist__21668);
return GET__delegate(uri,opts);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the
* deserialized response
* :error-handler - the handler function for errors, should accept a
* map with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.HEAD = (function() { 
var HEAD__delegate = function (uri,opts){
var f__10841__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"HEAD",(((f__10841__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__10841__auto__));
};
var HEAD = function (uri,var_args){
var opts = null;
if (arguments.length > 1) {
var G__21669__i = 0, G__21669__a = new Array(arguments.length -  1);
while (G__21669__i < G__21669__a.length) {G__21669__a[G__21669__i] = arguments[G__21669__i + 1]; ++G__21669__i;}
  opts = new cljs.core.IndexedSeq(G__21669__a,0);
} 
return HEAD__delegate.call(this,uri,opts);};
HEAD.cljs$lang$maxFixedArity = 1;
HEAD.cljs$lang$applyTo = (function (arglist__21670){
var uri = cljs.core.first(arglist__21670);
var opts = cljs.core.rest(arglist__21670);
return HEAD__delegate(uri,opts);
});
HEAD.cljs$core$IFn$_invoke$arity$variadic = HEAD__delegate;
return HEAD;
})()
;
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the
* deserialized response
* :error-handler - the handler function for errors, should accept a
* map with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.POST = (function() { 
var POST__delegate = function (uri,opts){
var f__10841__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"POST",(((f__10841__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__10841__auto__));
};
var POST = function (uri,var_args){
var opts = null;
if (arguments.length > 1) {
var G__21671__i = 0, G__21671__a = new Array(arguments.length -  1);
while (G__21671__i < G__21671__a.length) {G__21671__a[G__21671__i] = arguments[G__21671__i + 1]; ++G__21671__i;}
  opts = new cljs.core.IndexedSeq(G__21671__a,0);
} 
return POST__delegate.call(this,uri,opts);};
POST.cljs$lang$maxFixedArity = 1;
POST.cljs$lang$applyTo = (function (arglist__21672){
var uri = cljs.core.first(arglist__21672);
var opts = cljs.core.rest(arglist__21672);
return POST__delegate(uri,opts);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the
* deserialized response
* :error-handler - the handler function for errors, should accept a
* map with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.PUT = (function() { 
var PUT__delegate = function (uri,opts){
var f__10841__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"PUT",(((f__10841__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__10841__auto__));
};
var PUT = function (uri,var_args){
var opts = null;
if (arguments.length > 1) {
var G__21673__i = 0, G__21673__a = new Array(arguments.length -  1);
while (G__21673__i < G__21673__a.length) {G__21673__a[G__21673__i] = arguments[G__21673__i + 1]; ++G__21673__i;}
  opts = new cljs.core.IndexedSeq(G__21673__a,0);
} 
return PUT__delegate.call(this,uri,opts);};
PUT.cljs$lang$maxFixedArity = 1;
PUT.cljs$lang$applyTo = (function (arglist__21674){
var uri = cljs.core.first(arglist__21674);
var opts = cljs.core.rest(arglist__21674);
return PUT__delegate(uri,opts);
});
PUT.cljs$core$IFn$_invoke$arity$variadic = PUT__delegate;
return PUT;
})()
;
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the
* deserialized response
* :error-handler - the handler function for errors, should accept a
* map with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.DELETE = (function() { 
var DELETE__delegate = function (uri,opts){
var f__10841__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"DELETE",(((f__10841__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__10841__auto__));
};
var DELETE = function (uri,var_args){
var opts = null;
if (arguments.length > 1) {
var G__21675__i = 0, G__21675__a = new Array(arguments.length -  1);
while (G__21675__i < G__21675__a.length) {G__21675__a[G__21675__i] = arguments[G__21675__i + 1]; ++G__21675__i;}
  opts = new cljs.core.IndexedSeq(G__21675__a,0);
} 
return DELETE__delegate.call(this,uri,opts);};
DELETE.cljs$lang$maxFixedArity = 1;
DELETE.cljs$lang$applyTo = (function (arglist__21676){
var uri = cljs.core.first(arglist__21676);
var opts = cljs.core.rest(arglist__21676);
return DELETE__delegate(uri,opts);
});
DELETE.cljs$core$IFn$_invoke$arity$variadic = DELETE__delegate;
return DELETE;
})()
;
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the
* deserialized response
* :error-handler - the handler function for errors, should accept a
* map with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.OPTIONS = (function() { 
var OPTIONS__delegate = function (uri,opts){
var f__10841__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"OPTIONS",(((f__10841__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__10841__auto__));
};
var OPTIONS = function (uri,var_args){
var opts = null;
if (arguments.length > 1) {
var G__21677__i = 0, G__21677__a = new Array(arguments.length -  1);
while (G__21677__i < G__21677__a.length) {G__21677__a[G__21677__i] = arguments[G__21677__i + 1]; ++G__21677__i;}
  opts = new cljs.core.IndexedSeq(G__21677__a,0);
} 
return OPTIONS__delegate.call(this,uri,opts);};
OPTIONS.cljs$lang$maxFixedArity = 1;
OPTIONS.cljs$lang$applyTo = (function (arglist__21678){
var uri = cljs.core.first(arglist__21678);
var opts = cljs.core.rest(arglist__21678);
return OPTIONS__delegate(uri,opts);
});
OPTIONS.cljs$core$IFn$_invoke$arity$variadic = OPTIONS__delegate;
return OPTIONS;
})()
;
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the
* deserialized response
* :error-handler - the handler function for errors, should accept a
* map with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.TRACE = (function() { 
var TRACE__delegate = function (uri,opts){
var f__10841__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"TRACE",(((f__10841__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__10841__auto__));
};
var TRACE = function (uri,var_args){
var opts = null;
if (arguments.length > 1) {
var G__21679__i = 0, G__21679__a = new Array(arguments.length -  1);
while (G__21679__i < G__21679__a.length) {G__21679__a[G__21679__i] = arguments[G__21679__i + 1]; ++G__21679__i;}
  opts = new cljs.core.IndexedSeq(G__21679__a,0);
} 
return TRACE__delegate.call(this,uri,opts);};
TRACE.cljs$lang$maxFixedArity = 1;
TRACE.cljs$lang$applyTo = (function (arglist__21680){
var uri = cljs.core.first(arglist__21680);
var opts = cljs.core.rest(arglist__21680);
return TRACE__delegate(uri,opts);
});
TRACE.cljs$core$IFn$_invoke$arity$variadic = TRACE__delegate;
return TRACE;
})()
;
