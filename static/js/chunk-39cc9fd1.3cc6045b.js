(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-39cc9fd1","chunk-2d0a36f7"],{"01bb":function(t,n,e){"use strict";e.r(n),e.d(n,"HRInterface",(function(){return r}));var r="hr-interface"},b4a8:function(t,n,e){"use strict";e.r(n),e.d(n,"getJobList",(function(){return c})),e.d(n,"saveJob",(function(){return a})),e.d(n,"delJob",(function(){return o})),e.d(n,"pauseJob",(function(){return b})),e.d(n,"resumeJob",(function(){return f}));var r=e("b775"),u=e("01bb");function c(){return Object(r["a"])({url:"".concat(u["HRInterface"],"/quartz/list"),method:"get"})}function a(t,n){return Object(r["a"])({url:"".concat(u["HRInterface"],"/quartz/job"),method:n?"post":"put",data:t})}function o(t){return Object(r["a"])({url:"".concat(u["HRInterface"],"/quartz/job"),method:"delete",params:{jobName:t}})}function b(t){return Object(r["a"])({url:"".concat(u["HRInterface"],"/quartz/pausing"),method:"post",params:{jobName:t}})}function f(t){return Object(r["a"])({url:"".concat(u["HRInterface"],"/quartz/resume"),method:"post",params:{jobName:t}})}}}]);