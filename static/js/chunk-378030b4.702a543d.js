(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-378030b4","chunk-2d21062b","chunk-6b472776","chunk-2d21062b"],{"29f6":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ihr-wrapper"},[a("div",{staticClass:"top-query"},[a("el-form",{ref:"searchForm",attrs:{"label-width":"110px"}},[a("el-row",[a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"区段字段名称"}},[a("el-input",{attrs:{clearable:"",placeholder:"请输入..."},model:{value:t.queryParams.fieldName,callback:function(e){t.$set(t.queryParams,"fieldName",e)},expression:"queryParams.fieldName"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"状态"}},[a("el-select",{attrs:{placeholder:"全部",clearable:""},model:{value:t.queryParams.status,callback:function(e){t.$set(t.queryParams,"status",e)},expression:"queryParams.status"}},t._l(t.statusOptions,(function(t){return a("el-option",{key:t.dictValue,attrs:{label:t.dictLabel,value:t.dictValue}})})),1)],1)],1)],1)],1),t._v(" "),a("div",[a("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.handleQuery}},[t._v("查询")]),t._v(" "),a("el-button",{attrs:{type:"primary",plain:"",icon:"el-icon-refresh-left"},on:{click:t.handleReset}},[t._v("重置")])],1)],1),t._v(" "),a("div",{staticClass:"main-table"},[a("div",{staticClass:"button-flex"},[a("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:t.handleAdd}},[t._v("新增")])],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{data:t.fieldList,"row-key":"fieledId"}},[a("el-table-column",{attrs:{label:"序号",type:"index"}}),t._v(" "),a("el-table-column",{attrs:{label:"区段字段名称",prop:"fieldName"}}),t._v(" "),a("el-table-column",{attrs:{label:"字段说明",prop:"fieldDesc"}}),t._v(" "),a("el-table-column",{attrs:{label:"字段类型",prop:"fieldType",formatter:t.fieldTypeFormat}}),t._v(" "),a("el-table-column",{attrs:{label:"状态",prop:"status"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-switch",{attrs:{"active-value":"1","inactive-value":"0"},on:{change:function(a){return t.handleUpdateStatus(e.row)}},model:{value:e.row.status,callback:function(a){t.$set(e.row,"status",a)},expression:"scope.row.status"}})]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作",fixed:"right",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text"},on:{click:function(a){return t.handleView(e.row)}}},[t._v("查看")]),t._v(" "),0===e.row.refCount?a("el-button",{attrs:{type:"text"},on:{click:function(a){return t.handleUpdate(e.row)}}},[t._v("编辑")]):t._e(),t._v(" "),0===e.row.refCount?a("el-popconfirm",{staticClass:"el-button-confirm",attrs:{title:"确认删除？"},on:{onConfirm:function(a){return t.handleDel(e.row)}}},[a("el-button",{attrs:{slot:"reference",type:"text"},slot:"reference"},[t._v("删除")])],1):t._e()]}}])})],1),t._v(" "),a("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],staticClass:"pagination-wrap",attrs:{total:t.total,page:t.queryParams.pageNum,limit:t.queryParams.pageSize},on:{"update:page":function(e){return t.$set(t.queryParams,"pageNum",e)},"update:limit":function(e){return t.$set(t.queryParams,"pageSize",e)},pagination:t.getList}})],1),t._v(" "),a("update-field-dialog",{attrs:{visible:t.updateDialogShow,title:t.title,"field-id":t.fieldId,"is-edit":t.isEdit},on:{"update:visible":function(e){t.updateDialogShow=e}}})],1)},n=[],l=(a("7514"),a("6338")),s={components:{UpdateFieldDialog:function(){return a.e("chunk-4b2bb356").then(a.bind(null,"3e65"))}},data:function(){return{updateDialogShow:!1,title:"",fieldId:"0",isEdit:!0,total:0,loading:!1,rules:{},fieldList:[],statusOptions:[],fieldTypeOptions:[],queryParams:{pageNum:1,pageSize:10,fieldName:void 0,status:"1"}}},created:function(){var t=this;this.getList(),this.getDicts("sys_normal_status").then((function(e){t.statusOptions=e.data})),this.getDicts("pfmc_presettings_field_type").then((function(e){t.fieldTypeOptions=e.data}))},methods:{getList:function(){var t=this;this.loading=!0,Object(l["listPfmcField"])(this.queryParams).then((function(e){"0"===e.code?(t.fieldList=e.data.list,t.total=e.data.total,t.loading=!1):t.msgError("查询区段字段定义列表失败")})).catch((function(e){t.msgError(erro)}))},handleQuery:function(){this.queryParams.pageNum=1,this.getList()},handleReset:function(){this.queryParams={pageNum:1,pageSize:10,fieldName:void 0,status:"1"}},handleAdd:function(){this.fieldId="0",this.isEdit=!0,this.title="增加区段字段定义",this.updateDialogShow=!0},handleView:function(t){this.fieldId=t.fieldId,this.isEdit=!1,this.title="查看区段字段定义",this.updateDialogShow=!0},handleUpdate:function(t){this.fieldId=t.fieldId,this.isEdit=!0,this.title="修改区段字段定义",this.updateDialogShow=!0},handleUpdateStatus:function(t){var e=this;this.$confirm('您确定要将名称为"'+t.fieldName+'"的区段字段设置为'+("1"===t.status?"有效":"失效")+"?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){e.loading=!0;var a=t.fieldId,i=t.status,n=t.isDeleted,s={fieldId:a,status:i,isDeleted:n};Object(l["updateField"])(s).then((function(t){e.loading=!1,"0"===t.code?(e.msgSuccess("修改成功"),e.getList()):e.msgError(t.msg)})).catch((function(t){e.loading=!1,e.msgError(t)}))})).catch((function(){t.status="1"===t.status?"0":"1"}))},handleDel:function(t){var e=this;this.loading=!0;var a=t.fieldId,i={fieldId:a,isDeleted:!0};Object(l["updateField"])(i).then((function(t){e.loading=!1,"0"===t.code?(e.msgSuccess("删除成功"),e.getList()):e.msgError(t.msg)})).catch((function(t){e.loading=!1,e.msgError(t)}))},fieldTypeFormat:function(t,e,a,i){var n=this.fieldTypeOptions.find((function(t){return t.dictValue==a}));return n?n.dictLabel:""}},watch:{updateDialogShow:function(){0==this.updateDialogShow&&this.getList()}}},r=s,o=a("2877"),u=Object(o["a"])(r,i,n,!1,null,null,null);e["default"]=u.exports},6338:function(t,e,a){"use strict";a.r(e),a.d(e,"listPfmcField",(function(){return l})),a.d(e,"updateField",(function(){return s})),a.d(e,"getField",(function(){return r})),a.d(e,"addField",(function(){return o})),a.d(e,"updateFieldDetail",(function(){return u}));var i=a("b775"),n=a("b854");function l(t){return Object(i["a"])({url:"".concat(n["pfmcSettings"],"/pfmcfield/list"),method:"get",params:t})}function s(t){return Object(i["a"])({url:"".concat(n["pfmcSettings"],"/pfmcfield/update"),method:"put",data:t})}function r(t){return Object(i["a"])({url:"".concat(n["pfmcSettings"],"/pfmcfield/").concat(t),method:"get"})}function o(t){return Object(i["a"])({url:"".concat(n["pfmcSettings"],"/pfmcfield/add"),method:"post",data:t})}function u(t){return Object(i["a"])({url:"".concat(n["pfmcSettings"],"/pfmcfield/updatedetail"),method:"put",data:t})}},7514:function(t,e,a){"use strict";var i=a("5ca1"),n=a("0a49")(5),l="find",s=!0;l in[]&&Array(1)[l]((function(){s=!1})),i(i.P+i.F*s,"Array",{find:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),a("9c6c")(l)},b854:function(t,e,a){"use strict";a.r(e),a.d(e,"pfmcSettings",(function(){return i})),a.d(e,"pfmcAsist",(function(){return n})),a.d(e,"pfmcExecution",(function(){return l})),a.d(e,"pfmcEval",(function(){return s}));var i="pfmc-settings",n="pfmc-asist",l="pfmc-execution",s="pfmc-eval"}}]);