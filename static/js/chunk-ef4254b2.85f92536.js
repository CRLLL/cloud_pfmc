(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ef4254b2","chunk-2d21062b","chunk-6b5aca3b","chunk-2d21062b","chunk-002fe21c"],{"1df1":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-button",{attrs:{type:t.type,size:t.size,plain:t.plain,round:t.round,circle:t.circle,disabled:t.disabled,icon:t.icon},on:{click:function(e){t.showDialog=!0}}},[t._v(t._s(t.btnText))]),t._v(" "),n("el-dialog",{ref:"distributionDefDialog",attrs:{visible:t.showDialog,title:t.title,"close-on-click-modal":!1,"append-to-body":"",width:"1300px"},on:{"update:visible":function(e){t.showDialog=e},opened:t.dialogOpened}},[n("div",[n("div",{staticClass:"pfmc-btn-bar"},[n("batch-distribution-def",{attrs:{levelScoreList:t.levelScoreList,disabled:0===t.selectedList.length},on:{"setting-finished":t.batchDefFinished}})],1),t._v(" "),n("el-table",{ref:"distributionTable",attrs:{data:t.distributionList},on:{"selection-change":t.selsChange}},[n("el-table-column",{attrs:{type:"selection"}}),t._v(" "),n("el-table-column",{attrs:{label:"部门/考核组",prop:"groupName",align:"center",width:"100px",fixed:"left"}}),t._v(" "),n("el-table-column",{attrs:{label:"人数",prop:"empTotal",align:"center",width:"50px",fixed:"left"}}),t._v(" "),n("el-table-column",{attrs:{label:"正态分布",align:"center",width:"1600px"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-row",{attrs:{gutter:10}},t._l(e.row.detail,(function(i){return n("el-col",{key:i.scoreId,attrs:{span:Math.floor(24/e.row.detail.length)}},[n("el-row",{attrs:{gutter:3}},[n("el-col",{attrs:{span:2}},[t._v(t._s(i.level)+":")]),t._v(" "),n("el-col",{attrs:{span:7}},[n("el-input",{attrs:{size:"mini",maxlength:"3"},on:{change:function(n){return t.percentChange(e.row,i)}},model:{value:i.percent,callback:function(e){t.$set(i,"percent",e)},expression:"item.percent"}},[n("template",{slot:"suffix"},[t._v("%")])],2)],1),t._v(" "),n("el-col",{attrs:{span:8}},[n("el-select",{attrs:{size:"mini"},on:{change:function(n){return t.conditionChange(e.row,i)}},model:{value:i.cntCondition,callback:function(e){t.$set(i,"cntCondition",e)},expression:"item.cntCondition"}},t._l(t.conditionList,(function(t){return n("el-option",{key:t.dictCode,attrs:{label:t.dictLabel,value:t.dictValue}})})),1)],1),t._v(" "),n("el-col",{directives:[{name:"show",rawName:"v-show",value:"no-limit"!==i.cntCondition,expression:"item.cntCondition!=='no-limit'"}],attrs:{span:7}},[n("el-input",{attrs:{size:"mini",maxlength:"3"},model:{value:i.empCnt,callback:function(e){t.$set(i,"empCnt",e)},expression:"item.empCnt"}},[n("template",{slot:"suffix"},[t._v("人")])],2)],1)],1)],1)})),1)]}}])})],1)],1),t._v(" "),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{plain:"",icon:"el-icon-close"},on:{click:function(e){t.showDialog=!1}}},[t._v("取消")]),t._v(" "),n("el-button",{attrs:{type:"primary",icon:"el-icon-bank-card"},on:{click:function(e){t.showDialog=!1}}},[t._v("确定")])],1)])],1)},o=[],c=(n("5df3"),n("f400"),n("ac6a"),n("a94c")),r={name:"DistributionDef",components:{BatchDistributionDef:function(){return n.e("chunk-2d21d652").then(n.bind(null,"d0b2"))}},props:{type:{type:String,default:"primary"},size:{type:String,default:""},plain:{type:Boolean,default:!0},round:{type:Boolean,default:!1},circle:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},icon:{type:String,default:"el-icon-edit"},btnText:{type:String,default:"正太分布定义"},title:{type:String,default:"正太分布定义"},distributionList:{type:Array,default:function(){return[]}}},data:function(){return{showDialog:!1,levelScoreList:[],programId:"",conditionList:[],selectedList:[]}},created:function(){var t=this;this.getDicts("pfmc_distribution_condition").then((function(e){t.conditionList=e.data}))},methods:{handleSetGradeAssessor:function(){},dialogOpened:function(){var t=this;if(0!==this.distributionList.length){var e=this.distributionList[0].programId;e!==this.programId&&(this.programId=e,Object(c["listLevelScoreByProgramId"])(e).then((function(e){"0"===e.code?(t.levelScoreList=e.data,t.distributionList.forEach((function(e,n){0===e.detail.length&&t.levelScoreList.forEach((function(t){e.detail.push({levelId:t.levelId,scoreId:t.scoreId,level:t.level,percent:void 0,cntCondition:"no-limit",empCnt:void 0})}))}))):t.msgError(e.msg)})).catch((function(e){t.msgError(e)})))}},batchDefFinished:function(t){var e=new Map(t.map((function(t){return[t.scoreId,t]})));this.selectedList.forEach((function(t){t.detail.forEach((function(n){var i=e.get(n.scoreId);n.percent=i.percent,n.cntCondition=i.cntCondition,n.empCnt=Math.floor(t.empTotal*(n.percent/100))}))}))},selsChange:function(t){this.selectedList=t},percentChange:function(t,e){this.computeEmpCnt(t,e)},conditionChange:function(t,e){this.computeEmpCnt(t,e)},computeEmpCnt:function(t,e){t.detail.forEach((function(n){n.scoreId===e.scoreId&&(n.empCnt="no-limit"!==e.cntCondition?Math.floor(t.empTotal*n.percent/100):void 0)}))}}},l=r,a=n("2877"),s=Object(a["a"])(l,i,o,!1,null,null,null);e["default"]=s.exports},a94c:function(t,e,n){"use strict";n.r(e),n.d(e,"listLevel",(function(){return c})),n.d(e,"levelScoreList",(function(){return r})),n.d(e,"addLevel",(function(){return l})),n.d(e,"updateLevel",(function(){return a})),n.d(e,"delLevel",(function(){return s})),n.d(e,"disablePfmcLevel",(function(){return u})),n.d(e,"changeLevelState",(function(){return d})),n.d(e,"listLevelScoreByProgramId",(function(){return f}));var i=n("b775"),o=n("b854");function c(t){return Object(i["a"])({url:"".concat(o["pfmcSettings"],"/pfmcPresetLevel/list"),method:"get",params:t})}function r(t){return Object(i["a"])({url:"".concat(o["pfmcSettings"],"/pfmcPresetLevel/").concat(t),method:"get"})}function l(t){return Object(i["a"])({url:"".concat(o["pfmcSettings"],"/pfmcPresetLevel"),method:"post",data:t})}function a(t){return Object(i["a"])({url:"".concat(o["pfmcSettings"],"/pfmcPresetLevel/update"),method:"put",data:t})}function s(t){return Object(i["a"])({url:"".concat(o["pfmcSettings"],"/pfmcPresetLevel/").concat(t),method:"delete"})}function u(t){return Object(i["a"])({url:"".concat(o["pfmcSettings"],"/pfmcPresetLevel/disablePfmcLevel/").concat(t),method:"get"})}function d(t){return Object(i["a"])({url:"".concat(o["pfmcSettings"],"/pfmcPresetLevel/changeLevelState"),method:"put",data:t})}function f(t){return Object(i["a"])({url:"".concat(o["pfmcSettings"],"/pfmcPresetLevel/listLevelScoreByProgramId/").concat(t),method:"get"})}},b854:function(t,e,n){"use strict";n.r(e),n.d(e,"pfmcSettings",(function(){return i})),n.d(e,"pfmcAsist",(function(){return o})),n.d(e,"pfmcExecution",(function(){return c})),n.d(e,"pfmcEval",(function(){return r}));var i="pfmc-settings",o="pfmc-asist",c="pfmc-execution",r="pfmc-eval"},f400:function(t,e,n){"use strict";var i=n("c26b"),o=n("b39a"),c="Map";t.exports=n("e0b8")(c,(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{get:function(t){var e=i.getEntry(o(this,c),t);return e&&e.v},set:function(t,e){return i.def(o(this,c),0===t?0:t,e)}},i,!0)}}]);