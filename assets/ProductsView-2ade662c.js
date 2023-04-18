import{_ as m,L as f,a as v,c as l,b as t,d,n as c,F as u,l as x,r as p,o as a,w as y,q as P,g as k,t as r,s as w}from"./index-d673ae41.js";import{c as L}from"./cart-7b461017.js";import"./sweetalert2.all-563a6f37.js";const{VITE_APP_URL:_,VITE_APP_PATH:g}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"ufo060204",BASE_URL:"/Zongzi-Shop-Webside/",MODE:"production",DEV:!1,PROD:!0},A={data(){return{products:[],page:{},isLoading:!1,color:"#FF700C",fullPage:!0,isActive:"全部"}},components:{Loading:f},methods:{getProducts(){this.isLoading=!0,this.$http.get(`${_}v2/api/${g}/products/all`).then(s=>{this.products=s.data.products,this.isLoading=!1}).catch(s=>{alert(s.response.data.message)})},productFilter(s){this.isLoading=!0,this.isActive=s,s==="全部"?this.getProducts():this.$http.get(`${_}v2/api/${g}/products?category=${s}`).then(e=>{this.products=e.data.products,this.isLoading=!1}).catch(e=>{alert(e.response.data.message)})},...v(L,["addToCart"])},mounted(){this.getProducts()}},C=t("section",{class:"landing-img landing-header"},null,-1),T={class:"bg-bg"},V={class:"container-lg"},F={class:"py-8"},E=t("h1",{class:"text-center fs-2 pb-6 fw-bold"},"產品一覽",-1),S={class:"row"},U={class:"btn-group mb-4 mx-auto col-lg-6"},B={"data-aos":"fade-up","data-aos-duration":"3000",class:"row row-cols-1 row-cols-md-3"},D=t("div",{class:"text-decoration-none product-text stretched-link"}," 查看更多 ",-1),I=[D],N={class:"bg-white p-6 card-body"},R={class:"d-flex flex-column justify-content-between h-100"},z={class:"mb-3"},j={class:"text-text-dark fw-500 text-center mb-3"},H={style:{"margin-top":"10px"},class:"d-block fs-5"},M={class:"lh-lg text-text-dark"},O={class:"text-center"},q=["onClick"];function W(s,e,Z,$,o,n){const h=p("Loading"),b=p("router-link");return a(),l(u,null,[C,t("section",T,[t("div",V,[d(h,{active:o.isLoading,"onUpdate:active":e[0]||(e[0]=i=>o.isLoading=i),"can-cancel":!1,color:o.color,"is-full-page":o.fullPage},null,8,["active","color","is-full-page"]),t("main",F,[E,t("div",S,[t("div",U,[t("button",{type:"button",class:c(["btn btn-outline-text-light",{active:o.isActive==="全部"}]),onClick:e[1]||(e[1]=()=>n.productFilter(s.category="全部"))},"全部",2),t("button",{type:"button",class:c(["btn btn-outline-text-light",{active:o.isActive==="鹹粽"}]),onClick:e[2]||(e[2]=()=>n.productFilter(s.category="鹹粽"))},"鹹粽",2),t("button",{type:"button",class:c(["btn btn-outline-text-light",{active:o.isActive==="甜粽"}]),onClick:e[3]||(e[3]=()=>n.productFilter(s.category="甜粽"))},"甜粽",2),t("button",{type:"button",class:c(["btn btn-outline-text-light",{active:o.isActive==="其他"}]),onClick:e[4]||(e[4]=()=>n.productFilter(s.category="其他"))},"其他",2)])]),t("div",B,[(a(!0),l(u,null,x(o.products,i=>(a(),l("div",{key:i.id,class:"col d-md-flex"},[d(b,{to:`/product/${i.id}`,class:"border-0 card mb-6 p-0"},{default:y(()=>[t("div",{style:P({"background-image":`url(${i.imageUrl})`}),class:"product-img d-md-flex justify-content-md-center align-items-md-center text-decoration-none"},I,4),t("div",N,[t("div",R,[t("div",null,[t("div",z,[t("h4",j,[k(r(i.title)+" ",1),t("span",H,"$NT "+r(i.price)+" 元",1)])]),t("p",M,r(i.content),1)]),t("div",O,[t("button",{onClick:w(()=>s.addToCart(i.id),["prevent"]),type:"button",class:"btn btn-text-light cart-hover text-white w-100 d-block py-3 fs-5 fw-bold"}," 加入購物車 ",8,q)])])])]),_:2},1032,["to"])]))),128))])])])])],64)}const Q=m(A,[["render",W]]);export{Q as default};
