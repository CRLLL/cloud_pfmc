(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7250f294"],{"51a2":function(e,t,a){"use strict";a.r(t),a.d(t,"listProgram",(function(){return l})),a.d(t,"getProgram",(function(){return o})),a.d(t,"updateProgram",(function(){return n})),a.d(t,"updateProgramStatus",(function(){return r})),a.d(t,"addProgram",(function(){return c})),a.d(t,"delProgram",(function(){return d}));var s=a("b775"),i=a("b854");function l(e){return Object(s["a"])({url:"".concat(i["pfmcSettings"],"/pfmcProgram/list"),method:"get",params:e})}function o(e){return Object(s["a"])({url:"".concat(i["pfmcSettings"],"/pfmcProgram/")+e,method:"get"})}function n(e){return Object(s["a"])({url:"".concat(i["pfmcSettings"],"/pfmcProgram/update"),method:"put",data:e})}function r(e){return Object(s["a"])({url:"".concat(i["pfmcSettings"],"/pfmcProgram/updateStatus"),method:"put",data:e})}function c(e){return Object(s["a"])({url:"".concat(i["pfmcSettings"],"/pfmcProgram/add"),method:"post",data:e})}function d(e){return Object(s["a"])({url:"".concat(i["pfmcSettings"],"/pfmcProgram/del"),method:"put",data:e})}},"62ff":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-dialog",{attrs:{title:e.title,visible:e.show,width:"800px"},on:{"update:visible":function(t){e.show=t},close:e.cancelBatch}},[a("el-form",{ref:"batchForm",attrs:{model:e.form,rules:e.rules,"label-width":"130px"}},[a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"年份",prop:"cycleYear"}},[a("el-date-picker",{staticStyle:{width:"200px"},attrs:{clearable:"",format:"yyyy","value-format":"yyyy",type:"year",placeholder:"请选择年份","picker-options":e.yearOptions},model:{value:e.form.cycleYear,callback:function(t){e.$set(e.form,"cycleYear",t)},expression:"form.cycleYear"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"考核类型",prop:"cycleType"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.cycleType,callback:function(t){e.$set(e.form,"cycleType",t)},expression:"form.cycleType"}},e._l(e.cycleTypeOptions,(function(e){return a("el-option",{key:e.dictValue,attrs:{label:e.dictLabel,value:e.dictValue}})})),1)],1)],1)],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{plain:"",icon:"el-icon-close"},on:{click:e.cancelBatch}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary",icon:"el-icon-bank-card"},on:{click:e.submitBatchForm}},[e._v("确定")])],1)],1)],1)},i=[],l=(a("6b54"),a("304f")),o={props:{visible:{type:Boolean,default:!1},title:{type:String,default:"批量生成考核周期"},cycleId:{type:String,default:"0"}},data:function(){var e=this;return{show:!1,cycleTypeOptions:[],yearOptions:{onPick:function(t){var a=t.maxDate,s=t.minDate;e.choiceDate=s.getTime(),a&&(e.choiceDate="")},disabledDate:function(t){if(null!=e.choiceDate){var a=62208e6;return t.getTime()<Date.now()-(new Date).getFullYear()||t.getTime()>Date.now()-(new Date).getFullYear()+a}}},choiceDate:"",form:{cycleYear:(new Date).getFullYear().toString()},rules:{cycleYear:[{required:!0,message:"年份不能为空",trigger:"blur"}],cycleType:[{required:!0,message:"考核类型不能为空",trigger:"blur"}]}}},created:function(){var e=this;this.getDicts("pfmc_basicsettings_cycle_type").then((function(t){e.cycleTypeOptions=t.data}))},methods:{submitBatchForm:function(){var e=this;this.$refs["batchForm"].validate((function(t){t&&Object(l["batchAddPfmcCycle"])(e.form).then((function(t){"0"===t.code?(e.msgSuccess("批量新增成功"),e.batchOpen=!1,e.cancelBatch()):e.msgError(t.msg)}))}))},cancelBatch:function(){this.show=!1,this.resetBatch()},resetBatch:function(){this.resetForm("batchForm")}},watch:{show:function(){0==this.show&&this.$emit("update:visible",!1)},visible:function(){this.show=this.visible}}},n=o,r=a("2877"),c=Object(r["a"])(n,s,i,!1,null,null,null);t["default"]=c.exports},bebf:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"ihr-wrapper"},[a("el-tabs",{attrs:{type:"border-card"},on:{"tab-click":e.tabClick}},[a("el-tab-pane",{attrs:{label:"模板管理"}},[a("div",{staticClass:"top-query"},[a("el-form",{ref:"queryForm",attrs:{model:e.queryParams,"label-width":"80px"}},[a("el-row",[a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"模板名称",prop:"modeName",rules:{required:!0}}},[a("el-input",{attrs:{clearable:"",placeholder:"请输入..."},model:{value:e.queryParams.modeName,callback:function(t){e.$set(e.queryParams,"modeName",t)},expression:"queryParams.modeName"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"考核类型",prop:"evalType"}},[a("el-select",{attrs:{placeholder:"全部",clearable:""},model:{value:e.queryParams.evalType,callback:function(t){e.$set(e.queryParams,"evalType",t)},expression:"queryParams.evalType"}},e._l(e.evalTypeOptions,(function(e){return a("el-option",{key:e.dictValue,attrs:{label:e.dictLabel,value:e.dictValue}})})),1)],1)],1),e._v(" "),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"状态",prop:"status"}},[a("el-select",{attrs:{placeholder:"全部",clearable:""},model:{value:e.queryParams.status,callback:function(t){e.$set(e.queryParams,"status",t)},expression:"queryParams.status"}},e._l(e.statusOptions,(function(e){return a("el-option",{key:e.dictValue,attrs:{label:e.dictLabel,value:e.dictValue}})})),1)],1)],1)],1)],1),e._v(" "),a("div",[a("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleQuery}},[e._v("查询")]),e._v(" "),a("el-button",{attrs:{type:"primary",plain:"",icon:"el-icon-refresh-left"},on:{click:e.handleReset}},[e._v("重置")])],1)],1),e._v(" "),a("div",{staticClass:"main-table"},[a("div",{staticClass:"button-flex"},[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:mode:add"],expression:"['system:mode:add']"}],attrs:{type:"primary",icon:"el-icon-plus"},on:{click:e.handleAdd}},[e._v("新增")]),e._v(" "),a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:mode:add"],expression:"['system:mode:add']"}],attrs:{type:"primary",plain:"",icon:"el-icon-plus"},on:{click:e.handleBatchAdd}},[e._v("复制")]),e._v(" "),a("el-button",{attrs:{type:"danger",plain:"",icon:"el-icon-delete",disabled:0==this.selectedRows.length},on:{click:e.handleDel}},[e._v("删除")])],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.modeList,"row-key":"modeId"},on:{"selection-change":e.selectedChange}},[a("el-table-column",{attrs:{type:"selection"}}),e._v(" "),a("el-table-column",{attrs:{label:"序号",type:"index"}}),e._v(" "),a("el-table-column",{attrs:{label:"模板名称",prop:"modeName"}}),e._v(" "),a("el-table-column",{attrs:{label:"考核类型",prop:"evalType",formatter:e.evalTypeFormat,width:"150"}}),e._v(" "),a("el-table-column",{attrs:{label:"考核方案",prop:"programName",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{label:"状态",prop:"status"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-switch",{attrs:{"active-value":"1","inactive-value":"0"},on:{change:function(a){return e.handleUpdateStatus(t.row)}},model:{value:t.row.status,callback:function(a){e.$set(t.row,"status",a)},expression:"scope.row.status"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"210",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticStyle:{"min-height":"36px"}},[a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.handleView(t.row)}}},[e._v("查看")]),e._v(" "),a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.handleUpdate(t.row)}}},[e._v("编辑")]),e._v(" "),a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.manageItems(t.row)}}},[e._v("指标管理")]),e._v(" "),a("el-popconfirm",{staticClass:"el-button-confirm",attrs:{title:"您确定要删除吗？"},on:{onConfirm:function(a){return e.handleDelete(t.row)}}},[a("el-button",{attrs:{slot:"reference",type:"text"},slot:"reference"},[e._v("删除")])],1)],1)]}}])})],1),e._v(" "),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],staticClass:"pagination-wrap",attrs:{total:e.total,page:e.queryParams.pageNum,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"pageNum",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getList}})],1)]),e._v(" "),a("el-tab-pane",{attrs:{label:"模板分配"}},[a("div",{staticClass:"top-query"},[a("el-form",{ref:"queryAssForm",attrs:{model:e.queryAssParams,"label-width":"80px"}},[a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"模板名称",prop:"modeName"}},[a("el-input",{attrs:{clearable:"",placeholder:"请输入..."},model:{value:e.queryAssParams.modeName,callback:function(t){e.$set(e.queryAssParams,"modeName",t)},expression:"queryAssParams.modeName"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"考核类型",prop:"evalType"}},[a("el-select",{attrs:{placeholder:"全部",clearable:""},model:{value:e.queryAssParams.evalType,callback:function(t){e.$set(e.queryAssParams,"evalType",t)},expression:"queryAssParams.evalType"}},e._l(e.evalTypeOptions,(function(e){return a("el-option",{key:e.dictValue,attrs:{label:e.dictLabel,value:e.dictValue}})})),1)],1)],1)],1)],1),e._v(" "),a("div",[a("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleQuery}},[e._v("查询")]),e._v(" "),a("el-button",{attrs:{type:"primary",plain:"",icon:"el-icon-refresh-left"},on:{click:e.handleReset}},[e._v("重置")])],1)],1),e._v(" "),a("div",{staticClass:"main-table"},[a("div",{staticClass:"button-flex"},[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:mode:add"],expression:"['system:mode:add']"}],attrs:{type:"primary",icon:"el-icon-plus"},on:{click:e.handleAddAss}},[e._v("新增分配")]),e._v(" "),a("el-button",{attrs:{type:"danger",plain:"",icon:"el-icon-delete",disabled:0==this.selectedRows.length},on:{click:e.handleDelAss}},[e._v("删除")])],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.modeAssList,"row-key":"assigmentId"},on:{"selection-change":e.selectedChange}},[a("el-table-column",{attrs:{type:"selection"}}),e._v(" "),a("el-table-column",{attrs:{label:"序号",type:"index"}}),e._v(" "),a("el-table-column",{attrs:{label:"模板名称",prop:"modeName"}}),e._v(" "),a("el-table-column",{attrs:{label:"考核类型",prop:"evalType",formatter:e.evalTypeFormat}}),e._v(" "),a("el-table-column",{attrs:{label:"考核周期",prop:"cycleName"}}),e._v(" "),a("el-table-column",{attrs:{label:"分配对象类型",prop:"assObjectType",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{label:"分配对象名称",prop:"assObjectName",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"210",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticStyle:{"min-height":"36px"}},[a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.handleViewAss(t.row)}}},[e._v("查看")]),e._v(" "),a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.handleUpdateAss(t.row)}}},[e._v("编辑")]),e._v(" "),a("el-popconfirm",{staticClass:"el-button-confirm",attrs:{title:"您确定要删除吗？"},on:{onConfirm:function(a){return e.handleDeleteAss(t.row)}}},[a("el-button",{attrs:{slot:"reference",type:"text"},slot:"reference"},[e._v("删除")])],1)],1)]}}])})],1),e._v(" "),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],staticClass:"pagination-wrap",attrs:{total:e.total,page:e.queryParams.pageNum,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"pageNum",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getAssigmentList}})],1)])],1),e._v(" "),a("view-edit-dialog",{attrs:{visible:e.open,title:e.title,"mode-id":e.modeId,"is-edit":e.isEdit},on:{"update:visible":function(t){e.open=t}}}),e._v(" "),a("copy-dialog",{attrs:{visible:e.copyOpen},on:{"update:visible":function(t){e.copyOpen=t}}}),e._v(" "),a("items-manage-dialog",{attrs:{visible:e.itemOpen,title:e.title,"mode-id":e.modeId},on:{"update:visible":function(t){e.itemOpen=t}}}),e._v(" "),a("ass-edit-dialog",{attrs:{visible:e.openAss,title:e.title,"assigment-id":e.assigmentId,"is-edit-ass":e.isEditAss},on:{"update:visible":function(t){e.openAss=t}}})],1)},i=[],l=(a("ac6a"),a("d0ef")),o=a("62ff"),n=a("0041"),r=a("ac91"),c=a("aa5d"),d={components:{viewEditDialog:l["default"],copyDialog:o["default"],itemsManageDialog:n["default"],assEditDialog:r["default"]},data:function(){return{loading:!0,total:0,modeList:[],modeAssList:[],title:"",open:!1,openAss:!1,isEdit:!0,isEditAss:!0,copyOpen:!1,itemOpen:!1,statusOptions:[],evalTypeOptions:[],modeId:"0",assigmentId:"0",queryParams:{pageNum:1,pageSize:10,modeName:"",evalType:void 0,status:void 0},queryAssParams:{pageNum:1,pageSize:10,modeName:"",evalType:void 0},selectedRows:[]}},created:function(){var e=this;this.getDicts("pfmc_type").then((function(t){e.evalTypeOptions=t.data})),this.getList()},methods:{tabClick:function(e){1==e.index?this.getAssigmentList():this.getList()},handleReset:function(){this.resetForm("queryForm")},getList:function(){var e=this;this.loading=!0,Object(c["listPfmcItemsMode"])(this.queryParams).then((function(t){e.modeList=t.data.list,e.total=t.data.total,e.loading=!1}))},evalTypeFormat:function(e,t){return this.selectDictLabel(this.evalTypeOptions,e.evalType)},handleQuery:function(){this.queryParams.pageNum=1,this.getList()},handleView:function(e){this.modeId=e.modeId,this.open=!0,this.isEdit=!1,this.title="查看计划指标模板"},handleAdd:function(){this.handleReset(),this.open=!0,this.modeId="0",this.title="添加计划指标模板"},handleUpdate:function(e){this.handleReset(),this.open=!0,this.title="修改计划指标模板",this.modeId=e.modeId},manageItems:function(e){this.handleReset(),this.itemOpen=!0,this.title="预设指标管理",this.modeId=e.modeId},handleDelete:function(e){var t=this;this.loading=!0;var a=e.modeId,s={modeId:a,isDeleted:!0};Object(c["updatePfmcMode"])(this.addDateRange(s)).then((function(e){t.loading=!1,"0"===e.code?(t.msgSuccess("删除成功"),t.getList()):t.msgError(e.msg)})).catch((function(e){t.loading=!1,t.msgError(e)}))},handleBatchAdd:function(){this.handleReset(),this.batchOpen=!0,this.title="批量添加考核周期"},handleDel:function(){var e=this;this.$confirm("确认删除？").then((function(t){e.loading=!0;var a="";e.selectedRows.forEach((function(e){a+=e.modeId+","}));var s={modeIds:a};Object(c["batchDelMode"])(s).then((function(t){e.loading=!1,"0"===t.code?(e.msgSuccess("删除成功"),e.getList()):e.msgError(t.msg)})).catch((function(t){e.loading=!1,e.msgError(t)}))})).catch((function(){}))},selectedChange:function(e){this.selectedRows=e},handleAddAss:function(){this.handleAssReset(),this.openAss=!0,this.assigmentId="0",this.title="新增分配"},handleUpdateAss:function(e){this.handleAssReset(),this.openAss=!0,this.title="修改计划指标模板",this.assigmentId=e.assigmentId},handleDeleteAss:function(e){var t=this;this.loading=!0;var a=e.assigmentId,s={assigmentId:a,isDeleted:!0};Object(c["updatePfmcModeAss"])(this.addDateRange(s)).then((function(e){t.loading=!1,"0"===e.code?(t.msgSuccess("删除成功"),t.getList()):t.msgError(e.msg)})).catch((function(e){t.loading=!1,t.msgError(e)}))},handleDelAss:function(){var e=this;this.$confirm("确认删除？").then((function(t){e.loading=!0;var a="";e.selectedRows.forEach((function(e){a+=e.assigmentId+","}));var s={assigmentIds:a};batchDelModeAss(s).then((function(t){e.loading=!1,"0"===t.code?(e.msgSuccess("删除成功"),e.getList()):e.msgError(t.msg)})).catch((function(t){e.loading=!1,e.msgError(t)}))})).catch((function(){}))},handleAssReset:function(){this.resetForm("queryAssForm")},getAssigmentList:function(){var e=this;this.loading=!0,Object(c["listModeAss"])(this.queryParams).then((function(t){e.modeAssList=t.data.list,e.total=t.data.total,e.loading=!1}))}},watch:{open:function(){0==this.open&&this.getList()},batchOpen:function(){0==this.batchOpen&&this.getList()}}},u=d,m=a("2877"),p=Object(m["a"])(u,s,i,!1,null,null,null);t["default"]=p.exports},d0ef:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-dialog",{attrs:{title:e.title,visible:e.show,width:"800px"},on:{"update:visible":function(t){e.show=t},open:e.open,close:e.cancel}},[a("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"130px"}},[a("el-form-item",{attrs:{label:"模板名称",prop:"modeName"}},[a("el-input",{attrs:{disabled:!e.isEdit,placeholder:"请输入模板名称",maxlength:"20"},model:{value:e.form.modeName,callback:function(t){e.$set(e.form,"modeName",t)},expression:"form.modeName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"考核类型",prop:"evalType"}},[a("el-select",{attrs:{disabled:!e.isEdit,placeholder:"请选择考核类型"},model:{value:e.form.evalType,callback:function(t){e.$set(e.form,"evalType",t)},expression:"form.evalType"}},e._l(e.evalTypeOptions,(function(e){return a("el-option",{key:e.dictValue,attrs:{label:e.dictLabel,value:e.dictValue}})})),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"绩效考核方案",prop:"programId"}},[a("el-select",{staticStyle:{width:"200px"},attrs:{disabled:!e.isEdit,placeholder:"请选择考核方案"},model:{value:e.form.programId,callback:function(t){e.$set(e.form,"programId",t)},expression:"form.programId"}},e._l(e.programList,(function(e){return a("el-option",{key:e.programId,attrs:{label:e.programName,value:e.programId}})})),1)],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{plain:"",icon:"el-icon-close"},on:{click:e.cancel}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary",icon:"el-icon-bank-card"},on:{click:e.submitForm}},[e._v("保存")])],1)],1)],1)},i=[],l=a("aa5d"),o=a("51a2"),n={props:{visible:{type:Boolean,default:!1},isEdit:{type:Boolean,default:!0},title:{type:String,default:""},modeId:{type:String,default:"0"}},data:function(){return{show:!1,programList:[],evalTypeOptions:[],form:{},rules:{modeName:[{required:!0,message:"模板名称",trigger:"blur"}],evalType:[{required:!0,message:"考核类型不能为空",trigger:"blur"}],programId:[{required:!0,message:"考核方案不能为空",trigger:"blur"}]}}},created:function(){var e=this;this.getDicts("pfmc_type").then((function(t){e.evalTypeOptions=t.data})),this.getProgramList()},methods:{open:function(){var e=this;"0"!=this.modeId&&Object(l["getPfmcMode"])(this.modeId).then((function(t){"0"===t.code?e.form=t.data:e.msgError(t.msg)})).catch((function(t){e.msgError(t)}))},cancel:function(){this.show=!1,this.reset()},reset:function(){this.resetForm("form")},submitForm:function(){var e=this;this.$refs["form"].validate((function(t){t&&(0!==e.modeId?Object(l["updatePfmcMode"])(e.form).then((function(t){"0"===t.code?(e.msgSuccess("修改成功"),e.cancel()):e.msgError(t.msg),e.cancel()})):Object(l["addPfmcMode"])(e.form).then((function(t){"0"===t.code?(e.msgSuccess("新增成功"),e.cancel()):e.msgError(t.msg)})))}))},getProgramList:function(){var e=this,t={programName:"",status:"1",pageNum:1,pageSize:0};Object(o["listProgram"])(t).then((function(t){"0"===t.code?e.programList=t.data.list:e.msgError("查询绩效考核方案列表失败")})).catch((function(t){e.msgError(t)}))}},watch:{show:function(){0==this.show&&this.$emit("update:visible",!1)},visible:function(){this.show=this.visible}}},r=n,c=a("2877"),d=Object(c["a"])(r,s,i,!1,null,null,null);t["default"]=d.exports}}]);