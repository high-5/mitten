// Compiled by ClojureScript 0.0-2850 {:elide-asserts true, :static-fns true}
goog.provide('om.core');
goog.require('cljs.core');
goog.require('goog.ui.IdGenerator');
goog.require('goog.dom');
goog.require('om.dom');
om.core._STAR_parent_STAR_ = null;
om.core._STAR_instrument_STAR_ = null;
om.core._STAR_descriptor_STAR_ = null;
om.core._STAR_state_STAR_ = null;
om.core._STAR_root_key_STAR_ = null;

om.core.IDisplayName = (function (){var obj20036 = {};
return obj20036;
})();

om.core.display_name = (function display_name(this$){
if((function (){var and__3762__auto__ = this$;
if(and__3762__auto__){
return this$.om$core$IDisplayName$display_name$arity$1;
} else {
return and__3762__auto__;
}
})()){
return this$.om$core$IDisplayName$display_name$arity$1(this$);
} else {
var x__4418__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3774__auto__ = (om.core.display_name[(function (){var G__20040 = x__4418__auto__;
return goog.typeOf(G__20040);
})()]);
if(or__3774__auto__){
return or__3774__auto__;
} else {
var or__3774__auto____$1 = (om.core.display_name["_"]);
if(or__3774__auto____$1){
return or__3774__auto____$1;
} else {
throw cljs.core.missing_protocol("IDisplayName.display-name",this$);
}
}
})().call(null,this$);
}
});


om.core.IInitState = (function (){var obj20042 = {};
return obj20042;
})();

om.core.init_state = (function init_state(this$){
if((function (){var and__3762__auto__ = this$;
if(and__3762__auto__){
return this$.om$core$IInitState$init_state$arity$1;
} else {
return and__3762__auto__;
}
})()){
return this$.om$core$IInitState$init_state$arity$1(this$);
} else {
var x__4418__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3774__auto__ = (om.core.init_state[(function (){var G__20046 = x__4418__auto__;
return goog.typeOf(G__20046);
})()]);
if(or__3774__auto__){
return or__3774__auto__;
} else {
var or__3774__auto____$1 = (om.core.init_state["_"]);
if(or__3774__auto____$1){
return or__3774__auto____$1;
} else {
throw cljs.core.missing_protocol("IInitState.init-state",this$);
}
}
})().call(null,this$);
}
});


om.core.IShouldUpdate = (function (){var obj20048 = {};
return obj20048;
})();

om.core.should_update = (function should_update(this$,next_props,next_state){
if((function (){var and__3762__auto__ = this$;
if(and__3762__auto__){
return this$.om$core$IShouldUpdate$should_update$arity$3;
} else {
return and__3762__auto__;
}
})()){
return this$.om$core$IShouldUpdate$should_update$arity$3(this$,next_props,next_state);
} else {
var x__4418__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3774__auto__ = (om.core.should_update[(function (){var G__20052 = x__4418__auto__;
return goog.typeOf(G__20052);
})()]);
if(or__3774__auto__){
return or__3774__auto__;
} else {
var or__3774__auto____$1 = (om.core.should_update["_"]);
if(or__3774__auto____$1){
return or__3774__auto____$1;
} else {
throw cljs.core.missing_protocol("IShouldUpdate.should-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});


om.core.IWillMount = (function (){var obj20054 = {};
return obj20054;
})();

om.core.will_mount = (function will_mount(this$){
if((function (){var and__3762__auto__ = this$;
if(and__3762__auto__){
return this$.om$core$IWillMount$will_mount$arity$1;
} else {
return and__3762__auto__;
}
})()){
return this$.om$core$IWillMount$will_mount$arity$1(this$);
} else {
var x__4418__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3774__auto__ = (om.core.will_mount[(function (){var G__20058 = x__4418__auto__;
return goog.typeOf(G__20058);
})()]);
if(or__3774__auto__){
return or__3774__auto__;
} else {
var or__3774__auto____$1 = (om.core.will_mount["_"]);
if(or__3774__auto____$1){
return or__3774__auto____$1;
} else {
throw cljs.core.missing_protocol("IWillMount.will-mount",this$);
}
}
})().call(null,this$);
}
});


om.core.IDidMount = (function (){var obj20060 = {};
return obj20060;
})();

om.core.did_mount = (function did_mount(this$){
if((function (){var and__3762__auto__ = this$;
if(and__3762__auto__){
return this$.om$core$IDidMount$did_mount$arity$1;
} else {
return and__3762__auto__;
}
})()){
return this$.om$core$IDidMount$did_mount$arity$1(this$);
} else {
var x__4418__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3774__auto__ = (om.core.did_mount[(function (){var G__20064 = x__4418__auto__;
return goog.typeOf(G__20064);
})()]);
if(or__3774__auto__){
return or__3774__auto__;
} else {
var or__3774__auto____$1 = (om.core.did_mount["_"]);
if(or__3774__auto____$1){
return or__3774__auto____$1;
} else {
throw cljs.core.missing_protocol("IDidMount.did-mount",this$);
}
}
})().call(null,this$);
}
});


om.core.IWillUnmount = (function (){var obj20066 = {};
return obj20066;
})();

om.core.will_unmount = (function will_unmount(this$){
if((function (){var and__3762__auto__ = this$;
if(and__3762__auto__){
return this$.om$core$IWillUnmount$will_unmount$arity$1;
} else {
return and__3762__auto__;
}
})()){
return this$.om$core$IWillUnmount$will_unmount$arity$1(this$);
} else {
var x__4418__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3774__auto__ = (om.core.will_unmount[(function (){var G__20070 = x__4418__auto__;
return goog.typeOf(G__20070);
})()]);
if(or__3774__auto__){
return or__3774__auto__;
} else {
var or__3774__auto____$1 = (om.core.will_unmount["_"]);
if(or__3774__auto____$1){
return or__3774__auto____$1;
} else {
throw cljs.core.missing_protocol("IWillUnmount.will-unmount",this$);
}
}
})().call(null,this$);
}
});


om.core.IWillUpdate = (function (){var obj20072 = {};
return obj20072;
})();

om.core.will_update = (function will_update(this$,next_props,next_state){
if((function (){var and__3762__auto__ = this$;
if(and__3762__auto__){
return this$.om$core$IWillUpdate$will_update$arity$3;
} else {
return and__3762__auto__;
}
})()){
return this$.om$core$IWillUpdate$will_update$arity$3(this$,next_props,next_state);
} else {
var x__4418__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3774__auto__ = (om.core.will_update[(function (){var G__20076 = x__4418__auto__;
return goog.typeOf(G__20076);
})()]);
if(or__3774__auto__){
return or__3774__auto__;
} else {
var or__3774__auto____$1 = (om.core.will_update["_"]);
if(or__3774__auto____$1){
return or__3774__auto____$1;
} else {
throw cljs.core.missing_protocol("IWillUpdate.will-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});


om.core.IDidUpdate = (function (){var obj20078 = {};
return obj20078;
})();

om.core.did_update = (function did_update(this$,prev_props,prev_state){
if((function (){var and__3762__auto__ = this$;
if(and__3762__auto__){
return this$.om$core$IDidUpdate$did_update$arity$3;
} else {
return and__3762__auto__;
}
})()){
return this$.om$core$IDidUpdate$did_update$arity$3(this$,prev_props,prev_state);
} else {
var x__4418__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3774__auto__ = (om.core.did_update[(function (){var G__20082 = x__4418__auto__;
return goog.typeOf(G__20082);
})()]);
if(or__3774__auto__){
return or__3774__auto__;
} else {
var or__3774__auto____$1 = (om.core.did_update["_"]);
if(or__3774__auto____$1){
return or__3774__auto____$1;
} else {
throw cljs.core.missing_protocol("IDidUpdate.did-update",this$);
}
}
})().call(null,this$,prev_props,prev_state);
}
});


om.core.IWillReceiveProps = (function (){var obj20084 = {};
return obj20084;
})();

om.core.will_receive_props = (function will_receive_props(this$,next_props){
if((function (){var and__3762__auto__ = this$;
if(and__3762__auto__){
return this$.om$core$IWillReceiveProps$will_receive_props$arity$2;
} else {
return and__3762__auto__;
}
})()){
return this$.om$core$IWillReceiveProps$will_receive_props$arity$2(this$,next_props);
} else {
var x__4418__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3774__auto__ = (om.core.will_receive_props[(function (){var G__20088 = x__4418__auto__;
return goog.typeOf(G__20088);
})()]);
if(or__3774__auto__){
return or__3774__auto__;
} else {
var or__3774__auto____$1 = (om.core.will_receive_props["_"]);
if(or__3774__auto____$1){
return or__3774__auto____$1;
} else {
throw cljs.core.missing_protocol("IWillReceiveProps.will-receive-props",this$);
}
}
})().call(null,this$,next_props);
}
});


om.core.IRender = (function (){var obj20090 = {};
return obj20090;
})();

om.core.render = (function render(this$){
if((function (){var and__3762__auto__ = this$;
if(and__3762__auto__){
return this$.om$core$IRender$render$arity$1;
} else {
return and__3762__auto__;
}
})()){
return this$.om$core$IRender$render$arity$1(this$);
} else {
var x__4418__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3774__auto__ = (om.core.render[(function (){var G__20094 = x__4418__auto__;
return goog.typeOf(G__20094);
})()]);
if(or__3774__auto__){
return or__3774__auto__;
} else {
var or__3774__auto____$1 = (om.core.render["_"]);
if(or__3774__auto____$1){
return or__3774__auto____$1;
} else {
throw cljs.core.missing_protocol("IRender.render",this$);
}
}
})().call(null,this$);
}
});


om.core.IRenderProps = (function (){var obj20096 = {};
return obj20096;
})();

om.core.render_props = (function render_props(this$,props,state){
if((function (){var and__3762__auto__ = this$;
if(and__3762__auto__){
return this$.om$core$IRenderProps$render_props$arity$3;
} else {
return and__3762__auto__;
}
})()){
return this$.om$core$IRenderProps$render_props$arity$3(this$,props,state);
} else {
var x__4418__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3774__auto__ = (om.core.render_props[(function (){var G__20100 = x__4418__auto__;
return goog.typeOf(G__20100);
})()]);
if(or__3774__auto__){
return or__3774__auto__;
} else {
var or__3774__auto____$1 = (om.core.render_props["_"]);
if(or__3774__auto____$1){
return or__3774__auto____$1;
} else {
throw cljs.core.missing_protocol("IRenderProps.render-props",this$);
}
}
})().call(null,this$,props,state);
}
});


om.core.IRenderState = (function (){var obj20102 = {};
return obj20102;
})();

om.core.render_state = (function render_state(this$,state){
if((function (){var and__3762__auto__ = this$;
if(and__3762__auto__){
return this$.om$core$IRenderState$render_state$arity$2;
} else {
return and__3762__auto__;
}
})()){
return this$.om$core$IRenderState$render_state$arity$2(this$,state);
} else {
var x__4418__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3774__auto__ = (om.core.render_state[(function (){var G__20106 = x__4418__auto__;
return goog.typeOf(G__20106);
})()]);
if(or__3774__auto__){
return or__3774__auto__;
} else {
var or__3774__auto____$1 = (om.core.render_state["_"]);
if(or__3774__auto____$1){
return or__3774__auto____$1;
} else {
throw cljs.core.missing_protocol("IRenderState.render-state",this$);
}
}
})().call(null,this$,state);
}
});


om.core.ICheckState = (function (){var obj20108 = {};
return obj20108;
})();


om.core.IOmSwap = (function (){var obj20110 = {};
return obj20110;
})();

om.core._om_swap_BANG_ = (function _om_swap_BANG_(this$,cursor,korks,f,tag){
if((function (){var and__3762__auto__ = this$;
if(and__3762__auto__){
return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5;
} else {
return and__3762__auto__;
}
})()){
return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5(this$,cursor,korks,f,tag);
} else {
var x__4418__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3774__auto__ = (om.core._om_swap_BANG_[(function (){var G__20114 = x__4418__auto__;
return goog.typeOf(G__20114);
})()]);
if(or__3774__auto__){
return or__3774__auto__;
} else {
var or__3774__auto____$1 = (om.core._om_swap_BANG_["_"]);
if(or__3774__auto____$1){
return or__3774__auto____$1;
} else {
throw cljs.core.missing_protocol("IOmSwap.-om-swap!",this$);
}
}
})().call(null,this$,cursor,korks,f,tag);
}
});


om.core.IGetState = (function (){var obj20116 = {};
return obj20116;
})();

om.core._get_state = (function() {
var _get_state = null;
var _get_state__1 = (function (this$){
if((function (){var and__3762__auto__ = this$;
if(and__3762__auto__){
return this$.om$core$IGetState$_get_state$arity$1;
} else {
return and__3762__auto__;
}
})()){
return this$.om$core$IGetState$_get_state$arity$1(this$);
} else {
var x__4418__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3774__auto__ = (om.core._get_state[(function (){var G__20122 = x__4418__auto__;
return goog.typeOf(G__20122);
})()]);
if(or__3774__auto__){
return or__3774__auto__;
} else {
var or__3774__auto____$1 = (om.core._get_state["_"]);
if(or__3774__auto____$1){
return or__3774__auto____$1;
} else {
throw cljs.core.missing_protocol("IGetState.-get-state",this$);
}
}
})().call(null,this$);
}
});
var _get_state__2 = (function (this$,ks){
if((function (){var and__3762__auto__ = this$;
if(and__3762__auto__){
return this$.om$core$IGetState$_get_state$arity$2;
} else {
return and__3762__auto__;
}
})()){
return this$.om$core$IGetState$_get_state$arity$2(this$,ks);
} else {
var x__4418__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3774__auto__ = (om.core._get_state[(function (){var G__20124 = x__4418__auto__;
return goog.typeOf(G__20124);
})()]);
if(or__3774__auto__){
return or__3774__auto__;
} else {
var or__3774__auto____$1 = (om.core._get_state["_"]);
if(or__3774__auto____$1){
return or__3774__auto____$1;
} else {
throw cljs.core.missing_protocol("IGetState.-get-state",this$);
}
}
})().call(null,this$,ks);
}
});
_get_state = function(this$,ks){
switch(arguments.length){
case 1:
return _get_state__1.call(this,this$);
case 2:
return _get_state__2.call(this,this$,ks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_get_state.cljs$core$IFn$_invoke$arity$1 = _get_state__1;
_get_state.cljs$core$IFn$_invoke$arity$2 = _get_state__2;
return _get_state;
})()
;


om.core.IGetRenderState = (function (){var obj20126 = {};
return obj20126;
})();

om.core._get_render_state = (function() {
var _get_render_state = null;
var _get_render_state__1 = (function (this$){
if((function (){var and__3762__auto__ = this$;
if(and__3762__auto__){
return this$.om$core$IGetRenderState$_get_render_state$arity$1;
} else {
return and__3762__auto__;
}
})()){
return this$.om$core$IGetRenderState$_get_render_state$arity$1(this$);
} else {
var x__4418__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3774__auto__ = (om.core._get_render_state[(function (){var G__20132 = x__4418__auto__;
return goog.typeOf(G__20132);
})()]);
if(or__3774__auto__){
return or__3774__auto__;
} else {
var or__3774__auto____$1 = (om.core._get_render_state["_"]);
if(or__3774__auto____$1){
return or__3774__auto____$1;
} else {
throw cljs.core.missing_protocol("IGetRenderState.-get-render-state",this$);
}
}
})().call(null,this$);
}
});
var _get_render_state__2 = (function (this$,ks){
if((function (){var and__3762__auto__ = this$;
if(and__3762__auto__){
return this$.om$core$IGetRenderState$_get_render_state$arity$2;
} else {
return and__3762__auto__;
}
})()){
return this$.om$core$IGetRenderState$_get_render_state$arity$2(this$,ks);
} else {
var x__4418__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3774__auto__ = (om.core._get_render_state[(function (){var G__20134 = x__4418__auto__;
return goog.typeOf(G__20134);
})()]);
if(or__3774__auto__){
return or__3774__auto__;
} else {
var or__3774__auto____$1 = (om.core._get_render_state["_"]);
if(or__3774__auto____$1){
return or__3774__auto____$1;
} else {
throw cljs.core.missing_protocol("IGetRenderState.-get-render-state",this$);
}
}
})().call(null,this$,ks);
}
});
_get_render_state = function(this$,ks){
switch(arguments.length){
case 1:
return _get_render_state__1.call(this,this$);
case 2:
return _get_render_state__2.call(this,this$,ks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_get_render_state.cljs$core$IFn$_invoke$arity$1 = _get_render_state__1;
_get_render_state.cljs$core$IFn$_invoke$arity$2 = _get_render_state__2;
return _get_render_state;
})()
;


om.core.ISetState = (function (){var obj20136 = {};
return obj20136;
})();

om.core._set_state_BANG_ = (function() {
var _set_state_BANG_ = null;
var _set_state_BANG___3 = (function (this$,val,render){
if((function (){var and__3762__auto__ = this$;
if(and__3762__auto__){
return this$.om$core$ISetState$_set_state_BANG_$arity$3;
} else {
return and__3762__auto__;
}
})()){
return this$.om$core$ISetState$_set_state_BANG_$arity$3(this$,val,render);
} else {
var x__4418__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3774__auto__ = (om.core._set_state_BANG_[(function (){var G__20142 = x__4418__auto__;
return goog.typeOf(G__20142);
})()]);
if(or__3774__auto__){
return or__3774__auto__;
} else {
var or__3774__auto____$1 = (om.core._set_state_BANG_["_"]);
if(or__3774__auto____$1){
return or__3774__auto____$1;
} else {
throw cljs.core.missing_protocol("ISetState.-set-state!",this$);
}
}
})().call(null,this$,val,render);
}
});
var _set_state_BANG___4 = (function (this$,ks,val,render){
if((function (){var and__3762__auto__ = this$;
if(and__3762__auto__){
return this$.om$core$ISetState$_set_state_BANG_$arity$4;
} else {
return and__3762__auto__;
}
})()){
return this$.om$core$ISetState$_set_state_BANG_$arity$4(this$,ks,val,render);
} else {
var x__4418__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3774__auto__ = (om.core._set_state_BANG_[(function (){var G__20144 = x__4418__auto__;
return goog.typeOf(G__20144);
})()]);
if(or__3774__auto__){
return or__3774__auto__;
} else {
var or__3774__auto____$1 = (om.core._set_state_BANG_["_"]);
if(or__3774__auto____$1){
return or__3774__auto____$1;
} else {
throw cljs.core.missing_protocol("ISetState.-set-state!",this$);
}
}
})().call(null,this$,ks,val,render);
}
});
_set_state_BANG_ = function(this$,ks,val,render){
switch(arguments.length){
case 3:
return _set_state_BANG___3.call(this,this$,ks,val);
case 4:
return _set_state_BANG___4.call(this,this$,ks,val,render);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = _set_state_BANG___3;
_set_state_BANG_.cljs$core$IFn$_invoke$arity$4 = _set_state_BANG___4;
return _set_state_BANG_;
})()
;


om.core.IRenderQueue = (function (){var obj20146 = {};
return obj20146;
})();

om.core._get_queue = (function _get_queue(this$){
if((function (){var and__3762__auto__ = this$;
if(and__3762__auto__){
return this$.om$core$IRenderQueue$_get_queue$arity$1;
} else {
return and__3762__auto__;
}
})()){
return this$.om$core$IRenderQueue$_get_queue$arity$1(this$);
} else {
var x__4418__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3774__auto__ = (om.core._get_queue[(function (){var G__20150 = x__4418__auto__;
return goog.typeOf(G__20150);
})()]);
if(or__3774__auto__){
return or__3774__auto__;
} else {
var or__3774__auto____$1 = (om.core._get_queue["_"]);
if(or__3774__auto____$1){
return or__3774__auto____$1;
} else {
throw cljs.core.missing_protocol("IRenderQueue.-get-queue",this$);
}
}
})().call(null,this$);
}
});

om.core._queue_render_BANG_ = (function _queue_render_BANG_(this$,c){
if((function (){var and__3762__auto__ = this$;
if(and__3762__auto__){
return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2;
} else {
return and__3762__auto__;
}
})()){
return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2(this$,c);
} else {
var x__4418__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3774__auto__ = (om.core._queue_render_BANG_[(function (){var G__20154 = x__4418__auto__;
return goog.typeOf(G__20154);
})()]);
if(or__3774__auto__){
return or__3774__auto__;
} else {
var or__3774__auto____$1 = (om.core._queue_render_BANG_["_"]);
if(or__3774__auto____$1){
return or__3774__auto____$1;
} else {
throw cljs.core.missing_protocol("IRenderQueue.-queue-render!",this$);
}
}
})().call(null,this$,c);
}
});

om.core._empty_queue_BANG_ = (function _empty_queue_BANG_(this$){
if((function (){var and__3762__auto__ = this$;
if(and__3762__auto__){
return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1;
} else {
return and__3762__auto__;
}
})()){
return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1(this$);
} else {
var x__4418__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3774__auto__ = (om.core._empty_queue_BANG_[(function (){var G__20158 = x__4418__auto__;
return goog.typeOf(G__20158);
})()]);
if(or__3774__auto__){
return or__3774__auto__;
} else {
var or__3774__auto____$1 = (om.core._empty_queue_BANG_["_"]);
if(or__3774__auto____$1){
return or__3774__auto____$1;
} else {
throw cljs.core.missing_protocol("IRenderQueue.-empty-queue!",this$);
}
}
})().call(null,this$);
}
});


om.core.IValue = (function (){var obj20160 = {};
return obj20160;
})();

om.core._value = (function _value(x){
if((function (){var and__3762__auto__ = x;
if(and__3762__auto__){
return x.om$core$IValue$_value$arity$1;
} else {
return and__3762__auto__;
}
})()){
return x.om$core$IValue$_value$arity$1(x);
} else {
var x__4418__auto__ = (((x == null))?null:x);
return (function (){var or__3774__auto__ = (om.core._value[(function (){var G__20164 = x__4418__auto__;
return goog.typeOf(G__20164);
})()]);
if(or__3774__auto__){
return or__3774__auto__;
} else {
var or__3774__auto____$1 = (om.core._value["_"]);
if(or__3774__auto____$1){
return or__3774__auto____$1;
} else {
throw cljs.core.missing_protocol("IValue.-value",x);
}
}
})().call(null,x);
}
});

(om.core.IValue["_"] = true);

(om.core._value["_"] = (function (x){
return x;
}));

om.core.ICursor = (function (){var obj20166 = {};
return obj20166;
})();

om.core._path = (function _path(cursor){
if((function (){var and__3762__auto__ = cursor;
if(and__3762__auto__){
return cursor.om$core$ICursor$_path$arity$1;
} else {
return and__3762__auto__;
}
})()){
return cursor.om$core$ICursor$_path$arity$1(cursor);
} else {
var x__4418__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__3774__auto__ = (om.core._path[(function (){var G__20170 = x__4418__auto__;
return goog.typeOf(G__20170);
})()]);
if(or__3774__auto__){
return or__3774__auto__;
} else {
var or__3774__auto____$1 = (om.core._path["_"]);
if(or__3774__auto____$1){
return or__3774__auto____$1;
} else {
throw cljs.core.missing_protocol("ICursor.-path",cursor);
}
}
})().call(null,cursor);
}
});

om.core._state = (function _state(cursor){
if((function (){var and__3762__auto__ = cursor;
if(and__3762__auto__){
return cursor.om$core$ICursor$_state$arity$1;
} else {
return and__3762__auto__;
}
})()){
return cursor.om$core$ICursor$_state$arity$1(cursor);
} else {
var x__4418__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__3774__auto__ = (om.core._state[(function (){var G__20174 = x__4418__auto__;
return goog.typeOf(G__20174);
})()]);
if(or__3774__auto__){
return or__3774__auto__;
} else {
var or__3774__auto____$1 = (om.core._state["_"]);
if(or__3774__auto____$1){
return or__3774__auto____$1;
} else {
throw cljs.core.missing_protocol("ICursor.-state",cursor);
}
}
})().call(null,cursor);
}
});


om.core.IToCursor = (function (){var obj20176 = {};
return obj20176;
})();

om.core._to_cursor = (function() {
var _to_cursor = null;
var _to_cursor__2 = (function (value,state){
if((function (){var and__3762__auto__ = value;
if(and__3762__auto__){
return value.om$core$IToCursor$_to_cursor$arity$2;
} else {
return and__3762__auto__;
}
})()){
return value.om$core$IToCursor$_to_cursor$arity$2(value,state);
} else {
var x__4418__auto__ = (((value == null))?null:value);
return (function (){var or__3774__auto__ = (om.core._to_cursor[(function (){var G__20182 = x__4418__auto__;
return goog.typeOf(G__20182);
})()]);
if(or__3774__auto__){
return or__3774__auto__;
} else {
var or__3774__auto____$1 = (om.core._to_cursor["_"]);
if(or__3774__auto____$1){
return or__3774__auto____$1;
} else {
throw cljs.core.missing_protocol("IToCursor.-to-cursor",value);
}
}
})().call(null,value,state);
}
});
var _to_cursor__3 = (function (value,state,path){
if((function (){var and__3762__auto__ = value;
if(and__3762__auto__){
return value.om$core$IToCursor$_to_cursor$arity$3;
} else {
return and__3762__auto__;
}
})()){
return value.om$core$IToCursor$_to_cursor$arity$3(value,state,path);
} else {
var x__4418__auto__ = (((value == null))?null:value);
return (function (){var or__3774__auto__ = (om.core._to_cursor[(function (){var G__20184 = x__4418__auto__;
return goog.typeOf(G__20184);
})()]);
if(or__3774__auto__){
return or__3774__auto__;
} else {
var or__3774__auto____$1 = (om.core._to_cursor["_"]);
if(or__3774__auto____$1){
return or__3774__auto____$1;
} else {
throw cljs.core.missing_protocol("IToCursor.-to-cursor",value);
}
}
})().call(null,value,state,path);
}
});
_to_cursor = function(value,state,path){
switch(arguments.length){
case 2:
return _to_cursor__2.call(this,value,state);
case 3:
return _to_cursor__3.call(this,value,state,path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_to_cursor.cljs$core$IFn$_invoke$arity$2 = _to_cursor__2;
_to_cursor.cljs$core$IFn$_invoke$arity$3 = _to_cursor__3;
return _to_cursor;
})()
;


om.core.ICursorDerive = (function (){var obj20186 = {};
return obj20186;
})();

om.core._derive = (function _derive(cursor,derived,state,path){
if((function (){var and__3762__auto__ = cursor;
if(and__3762__auto__){
return cursor.om$core$ICursorDerive$_derive$arity$4;
} else {
return and__3762__auto__;
}
})()){
return cursor.om$core$ICursorDerive$_derive$arity$4(cursor,derived,state,path);
} else {
var x__4418__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__3774__auto__ = (om.core._derive[(function (){var G__20190 = x__4418__auto__;
return goog.typeOf(G__20190);
})()]);
if(or__3774__auto__){
return or__3774__auto__;
} else {
var or__3774__auto____$1 = (om.core._derive["_"]);
if(or__3774__auto____$1){
return or__3774__auto____$1;
} else {
throw cljs.core.missing_protocol("ICursorDerive.-derive",cursor);
}
}
})().call(null,cursor,derived,state,path);
}
});

(om.core.ICursorDerive["_"] = true);

(om.core._derive["_"] = (function (this$,derived,state,path){
var G__20191 = derived;
var G__20192 = state;
var G__20193 = path;
return (om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 ? om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(G__20191,G__20192,G__20193) : om.core.to_cursor.call(null,G__20191,G__20192,G__20193));
}));
om.core.path = (function path(cursor){
return om.core._path(cursor);
});
om.core.value = (function value(cursor){
return om.core._value(cursor);
});
om.core.state = (function state(cursor){
return om.core._state(cursor);
});

om.core.ITransact = (function (){var obj20195 = {};
return obj20195;
})();

om.core._transact_BANG_ = (function _transact_BANG_(cursor,korks,f,tag){
if((function (){var and__3762__auto__ = cursor;
if(and__3762__auto__){
return cursor.om$core$ITransact$_transact_BANG_$arity$4;
} else {
return and__3762__auto__;
}
})()){
return cursor.om$core$ITransact$_transact_BANG_$arity$4(cursor,korks,f,tag);
} else {
var x__4418__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__3774__auto__ = (om.core._transact_BANG_[(function (){var G__20199 = x__4418__auto__;
return goog.typeOf(G__20199);
})()]);
if(or__3774__auto__){
return or__3774__auto__;
} else {
var or__3774__auto____$1 = (om.core._transact_BANG_["_"]);
if(or__3774__auto____$1){
return or__3774__auto____$1;
} else {
throw cljs.core.missing_protocol("ITransact.-transact!",cursor);
}
}
})().call(null,cursor,korks,f,tag);
}
});


om.core.INotify = (function (){var obj20201 = {};
return obj20201;
})();

om.core._listen_BANG_ = (function _listen_BANG_(x,key,tx_listen){
if((function (){var and__3762__auto__ = x;
if(and__3762__auto__){
return x.om$core$INotify$_listen_BANG_$arity$3;
} else {
return and__3762__auto__;
}
})()){
return x.om$core$INotify$_listen_BANG_$arity$3(x,key,tx_listen);
} else {
var x__4418__auto__ = (((x == null))?null:x);
return (function (){var or__3774__auto__ = (om.core._listen_BANG_[(function (){var G__20205 = x__4418__auto__;
return goog.typeOf(G__20205);
})()]);
if(or__3774__auto__){
return or__3774__auto__;
} else {
var or__3774__auto____$1 = (om.core._listen_BANG_["_"]);
if(or__3774__auto____$1){
return or__3774__auto____$1;
} else {
throw cljs.core.missing_protocol("INotify.-listen!",x);
}
}
})().call(null,x,key,tx_listen);
}
});

om.core._unlisten_BANG_ = (function _unlisten_BANG_(x,key){
if((function (){var and__3762__auto__ = x;
if(and__3762__auto__){
return x.om$core$INotify$_unlisten_BANG_$arity$2;
} else {
return and__3762__auto__;
}
})()){
return x.om$core$INotify$_unlisten_BANG_$arity$2(x,key);
} else {
var x__4418__auto__ = (((x == null))?null:x);
return (function (){var or__3774__auto__ = (om.core._unlisten_BANG_[(function (){var G__20209 = x__4418__auto__;
return goog.typeOf(G__20209);
})()]);
if(or__3774__auto__){
return or__3774__auto__;
} else {
var or__3774__auto____$1 = (om.core._unlisten_BANG_["_"]);
if(or__3774__auto____$1){
return or__3774__auto____$1;
} else {
throw cljs.core.missing_protocol("INotify.-unlisten!",x);
}
}
})().call(null,x,key);
}
});

om.core._notify_BANG_ = (function _notify_BANG_(x,tx_data,root_cursor){
if((function (){var and__3762__auto__ = x;
if(and__3762__auto__){
return x.om$core$INotify$_notify_BANG_$arity$3;
} else {
return and__3762__auto__;
}
})()){
return x.om$core$INotify$_notify_BANG_$arity$3(x,tx_data,root_cursor);
} else {
var x__4418__auto__ = (((x == null))?null:x);
return (function (){var or__3774__auto__ = (om.core._notify_BANG_[(function (){var G__20213 = x__4418__auto__;
return goog.typeOf(G__20213);
})()]);
if(or__3774__auto__){
return or__3774__auto__;
} else {
var or__3774__auto____$1 = (om.core._notify_BANG_["_"]);
if(or__3774__auto____$1){
return or__3774__auto____$1;
} else {
throw cljs.core.missing_protocol("INotify.-notify!",x);
}
}
})().call(null,x,tx_data,root_cursor);
}
});


om.core.IRootProperties = (function (){var obj20215 = {};
return obj20215;
})();

om.core._set_property_BANG_ = (function _set_property_BANG_(this$,id,p,val){
if((function (){var and__3762__auto__ = this$;
if(and__3762__auto__){
return this$.om$core$IRootProperties$_set_property_BANG_$arity$4;
} else {
return and__3762__auto__;
}
})()){
return this$.om$core$IRootProperties$_set_property_BANG_$arity$4(this$,id,p,val);
} else {
var x__4418__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3774__auto__ = (om.core._set_property_BANG_[(function (){var G__20219 = x__4418__auto__;
return goog.typeOf(G__20219);
})()]);
if(or__3774__auto__){
return or__3774__auto__;
} else {
var or__3774__auto____$1 = (om.core._set_property_BANG_["_"]);
if(or__3774__auto____$1){
return or__3774__auto____$1;
} else {
throw cljs.core.missing_protocol("IRootProperties.-set-property!",this$);
}
}
})().call(null,this$,id,p,val);
}
});

om.core._remove_property_BANG_ = (function _remove_property_BANG_(this$,id,p){
if((function (){var and__3762__auto__ = this$;
if(and__3762__auto__){
return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3;
} else {
return and__3762__auto__;
}
})()){
return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3(this$,id,p);
} else {
var x__4418__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3774__auto__ = (om.core._remove_property_BANG_[(function (){var G__20223 = x__4418__auto__;
return goog.typeOf(G__20223);
})()]);
if(or__3774__auto__){
return or__3774__auto__;
} else {
var or__3774__auto____$1 = (om.core._remove_property_BANG_["_"]);
if(or__3774__auto____$1){
return or__3774__auto____$1;
} else {
throw cljs.core.missing_protocol("IRootProperties.-remove-property!",this$);
}
}
})().call(null,this$,id,p);
}
});

om.core._remove_properties_BANG_ = (function _remove_properties_BANG_(this$,id){
if((function (){var and__3762__auto__ = this$;
if(and__3762__auto__){
return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2;
} else {
return and__3762__auto__;
}
})()){
return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2(this$,id);
} else {
var x__4418__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3774__auto__ = (om.core._remove_properties_BANG_[(function (){var G__20227 = x__4418__auto__;
return goog.typeOf(G__20227);
})()]);
if(or__3774__auto__){
return or__3774__auto__;
} else {
var or__3774__auto____$1 = (om.core._remove_properties_BANG_["_"]);
if(or__3774__auto____$1){
return or__3774__auto____$1;
} else {
throw cljs.core.missing_protocol("IRootProperties.-remove-properties!",this$);
}
}
})().call(null,this$,id);
}
});

om.core._get_property = (function _get_property(this$,id,p){
if((function (){var and__3762__auto__ = this$;
if(and__3762__auto__){
return this$.om$core$IRootProperties$_get_property$arity$3;
} else {
return and__3762__auto__;
}
})()){
return this$.om$core$IRootProperties$_get_property$arity$3(this$,id,p);
} else {
var x__4418__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3774__auto__ = (om.core._get_property[(function (){var G__20231 = x__4418__auto__;
return goog.typeOf(G__20231);
})()]);
if(or__3774__auto__){
return or__3774__auto__;
} else {
var or__3774__auto____$1 = (om.core._get_property["_"]);
if(or__3774__auto____$1){
return or__3774__auto____$1;
} else {
throw cljs.core.missing_protocol("IRootProperties.-get-property",this$);
}
}
})().call(null,this$,id,p);
}
});


om.core.IRootKey = (function (){var obj20233 = {};
return obj20233;
})();

om.core._root_key = (function _root_key(cursor){
if((function (){var and__3762__auto__ = cursor;
if(and__3762__auto__){
return cursor.om$core$IRootKey$_root_key$arity$1;
} else {
return and__3762__auto__;
}
})()){
return cursor.om$core$IRootKey$_root_key$arity$1(cursor);
} else {
var x__4418__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__3774__auto__ = (om.core._root_key[(function (){var G__20237 = x__4418__auto__;
return goog.typeOf(G__20237);
})()]);
if(or__3774__auto__){
return or__3774__auto__;
} else {
var or__3774__auto____$1 = (om.core._root_key["_"]);
if(or__3774__auto____$1){
return or__3774__auto____$1;
} else {
throw cljs.core.missing_protocol("IRootKey.-root-key",cursor);
}
}
})().call(null,cursor);
}
});


om.core.IAdapt = (function (){var obj20239 = {};
return obj20239;
})();

om.core._adapt = (function _adapt(this$,other){
if((function (){var and__3762__auto__ = this$;
if(and__3762__auto__){
return this$.om$core$IAdapt$_adapt$arity$2;
} else {
return and__3762__auto__;
}
})()){
return this$.om$core$IAdapt$_adapt$arity$2(this$,other);
} else {
var x__4418__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3774__auto__ = (om.core._adapt[(function (){var G__20243 = x__4418__auto__;
return goog.typeOf(G__20243);
})()]);
if(or__3774__auto__){
return or__3774__auto__;
} else {
var or__3774__auto____$1 = (om.core._adapt["_"]);
if(or__3774__auto____$1){
return or__3774__auto____$1;
} else {
throw cljs.core.missing_protocol("IAdapt.-adapt",this$);
}
}
})().call(null,this$,other);
}
});

(om.core.IAdapt["_"] = true);

(om.core._adapt["_"] = (function (_,other){
return other;
}));
om.core.adapt = (function adapt(x,other){
return om.core._adapt(x,other);
});

om.core.IOmRef = (function (){var obj20245 = {};
return obj20245;
})();

om.core._add_dep_BANG_ = (function _add_dep_BANG_(this$,c){
if((function (){var and__3762__auto__ = this$;
if(and__3762__auto__){
return this$.om$core$IOmRef$_add_dep_BANG_$arity$2;
} else {
return and__3762__auto__;
}
})()){
return this$.om$core$IOmRef$_add_dep_BANG_$arity$2(this$,c);
} else {
var x__4418__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3774__auto__ = (om.core._add_dep_BANG_[(function (){var G__20249 = x__4418__auto__;
return goog.typeOf(G__20249);
})()]);
if(or__3774__auto__){
return or__3774__auto__;
} else {
var or__3774__auto____$1 = (om.core._add_dep_BANG_["_"]);
if(or__3774__auto____$1){
return or__3774__auto____$1;
} else {
throw cljs.core.missing_protocol("IOmRef.-add-dep!",this$);
}
}
})().call(null,this$,c);
}
});

om.core._remove_dep_BANG_ = (function _remove_dep_BANG_(this$,c){
if((function (){var and__3762__auto__ = this$;
if(and__3762__auto__){
return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2;
} else {
return and__3762__auto__;
}
})()){
return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2(this$,c);
} else {
var x__4418__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3774__auto__ = (om.core._remove_dep_BANG_[(function (){var G__20253 = x__4418__auto__;
return goog.typeOf(G__20253);
})()]);
if(or__3774__auto__){
return or__3774__auto__;
} else {
var or__3774__auto____$1 = (om.core._remove_dep_BANG_["_"]);
if(or__3774__auto____$1){
return or__3774__auto____$1;
} else {
throw cljs.core.missing_protocol("IOmRef.-remove-dep!",this$);
}
}
})().call(null,this$,c);
}
});

om.core._refresh_deps_BANG_ = (function _refresh_deps_BANG_(this$){
if((function (){var and__3762__auto__ = this$;
if(and__3762__auto__){
return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1;
} else {
return and__3762__auto__;
}
})()){
return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1(this$);
} else {
var x__4418__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3774__auto__ = (om.core._refresh_deps_BANG_[(function (){var G__20257 = x__4418__auto__;
return goog.typeOf(G__20257);
})()]);
if(or__3774__auto__){
return or__3774__auto__;
} else {
var or__3774__auto____$1 = (om.core._refresh_deps_BANG_["_"]);
if(or__3774__auto____$1){
return or__3774__auto____$1;
} else {
throw cljs.core.missing_protocol("IOmRef.-refresh-deps!",this$);
}
}
})().call(null,this$);
}
});

om.core._get_deps = (function _get_deps(this$){
if((function (){var and__3762__auto__ = this$;
if(and__3762__auto__){
return this$.om$core$IOmRef$_get_deps$arity$1;
} else {
return and__3762__auto__;
}
})()){
return this$.om$core$IOmRef$_get_deps$arity$1(this$);
} else {
var x__4418__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3774__auto__ = (om.core._get_deps[(function (){var G__20261 = x__4418__auto__;
return goog.typeOf(G__20261);
})()]);
if(or__3774__auto__){
return or__3774__auto__;
} else {
var or__3774__auto____$1 = (om.core._get_deps["_"]);
if(or__3774__auto____$1){
return or__3774__auto____$1;
} else {
throw cljs.core.missing_protocol("IOmRef.-get-deps",this$);
}
}
})().call(null,this$);
}
});


om.core.transact_STAR_ = (function transact_STAR_(state,cursor,korks,f,tag){
var old_state = (function (){var G__20271 = state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20271) : cljs.core.deref.call(null,G__20271));
})();
var path = cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var G__20272 = cursor;
return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__20272) : om.core.path.call(null,G__20272));
})(),korks);
var ret = (((function (){var G__20273 = state;
if(G__20273){
var bit__4455__auto__ = null;
if(cljs.core.truth_((function (){var or__3774__auto__ = bit__4455__auto__;
if(cljs.core.truth_(or__3774__auto__)){
return or__3774__auto__;
} else {
return G__20273.om$core$IOmSwap$;
}
})())){
return true;
} else {
if((!G__20273.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IOmSwap,G__20273);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IOmSwap,G__20273);
}
})())?om.core._om_swap_BANG_(state,cursor,korks,f,tag):((cljs.core.empty_QMARK_(path))?cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,f):cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,path,f)
));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.constant$keyword$83)){
return null;
} else {
var tx_data = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$84,path,cljs.core.constant$keyword$85,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old_state,path),cljs.core.constant$keyword$86,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__20274 = state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20274) : cljs.core.deref.call(null,G__20274));
})(),path),cljs.core.constant$keyword$87,old_state,cljs.core.constant$keyword$88,(function (){var G__20275 = state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20275) : cljs.core.deref.call(null,G__20275));
})()], null);
if(!((tag == null))){
var G__20276 = cursor;
var G__20277 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tx_data,cljs.core.constant$keyword$21,tag);
return (om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2 ? om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2(G__20276,G__20277) : om.core.notify_STAR_.call(null,G__20276,G__20277));
} else {
var G__20278 = cursor;
var G__20279 = tx_data;
return (om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2 ? om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2(G__20278,G__20279) : om.core.notify_STAR_.call(null,G__20278,G__20279));
}
}
});
om.core.cursor_QMARK_ = (function cursor_QMARK_(x){
var G__20281 = x;
if(G__20281){
var bit__4455__auto__ = null;
if(cljs.core.truth_((function (){var or__3774__auto__ = bit__4455__auto__;
if(cljs.core.truth_(or__3774__auto__)){
return or__3774__auto__;
} else {
return G__20281.om$core$ICursor$;
}
})())){
return true;
} else {
if((!G__20281.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.ICursor,G__20281);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.ICursor,G__20281);
}
});
om.core.component_QMARK_ = (function component_QMARK_(x){
return (x["isOmComponent"]);
});
om.core.children = (function children(node){
var c = node.props.children;
if(cljs.core.ifn_QMARK_(c)){
return node.props.children = (function (){var G__20283 = node;
return (c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(G__20283) : c.call(null,G__20283));
})();
} else {
return c;
}
});
/**
* Given an owning Pure node return the Om props. Analogous to React
* component props.
*/
om.core.get_props = (function() {
var get_props = null;
var get_props__1 = (function (x){

return (x.props["__om_cursor"]);
});
var get_props__2 = (function (x,korks){

var korks__$1 = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
var G__20285 = (x.props["__om_cursor"]);
var G__20285__$1 = ((cljs.core.seq(korks__$1))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(G__20285,korks__$1):G__20285);
return G__20285__$1;
});
get_props = function(x,korks){
switch(arguments.length){
case 1:
return get_props__1.call(this,x);
case 2:
return get_props__2.call(this,x,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_props.cljs$core$IFn$_invoke$arity$1 = get_props__1;
get_props.cljs$core$IFn$_invoke$arity$2 = get_props__2;
return get_props;
})()
;
/**
* Returns the component local state of an owning component. owner is
* the component. An optional key or sequence of keys may be given to
* extract a specific value. Always returns pending state.
*/
om.core.get_state = (function() {
var get_state = null;
var get_state__1 = (function (owner){

return om.core._get_state.cljs$core$IFn$_invoke$arity$1(owner);
});
var get_state__2 = (function (owner,korks){

var ks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_state.cljs$core$IFn$_invoke$arity$2(owner,ks);
});
get_state = function(owner,korks){
switch(arguments.length){
case 1:
return get_state__1.call(this,owner);
case 2:
return get_state__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_state.cljs$core$IFn$_invoke$arity$1 = get_state__1;
get_state.cljs$core$IFn$_invoke$arity$2 = get_state__2;
return get_state;
})()
;
/**
* Takes an owner and returns a map of global shared values for a
* render loop. An optional key or sequence of keys may be given to
* extract a specific value.
*/
om.core.get_shared = (function() {
var get_shared = null;
var get_shared__1 = (function (owner){
if((owner == null)){
return null;
} else {
return (owner.props["__om_shared"]);
}
});
var get_shared__2 = (function (owner,korks){
if(!(cljs.core.sequential_QMARK_(korks))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(get_shared.cljs$core$IFn$_invoke$arity$1(owner),korks);
} else {
if(cljs.core.empty_QMARK_(korks)){
return get_shared.cljs$core$IFn$_invoke$arity$1(owner);
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(get_shared.cljs$core$IFn$_invoke$arity$1(owner),korks);

}
}
});
get_shared = function(owner,korks){
switch(arguments.length){
case 1:
return get_shared__1.call(this,owner);
case 2:
return get_shared__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_shared.cljs$core$IFn$_invoke$arity$1 = get_shared__1;
get_shared.cljs$core$IFn$_invoke$arity$2 = get_shared__2;
return get_shared;
})()
;
om.core.merge_pending_state = (function merge_pending_state(owner){
var state = owner.state;
var temp__4126__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(temp__4126__auto__)){
var pending_state = temp__4126__auto__;
var G__20290 = state;
(G__20290["__om_prev_state"] = (state["__om_state"]));

(G__20290["__om_state"] = pending_state);

(G__20290["__om_pending_state"] = null);

return G__20290;
} else {
return null;
}
});
om.core.merge_props_state = (function() {
var merge_props_state = null;
var merge_props_state__1 = (function (owner){
return merge_props_state.cljs$core$IFn$_invoke$arity$2(owner,null);
});
var merge_props_state__2 = (function (owner,props){
var props__$1 = (function (){var or__3774__auto__ = props;
if(cljs.core.truth_(or__3774__auto__)){
return or__3774__auto__;
} else {
return owner.props;
}
})();
var temp__4126__auto__ = (props__$1["__om_state"]);
if(cljs.core.truth_(temp__4126__auto__)){
var props_state = temp__4126__auto__;
var state = owner.state;
(state["__om_pending_state"] = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var or__3774__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__3774__auto__)){
return or__3774__auto__;
} else {
return (state["__om_state"]);
}
})(),props_state], 0)));

return (props__$1["__om_state"] = null);
} else {
return null;
}
});
merge_props_state = function(owner,props){
switch(arguments.length){
case 1:
return merge_props_state__1.call(this,owner);
case 2:
return merge_props_state__2.call(this,owner,props);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge_props_state.cljs$core$IFn$_invoke$arity$1 = merge_props_state__1;
merge_props_state.cljs$core$IFn$_invoke$arity$2 = merge_props_state__2;
return merge_props_state;
})()
;
om.core.ref_changed_QMARK_ = (function ref_changed_QMARK_(ref){
var val = om.core.value(ref);
var val_SINGLEQUOTE_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((function (){var G__20295 = om.core.state(ref);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20295) : cljs.core.deref.call(null,G__20295));
})(),(function (){var G__20296 = ref;
return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__20296) : om.core.path.call(null,G__20296));
})(),cljs.core.constant$keyword$89);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(val,val_SINGLEQUOTE_);
});
om.core.update_refs = (function update_refs(c){
var cstate = c.state;
var refs = (cstate["__om_refs"]);
if((cljs.core.count(refs) === (0))){
return null;
} else {
return (cstate["__om_refs"] = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cstate,refs){
return (function (ref){
var ref_val = om.core.value(ref);
var ref_state = om.core.state(ref);
var ref_path = (function (){var G__20302 = ref;
return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__20302) : om.core.path.call(null,G__20302));
})();
var ref_val_SINGLEQUOTE_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((function (){var G__20303 = ref_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20303) : cljs.core.deref.call(null,G__20303));
})(),ref_path,cljs.core.constant$keyword$89);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ref_val,cljs.core.constant$keyword$89)){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ref_val,ref_val_SINGLEQUOTE_)){
return om.core.adapt(ref,(function (){var G__20304 = ref_val_SINGLEQUOTE_;
var G__20305 = ref_state;
var G__20306 = ref_path;
return (om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 ? om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(G__20304,G__20305,G__20306) : om.core.to_cursor.call(null,G__20304,G__20305,G__20306));
})());
} else {
return ref;
}
} else {
return null;
}
});})(cstate,refs))
,refs))));
}
});
om.core.pure_methods = cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$90,cljs.core.constant$keyword$91,cljs.core.constant$keyword$92,cljs.core.constant$keyword$93,cljs.core.constant$keyword$94,cljs.core.constant$keyword$95,cljs.core.constant$keyword$96,cljs.core.constant$keyword$97,cljs.core.constant$keyword$98,cljs.core.constant$keyword$99,cljs.core.constant$keyword$100],[(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children(this$);
if((function (){var G__20308 = c;
if(G__20308){
var bit__4455__auto__ = null;
if(cljs.core.truth_((function (){var or__3774__auto__ = bit__4455__auto__;
if(cljs.core.truth_(or__3774__auto__)){
return or__3774__auto__;
} else {
return G__20308.om$core$IDidUpdate$;
}
})())){
return true;
} else {
if((!G__20308.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,G__20308);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,G__20308);
}
})()){
var state_20333 = this$.state;
om.core.did_update(c,om.core.get_props.cljs$core$IFn$_invoke$arity$1({"isOmComponent": true, "props": prev_props}),(function (){var or__3774__auto__ = (state_20333["__om_prev_state"]);
if(cljs.core.truth_(or__3774__auto__)){
return or__3774__auto__;
} else {
return (state_20333["__om_state"]);
}
})());
} else {
}

return (this$.state["__om_prev_state"] = null);
}),true,(function (){
var this$ = this;
var c = om.core.children(this$);
var cursor = (this$.props["__om_cursor"]);
if((function (){var G__20309 = c;
if(G__20309){
var bit__4455__auto__ = null;
if(cljs.core.truth_((function (){var or__3774__auto__ = bit__4455__auto__;
if(cljs.core.truth_(or__3774__auto__)){
return or__3774__auto__;
} else {
return G__20309.om$core$IWillUnmount$;
}
})())){
return true;
} else {
if((!G__20309.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,G__20309);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,G__20309);
}
})()){
om.core.will_unmount(c);
} else {
}

var temp__4126__auto__ = cljs.core.seq((this$.state["__om_refs"]));
if(temp__4126__auto__){
var refs = temp__4126__auto__;
var seq__20310 = cljs.core.seq(refs);
var chunk__20311 = null;
var count__20312 = (0);
var i__20313 = (0);
while(true){
if((i__20313 < count__20312)){
var ref = chunk__20311.cljs$core$IIndexed$_nth$arity$2(null,i__20313);
var G__20314_20334 = this$;
var G__20315_20335 = ref;
(om.core.unobserve.cljs$core$IFn$_invoke$arity$2 ? om.core.unobserve.cljs$core$IFn$_invoke$arity$2(G__20314_20334,G__20315_20335) : om.core.unobserve.call(null,G__20314_20334,G__20315_20335));

var G__20336 = seq__20310;
var G__20337 = chunk__20311;
var G__20338 = count__20312;
var G__20339 = (i__20313 + (1));
seq__20310 = G__20336;
chunk__20311 = G__20337;
count__20312 = G__20338;
i__20313 = G__20339;
continue;
} else {
var temp__4126__auto____$1 = cljs.core.seq(seq__20310);
if(temp__4126__auto____$1){
var seq__20310__$1 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__20310__$1)){
var c__4561__auto__ = cljs.core.chunk_first(seq__20310__$1);
var G__20340 = cljs.core.chunk_rest(seq__20310__$1);
var G__20341 = c__4561__auto__;
var G__20342 = cljs.core.count(c__4561__auto__);
var G__20343 = (0);
seq__20310 = G__20340;
chunk__20311 = G__20341;
count__20312 = G__20342;
i__20313 = G__20343;
continue;
} else {
var ref = cljs.core.first(seq__20310__$1);
var G__20316_20344 = this$;
var G__20317_20345 = ref;
(om.core.unobserve.cljs$core$IFn$_invoke$arity$2 ? om.core.unobserve.cljs$core$IFn$_invoke$arity$2(G__20316_20344,G__20317_20345) : om.core.unobserve.call(null,G__20316_20344,G__20317_20345));

var G__20346 = cljs.core.next(seq__20310__$1);
var G__20347 = null;
var G__20348 = (0);
var G__20349 = (0);
seq__20310 = G__20346;
chunk__20311 = G__20347;
count__20312 = G__20348;
i__20313 = G__20349;
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
}),(function (next_props){
var this$ = this;
var c = om.core.children(this$);
if((function (){var G__20318 = c;
if(G__20318){
var bit__4455__auto__ = null;
if(cljs.core.truth_((function (){var or__3774__auto__ = bit__4455__auto__;
if(cljs.core.truth_(or__3774__auto__)){
return or__3774__auto__;
} else {
return G__20318.om$core$IWillReceiveProps$;
}
})())){
return true;
} else {
if((!G__20318.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillReceiveProps,G__20318);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillReceiveProps,G__20318);
}
})()){
return om.core.will_receive_props(c,om.core.get_props.cljs$core$IFn$_invoke$arity$1({"isOmComponent": true, "props": next_props}));
} else {
return null;
}
}),(function (next_props,next_state){
var this$ = this;
var props = this$.props;
var state = this$.state;
var c = om.core.children(this$);
om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2(this$,next_props);

if((function (){var G__20319 = c;
if(G__20319){
var bit__4455__auto__ = null;
if(cljs.core.truth_((function (){var or__3774__auto__ = bit__4455__auto__;
if(cljs.core.truth_(or__3774__auto__)){
return or__3774__auto__;
} else {
return G__20319.om$core$IShouldUpdate$;
}
})())){
return true;
} else {
if((!G__20319.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IShouldUpdate,G__20319);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IShouldUpdate,G__20319);
}
})()){
return om.core.should_update(c,om.core.get_props.cljs$core$IFn$_invoke$arity$1({"isOmComponent": true, "props": next_props}),om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
var cursor = (props["__om_cursor"]);
var next_cursor = (next_props["__om_cursor"]);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.core._value(cursor),om.core._value(next_cursor))){
return true;
} else {
if((om.core.cursor_QMARK_(cursor)) && (om.core.cursor_QMARK_(next_cursor)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.core._path(cursor),om.core._path(next_cursor)))){
return true;
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$),om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(this$))){
return true;
} else {
if(cljs.core.truth_((function (){var and__3762__auto__ = !((cljs.core.count((state["__om_refs"])) === (0)));
if(and__3762__auto__){
return cljs.core.some(((function (and__3762__auto__,cursor,next_cursor,props,state,c,this$){
return (function (p1__20307_SHARP_){
return om.core.ref_changed_QMARK_(p1__20307_SHARP_);
});})(and__3762__auto__,cursor,next_cursor,props,state,c,this$))
,(state["__om_refs"]));
} else {
return and__3762__auto__;
}
})())){
return true;
} else {
if(!(((props["__om_index"]) === (next_props["__om_index"])))){
return true;
} else {
return false;

}
}
}
}
}
}
}),(function (){
var this$ = this;
var c = om.core.children(this$);
var props = this$.props;
var _STAR_parent_STAR_20320 = om.core._STAR_parent_STAR_;
var _STAR_state_STAR_20321 = om.core._STAR_state_STAR_;
var _STAR_instrument_STAR_20322 = om.core._STAR_instrument_STAR_;
var _STAR_descriptor_STAR_20323 = om.core._STAR_descriptor_STAR_;
var _STAR_root_key_STAR_20324 = om.core._STAR_root_key_STAR_;
om.core._STAR_parent_STAR_ = this$;

om.core._STAR_state_STAR_ = (props["__om_app_state"]);

om.core._STAR_instrument_STAR_ = (props["__om_instrument"]);

om.core._STAR_descriptor_STAR_ = (props["__om_descriptor"]);

om.core._STAR_root_key_STAR_ = (props["__om_root_key"]);

try{if((function (){var G__20325 = c;
if(G__20325){
var bit__4455__auto__ = null;
if(cljs.core.truth_((function (){var or__3774__auto__ = bit__4455__auto__;
if(cljs.core.truth_(or__3774__auto__)){
return or__3774__auto__;
} else {
return G__20325.om$core$IRender$;
}
})())){
return true;
} else {
if((!G__20325.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IRender,G__20325);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IRender,G__20325);
}
})()){
return om.core.render(c);
} else {
if((function (){var G__20326 = c;
if(G__20326){
var bit__4455__auto__ = null;
if(cljs.core.truth_((function (){var or__3774__auto__ = bit__4455__auto__;
if(cljs.core.truth_(or__3774__auto__)){
return or__3774__auto__;
} else {
return G__20326.om$core$IRenderProps$;
}
})())){
return true;
} else {
if((!G__20326.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,G__20326);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,G__20326);
}
})()){
return om.core.render_props(c,(props["__om_cursor"]),om.core.get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
if((function (){var G__20327 = c;
if(G__20327){
var bit__4455__auto__ = null;
if(cljs.core.truth_((function (){var or__3774__auto__ = bit__4455__auto__;
if(cljs.core.truth_(or__3774__auto__)){
return or__3774__auto__;
} else {
return G__20327.om$core$IRenderState$;
}
})())){
return true;
} else {
if((!G__20327.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,G__20327);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,G__20327);
}
})()){
return om.core.render_state(c,om.core.get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
return c;

}
}
}
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_20324;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_20323;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_20322;

om.core._STAR_state_STAR_ = _STAR_state_STAR_20321;

om.core._STAR_parent_STAR_ = _STAR_parent_STAR_20320;
}}),(function (next_props,next_state){
var this$ = this;
var c_20350 = om.core.children(this$);
if((function (){var G__20328 = c_20350;
if(G__20328){
var bit__4455__auto__ = null;
if(cljs.core.truth_((function (){var or__3774__auto__ = bit__4455__auto__;
if(cljs.core.truth_(or__3774__auto__)){
return or__3774__auto__;
} else {
return G__20328.om$core$IWillUpdate$;
}
})())){
return true;
} else {
if((!G__20328.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,G__20328);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,G__20328);
}
})()){
var state_20351 = this$.state;
om.core.will_update(c_20350,om.core.get_props.cljs$core$IFn$_invoke$arity$1({"isOmComponent": true, "props": next_props}),om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
}

om.core.merge_pending_state(this$);

return om.core.update_refs(this$);
}),(function (){
var this$ = this;
var c = om.core.children(this$);
var props = this$.props;
var istate = (function (){var or__3774__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__3774__auto__)){
return or__3774__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var id = cljs.core.constant$keyword$101.cljs$core$IFn$_invoke$arity$1(istate);
var ret = {"__om_state": cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(((function (){var G__20329 = c;
if(G__20329){
var bit__4455__auto__ = null;
if(cljs.core.truth_((function (){var or__3774__auto__ = bit__4455__auto__;
if(cljs.core.truth_(or__3774__auto__)){
return or__3774__auto__;
} else {
return G__20329.om$core$IInitState$;
}
})())){
return true;
} else {
if((!G__20329.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IInitState,G__20329);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IInitState,G__20329);
}
})())?om.core.init_state(c):null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(istate,cljs.core.constant$keyword$101)], 0)), "__om_id": (function (){var or__3774__auto__ = id;
if(cljs.core.truth_(or__3774__auto__)){
return or__3774__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})()};
(props["__om_init_state"] = null);

return ret;
}),(function (){
var this$ = this;
var c = om.core.children(this$);
var cursor = (this$.props["__om_cursor"]);
if((function (){var G__20330 = c;
if(G__20330){
var bit__4455__auto__ = null;
if(cljs.core.truth_((function (){var or__3774__auto__ = bit__4455__auto__;
if(cljs.core.truth_(or__3774__auto__)){
return or__3774__auto__;
} else {
return G__20330.om$core$IDidMount$;
}
})())){
return true;
} else {
if((!G__20330.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IDidMount,G__20330);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IDidMount,G__20330);
}
})()){
return om.core.did_mount(c);
} else {
return null;
}
}),(function (){
var this$ = this;
var c = om.core.children(this$);
if((function (){var G__20331 = c;
if(G__20331){
var bit__4455__auto__ = null;
if(cljs.core.truth_((function (){var or__3774__auto__ = bit__4455__auto__;
if(cljs.core.truth_(or__3774__auto__)){
return or__3774__auto__;
} else {
return G__20331.om$core$IDisplayName$;
}
})())){
return true;
} else {
if((!G__20331.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IDisplayName,G__20331);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IDisplayName,G__20331);
}
})()){
return om.core.display_name(c);
} else {
return null;
}
}),(function (){
var this$ = this;
om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1(this$);

var c_20352 = om.core.children(this$);
if((function (){var G__20332 = c_20352;
if(G__20332){
var bit__4455__auto__ = null;
if(cljs.core.truth_((function (){var or__3774__auto__ = bit__4455__auto__;
if(cljs.core.truth_(or__3774__auto__)){
return or__3774__auto__;
} else {
return G__20332.om$core$IWillMount$;
}
})())){
return true;
} else {
if((!G__20332.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillMount,G__20332);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillMount,G__20332);
}
})()){
om.core.will_mount(c_20352);
} else {
}

return om.core.merge_pending_state(this$);
})]);
om.core.specify_state_methods_BANG_ = (function specify_state_methods_BANG_(obj){
var x20354 = obj;
x20354.om$core$IGetState$ = true;

x20354.om$core$IGetState$_get_state$arity$1 = ((function (x20354){
return (function (this$){
var this$__$1 = this;
var state = this$__$1.state;
var or__3774__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__3774__auto__)){
return or__3774__auto__;
} else {
return (state["__om_state"]);
}
});})(x20354))
;

x20354.om$core$IGetState$_get_state$arity$2 = ((function (x20354){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x20354))
;

x20354.om$core$IGetRenderState$ = true;

x20354.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x20354){
return (function (this$){
var this$__$1 = this;
return (this$__$1.state["__om_state"]);
});})(x20354))
;

x20354.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x20354){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x20354))
;

x20354.om$core$ISetState$ = true;

x20354.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x20354){
return (function (this$,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var app_state = (props["__om_app_state"]);
(this$__$1.state["__om_pending_state"] = val);

if(cljs.core.truth_((function (){var and__3762__auto__ = !((app_state == null));
if(and__3762__auto__){
return render;
} else {
return and__3762__auto__;
}
})())){
return om.core._queue_render_BANG_(app_state,this$__$1);
} else {
return null;
}
});})(x20354))
;

x20354.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x20354){
return (function (this$,ks,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var state = this$__$1.state;
var pstate = om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1);
var app_state = (props["__om_app_state"]);
(state["__om_pending_state"] = cljs.core.assoc_in(pstate,ks,val));

if(cljs.core.truth_((function (){var and__3762__auto__ = !((app_state == null));
if(and__3762__auto__){
return render;
} else {
return and__3762__auto__;
}
})())){
return om.core._queue_render_BANG_(app_state,this$__$1);
} else {
return null;
}
});})(x20354))
;

return x20354;
});
om.core.pure_descriptor = om.core.specify_state_methods_BANG_(cljs.core.clj__GT_js(om.core.pure_methods));
om.core.react_id = (function react_id(x){
var id = (x["_rootNodeID"]);

return id;
});
om.core.get_gstate = (function get_gstate(owner){
return (owner.props["__om_app_state"]);
});
om.core.no_local_merge_pending_state = (function no_local_merge_pending_state(owner){
var gstate = om.core.get_gstate(owner);
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$102,om.core.react_id(owner)], null);
var states = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__20356 = gstate;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20356) : cljs.core.deref.call(null,G__20356));
})(),spath);
if(cljs.core.truth_(cljs.core.constant$keyword$103.cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(gstate,cljs.core.update_in,spath,((function (gstate,spath,states){
return (function (states__$1){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(states__$1,cljs.core.constant$keyword$104,cljs.core.constant$keyword$105.cljs$core$IFn$_invoke$arity$1(states__$1)),cljs.core.constant$keyword$105,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$105.cljs$core$IFn$_invoke$arity$1(states__$1),cljs.core.constant$keyword$103.cljs$core$IFn$_invoke$arity$1(states__$1)], 0))),cljs.core.constant$keyword$103);
});})(gstate,spath,states))
);
} else {
return null;
}
});
om.core.no_local_state_methods = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(om.core.pure_methods,cljs.core.constant$keyword$97,(function (){
var this$ = this;
var c = om.core.children(this$);
var props = this$.props;
var istate = (function (){var or__3774__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__3774__auto__)){
return or__3774__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var om_id = (function (){var or__3774__auto__ = cljs.core.constant$keyword$101.cljs$core$IFn$_invoke$arity$1(istate);
if(cljs.core.truth_(or__3774__auto__)){
return or__3774__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})();
var state = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(istate,cljs.core.constant$keyword$101),(((function (){var G__20357 = c;
if(G__20357){
var bit__4455__auto__ = null;
if(cljs.core.truth_((function (){var or__3774__auto__ = bit__4455__auto__;
if(cljs.core.truth_(or__3774__auto__)){
return or__3774__auto__;
} else {
return G__20357.om$core$IInitState$;
}
})())){
return true;
} else {
if((!G__20357.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IInitState,G__20357);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IInitState,G__20357);
}
})())?om.core.init_state(c):null)], 0));
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$102,om.core.react_id(this$),cljs.core.constant$keyword$105], null);
(props["__om_init_state"] = null);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.get_gstate(this$),cljs.core.assoc_in,spath,state);

return {"__om_id": om_id};
}),cljs.core.array_seq([cljs.core.constant$keyword$100,(function (){
var this$ = this;
om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1(this$);

var c_20371 = om.core.children(this$);
if((function (){var G__20358 = c_20371;
if(G__20358){
var bit__4455__auto__ = null;
if(cljs.core.truth_((function (){var or__3774__auto__ = bit__4455__auto__;
if(cljs.core.truth_(or__3774__auto__)){
return or__3774__auto__;
} else {
return G__20358.om$core$IWillMount$;
}
})())){
return true;
} else {
if((!G__20358.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillMount,G__20358);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillMount,G__20358);
}
})()){
om.core.will_mount(c_20371);
} else {
}

return om.core.no_local_merge_pending_state(this$);
}),cljs.core.constant$keyword$92,(function (){
var this$ = this;
var c = om.core.children(this$);
if((function (){var G__20359 = c;
if(G__20359){
var bit__4455__auto__ = null;
if(cljs.core.truth_((function (){var or__3774__auto__ = bit__4455__auto__;
if(cljs.core.truth_(or__3774__auto__)){
return or__3774__auto__;
} else {
return G__20359.om$core$IWillUnmount$;
}
})())){
return true;
} else {
if((!G__20359.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,G__20359);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,G__20359);
}
})()){
om.core.will_unmount(c);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(om.core.get_gstate(this$),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$102], null),cljs.core.dissoc,cljs.core.array_seq([om.core.react_id(this$)], 0));

var temp__4126__auto__ = cljs.core.seq((this$.state["__om_refs"]));
if(temp__4126__auto__){
var refs = temp__4126__auto__;
var seq__20360 = cljs.core.seq(refs);
var chunk__20361 = null;
var count__20362 = (0);
var i__20363 = (0);
while(true){
if((i__20363 < count__20362)){
var ref = chunk__20361.cljs$core$IIndexed$_nth$arity$2(null,i__20363);
var G__20364_20372 = this$;
var G__20365_20373 = ref;
(om.core.unobserve.cljs$core$IFn$_invoke$arity$2 ? om.core.unobserve.cljs$core$IFn$_invoke$arity$2(G__20364_20372,G__20365_20373) : om.core.unobserve.call(null,G__20364_20372,G__20365_20373));

var G__20374 = seq__20360;
var G__20375 = chunk__20361;
var G__20376 = count__20362;
var G__20377 = (i__20363 + (1));
seq__20360 = G__20374;
chunk__20361 = G__20375;
count__20362 = G__20376;
i__20363 = G__20377;
continue;
} else {
var temp__4126__auto____$1 = cljs.core.seq(seq__20360);
if(temp__4126__auto____$1){
var seq__20360__$1 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__20360__$1)){
var c__4561__auto__ = cljs.core.chunk_first(seq__20360__$1);
var G__20378 = cljs.core.chunk_rest(seq__20360__$1);
var G__20379 = c__4561__auto__;
var G__20380 = cljs.core.count(c__4561__auto__);
var G__20381 = (0);
seq__20360 = G__20378;
chunk__20361 = G__20379;
count__20362 = G__20380;
i__20363 = G__20381;
continue;
} else {
var ref = cljs.core.first(seq__20360__$1);
var G__20366_20382 = this$;
var G__20367_20383 = ref;
(om.core.unobserve.cljs$core$IFn$_invoke$arity$2 ? om.core.unobserve.cljs$core$IFn$_invoke$arity$2(G__20366_20382,G__20367_20383) : om.core.unobserve.call(null,G__20366_20382,G__20367_20383));

var G__20384 = cljs.core.next(seq__20360__$1);
var G__20385 = null;
var G__20386 = (0);
var G__20387 = (0);
seq__20360 = G__20384;
chunk__20361 = G__20385;
count__20362 = G__20386;
i__20363 = G__20387;
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
}),cljs.core.constant$keyword$96,(function (next_props,next_state){
var this$ = this;
var props_20388 = this$.props;
var c_20389 = om.core.children(this$);
if((function (){var G__20368 = c_20389;
if(G__20368){
var bit__4455__auto__ = null;
if(cljs.core.truth_((function (){var or__3774__auto__ = bit__4455__auto__;
if(cljs.core.truth_(or__3774__auto__)){
return or__3774__auto__;
} else {
return G__20368.om$core$IWillUpdate$;
}
})())){
return true;
} else {
if((!G__20368.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,G__20368);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,G__20368);
}
})()){
var state_20390 = this$.state;
om.core.will_update(c_20389,om.core.get_props.cljs$core$IFn$_invoke$arity$1({"isOmComponent": true, "props": next_props}),om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
}

om.core.no_local_merge_pending_state(this$);

return om.core.update_refs(this$);
}),cljs.core.constant$keyword$90,(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children(this$);
var gstate = om.core.get_gstate(this$);
var states = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__20369 = gstate;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20369) : cljs.core.deref.call(null,G__20369));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$102,om.core.react_id(this$)], null));
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$102,om.core.react_id(this$)], null);
if((function (){var G__20370 = c;
if(G__20370){
var bit__4455__auto__ = null;
if(cljs.core.truth_((function (){var or__3774__auto__ = bit__4455__auto__;
if(cljs.core.truth_(or__3774__auto__)){
return or__3774__auto__;
} else {
return G__20370.om$core$IDidUpdate$;
}
})())){
return true;
} else {
if((!G__20370.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,G__20370);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,G__20370);
}
})()){
var state_20391 = this$.state;
om.core.did_update(c,om.core.get_props.cljs$core$IFn$_invoke$arity$1({"isOmComponent": true, "props": prev_props}),(function (){var or__3774__auto__ = cljs.core.constant$keyword$104.cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__3774__auto__)){
return or__3774__auto__;
} else {
return cljs.core.constant$keyword$105.cljs$core$IFn$_invoke$arity$1(states);
}
})());
} else {
}

if(cljs.core.truth_(cljs.core.constant$keyword$104.cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(gstate,cljs.core.update_in,spath,cljs.core.dissoc,cljs.core.array_seq([cljs.core.constant$keyword$104], 0));
} else {
return null;
}
})], 0));
om.core.no_local_descriptor = (function no_local_descriptor(methods$){
var x20395 = cljs.core.clj__GT_js(methods$);
x20395.om$core$IGetState$ = true;

x20395.om$core$IGetState$_get_state$arity$1 = ((function (x20395){
return (function (this$){
var this$__$1 = this;
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$102,om.core.react_id(this$__$1)], null);
var states = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__20396 = om.core.get_gstate(this$__$1);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20396) : cljs.core.deref.call(null,G__20396));
})(),spath);
var or__3774__auto__ = cljs.core.constant$keyword$103.cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__3774__auto__)){
return or__3774__auto__;
} else {
return cljs.core.constant$keyword$105.cljs$core$IFn$_invoke$arity$1(states);
}
});})(x20395))
;

x20395.om$core$IGetState$_get_state$arity$2 = ((function (x20395){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x20395))
;

x20395.om$core$IGetRenderState$ = true;

x20395.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x20395){
return (function (this$){
var this$__$1 = this;
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$102,om.core.react_id(this$__$1),cljs.core.constant$keyword$105], null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__20397 = om.core.get_gstate(this$__$1);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20397) : cljs.core.deref.call(null,G__20397));
})(),spath);
});})(x20395))
;

x20395.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x20395){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x20395))
;

x20395.om$core$ISetState$ = true;

x20395.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x20395){
return (function (this$,val,render){
var this$__$1 = this;
var gstate = om.core.get_gstate(this$__$1);
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$102,om.core.react_id(this$__$1),cljs.core.constant$keyword$103], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.get_gstate(this$__$1),cljs.core.assoc_in,spath,val);

if(cljs.core.truth_((function (){var and__3762__auto__ = !((gstate == null));
if(and__3762__auto__){
return render;
} else {
return and__3762__auto__;
}
})())){
return om.core._queue_render_BANG_(gstate,this$__$1);
} else {
return null;
}
});})(x20395))
;

x20395.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x20395){
return (function (this$,ks,val,render){
var this$__$1 = this;
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$1,cljs.core.assoc_in(om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks,val),render);
});})(x20395))
;

return x20395;
});
om.core.valid_QMARK_ = (function valid_QMARK_(x){
if((function (){var G__20400 = x;
if(G__20400){
var bit__4455__auto__ = null;
if(cljs.core.truth_((function (){var or__3774__auto__ = bit__4455__auto__;
if(cljs.core.truth_(or__3774__auto__)){
return or__3774__auto__;
} else {
return G__20400.om$core$ICursor$;
}
})())){
return true;
} else {
if((!G__20400.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.ICursor,G__20400);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.ICursor,G__20400);
}
})()){
return !(cljs.core.keyword_identical_QMARK_((function (){var G__20401 = x;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20401) : cljs.core.deref.call(null,G__20401));
})(),cljs.core.constant$keyword$106));
} else {
return true;
}
});

/**
* @constructor
*/
om.core.MapCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2163640079;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this$__$1,k,null);
});

om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var v = cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.value,k,cljs.core.constant$keyword$89);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.constant$keyword$89))){
return om.core._derive(this$__$1,v,self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,k));
} else {
return not_found;
}
});

om.core.MapCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce(self__.value,f,init);
});

om.core.MapCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer(self__.value,writer,opts);
});

om.core.MapCursor.prototype.om$core$ICursor$ = true;

om.core.MapCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.MapCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.MapCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta(self__.value);
});

om.core.MapCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(self__.value,self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count(self__.value);
});

om.core.MapCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash(self__.value);
});

om.core.MapCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(om.core.cursor_QMARK_(other)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,om.core._value(other));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,other);
}
});

om.core.MapCursor.prototype.om$core$IValue$ = true;

om.core.MapCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.MapCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.empty(self__.value),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._dissoc(self__.value,k),self__.state,self__.path));
});

om.core.MapCursor.prototype.om$core$ITransact$ = true;

om.core.MapCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_(self__.state,this$__$1,korks,f,tag);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_(self__.value,k);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._assoc(self__.value,k,v),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count(self__.value) > (0))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (this$__$1){
return (function (p__20403){
var vec__20404 = p__20403;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20404,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20404,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om.core._derive(this$__$1,v,self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,k))], null);
});})(this$__$1))
,self__.value);
} else {
return null;
}
});

om.core.MapCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.with_meta(self__.value,new_meta),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._conj(self__.value,o),self__.state,self__.path));
});

om.core.MapCursor.prototype.call = (function() {
var G__20406 = null;
var G__20406__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__20406__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__20406 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__20406__2.call(this,self__,k);
case 3:
return G__20406__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20406.cljs$core$IFn$_invoke$arity$2 = G__20406__2;
G__20406.cljs$core$IFn$_invoke$arity$3 = G__20406__3;
return G__20406;
})()
;

om.core.MapCursor.prototype.apply = (function (self__,args20402){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args20402)));
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

om.core.MapCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((function (){var G__20405 = self__.state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20405) : cljs.core.deref.call(null,G__20405));
})(),self__.path,cljs.core.constant$keyword$106);
});

om.core.MapCursor.cljs$lang$type = true;

om.core.MapCursor.cljs$lang$ctorStr = "om.core/MapCursor";

om.core.MapCursor.cljs$lang$ctorPrWriter = (function (this__4361__auto__,writer__4362__auto__,opt__4363__auto__){
return cljs.core._write(writer__4362__auto__,"om.core/MapCursor");
});

om.core.__GT_MapCursor = (function __GT_MapCursor(value,state,path){
return (new om.core.MapCursor(value,state,path));
});


/**
* @constructor
*/
om.core.IndexedCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2180424479;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(this$__$1,n,null);
});

om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(this$__$1,n,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce(self__.value,f,init);
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return om.core._derive(this$__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.value,n),self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,n));
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
if((n < cljs.core._count(self__.value))){
return om.core._derive(this$__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$3(self__.value,n,not_found),self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,n));
} else {
return not_found;
}
});

om.core.IndexedCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer(self__.value,writer,opts);
});

om.core.IndexedCursor.prototype.om$core$ICursor$ = true;

om.core.IndexedCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.IndexedCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.IndexedCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta(self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(self__.value,self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count(self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive(this$__$1,cljs.core._peek(self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive(this$__$1,cljs.core._pop(self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash(self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(om.core.cursor_QMARK_(other)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,om.core._value(other));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,other);
}
});

om.core.IndexedCursor.prototype.om$core$IValue$ = true;

om.core.IndexedCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.IndexedCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.empty(self__.value),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.om$core$ITransact$ = true;

om.core.IndexedCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_(self__.state,this$__$1,korks,f,tag);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_(self__.value,k);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,n,v){
var self__ = this;
var this$__$1 = this;
return om.core._derive(this$__$1,cljs.core._assoc_n(self__.value,n,v),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count(self__.value) > (0))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (this$__$1){
return (function (v,i){
return om.core._derive(this$__$1,v,self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,i));
});})(this$__$1))
,self__.value,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
} else {
return null;
}
});

om.core.IndexedCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.with_meta(self__.value,new_meta),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core._conj(self__.value,o),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.call = (function() {
var G__20409 = null;
var G__20409__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__20409__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__20409 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__20409__2.call(this,self__,k);
case 3:
return G__20409__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20409.cljs$core$IFn$_invoke$arity$2 = G__20409__2;
G__20409.cljs$core$IFn$_invoke$arity$3 = G__20409__3;
return G__20409;
})()
;

om.core.IndexedCursor.prototype.apply = (function (self__,args20407){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args20407)));
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((function (){var G__20408 = self__.state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20408) : cljs.core.deref.call(null,G__20408));
})(),self__.path,cljs.core.constant$keyword$106);
});

om.core.IndexedCursor.cljs$lang$type = true;

om.core.IndexedCursor.cljs$lang$ctorStr = "om.core/IndexedCursor";

om.core.IndexedCursor.cljs$lang$ctorPrWriter = (function (this__4361__auto__,writer__4362__auto__,opt__4363__auto__){
return cljs.core._write(writer__4362__auto__,"om.core/IndexedCursor");
});

om.core.__GT_IndexedCursor = (function __GT_IndexedCursor(value,state,path){
return (new om.core.IndexedCursor(value,state,path));
});

om.core.to_cursor_STAR_ = (function to_cursor_STAR_(val,state,path){
var x20412 = cljs.core.clone(val);
x20412.cljs$core$IEquiv$ = true;

x20412.cljs$core$IEquiv$_equiv$arity$2 = ((function (x20412){
return (function (_,other){
var ___$1 = this;
if(om.core.cursor_QMARK_(other)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,om.core._value(other));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,other);
}
});})(x20412))
;

x20412.om$core$ITransact$ = true;

x20412.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x20412){
return (function (this$,korks,f,tag){
var this$__$1 = this;
return om.core.transact_STAR_(state,this$__$1,korks,f,tag);
});})(x20412))
;

x20412.om$core$ICursor$ = true;

x20412.om$core$ICursor$_path$arity$1 = ((function (x20412){
return (function (_){
var ___$1 = this;
return path;
});})(x20412))
;

x20412.om$core$ICursor$_state$arity$1 = ((function (x20412){
return (function (_){
var ___$1 = this;
return state;
});})(x20412))
;

x20412.cljs$core$IDeref$ = true;

x20412.cljs$core$IDeref$_deref$arity$1 = ((function (x20412){
return (function (this$){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((function (){var G__20413 = state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20413) : cljs.core.deref.call(null,G__20413));
})(),path,cljs.core.constant$keyword$106);
});})(x20412))
;

return x20412;
});
om.core.to_cursor = (function() {
var to_cursor = null;
var to_cursor__1 = (function (val){
return to_cursor.cljs$core$IFn$_invoke$arity$3(val,null,cljs.core.PersistentVector.EMPTY);
});
var to_cursor__2 = (function (val,state){
return to_cursor.cljs$core$IFn$_invoke$arity$3(val,state,cljs.core.PersistentVector.EMPTY);
});
var to_cursor__3 = (function (val,state,path){
if(om.core.cursor_QMARK_(val)){
return val;
} else {
if((function (){var G__20422 = val;
if(G__20422){
var bit__4455__auto__ = null;
if(cljs.core.truth_((function (){var or__3774__auto__ = bit__4455__auto__;
if(cljs.core.truth_(or__3774__auto__)){
return or__3774__auto__;
} else {
return G__20422.om$core$IToCursor$;
}
})())){
return true;
} else {
if((!G__20422.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IToCursor,G__20422);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IToCursor,G__20422);
}
})()){
return om.core._to_cursor.cljs$core$IFn$_invoke$arity$3(val,state,path);
} else {
if(cljs.core.indexed_QMARK_(val)){
return (new om.core.IndexedCursor(val,state,path));
} else {
if(cljs.core.map_QMARK_(val)){
return (new om.core.MapCursor(val,state,path));
} else {
if((function (){var G__20423 = val;
if(G__20423){
var bit__4455__auto__ = (G__20423.cljs$lang$protocol_mask$partition1$ & (8192));
if((bit__4455__auto__) || (G__20423.cljs$core$ICloneable$)){
return true;
} else {
if((!G__20423.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,G__20423);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,G__20423);
}
})()){
return om.core.to_cursor_STAR_(val,state,path);
} else {
return val;

}
}
}
}
}
});
to_cursor = function(val,state,path){
switch(arguments.length){
case 1:
return to_cursor__1.call(this,val);
case 2:
return to_cursor__2.call(this,val,state);
case 3:
return to_cursor__3.call(this,val,state,path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
to_cursor.cljs$core$IFn$_invoke$arity$1 = to_cursor__1;
to_cursor.cljs$core$IFn$_invoke$arity$2 = to_cursor__2;
to_cursor.cljs$core$IFn$_invoke$arity$3 = to_cursor__3;
return to_cursor;
})()
;
om.core.notify_STAR_ = (function notify_STAR_(cursor,tx_data){
var state = om.core._state(cursor);
return om.core._notify_BANG_(state,tx_data,om.core.to_cursor.cljs$core$IFn$_invoke$arity$2((function (){var G__20425 = state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20425) : cljs.core.deref.call(null,G__20425));
})(),state));
});


/**
* Given an application state atom return a root cursor for it.
*/
om.core.root_cursor = (function root_cursor(atom){

return om.core.to_cursor.cljs$core$IFn$_invoke$arity$3((function (){var G__20427 = atom;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20427) : cljs.core.deref.call(null,G__20427));
})(),atom,cljs.core.PersistentVector.EMPTY);
});
om.core._refs = (function (){var G__20428 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20428) : cljs.core.atom.call(null,G__20428));
})();
om.core.ref_sub_cursor = (function ref_sub_cursor(x,parent){
var x20437 = cljs.core.clone(x);
x20437.om$core$ITransact$ = true;

x20437.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x20437){
return (function (cursor,korks,f,tag){
var cursor__$1 = this;
var G__20438_20441 = cursor__$1;
var G__20439_20442 = korks;
var G__20440_20443 = f;
(om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3 ? om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3(G__20438_20441,G__20439_20442,G__20440_20443) : om.core.commit_BANG_.call(null,G__20438_20441,G__20439_20442,G__20440_20443));

return om.core._refresh_deps_BANG_(parent);
});})(x20437))
;

x20437.om$core$ICursorDerive$ = true;

x20437.om$core$ICursorDerive$_derive$arity$4 = ((function (x20437){
return (function (this$,derived,state,path){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(derived,state,path);
if(om.core.cursor_QMARK_(cursor_SINGLEQUOTE_)){
return om.core.adapt(this$__$1,cursor_SINGLEQUOTE_);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x20437))
;

x20437.om$core$IAdapt$ = true;

x20437.om$core$IAdapt$_adapt$arity$2 = ((function (x20437){
return (function (this$,other){
var this$__$1 = this;
return ref_sub_cursor(om.core.adapt(x,other),parent);
});})(x20437))
;

x20437.cljs$core$ICloneable$ = true;

x20437.cljs$core$ICloneable$_clone$arity$1 = ((function (x20437){
return (function (this$){
var this$__$1 = this;
return ref_sub_cursor(cljs.core.clone(x),parent);
});})(x20437))
;

return x20437;
});
/**
* Given a cursor return a reference cursor that inherits all of the
* properties and methods of the cursor. Reference cursors may be
* observed via om.core/observe.
*/
om.core.ref_cursor = (function ref_cursor(cursor){

if((function (){var G__20459 = cursor;
if(G__20459){
var bit__4455__auto__ = null;
if(cljs.core.truth_((function (){var or__3774__auto__ = bit__4455__auto__;
if(cljs.core.truth_(or__3774__auto__)){
return or__3774__auto__;
} else {
return G__20459.om$core$IOmRef$;
}
})())){
return true;
} else {
if((!G__20459.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IOmRef,G__20459);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IOmRef,G__20459);
}
})()){
return cursor;
} else {
var path = (function (){var G__20460 = cursor;
return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__20460) : om.core.path.call(null,G__20460));
})();
var storage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core._refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,(function (){var G__20461 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20461) : cljs.core.atom.call(null,G__20461));
})())),path);
var x20462 = cljs.core.clone(cursor);
x20462.om$core$ITransact$ = true;

x20462.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x20462,path,storage){
return (function (cursor__$1,korks,f,tag){
var cursor__$2 = this;
var G__20463_20474 = cursor__$2;
var G__20464_20475 = korks;
var G__20465_20476 = f;
(om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3 ? om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3(G__20463_20474,G__20464_20475,G__20465_20476) : om.core.commit_BANG_.call(null,G__20463_20474,G__20464_20475,G__20465_20476));

return om.core._refresh_deps_BANG_(cursor__$2);
});})(x20462,path,storage))
;

x20462.om$core$IOmRef$ = true;

x20462.om$core$IOmRef$_add_dep_BANG_$arity$2 = ((function (x20462,path,storage){
return (function (_,c){
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(storage,cljs.core.assoc,(function (){var G__20466 = c;
return (om.core.id.cljs$core$IFn$_invoke$arity$1 ? om.core.id.cljs$core$IFn$_invoke$arity$1(G__20466) : om.core.id.call(null,G__20466));
})(),c);
});})(x20462,path,storage))
;

x20462.om$core$IOmRef$_remove_dep_BANG_$arity$2 = ((function (x20462,path,storage){
return (function (_,c){
var ___$1 = this;
var m = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(storage,cljs.core.dissoc,(function (){var G__20467 = c;
return (om.core.id.cljs$core$IFn$_invoke$arity$1 ? om.core.id.cljs$core$IFn$_invoke$arity$1(G__20467) : om.core.id.call(null,G__20467));
})());
if((cljs.core.count(m) === (0))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core._refs,cljs.core.dissoc,path);
} else {
return null;
}
});})(x20462,path,storage))
;

x20462.om$core$IOmRef$_refresh_deps_BANG_$arity$1 = ((function (x20462,path,storage){
return (function (_){
var ___$1 = this;
var seq__20468 = cljs.core.seq(cljs.core.vals((function (){var G__20472 = storage;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20472) : cljs.core.deref.call(null,G__20472));
})()));
var chunk__20469 = null;
var count__20470 = (0);
var i__20471 = (0);
while(true){
if((i__20471 < count__20470)){
var c = chunk__20469.cljs$core$IIndexed$_nth$arity$2(null,i__20471);
om.core._queue_render_BANG_(om.core.state(cursor),c);

var G__20477 = seq__20468;
var G__20478 = chunk__20469;
var G__20479 = count__20470;
var G__20480 = (i__20471 + (1));
seq__20468 = G__20477;
chunk__20469 = G__20478;
count__20470 = G__20479;
i__20471 = G__20480;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__20468);
if(temp__4126__auto__){
var seq__20468__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20468__$1)){
var c__4561__auto__ = cljs.core.chunk_first(seq__20468__$1);
var G__20481 = cljs.core.chunk_rest(seq__20468__$1);
var G__20482 = c__4561__auto__;
var G__20483 = cljs.core.count(c__4561__auto__);
var G__20484 = (0);
seq__20468 = G__20481;
chunk__20469 = G__20482;
count__20470 = G__20483;
i__20471 = G__20484;
continue;
} else {
var c = cljs.core.first(seq__20468__$1);
om.core._queue_render_BANG_(om.core.state(cursor),c);

var G__20485 = cljs.core.next(seq__20468__$1);
var G__20486 = null;
var G__20487 = (0);
var G__20488 = (0);
seq__20468 = G__20485;
chunk__20469 = G__20486;
count__20470 = G__20487;
i__20471 = G__20488;
continue;
}
} else {
return null;
}
}
break;
}
});})(x20462,path,storage))
;

x20462.om$core$IOmRef$_get_deps$arity$1 = ((function (x20462,path,storage){
return (function (_){
var ___$1 = this;
var G__20473 = storage;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20473) : cljs.core.deref.call(null,G__20473));
});})(x20462,path,storage))
;

x20462.om$core$ICursorDerive$ = true;

x20462.om$core$ICursorDerive$_derive$arity$4 = ((function (x20462,path,storage){
return (function (this$,derived,state,path__$1){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(derived,state,path__$1);
if(om.core.cursor_QMARK_(cursor_SINGLEQUOTE_)){
return om.core.ref_sub_cursor(cursor_SINGLEQUOTE_,this$__$1);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x20462,path,storage))
;

return x20462;
}
});
om.core.add_ref_to_component_BANG_ = (function add_ref_to_component_BANG_(c,ref){
var state = c.state;
var refs = (function (){var or__3774__auto__ = (state["__om_refs"]);
if(cljs.core.truth_(or__3774__auto__)){
return or__3774__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.contains_QMARK_(refs,ref)){
return null;
} else {
return (state["__om_refs"] = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(refs,ref));
}
});
om.core.remove_ref_from_component_BANG_ = (function remove_ref_from_component_BANG_(c,ref){
var state = c.state;
var refs = (state["__om_refs"]);
if(cljs.core.contains_QMARK_(refs,ref)){
return (state["__om_refs"] = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(refs,ref));
} else {
return null;
}
});
/**
* Given a component and a reference cursor have the component observe
* the reference cursor for any data changes.
*/
om.core.observe = (function observe(c,ref){


om.core.add_ref_to_component_BANG_(c,ref);

om.core._add_dep_BANG_(ref,c);

return ref;
});
om.core.unobserve = (function unobserve(c,ref){
om.core.remove_ref_from_component_BANG_(c,ref);

om.core._remove_dep_BANG_(ref,c);

return ref;
});
om.core.refresh_queued = false;
om.core.refresh_set = (function (){var G__20489 = cljs.core.PersistentHashSet.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20489) : cljs.core.atom.call(null,G__20489));
})();
om.core.get_renderT = (function get_renderT(state){
var or__3774__auto__ = state.om$render$T;
if(cljs.core.truth_(or__3774__auto__)){
return or__3774__auto__;
} else {
return (0);
}
});
/**
* Force a render of *all* roots. Usage of this function is almost
* never recommended.
*/
om.core.render_all = (function() {
var render_all = null;
var render_all__0 = (function (){
return render_all.cljs$core$IFn$_invoke$arity$1(null);
});
var render_all__1 = (function (state){
om.core.refresh_queued = false;

var seq__20496_20501 = cljs.core.seq((function (){var G__20500 = om.core.refresh_set;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20500) : cljs.core.deref.call(null,G__20500));
})());
var chunk__20497_20502 = null;
var count__20498_20503 = (0);
var i__20499_20504 = (0);
while(true){
if((i__20499_20504 < count__20498_20503)){
var f_20505 = chunk__20497_20502.cljs$core$IIndexed$_nth$arity$2(null,i__20499_20504);
(f_20505.cljs$core$IFn$_invoke$arity$0 ? f_20505.cljs$core$IFn$_invoke$arity$0() : f_20505.call(null));

var G__20506 = seq__20496_20501;
var G__20507 = chunk__20497_20502;
var G__20508 = count__20498_20503;
var G__20509 = (i__20499_20504 + (1));
seq__20496_20501 = G__20506;
chunk__20497_20502 = G__20507;
count__20498_20503 = G__20508;
i__20499_20504 = G__20509;
continue;
} else {
var temp__4126__auto___20510 = cljs.core.seq(seq__20496_20501);
if(temp__4126__auto___20510){
var seq__20496_20511__$1 = temp__4126__auto___20510;
if(cljs.core.chunked_seq_QMARK_(seq__20496_20511__$1)){
var c__4561__auto___20512 = cljs.core.chunk_first(seq__20496_20511__$1);
var G__20513 = cljs.core.chunk_rest(seq__20496_20511__$1);
var G__20514 = c__4561__auto___20512;
var G__20515 = cljs.core.count(c__4561__auto___20512);
var G__20516 = (0);
seq__20496_20501 = G__20513;
chunk__20497_20502 = G__20514;
count__20498_20503 = G__20515;
i__20499_20504 = G__20516;
continue;
} else {
var f_20517 = cljs.core.first(seq__20496_20511__$1);
(f_20517.cljs$core$IFn$_invoke$arity$0 ? f_20517.cljs$core$IFn$_invoke$arity$0() : f_20517.call(null));

var G__20518 = cljs.core.next(seq__20496_20511__$1);
var G__20519 = null;
var G__20520 = (0);
var G__20521 = (0);
seq__20496_20501 = G__20518;
chunk__20497_20502 = G__20519;
count__20498_20503 = G__20520;
i__20499_20504 = G__20521;
continue;
}
} else {
}
}
break;
}

if((state == null)){
return null;
} else {
return state.om$render$T = (om.core.get_renderT(state) + (1));
}
});
render_all = function(state){
switch(arguments.length){
case 0:
return render_all__0.call(this);
case 1:
return render_all__1.call(this,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
render_all.cljs$core$IFn$_invoke$arity$0 = render_all__0;
render_all.cljs$core$IFn$_invoke$arity$1 = render_all__1;
return render_all;
})()
;
om.core.roots = (function (){var G__20522 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20522) : cljs.core.atom.call(null,G__20522));
})();
om.core.valid_component_QMARK_ = (function valid_component_QMARK_(x,f){
return null;
});
om.core.valid_opts_QMARK_ = (function valid_opts_QMARK_(m){
return cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [cljs.core.constant$keyword$107,null,cljs.core.constant$keyword$108,null,cljs.core.constant$keyword$109,null,cljs.core.constant$keyword$110,null,cljs.core.constant$keyword$111,null,cljs.core.constant$keyword$112,null,cljs.core.constant$keyword$113,null,cljs.core.constant$keyword$114,null,cljs.core.constant$keyword$115,null,cljs.core.constant$keyword$116,null,cljs.core.constant$keyword$117,null], null), null),cljs.core.keys(m));
});
om.core.id = (function id(owner){
return (owner.state["__om_id"]);
});
om.core.get_descriptor = (function() {
var get_descriptor = null;
var get_descriptor__1 = (function (f){
return get_descriptor.cljs$core$IFn$_invoke$arity$2(f,null);
});
var get_descriptor__2 = (function (f,descriptor){
if(((f["om$descriptor"]) == null)){
(f["om$descriptor"] = (function (){var G__20527 = (function (){var G__20528 = (function (){var or__3774__auto__ = descriptor;
if(cljs.core.truth_(or__3774__auto__)){
return or__3774__auto__;
} else {
var or__3774__auto____$1 = om.core._STAR_descriptor_STAR_;
if(cljs.core.truth_(or__3774__auto____$1)){
return or__3774__auto____$1;
} else {
return om.core.pure_descriptor;
}
}
})();
return React.createClass(G__20528);
})();
return React.createFactory(G__20527);
})());
} else {
}

return (f["om$descriptor"]);
});
get_descriptor = function(f,descriptor){
switch(arguments.length){
case 1:
return get_descriptor__1.call(this,f);
case 2:
return get_descriptor__2.call(this,f,descriptor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_descriptor.cljs$core$IFn$_invoke$arity$1 = get_descriptor__1;
get_descriptor.cljs$core$IFn$_invoke$arity$2 = get_descriptor__2;
return get_descriptor;
})()
;
om.core.getf = (function() {
var getf = null;
var getf__2 = (function (f,cursor){
if((f instanceof cljs.core.MultiFn)){
var dv = f.dispatch_fn.call(null,cursor,null);
return cljs.core.get_method(f,dv);
} else {
return f;
}
});
var getf__3 = (function (f,cursor,opts){
if((f instanceof cljs.core.MultiFn)){
var dv = f.dispatch_fn.call(null,cursor,null,opts);
return cljs.core.get_method(f,dv);
} else {
return f;
}
});
getf = function(f,cursor,opts){
switch(arguments.length){
case 2:
return getf__2.call(this,f,cursor);
case 3:
return getf__3.call(this,f,cursor,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
getf.cljs$core$IFn$_invoke$arity$2 = getf__2;
getf.cljs$core$IFn$_invoke$arity$3 = getf__3;
return getf;
})()
;
om.core.build_STAR_ = (function() {
var build_STAR_ = null;
var build_STAR___2 = (function (f,cursor){
return build_STAR_.cljs$core$IFn$_invoke$arity$3(f,cursor,null);
});
var build_STAR___3 = (function (f,cursor,m){



if((m == null)){
var shared = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(om.core._STAR_parent_STAR_);
var ctor = om.core.get_descriptor.cljs$core$IFn$_invoke$arity$1(om.core.getf.cljs$core$IFn$_invoke$arity$2(f,cursor));
var G__20546 = {"children": ((function (shared,ctor){
return (function (this$){
var ret = (function (){var G__20547 = cursor;
var G__20548 = this$;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__20547,G__20548) : f.call(null,G__20547,G__20548));
})();
om.core.valid_component_QMARK_(ret,f);

return ret;
});})(shared,ctor))
, "__om_instrument": om.core._STAR_instrument_STAR_, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_app_state": om.core._STAR_state_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_, "__om_shared": shared, "__om_cursor": cursor};
return (ctor.cljs$core$IFn$_invoke$arity$1 ? ctor.cljs$core$IFn$_invoke$arity$1(G__20546) : ctor.call(null,G__20546));
} else {
var map__20549 = m;
var map__20549__$1 = ((cljs.core.seq_QMARK_(map__20549))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20549):map__20549);
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20549__$1,cljs.core.constant$keyword$115);
var init_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20549__$1,cljs.core.constant$keyword$112);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20549__$1,cljs.core.constant$keyword$113);
var key_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20549__$1,cljs.core.constant$keyword$114);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20549__$1,cljs.core.constant$keyword$111);
var dataf = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,cljs.core.constant$keyword$108);
var cursor_SINGLEQUOTE_ = ((!((dataf == null)))?(function (){var temp__4124__auto__ = cljs.core.constant$keyword$116.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4124__auto__)){
var i = temp__4124__auto__;
var G__20550 = cursor;
var G__20551 = i;
return (dataf.cljs$core$IFn$_invoke$arity$2 ? dataf.cljs$core$IFn$_invoke$arity$2(G__20550,G__20551) : dataf.call(null,G__20550,G__20551));
} else {
var G__20552 = cursor;
return (dataf.cljs$core$IFn$_invoke$arity$1 ? dataf.cljs$core$IFn$_invoke$arity$1(G__20552) : dataf.call(null,G__20552));
}
})():cursor);
var rkey = ((!((key == null)))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(cursor_SINGLEQUOTE_,key):((!((key_fn == null)))?(function (){var G__20553 = cursor_SINGLEQUOTE_;
return (key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(G__20553) : key_fn.call(null,G__20553));
})():cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,cljs.core.constant$keyword$110)
));
var shared = (function (){var or__3774__auto__ = cljs.core.constant$keyword$117.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3774__auto__)){
return or__3774__auto__;
} else {
return om.core.get_shared.cljs$core$IFn$_invoke$arity$1(om.core._STAR_parent_STAR_);
}
})();
var ctor = om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2(om.core.getf.cljs$core$IFn$_invoke$arity$3(f,cursor_SINGLEQUOTE_,opts),cljs.core.constant$keyword$107.cljs$core$IFn$_invoke$arity$1(m));
var G__20554 = {"__om_state": state, "__om_instrument": om.core._STAR_instrument_STAR_, "children": (((opts == null))?((function (map__20549,map__20549__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = (function (){var G__20555 = cursor_SINGLEQUOTE_;
var G__20556 = this$;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__20555,G__20556) : f.call(null,G__20555,G__20556));
})();
om.core.valid_component_QMARK_(ret,f);

return ret;
});})(map__20549,map__20549__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
:((function (map__20549,map__20549__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = (function (){var G__20557 = cursor_SINGLEQUOTE_;
var G__20558 = this$;
var G__20559 = opts;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__20557,G__20558,G__20559) : f.call(null,G__20557,G__20558,G__20559));
})();
om.core.valid_component_QMARK_(ret,f);

return ret;
});})(map__20549,map__20549__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
), "__om_init_state": init_state, "key": (function (){var or__3774__auto__ = rkey;
if(cljs.core.truth_(or__3774__auto__)){
return or__3774__auto__;
} else {
return undefined;
}
})(), "__om_app_state": om.core._STAR_state_STAR_, "__om_cursor": cursor_SINGLEQUOTE_, "__om_index": cljs.core.constant$keyword$116.cljs$core$IFn$_invoke$arity$1(m), "__om_shared": shared, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_};
return (ctor.cljs$core$IFn$_invoke$arity$1 ? ctor.cljs$core$IFn$_invoke$arity$1(G__20554) : ctor.call(null,G__20554));

}
});
build_STAR_ = function(f,cursor,m){
switch(arguments.length){
case 2:
return build_STAR___2.call(this,f,cursor);
case 3:
return build_STAR___3.call(this,f,cursor,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build_STAR_.cljs$core$IFn$_invoke$arity$2 = build_STAR___2;
build_STAR_.cljs$core$IFn$_invoke$arity$3 = build_STAR___3;
return build_STAR_;
})()
;
/**
* Builds an Om component. Takes an IRender/IRenderState instance
* returning function f, a value, and an optional third argument
* which may be a map of build specifications.
* 
* f - is a function of 2 or 3 arguments. The first argument can be
* any value and the second argument will be the owning pure node.
* If a map of options m is passed in this will be the third
* argument. f must return at a minimum an IRender or IRenderState
* instance, this instance may implement other React life cycle
* protocols.
* 
* x - any value
* 
* m - a map the following keys are allowed:
* 
* :key        - a keyword that should be used to look up the key used by
* React itself when rendering sequential things.
* :react-key  - an explicit react key
* :fn         - a function to apply to the data before invoking f.
* :init-state - a map of initial state to pass to the component.
* :state      - a map of state to pass to the component, will be merged in.
* :opts       - a map of values. Can be used to pass side information down
* the render tree.
* :descriptor - a JS object of React methods, will be used to
* construct a React class per Om component function
* encountered. defaults to pure-descriptor.
* 
* Example:
* 
* (build list-of-gadgets x
* {:init-state {:event-chan ...
* :narble ...}})
* 
*/
om.core.build = (function() {
var build = null;
var build__2 = (function (f,x){
return build.cljs$core$IFn$_invoke$arity$3(f,x,null);
});
var build__3 = (function (f,x,m){


if(!((om.core._STAR_instrument_STAR_ == null))){
var ret = (function (){var G__20566 = f;
var G__20567 = x;
var G__20568 = m;
return (om.core._STAR_instrument_STAR_.cljs$core$IFn$_invoke$arity$3 ? om.core._STAR_instrument_STAR_.cljs$core$IFn$_invoke$arity$3(G__20566,G__20567,G__20568) : om.core._STAR_instrument_STAR_.call(null,G__20566,G__20567,G__20568));
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.constant$keyword$118)){
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3(f,x,m);
} else {
return ret;
}
} else {
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3(f,x,m);
}
});
build = function(f,x,m){
switch(arguments.length){
case 2:
return build__2.call(this,f,x);
case 3:
return build__3.call(this,f,x,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build.cljs$core$IFn$_invoke$arity$2 = build__2;
build.cljs$core$IFn$_invoke$arity$3 = build__3;
return build;
})()
;
/**
* Build a sequence of components. f is the component constructor
* function, xs a sequence of values, and m a map of options the
* same as provided to om.core/build.
*/
om.core.build_all = (function() {
var build_all = null;
var build_all__2 = (function (f,xs){
return build_all.cljs$core$IFn$_invoke$arity$3(f,xs,null);
});
var build_all__3 = (function (f,xs,m){


return cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (x,i){
return om.core.build.cljs$core$IFn$_invoke$arity$3(f,x,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.constant$keyword$116,i));
}),xs,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
});
build_all = function(f,xs,m){
switch(arguments.length){
case 2:
return build_all__2.call(this,f,xs);
case 3:
return build_all__3.call(this,f,xs,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build_all.cljs$core$IFn$_invoke$arity$2 = build_all__2;
build_all.cljs$core$IFn$_invoke$arity$3 = build_all__3;
return build_all;
})()
;
om.core.setup = (function setup(state,key,tx_listen){
if((function (){var G__20591 = state;
if(G__20591){
var bit__4455__auto__ = null;
if(cljs.core.truth_((function (){var or__3774__auto__ = bit__4455__auto__;
if(cljs.core.truth_(or__3774__auto__)){
return or__3774__auto__;
} else {
return G__20591.om$core$INotify$;
}
})())){
return true;
} else {
if((!G__20591.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.INotify,G__20591);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.INotify,G__20591);
}
})()){
} else {
var properties_20610 = (function (){var G__20592 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20592) : cljs.core.atom.call(null,G__20592));
})();
var listeners_20611 = (function (){var G__20593 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20593) : cljs.core.atom.call(null,G__20593));
})();
var render_queue_20612 = (function (){var G__20594 = cljs.core.PersistentHashSet.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20594) : cljs.core.atom.call(null,G__20594));
})();
var x20595_20613 = state;
x20595_20613.om$core$IRenderQueue$ = true;

x20595_20613.om$core$IRenderQueue$_get_queue$arity$1 = ((function (x20595_20613,properties_20610,listeners_20611,render_queue_20612){
return (function (this$){
var this$__$1 = this;
var G__20596 = render_queue_20612;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20596) : cljs.core.deref.call(null,G__20596));
});})(x20595_20613,properties_20610,listeners_20611,render_queue_20612))
;

x20595_20613.om$core$IRenderQueue$_queue_render_BANG_$arity$2 = ((function (x20595_20613,properties_20610,listeners_20611,render_queue_20612){
return (function (this$,c){
var this$__$1 = this;
if(cljs.core.contains_QMARK_((function (){var G__20597 = render_queue_20612;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20597) : cljs.core.deref.call(null,G__20597));
})(),c)){
return null;
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(render_queue_20612,cljs.core.conj,c);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(this$__$1,cljs.core.identity);
}
});})(x20595_20613,properties_20610,listeners_20611,render_queue_20612))
;

x20595_20613.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 = ((function (x20595_20613,properties_20610,listeners_20611,render_queue_20612){
return (function (this$){
var this$__$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(render_queue_20612,cljs.core.empty);
});})(x20595_20613,properties_20610,listeners_20611,render_queue_20612))
;

x20595_20613.om$core$INotify$ = true;

x20595_20613.om$core$INotify$_listen_BANG_$arity$3 = ((function (x20595_20613,properties_20610,listeners_20611,render_queue_20612){
return (function (this$,key__$1,tx_listen__$1){
var this$__$1 = this;
if((tx_listen__$1 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(listeners_20611,cljs.core.assoc,key__$1,tx_listen__$1);
}

return this$__$1;
});})(x20595_20613,properties_20610,listeners_20611,render_queue_20612))
;

x20595_20613.om$core$INotify$_unlisten_BANG_$arity$2 = ((function (x20595_20613,properties_20610,listeners_20611,render_queue_20612){
return (function (this$,key__$1){
var this$__$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(listeners_20611,cljs.core.dissoc,key__$1);

return this$__$1;
});})(x20595_20613,properties_20610,listeners_20611,render_queue_20612))
;

x20595_20613.om$core$INotify$_notify_BANG_$arity$3 = ((function (x20595_20613,properties_20610,listeners_20611,render_queue_20612){
return (function (this$,tx_data,root_cursor){
var this$__$1 = this;
var seq__20598_20614 = cljs.core.seq((function (){var G__20602 = listeners_20611;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20602) : cljs.core.deref.call(null,G__20602));
})());
var chunk__20599_20615 = null;
var count__20600_20616 = (0);
var i__20601_20617 = (0);
while(true){
if((i__20601_20617 < count__20600_20616)){
var vec__20603_20618 = chunk__20599_20615.cljs$core$IIndexed$_nth$arity$2(null,i__20601_20617);
var __20619 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20603_20618,(0),null);
var f_20620 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20603_20618,(1),null);
var G__20604_20621 = tx_data;
var G__20605_20622 = root_cursor;
(f_20620.cljs$core$IFn$_invoke$arity$2 ? f_20620.cljs$core$IFn$_invoke$arity$2(G__20604_20621,G__20605_20622) : f_20620.call(null,G__20604_20621,G__20605_20622));

var G__20623 = seq__20598_20614;
var G__20624 = chunk__20599_20615;
var G__20625 = count__20600_20616;
var G__20626 = (i__20601_20617 + (1));
seq__20598_20614 = G__20623;
chunk__20599_20615 = G__20624;
count__20600_20616 = G__20625;
i__20601_20617 = G__20626;
continue;
} else {
var temp__4126__auto___20627 = cljs.core.seq(seq__20598_20614);
if(temp__4126__auto___20627){
var seq__20598_20628__$1 = temp__4126__auto___20627;
if(cljs.core.chunked_seq_QMARK_(seq__20598_20628__$1)){
var c__4561__auto___20629 = cljs.core.chunk_first(seq__20598_20628__$1);
var G__20630 = cljs.core.chunk_rest(seq__20598_20628__$1);
var G__20631 = c__4561__auto___20629;
var G__20632 = cljs.core.count(c__4561__auto___20629);
var G__20633 = (0);
seq__20598_20614 = G__20630;
chunk__20599_20615 = G__20631;
count__20600_20616 = G__20632;
i__20601_20617 = G__20633;
continue;
} else {
var vec__20606_20634 = cljs.core.first(seq__20598_20628__$1);
var __20635 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20606_20634,(0),null);
var f_20636 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20606_20634,(1),null);
var G__20607_20637 = tx_data;
var G__20608_20638 = root_cursor;
(f_20636.cljs$core$IFn$_invoke$arity$2 ? f_20636.cljs$core$IFn$_invoke$arity$2(G__20607_20637,G__20608_20638) : f_20636.call(null,G__20607_20637,G__20608_20638));

var G__20639 = cljs.core.next(seq__20598_20628__$1);
var G__20640 = null;
var G__20641 = (0);
var G__20642 = (0);
seq__20598_20614 = G__20639;
chunk__20599_20615 = G__20640;
count__20600_20616 = G__20641;
i__20601_20617 = G__20642;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});})(x20595_20613,properties_20610,listeners_20611,render_queue_20612))
;

x20595_20613.om$core$IRootProperties$ = true;

x20595_20613.om$core$IRootProperties$_set_property_BANG_$arity$4 = ((function (x20595_20613,properties_20610,listeners_20611,render_queue_20612){
return (function (_,id,k,v){
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(properties_20610,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null),v);
});})(x20595_20613,properties_20610,listeners_20611,render_queue_20612))
;

x20595_20613.om$core$IRootProperties$_remove_property_BANG_$arity$3 = ((function (x20595_20613,properties_20610,listeners_20611,render_queue_20612){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(properties_20610,cljs.core.dissoc,id,k);
});})(x20595_20613,properties_20610,listeners_20611,render_queue_20612))
;

x20595_20613.om$core$IRootProperties$_remove_properties_BANG_$arity$2 = ((function (x20595_20613,properties_20610,listeners_20611,render_queue_20612){
return (function (_,id){
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(properties_20610,cljs.core.dissoc,id);
});})(x20595_20613,properties_20610,listeners_20611,render_queue_20612))
;

x20595_20613.om$core$IRootProperties$_get_property$arity$3 = ((function (x20595_20613,properties_20610,listeners_20611,render_queue_20612){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__20609 = properties_20610;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20609) : cljs.core.deref.call(null,G__20609));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null));
});})(x20595_20613,properties_20610,listeners_20611,render_queue_20612))
;

}

return om.core._listen_BANG_(state,key,tx_listen);
});
om.core.tear_down = (function tear_down(state,key){
return om.core._unlisten_BANG_(state,key);
});
om.core.tag_root_key = (function tag_root_key(cursor,root_key){
if(om.core.cursor_QMARK_(cursor)){
var x20648 = cljs.core.clone(cursor);
x20648.om$core$IRootKey$ = true;

x20648.om$core$IRootKey$_root_key$arity$1 = ((function (x20648){
return (function (this$){
var this$__$1 = this;
return root_key;
});})(x20648))
;

x20648.om$core$IAdapt$ = true;

x20648.om$core$IAdapt$_adapt$arity$2 = ((function (x20648){
return (function (this$,other){
var this$__$1 = this;
return tag_root_key(om.core.adapt(cursor,other),root_key);
});})(x20648))
;

x20648.cljs$core$ICloneable$ = true;

x20648.cljs$core$ICloneable$_clone$arity$1 = ((function (x20648){
return (function (this$){
var this$__$1 = this;
return tag_root_key(cljs.core.clone(cursor),root_key);
});})(x20648))
;

return x20648;
} else {
return cursor;
}
});
/**
* Take a component constructor function f, value an immutable tree of
* associative data structures optionally an wrapped in an IAtom
* instance, and a map of options and installs an Om/React render
* loop.
* 
* f must return an instance that at a minimum implements IRender or
* IRenderState (it may implement other React life cycle protocols). f
* must take at least two arguments, the root cursor and the owning pure
* node. A cursor is just the original data wrapped in an ICursor
* instance which maintains path information. Only one root render
* loop allowed per target element. om.core/root is idempotent, if
* called again on the same target element the previous render loop
* will be replaced.
* 
* Options may also include any key allowed by om.core/build to
* customize f. In addition om.core/root supports the following
* special options:
* 
* :target     - (required) a DOM element.
* :shared     - data to be shared by all components, see om.core/get-shared
* :tx-listen  - a function that will listen in in transactions, should
* take 2 arguments - the first a map containing the
* path, old and new state at path, old and new global
* state, and transaction tag if provided.
* :instrument - a function of three arguments that if provided will
* intercept all calls to om.core/build. This function should
* correspond to the three arity version of om.core/build.
* :adapt      - a function to adapt the root cursor
* :raf        - override requestAnimationFrame based rendering. If
* false setTimeout will be use. If given a function
* will be invoked instead.
* 
* Example:
* 
* (root
* (fn [data owner]
* ...)
* {:message :hello}
* {:target js/document.body})
*/
om.core.root = (function root(f,value,p__20649){
var map__20738 = p__20649;
var map__20738__$1 = ((cljs.core.seq_QMARK_(map__20738))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20738):map__20738);
var options = map__20738__$1;
var raf = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20738__$1,cljs.core.constant$keyword$119);
var adapt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20738__$1,cljs.core.constant$keyword$120);
var descriptor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20738__$1,cljs.core.constant$keyword$107);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20738__$1,cljs.core.constant$keyword$109);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20738__$1,cljs.core.constant$keyword$84);
var tx_listen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20738__$1,cljs.core.constant$keyword$121);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20738__$1,cljs.core.constant$keyword$122);


var roots_SINGLEQUOTE__20826 = (function (){var G__20739 = om.core.roots;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20739) : cljs.core.deref.call(null,G__20739));
})();
if(cljs.core.contains_QMARK_(roots_SINGLEQUOTE__20826,target)){
cljs.core.get.cljs$core$IFn$_invoke$arity$2(roots_SINGLEQUOTE__20826,target).call(null);
} else {
}

var watch_key = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var state = (((function (){var G__20740 = value;
if(G__20740){
var bit__4455__auto__ = (G__20740.cljs$lang$protocol_mask$partition1$ & (16384));
if((bit__4455__auto__) || (G__20740.cljs$core$IAtom$)){
return true;
} else {
if((!G__20740.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,G__20740);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,G__20740);
}
})())?value:(function (){var G__20741 = value;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20741) : cljs.core.atom.call(null,G__20741));
})());
var state__$1 = om.core.setup(state,watch_key,tx_listen);
var adapt__$1 = (function (){var or__3774__auto__ = adapt;
if(cljs.core.truth_(or__3774__auto__)){
return or__3774__auto__;
} else {
return cljs.core.identity;
}
})();
var m = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(options,cljs.core.constant$keyword$122,cljs.core.array_seq([cljs.core.constant$keyword$121,cljs.core.constant$keyword$84,cljs.core.constant$keyword$120,cljs.core.constant$keyword$119], 0));
var ret = (function (){var G__20742 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20742) : cljs.core.atom.call(null,G__20742));
})();
var rootf = ((function (watch_key,state,state__$1,adapt__$1,m,ret,map__20738,map__20738__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function rootf(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.refresh_set,cljs.core.disj,rootf);

var value__$1 = (function (){var G__20782 = state__$1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20782) : cljs.core.deref.call(null,G__20782));
})();
var cursor = (function (){var G__20783 = om.core.tag_root_key((((path == null))?om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(value__$1,state__$1,cljs.core.PersistentVector.EMPTY):om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(value__$1,path),state__$1,path)),watch_key);
return (adapt__$1.cljs$core$IFn$_invoke$arity$1 ? adapt__$1.cljs$core$IFn$_invoke$arity$1(G__20783) : adapt__$1.call(null,G__20783));
})();
if(cljs.core.truth_(om.core._get_property(state__$1,watch_key,cljs.core.constant$keyword$123))){
} else {
var c_20827 = om.dom.render((function (){var _STAR_descriptor_STAR_20784 = om.core._STAR_descriptor_STAR_;
var _STAR_instrument_STAR_20785 = om.core._STAR_instrument_STAR_;
var _STAR_state_STAR_20786 = om.core._STAR_state_STAR_;
var _STAR_root_key_STAR_20787 = om.core._STAR_root_key_STAR_;
om.core._STAR_descriptor_STAR_ = descriptor;

om.core._STAR_instrument_STAR_ = instrument;

om.core._STAR_state_STAR_ = state__$1;

om.core._STAR_root_key_STAR_ = watch_key;

try{return om.core.build.cljs$core$IFn$_invoke$arity$3(f,cursor,m);
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_20787;

om.core._STAR_state_STAR_ = _STAR_state_STAR_20786;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_20785;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_20784;
}})(),target);
if(((function (){var G__20788 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20788) : cljs.core.deref.call(null,G__20788));
})() == null)){
var G__20789_20828 = ret;
var G__20790_20829 = c_20827;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20789_20828,G__20790_20829) : cljs.core.reset_BANG_.call(null,G__20789_20828,G__20790_20829));
} else {
}
}

var queue_20830 = om.core._get_queue(state__$1);
om.core._empty_queue_BANG_(state__$1);

if(cljs.core.empty_QMARK_(queue_20830)){
} else {
var seq__20791_20831 = cljs.core.seq(queue_20830);
var chunk__20792_20832 = null;
var count__20793_20833 = (0);
var i__20794_20834 = (0);
while(true){
if((i__20794_20834 < count__20793_20833)){
var c_20835 = chunk__20792_20832.cljs$core$IIndexed$_nth$arity$2(null,i__20794_20834);
if(cljs.core.truth_(c_20835.isMounted())){
var temp__4126__auto___20836 = (c_20835.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4126__auto___20836)){
var next_props_20837 = temp__4126__auto___20836;
(c_20835.props["__om_cursor"] = next_props_20837);

(c_20835.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__3774__auto__ = !((function (){var G__20796 = om.core.children(c_20835);
if(G__20796){
var bit__4455__auto__ = null;
if(cljs.core.truth_((function (){var or__3774__auto__ = bit__4455__auto__;
if(cljs.core.truth_(or__3774__auto__)){
return or__3774__auto__;
} else {
return G__20796.om$core$ICheckState$;
}
})())){
return true;
} else {
if((!G__20796.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.ICheckState,G__20796);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.ICheckState,G__20796);
}
})());
if(or__3774__auto__){
return or__3774__auto__;
} else {
return c_20835.shouldComponentUpdate(c_20835.props,c_20835.state);
}
})())){
c_20835.forceUpdate();
} else {
}
} else {
}

var G__20838 = seq__20791_20831;
var G__20839 = chunk__20792_20832;
var G__20840 = count__20793_20833;
var G__20841 = (i__20794_20834 + (1));
seq__20791_20831 = G__20838;
chunk__20792_20832 = G__20839;
count__20793_20833 = G__20840;
i__20794_20834 = G__20841;
continue;
} else {
var temp__4126__auto___20842 = cljs.core.seq(seq__20791_20831);
if(temp__4126__auto___20842){
var seq__20791_20843__$1 = temp__4126__auto___20842;
if(cljs.core.chunked_seq_QMARK_(seq__20791_20843__$1)){
var c__4561__auto___20844 = cljs.core.chunk_first(seq__20791_20843__$1);
var G__20845 = cljs.core.chunk_rest(seq__20791_20843__$1);
var G__20846 = c__4561__auto___20844;
var G__20847 = cljs.core.count(c__4561__auto___20844);
var G__20848 = (0);
seq__20791_20831 = G__20845;
chunk__20792_20832 = G__20846;
count__20793_20833 = G__20847;
i__20794_20834 = G__20848;
continue;
} else {
var c_20849 = cljs.core.first(seq__20791_20843__$1);
if(cljs.core.truth_(c_20849.isMounted())){
var temp__4126__auto___20850__$1 = (c_20849.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4126__auto___20850__$1)){
var next_props_20851 = temp__4126__auto___20850__$1;
(c_20849.props["__om_cursor"] = next_props_20851);

(c_20849.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__3774__auto__ = !((function (){var G__20798 = om.core.children(c_20849);
if(G__20798){
var bit__4455__auto__ = null;
if(cljs.core.truth_((function (){var or__3774__auto__ = bit__4455__auto__;
if(cljs.core.truth_(or__3774__auto__)){
return or__3774__auto__;
} else {
return G__20798.om$core$ICheckState$;
}
})())){
return true;
} else {
if((!G__20798.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.ICheckState,G__20798);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.ICheckState,G__20798);
}
})());
if(or__3774__auto__){
return or__3774__auto__;
} else {
return c_20849.shouldComponentUpdate(c_20849.props,c_20849.state);
}
})())){
c_20849.forceUpdate();
} else {
}
} else {
}

var G__20852 = cljs.core.next(seq__20791_20843__$1);
var G__20853 = null;
var G__20854 = (0);
var G__20855 = (0);
seq__20791_20831 = G__20852;
chunk__20792_20832 = G__20853;
count__20793_20833 = G__20854;
i__20794_20834 = G__20855;
continue;
}
} else {
}
}
break;
}
}

var _refs_20856 = (function (){var G__20799 = om.core._refs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20799) : cljs.core.deref.call(null,G__20799));
})();
if(cljs.core.empty_QMARK_(_refs_20856)){
} else {
var seq__20800_20857 = cljs.core.seq(_refs_20856);
var chunk__20801_20858 = null;
var count__20802_20859 = (0);
var i__20803_20860 = (0);
while(true){
if((i__20803_20860 < count__20802_20859)){
var vec__20804_20861 = chunk__20801_20858.cljs$core$IIndexed$_nth$arity$2(null,i__20803_20860);
var path_20862__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20804_20861,(0),null);
var cs_20863 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20804_20861,(1),null);
var cs_20864__$1 = (function (){var G__20805 = cs_20863;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20805) : cljs.core.deref.call(null,G__20805));
})();
var seq__20806_20865 = cljs.core.seq(cs_20864__$1);
var chunk__20807_20866 = null;
var count__20808_20867 = (0);
var i__20809_20868 = (0);
while(true){
if((i__20809_20868 < count__20808_20867)){
var vec__20810_20869 = chunk__20807_20866.cljs$core$IIndexed$_nth$arity$2(null,i__20809_20868);
var id_20870 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20810_20869,(0),null);
var c_20871 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20810_20869,(1),null);
if(cljs.core.truth_(c_20871.shouldComponentUpdate(c_20871.props,c_20871.state))){
c_20871.forceUpdate();
} else {
}

var G__20872 = seq__20806_20865;
var G__20873 = chunk__20807_20866;
var G__20874 = count__20808_20867;
var G__20875 = (i__20809_20868 + (1));
seq__20806_20865 = G__20872;
chunk__20807_20866 = G__20873;
count__20808_20867 = G__20874;
i__20809_20868 = G__20875;
continue;
} else {
var temp__4126__auto___20876 = cljs.core.seq(seq__20806_20865);
if(temp__4126__auto___20876){
var seq__20806_20877__$1 = temp__4126__auto___20876;
if(cljs.core.chunked_seq_QMARK_(seq__20806_20877__$1)){
var c__4561__auto___20878 = cljs.core.chunk_first(seq__20806_20877__$1);
var G__20879 = cljs.core.chunk_rest(seq__20806_20877__$1);
var G__20880 = c__4561__auto___20878;
var G__20881 = cljs.core.count(c__4561__auto___20878);
var G__20882 = (0);
seq__20806_20865 = G__20879;
chunk__20807_20866 = G__20880;
count__20808_20867 = G__20881;
i__20809_20868 = G__20882;
continue;
} else {
var vec__20811_20883 = cljs.core.first(seq__20806_20877__$1);
var id_20884 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20811_20883,(0),null);
var c_20885 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20811_20883,(1),null);
if(cljs.core.truth_(c_20885.shouldComponentUpdate(c_20885.props,c_20885.state))){
c_20885.forceUpdate();
} else {
}

var G__20886 = cljs.core.next(seq__20806_20877__$1);
var G__20887 = null;
var G__20888 = (0);
var G__20889 = (0);
seq__20806_20865 = G__20886;
chunk__20807_20866 = G__20887;
count__20808_20867 = G__20888;
i__20809_20868 = G__20889;
continue;
}
} else {
}
}
break;
}

var G__20890 = seq__20800_20857;
var G__20891 = chunk__20801_20858;
var G__20892 = count__20802_20859;
var G__20893 = (i__20803_20860 + (1));
seq__20800_20857 = G__20890;
chunk__20801_20858 = G__20891;
count__20802_20859 = G__20892;
i__20803_20860 = G__20893;
continue;
} else {
var temp__4126__auto___20894 = cljs.core.seq(seq__20800_20857);
if(temp__4126__auto___20894){
var seq__20800_20895__$1 = temp__4126__auto___20894;
if(cljs.core.chunked_seq_QMARK_(seq__20800_20895__$1)){
var c__4561__auto___20896 = cljs.core.chunk_first(seq__20800_20895__$1);
var G__20897 = cljs.core.chunk_rest(seq__20800_20895__$1);
var G__20898 = c__4561__auto___20896;
var G__20899 = cljs.core.count(c__4561__auto___20896);
var G__20900 = (0);
seq__20800_20857 = G__20897;
chunk__20801_20858 = G__20898;
count__20802_20859 = G__20899;
i__20803_20860 = G__20900;
continue;
} else {
var vec__20812_20901 = cljs.core.first(seq__20800_20895__$1);
var path_20902__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20812_20901,(0),null);
var cs_20903 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20812_20901,(1),null);
var cs_20904__$1 = (function (){var G__20813 = cs_20903;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20813) : cljs.core.deref.call(null,G__20813));
})();
var seq__20814_20905 = cljs.core.seq(cs_20904__$1);
var chunk__20815_20906 = null;
var count__20816_20907 = (0);
var i__20817_20908 = (0);
while(true){
if((i__20817_20908 < count__20816_20907)){
var vec__20818_20909 = chunk__20815_20906.cljs$core$IIndexed$_nth$arity$2(null,i__20817_20908);
var id_20910 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20818_20909,(0),null);
var c_20911 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20818_20909,(1),null);
if(cljs.core.truth_(c_20911.shouldComponentUpdate(c_20911.props,c_20911.state))){
c_20911.forceUpdate();
} else {
}

var G__20912 = seq__20814_20905;
var G__20913 = chunk__20815_20906;
var G__20914 = count__20816_20907;
var G__20915 = (i__20817_20908 + (1));
seq__20814_20905 = G__20912;
chunk__20815_20906 = G__20913;
count__20816_20907 = G__20914;
i__20817_20908 = G__20915;
continue;
} else {
var temp__4126__auto___20916__$1 = cljs.core.seq(seq__20814_20905);
if(temp__4126__auto___20916__$1){
var seq__20814_20917__$1 = temp__4126__auto___20916__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20814_20917__$1)){
var c__4561__auto___20918 = cljs.core.chunk_first(seq__20814_20917__$1);
var G__20919 = cljs.core.chunk_rest(seq__20814_20917__$1);
var G__20920 = c__4561__auto___20918;
var G__20921 = cljs.core.count(c__4561__auto___20918);
var G__20922 = (0);
seq__20814_20905 = G__20919;
chunk__20815_20906 = G__20920;
count__20816_20907 = G__20921;
i__20817_20908 = G__20922;
continue;
} else {
var vec__20819_20923 = cljs.core.first(seq__20814_20917__$1);
var id_20924 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20819_20923,(0),null);
var c_20925 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20819_20923,(1),null);
if(cljs.core.truth_(c_20925.shouldComponentUpdate(c_20925.props,c_20925.state))){
c_20925.forceUpdate();
} else {
}

var G__20926 = cljs.core.next(seq__20814_20917__$1);
var G__20927 = null;
var G__20928 = (0);
var G__20929 = (0);
seq__20814_20905 = G__20926;
chunk__20815_20906 = G__20927;
count__20816_20907 = G__20928;
i__20817_20908 = G__20929;
continue;
}
} else {
}
}
break;
}

var G__20930 = cljs.core.next(seq__20800_20895__$1);
var G__20931 = null;
var G__20932 = (0);
var G__20933 = (0);
seq__20800_20857 = G__20930;
chunk__20801_20858 = G__20931;
count__20802_20859 = G__20932;
i__20803_20860 = G__20933;
continue;
}
} else {
}
}
break;
}
}

om.core._set_property_BANG_(state__$1,watch_key,cljs.core.constant$keyword$123,true);

var G__20820 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20820) : cljs.core.deref.call(null,G__20820));
});})(watch_key,state,state__$1,adapt__$1,m,ret,map__20738,map__20738__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
;
cljs.core.add_watch(state__$1,watch_key,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__20738,map__20738__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (_,___$1,o,n){
if((cljs.core.not(om.core._get_property(state__$1,watch_key,cljs.core.constant$keyword$124))) && (!((o === n)))){
om.core._set_property_BANG_(state__$1,watch_key,cljs.core.constant$keyword$123,false);
} else {
}

om.core._set_property_BANG_(state__$1,watch_key,cljs.core.constant$keyword$124,false);

if(cljs.core.contains_QMARK_((function (){var G__20821 = om.core.refresh_set;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20821) : cljs.core.deref.call(null,G__20821));
})(),rootf)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.refresh_set,cljs.core.conj,rootf);
}

if(cljs.core.truth_(om.core.refresh_queued)){
return null;
} else {
om.core.refresh_queued = true;

if((raf === false) || (!(typeof requestAnimationFrame !== 'undefined'))){
var G__20822 = ((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__20738,map__20738__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){
return om.core.render_all.cljs$core$IFn$_invoke$arity$1(state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__20738,map__20738__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
;
var G__20823 = (16);
return setTimeout(G__20822,G__20823);
} else {
if(cljs.core.fn_QMARK_(raf)){
return (raf.cljs$core$IFn$_invoke$arity$0 ? raf.cljs$core$IFn$_invoke$arity$0() : raf.call(null));
} else {
var G__20824 = ((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__20738,map__20738__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){
return om.core.render_all.cljs$core$IFn$_invoke$arity$1(state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__20738,map__20738__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
;
return requestAnimationFrame(G__20824);

}
}
}
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__20738,map__20738__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.roots,cljs.core.assoc,target,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__20738,map__20738__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){
om.core._remove_properties_BANG_(state__$1,watch_key);

cljs.core.remove_watch(state__$1,watch_key);

om.core.tear_down(state__$1,watch_key);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.refresh_set,cljs.core.disj,rootf);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.roots,cljs.core.dissoc,target);

var G__20825 = target;
return React.unmountComponentAtNode(G__20825);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__20738,map__20738__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
);

return rootf();
});
/**
* Given a DOM target remove its render loop if one exists.
*/
om.core.detach_root = (function detach_root(target){

var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__20935 = om.core.roots;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20935) : cljs.core.deref.call(null,G__20935));
})(),target);
if(cljs.core.truth_(temp__4126__auto__)){
var f = temp__4126__auto__;
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return null;
}
});
om.core.transactable_QMARK_ = (function transactable_QMARK_(x){
var G__20937 = x;
if(G__20937){
var bit__4455__auto__ = null;
if(cljs.core.truth_((function (){var or__3774__auto__ = bit__4455__auto__;
if(cljs.core.truth_(or__3774__auto__)){
return or__3774__auto__;
} else {
return G__20937.om$core$ITransact$;
}
})())){
return true;
} else {
if((!G__20937.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.ITransact,G__20937);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.ITransact,G__20937);
}
});
/**
* Given a tag, a cursor, an optional list of keys ks, mutate the tree
* at the path specified by the cursor + the optional keys by applying
* f to the specified value in the tree. An Om re-render will be
* triggered.
*/
om.core.transact_BANG_ = (function() {
var transact_BANG_ = null;
var transact_BANG___2 = (function (cursor,f){
return transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,cljs.core.PersistentVector.EMPTY,f,null);
});
var transact_BANG___3 = (function (cursor,korks,f){
return transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,korks,f,null);
});
var transact_BANG___4 = (function (cursor,korks,f,tag){


var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
return om.core._transact_BANG_(cursor,korks__$1,f,tag);
});
transact_BANG_ = function(cursor,korks,f,tag){
switch(arguments.length){
case 2:
return transact_BANG___2.call(this,cursor,korks);
case 3:
return transact_BANG___3.call(this,cursor,korks,f);
case 4:
return transact_BANG___4.call(this,cursor,korks,f,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
transact_BANG_.cljs$core$IFn$_invoke$arity$2 = transact_BANG___2;
transact_BANG_.cljs$core$IFn$_invoke$arity$3 = transact_BANG___3;
transact_BANG_.cljs$core$IFn$_invoke$arity$4 = transact_BANG___4;
return transact_BANG_;
})()
;
/**
* Like transact! but no function provided, instead a replacement
* value is given.
*/
om.core.update_BANG_ = (function() {
var update_BANG_ = null;
var update_BANG___2 = (function (cursor,v){

return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,cljs.core.PersistentVector.EMPTY,(function (_){
return v;
}),null);
});
var update_BANG___3 = (function (cursor,korks,v){

return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,korks,(function (_){
return v;
}),null);
});
var update_BANG___4 = (function (cursor,korks,v,tag){

return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,korks,(function (_){
return v;
}),tag);
});
update_BANG_ = function(cursor,korks,v,tag){
switch(arguments.length){
case 2:
return update_BANG___2.call(this,cursor,korks);
case 3:
return update_BANG___3.call(this,cursor,korks,v);
case 4:
return update_BANG___4.call(this,cursor,korks,v,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_BANG_.cljs$core$IFn$_invoke$arity$2 = update_BANG___2;
update_BANG_.cljs$core$IFn$_invoke$arity$3 = update_BANG___3;
update_BANG_.cljs$core$IFn$_invoke$arity$4 = update_BANG___4;
return update_BANG_;
})()
;
/**
* EXPERIMENTAL: Like transact! but does not schedule a re-render or
* create a transact event.
*/
om.core.commit_BANG_ = (function commit_BANG_(cursor,korks,f){


var key = (((function (){var G__20948 = cursor;
if(G__20948){
var bit__4455__auto__ = null;
if(cljs.core.truth_((function (){var or__3774__auto__ = bit__4455__auto__;
if(cljs.core.truth_(or__3774__auto__)){
return or__3774__auto__;
} else {
return G__20948.om$core$IRootKey$;
}
})())){
return true;
} else {
if((!G__20948.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IRootKey,G__20948);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IRootKey,G__20948);
}
})())?om.core._root_key(cursor):null);
var app_state = om.core.state(cursor);
var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
var cpath = (function (){var G__20949 = cursor;
return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__20949) : om.core.path.call(null,G__20949));
})();
var rpath = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cpath,korks__$1);
if(cljs.core.truth_(key)){
om.core._set_property_BANG_(app_state,key,cljs.core.constant$keyword$124,true);
} else {
}

if(cljs.core.empty_QMARK_(rpath)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app_state,f);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,rpath,f);
}
});
/**
* A helper function to get at React refs. Given a owning pure node
* extract the ref specified by name.
*/
om.core.get_node = (function() {
var get_node = null;
var get_node__1 = (function (owner){
return owner.getDOMNode();
});
var get_node__2 = (function (owner,name){

var temp__4126__auto__ = owner.refs;
if(cljs.core.truth_(temp__4126__auto__)){
var refs = temp__4126__auto__;
return (refs[name]).getDOMNode();
} else {
return null;
}
});
get_node = function(owner,name){
switch(arguments.length){
case 1:
return get_node__1.call(this,owner);
case 2:
return get_node__2.call(this,owner,name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_node.cljs$core$IFn$_invoke$arity$1 = get_node__1;
get_node.cljs$core$IFn$_invoke$arity$2 = get_node__2;
return get_node;
})()
;
/**
* Return true if the backing React component is mounted into the DOM.
*/
om.core.mounted_QMARK_ = (function mounted_QMARK_(owner){
return owner.isMounted();
});
/**
* Takes a pure owning component, a sequential list of keys and value and
* sets the state of the component. Conceptually analagous to React
* setState. Will schedule an Om re-render.
*/
om.core.set_state_BANG_ = (function() {
var set_state_BANG_ = null;
var set_state_BANG___2 = (function (owner,v){

return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,v,true);
});
var set_state_BANG___3 = (function (owner,korks,v){

var ks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4(owner,ks,v,true);
});
set_state_BANG_ = function(owner,korks,v){
switch(arguments.length){
case 2:
return set_state_BANG___2.call(this,owner,korks);
case 3:
return set_state_BANG___3.call(this,owner,korks,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = set_state_BANG___2;
set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = set_state_BANG___3;
return set_state_BANG_;
})()
;
/**
* EXPERIMENTAL: Same as set-state! but does not trigger re-render.
*/
om.core.set_state_nr_BANG_ = (function() {
var set_state_nr_BANG_ = null;
var set_state_nr_BANG___2 = (function (owner,v){

return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,v,false);
});
var set_state_nr_BANG___3 = (function (owner,korks,v){

var ks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4(owner,ks,v,false);
});
set_state_nr_BANG_ = function(owner,korks,v){
switch(arguments.length){
case 2:
return set_state_nr_BANG___2.call(this,owner,korks);
case 3:
return set_state_nr_BANG___3.call(this,owner,korks,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = set_state_nr_BANG___2;
set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = set_state_nr_BANG___3;
return set_state_nr_BANG_;
})()
;
/**
* Takes a pure owning component, a sequential list of keys and a
* function to transition the state of the component. Conceptually
* analagous to React setState. Will schedule an Om re-render.
*/
om.core.update_state_BANG_ = (function() {
var update_state_BANG_ = null;
var update_state_BANG___2 = (function (owner,f){


return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(owner,(function (){var G__20952 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__20952) : f.call(null,G__20952));
})());
});
var update_state_BANG___3 = (function (owner,korks,f){


return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,korks,(function (){var G__20953 = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,korks);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__20953) : f.call(null,G__20953));
})());
});
update_state_BANG_ = function(owner,korks,f){
switch(arguments.length){
case 2:
return update_state_BANG___2.call(this,owner,korks);
case 3:
return update_state_BANG___3.call(this,owner,korks,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = update_state_BANG___2;
update_state_BANG_.cljs$core$IFn$_invoke$arity$3 = update_state_BANG___3;
return update_state_BANG_;
})()
;
/**
* EXPERIMENTAL: Same as update-state! but does not trigger re-render.
*/
om.core.update_state_nr_BANG_ = (function() {
var update_state_nr_BANG_ = null;
var update_state_nr_BANG___2 = (function (owner,f){


return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2(owner,(function (){var G__20956 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__20956) : f.call(null,G__20956));
})());
});
var update_state_nr_BANG___3 = (function (owner,korks,f){


return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3(owner,korks,(function (){var G__20957 = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,korks);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__20957) : f.call(null,G__20957));
})());
});
update_state_nr_BANG_ = function(owner,korks,f){
switch(arguments.length){
case 2:
return update_state_nr_BANG___2.call(this,owner,korks);
case 3:
return update_state_nr_BANG___3.call(this,owner,korks,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = update_state_nr_BANG___2;
update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = update_state_nr_BANG___3;
return update_state_nr_BANG_;
})()
;
/**
* Utility to re-render an owner.
*/
om.core.refresh_BANG_ = (function refresh_BANG_(owner){

return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.identity);
});
/**
* Takes a pure owning component and an optional key or sequential
* list of keys and returns a property in the component local state if
* it exists. Always returns the rendered state, not the pending
* state.
*/
om.core.get_render_state = (function() {
var get_render_state = null;
var get_render_state__1 = (function (owner){

return om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(owner);
});
var get_render_state__2 = (function (owner,korks){

var ks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_render_state.cljs$core$IFn$_invoke$arity$2(owner,ks);
});
get_render_state = function(owner,korks){
switch(arguments.length){
case 1:
return get_render_state__1.call(this,owner);
case 2:
return get_render_state__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_render_state.cljs$core$IFn$_invoke$arity$1 = get_render_state__1;
get_render_state.cljs$core$IFn$_invoke$arity$2 = get_render_state__2;
return get_render_state;
})()
;
