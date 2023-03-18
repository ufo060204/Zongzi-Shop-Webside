import{_ as p,l as m,L as g,a as h,r as c,o as n,c as a,b as t,d as r,F as l,n as f,q as x,w as b,f as v,t as d}from"./index-face757b.js";import{c as P}from"./cart-9ffd31ec.js";import"./sweetalert2.all-4e3cb76a.js";const{VITE_APP_URL:k,VITE_APP_PATH:y}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"ufo060204",BASE_URL:"/Zongzi-Shop-Webside/",MODE:"production",DEV:!1,PROD:!0},L={data(){return{products:[],page:{},isLoading:!1,color:"#FF700C",fullPage:!0}},components:{RouterLink:m,Loading:g},methods:{getProducts(){this.isLoading=!0,this.$http.get(`${k}v2/api/${y}/products/all`).then(o=>{this.products=o.data.products,this.isLoading=!1,console.log("產品列表",this.products)}).catch(o=>{alert(o.message)})},...h(P,["addToCart"])},mounted(){this.getProducts()}},w=t("section",{class:"landing-img landing-header"},null,-1),V={class:"bg-bg"},T={class:"container-md"},A={class:"py-8"},E=t("h1",{class:"text-center fs-2 pb-6 fw-bold"},"美味專區",-1),C={"data-aos":"fade-up","data-aos-duration":"3000",class:"row row-cols-3"},R={class:"border-0 px-7"},S={class:"mb-3"},U={class:"m-0 text-text-dark fw-bold text-center mb-3"},$={style:{"font-size":"32px"},class:"m-0 text-primary fw-bold text-center"},B={class:"text-center"},D=["onClick"];function F(o,i,I,z,s,N){const _=c("loading"),u=c("router-link");return n(),a(l,null,[w,t("section",V,[t("div",T,[t("main",A,[E,r(_,{active:s.isLoading,"onUpdate:active":i[0]||(i[0]=e=>s.isLoading=e),"can-cancel":!1,color:s.color,"is-full-page":s.fullPage},null,8,["active","color","is-full-page"]),t("div",C,[(n(!0),a(l,null,f(s.products,e=>(n(),a("div",{key:e.id,class:"col mb-7"},[t("div",R,[t("div",{style:x({"background-image":`url(${e.imageUrl})`}),class:"product-img d-md-flex justify-content-md-center align-items-md-center"},[r(u,{class:"text-decoration-none product-text stretched-link",to:`/product/${e.id}`},{default:b(()=>[v(" 查看更多 ")]),_:2},1032,["to"])],4),t("div",null,[t("div",S,[t("h4",U,d(e.title),1),t("p",$," $ "+d(e.price)+" 元 ",1)]),t("div",B,[t("button",{onClick:()=>o.addToCart(e.id),type:"button",class:"cart-hover text-text-dark d-inline-block py-3 px-7 fs-5 fw-bold text-decoration-none border border-text-dark"}," 加入購物車 ",8,D)])])])]))),128))])])])])],64)}const q=p(L,[["render",F]]);export{q as default};
