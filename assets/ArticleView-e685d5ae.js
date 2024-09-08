import{L as p}from"./index-0033c180.js";import{S as m}from"./sweetalert2.all-6567ce3e.js";/* empty css              */import{_ as g,ac as h,ad as t,z as n,bi as a,b5 as b,M as f,k as r,l as x,ah as d}from"./_plugin-vue_export-helper-ddde7e51.js";import"./_commonjsHelpers-042e6b4d.js";import"./runtime-dom.esm-bundler-8357395d.js";const{VITE_APP_URL:v,VITE_APP_PATH:z}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"ufo060204",BASE_URL:"/Zongzi-Shop-Webside/",MODE:"production",DEV:!1,PROD:!0},w={data(){return{article:{},isLoading:!1,color:"#FF700C"}},components:{Loading:p},methods:{getArticle(){this.isLoading=!0;const i=document.querySelector(".zongzi-text"),{id:e}=this.$route.params;this.$http.get(`${v}v2/api/${z}/article/${e}`).then(o=>{this.article=o.data.article,i.innerHTML=o.data.article.content,this.isLoading=!1}).catch(o=>{alert(o.message)})},copyCouponCode(i){navigator.clipboard.writeText(i).then(()=>{m.fire({icon:"success",showConfirmButton:!1,title:"優惠碼複製成功！",timer:1e3})})}},mounted(){this.getArticle()}},L=t("section",{class:"landing-img landing-header"},null,-1),P={class:"bg-bg"},y={class:"container-lg"},A={class:"pb-7 pb-lg-8"},T={class:"pt-7 pt-lg-8 d-flex align-items-end"},C={"aria-label":"breadcrumb"},V={class:"breadcrumb"},E={class:"breadcrumb-item"},k={class:"breadcrumb-item"},S=t("li",{class:"breadcrumb-item active","aria-current":"page"},"最新消息",-1),U={class:"row g-0 justify-content-center"},B={class:"col-lg-9"},D=["src"],I={class:"col-lg-9 mb-3"},R={class:"card-body h-100 bg-bg border-0 d-md-flex flex-column justify-content-between"},$={class:"fw-bolder fs-4 pt-4 pb-2 text-center"},F={class:"text-center pb-2"},H=t("div",{class:"zongzi-text fs-5"},null,-1),M={class:"col-lg-9"},N=t("span",{class:"mx-auto"},"前往產品",-1),j=t("span",{class:"material-symbols-outlined"}," arrow_forward ",-1);function O(i,e,o,q,s,_){const u=r("loading"),c=r("router-link");return x(),h(f,null,[L,t("section",P,[t("div",y,[n(u,{active:s.isLoading,"onUpdate:active":e[0]||(e[0]=l=>s.isLoading=l),"can-cancel":!1,color:s.color},null,8,["active","color"]),t("main",A,[t("div",T,[t("nav",C,[t("ol",V,[t("li",E,[n(c,{to:"/"},{default:a(()=>[d("首頁")]),_:1})]),t("li",k,[n(c,{to:"/products"},{default:a(()=>[d("美味專區")]),_:1})]),S])])]),t("div",U,[t("div",B,[t("img",{src:s.article.imageUrl,class:"text-center img-fluid rounded-start h-100",alt:"imageUrl"},null,8,D)]),t("div",I,[t("div",R,[t("div",null,[t("h1",$,b(s.article.description),1),t("div",F,[t("button",{onClick:e[1]||(e[1]=l=>_.copyCouponCode("zongzi40")),type:"button",class:"btn btn-zongzi"},"馬上領取週年優惠！")]),H])])]),t("div",M,[n(c,{to:"/products",class:"btn d-flex aligns-center py-3 fs-5 fw-bold text-text-dark border border-text-light",title:"前往產品頁面"},{default:a(()=>[N,j]),_:1})])])])])])],64)}const X=g(w,[["render",O]]);export{X as default};