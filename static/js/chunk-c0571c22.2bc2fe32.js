(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c0571c22"],{"33c1":function(e,t,o){},7965:function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"pfmc-import-button-container"},[o("el-button",{attrs:{size:e.size,type:e.type,plain:e.plain,round:e.round,circle:e.circle,disabled:e.disabled,icon:e.icon},on:{click:e.btnClick}},[e._v(e._s(e.btnText))]),e._v(" "),o("el-dialog",{attrs:{visible:e.showDialog,title:e.title,"close-on-click-modal":!1,"append-to-body":"",width:"500px"},on:{"update:visible":function(t){e.showDialog=t},open:e.openDialog,close:e.handleCancel}},[o("el-form",{ref:"form",attrs:{rules:e.rules,model:e.form,"label-width":"100px"}},[o("el-form-item",{attrs:{label:"所属新组织",prop:"orgId"}},[o("tree-select",{attrs:{clearable:!1,options:e.deptOptions,placeholder:"选择部门","default-expand-level":1},on:{input:e.validateForm,select:e.orgSelectChange},model:{value:e.form.orgId,callback:function(t){e.$set(e.form,"orgId",t)},expression:"form.orgId"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"待调整人员",prop:"emps"}},e._l(e.form.emps,(function(t){return o("el-tag",{key:t.empId,staticStyle:{"margin-right":"10px"},attrs:{closable:""},on:{close:function(o){return e.handleRemoveTag(t)}}},[e._v(e._s(t.empName))])})),1)],1),e._v(" "),o("div",{attrs:{slot:"footer"},slot:"footer"},[o("el-button",{attrs:{plain:"",icon:"el-icon-close"},on:{click:e.handleCancel}},[e._v("取消")]),e._v(" "),o("el-button",{attrs:{type:"primary",icon:"el-icon-bank-card"},on:{click:e.sureBtnClick}},[e._v("保存")])],1)],1)],1)},r=[],i=o("7026"),s=o.n(i),a=(o("542c"),o("2879")),l={name:"TransferEmp",components:{TreeSelect:s.a},props:{size:{type:String,required:!1},type:{type:String,default:"primary"},plain:{type:Boolean,default:!0},round:{type:Boolean,default:!1},circle:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},icon:{type:String,default:"el-icon-edit"},btnText:{type:String,default:"调动人员"},title:{type:String,default:"调动人员"},emps:{type:Array,default:function(){return[]}}},data:function(){return{loading:!1,total:0,showDialog:!1,deptOptions:void 0,form:{orgId:void 0,emps:[]},rules:{orgId:[{required:!0,message:"所属新组织为空",trigger:"input"}],emps:[{type:"array",required:!0,message:"待调整人员为空",trigger:"change"}]},currOrgName:void 0}},created:function(){},mounted:function(){},computed:{},methods:{openDialog:function(){this.getTreeselect()},sureBtnClick:function(){var e=this;this.$refs.form.validate((function(t){if(t){var o=e.form.emps.map((function(e){return e.empName})).join("、");e.$confirm("您确定要调整"+o+'的部门为"'+e.currOrgName+'"吗',"警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var t=e.form.emps.map((function(e){return e.empId})),o={orgId:e.form.orgId,empIds:t};Object(a["batchTransferEmp"])(o).then((function(t){"0"===t.code?(e.msgSuccess("调动人员成功"),e.$refs.form.resetFields(),e.$emit("transfer-finished"),e.showDialog=!1):e.msgError(t.msg)}))})).catch((function(){}))}}))},orgSelectChange:function(e){if(this.form.emps.some((function(t){return t.orgId===e.orgId})))return this.$nextTick((function(){this.form.orgId=void 0})),void this.msgError("调入部门和原部门不能相同");this.currOrgName=e.label},getTreeselect:function(){var e=this;Object(a["treeselect"])().then((function(t){e.deptOptions=t.data}))},btnClick:function(){0!==this.emps.length?(this.form.emps=JSON.parse(JSON.stringify(this.emps)),this.showDialog=!0):this.msgError("请选择员工")},handleRemoveTag:function(e){this.form.emps=this.form.emps.filter((function(t){return t.empId!==e.empId}))},handleFinish:function(){this.$emit("select-finish",this.resultList),this.showDialog=!1},handleCancel:function(){this.resetForm(),this.showDialog=!1},validateForm:function(){this.$refs.form.validate((function(e){}))},resetForm:function(){this.form={orgId:void 0,emps:[]},this.$refs.form.clearValidate()}},watch:{}},c=l,d=(o("8aec"),o("2877")),u=Object(d["a"])(c,n,r,!1,null,"9e44bd02",null);t["default"]=u.exports},"8aec":function(e,t,o){"use strict";var n=o("33c1"),r=o.n(n);r.a}}]);