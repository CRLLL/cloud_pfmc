(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-654254cb"],{"76d1":function(t,i,e){"use strict";e.r(i);var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"app-container workflow-wrapper"},[t.activityConfig.toolbarView?e("div",{staticClass:"fixed-button"},[e("div",[t.submitBtnVisible?e("el-button",{attrs:{icon:"el-icon-top",type:"primary"},on:{click:t.submitAct}},[t._v("提交")]):t._e(),t._v(" "),t.saveDraftBtnVisible?e("el-button",{attrs:{icon:"el-icon-bank-card",plain:""},on:{click:t.saveDraft}},[t._v("暂存")]):t._e(),t._v(" "),t.turnbackToPrevBtnVisible?e("el-button",{attrs:{icon:"el-icon-arrow-left",plain:""},on:{click:function(i){return t.turnbackAct("previous")}}},[t._v("退回至上一办理人")]):t._e(),t._v(" "),t.turnbackToFirstBtnVisible?e("el-button",{attrs:{icon:"el-icon-d-arrow-left",plain:""},on:{click:function(i){return t.turnbackAct("first")}}},[t._v("退回至发起人")]):t._e(),t._v(" "),t.revokeBtnVisible?e("el-button",{attrs:{icon:"el-icon-delete",plain:""},on:{click:t.revokeFlow}},[t._v("撤销")]):t._e()],1)]):t._e(),t._v(" "),e("div",[t._t("default"),t._v(" "),t.activityConfig.historyView?e("process-history",{ref:"his",attrs:{"flow-params":t.flowParams}}):t._e()],2),t._v(" "),e("submit-dialog",{ref:"submt",attrs:{"flow-params":t.flowParams,vars:t.vars,"submit-type":t.submitType,"approver-map":t.approverMap},on:{"submit-wf":t.doSubmit,"turnback-wf":t.doTurnback}})],1)},r=[],a=e("7618"),o=(e("96cf"),e("3b8d")),s=(e("ac6a"),e("5df3"),e("f400"),{name:"ihr-wf-page",components:{SubmitDialog:function(){return e.e("chunk-7b850a82").then(e.bind(null,"ccb6"))},ProcessHistory:function(){return e.e("chunk-20e18c2e").then(e.bind(null,"d9f7"))}},props:{flowParams:{type:Object,default:function(){return{}}},vars:[Object,Map],approverMap:[Object,Map],showSaveDraftBtn:{type:Boolean,default:!1}},data:function(){return{workflowConfig:{allowRevoke:"Y"===this.flowParams.ALLOW_REVOKE,firstTaskDefKey:this.flowParams.FIRST_ACT_DEF_KEY},activityConfig:{toolbarView:!0,historyView:!0,allowTurnBack:!1,allowTurnBackFirst:!0},submitType:"submit"}},computed:{curTaskDefKey:function(){return this.flowParams.TASK_DEF_KEY_},isFirstNode:function(){return this.workflowConfig.firstTaskDefKey===this.curTaskDefKey},isWaitForDeal:function(){return"1"===this.flowParams.taskType},submitBtnVisible:function(){return this.isWaitForDeal},turnbackToPrevBtnVisible:function(){return this.isWaitForDeal&&!this.isFirstNode&&this.activityConfig.allowTurnBack},turnbackToFirstBtnVisible:function(){return this.isWaitForDeal&&!this.isFirstNode&&this.activityConfig.allowTurnBackFirst},revokeBtnVisible:function(){return this.isWaitForDeal&&this.isFirstNode&&this.workflowConfig.allowRevoke},saveDraftBtnVisible:function(){return this.isWaitForDeal&&this.showSaveDraftBtn}},created:function(){},methods:{submitAct:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("function"!==typeof this.$parent.$_businessVaildCallBack){t.next=7;break}return t.next=3,this.$parent.$_businessVaildCallBack();case 3:if(i=t.sent,"object"===Object(a["a"])(i)&&i.then((function(t){return i=t})),1==i){t.next=7;break}return t.abrupt("return");case 7:this.submitType="submit",this.$refs["submt"].open=!0;case 9:case"end":return t.stop()}}),t,this)})));function i(){return t.apply(this,arguments)}return i}(),doSubmit:function(t){this.$emit("driven-flow","submit",t)},saveDraft:function(){this.$emit("save-draft")},turnbackAct:function(t){this.submitType="first"===t?"turnbackToFirst":"turnbackToPrevious",this.$refs["submt"].open=!0},doTurnback:function(t){this.$emit("driven-flow",t.turnbackType,t)},revokeFlow:function(){},back:function(){this.closeWorkflowPage(this.flowParams.ihrHome)}}}),u=s,c=e("2877"),l=Object(c["a"])(u,n,r,!1,null,null,null);i["default"]=l.exports},f400:function(t,i,e){"use strict";var n=e("c26b"),r=e("b39a"),a="Map";t.exports=e("e0b8")(a,(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{get:function(t){var i=n.getEntry(r(this,a),t);return i&&i.v},set:function(t,i){return n.def(r(this,a),0===t?0:t,i)}},n,!0)}}]);