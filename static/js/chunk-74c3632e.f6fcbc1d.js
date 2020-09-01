(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-74c3632e","chunk-2d21062b","chunk-6b5c8887","chunk-2d21062b"],{b854:function(t,e,c){"use strict";c.r(e),c.d(e,"pfmcSettings",(function(){return n})),c.d(e,"pfmcAsist",(function(){return a})),c.d(e,"pfmcExecution",(function(){return r})),c.d(e,"pfmcEval",(function(){return o}));var n="pfmc-settings",a="pfmc-asist",r="pfmc-execution",o="pfmc-eval"},c921:function(t,e,c){"use strict";c.r(e);var n=function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"app-container"},[c("el-dialog",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{title:t.title,visible:t.show,width:"800px"},on:{"update:visible":function(e){t.show=e},close:t.cancelBatch}},[c("el-form",{ref:"batchForm",attrs:{model:t.form,rules:t.rules,"label-width":"130px"}},[c("el-row",[c("el-col",{attrs:{span:12}},[c("el-form-item",{attrs:{label:"年份",prop:"cycleYear"}},[c("el-date-picker",{staticStyle:{width:"200px"},attrs:{clearable:"",type:"year",placeholder:"请选择年份","picker-options":t.yearOptions},on:{change:t.getCycleList},model:{value:t.form.cycleYear,callback:function(e){t.$set(t.form,"cycleYear",e)},expression:"form.cycleYear"}})],1)],1),t._v(" "),c("el-col",{attrs:{span:12}},[c("el-form-item",{attrs:{label:"考核周期",prop:"cycleId"}},[c("el-select",{attrs:{placeholder:"请选择"},model:{value:t.form.cycleId,callback:function(e){t.$set(t.form,"cycleId",e)},expression:"form.cycleId"}},t._l(t.cycleOptions,(function(t){return c("el-option",{key:t.cycleId,attrs:{label:t.cycleName,value:t.cycleId}})})),1)],1)],1)],1)],1),t._v(" "),c("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[c("el-button",{attrs:{type:"primary"},on:{click:t.submitBatchForm}},[t._v("确 定")]),t._v(" "),c("el-button",{on:{click:t.cancelBatch}},[t._v("取 消")])],1)],1)],1)},a=[],r=c("e426"),o={props:{visible:{type:Boolean,default:!1},title:{type:String,default:""},planId:{type:String,default:"0"},formId:{type:String,default:"0"}},data:function(){var t=this;return{loading:!1,show:!1,sendFormId:"0",sendPlanId:"0",cycleOptions:[],yearOptions:{onPick:function(e){var c=e.maxDate,n=e.minDate;t.choiceDate=n.getTime(),c&&(t.choiceDate="")},disabledDate:function(e){if(null!=t.choiceDate){var c=62208e6;return e.getTime()<Date.now()-(new Date).getFullYear()||e.getTime()>Date.now()-(new Date).getFullYear()+c}}},choiceDate:"",form:{cycleYear:new Date,cycleId:""},rules:{cycleYear:[{required:!0,message:"年份不能为空",trigger:"blur"}],cycleId:[{required:!0,message:"考核周期不能为空",trigger:"blur"}]}}},created:function(){},methods:{getCycleList:function(){var t=this;this.form.cycleId="";var e={cycleYear:this.form.cycleYear.getFullYear(),planId:this.sendPlanId,formId:this.sendFormId};Object(r["listPfmcCycle"])(e).then((function(e){"0"===e.code?t.cycleOptions=e.data:t.msgError("查询考核周期列表失败")})).catch((function(e){t.msgError(e)}))},submitBatchForm:function(){var t=this;this.$refs["batchForm"].validate((function(e){e&&(t.loading=!0,t.form.planId=t.planId,t.form.periodId=t.form.cycleId,Object(r["copyHisPlan"])(t.form).then((function(e){"0"===e.code?(t.msgSuccess("历史计划复制成功"),t.cancelBatch()):(t.msgError(e.msg),t.cancelBatch())})).catch((function(e){t.$notify({title:"网络异常",message:e.message,type:"error"}),t.cancelBatch()})))}))},cancelBatch:function(){this.loading=!1,this.show=!1,this.resetBatch()},resetBatch:function(){this.resetForm("batchForm")}},watch:{show:function(){0==this.show&&this.$emit("update:visible",!1)},visible:function(){this.show=this.visible},formId:function(){this.sendFormId=this.formId,this.sendPlanId=this.planId,this.getCycleList()}}},l=o,i=c("2877"),s=Object(i["a"])(l,n,a,!1,null,null,null);e["default"]=s.exports},e426:function(t,e,c){"use strict";c.r(e),c.d(e,"getPlanByProcInstId",(function(){return r})),c.d(e,"addPlanItem",(function(){return o})),c.d(e,"startEmpPlan",(function(){return l})),c.d(e,"copyHisPlan",(function(){return i})),c.d(e,"queryApprovers",(function(){return s})),c.d(e,"flowApproval",(function(){return u})),c.d(e,"listPfmcCycle",(function(){return d}));var n=c("b775"),a=c("b854");function r(t){return Object(n["a"])({url:"".concat(a["pfmcExecution"],"/pfmcMakePlan/getPlanByProcInstId/").concat(t),method:"get"})}function o(t){return Object(n["a"])({url:"".concat(a["pfmcExecution"],"/pfmcMakePlan"),method:"post",data:t})}function l(t){return Object(n["a"])({url:"".concat(a["pfmcExecution"],"/pfmcStartPlan/startEmpPlan"),method:"post",data:t})}function i(t){return Object(n["a"])({url:"".concat(a["pfmcExecution"],"/pfmcMakePlan/copyHisPlan"),method:"post",data:t})}function s(t){return Object(n["a"])({url:"".concat(a["pfmcExecution"],"/pfmcMakePlan/queryApprovers/").concat(t),method:"get"})}function u(t){return Object(n["a"])({url:"".concat(a["pfmcExecution"],"/pfmcMakePlan/flowApproval"),method:"post",data:t})}function d(t){return Object(n["a"])({url:"".concat(a["pfmcExecution"],"/pfmcMakePlan/getCycleList"),method:"get",params:t})}}}]);