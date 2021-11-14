import{u as Ee,j as o,F as x,a as t,S as W,L as g,t as be,b as ye,c as Ce,d as _,r as i,e as M,f as we,C as E,g as J,h as H,m as Z,M as ke,T as Fe,i as Ae,k as De,l as Se,P as Be,B as ve,s as ee,n as Ne,o as Ie,R as b,Q as Pe,p as Le,q as te,v as Te,w as je}from"./vendor.25306cee.js";const Me=function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const c of n)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&a(f)}).observe(document,{childList:!0,subtree:!0});function s(n){const c={};return n.integrity&&(c.integrity=n.integrity),n.referrerpolicy&&(c.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?c.credentials="include":n.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(n){if(n.ep)return;n.ep=!0;const c=s(n);fetch(n.href,c)}};Me();function ne({headerStyle:e}){const l=Ee();let s=!0;e!="home"&&(s=!1);const a=c=>{c.keyCode===13&&(c.preventDefault(),n())},n=()=>{const c=document.getElementById("searchInput").value;l.push(`/2021-F2E-Week1/scenicSpot/?city=allCity&text=${c}`)};return o(x,{children:[s&&o("header",{className:"flex flex-col justify-center px-4 items-center min-h-[330px] md:min-h-[590px] home-top-image",children:[t("h1",{className:"text-white text-3xl md:text-4xl mb-5",children:"\u53F0\u7063\u65C5\u904A\u666F\u9EDE\u5C0E\u89BD"}),t("h4",{className:"text-white text-base md:text-3xl mb-5",children:"\u5168\u53F0\u7063\u89C0\u5149\u666F\u9EDE\u5831\u4F60\u77E5\uFF0C\u4EA4\u901A\u9910\u98F2\u65C5\u5BBF\u901A\u901A\u6709!"}),o("div",{className:"flex flex-row items-center bg-white px-2 h-[50px] md:h-[75px] w-3/4 rounded-lg mb-4 border-2 md:border-4 border-black",children:[t(W,{className:"h-10 w-10"}),t("input",{id:"searchInput",className:"h-full w-full p-5",placeholder:"\u5730\u9EDE...\u535A\u7269\u9928...\u65C5\u904A\u57CE\u5E02",onKeyPress:a})]}),t("button",{className:"btn-green w-[170px]",type:"button",onClick:n,children:"\u641C\u5C0B"})]}),!s&&t("header",{className:"bg-green-light p-3",children:t(g,{to:"/2021-F2E-Week1/home",children:o("div",{className:"mx-auto container px-5 md:px-10 font-bold",children:[t("h1",{className:"text-2xl mb-2",children:"\u53F0\u7063\u65C5\u904A\u666F\u9EDE\u5C0E\u89BD"}),t("h4",{className:"text-sm md:text-md ",children:"\u5168\u53F0\u7063\u89C0\u5149\u666F\u9EDE\u5831\u4F60\u77E5\uFF0C\u4EA4\u901A\u9910\u98F2\u65C5\u5BBF\u901A\u901A\u6709!"})]})})})]})}var K;(function(e){e.Taipei="Taipei",e.NewTaipei="NewTaipei",e.HsinchuCounty="HsinchuCounty",e.Keelung="Keelung",e.Taoyuan="Taoyuan",e.Hsinchu="Hsinchu",e.YilanCounty="YilanCounty",e.MiaoliCounty="MiaoliCounty",e.Taichung="Taichung",e.ChanghuaCounty="ChanghuaCounty",e.NantouCounty="NantouCounty",e.YunlinCounty="YunlinCounty",e.Chiayi="Chiayi",e.ChiayiCounty="ChiayiCounty",e.Tainan="Tainan",e.Kaohsiung="Kaohsiung",e.PingtungCounty="PingtungCounty",e.PenghuCounty="PenghuCounty",e.TaitungCounty="TaitungCounty",e.HualienCounty="HualienCounty",e.KinmenCounty="KinmenCounty",e.LienchiangCounty="LienchiangCounty"})(K||(K={}));var k;(function(e){e.Taipei="\u81FA\u5317\u5E02",e.NewTaipei="\u65B0\u5317\u5E02",e.HsinchuCounty="\u65B0\u7AF9\u7E23",e.Keelung="\u57FA\u9686\u5E02",e.Taoyuan="\u6843\u5712\u5E02",e.Hsinchu="\u65B0\u7AF9\u5E02",e.YilanCounty="\u5B9C\u862D\u7E23",e.MiaoliCounty="\u82D7\u6817\u7E23",e.Taichung="\u81FA\u4E2D\u5E02",e.ChanghuaCounty="\u5F70\u5316\u7E23",e.NantouCounty="\u5357\u6295\u7E23",e.YunlinCounty="\u96F2\u6797\u7E23",e.Chiayi="\u5609\u7FA9\u5E02",e.ChiayiCounty="\u5609\u7FA9\u7E23",e.Tainan="\u81FA\u5357\u5E02",e.Kaohsiung="\u9AD8\u96C4\u5E02",e.PingtungCounty="\u5C4F\u6771\u7E23",e.PenghuCounty="\u6F8E\u6E56\u7E23",e.TaitungCounty="\u81FA\u6771\u7E23",e.HualienCounty="\u82B1\u84EE\u7E23",e.KinmenCounty="\u91D1\u9580\u7E23",e.LienchiangCounty="\u9023\u6C5F\u7E23"})(k||(k={}));var N;(function(e){e.LeisureAgriculture="\u4F11\u9592\u8FB2\u696D\u985E",e.Historic="\u53E4\u8E5F\u985E",e.NationalScenic="\u570B\u5BB6\u98A8\u666F\u5340\u985E",e.SnacksSpecialties="\u5C0F\u5403/\u7279\u7522\u985E",e.Temples="\u5EDF\u5B87\u985E",e.Culture="\u6587\u5316\u985E",e.ForestRecreation="\u68EE\u6797\u904A\u6A02\u5340\u985E",e.HotSpring="\u6EAB\u6CC9\u985E",e.Ecological="\u751F\u614B\u985E",e.NaturalScenery="\u81EA\u7136\u98A8\u666F\u985E",e.Art="\u85DD\u8853\u985E",e.SightseeingFactory="\u89C0\u5149\u5DE5\u5EE0\u985E",e.Recreation="\u904A\u61A9\u985E",e.MetropolitanPark="\u90FD\u6703\u516C\u5712\u985E",e.SportsFitness="\u9AD4\u80B2\u5065\u8EAB\u985E",e.Other="\u5176\u4ED6"})(N||(N={}));const ue=()=>Object.values(K),le=()=>Object.values(k),He=e=>Object.values(e),Ke=e=>Object.keys(e),Oe=(e,l)=>e?l.filter(s=>{if(Ue(s).find(c=>Qe(e,c)))return!0}):l,Re=(e,l)=>{let s=[];return e.map(a=>Object.keys(l).map((n,c)=>{a===n&&s.push(l[n])})),s},$e=(e,l)=>{if(e.length===0)return l;const s=Re(e,k);return l.filter(a=>s.find(n=>{if(a.City==n)return console.log("location.City == c",a.City==n),!0}))},ze=(e,l)=>e.length===0?l:(console.log("specials:",e),l.filter(s=>e.find(a=>{if(s.Class1==a||s.Class2==a||s.Class3==a)return!0}))),O=(e,l)=>l.filter(s=>s!==e),Qe=(e,l)=>l.match(RegExp(e,"i")),Ue=e=>Object.values(e).filter(l=>typeof l=="string"),Ye="https://ptx.transportdata.tw/MOTC/v2/",re="Tourism/ScenicSpot/";function Ge(){let e="bcee97e768f0431784373e00f3539404",l="bAY5MKsU_isyBjPsnFHcHlJgd1k",s=new Date().toUTCString(),a=new ye("SHA-1","TEXT");a.setHMACKey(l,"TEXT"),a.update("x-date: "+s);let n=a.getHMAC("B64");return{Authorization:'hmac username="'+e+'", algorithm="hmac-sha1", headers="x-date", signature="'+n+'"',"X-Date":s}}function Ve(e){return{ID:e.ID,City:e.City,Name:e.Name,Phone:e.Phone,Address:e.Address,ZipCode:e.ZipCode,DescriptionDetail:e.DescriptionDetail,Description:e.Description,TravelInfo:e.TravelInfo,OpenTime:e.OpenTime,Picture:e.Picture,MapUrl:e.MapUrl,Position:e.Position,Class1:e.Class1,Class2:e.Class2,Class3:e.Class3,Level:e.Level,WebsiteUrl:e.WebsiteUrl,ParkingInfo:e.ParkingInfo,ParkingPosition:e.ParkingPosition,TicketInfo:e.TicketInfo,Remarks:e.Remarks,Keyword:e.Keyword}}function Xe(e){return String(new globalThis.URL(e,Ye))}async function oe(e){return fetch(Xe(e),{method:"GET",headers:Ge()}).then(l=>l.json()).then(l=>l.map(Ve,l)).then(be(console.log))}const qe="?$filter=Picture%2FPictureUrl1%20ne%20null%20&$format=JSON",se={getAll:()=>oe(`${re}${qe}`),getByCityName:e=>oe(`${re}${e}`)},y=Ce(e=>({loading:!1,scenicSpotsAll:[],scenicSpotsFiltered:[],scenicSpotId:{},async getScenicSpotsAll(){se.getAll().then(l=>e(s=>s.scenicSpotsAll=l))},setLoading(l){e({loading:l})}}));function R(){const{pathname:e}=_();return i.exports.useEffect(()=>{window.scrollTo(0,0)},[e]),null}const We=()=>Object.keys(k).map(e=>`/2021-F2E-Week1/images/${e}.jpg`);function _e(){const e=y(d=>d.scenicSpotsAll);let l=ue(),s=le(),a=We();const n="bg-gray-300 bg-cover h-[220px] relative text-center overflow-hidden hover:cursor-pointer",c="text-white absolute bottom-2 left-2",f=y(d=>d.getScenicSpotsAll);return i.exports.useEffect(()=>{e.length===0&&f()},[e]),o(x,{children:[t(R,{}),t("h1",{className:"text-xl md:text-2xl font-bold mb-4 mt-14",children:"\u71B1\u9580\u666F\u9EDE"}),t("div",{className:"grid grid-col md:grid-cols-3 gap-4 ",children:s.map((d,h)=>t(g,{to:"scenicSpot?city="+l[h],children:t("div",{className:n,style:{backgroundImage:`url(${a[h]})`},children:t("label",{className:c,children:d})})},h))})]})}function $({id:e,name:l,text:s,isChecked:a,onChange:n}){function c(){document.getElementById(e).click()}return o("div",{className:"checkbox-btn",onClick:c,children:[t("input",{id:e,type:"checkbox",name:l,onChange:n}),t("label",{children:s})]})}function Je(){return o("svg",{className:"animate-spin -ml-1 mr-1 h-5 w-5 text-green-light",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[t("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),t("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})}var Ze="/2021-F2E-Week1/assets/nopic.90c3ec95.jpg";let z=0,Q=!1,U=!1;const ce=ue(),I=le(),et=Ke(N),tt=He(N);function nt(){const[e,l]=M("city",H),[s,a]=M("text",H),[n,c]=M("special",H),f=y(u=>u.getScenicSpotsAll),d=y(u=>u.scenicSpotsAll),[h,C]=i.exports.useState([]),[F,ie]=i.exports.useState([]),[A,de]=i.exports.useState([]),[m,D]=i.exports.useState([]),[p,Y]=i.exports.useState([]),[P,S]=i.exports.useState(!0),[B,L]=i.exports.useState(!1),[he,G]=i.exports.useState(!1),T=i.exports.useCallback(we(u=>{u()},800),[]),me=u=>{const r=u.target.value;T(async()=>{S(!0),console.log("%c debounce","color:orange;background:black;padding:2px 10px"),de(r)})},V=u=>{if(S(!0),console.log("%c handleCheckboxBtn","color:orange;background:black;padding:2px 10px"),u.target.name==="allCity"){m.length===1&&m[0]==="allCity"&&(u.target.checked=!0),m.map(r=>{var w;(w=document.getElementById(r))==null||w.click()}),D(["allCity"]);return}else if(u.target.name!="allCity"){if(m.includes("allCity")){const r=document.getElementById("allCity");r.checked=!1,D(O("allCity",m))}u.target.checked?D(r=>[...r,u.target.name]):D(O(u.target.name,m))}},fe=u=>{S(!0),u.target.checked&&!p.includes(u.target.name)?Y(r=>[...r,u.target.name]):Y(O(u.target.name,p))},X=()=>{T(async()=>{window.scrollY>=500?(G(!0),console.log("\u62C9\u4E0B\u4E86")):(G(!1),console.log("\u6C92\u62C9\u4E0B"))})},j=async()=>{if(console.log("%c\u6587\u5B57","color:orange;background:black;padding:2px 10px",A),console.log("%c\u57CE\u5E02","color:orange;background:black;padding:2px 10px",m),console.log("%c\u7279\u5225","color:orange;background:black;padding:2px 10px",p),d.length==0&&h==0){console.warn("\u5509\u5466bug\u6216\u65B7\u7DDA \u9084\u6C92\u6709\u6293\u5230\u8CC7\u6599\u5C31\u5728\u7BE9\u9078\u4E86 checkData\u4E2D..."),q();return}let u;d.length>0?(console.log("allLocation exits"),u=Z(r=>r,d)):h.length>0&&(console.log("listData exits"),u=Z(r=>r,h)),u&&(m.includes("allCity")||(u=await $e(m,u)),u=await Oe(A,u),u=await ze(p,u),console.log("\u7BE9\u9078\u66F4\u65B0\u4E2D..."),ie(u))},ge=u=>(se.getByCityName(u).then(r=>{C(r)}),!0),q=async()=>{if(d.length===0&&(Q||(Q=!0,console.log("\u53D6\u5F97\u5168\u90E8\u8CC7\u6599\u4E2D..."),await f())),h==0&&!U&&(U=!0,e&&e.length==1)){if(e==="allCity")return;console.log(`\u641C\u5C0B${e}\u57CE\u5E02\u8CC7\u6599\u4E2D...`),await ge(e)}};z+=1,i.exports.useEffect(()=>{z>0&&(q(),T(async()=>{console.log("%c useEffect: debounce filter","color:orange;background:black;padding:2px 10px"),l(m),a(A),c(p),await j(),S(!1)}))},[A,m,p]),i.exports.useEffect(()=>{U=!1,h.length>0&&j()},[h]),i.exports.useEffect(()=>{Q=!1,d.length>0&&j()},[d]),i.exports.useEffect(()=>(window.addEventListener("scroll",X,{passive:!0}),e.split(",").map(r=>{var w;console.log("city:",r),(w=document.getElementById(r))==null||w.click()}),s&&(document.getElementById("searchInput").value=s),()=>{z=0,window.removeEventListener("scroll",X)}),[]);const pe=({target:u})=>{const r=u;r.onerror=null,r.src=Ze},v=(u,r)=>t($,{onChange:V,id:ce[u],name:ce[u],text:r},u),xe=(u,r)=>t($,{onChange:fe,id:et[u],name:r,text:r},u);return o(x,{children:[t(R,{}),o("section",{className:"flex flex-row items-center my-4",children:[t(g,{to:"/2021-F2E-Week1/home",children:"\u9996\u9801"}),t(E,{className:"h-4 w-4"}),t(g,{to:"/2021-F2E-Week1/home",children:"\u57CE\u5E02"}),t(E,{className:"h-4 w-4"}),t("span",{className:"text-gray-400",children:"\u666F\u9EDE"})]}),o("section",{className:"flex flex-col md:flex-row md:justify-between",children:[o("article",{className:`filter-wrapper ${B?"":"hidden"} md:inline-flex `,children:[o("div",{className:"flex flex-row justify-between",children:[t("h1",{className:"text-xl md:text-xl font-bold mb-3.5",children:"\u7BE9\u9078\u689D\u4EF6"}),t("button",{className:"md:hidden flex items-center justify-center border h-6 w-6 rounded-full",onClick:()=>(L(!B),null),children:t("svg",{className:"fill-current text-black",xmlns:"http://www.w3.org/2000/svg",width:"13",height:"13",viewBox:"0 0 18 18",children:t("path",{d:"M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"})})})]}),t($,{onChange:V,id:"allCity",name:"allCity",text:"\u5168\u53F0\u666F\u9EDE"}),t("div",{className:"h-4"}),t("h4",{className:"text-sm md:text-sm font-black mb-2",children:"\u5317\u90E8"}),t("div",{className:"checkbox-btn-wrapper",children:I.map((u,r)=>{if(r<=4)return v(r,u)})}),t("h4",{className:"text-sm md:text-sm font-black mb-2",children:"\u4E2D\u90E8"}),t("div",{className:"checkbox-btn-wrapper",children:I.map((u,r)=>{if(r>5&&r<=13)return v(r,u)})}),t("h4",{className:"text-sm md:text-sm font-black mb-2",children:"\u5357\u90E8"}),t("div",{className:"checkbox-btn-wrapper",children:I.map((u,r)=>{if(r>13&&r<=16)return v(r,u)})}),t("h4",{className:"text-sm md:text-sm font-black mb-2",children:"\u5916\u5CF6"}),t("div",{className:"checkbox-btn-wrapper",children:I.map((u,r)=>{if(r>16&&r<=21)return v(r,u)})}),t("h4",{className:"text-sm md:text-sm font-black mb-2",children:"\u666F\u9EDE\u985E\u5225"}),t("div",{className:"checkbox-btn-wrapper",children:tt.map((u,r)=>xe(r,u))})]}),t("article",{className:"filter-md-spacing"}),o("article",{className:"filter-list",children:[he&&t("section",{className:"fixed top-0 right-0 z-10",children:o("button",{className:"md:hidden font-bold bg-gray-300 rounded-none align-middle w-[120px] h-[30px] mb-2",onClick:()=>(L(!B),null),children:[t(J,{className:"inline-block items-center font-bold h-4 w-4 mr-2"}),t("small",{children:"\u7BE9\u9078\u689D\u4EF6"})]})}),o("section",{children:[o("div",{className:"flex flex-row items-center bg-gray-100 border-black border-2 rounded-md h-[50px] md:h-[75px] mb-4 md:mb-2 pl-4",children:[t(W,{className:"h-10 w-10"}),t("input",{id:"searchInput",className:"h-full w-full p-5 bg-gray-100",placeholder:"\u5730\u9EDE...\u535A\u7269\u9928...\u65C5\u904A\u57CE\u5E02",onChange:me})]}),o("div",{className:"flex items-center justify-between md:py-4",children:[P&&o("small",{className:"flex flex-row items-end",children:[t(Je,{}),t("span",{children:"\u8CC7\u6599\u8B80\u53D6\u4E2D..."})]}),!P&&o("small",{children:[" ",F.length," \u9805\u666F\u9EDE"]}),!P&&F.length===0&&t("small",{className:"text-green-600",children:" \u67E5\u7121\u8CC7\u6599,\u8ACB\u91CD\u65B0\u7BE9\u9078"}),o("button",{className:"md:hidden font-bold bg-gray-300 rounded-none align-middle w-[120px] h-[30px] mb-2",onClick:()=>(L(!B),null),children:[t(J,{className:"inline-block items-center font-bold h-4 w-4 mr-2"}),t("small",{children:"\u7BE9\u9078\u689D\u4EF6"})]})]})]}),F&&F.map((u,r)=>o("div",{className:"relative flex flex-col md:flex-row overflow-hidden bg-white border rounded-[10px] w-full h-[25rem] md:h-60 mb-4 md:pr-9",children:[t("div",{className:"relative md:overflow-hidden md:min-w-[110px] md:w-2/5",children:t(g,{to:`scenicSpot/${u.ID}`,children:t("img",{src:u.Picture.PictureUrl1,onError:pe,className:"object-cover absolute top-50% left-50% block min-w-full min-h-full transform translate-x-50 translate-y-50"})})}),o("div",{className:"absolute md:relative bg-white bottom-0 font-bold flex flex-col justify-between p-4 md:py-6 md:px-4 md:ml-5 w-full md:w-3/5 xl:w-4/5 h-3/8 md:h-auto",children:[u.City&&t("h3",{className:"text-sm",children:u.City}),t("h1",{className:"mt-0.5",children:u.Name}),t("small",{className:"text-xs md:text-sm mt-1 md:mt-4 font-normal desText",children:u.DescriptionDetail}),t(g,{to:`scenicSpot/${u.ID}`,className:"flex justify-end mt-3",children:o("button",{className:"inline-flex flex-row place-items-center justify-center bg-white border border-green-light font-bold text-sm md:text-lg w-full md:w-40 px-8 py-2",children:["\u8A73\u7D30\u4ECB\u7D39",t(E,{className:"inline-block align-text-bottom h-4 w-4"})]})})]})]},u.ID))]})]})]})}function ut({lat:e,lon:l}){return t(x,{children:o(ke,{className:"h-full",center:[e,l],zoom:15,scrollWheelZoom:!1,children:[t(Fe,{attribution:'\xA9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),t(Ae,{position:[e,l]})]})})}var lt="/2021-F2E-Week1/assets/autumn-in-taiwan-header.e1b92cba.png";function rt(){const{id:e}=De(),l=y(d=>d.scenicSpotsAll),s=y(d=>d.getScenicSpotsAll),a=d=>l.find(h=>h.ID===d);let n=a(e);const[c,f]=i.exports.useState({});return i.exports.useEffect(()=>{if(l.length===0&&s(),n&&n.ID!=e&&(console.warn("detail.ID != id",n.ID),a(e)),n&&n.Picture!=null){let d=new Map(Object.entries(n.Picture));f(()=>{let h={backgroundImage:lt,backgroundSize:"cover",backgroundPosition:"center"};return d.forEach(C=>{C&&C.includes("http")&&(h={backgroundImage:`url(${C})`,backgroundSize:"cover",backgroundPosition:"center"})}),h})}},[l,n,e]),o(x,{children:[t(R,{}),o("section",{className:"flex flex-row items-center my-4",children:[t(g,{to:"/2021-F2E-Week1/home",children:"\u9996\u9801"}),t(E,{className:"h-4 w-4"}),t(g,{to:"/2021-F2E-Week1/home",children:"\u57CE\u5E02"}),t(E,{className:"h-4 w-4"}),t("a",{href:"#",onClick:()=>history.back(),children:"\u666F\u9EDE"}),t(E,{className:"h-4 w-4"}),n==null?void 0:n.Name]}),t("section",{className:"my-4 border rounded-lg h-[310px]",style:c}),o("section",{className:"my-4 flex flex-col border border-gray rounded-lg bg-white p-10",children:[o("p",{className:"my-2 flex flex-row content-center items-center",children:[t(Se,{className:"h-5 w-5 mr-1 min-w-[20px]"}),"\u5730\u5740: ",(n==null?void 0:n.Address)||"\u8CC7\u8A0A\u5F85\u88DC"]}),o("p",{className:"my-2 flex flex-row content-center items-center",children:[t(Be,{className:"h-5 w-5 mr-1 min-w-[20px]"}),"\u96FB\u8A71: ",(n==null?void 0:n.Phone)||"\u8CC7\u8A0A\u5F85\u88DC"]}),o("p",{className:"my-2 flex flex-row content-center items-center",children:[t(ve,{className:"h-5 w-5 mr-1 min-w-[20px]"}),"\u958B\u653E\u6642\u9593: ",(n==null?void 0:n.OpenTime)||"\u8CC7\u8A0A\u5F85\u88DC"]})]}),o("section",{className:"my-3 py-6",children:[t("h1",{className:"text-2xl font-bold mb-4",children:n==null?void 0:n.Name}),t("p",{children:n==null?void 0:n.DescriptionDetail})]}),t("section",{className:"my-4 border-0 border-transparent shadow rounded-lg overflow-hidden h-[310px] w-full",children:t(ut,{lat:(n==null?void 0:n.Position.PositionLat)||0,lon:(n==null?void 0:n.Position.PositionLon)||0})})]})}const ae=({children:e})=>{ee.config({barColors:{"0":"#00f395","1.0":"#fff"},shadowBlur:5});const[l,s]=i.exports.useState(!1),[a,n]=i.exports.useState(""),c=_();return i.exports.useEffect(()=>{n(c.pathname),s(!0),c.pathname===a&&n("")},[c]),i.exports.useEffect(()=>{s(!1)},[a]),o(x,{children:[l&&t(ee,{}),t(Ne,{children:e})]})};function ot(){return t(Ie,{children:o("div",{className:"h-screen flex flex-col",children:[o(ae,{children:[t(b,{exact:!0,path:"/2021-F2E-Week1/home",children:t(ne,{headerStyle:"home"})}),t(b,{children:t(ne,{headerStyle:"pages"})})]}),t("main",{className:"container px-5 mb-20 mx-auto",children:t(ae,{children:o(Pe,{ReactRouterRoute:b,children:[t(b,{exact:!0,path:"/2021-F2E-Week1/home",component:_e}),t(b,{exact:!0,path:"/2021-F2E-Week1/scenicSpot",component:nt}),t(b,{path:"/2021-F2E-Week1/scenicSpot/:id",component:rt}),t(Le,{to:"/2021-F2E-Week1/home"})]})})}),o("footer",{className:"flex flex-col justify-center items-center bg-black text-white text-center text-sm p-4",children:[t("div",{children:"\u53F0\u7063\u65C5\u904A\u5C0E\u89BD"}),o("small",{className:"flex flex-row items-center",children:[t(te,{className:"h-2 w-2"}),"\u5341\u842C\u584A\u7684\u661F\u4E4B\u788E\u7247\u88FD\u4F5C\u51FA\u54C1 ",t(te,{className:"h-2 w-2"})]})]})]})})}Te.render(t(je.StrictMode,{children:t(ot,{})}),document.getElementById("root"));
