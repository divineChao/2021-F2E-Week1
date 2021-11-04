import{j as h,u as p,S as E,t as F,r as f,m as C,B as y,R as s,a as D,b}from"./vendor.3e5cc1a7.js";const A=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))r(u);new MutationObserver(u=>{for(const t of u)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function c(u){const t={};return u.integrity&&(t.integrity=u.integrity),u.referrerpolicy&&(t.referrerPolicy=u.referrerpolicy),u.crossorigin==="use-credentials"?t.credentials="include":u.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(u){if(u.ep)return;u.ep=!0;const t=c(u);fetch(u.href,t)}};A();const n=h.exports.jsx,i=h.exports.jsxs,a=h.exports.Fragment;function w(){let e=!0;return p().pathname!="/"&&(e=!1),console.log("useLocation:",p()),i(a,{children:[e&&i("header",{className:"flex flex-col justify-center px-4 items-center min-h-[330px] md:min-h-[590px] home-top-image",children:[n("h1",{className:"text-white text-3xl md:text-4xl mb-5  ",children:"\u53F0\u7063\u65C5\u904A\u666F\u9EDE\u5C0E\u89BD"}),n("h4",{className:"text-white text-base md:text-3xl mb-5 ",children:"\u5168\u53F0\u7063\u89C0\u5149\u666F\u9EDE\u5831\u4F60\u77E5\uFF0C\u4EA4\u901A\u9910\u98F2\u65C5\u5BBF\u901A\u901A\u6709!"}),i("div",{className:"flex flex-row items-center bg-white px-2 h-[50px] md:h-[75px] w-3/4 rounded-lg mb-4 border-2 md:border-4 border-black",children:[n(E,{className:"h-10 w-10"}),n("input",{className:"h-full w-full p-5",placeholder:"\u5730\u9EDE...\u535A\u7269\u9928...\u65C5\u904A\u57CE\u5E02"})]}),n("button",{className:"rounded bg-green-light h-[40px] w-[170px] font-bold text-lg",children:"\u641C\u5C0B"})]}),!e&&i("header",{className:"flex flex-col items-center h-[99px] bg-green-light",children:[n("h1",{children:"\u53F0\u7063\u65C5\u904A\u666F\u9EDE\u5C0E\u89BD"}),n("h4",{children:"\u5168\u53F0\u7063\u89C0\u5149\u666F\u9EDE\u5831\u4F60\u77E5\uFF0C\u4EA4\u901A\u9910\u98F2\u65C5\u5BBF\u901A\u901A\u6709!"})]})]})}var g;(function(e){e.Taipei="Taipei",e.NewTaipei="NewTaipei",e.Taoyuan="Taoyuan",e.Taichung="Taichung",e.Tainan="Tainan",e.Kaohsiung="Kaohsiung",e.Keelung="Keelung",e.Hsinchu="Hsinchu",e.HsinchuCounty="HsinchuCounty",e.MiaoliCounty="MiaoliCounty",e.ChanghuaCounty="ChanghuaCounty",e.Nantou="NantouCounty",e.YunlinCounty="YunlinCounty",e.ChiayiCounty="ChiayiCounty",e.Chiayi="Chiayi",e.PingtungCounty="PingtungCounty",e.YilanCounty="YilanCounty",e.HualienCounty="HualienCounty",e.TaitungCounty="TaitungCounty",e.KinmenCounty="KinmenCounty",e.PenghuCounty="PenghuCounty",e.LienchiangCounty="LienchiangCounty"})(g||(g={}));var d;(function(e){e.Taipei="\u53F0\u5317\u5E02",e.NewTaipei="\u65B0\u5317\u5E02",e.Taoyuan="\u6843\u5712",e.Taichung="\u53F0\u4E2D",e.Tainan="\u53F0\u5357",e.Kaohsiung="\u9AD8\u96C4",e.Keelung="\u57FA\u9686",e.Hsinchu="\u65B0\u7AF9",e.HsinchuCounty="\u65B0\u7AF9",e.MiaoliCounty="\u82D7\u6817",e.ChanghuaCounty="\u5F70\u5316",e.Nantou="\u5357\u6295",e.YunlinCounty="\u96F2\u6797",e.ChiayiCounty="\u5609\u7FA9\u7E23",e.Chiayi="\u5609\u7FA9",e.PingtungCounty="\u5C4F\u6771",e.YilanCounty="\u5B9C\u862D",e.HualienCounty="\u82B1\u84EE",e.TaitungCounty="\u53F0\u4E2D\u7E23",e.KinmenCounty="\u91D1\u9580\u7E23",e.PenghuCounty="\u6F8E\u6E56\u7E23",e.LienchiangCounty="\u9023\u6C5F\u7E23"})(d||(d={}));const B=()=>Object.values(d),v=()=>Object.keys(d).map(e=>`./images/${e}.jpg`);function j(){let e=B(),o=v();const c="bg-gray-300 bg-cover h-[220px] relative text-center overflow-hidden hover:cursor-pointer",r="text-white absolute bottom-2 left-2";return i(a,{children:[n("h1",{className:"text-xl md:text-2xl font-bold mb-4",children:"\u71B1\u9580\u666F\u9EDE"}),n("div",{className:"grid grid-col md:grid-cols-3 gap-4 ",children:e.map((u,t)=>n("div",{className:c,style:{backgroundImage:`url(${o[t]})`},children:n("label",{className:r,children:u})},t))})]})}const H="https://ptx.transportdata.tw/MOTC/v2/",x="Tourism/ScenicSpot/";function S(e){return String(new globalThis.URL(e,H))}async function m(e){return fetch(S(e)).then(o=>o.json()).then(F(console.log))}const L={getAll:()=>m(`${x}/`),getByCityName:e=>m(`${x}${e}`)};function P(){const[e,o]=f.exports.useState(),c=u=>{L.getByCityName(u).then(t=>{let l=C(t,r);o(l)})};function r(u){return{ID:u.ID,Name:u.Name,DescriptionDetail:u.DescriptionDetail,Description:u.Description}}return f.exports.useEffect(()=>{console.log("cityData",e)},[e]),i(a,{children:["home",n("button",{onClick:()=>c(g.Taipei),children:"get api"}),e&&e.map(u=>i("div",{children:[u.Name,u.DescriptionDetail,u.Description]},u.ID))]})}function K(){return n(a,{children:"Detail"})}function I(){return n(y,{children:i("div",{className:"h-screen flex flex-col",children:[n(w,{}),n("main",{className:"container p-5 md:p-10 m-auto",children:i(s,{children:[n(s,{path:"/",children:n(j,{})}),n(s,{path:"/list",children:n(s,{path:":cityName",children:n(P,{})})}),n(s,{path:"/detail",children:n(K,{})})]})}),n("footer",{className:"text-center flex justify-center items-center bg-black text-white min-h-[40px] md:h-[60px] text-sm",children:"\u53F0\u7063\u65C5\u904A\u5C0E\u89BD"})]})})}D.render(n(b.StrictMode,{children:n(I,{})}),document.getElementById("root"));
