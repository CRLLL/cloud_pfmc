(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b7116172","chunk-b5d27614"],{"0041":function(e,t,i){"use strict";i.r(t);var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"app-container"},[i("el-dialog",{attrs:{title:e.title,visible:e.show,width:"1000px"},on:{"update:visible":function(t){e.show=t},close:e.cancelItem}},[[i("div",[i("el-collapse",{ref:"previewContain",model:{value:e.activeNames,callback:function(t){e.activeNames=t},expression:"activeNames"}},e._l(e.itemGroupList,(function(t,o){return i("el-collapse-item",{key:t.sectionId,attrs:{name:t.sectionId}},[i("template",{slot:"title"},[i("div",{staticStyle:{width:"100%"},on:{click:function(e){}}},[i("el-row",[i("el-col",{attrs:{span:15}},[i("div",{staticStyle:{float:"left","margin-top":"13px",width:"150px","font-weight":"bold"}},[e._v(e._s(t.sectionName))])]),e._v(" "),i("el-col",{attrs:{span:4}},[i("div",{staticStyle:{"margin-top":"10px"}},[!0!==e.isGroupWt||"quantity"!==t.sectionType&&"quality"!==t.sectionType?e._e():[[i("span",{},[e._v("组间权重：")]),i("el-input",{staticStyle:{width:"40%"},nativeOn:{click:function(e){e.stopPropagation()}},model:{value:t.wt,callback:function(i){e.$set(t,"wt",i)},expression:"group.wt"}}),i("span",[e._v("%")])]]],2)]),e._v(" "),i("el-col",{attrs:{span:5}},[i("div",{staticStyle:{float:"right","padding-right":"20px","margin-top":"13px"}},[i("el-button",{attrs:{type:"primary",icon:"el-icon-plus",size:"mini"},nativeOn:{click:function(i){return i.stopPropagation(),e.addItemRow(t,o)}}},[e._v("新增")])],1)])],1)],1)]),e._v(" "),i("div",{staticStyle:{width:"100%"}},[[i("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,"tree-props":{children:"children",hasChildren:"hasChildren"},"empty-text":" ","row-key":e.getRowKeys,"expand-row-keys":e.expands,"show-summary":t.showGroupWt,"summary-method":e.getTotal},on:{"current-change":e.toggleRowExpansion}},[e._v("\n               >\n                "),i("el-table-column",{attrs:{label:"序号",align:"center",type:"index",width:"50"}}),e._v(" "),e._l(t.itemFieldList,(function(t,o){return i("el-table-column",{key:o,attrs:{prop:t.prop,width:t.width,label:t.fieldName,"show-overflow-tooltip":!0},scopedSlots:e._u([{key:"default",fn:function(o){return["select"===t.fieldType?i("div",[i("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择",disabled:!o.row[t.prop].isEdit},model:{value:o.row[t.prop].modeItemValue,callback:function(i){e.$set(o.row[t.prop],"modeItemValue",i)},expression:"scope.row[item.prop].modeItemValue"}},e._l(t.selectValue,(function(e){return i("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1):"date"===t.fieldType?i("div",[i("el-date-picker",{staticStyle:{width:"100%",height:"100%","line-height":"100%"},attrs:{type:"date",placeholder:"选择日期",disabled:!o.row[t.prop].isEdit},model:{value:o.row[t.prop].modeItemValue,callback:function(i){e.$set(o.row[t.prop],"modeItemValue",i)},expression:"scope.row[item.prop].modeItemValue"}})],1):"number"===t.fieldType?i("div",[i("el-input",{staticStyle:{width:"100%",height:"100%","line-height":"100%"},attrs:{disabled:!o.row[t.prop].isEdit,type:"number"},model:{value:o.row[t.prop].modeItemValue,callback:function(i){e.$set(o.row[t.prop],"modeItemValue",e._n(i))},expression:"scope.row[item.prop].modeItemValue"}})],1):"longText"===t.fieldType?i("div",[i("el-input",{staticStyle:{width:"100%",height:"100%","line-height":"100%"},attrs:{disabled:!o.row[t.prop].isEdit,type:"textarea"},model:{value:o.row[t.prop].modeItemValue,callback:function(i){e.$set(o.row[t.prop],"modeItemValue",i)},expression:"scope.row[item.prop].modeItemValue"}})],1):i("div",[i("el-input",{staticStyle:{width:"100%",height:"100%","line-height":"100%"},attrs:{disabled:!o.row[t.prop].isEdit,type:"text"},model:{value:o.row[t.prop].modeItemValue,callback:function(i){e.$set(o.row[t.prop],"modeItemValue",i)},expression:"scope.row[item.prop].modeItemValue"}})],1)]}}],null,!0)})})),e._v(" "),i("el-table-column",{attrs:{label:"操作",align:"center",width:"100","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(o){return[i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"删除",placement:"top",enterable:!1}},[i("el-button",{attrs:{size:"medium",type:"text",icon:"el-icon-delete"},on:{click:function(i){return e.handleDelRow(o.$index,t)}}})],1),e._v(" "),i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"上移",placement:"top",enterable:!1}},[i("el-button",{attrs:{size:"medium",type:"text",icon:"el-icon-upload2"},on:{click:function(i){return i.stopPropagation(),e.moveUpTable(o.$index,o.row,t.tableData)}}})],1),e._v(" "),i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"下移",placement:"top",enterable:!1}},[i("el-button",{attrs:{size:"medium",type:"text",icon:"el-icon-download"},on:{click:function(i){return i.stopPropagation(),e.moveDownTable(o.$index,o.row,t.tableData)}}})],1)]}}],null,!0)}),e._v(" "),0==e.widthPerIsShow?i("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[e._l(e.section.expendFieldList,(function(o,r){return[i("el-row",[i("el-form-item",{attrs:{label:o.fieldName,prop:o.prop}},["select"===o.fieldType?i("div",[i("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择"},model:{value:t.row[o.prop].modeItemValue,callback:function(i){e.$set(t.row[o.prop],"modeItemValue",i)},expression:"props.row[item.prop].modeItemValue"}},e._l(o.selectValue,(function(e){return i("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1):"date"===o.fieldType?i("div",[i("el-date-picker",{staticStyle:{width:"100%",height:"100%","line-height":"100%"},attrs:{type:"date",placeholder:"选择日期"},model:{value:t.row[o.prop].modeItemValue,callback:function(i){e.$set(t.row[o.prop],"modeItemValue",i)},expression:"props.row[item.prop].modeItemValue"}})],1):"number"===o.fieldType?i("div",[i("el-input",{staticStyle:{width:"100%",height:"100%","line-height":"100%"},attrs:{type:"number"},model:{value:t.row[o.prop].modeItemValue,callback:function(i){e.$set(t.row[o.prop],"modeItemValue",e._n(i))},expression:"props.row[item.prop].modeItemValue"}})],1):"longText"===o.fieldType?i("div",[i("el-input",{staticStyle:{width:"100%",height:"100%","line-height":"100%"},attrs:{type:"textarea"},model:{value:t.row[o.prop].modeItemValue,callback:function(i){e.$set(t.row[o.prop],"modeItemValue",i)},expression:"props.row[item.prop].modeItemValue"}})],1):i("div",[i("el-input",{staticStyle:{width:"100%",height:"100%","line-height":"100%"},attrs:{type:"text"},model:{value:t.row[o.prop].modeItemValue,callback:function(i){e.$set(t.row[o.prop],"modeItemValue",i)},expression:"props.row[item.prop].modeItemValue"}})],1)])],1)]}))],2)]}}],null,!0)}):e._e()],2)]],2)],2)})),1)],1),e._v(" "),i("div",{staticClass:"dialog-footer text-center",staticStyle:{"margin-top":"10px"}},[i("el-button",{attrs:{type:"primary"},on:{click:e.handleSave}},[e._v("保存")]),e._v(" "),i("el-button",{on:{click:e.resetForm}},[e._v("取 消")])],1)]],2)],1)},r=[],l=(i("55dd"),i("28a5"),i("7f7f"),i("ac6a"),i("c5f6"),i("b775"),i("aa5d")),s={name:"viewPfmcForm",components:{},props:{visible:{type:Boolean,default:!1},title:{type:String,default:""},modeId:{type:String,default:"0"}},data:function(){return{show:!1,open:!1,formId:"",nextNodeCode:"",isGroupWt:!1,widthPerIsShow:!0,loading:!0,itemGroupList:[],itemSectionList:[],evalNames:"",oldMode:{},newMode:{},formSetFielsOtherAttr:{},empId:"",groupId:"0",rowId:"0",getRowKeys:function(e){return e.rowId},form:{},expands:[],approverMap:{},vars:{},activeNames:[],rules:{}}},created:function(){},mounted:function(){},computed:{},methods:{validateForm:function(){this.newMode=this.oldMode,this.newMode.itemGroupList=[];for(var e=0;e<this.itemGroupList.length;e++){var t=this.itemGroupList[e],i={modeId:this.modeId,formSectionId:t.formSectionId,wt:t.wt,sectionType:t.sectionType,itemRowList:[]};this.newMode.itemGroupList.push(i);for(var o=0;o<t.tableData.length;o++){var r=t.tableData[o],l={modeId:this.modeId,itemGroupId:t.groupId,formSectionId:t.formSectionId,rowId:r.rowId,itemList:[]};for(var s in r){if(this.rules[s]&&0==r[s].length)return this.msgError(this.rules[s].message),!1;var a={formFieldId:s,modeItemValue:r[s].modeItemValue};"rowId"!==s&&"isEdit"!==s&&l.itemList.push(a)}this.newMode.itemGroupList[e].itemRowList.push(l)}}if(this.isGroupWt){for(var n=0,d=0;d<this.newMode.itemGroupList.length;d++){var p=this.newMode.itemGroupList[d],m=0,u=p.itemRowList;if("quantity"===p.sectionType||"quality"===p.sectionType){for(var c=0;c<u.length;c++){var h=u[c];0==c&&(m=0);for(var f=h.itemList,w=0;w<f.length;w++){var v=f[w];"3"===this.formSetFielsOtherAttr[v.formFieldId]&&(m+=Number(v.modeItemValue))}if(c==u.length-1&&100!==m)return this.msgError("组内权重和应为100"),!1}n+=Number(p.wt)}}if(100!==n)return this.msgError("组间权重和应为100"),!1}else{for(var I=0,y=0;y<this.newMode.itemGroupList.length;y++){var g=this.newMode.itemGroupList[y],b=g.itemRowList;if("quantity"===g.sectionType||"quality"===g.sectionType)for(var x=0;x<b.length;x++)for(var S=b[x],F=S.itemList,V=0;V<F.length;V++){var L=F[V];"3"===this.formSetFielsOtherAttr[L.formFieldId]&&(I+=Number(L.modeItemValue))}}if(100!==I)return this.msgError("权重和应为100"),!1}return!0},getTotal:function(e){var t=this,i=e.columns,o=e.data,r=[];return i.forEach((function(e,i){if(0!==i){var l=o.map((function(t){return t[e.property]}));"3"===t.formSetFielsOtherAttr[e.property]?(r[i]=l.reduce((function(e,t){var i=Number(t.modeItemValue);return isNaN(i)?e:e+i}),0),r[i]):r[i]=" "}else r[i]="合计"})),r},toggleRowExpansion:function(e){this.expands=[],this.expands.push(e.rowId)},resetForm:function(){this.itemSectionList=[],this.loading=!1},moveUpTable:function(e,t,i){if(e>0){var o=i[e-1];i.splice(e-1,1),i.splice(e,0,o)}else this.$message({type:"onfo",message:"已经是第一条，不可上移"})},moveDownTable:function(e,t,i){if(e+1!==i.length){var o=i[e+1];i.splice(e+1,1),i.splice(e,0,o)}else this.$message({type:"onfo",message:"已经是最后一条，不可下移"})},addItemRow:function(e,t){for(var i={},o=0;o<e.itemFieldList.length;o++){var r=e.itemFieldList[o],l=r.prop;i[l]={},"3"==r.otherAttr?i[l].modeItemValue="0":i[l].modeItemValue="",i[l].isEdit=!0}for(var s=0;s<e.expendFieldList.length;s++){var a=e.expendFieldList[s],n=a.prop;i[n]={},i[n].modeItemValue="",i[n].isEdit=!0}e.tableData||(e.tableData=[]),e.tableData.push(i)},sortNumber:function(e,t){return parseInt(e.showOrder)-parseInt(t.showOrder)},getCurItem:function(e,t,i){for(var o=null,r=0;e&&r<e.length;r++){var l=e[r];if(l[i]===t){o=l;break}}return o},buildTableTitle:function(e,t,i){var o=[],r=[],l={titleFields:o,expendFields:r};if(t){for(var s=0;s<e.formSetFieldList.length;s++){var a=e.formSetFieldList[s],n=0;"1"==e.widthPerType&&e.formSetFieldList.forEach((function(e){n+=parseInt(e.widthper)}));var d={fieldName:a.fieldName,showOrder:a.showOrder,prop:a.formFieldId,fieldType:a.fieldType,selectValue:"select"===a.fieldType?a.selectValue.split(","):[],width:"1"==e.widthPerType?i*parseInt(a.widthper)/parseInt(n)+"px":a.widthper+"px"};o.push(d),this.formSetFielsOtherAttr[a.formFieldId]=a.otherAttr}o.sort(this.sortNumber)}else for(var p=0;p<e.formSetFieldList.length;p++){var m=e.formSetFieldList[p],u={fieldName:m.fieldName,showOrder:m.showOrder,prop:m.formFieldId,fieldType:m.fieldType,otherAttr:m.otherAttr,selectValue:"select"===m.fieldType?m.selectValue.split(","):[],width:"1"==e.widthPerType?i*parseInt(m.widthper)/100+"px":m.widthper+"px"};"2"==m.otherAttr?(u.width=.5*i+"px",o.push(u)):"3"==m.otherAttr?(u.width=.3*i+"px",o.push(u)):r.push(u),o.sort(this.sortNumber),r.sort(this.sortNumber),this.formSetFielsOtherAttr[m.formFieldId]=m.otherAttr}return l},buildHorizontalData:function(e,t){for(var i=[],o=0;e&&o<e.length;o++){for(var r=e[o],l=r?r.itemList:null,s={rowId:r.rowId},a=!1,n=0;n<t.formSetFieldList.length;n++){var d=t.formSetFieldList[n],p=this.getCurItem(l,d.formFieldId,"formFieldId");p&&(s[d.formFieldId]={},"3"!==d.otherAttr||p.modeItemValue?s[d.formFieldId].modeItemValue=p.modeItemValue:s[d.formFieldId].modeItemValue="0",s[d.formFieldId].isEdit=!1,"Y"===d.isnotnull&&(this.rules[d.formFieldId]={required:!0,message:d.fieldName+"不能为空",trigger:"blur"}),a=!0)}a&&i.push(s)}return i},buildItemList:function(e,t,i){var o=this,r=[];if(e&&0!=e.length){for(var l=0;l<e.length;l++){var s=e[l],a=s.formSetSection,n=s.itemRowList,d={},p="quantity"===a.sectionType||"quality"===a.sectionType,m={groupId:s.modeItemGroup.itemGroupId,sectionName:a.sectionName,sectionType:a.sectionType,showGroupWt:p,formSectionId:a.formSectionId,showOrder:a.showOrder,wt:s.modeItemGroup.wt,itemFieldList:[],expendFieldList:[],tableData:[]};if(!a.formSetFieldList||0==a.formSetFieldList.length)break;d=this.buildTableTitle(a,i,t),m.itemFieldList=d.titleFields,m.expendFieldList=d.expendFields,m.tableData=this.buildHorizontalData(n,a),r.push(m),r.sort(this.sortNumber),this.activeNames.push(m.groupId)}return this.showSum=!1,this.$nextTick().then((function(){o.showSum=!0})),r}},showPfmcTable:function(){var e=this;this.modeId&&(this.loading=!0,Object(l["getModeItems"])(this.modeId).then((function(t){e.oldMode=t.data,e.isGroupWt="1"===e.oldMode.pfmcProgram.isHaveGroupWeight,e.widthPerIsShow="1"===e.oldMode.pfmcFormSet.showType;var i=.9875*e.$refs.previewContain.$el.offsetWidth-150;console.log(e.oldMode.itemGroupList),e.itemGroupList=e.buildItemList(e.oldMode.itemGroupList,i,e.widthPerIsShow)||[],e.loading=!1})).catch((function(t){e.loading=!1,e.$notify({title:"网络异常",message:t.message,type:"error"})})))},handleDelRow:function(e,t){t.tableData.splice(e,1)},handleSave:function(){var e=this;this.validateForm()&&Object(l["saveMode"])(this.newMode).then((function(t){e.show=!1,"0"===t.code?e.msgSuccess("保存成功"):e.$notify({title:"服务调用异常",message:t.msg,type:"error"})})).catch((function(t){try{e.show=!1}catch(i){}e.$notify({title:"网络异常",message:res.message,type:"error"})})).finally((function(){try{e.show=!1}catch(t){}}))},cancelItem:function(){this.show=!1}},watch:{show:function(){0==this.show&&this.$emit("update:visible",!1)},visible:function(){this.show=this.visible,this.visible&&this.showPfmcTable()}}},a=s,n=(i("555b"),i("2877")),d=Object(n["a"])(a,o,r,!1,null,"22d157e4",null);t["default"]=d.exports},"2f21":function(e,t,i){"use strict";var o=i("79e5");e.exports=function(e,t){return!!e&&o((function(){t?e.call(null,(function(){}),1):e.call(null)}))}},"45a5":function(e,t,i){},"555b":function(e,t,i){"use strict";var o=i("45a5"),r=i.n(o);r.a},"55dd":function(e,t,i){"use strict";var o=i("5ca1"),r=i("d8e8"),l=i("4bf8"),s=i("79e5"),a=[].sort,n=[1,2,3];o(o.P+o.F*(s((function(){n.sort(void 0)}))||!s((function(){n.sort(null)}))||!i("2f21")(a)),"Array",{sort:function(e){return void 0===e?a.call(l(this)):a.call(l(this),r(e))}})}}]);