import{_ as p,R as v,c as m,b as a,d as e,w as o,s as f,G as g,f as k,F as b,r,o as d,g as n}from"./index-ae658158.js";import{S as _}from"./sweetalert2.all-9f5f8b95.js";const{VITE_APP_URL:V}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"ufo060204",BASE_URL:"/Zongzi-Shop-Webside/",MODE:"production",DEV:!1,PROD:!0},$={data(){return{status:!1}},components:{RouterView:v},methods:{logout(){document.cookie=`ufoToken=; expires=${new Date};`,this.$router.push("/login")},checkLogin(){const l=document.cookie.replace(/(?:(?:^|.*;\s*)ufoToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=l;const c=`${V}api/user/check`;this.$http.post(c).then(s=>{s.data.success||(_.fire(s.data.message),this.$router.push("/login"))}).catch(s=>{this.$router.push("/"),_.fire(s.response)})}},mounted(){this.checkLogin()}},w={class:"navbar navbar-expand-lg bg-light"},x={class:"container-fluid"},P=a("a",{class:"navbar-brand",href:"#"},"後台頁面",-1),R=a("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[a("span",{class:"navbar-toggler-icon"})],-1),T={class:"collapse navbar-collapse",id:"navbarNav"},E={class:"navbar-nav"},N={class:"nav-item"},A={class:"nav-item"},B={class:"nav-item"},L={class:"nav-item"},D={class:"nav-item"},C={class:"nav-item"},S={class:"container"};function I(l,c,s,U,y,i){const t=r("router-link"),u=r("RouterView");return d(),m(b,null,[a("nav",w,[a("div",x,[P,R,a("div",T,[a("ul",E,[a("li",N,[e(t,{to:"/admin/products",class:"nav-link"},{default:o(()=>[n("後台產品列表")]),_:1})]),a("li",A,[e(t,{to:"/admin/article",class:"nav-link"},{default:o(()=>[n("後台文章列表")]),_:1})]),a("li",B,[e(t,{to:"/admin/orders",class:"nav-link"},{default:o(()=>[n("後台訂單列表")]),_:1})]),a("li",L,[e(t,{to:"/admin/coupons",class:"nav-link"},{default:o(()=>[n("後台優惠券列表")]),_:1})]),a("li",D,[e(t,{to:"/",class:"nav-link"},{default:o(()=>[n("回前台首頁")]),_:1})]),a("li",C,[a("a",{href:"#",onClick:c[0]||(c[0]=f((...h)=>i.logout&&i.logout(...h),["prevent"])),class:"nav-link"},"登出")])])])])]),a("div",S,[i.checkLogin?(d(),g(u,{key:0})):k("",!0)])],64)}const M=p($,[["render",I]]);export{M as default};
