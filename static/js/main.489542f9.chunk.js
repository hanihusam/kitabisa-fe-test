(this["webpackJsonpkitabisa-fe-test"]=this["webpackJsonpkitabisa-fe-test"]||[]).push([[0],[,,,,function(e,a,t){e.exports=t(11)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(3),c=t.n(r),s=t(1),i=(t(9),function(){return n.a.createElement("header",{className:"header_area"},n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"row align-items-center"},n.a.createElement("div",{className:"col-12"},n.a.createElement("div",{className:"menu_area"},n.a.createElement("nav",{className:"navbar navbar-light navbar-expand-lg"},n.a.createElement("a",{href:"/",className:"navbar-brand"},"Frontend Engineer Test")))))))}),m=function(e){var a=e.cmd,t=e.onClick;return n.a.createElement("div",{className:"form-group"},n.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block text-uppercase",onClick:t},a))},u=function(e){var a=e.getResult,t=e.setAlert,r=e.clearResult,c=Object(l.useState)(null),i=Object(s.a)(c,2),u=i[0],o=i[1],p=Object(l.useState)(null),d=Object(s.a)(p,2),b=d[0],E=d[1];return n.a.createElement("div",{className:"tab-pane fade show active",id:"pills-sum",role:"tabpanel","aria-labelledby":"pills-sum-tab"},n.a.createElement("form",{id:"profesi-form"},n.a.createElement("p",{className:"text-left mb-3"},"Hitung berapa hasil jumlah nilai X dan Y."),n.a.createElement("div",{className:"form-group"},n.a.createElement("div",{className:"input-group"},n.a.createElement("label",{className:"sr-only",htmlFor:"inlineFormInputGroup"},"Masukkan nilai X"),n.a.createElement("div",{className:"input-group mb-3"},n.a.createElement("div",{className:"input-group-prepend"},n.a.createElement("div",{className:"input-group-text"},"X")),n.a.createElement("input",{type:"number",className:"form-control",id:"val-x",placeholder:"Masukkan nilai X",onChange:function(e){""===e.target.value?o(null):o(Number(e.target.value))},onFocus:r})))),n.a.createElement("div",{className:"form-group"},n.a.createElement("div",{className:"input-group"},n.a.createElement("label",{className:"sr-only",htmlFor:"inlineFormInputGroup"},"Masukkan nilai Y"),n.a.createElement("div",{className:"input-group mb-3"},n.a.createElement("div",{className:"input-group-prepend"},n.a.createElement("div",{className:"input-group-text"},"Y")),n.a.createElement("input",{type:"number",className:"form-control",id:"val-y",placeholder:"Masukkan nilai Y",onChange:function(e){""===e.target.value?E(null):E(Number(e.target.value))},onFocus:r})))),n.a.createElement(m,{cmd:"Hitung",onClick:function(e){(e.preventDefault(),null===u||null===b)?t("Tolong perikasa kembali masukan Anda","danger"):a(u+b)}})))},o=function(e){var a=e.getResult,t=e.setAlert,r=e.clearResult,c=Object(l.useState)(null),i=Object(s.a)(c,2),u=i[0],o=i[1],p=Object(l.useState)(null),d=Object(s.a)(p,2),b=d[0],E=d[1];return n.a.createElement("div",{className:"tab-pane fade",id:"pills-multiply",role:"tabpanel","aria-labelledby":"pills-multiply-tab"},n.a.createElement("form",{id:"profesi-form"},n.a.createElement("p",{className:"text-left mb-3"},"Hitung berapa hasil kali nilai X dan Y."),n.a.createElement("div",{className:"form-group"},n.a.createElement("div",{className:"input-group"},n.a.createElement("label",{className:"sr-only",htmlFor:"inlineFormInputGroup"},"Masukkan nilai X"),n.a.createElement("div",{className:"input-group mb-3"},n.a.createElement("div",{className:"input-group-prepend"},n.a.createElement("div",{className:"input-group-text"},"X")),n.a.createElement("input",{type:"number",className:"form-control",id:"val-x",placeholder:"Masukkan nilai X",onChange:function(e){""===e.target.value?o(null):o(Number(e.target.value))},onFocus:r})))),n.a.createElement("div",{className:"form-group"},n.a.createElement("div",{className:"input-group"},n.a.createElement("label",{className:"sr-only",htmlFor:"inlineFormInputGroup"},"Masukkan nilai Y"),n.a.createElement("div",{className:"input-group mb-3"},n.a.createElement("div",{className:"input-group-prepend"},n.a.createElement("div",{className:"input-group-text"},"Y")),n.a.createElement("input",{type:"number",className:"form-control",id:"val-y",placeholder:"Masukkan nilai Y",onChange:function(e){""===e.target.value?E(null):E(Number(e.target.value))},onFocus:r})))),n.a.createElement(m,{cmd:"Hitung",onClick:function(e){(e.preventDefault(),null===b||null===u)?t("Tolong perikasa kembali masukan Anda","danger"):a(u*b)}})))},p=function(e){var a=e.getResult,t=e.setAlert,r=e.clearResult,c=Object(l.useState)(null),i=Object(s.a)(c,2),u=i[0],o=i[1],p=function(e){if(e<2)return!1;for(var a=2;a<e;a+=1)if(e%a===0)return!1;return!0};return n.a.createElement("div",{className:"tab-pane fade",id:"pills-prime",role:"tabpanel","aria-labelledby":"pills-prime-tab"},n.a.createElement("form",{id:"profesi-form"},n.a.createElement("p",{className:"text-left mb-3"},"Tampilkan sejumlah X deret bilangan prima."),n.a.createElement("div",{className:"form-group"},n.a.createElement("div",{className:"input-group"},n.a.createElement("label",{className:"sr-only",htmlFor:"inlineFormInputGroup"},"Masukkan nilai X"),n.a.createElement("div",{className:"input-group mb-3"},n.a.createElement("div",{className:"input-group-prepend"},n.a.createElement("div",{className:"input-group-text"},"X")),n.a.createElement("input",{type:"number",className:"form-control",id:"val-x",placeholder:"Masukkan nilai X",onChange:function(e){o(Number(e.target.value))},onFocus:r})))),n.a.createElement(m,{cmd:"Masukkan",onClick:function(e){e.preventDefault(),function(e){var l=[],n=2;if(null===u||0===u)t("Tolong perikasa kembali masukan Anda","danger");else if(u<=0)t("Bilangan yang dimasukkan tidak boleh kurang dari 0","danger");else{for(;l.length<e;)p(n)&&l.push(n),n+=1;a(l)}}(u)}})))},d=function(e){var a=e.getResult,t=e.setAlert,r=e.clearResult,c=Object(l.useState)(null),i=Object(s.a)(c,2),u=i[0],o=i[1];return n.a.createElement("div",{className:"tab-pane fade",id:"pills-fibonacci",role:"tabpanel","aria-labelledby":"pills-fibonacci-tab"},n.a.createElement("form",{id:"profesi-form"},n.a.createElement("p",{className:"text-left mb-3"},"Tampilkan sejumlah X deret bilangan fibonacci."),n.a.createElement("div",{className:"form-group"},n.a.createElement("div",{className:"input-group"},n.a.createElement("label",{className:"sr-only",htmlFor:"inlineFormInputGroup"},"Masukkan nilai X"),n.a.createElement("div",{className:"input-group mb-3"},n.a.createElement("div",{className:"input-group-prepend"},n.a.createElement("div",{className:"input-group-text"},"X")),n.a.createElement("input",{type:"number",className:"form-control",id:"val-x",placeholder:"Masukkan nilai X",onChange:function(e){o(Number(e.target.value))},onFocus:r})))),n.a.createElement(m,{cmd:"Masukkan",onClick:function(e){e.preventDefault(),null===u||0===u?t("Tolong perikasa kembali masukan Anda","danger"):u<=0?t("Bilangan yang dimasukkan tidak boleh kurang dari 0","danger"):a(function e(a){var t=[];return 1!==a?((t=e(a-1)).push(t[t.length-1]+t[t.length-2]),t):[0,1]}(u-1))}})))},b=function(e){var a=e.result,t=null==a?"":a;return n.a.createElement("div",{id:"results"},n.a.createElement("h4",{className:"text-left mb-3"},"Hasil"),n.a.createElement("div",{className:"form-group"},n.a.createElement("div",{className:"input-group"},n.a.createElement("label",{className:"sr-only",htmlFor:"inlineFormInputGroup"},"Hasil keluaran"),n.a.createElement("div",{className:"input-group mb-3"},n.a.createElement("input",{className:"form-control",id:"result",disabled:!0,value:t})))))},E=function(e){var a=e.alert;return null!==a&&n.a.createElement("div",{className:"alert alert-".concat(a.type),role:"alert"},a.msg)},g=[{id:1,name:"sum",content:"Sum X & Y"},{id:2,name:"multiply",content:"Multipy X & Y"},{id:3,name:"prime",content:"Prime Number"},{id:4,name:"fibonacci",content:"Fibonacci Sequence"}],v=function(e){var a=e.result,t=e.getResult,l=e.clearResult,r=e.setAlert,c=e.alert;return n.a.createElement("div",{className:"container",id:"main-card"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6 mx-auto"},n.a.createElement("div",{className:"shadow-sm card card-body text-center mt-5"},n.a.createElement("ul",{className:"row nav nav-pills mb-3",id:"pills-tab",role:"tablist"},g.map((function(e,a){var t=0===a?"active":"",l=0===a?"true":"false";return n.a.createElement("li",{key:e.id,className:"col-md-6 nav-item"},n.a.createElement("a",{className:"nav-link ".concat(t),id:"pills-".concat(e.name,"-tab"),"data-toggle":"pill",href:"#pills-".concat(e.name),role:"tab","aria-controls":"pills-".concat(e.name),"aria-selected":l},e.content))}))),n.a.createElement(E,{alert:c}),n.a.createElement("div",{className:"tab-content",id:"pills-tabContent"},n.a.createElement(u,{getResult:t,setAlert:r,clearResult:l}),n.a.createElement(o,{getResult:t,setAlert:r,clearResult:l}),n.a.createElement(p,{getResult:t,setAlert:r,clearResult:l}),n.a.createElement(d,{getResult:t,setAlert:r,clearResult:l}),null!==a&&n.a.createElement(b,{result:a,clearResult:l}))))))},f=function(){return n.a.createElement("div",{className:"d-flex justify-content-center",id:"loader"},n.a.createElement("div",{className:"spinner-border",role:"status"},n.a.createElement("span",{className:"sr-only"},"Loading...")))},N=function(){var e=Object(l.useState)(!1),a=Object(s.a)(e,2),t=a[0],r=a[1],c=Object(l.useState)(null),m=Object(s.a)(c,2),u=m[0],o=m[1],p=Object(l.useState)(null),d=Object(s.a)(p,2),b=d[0],E=d[1];return n.a.createElement(l.Fragment,null,n.a.createElement(i,null),n.a.createElement("main",{id:"home"},n.a.createElement(v,{loading:t,result:u,getResult:function(e){o(null),r(!0),setTimeout((function(){o(e),r(!1)}),2e3)},setAlert:function(e,a){E({msg:e,type:a}),setTimeout((function(){return E(null)}),2e3)},alert:b,clearResult:function(){o(null)}})),t&&n.a.createElement(f,null))};t(10);c.a.render(n.a.createElement(N,null),document.getElementById("root"))}],[[4,1,2]]]);
//# sourceMappingURL=main.489542f9.chunk.js.map