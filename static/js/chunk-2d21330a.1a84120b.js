(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21330a"],{ac2d:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-row",{attrs:{gutter:20}},[a("el-col",{staticStyle:{"border-right":"#e6ebf5 solid 1px"},attrs:{span:4,xs:24}},[a("div",{staticClass:"head-container"},[a("el-input",{staticStyle:{"margin-bottom":"20px"},attrs:{placeholder:"请输入模板名称",clearable:"",size:"small","prefix-icon":"el-icon-search"},model:{value:e.templateNameSearch,callback:function(t){e.templateNameSearch=t},expression:"templateNameSearch"}})],1),e._v(" "),a("div",{staticClass:"head-container"},[a("el-tree",{ref:"tree",attrs:{data:e.templateOptions,props:e.templateProps,"expand-on-click-node":!1,"filter-node-method":e.filterNode},on:{"node-click":e.handleNodeClick}})],1)]),e._v(" "),"templateList"==e.showType?a("el-col",{attrs:{span:20,xs:24}},[a("el-form",{attrs:{inline:!0,"label-width":"68px"}},[a("el-form-item",[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:user:add"],expression:"['system:user:add']"}],attrs:{type:"primary",icon:"el-icon-plus",size:"mini"},on:{click:e.handleAdd}},[e._v("新增")])],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.templateList}},[a("el-table-column",{attrs:{label:"序号",align:"center",type:"index"}}),e._v(" "),a("el-table-column",{attrs:{label:"模板名称",align:"center",prop:"templateName"}}),e._v(" "),a("el-table-column",{attrs:{label:"文件后缀名称",align:"center",prop:"codeFileName"}}),e._v(" "),a("el-table-column",{attrs:{label:"文件生成路径",align:"center",prop:"codeFileDir"}}),e._v(" "),a("el-table-column",{attrs:{label:"是否为子模板",align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s("y"===t.row.isSubTemplate?"是":"否"))])]}}],null,!1,115519616)}),e._v(" "),a("el-table-column",{attrs:{label:"更新人",align:"center",prop:"updateBy"}}),e._v(" "),a("el-table-column",{attrs:{label:"更新时间",align:"center",prop:"updateTime",width:"160"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e.dateFormat(t.row.updateTime)))])]}}],null,!1,3967360148)}),e._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center",width:"180","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"修改",placement:"top"}},[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:template:edit"],expression:"['system:template:edit']"}],attrs:{size:"mini",type:"text",icon:"el-icon-edit"},on:{click:function(a){return e.handleUpdate(t.row)}}})],1)]}}],null,!1,966378839)})],1)],1):e._e(),e._v(" "),"templateDetail"==e.showType?a("el-col",{attrs:{span:20,xs:24}},[a("editor",{attrs:{lang:"java",theme:"monokai",width:"100%",height:"420"},on:{init:e.editorInit},model:{value:e.templateContext,callback:function(t){e.templateContext=t},expression:"templateContext"}}),e._v(" "),a("div",{staticStyle:{"margin-top":"30px"}},[a("el-button",{on:{click:e.saveTemplate}},[e._v("保存")]),e._v(" "),a("el-button",{on:{click:e.historyVersion}},[e._v("历史版本")])],1)],1):e._e()],1),e._v(" "),a("el-dialog",{attrs:{title:e.title,visible:e.open,width:"760px"},on:{"update:visible":function(t){e.open=t}}},[a("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"80px"}},[a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"文件路径",prop:"codeFileDir"}},[a("el-input",{attrs:{placeholder:"请输入文件路径"},model:{value:e.form.codeFileDir,callback:function(t){e.$set(e.form,"codeFileDir",t)},expression:"form.codeFileDir"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"文件名称",prop:"codeFileName"}},[a("el-input",{attrs:{placeholder:"请输入文件名称"},model:{value:e.form.codeFileName,callback:function(t){e.$set(e.form,"codeFileName",t)},expression:"form.codeFileName"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"模板名称",prop:"templateName"}},[a("el-input",{attrs:{placeholder:"请输入模板名称",disabled:e.templateNameEdit},model:{value:e.form.templateName,callback:function(t){e.$set(e.form,"templateName",t)},expression:"form.templateName"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"模板类型"}},[a("el-select",{attrs:{placeholder:"请选择",disabled:""},model:{value:e.form.templateType,callback:function(t){e.$set(e.form,"templateType",t)},expression:"form.templateType"}},e._l(e.templateOptions,(function(e){return a("el-option",{key:e.templateType,attrs:{label:e.templateTypeDesc,value:e.templateType}})})),1)],1)],1),e._v(" "),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"模板内容",prop:"templateContext"}},[a("editor",{attrs:{lang:"java",theme:"monokai",width:"100%",height:"360"},on:{init:e.editorInit},model:{value:e.form.templateContext,callback:function(t){e.$set(e.form,"templateContext",t)},expression:"form.templateContext"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"备注"}},[a("el-input",{attrs:{type:"textarea",placeholder:"请输入备注"},model:{value:e.form.remark,callback:function(t){e.$set(e.form,"remark",t)},expression:"form.remark"}})],1)],1)],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确 定")]),e._v(" "),a("el-button",{on:{click:e.cancel}},[e._v("取 消")])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"版本说明",visible:e.remarkDialogViewVisible},on:{"update:visible":function(t){e.remarkDialogViewVisible=t}}},[a("el-form",{ref:"remarkForm",attrs:{model:e.detailForm,rules:e.remarkRules,"label-width":"80px"}},[a("el-row",[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"备注",prop:"remark"}},[a("el-input",{attrs:{type:"textarea",placeholder:"请输入备注"},model:{value:e.detailForm.remark,callback:function(t){e.$set(e.detailForm,"remark",t)},expression:"detailForm.remark"}})],1)],1)],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:e.remarkConfirm}},[e._v("确 定")]),e._v(" "),a("el-button",{on:{click:e.remarkCancel}},[e._v("取 消")])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"历史版本",visible:e.historyDialogTableVisible,width:"760px"},on:{"update:visible":function(t){e.historyDialogTableVisible=t}}},[a("el-table",{attrs:{data:e.historyTemplates}},[a("el-table-column",{attrs:{label:"序号",align:"center",type:"index"}}),e._v(" "),a("el-table-column",{attrs:{label:"模板",width:"150"}},[[e._v(e._s(e.templateName))]],2),e._v(" "),a("el-table-column",{attrs:{label:"创建时间",width:"160"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n          "+e._s(e.formatDate(t.row.createTime))+"\n        ")]}}])}),e._v(" "),a("el-table-column",{attrs:{property:"createBy",label:"创建人"}}),e._v(" "),a("el-table-column",{attrs:{property:"remark",label:"备注",width:"160"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"68"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",title:"查看"},on:{click:function(a){return e.getHistoryTemplateById(t.row.templateHistoryId)}}},[a("i",{staticClass:"el-icon-view"})]),e._v(" "),a("el-button",{attrs:{type:"text",title:"还原"},on:{click:function(a){return e.recoverById(t.row.templateHistoryId)}}},[a("i",{staticClass:"el-icon-refresh-left"})])]}}])})],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"历史查看",visible:e.historyDialogViewVisible},on:{"update:visible":function(t){e.historyDialogViewVisible=t}}},[a("editor",{attrs:{lang:"java",theme:"monokai",width:"100%",height:"400"},on:{init:e.editorInit},model:{value:e.templateHistoryContext,callback:function(t){e.templateHistoryContext=t},expression:"templateHistoryContext"}})],1)],1)},i=[],o=a("b775"),r=a("365c");function n(){return Object(o["a"])({url:"/".concat(r["c"],"/template/categoryQueryAllTemplate"),method:"get"})}function s(e){return Object(o["a"])({url:"/".concat(r["c"],"/template/").concat(e),method:"get"})}function m(e){return Object(o["a"])({url:"/".concat(r["c"],"/template/history/").concat(e),method:"get"})}function c(e,t){return Object(o["a"])({url:"/".concat(r["c"],"/template/history/recover"),method:"put",data:{historyTemplateId:e,templateId:t}})}function p(e){return Object(o["a"])({url:"".concat(r["c"],"/template/queryTemplateByType/").concat(e),method:"get"})}function d(e){return Object(o["a"])({url:"".concat(r["c"],"/template/").concat(e),method:"get"})}function u(e){return Object(o["a"])({url:"".concat(r["c"],"/template"),method:"post",data:e})}function f(e){return Object(o["a"])({url:"".concat(r["c"],"/template"),method:"put",data:e})}function h(e){return Object(o["a"])({url:"".concat(r["c"],"/template/").concat(e),method:"delete"})}var b=a("ed08"),v=a("61f7"),y=a("7c9e"),g=a.n(y),T={name:"index",components:{getTree:n,formatDate:b["c"],editor:g.a},data:function(){return{templateContext:"",templateName:"",templateNameSearch:"",templateId:"",templateOptions:[],templateProps:{children:"templates",label:this.treeLabel},templateHistoryContext:"",historyTemplates:[],remarkDialogViewVisible:!1,historyDialogTableVisible:!1,historyDialogViewVisible:!1,detailForm:{},remarkRules:{remark:[{required:!0,message:"备注不能为空",trigger:"blur"}]},showType:"",loading:!1,templateList:[],selectTemplateType:"0",title:"",open:!1,rules:{codeFileDir:[{required:!0,message:"文件路径不能为空",trigger:"blur"}],codeFileName:[{required:!0,message:"文件名称不能为空",trigger:"blur"}],templateName:[{required:!0,message:"模板名称不能为空",trigger:"blur"}],templateContext:[{required:!0,message:"模板内容不能为空",trigger:"blur"}]},templateNameEdit:!1,form:{}}},watch:{templateNameSearch:function(e){this.$refs.tree.filter(e)}},mounted:function(){},methods:{formatDate:function(e){return Object(b["c"])(e)},getTemplateById:function(e){var t=this;s(e).then((function(e){t.templateContext=e.data.templateContext,t.historyTemplates=e.data.historyTemplates}))},getHistoryTemplateById:function(e){var t=this;this.historyDialogViewVisible=!0,m(e).then((function(e){t.templateHistoryContext=e.data.templateHistoryContext}))},recoverById:function(e){var t=this;c(e,this.templateId).then((function(e){t.$message.success("成功恢复"),t.getTemplateById(t.templateId)}))},treeLabel:function(e){return e.templateTypeDesc||e.templateName},getTree:function(){var e=this;n().then((function(t){e.templateOptions=t.data,e.selectTheFirstLeafNode(t.data)}))},filterNode:function(e,t){return!e||(t.templateTypeDesc&&-1!==t.templateTypeDesc.indexOf(e)||t.templateName&&-1!==t.templateName.indexOf(e))},handleNodeClick:function(e){this.selectTheFirstLeafNode(e)},selectTheFirstLeafNode:function(e){if(Object(v["a"])(e))this.selectTheFirstLeafNode(e[0]);else{if(e.hasOwnProperty("templates")&&e.templates.length>0)return this.showType="templateList",this.selectTemplateType=e.templateType,void this.getTemplateListByType(this.selectTemplateType);this.showType="templateDetail",this.templateName=e.templateName,this.templateId=e.templateId,this.getTemplateById(this.templateId)}},editorInit:function(){a("2099"),a("be9d"),a("3969"),a("0329"),a("14d4"),a("a849")},saveTemplate:function(){this.detailForm={templateId:void 0,templateContext:void 0,remark:void 0},this.resetForm("remarkForm"),this.remarkDialogViewVisible=!0},remarkConfirm:function(){var e=this;this.$refs["remarkForm"].validate((function(t){t&&(e.detailForm.templateId=e.templateId,e.detailForm.templateContext=e.templateContext,f(e.detailForm).then((function(t){"0"===t.code?(e.msgSuccess("保存成功"),e.remarkDialogViewVisible=!1):e.msgError(t.msg)})))}))},remarkCancel:function(){this.remarkDialogViewVisible=!1},historyVersion:function(){var e=this;this.historyDialogTableVisible=!0,s(this.templateId).then((function(t){e.historyTemplates=t.data.historyTemplates}))},getTemplateListByType:function(e){var t=this;p(e).then((function(e){t.templateList=e.data}))},handleAdd:function(){this.reset(),this.form.templateType=this.selectTemplateType,this.templateNameEdit=!1,this.open=!0,this.title="添加模板"},handleUpdate:function(e){var t=this;this.reset(),d(e.templateId).then((function(a){t.form=a.data,t.form.templateId=e.templateId,t.templateNameEdit=!0,t.open=!0,t.title="修改模板"}))},reset:function(){this.form={templateId:void 0,codeFileDir:void 0,codeFileName:void 0,templateName:void 0,templateType:"0",remark:void 0,templateContext:void 0},this.resetForm("form")},handleDelete:function(e){var t=this;this.$confirm('是否确认删除名称为"'+e.userName+'"的数据项?',"警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){return h(e.templateId)})).then((function(){t.getTemplateListByType(t.selectTemplateType),t.msgSuccess("删除成功")})).catch((function(){}))},submitForm:function(){var e=this;this.$refs["form"].validate((function(t){t&&(void 0!=e.form.templateId?f(e.form).then((function(t){"0"===t.code?(e.msgSuccess("修改成功"),e.open=!1,e.getTemplateListByType(e.selectTemplateType)):e.msgError(t.msg)})):u(e.form).then((function(t){"0"===t.code?(e.msgSuccess("新增成功"),e.open=!1,e.getTemplateListByType()):e.msgError(t.msg)})))}))},cancel:function(){this.open=!1}},created:function(){this.getTree()}},k=T,x=a("2877"),_=Object(x["a"])(k,l,i,!1,null,"0f130f42",null);t["default"]=_.exports}}]);