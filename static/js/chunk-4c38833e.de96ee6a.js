(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4c38833e"],{4490:function(e,t,o){},b0f7:function(e,t,o){"use strict";o.r(t);var i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"button-container"},[o("el-button",{attrs:{size:e.size,type:e.type,plain:e.plain,round:e.round,circle:e.circle,disabled:e.disabled,icon:e.icon},on:{click:function(t){e.showDialog=!0}}},[e._v(e._s(e.btnText))]),e._v(" "),o("el-dialog",{ref:"dialog",attrs:{visible:e.showDialog,title:e.title,"close-on-click-modal":!1,"append-to-body":"",width:"700px"},on:{"update:visible":function(t){e.showDialog=t}}},[o("el-form",{ref:"indicatorForm",attrs:{model:e.form,"label-width":"80px"}},[o("el-form-item",{attrs:{label:"组织"}},[o("tree-select",{ref:"tree",attrs:{options:e.deptOptions,multiple:e.multiple,placeholder:"请选择...","default-expand-level":1,"value-format":"object"},model:{value:e.form.org,callback:function(t){e.$set(e.form,"org",t)},expression:"form.org"}})],1)],1),e._v(" "),o("div",{attrs:{slot:"footer"},slot:"footer"},[o("el-button",{attrs:{plain:"",icon:"el-icon-close"},on:{click:e.handleCancel}},[e._v("取消")]),e._v(" "),o("el-button",{attrs:{type:"primary",icon:"el-icon-bank-card"},on:{click:e.handleFinish}},[e._v("确定")])],1)],1)],1)},n=[],l=(o("ac6a"),o("542c"),o("2879")),r={name:"SelectOrg",components:{TreeSelect:function(){return o.e("chunk-5c5c1f08").then(o.t.bind(null,"7026",7))}},props:{size:{type:String,required:!1},type:{type:String,default:"primary"},plain:{type:Boolean,default:!1},round:{type:Boolean,default:!1},circle:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},icon:{type:String,default:"el-icon-search"},btnText:{type:String,default:""},title:{type:String,default:"选择组织"},multiple:{type:Boolean,default:!1}},data:function(){return{deptOptions:void 0,showDialog:!1,form:{org:void 0}}},created:function(){this.getTreeselect()},methods:{handleCancel:function(){this.form.org=void 0,this.showDialog=!1},handleFinish:function(){if(this.multiple){if(!this.form.org||!this.form.org.length||0===this.form.org.length)return void this.msgInfo("请选择组织");var e=[];this.form.org.forEach((function(t){e.push({orgId:t.orgId,orgName:t.label})})),this.$emit("select-finish",e),this.showDialog=!1}else{if(!this.form.org)return void this.msgInfo("请选择组织");var t={orgId:this.form.org.orgId,orgName:this.form.org.label};this.$emit("select-finish",t),this.showDialog=!1}},getTreeselect:function(){var e=this;Object(l["treeselect"])().then((function(t){e.deptOptions=t.data}))}},computed:{},watch:{}},a=r,s=(o("d0e9"),o("2877")),c=Object(s["a"])(a,i,n,!1,null,"32fd3b3b",null);t["default"]=c.exports},d0e9:function(e,t,o){"use strict";var i=o("4490"),n=o.n(i);n.a}}]);