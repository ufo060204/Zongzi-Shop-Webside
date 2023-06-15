import{_ as u,L as g,c as h,b as t,d as c,w as n,t as m,F as p,r,o as b,h as a}from"./index-74925d86.js";const{VITE_APP_URL:f,VITE_APP_PATH:x}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"ufo060204",BASE_URL:"/Zongzi-Shop-Webside/",MODE:"production",DEV:!1,PROD:!0},v={data(){return{article:{},isLoading:!1,color:"#FF700C"}},components:{Loading:g},methods:{getArticle(){this.isLoading=!0;const l=document.querySelector(".zongzi-text"),{id:o}=this.$route.params;this.$http.get(`${f}v2/api/${x}/article/${o}`).then(e=>{this.article=e.data.article,l.innerHTML=e.data.article.content,this.isLoading=!1}).catch(e=>{alert(e.message)})}},mounted(){this.getArticle()}},y=t("section",{class:"landing-img landing-header"},null,-1),A={class:"bg-bg"},L={class:"container-lg"},P={class:"pb-8"},V={class:"pt-8 d-flex align-items-end"},T={"aria-label":"breadcrumb"},w={class:"breadcrumb"},E={class:"breadcrumb-item"},k={class:"breadcrumb-item"},z=t("li",{class:"breadcrumb-item active","aria-current":"page"},"最新消息",-1),U={class:"row g-0 justify-content-center"},B={class:"col-lg-9"},D=["src"],F={class:"col-lg-9"},I={class:"card-body h-100 bg-bg border-0 d-md-flex flex-column justify-content-between"},R={class:"fw-bolder fs-4 py-4 text-center"},S=t("div",{class:"zongzi-text fs-5"},null,-1),$={class:"col-lg-9 btn d-block py-3 fs-5 fw-bold text-decoration-none border border-text-dark",type:"button"};function C(l,o,e,H,s,N){const d=r("loading"),i=r("router-link");return b(),h(p,null,[y,t("section",A,[t("div",L,[c(d,{active:s.isLoading,"onUpdate:active":o[0]||(o[0]=_=>s.isLoading=_),"can-cancel":!1,color:s.color},null,8,["active","color"]),t("main",P,[t("div",V,[t("nav",T,[t("ol",w,[t("li",E,[c(i,{to:"/"},{default:n(()=>[a("首頁")]),_:1})]),t("li",k,[c(i,{to:"/products"},{default:n(()=>[a("美味專區")]),_:1})]),z])])]),t("div",U,[t("div",B,[t("img",{style:{height:"100%"},src:s.article.imageUrl,class:"text-center img-fluid rounded-start",alt:"imageUrl"},null,8,D)]),t("div",F,[t("div",I,[t("div",null,[t("h1",R,m(s.article.description),1),S])])]),t("button",$,[c(i,{class:"text-decoration-none text-text-dark",to:"/products",title:"前往產品頁面"},{default:n(()=>[a("前往產品")]),_:1})])])])])])],64)}const M=u(v,[["render",C]]);export{M as default};