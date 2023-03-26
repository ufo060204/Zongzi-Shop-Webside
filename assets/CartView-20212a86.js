import{_ as v,m as I,a as C,c as n,b as t,d as b,w as g,F as f,n as k,f as c,G as w,H as T,t as a,g as d,e as V,r as S,o as l,I as $}from"./index-4f244f1a.js";import{c as m}from"./cart-6454ad78.js";import{S as h}from"./sweetalert2.all-e2268c40.js";const N="/Zongzi-Shop-Webside/assets/SignWarning-9b2bf6aa.png";const{VITE_APP_URL:x,VITE_APP_PATH:y}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"ufo060204",BASE_URL:"/Zongzi-Shop-Webside/",MODE:"production",DEV:!1,PROD:!0},P={data(){return{products:[],productId:"",loadingItem:"",couponCode:"",form:{user:{name:"",mail:"",tel:"",address:""},message:""}}},computed:{...I(m,["cart","total","final_total"])},methods:{...C(m,["getCarts"]),updateCartItem(s){const o={product_id:s.product.id,qty:s.qty};this.loadingItem=s.id,this.$http.put(`${x}/v2/api/${y}/cart/${s.id}`,{data:o}).then(i=>{this.getCarts(),this.loadingItem="",h.fire({icon:"success",title:"已更新數量",showConfirmButton:!1,timer:1500})}).catch(i=>{alert(i.data.message)})},checkCoupon(){const s={code:this.couponCode},o=`${x}/v2/api/${y}/coupon`;this.$http.post(o,{data:s}).then(i=>{i.data.success===!0?h.fire("套用成功","已套用優惠券 zongzi40","success"):i.data.success===!1&&h.fire({icon:"error",title:"套用失敗",text:"找不到優惠券QQ",footer:'<a href="https://ufo060204.github.io/Zongzi-Shop-Webside/#/home/-NR8JzTIYKZ08sSYBdjQ">前往領取優惠碼'}),this.getCarts()}).catch(i=>{console.log(i.response.data.message)})},...C(m,["deleteCartItem"]),deleteAllCart(){h.fire({title:"刪除確認?",text:"確定要清除購物車的所有商品嗎？",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"是的"}).then(s=>{s.isConfirmed&&this.$http.delete(`${x}/v2/api/${y}/carts`).then(o=>{this.getCarts(),h.fire("刪除成功","購物車的商品已清空","success")}).catch(o=>{alert(o.data.message)})})}},mounted(){this.getCarts()}},A=t("section",{class:"landing-img landing-header"},null,-1),B={class:"bg-bg"},z={class:"container-lg"},E={class:"py-8"},U={key:0,class:"row d-flex align-items-center justify-content-center"},j={class:"col-6 d-flex align-items-center justify-content-center flex-column py-6 border border-text-light bg-bg"},D=t("h1",{class:"fs-2"},"購物車",-1),R=t("img",{class:"my-6 img-fluid",style:{height:"150px"},src:N,alt:"SignWarning"},null,-1),W=t("h2",{class:"fs-4"},"您的購物車中沒有商品",-1),q={key:1},L=V('<ul class="list-unstyled d-md-flex justify-content-center"><li class="bg-white border border-boderlight py-3 px-7">確認商品</li><li class="border border-boderlight py-3 px-7">填寫資料</li><li class="border border-boderlight py-3 px-7">確認付款</li><li class="border border-boderlight py-3 px-7">完成付款</li></ul>',1),Z={class:"text-end"},H={class:"table-responsive"},M={class:"table align-middle table-bordered border-white text-center"},Q=t("thead",null,[t("tr",{class:"fs-5"},[t("th",{class:"bg-text-dark text-white"},"圖片"),t("th",{class:"bg-text-dark text-white"},"品名"),t("th",{class:"bg-text-dark text-white"},"單價"),t("th",{class:"bg-text-dark text-white"},"數量"),t("th",{class:"bg-text-dark text-white"},"小計"),t("th",{class:"bg-text-dark text-white"})])],-1),F=["src"],O={key:0,class:"text-success fs-6"},Y={class:"input-group input-group-sm"},G=["onUpdate:modelValue","onChange","disabled"],J=["value"],K={key:0,class:"fw-bold"},X={key:1,class:"fw-bold"},tt={class:"fs-6 text-decoration-line-through"},et=["onClick","disabled"],st={key:0,class:"fas fa-spinner fa-pulse"},ot={colspan:"3"},nt={class:"input-group"},lt=t("td",{class:"bg-text-dark text-white fw-bolder fs-4"},"總計",-1),at={key:0,colspan:"2",class:"text-end fs-4 fw-bolder text-black bg-white"},it={key:1,colspan:"2",class:"text-end fs-4 fw-bolder text-black bg-white"},dt={class:"text-danger fs-3"},ct={class:"fs-5 text-decoration-line-through"},rt={class:"d-md-flex justify-content-md-between align-items-md-center"},ut=t("i",{class:"bi bi-arrow-left"},null,-1),ht=t("i",{class:"bi bi-arrow-right"},null,-1);function _t(s,o,i,pt,u,_){const p=S("router-link");return l(),n(f,null,[A,t("section",B,[t("div",z,[t("main",E,[s.cart.length===0?(l(),n("div",U,[t("div",j,[D,R,W,b(p,{to:"/products",class:"btn btn-primary d-inline-block text-white py-3 px-7 fs-5 fw-bold text-decoration-none"},{default:g(()=>[d("前往購物")]),_:1})])])):(l(),n("div",q,[L,t("div",Z,[t("button",{class:"btn btn-outline-danger",type:"button",onClick:o[0]||(o[0]=()=>_.deleteAllCart())}," 清空購物車 ")]),t("div",H,[t("table",M,[Q,t("tbody",null,[s.cart?(l(!0),n(f,{key:0},k(s.cart,e=>(l(),n("tr",{class:"fs-4",key:e.id},[t("td",null,[t("img",{src:e.product.imageUrl,class:"table-image",alt:"imageUrl"},null,8,F)]),t("td",null,[d(a(e.product.title)+" ",1),e.coupon?(l(),n("span",O,"已套用優惠券")):c("",!0)]),t("td",null,"NT$ "+a(e.product.price),1),t("td",null,[t("div",Y,[w(t("select",{name:"",id:"",class:"form-control text-center","onUpdate:modelValue":r=>e.qty=r,onChange:r=>_.updateCartItem(e),disabled:e.id===u.loadingItem},[(l(),n(f,null,k(20,r=>t("option",{value:r,key:r+"1234"},a(r),9,J)),64))],40,G),[[$,e.qty]])])]),this.total===this.final_total?(l(),n("td",K," NT$ "+a(e.total),1)):c("",!0),this.total!==this.final_total?(l(),n("td",X,[d(" NT$ "+a(e.final_total)+" ",1),t("span",tt,a(e.total),1)])):c("",!0),t("td",null,[t("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:()=>s.deleteCartItem(e),disabled:e.id===u.loadingItem},[u.loadingItem===e.id?(l(),n("i",st)):c("",!0),d(" x ")],8,et)])]))),128)):c("",!0)]),t("tfoot",null,[t("tr",null,[t("td",ot,[t("div",nt,[w(t("input",{type:"text",class:"form-control",placeholder:"請輸入優惠代碼","onUpdate:modelValue":o[1]||(o[1]=e=>u.couponCode=e)},null,512),[[T,u.couponCode]]),t("button",{type:"btn",class:"btn btn-outline-zongzi",onClick:o[2]||(o[2]=()=>_.checkCoupon())},"使用優惠券")])]),lt,this.total===this.final_total?(l(),n("td",at,"NT$ "+a(s.total),1)):c("",!0),this.total!==this.final_total?(l(),n("td",it,[d("NT$ "),t("span",dt,a(s.final_total),1),d(),t("span",ct,a(s.total),1)])):c("",!0)])])])]),t("div",rt,[b(p,{to:"/products",class:"text-decoration-none btn btn-outline-text-light"},{default:g(()=>[ut,d("上一頁")]),_:1}),b(p,{to:"/checkout",class:"text-decoration-none btn btn-outline-text-light"},{default:g(()=>[d("下一步"),ht]),_:1})])]))])])])],64)}const mt=v(P,[["render",_t]]);export{mt as default};
