import{_ as u,L as p,a as h,r as a,o as b,c as m,b as t,d as i,w as r,t as s,f as c,F as g}from"./index-face757b.js";import{c as f}from"./cart-9ffd31ec.js";import"./sweetalert2.all-4e3cb76a.js";const{VITE_APP_URL:x,VITE_APP_PATH:v}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"ufo060204",BASE_URL:"/Zongzi-Shop-Webside/",MODE:"production",DEV:!1,PROD:!0},y={data(){return{product:{},isLoading:!1,color:"#FF700C"}},components:{Loading:p},methods:{getProduct(){this.isLoading=!0;const{id:n}=this.$route.params;this.$http.get(`${x}v2/api/${v}/product/${n}`).then(e=>{this.product=e.data.product,this.isLoading=!1}).catch(e=>{alert(e.message)})},...h(f,["addToCart"])},mounted(){this.getProduct()}},P=t("section",{class:"landing-img landing-header"},null,-1),w={class:"bg-bg"},k={class:"container-md"},L={class:"py-8"},V={class:"card border-0 mb-3"},A={class:"row g-0"},T={class:"col-md-6"},E=["src"],C={class:"col-md-6"},B={style:{"padding-right":"96px","padding-left":"96px",height:"100%",border:"1px solid #BFB5AC"},class:"card-body bg-bg rounded d-md-flex flex-column justify-content-between"},U={"aria-label":"breadcrumb"},F={class:"breadcrumb"},D={class:"breadcrumb-item"},I={class:"breadcrumb-item"},R=t("li",{class:"breadcrumb-item active","aria-current":"page"},"產品",-1),S={style:{"font-size":"40px"},class:"card-title fw-bold"},j={class:"fw-bold"},z=t("h5",{class:"fw-bold"},"介紹：",-1),N={class:"card-text fs-5"},H={class:"d-flex align-items-center justify-content-end"},O={class:"text-decoration-line-through"},M={style:{"font-size":"32px"}},W={class:"text-primary fw-bold"},Z={class:"d-flex justify-content-between"},q={class:"back d-inline-block py-3 px-7 fs-5 fw-bold text-decoration-none border border-text-dark",type:"button"};function G(n,e,J,K,o,Q){const l=a("loading"),d=a("router-link");return b(),m(g,null,[P,t("section",w,[t("div",k,[i(l,{active:o.isLoading,"onUpdate:active":e[0]||(e[0]=_=>o.isLoading=_),"can-cancel":!1,color:o.color},null,8,["active","color"]),t("main",L,[t("div",V,[t("div",A,[t("div",T,[t("img",{style:{height:"100%"},src:o.product.imageUrl,class:"img-fluid rounded-start",alt:"imageUrl"},null,8,E)]),t("div",C,[t("div",B,[t("div",null,[t("nav",U,[t("ol",F,[t("li",D,[i(d,{to:"/"},{default:r(()=>[c("首頁")]),_:1})]),t("li",I,[i(d,{to:"/products"},{default:r(()=>[c("美味專區")]),_:1})]),R])])]),t("div",null,[t("h1",S,s(o.product.title),1),t("h5",j,"分類："+s(o.product.category),1),z,t("p",N,s(o.product.description),1),t("div",H,[t("h5",O,"原價$ "+s(o.product.origin_price),1),t("h4",M,[c("$ "),t("span",W,s(o.product.price),1),c(" 元 / "+s(o.product.unit),1)])])]),t("div",Z,[t("button",q,[i(d,{class:"text-decoration-none text-text-dark",to:"/products",title:"回到產品頁面"},{default:r(()=>[c("返回")]),_:1})]),t("button",{type:"button",class:"add-cart-text d-inline-block text-white py-3 px-7 fs-5 fw-bold text-decoration-none border border-text-dark",onClick:e[1]||(e[1]=()=>n.addToCart(o.product.id))},"加入購物車")])])])])])])])])],64)}const tt=u(y,[["render",G]]);export{tt as default};
