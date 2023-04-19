import{_ as T,m as S,a as w,c as l,d as _,b as t,w as f,F as g,l as C,f as h,H as k,I as N,t as n,g as a,e as I,r as v,o as i,J as P}from"./index-ae658158.js";import{c as m}from"./cart-a10d9ba1.js";import{S as r}from"./sweetalert2.all-9f5f8b95.js";const A="/Zongzi-Shop-Webside/assets/SignWarning-9b2bf6aa.png";const{VITE_APP_URL:y,VITE_APP_PATH:x}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"ufo060204",BASE_URL:"/Zongzi-Shop-Webside/",MODE:"production",DEV:!1,PROD:!0},B={data(){return{products:[],productId:"",loadingItem:"",couponCode:"",isLoading:!1,color:"#FF700C",form:{user:{name:"",mail:"",tel:"",address:""},message:""}}},computed:{...S(m,["cart","total","final_total"])},methods:{...w(m,["getCarts"]),updateCartItem(s){const o={product_id:s.product.id,qty:s.qty};this.loadingItem=s.id,this.$http.put(`${y}/v2/api/${x}/cart/${s.id}`,{data:o}).then(c=>{this.getCarts(),this.loadingItem="",r.fire({icon:"success",title:"已更新數量",showConfirmButton:!1,timer:1500})}).catch(c=>{r.fire(c.data.message)})},checkCoupon(){const s={code:this.couponCode},o=`${y}/v2/api/${x}/coupon`;this.$http.post(o,{data:s}).then(c=>{c.data.success===!0?r.fire("套用成功","已套用優惠券 zongzi40","success"):c.data.success===!1&&r.fire({icon:"error",title:"套用失敗",text:"找不到優惠券QQ",footer:'<a href="https://ufo060204.github.io/Zongzi-Shop-Webside/#/home/-NR8JzTIYKZ08sSYBdjQ">前往領取優惠碼'}),this.getCarts()}).catch(c=>{r.fire(c.response.data.message)})},...w(m,["deleteCartItem"]),deleteAllCart(){r.fire({title:"刪除確認?",text:"確定要清除購物車的所有商品嗎？",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"是的"}).then(s=>{s.isConfirmed&&this.$http.delete(`${y}/v2/api/${x}/carts`).then(o=>{this.getCarts(),r.fire("刪除成功","購物車的商品已清空","success")}).catch(o=>{r.fire(o.data.message)})})}},mounted(){this.getCarts()}},$=t("section",{class:"landing-img landing-header"},null,-1),j={class:"bg-bg"},z={class:"container-lg"},E={class:"py-8"},L={key:0,class:"row d-flex align-items-center justify-content-center"},U={class:"col-md-6 col-10 d-flex align-items-center justify-content-center flex-column py-6 border border-text-light bg-bg"},D=t("h1",{class:"fs-2"},"購物車",-1),R=t("img",{class:"my-6 img-fluid",style:{height:"150px"},src:A,alt:"SignWarning"},null,-1),W=t("h2",{class:"fs-4"},"您的購物車中沒有商品",-1),q={key:1},F=I('<ul class="list-unstyled d-md-flex justify-content-center text-center"><li class="bg-white border border-boderlight py-3 px-7">確認商品</li><li class="d-flex align-items-center justify-content-center px-1"><i class="bi bi-chevron-right fs-4 text-text-light shopping-process-icon"></i></li><li class="border border-boderlight py-3 px-7">填寫資料</li><li class="d-flex align-items-center justify-content-center px-1"><i class="bi bi-chevron-right fs-4 text-text-light shopping-process-icon"></i></li><li class="border border-boderlight py-3 px-7">確認付款</li><li class="d-flex align-items-center justify-content-center px-1"><i class="bi bi-chevron-right fs-4 text-text-light shopping-process-icon"></i></li><li class="border border-boderlight py-3 px-7">完成付款</li></ul>',1),Z={class:"text-end mb-3"},H={class:"text-center container-lg border border-white border-2 mb-3"},M=I('<ul class="bg-text-dark list-unstyled row mobile-cart mb-0"><li class="fs-5 fw-bold text-white py-2 col-4 border-end border-white">圖片</li><li class="fs-5 fw-bold text-white py-2 col-2 border-end border-white">品名</li><li class="fs-5 fw-bold text-white py-2 col-2 border-end border-white">單價</li><li class="fs-5 fw-bold text-white py-2 col-1 border-end border-white">數量</li><li class="fs-5 fw-bold text-white py-2 col-2 border-end border-white">小計</li><li class="fs-5 fw-bold text-white py-2 col-1">刪除</li></ul>',1),Q={class:"col-md-4 col-6"},J=["src"],O={class:"col-md-8 col-6"},Y={class:"row align-items-center"},K={class:"col-md-3 my-1"},G={key:0,class:"text-success d-block fs-6"},X={class:"col-md-3 my-1"},tt={class:"col-md my-1"},et={class:"input-group input-group-sm"},st=["onUpdate:modelValue","onChange","disabled"],ot=["value"],lt={key:0,class:"fw-bold col-md-3 my-1"},it={key:1,class:"fw-bold col-md-3 my-1"},nt={class:"fs-6 text-decoration-line-through"},ct={class:"col-md my-1"},at=["onClick","disabled"],rt={key:0,class:"fas fa-spinner fa-pulse"},dt={class:"list-unstyled row py-3 mb-0"},ht=t("li",{class:"col-lg-7"},null,-1),ut={class:"col-lg-5"},_t={class:"input-group"},pt={class:"list-unstyled row mb-0"},bt=t("li",{class:"col-lg-8 py-2 mobile-cart"},null,-1),ft=t("li",{class:"col-lg-2 col-6 py-2 bg-text-dark text-white fw-bolder fs-4 d-flex align-items-center justify-content-center"}," 總計 ",-1),gt={key:0,class:"col-lg-2 py-2 col-6 text-end fs-4 fw-bolder text-black bg-white"},mt={key:1,class:"col-lg-2 py-2 col-6 text-end fs-4 fw-bolder text-black bg-white"},yt={class:"text-danger fs-3"},xt={class:"fs-5 text-decoration-line-through"},wt={class:"d-flex justify-content-between align-items-center"},Ct=t("i",{class:"bi bi-arrow-left"},null,-1),kt=t("i",{class:"bi bi-arrow-right"},null,-1);function vt(s,o,c,It,d,p){const V=v("VueLoading"),b=v("router-link");return i(),l(g,null,[$,_(V,{active:d.isLoading,color:d.color,"z-index":9999},null,8,["active","color"]),t("section",j,[t("div",z,[t("main",E,[s.cart.length===0?(i(),l("div",L,[t("div",U,[D,R,W,_(b,{to:"/products",class:"btn btn-primary d-inline-block text-white py-3 px-7 fs-5 fw-bold text-decoration-none"},{default:f(()=>[a("前往購物")]),_:1})])])):(i(),l("div",q,[F,t("div",Z,[t("button",{class:"btn btn-outline-danger rounded-0",type:"button",onClick:o[0]||(o[0]=()=>p.deleteAllCart())}," 清空購物車 ")]),t("div",H,[M,s.cart?(i(!0),l(g,{key:0},C(s.cart,e=>(i(),l("ul",{class:"fs-4 list-unstyled row align-items-center border-bottom py-3 mb-0 border-white",key:e.id},[t("li",Q,[t("img",{src:e.product.imageUrl,class:"table-image",alt:"imageUrl"},null,8,J)]),t("div",O,[t("div",Y,[t("li",K,[a(n(e.product.title)+" ",1),e.coupon?(i(),l("span",G,"已套用優惠券")):h("",!0)]),t("li",X,"NT$ "+n(e.product.price),1),t("li",tt,[t("div",et,[k(t("select",{name:"",id:"",class:"form-control text-center","onUpdate:modelValue":u=>e.qty=u,onChange:u=>p.updateCartItem(e),disabled:e.id===d.loadingItem},[(i(),l(g,null,C(100,u=>t("option",{value:u,key:u+"1234"},n(u),9,ot)),64))],40,st),[[P,e.qty]])])]),this.total===this.final_total?(i(),l("li",lt," NT$ "+n(e.total),1)):h("",!0),this.total!==this.final_total?(i(),l("li",it,[a(" NT$ "+n(e.final_total)+" ",1),t("span",nt,n(e.total),1)])):h("",!0),t("li",ct,[t("button",{type:"button",class:"btn btn-outline-text-dark btn-sm",onClick:()=>s.deleteCartItem(e),disabled:e.id===d.loadingItem},[d.loadingItem===e.id?(i(),l("i",rt)):h("",!0),a(" x ")],8,at)])])])]))),128)):h("",!0),t("ul",dt,[ht,t("li",ut,[t("div",_t,[k(t("input",{type:"text",class:"form-control rounded-0 py-2",placeholder:"請輸入優惠代碼","onUpdate:modelValue":o[1]||(o[1]=e=>d.couponCode=e)},null,512),[[N,d.couponCode]]),t("button",{type:"btn",class:"btn btn-outline-zongzi rounded-0",onClick:o[2]||(o[2]=()=>p.checkCoupon())},"套用優惠碼")])])]),t("ul",pt,[bt,ft,this.total===this.final_total?(i(),l("li",gt,"NT$ "+n(s.total),1)):h("",!0),this.total!==this.final_total?(i(),l("li",mt,[a("NT$ "),t("span",yt,n(s.final_total),1),a(),t("span",xt,n(s.total),1)])):h("",!0)])]),t("div",wt,[_(b,{to:"/products",class:"text-decoration-none btn btn-outline-text-light rounded-0"},{default:f(()=>[Ct,a("上一頁")]),_:1}),_(b,{to:"/checkout",class:"text-decoration-none btn btn-outline-text-light rounded-0"},{default:f(()=>[a("下一步"),kt]),_:1})])]))])])])],64)}const Nt=T(B,[["render",vt]]);export{Nt as default};