(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7043ee33","chunk-2d21062b","chunk-67e0cd62","chunk-67e0cd62","chunk-cf58091e","chunk-2d21062b"],{"51a2":function(t,e,n){"use strict";n.r(e),n.d(e,"listProgram",(function(){return c})),n.d(e,"getProgram",(function(){return a})),n.d(e,"updateProgram",(function(){return i})),n.d(e,"updateProgramStatus",(function(){return s})),n.d(e,"addProgram",(function(){return m})),n.d(e,"delProgram",(function(){return u}));var r=n("b775"),o=n("b854");function c(t){return Object(r["a"])({url:"".concat(o["pfmcSettings"],"/pfmcProgram/list"),method:"get",params:t})}function a(t){return Object(r["a"])({url:"".concat(o["pfmcSettings"],"/pfmcProgram/")+t,method:"get"})}function i(t){return Object(r["a"])({url:"".concat(o["pfmcSettings"],"/pfmcProgram/update"),method:"put",data:t})}function s(t){return Object(r["a"])({url:"".concat(o["pfmcSettings"],"/pfmcProgram/updateStatus"),method:"put",data:t})}function m(t){return Object(r["a"])({url:"".concat(o["pfmcSettings"],"/pfmcProgram/add"),method:"post",data:t})}function u(t){return Object(r["a"])({url:"".concat(o["pfmcSettings"],"/pfmcProgram/del"),method:"put",data:t})}},aa5d:function(t,e,n){"use strict";n.r(e),n.d(e,"listPfmcItemsMode",(function(){return c})),n.d(e,"getPfmcMode",(function(){return a})),n.d(e,"addPfmcMode",(function(){return i})),n.d(e,"updatePfmcMode",(function(){return s})),n.d(e,"batchDelMode",(function(){return m})),n.d(e,"getModeItems",(function(){return u})),n.d(e,"saveMode",(function(){return d})),n.d(e,"listModeAss",(function(){return f})),n.d(e,"getPfmcModeAss",(function(){return l})),n.d(e,"addPfmcModeAss",(function(){return p})),n.d(e,"updatePfmcModeAss",(function(){return g})),n.d(e,"batchDelModeAss",(function(){return h}));var r=n("b775"),o=n("b854");function c(t){return Object(r["a"])({url:"".concat(o["pfmcSettings"],"/pfmcitemsmode/list"),method:"get",params:t})}function a(t){return Object(r["a"])({url:"".concat(o["pfmcSettings"],"/pfmcitemsmode/getModeInfo/").concat(t),method:"get"})}function i(t){return Object(r["a"])({url:"".concat(o["pfmcSettings"],"/pfmcitemsmode/add"),method:"post",data:t})}function s(t){return Object(r["a"])({url:"".concat(o["pfmcSettings"],"/pfmcitemsmode/update"),method:"put",data:t})}function m(t){return Object(r["a"])({url:"".concat(o["pfmcSettings"],"/pfmcitemsmode/del"),method:"put",data:t})}function u(t){return Object(r["a"])({url:"".concat(o["pfmcSettings"],"/pfmcitemsmode/getModeItems/").concat(t),method:"get"})}function d(t){return Object(r["a"])({url:"".concat(o["pfmcSettings"],"/pfmcitemsmode/saveMode"),method:"post",data:t})}function f(t){return Object(r["a"])({url:"".concat(o["pfmcSettings"],"/pfmcitemsmode/assList"),method:"get",params:t})}function l(t){return Object(r["a"])({url:"".concat(o["pfmcSettings"],"/pfmcitemsmode/getModeAssInfo/").concat(t),method:"get"})}function p(t){return Object(r["a"])({url:"".concat(o["pfmcSettings"],"/pfmcitemsmode/addAss"),method:"post",data:t})}function g(t){return Object(r["a"])({url:"".concat(o["pfmcSettings"],"/pfmcitemsmode/updateAss"),method:"put",data:t})}function h(t){return Object(r["a"])({url:"".concat(o["pfmcSettings"],"/pfmcitemsmode/delAss"),method:"put",data:t})}},b854:function(t,e,n){"use strict";n.r(e),n.d(e,"pfmcSettings",(function(){return r})),n.d(e,"pfmcAsist",(function(){return o})),n.d(e,"pfmcExecution",(function(){return c})),n.d(e,"pfmcEval",(function(){return a}));var r="pfmc-settings",o="pfmc-asist",c="pfmc-execution",a="pfmc-eval"},d0ef:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("el-dialog",{attrs:{title:t.title,visible:t.show,width:"800px"},on:{"update:visible":function(e){t.show=e},open:t.open,close:t.cancel}},[n("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules,"label-width":"130px"}},[n("el-form-item",{attrs:{label:"模板名称",prop:"modeName"}},[n("el-input",{attrs:{disabled:!t.isEdit,placeholder:"请输入模板名称",maxlength:"20"},model:{value:t.form.modeName,callback:function(e){t.$set(t.form,"modeName",e)},expression:"form.modeName"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"考核类型",prop:"evalType"}},[n("el-select",{attrs:{disabled:!t.isEdit,placeholder:"请选择考核类型"},model:{value:t.form.evalType,callback:function(e){t.$set(t.form,"evalType",e)},expression:"form.evalType"}},t._l(t.evalTypeOptions,(function(t){return n("el-option",{key:t.dictValue,attrs:{label:t.dictLabel,value:t.dictValue}})})),1)],1),t._v(" "),n("el-form-item",{attrs:{label:"绩效考核方案",prop:"programId"}},[n("el-select",{staticStyle:{width:"200px"},attrs:{disabled:!t.isEdit,placeholder:"请选择考核方案"},model:{value:t.form.programId,callback:function(e){t.$set(t.form,"programId",e)},expression:"form.programId"}},t._l(t.programList,(function(t){return n("el-option",{key:t.programId,attrs:{label:t.programName,value:t.programId}})})),1)],1)],1),t._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{plain:"",icon:"el-icon-close"},on:{click:t.cancel}},[t._v("取消")]),t._v(" "),n("el-button",{attrs:{type:"primary",icon:"el-icon-bank-card"},on:{click:t.submitForm}},[t._v("保存")])],1)],1)],1)},o=[],c=n("aa5d"),a=n("51a2"),i={props:{visible:{type:Boolean,default:!1},isEdit:{type:Boolean,default:!0},title:{type:String,default:""},modeId:{type:String,default:"0"}},data:function(){return{show:!1,programList:[],evalTypeOptions:[],form:{},rules:{modeName:[{required:!0,message:"模板名称",trigger:"blur"}],evalType:[{required:!0,message:"考核类型不能为空",trigger:"blur"}],programId:[{required:!0,message:"考核方案不能为空",trigger:"blur"}]}}},created:function(){var t=this;this.getDicts("pfmc_type").then((function(e){t.evalTypeOptions=e.data})),this.getProgramList()},methods:{open:function(){var t=this;"0"!=this.modeId&&Object(c["getPfmcMode"])(this.modeId).then((function(e){"0"===e.code?t.form=e.data:t.msgError(e.msg)})).catch((function(e){t.msgError(e)}))},cancel:function(){this.show=!1,this.reset()},reset:function(){this.resetForm("form")},submitForm:function(){var t=this;this.$refs["form"].validate((function(e){e&&(0!==t.modeId?Object(c["updatePfmcMode"])(t.form).then((function(e){"0"===e.code?(t.msgSuccess("修改成功"),t.cancel()):t.msgError(e.msg),t.cancel()})):Object(c["addPfmcMode"])(t.form).then((function(e){"0"===e.code?(t.msgSuccess("新增成功"),t.cancel()):t.msgError(e.msg)})))}))},getProgramList:function(){var t=this,e={programName:"",status:"1",pageNum:1,pageSize:0};Object(a["listProgram"])(e).then((function(e){"0"===e.code?t.programList=e.data.list:t.msgError("查询绩效考核方案列表失败")})).catch((function(e){t.msgError(e)}))}},watch:{show:function(){0==this.show&&this.$emit("update:visible",!1)},visible:function(){this.show=this.visible}}},s=i,m=n("2877"),u=Object(m["a"])(s,r,o,!1,null,null,null);e["default"]=u.exports}}]);