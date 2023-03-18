import{_ as v,m as w,a as g,r as I,o,c as l,b as t,d as _,w as p,F as h,n as f,g as y,t as a,e as V,f as r,s as E,v as P}from"./index-face757b.js";import{c as m}from"./cart-9ffd31ec.js";import{S as x}from"./sweetalert2.all-4e3cb76a.js";import{_ as A}from"./SignWarning-4bb6e851.js";const{VITE_APP_URL:C,VITE_APP_PATH:k}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"ufo060204",BASE_URL:"/Zongzi-Shop-Webside/",MODE:"production",DEV:!1,PROD:!0},S={data(){return{products:[],productId:"",loadingItem:"",form:{user:{name:"",mail:"",tel:"",address:""},message:""}}},computed:{...w(m,["cart","total","final_total"])},methods:{...g(m,["getCarts"]),updateCartItem(e){const d={product_id:e.product.id,qty:e.qty};this.loadingItem=e.id,this.$http.put(`${C}/v2/api/${k}/cart/${e.id}`,{data:d}).then(i=>{this.getCarts(),this.loadingItem="",x.fire({icon:"success",title:"已更新數量",showConfirmButton:!1,timer:1500})}).catch(i=>{alert(i.data.message)})},...g(m,["deleteCartItem"]),deleteAllCart(){this.$http.delete(`${C}/v2/api/${k}/carts`).then(e=>{this.getCarts(),x.fire({icon:"success",title:"刪除全部品項成功",showConfirmButton:!1,timer:1500})}).catch(e=>{alert(e.data.message)})}},mounted(){this.getCarts()}},T=t("section",{class:"landing-img landing-header"},null,-1),$={class:"bg-bg"},D={class:"container-md"},F={class:"py-8"},N={key:0,class:"row d-flex align-items-center justify-content-center"},U={class:"col-6 d-flex align-items-center justify-content-center flex-column py-6 border border-text-dark bg-bg"},B=t("h1",null,"購物車",-1),j=t("img",{class:"my-6",style:{height:"150px"},src:A,alt:"SignWarning"},null,-1),q=t("h2",null,"您的購物車中沒有商品",-1),L={key:1},R=V('<ul class="list-unstyled d-md-flex justify-content-center"><li class="bg-primary py-3 px-7 me-6">確認商品</li><li style="background-color:#FFE8D9;" class="py-3 px-7 me-6">填寫資料</li><li style="background-color:#FFE8D9;" class="py-3 px-7 me-6">確認付款</li><li style="background-color:#FFE8D9;" class="py-3 px-7">完成付款</li></ul>',1),H={class:"text-end"},M={class:"table align-middle table-borderless text-center"},O=t("thead",null,[t("tr",{class:"fs-5"},[t("th"),t("th",null,"圖片"),t("th",null,"品名"),t("th",{style:{width:"150px"}},"數量/單位"),t("th",null,"單價"),t("th",null,"小計")])],-1),W={class:"border-bottom border-top border-text-dark border-2"},z={width:"100"},Z=["onClick","disabled"],G={key:0,class:"fas fa-spinner fa-pulse"},J={width:"100"},K=["src"],Q={class:"input-group input-group-sm"},X=["onUpdate:modelValue","onChange","disabled"],Y=["value"],tt={class:"fw-bold"},et={colspan:"6",class:"text-end fs-4 fw-bolder text-primary"},st={class:"d-md-flex justify-content-md-between align-items-md-center"},ot=t("div",{class:"d-md-flex"},null,-1);function lt(e,d,i,nt,c,b){const u=I("router-link");return o(),l(h,null,[T,t("section",$,[t("div",D,[t("main",F,[e.cart.length===0?(o(),l("div",N,[t("div",U,[B,j,q,_(u,{to:"/products",class:"add-cart-text d-inline-block text-white py-3 px-7 fs-5 fw-bold text-decoration-none border border-text-dark"},{default:p(()=>[r("前往購物")]),_:1})])])):(o(),l("div",L,[R,t("div",H,[t("button",{class:"btn btn-outline-danger",type:"button",onClick:d[0]||(d[0]=()=>b.deleteAllCart())}," 清空購物車 ")]),t("table",M,[O,t("tbody",W,[e.cart?(o(!0),l(h,{key:0},f(e.cart,s=>(o(),l("tr",{class:"fs-4",key:s.id},[t("td",z,[t("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:()=>e.deleteCartItem(s),disabled:s.id===c.loadingItem},[c.loadingItem===s.id?(o(),l("i",G)):y("",!0),r(" x ")],8,Z)]),t("td",J,[t("img",{src:s.product.imageUrl,class:"table-image",alt:"imageUrl"},null,8,K)]),t("td",null,a(s.product.title)+" ",1),t("td",null,[t("div",Q,[E(t("select",{name:"",id:"",class:"form-control","onUpdate:modelValue":n=>s.qty=n,onChange:n=>b.updateCartItem(s),disabled:s.id===c.loadingItem},[(o(),l(h,null,f(20,n=>t("option",{value:n,key:n+"1234"},a(n),9,Y)),64))],40,X),[[P,s.qty]])])]),t("td",null,"NT$ "+a(s.product.price),1),t("td",tt," NT$ "+a(s.total),1)]))),128)):y("",!0)]),t("tfoot",null,[t("tr",null,[t("td",et,"總計：NT$ "+a(e.total),1)])])]),t("div",st,[_(u,{to:"/products",class:"text-decoration-none fw-bold me-6 btn btn-outline-primary"},{default:p(()=>[r("上一頁")]),_:1}),ot,_(u,{to:"/checkout",class:"text-decoration-none fw-bold me-6 btn btn-outline-primary"},{default:p(()=>[r("下一步")]),_:1})])]))])])])],64)}const ct=v(S,[["render",lt]]);export{ct as default};
