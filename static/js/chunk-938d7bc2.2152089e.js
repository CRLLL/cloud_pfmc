(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-938d7bc2"],{"26a4":function(e,t,s){},a183:function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"app-container"},[s("el-dialog",{attrs:{title:e.title,visible:e.show,"close-on-click-modal":!1},on:{open:e.open,close:e.cancel}},[s("el-card",[s("el-row",[s("el-col",{attrs:{span:8}},[s("div",[e._v("员工名称："+e._s(e.userInfo.userName))])]),e._v(" "),s("el-col",{attrs:{span:8}},[s("div",[e._v("员工昵称："+e._s(e.userInfo.nickName))])]),e._v(" "),s("el-col",{attrs:{span:8}},[s("div",[e._v("部门："+e._s(e.userInfo.dept.deptName))])])],1)],1),e._v(" "),s("el-card",[s("div",{staticStyle:{float:"right"}},[s("span",[s("update-user-role",{attrs:{"user-id":e.queryParams.userId},on:{"save-role-success":e.getList}})],1),e._v(" "),s("span",[s("el-button",{attrs:{type:"danger",plain:"",icon:"el-icon-remove",size:"mini",disabled:0==this.selectedRows.length},on:{click:function(t){return e.handleDelRole()}}},[e._v("删除")])],1)]),e._v(" "),s("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.userRoleList},on:{"selection-change":e.selsChange}},[s("el-table-column",{attrs:{type:"selection"}}),e._v(" "),s("el-table-column",{attrs:{label:"角色名称",prop:"roleName"}}),e._v(" "),s("el-table-column",{attrs:{label:"部门",prop:"deptName"}}),e._v(" "),s("el-table-column",{attrs:{label:"绩效部门",prop:"pfmcDeptName"}})],1),e._v(" "),s("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.queryParams.pageNum,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"pageNum",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getList}})],1)],1)],1)},a=[],o=(s("ac6a"),s("c0c7")),i={name:"AssignRole",components:{UpdateUserRole:function(){return Promise.all([s.e("chunk-5c5c1f08"),s.e("chunk-35e6bd7e")]).then(s.bind(null,"dd3b"))}},props:{visible:{type:Boolean,default:!1},userId:{type:String,default:""}},data:function(){return{show:!1,loading:!1,total:0,title:"用户角色分配",userInfo:{userName:"",nickName:"",dept:{}},userRoleList:[],selectedRows:[],queryParams:{pageNum:1,pageSize:10,userId:void 0}}},created:function(){},mounted:function(){},computed:{},methods:{open:function(){this.queryParams.userId=this.userId,this.getUserInfo(),this.getList()},cancel:function(){this.show=!1},getList:function(){var e=this;this.loading=!0,Object(o["i"])(this.queryParams).then((function(t){"0"===t.code?(e.userRoleList=t.data.list,e.total=t.data.total,e.loading=!1):e.msgError("查询用户角色列表失败")})).catch((function(t){e.msgError(erro)}))},getUserInfo:function(){var e=this;Object(o["f"])(this.userId).then((function(t){"0"===t.code?e.userInfo=t.data.user:e.msgError("查询用户角色列表失败")})).catch((function(t){e.msgError(erro)}))},delUserRoleInfo:function(){var e=this,t={};this.selectedRows.forEach((function(e){t[e.userRoleId]=""})),Object(o["b"])(t).then((function(t){"0"===t.code?(e.msgSuccess("删除成功"),e.getList()):e.msgError("删除用户角色失败")})).catch((function(t){e.msgError(erro)}))},handleDelRole:function(){var e=this;this.$confirm("确认删除？").then((function(){e.delUserRoleInfo()}))},selsChange:function(e){this.selectedRows=e}},watch:{show:function(){0==this.show&&this.$emit("update:visible",!1)},visible:function(){this.show=this.visible}}},r=i,l=(s("b7bc"),s("2877")),c=Object(l["a"])(r,n,a,!1,null,"49efde9c",null);t["default"]=c.exports},b7bc:function(e,t,s){"use strict";var n=s("26a4"),a=s.n(n);a.a}}]);