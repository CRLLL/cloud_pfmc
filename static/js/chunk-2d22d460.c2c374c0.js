(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22d460"],{f792:function(e,n,o){"use strict";o.r(n),o.d(n,"saveFile",(function(){return t}));var r=o("7618");function a(e,n,o){if(null==e)return"";var t="",i=Object(r["a"])(e);if("string"==i||"number"==i||"boolean"==i)t+="&"+n+"="+(null==o||o?encodeURIComponent(e):e);else for(var d in e){var c=null==n?d:n+(e instanceof Array?"["+d+"]":"."+d);t+=a(e[d],c,o)}return t}var t=function(e,n,o){var r=new Blob([e],{type:o}),a=decodeURIComponent(n.substring(29));if(window.navigator.msSaveOrOpenBlob)window.navigator.msSaveBlob(r,a);else{var t=document.createElement("a"),i=window.URL.createObjectURL(r);t.href=i,t.download=a,document.body.appendChild(t),t.click(),window.URL.revokeObjectURL(i),document.body.removeChild(t)}};n["default"]={urlEncode:a,saveFile:t}}}]);