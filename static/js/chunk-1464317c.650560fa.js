(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1464317c","chunk-2d21062b","chunk-142d866f","chunk-bb07ed0a","chunk-2d21062b"],{"304f":function(t,e,o){"use strict";o.r(e),o.d(e,"listPfmcCycle",(function(){return r})),o.d(e,"getPfmcCycle",(function(){return a})),o.d(e,"addPfmcCycle",(function(){return l})),o.d(e,"updatePfmcCycle",(function(){return i})),o.d(e,"batchAddPfmcCycle",(function(){return d}));var n=o("b775"),c=o("b854");function r(t){return Object(n["a"])({url:"".concat(c["pfmcSettings"],"/pfmccycle/list"),method:"get",params:t})}function a(t){return Object(n["a"])({url:"".concat(c["pfmcSettings"],"/pfmccycle/").concat(t),method:"get"})}function l(t){return Object(n["a"])({url:"".concat(c["pfmcSettings"],"/pfmccycle/add"),method:"post",data:t})}function i(t){return Object(n["a"])({url:"".concat(c["pfmcSettings"],"/pfmccycle/update"),method:"put",data:t})}function d(t){return Object(n["a"])({url:"".concat(c["pfmcSettings"],"/pfmccycle/batchAdd"),method:"post",data:t})}},"310f":function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"app-container"},[o("el-dialog",{attrs:{title:"复制考核关系",visible:t.show,width:"960px","close-on-click-modal":!1},on:{"update:visible":function(e){t.show=e},close:t.cancel}},[o("el-form",{ref:"noRecordCopyForm",attrs:{model:t.noRecordCopyForm,rules:t.rules,"label-width":"78px"}},[o("span",{staticClass:"table-title"},[t._v("被复制考核关系数据")]),t._v(" "),o("el-row",[o("el-col",{attrs:{span:12}},[o("el-form-item",{attrs:{label:"年份",prop:"oldyear"}},[o("el-date-picker",{attrs:{type:"year",placeholder:"选择年份",width:"4px"},on:{change:function(e){return t.getCycleList("old")}},model:{value:t.noRecordCopyForm.oldYear,callback:function(e){t.$set(t.noRecordCopyForm,"oldYear",e)},expression:"noRecordCopyForm.oldYear"}})],1)],1),t._v(" "),o("el-col",{attrs:{span:12}},[o("el-form-item",{attrs:{label:"考核周期",prop:"oldCycleId"}},[o("el-select",{attrs:{placeholder:"选择考核期间"},model:{value:t.noRecordCopyForm.oldCycleId,callback:function(e){t.$set(t.noRecordCopyForm,"oldCycleId",e)},expression:"noRecordCopyForm.oldCycleId"}},t._l(t.oldCycleOptions,(function(t){return o("el-option",{key:t.cycleId,attrs:{label:t.cycleName,value:t.cycleId}})})),1)],1)],1)],1),t._v(" "),o("el-row",[o("el-col",{attrs:{span:10}},[o("el-form-item",{attrs:{label:"部门",prop:"deptId"}},[o("tree-select",{staticClass:"dept-tree-select",attrs:{options:t.deptOptions,placeholder:"选择部门",size:"mini","default-expand-level":1},model:{value:t.noRecordCopyForm.deptId,callback:function(e){t.$set(t.noRecordCopyForm,"deptId",e)},expression:"noRecordCopyForm.deptId"}})],1)],1)],1),t._v(" "),o("span",{staticClass:"table-title"},[t._v("生成考核关系数据")]),t._v(" "),o("el-row",[o("el-col",{attrs:{span:12}},[o("el-form-item",{attrs:{label:"年份",prop:"newYear"}},[o("el-date-picker",{attrs:{type:"year",placeholder:"请选择年份",width:"4px"},on:{change:function(e){return t.getCycleList("new")}},model:{value:t.noRecordCopyForm.newYear,callback:function(e){t.$set(t.noRecordCopyForm,"newYear",e)},expression:"noRecordCopyForm.newYear"}})],1)],1),t._v(" "),o("el-col",{attrs:{span:12}},[o("el-form-item",{attrs:{label:"考核周期",prop:"newCycleId"}},[o("el-select",{attrs:{placeholder:"选择考核周期"},model:{value:t.noRecordCopyForm.newCycleId,callback:function(e){t.$set(t.noRecordCopyForm,"newCycleId",e)},expression:"noRecordCopyForm.newCycleId"}},t._l(t.newCycleOptions,(function(t){return o("el-option",{key:t.cycleId,attrs:{label:t.cycleName,value:t.cycleId}})})),1)],1)],1)],1)],1),t._v(" "),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{attrs:{plain:"",icon:"el-icon-close"},on:{click:t.cancel}},[t._v("取消")]),t._v(" "),o("el-button",{attrs:{type:"primary",icon:"el-icon-bank-card"},on:{click:function(e){t.dialogVisible=!0}}},[t._v("确定")])],1)],1),t._v(" "),o("el-dialog",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{title:"提示",visible:t.dialogVisible,width:"30%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[o("span",[t._v("是否覆盖已有数据？")]),t._v(" "),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(e){return t.submitForm("insert")}}},[t._v("否")]),t._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.submitForm("update")}}},[t._v("是")])],1)])],1)},c=[],r=(o("542c"),o("fcb7")),a=o("e31f"),l=o("304f"),i={components:{TreeSelect:function(){return o.e("chunk-5c5c1f08").then(o.t.bind(null,"7026",7))}},props:{visible:{type:Boolean,default:!1}},data:function(){return{show:!1,loading:!0,dialogVisible:!1,year:new Date,oldCycleOptions:[],newCycleOptions:[],deptOptions:void 0,noRecordCopyForm:{newCycleId:void 0,deptId:void 0,oldCycleId:void 0},rules:{oldYear:[{required:!0,message:"被复制数据的年份不能为空",trigger:"blur"}],oldCycleId:[{required:!0,message:"被复制数据的考核周期不能为空",trigger:"blur"}],newYear:[{required:!0,message:"生成数据的年份不能为空",trigger:"blur"}],newCycleId:[{required:!0,message:"生成数据的考核周期不能为空",trigger:"blur"}]}}},created:function(){this.getTreeselect()},methods:{getTreeselect:function(){var t=this;Object(r["f"])().then((function(e){t.deptOptions=e.data}))},getCycleList:function(t){var e,o=this;"new"===t?(e=this.noRecordCopyForm.newYear.getFullYear(),this.noRecordCopyForm.newCycleId=""):(e=this.noRecordCopyForm.oldYear.getFullYear(),this.noRecordCopyForm.oldCycleId="");var n={cycleYear:e,pageNum:1,pageSize:0};Object(l["listPfmcCycle"])(n).then((function(e){"0"===e.code?"new"===t?o.newCycleOptions=e.data.list:o.oldCycleOptions=e.data.list:o.msgError("查询考核周期列表失败")})).catch((function(t){o.msgError(t)}))},cancel:function(){this.show=!1,this.reset()},reset:function(){this.resetForm("noRecordCopyForm")},submitForm:function(t){var e=this;this.$refs["noRecordCopyForm"].validate((function(o){o&&(e.dialogVisible=!1,e.loading=!0,e.noRecordCopyForm.copyType=t,Object(a["noRecordCopyRelation"])(e.noRecordCopyForm).then((function(t){if(e.loading=!1,"0"===t.code){var o=t.data;e.msgSuccess("共有"+o+"条数据复制成功"),e.cancel()}else e.msgError(t.msg)})))}))}},watch:{show:function(){0==this.show&&this.$emit("update:visible",!1)},visible:function(){this.show=this.visible}}},d=i,u=(o("4e17"),o("2877")),s=Object(u["a"])(d,n,c,!1,null,"a4a1cc32",null);e["default"]=s.exports},"4e17":function(t,e,o){"use strict";var n=o("b2dc"),c=o.n(n);c.a},"542c":function(t,e,o){},b2dc:function(t,e,o){},b854:function(t,e,o){"use strict";o.r(e),o.d(e,"pfmcSettings",(function(){return n})),o.d(e,"pfmcAsist",(function(){return c})),o.d(e,"pfmcExecution",(function(){return r})),o.d(e,"pfmcEval",(function(){return a}));var n="pfmc-settings",c="pfmc-asist",r="pfmc-execution",a="pfmc-eval"},e31f:function(t,e,o){"use strict";o.r(e),o.d(e,"listPfmcRelation",(function(){return r})),o.d(e,"getPfmcRelation",(function(){return a})),o.d(e,"addPfmcRelation",(function(){return l})),o.d(e,"updatePfmcRelation",(function(){return i})),o.d(e,"deletePfmcRelation",(function(){return d})),o.d(e,"batchDelRelation",(function(){return u})),o.d(e,"batchAddPfmcRelation",(function(){return s})),o.d(e,"recordCopyRelation",(function(){return p})),o.d(e,"noRecordCopyRelation",(function(){return f}));var n=o("b775"),c=o("b854");function r(t){return Object(n["a"])({url:"".concat(c["pfmcSettings"],"/pfmcrelation/list"),method:"post",data:t})}function a(t){return Object(n["a"])({url:"".concat(c["pfmcSettings"],"/pfmcrelation/").concat(t),method:"get"})}function l(t){return Object(n["a"])({url:"".concat(c["pfmcSettings"],"/pfmcrelation/add"),method:"post",data:t})}function i(t){return Object(n["a"])({url:"".concat(c["pfmcSettings"],"/pfmcrelation/update"),method:"put",data:t})}function d(t){return Object(n["a"])({url:"".concat(c["pfmcSettings"],"/pfmcrelation/delete"),method:"put",data:t})}function u(t){return Object(n["a"])({url:"".concat(c["pfmcSettings"],"/pfmcrelation/batchdel"),method:"put",data:t})}function s(t){return Object(n["a"])({url:"".concat(c["pfmcSettings"],"/pfmcrelation/batchAdd"),method:"post",data:t})}function p(t){return Object(n["a"])({url:"".concat(c["pfmcSettings"],"/pfmcrelation/recordCopy"),method:"post",data:t})}function f(t){return Object(n["a"])({url:"".concat(c["pfmcSettings"],"/pfmcrelation/noRecordCopy"),method:"post",data:t})}},fcb7:function(t,e,o){"use strict";o.d(e,"d",(function(){return r})),o.d(e,"c",(function(){return a})),o.d(e,"f",(function(){return l})),o.d(e,"e",(function(){return i})),o.d(e,"a",(function(){return d})),o.d(e,"g",(function(){return u})),o.d(e,"b",(function(){return s}));var n=o("b775"),c=o("365c");function r(t){return Object(n["a"])({url:"".concat(c["d"],"/dept/list"),method:"get",params:t})}function a(t){return Object(n["a"])({url:"".concat(c["d"],"/dept/").concat(t),method:"get"})}function l(){return Object(n["a"])({url:"".concat(c["d"],"/dept/treeselect"),method:"get"})}function i(t){return Object(n["a"])({url:"".concat(c["d"],"/dept/roleDeptTreeselect/").concat(t),method:"get"})}function d(t){return Object(n["a"])({url:"".concat(c["d"],"/dept"),method:"post",data:t})}function u(t){return Object(n["a"])({url:"".concat(c["d"],"/dept"),method:"put",data:t})}function s(t){return Object(n["a"])({url:"".concat(c["d"],"/dept/").concat(t),method:"delete"})}}}]);