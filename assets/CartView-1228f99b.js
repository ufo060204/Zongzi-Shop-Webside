import{_ as v,m as w,a as b,r as I,o,c as n,b as t,d as _,w as p,F as h,n as f,g as y,t as l,e as V,f as d,s as E,v as P}from"./index-6bafa8fa.js";import{c as m}from"./cart-7537e2d4.js";import{S as x}from"./sweetalert2.all-9d04cdfb.js";import{_ as A}from"./SignWarning-aa527034.js";const{VITE_APP_URL:k,VITE_APP_PATH:C}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"ufo060204",BASE_URL:"/Vue-Week7-Homework/",MODE:"production",DEV:!1,PROD:!0},T={data(){return{products:[],productId:"",loadingItem:"",form:{user:{name:"",mail:"",tel:"",address:""},message:""}}},computed:{...w(m,["cart","total","final_total"])},methods:{...b(m,["getCarts"]),updateCartItem(e){const r={product_id:e.product.id,qty:e.qty};this.loadingItem=e.id,this.$http.put(`${k}/v2/api/${C}/cart/${e.id}`,{data:r}).then(c=>{this.getCarts(),this.loadingItem="",x.fire({icon:"success",title:"已更新數量",showConfirmButton:!1,timer:1500})}).catch(c=>{alert(c.data.message)})},...b(m,["deleteCartItem"]),deleteAllCart(){this.$http.delete(`${k}/v2/api/${C}/carts`).then(e=>{this.getCarts(),x.fire({icon:"success",title:"刪除全部品項成功",showConfirmButton:!1,timer:1500})}).catch(e=>{alert(e.data.message)})}},mounted(){this.getCarts()}},$=t("section",{style:{height:"88px","background-image":"url(../../../src/assets/images/landing.png)","background-repeat":"no-repeat","background-size":"cover","background-position":"left top","background-attachment":"fixed"}},null,-1),S={style:{"background-image":"url(../../../src/assets/images/texture1.png)"}},D={class:"container-md"},F={class:"py-8"},N={key:0,class:"row d-flex align-items-center justify-content-center"},U={class:"col-6 d-flex align-items-center justify-content-center flex-column py-6 border border-text-dark bg-bg"},B=t("h1",null,"購物車",-1),j=t("img",{class:"my-6",style:{height:"150px"},src:A,alt:"SignWarning"},null,-1),q=t("h2",null,"您的購物車中沒有商品",-1),L={key:1},R=V('<ul class="list-unstyled d-md-flex justify-content-center"><li class="bg-primary py-3 px-7 me-6">確認商品</li><li style="background-color:#FFE8D9;" class="py-3 px-7 me-6">填寫資料</li><li style="background-color:#FFE8D9;" class="py-3 px-7 me-6">確認付款</li><li style="background-color:#FFE8D9;" class="py-3 px-7">完成付款</li></ul>',1),H={class:"text-end"},M={class:"table align-middle table-borderless text-center"},O=t("thead",null,[t("tr",{class:"fs-5"},[t("th"),t("th",null,"圖片"),t("th",null,"品名"),t("th",{style:{width:"150px"}},"數量/單位"),t("th",null,"單價"),t("th",null,"小計")])],-1),W={class:"border-bottom border-top border-text-dark border-2"},z={width:"100"},G=["onClick","disabled"],J={key:0,class:"fas fa-spinner fa-pulse"},K={width:"100"},Q=["src"],X={class:"input-group input-group-sm"},Y=["onUpdate:modelValue","onChange","disabled"],Z=["value"],tt={class:"fw-bold"},et={colspan:"6",class:"text-end fs-4 fw-bolder text-primary"},st={class:"d-md-flex justify-content-md-between align-items-md-center"},ot=t("div",{class:"d-md-flex"},null,-1);function nt(e,r,c,at,i,g){const u=I("router-link");return o(),n(h,null,[$,t("section",S,[t("div",D,[t("main",F,[e.cart.length===0?(o(),n("div",N,[t("div",U,[B,j,q,_(u,{to:"/products",class:"add-cart-text d-inline-block text-white py-3 px-7 fs-5 fw-bold text-decoration-none border border-text-dark"},{default:p(()=>[d("前往購物")]),_:1})])])):(o(),n("div",L,[R,t("div",H,[t("button",{class:"btn btn-outline-danger",type:"button",onClick:r[0]||(r[0]=()=>g.deleteAllCart())}," 清空購物車 ")]),t("table",M,[O,t("tbody",W,[e.cart?(o(!0),n(h,{key:0},f(e.cart,s=>(o(),n("tr",{class:"fs-4",key:s.id},[t("td",z,[t("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:()=>e.deleteCartItem(s),disabled:s.id===i.loadingItem},[i.loadingItem===s.id?(o(),n("i",J)):y("",!0),d(" x ")],8,G)]),t("td",K,[t("img",{src:s.product.imageUrl,class:"table-image",alt:"imageUrl"},null,8,Q)]),t("td",null,l(s.product.title)+" ",1),t("td",null,[t("div",X,[E(t("select",{name:"",id:"",class:"form-control","onUpdate:modelValue":a=>s.qty=a,onChange:a=>g.updateCartItem(s),disabled:s.id===i.loadingItem},[(o(),n(h,null,f(20,a=>t("option",{value:a,key:a+"1234"},l(a),9,Z)),64))],40,Y),[[P,s.qty]])])]),t("td",null,"NT$ "+l(s.product.price),1),t("td",tt," NT$ "+l(s.total),1)]))),128)):y("",!0)]),t("tfoot",null,[t("tr",null,[t("td",et,"總計：NT$ "+l(e.total),1)])])]),t("div",st,[_(u,{to:"/products",class:"text-decoration-none fw-bold me-6 btn btn-outline-primary"},{default:p(()=>[d("上一頁")]),_:1}),ot,_(u,{to:"/checkout",class:"text-decoration-none fw-bold me-6 btn btn-outline-primary"},{default:p(()=>[d("下一步")]),_:1})])]))])])])],64)}const it=v(T,[["render",nt]]);export{it as default};
