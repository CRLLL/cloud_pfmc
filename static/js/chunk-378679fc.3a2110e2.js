(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-378679fc","chunk-2d21062b","chunk-c1e16f42","chunk-6b472f31","chunk-2d21062b"],{"101f":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ihr-wrapper"},[s("div",{staticClass:"top-query"},[s("el-form",{ref:"queryForm",attrs:{model:t.queryParams,"label-width":"90px"}},[s("el-row",[s("el-col",{attrs:{span:8}},[s("el-form-item",{attrs:{label:"区段名称",prop:"sectionName"}},[s("el-input",{attrs:{clearable:"",placeholder:"请输入..."},model:{value:t.queryParams.sectionName,callback:function(e){t.$set(t.queryParams,"sectionName",e)},expression:"queryParams.sectionName"}})],1)],1),t._v(" "),s("el-col",{attrs:{span:8}},[s("el-form-item",{attrs:{label:"区段类型",prop:"sectionType"}},[s("el-select",{attrs:{placeholder:"全部",clearable:""},model:{value:t.queryParams.sectionType,callback:function(e){t.$set(t.queryParams,"sectionType",e)},expression:"queryParams.sectionType"}},t._l(t.sectionTypeOptions,(function(t){return s("el-option",{key:t.dictValue,attrs:{label:t.dictLabel,value:t.dictValue}})})),1)],1)],1),t._v(" "),s("el-col",{attrs:{span:8}},[s("el-form-item",{attrs:{label:"状态"}},[s("el-select",{attrs:{placeholder:"全部",clearable:""},model:{value:t.queryParams.status,callback:function(e){t.$set(t.queryParams,"status",e)},expression:"queryParams.status"}},t._l(t.statusOptions,(function(t){return s("el-option",{key:t.dictValue,attrs:{label:t.dictLabel,value:t.dictValue}})})),1)],1)],1)],1)],1),t._v(" "),s("div",[s("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.handleQuery}},[t._v("查询")]),t._v(" "),s("el-button",{attrs:{type:"primary",plain:"",icon:"el-icon-refresh-left"},on:{click:t.handleReset}},[t._v("重置")])],1)],1),t._v(" "),s("div",{staticClass:"main-table"},[s("div",{staticClass:"button-flex"},[s("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:t.handleAdd}},[t._v("新增")])],1),t._v(" "),s("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:t.sectionList,"row-key":"sectionId"}},[s("el-table-column",{attrs:{label:"序号",align:"center",type:"index"}}),t._v(" "),s("el-table-column",{attrs:{label:"区段名称",prop:"sectionName","show-overflow-tooltip":!0}}),t._v(" "),s("el-table-column",{attrs:{label:"区段类型",prop:"sectionType",formatter:t.sectionTypeFormat}}),t._v(" "),s("el-table-column",{attrs:{label:"状态",prop:"status"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("el-switch",{attrs:{"active-value":"1","inactive-value":"0"},on:{change:function(s){return t.handleUpdateStatus(e.row)}},model:{value:e.row.status,callback:function(s){t.$set(e.row,"status",s)},expression:"scope.row.status"}})]}}])}),t._v(" "),s("el-table-column",{attrs:{label:"操作",fixed:"right",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("el-button",{attrs:{type:"text"},on:{click:function(s){return t.handleView(e.row)}}},[t._v("查看")]),t._v(" "),0===e.row.refCount?s("el-button",{attrs:{type:"text"},on:{click:function(s){return t.handleUpdate(e.row)}}},[t._v("编辑")]):t._e(),t._v(" "),0===e.row.refCount?s("el-popconfirm",{staticClass:"el-button-confirm",attrs:{title:"您确定要删除吗？"},on:{onConfirm:function(s){return t.handleDelete(e.row)}}},[s("el-button",{attrs:{slot:"reference",type:"text"},slot:"reference"},[t._v("删除")])],1):t._e()]}}])})],1),t._v(" "),s("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],staticClass:"pagination-wrap",attrs:{total:t.total,page:t.queryParams.pageNum,limit:t.queryParams.pageSize},on:{"update:page":function(e){return t.$set(t.queryParams,"pageNum",e)},"update:limit":function(e){return t.$set(t.queryParams,"pageSize",e)},pagination:t.getList}})],1),t._v(" "),s("view-edit-dialog",{attrs:{visible:t.open,title:t.title,"section-id":t.sectionId,"is-edit":t.isEdit},on:{"update:visible":function(e){t.open=e}}})],1)},i=[],a=(s("7514"),s("5ee6")),o=s("6553"),c={components:{viewEditDialog:a["default"]},data:function(){return{loading:!0,total:0,sectionList:[],title:"",open:!1,sectionId:"0",isEdit:!0,sectionTypeOptions:[],isOpenOptions:[],statusOptions:[],queryParams:{pageNum:1,pageSize:10,sectionName:void 0,sectionType:void 0,status:"1"}}},created:function(){var t=this;this.getList(),this.getDicts("pfmc_presettings_section_type").then((function(e){t.sectionTypeOptions=e.data})),this.getDicts("sys_yes_no").then((function(e){t.isOpenOptions=e.data})),this.getDicts("sys_normal_status").then((function(e){t.statusOptions=e.data}))},methods:{getList:function(){var t=this;this.loading=!0,Object(o["listPfmcSection"])(this.queryParams).then((function(e){t.sectionList=e.data.list,t.total=e.data.total,t.loading=!1}))},statusFormat:function(t,e){return this.selectDictLabel(this.statusOptions,t.status)},handleReset:function(){this.resetForm("queryForm"),this.queryParams.status="1"},handleQuery:function(){this.queryParams.pageNum=1,this.getList()},handleView:function(t){this.sectionId=t.sectionId,this.open=!0,this.isEdit=!1,this.title="查看考核区段"},handleAdd:function(){this.sectionId="0",this.open=!0,this.isEdit=!0,this.title="添加考核区段"},handleUpdate:function(t){this.sectionId=t.sectionId,this.open=!0,this.isEdit=!0,this.title="修改考核区段"},handleDelete:function(t){var e=this;this.loading=!0;var s=t.sectionId,n={sectionId:s,isDeleted:!0};Object(o["updatePfmcSection"])(this.addDateRange(n)).then((function(t){e.loading=!1,"0"===t.code?(e.msgSuccess("删除成功"),e.getList()):e.msgError(t.msg)})).catch((function(t){e.loading=!1,e.msgError(t)}))},handleInvalid:function(t){var e=this;this.$confirm('是否确认失效考核区段名称为"'+t.sectionName+'"的数据项?').then((function(s){e.loading=!0;var n=t.sectionId,i=t.sectionName,a={sectionId:n,status:0};Object(o["updatePfmcSection"])(e.addDateRange(a)).then((function(t){e.loading=!1,"0"===t.code?(e.msgSuccess('"'+i+'"失效成功'),e.getList()):e.msgError(t.msg)})).catch((function(t){e.loading=!1,e.msgError(t)}))}))},sectionTypeFormat:function(t,e,s,n){var i=this.sectionTypeOptions.find((function(t){return t.dictValue==s}));return i?i.dictLabel:""},handleUpdateStatus:function(t){var e=this;this.$confirm('您确定要将名称为"'+t.sectionName+'"的区段设置为'+("1"===t.status?"有效":"失效")+"?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){e.loading=!0;var s=t.sectionId,n=t.status,i={sectionId:s,status:n};Object(o["updatePfmcSection"])(i).then((function(t){e.loading=!1,"0"===t.code?(e.msgSuccess("修改成功"),e.getList()):e.msgError(t.msg)})).catch((function(t){e.loading=!1,e.msgError(t)}))})).catch((function(){t.status="1"===t.status?"0":"1"}))}},watch:{open:function(){0==this.open&&this.getList()}}},r=c,l=s("2877"),u=Object(l["a"])(r,n,i,!1,null,null,null);e["default"]=u.exports},"5ee6":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"app-container"},[s("el-dialog",{attrs:{title:t.title,visible:t.show,width:"500px","close-on-click-modal":!1},on:{"update:visible":function(e){t.show=e},open:t.open,close:t.cancel}},[s("el-form",{ref:"sectionForm",attrs:{model:t.form,rules:t.rules,"label-width":"120px"}},[s("el-form-item",{attrs:{label:"区段名称",prop:"sectionName"}},[s("el-input",{attrs:{disabled:!t.isEdit,placeholder:"请输入区段字段名称",maxlength:"20"},model:{value:t.form.sectionName,callback:function(e){t.$set(t.form,"sectionName",e)},expression:"form.sectionName"}})],1),t._v(" "),s("el-form-item",{attrs:{label:"区段类型",prop:"sectionType"}},[s("el-select",{attrs:{disabled:!t.isEdit,placeholder:"请选择"},model:{value:t.form.sectionType,callback:function(e){t.$set(t.form,"sectionType",e)},expression:"form.sectionType"}},t._l(t.sectionTypeOptions,(function(t){return s("el-option",{key:t.dictValue,attrs:{label:t.dictLabel,value:t.dictValue}})})),1)],1),t._v(" "),s("el-form-item",{attrs:{label:"公开",prop:"isOpen"}},[s("el-radio-group",{model:{value:t.form.isOpen,callback:function(e){t.$set(t.form,"isOpen",e)},expression:"form.isOpen"}},t._l(t.isOpenOptions,(function(e){return s("el-radio",{key:e.dictValue,attrs:{label:e.dictValue,disabled:!t.isEdit}},[t._v(t._s(e.dictLabel))])})),1)],1),t._v(" "),s("el-form-item",{attrs:{label:"状态",prop:"status"}},[s("el-select",{attrs:{placeholder:"请选择",disabled:!t.isEdit},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}},t._l(t.statusOptions,(function(t){return s("el-option",{key:t.dictValue,attrs:{label:t.dictLabel,value:t.dictValue}})})),1)],1),t._v(" "),s("el-form-item",{attrs:{label:"考核区段说明",prop:"sectionRemark"}},[s("el-input",{attrs:{type:"textarea",placeholder:"请输入内容",disabled:!t.isEdit},model:{value:t.form.sectionRemark,callback:function(e){t.$set(t.form,"sectionRemark",e)},expression:"form.sectionRemark"}})],1)],1),t._v(" "),t.isEdit?s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{attrs:{plan:"",icon:"el-icon-close"},on:{click:t.cancel}},[t._v("取消")]),t._v(" "),s("el-button",{attrs:{type:"primary",icon:"el-icon-bank-card"},on:{click:t.submitForm}},[t._v("保存")])],1):t._e()],1)],1)},i=[],a=s("6553"),o={props:{visible:{type:Boolean,default:!1},isEdit:{type:Boolean,default:!0},title:{type:String,default:""},sectionId:{type:String,default:"0"}},data:function(){return{show:!1,sectionTypeOptions:[],isOpenOptions:[],statusOptions:[],form:{isOpen:"Y",status:"1"},rules:{sectionName:[{required:!0,message:"区段名称不能为空",trigger:"blur"},{max:40,message:"区段名称最多输入40个字符",trigger:"blur"}],sectionType:[{required:!0,message:"区段类型不能为空",trigger:"blur"}],status:[{required:!0,message:"状态不能为空",trigger:"blur"}]}}},created:function(){var t=this;this.getDicts("pfmc_presettings_section_type").then((function(e){t.sectionTypeOptions=e.data})),this.getDicts("sys_yes_no").then((function(e){t.isOpenOptions=e.data})),this.getDicts("sys_normal_status").then((function(e){t.statusOptions=e.data}))},methods:{open:function(){var t=this;"0"!==this.sectionId&&Object(a["getPfmcSection"])(this.sectionId).then((function(e){"0"===e.code?t.form=e.data:t.msgError(e.msg)})).catch((function(e){t.msgError(e)}))},statusFormat:function(t,e){return this.selectDictLabel(this.statusOptions,t.status)},cancel:function(){this.show=!1,this.reset()},reset:function(){this.resetForm("sectionForm")},submitForm:function(){var t=this;this.$refs["sectionForm"].validate((function(e){e&&("0"!==t.sectionId?Object(a["updatePfmcSection"])(t.form).then((function(e){"0"===e.code?(t.msgSuccess("修改成功"),t.cancel()):t.msgError(e.msg)})):Object(a["addPfmcSection"])(t.form).then((function(e){"0"===e.code?(t.msgSuccess("新增成功"),t.cancel()):t.msgError(e.msg)})))}))}},watch:{show:function(){0==this.show&&this.$emit("update:visible",!1)},visible:function(){this.show=this.visible}}},c=o,r=s("2877"),l=Object(r["a"])(c,n,i,!1,null,null,null);e["default"]=l.exports},6553:function(t,e,s){"use strict";s.r(e),s.d(e,"listPfmcSection",(function(){return a})),s.d(e,"getPfmcSection",(function(){return o})),s.d(e,"addPfmcSection",(function(){return c})),s.d(e,"updatePfmcSection",(function(){return r}));var n=s("b775"),i=s("b854");function a(t){return Object(n["a"])({url:"".concat(i["pfmcSettings"],"/pfmcsection/list"),method:"get",params:t})}function o(t){return Object(n["a"])({url:"".concat(i["pfmcSettings"],"/pfmcsection/").concat(t),method:"get"})}function c(t){return Object(n["a"])({url:"".concat(i["pfmcSettings"],"/pfmcsection/add"),method:"post",data:t})}function r(t){return Object(n["a"])({url:"".concat(i["pfmcSettings"],"/pfmcsection/update"),method:"put",data:t})}},7514:function(t,e,s){"use strict";var n=s("5ca1"),i=s("0a49")(5),a="find",o=!0;a in[]&&Array(1)[a]((function(){o=!1})),n(n.P+n.F*o,"Array",{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),s("9c6c")(a)},b854:function(t,e,s){"use strict";s.r(e),s.d(e,"pfmcSettings",(function(){return n})),s.d(e,"pfmcAsist",(function(){return i})),s.d(e,"pfmcExecution",(function(){return a})),s.d(e,"pfmcEval",(function(){return o}));var n="pfmc-settings",i="pfmc-asist",a="pfmc-execution",o="pfmc-eval"}}]);