import{_ as u,L as g,c as h,b as t,e as i,g as n,t as m,F as p,r as l,o as b,j as r}from"./index-90a160f9.js";const{VITE_APP_URL:f,VITE_APP_PATH:x}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"ufo060204",BASE_URL:"/Zongzi-Shop-Webside/",MODE:"production",DEV:!1,PROD:!0},v={data(){return{article:{},isLoading:!1,color:"#FF700C"}},components:{Loading:g},methods:{getArticle(){this.isLoading=!0;const a=document.querySelector(".zongzi-text"),{id:o}=this.$route.params;this.$http.get(`${f}v2/api/${x}/article/${o}`).then(e=>{this.article=e.data.article,a.innerHTML=e.data.article.content,this.isLoading=!1}).catch(e=>{alert(e.message)})}},mounted(){this.getArticle()}},L=t("section",{class:"landing-img landing-header"},null,-1),P={class:"bg-bg"},A={class:"container-lg"},y={class:"pb-8"},T={class:"pt-8 d-flex align-items-end"},V={"aria-label":"breadcrumb"},w={class:"breadcrumb"},E={class:"breadcrumb-item"},z={class:"breadcrumb-item"},U=t("li",{class:"breadcrumb-item active","aria-current":"page"},"最新消息",-1),k={class:"row g-0 justify-content-center"},B={class:"col-lg-9"},D=["src"],F={class:"col-lg-9 mb-3"},I={class:"card-body h-100 bg-bg border-0 d-md-flex flex-column justify-content-between"},R={class:"fw-bolder fs-4 py-4 text-center"},S=t("div",{class:"zongzi-text fs-5"},null,-1),$={class:"col-lg-9"},j=t("span",{class:"mx-auto"},"前往產品",-1),C=t("span",{class:"material-symbols-outlined"}," arrow_forward ",-1);function H(a,o,e,N,s,M){const d=l("loading"),c=l("router-link");return b(),h(p,null,[L,t("section",P,[t("div",A,[i(d,{active:s.isLoading,"onUpdate:active":o[0]||(o[0]=_=>s.isLoading=_),"can-cancel":!1,color:s.color},null,8,["active","color"]),t("main",y,[t("div",T,[t("nav",V,[t("ol",w,[t("li",E,[i(c,{to:"/"},{default:n(()=>[r("首頁")]),_:1})]),t("li",z,[i(c,{to:"/products"},{default:n(()=>[r("美味專區")]),_:1})]),U])])]),t("div",k,[t("div",B,[t("img",{style:{height:"100%"},src:s.article.imageUrl,class:"text-center img-fluid rounded-start",alt:"imageUrl"},null,8,D)]),t("div",F,[t("div",I,[t("div",null,[t("h1",R,m(s.article.description),1),S])])]),t("div",$,[i(c,{to:"/products",class:"btn d-flex aligns-center py-3 fs-5 fw-bold text-text-dark border border-text-light",title:"前往產品頁面"},{default:n(()=>[j,C]),_:1})])])])])])],64)}const q=u(v,[["render",H]]);export{q as default};