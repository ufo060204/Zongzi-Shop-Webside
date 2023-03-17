import{_ as k,m as V,r as c,o as f,c as h,b as e,F as b,n as w,g as I,t as m,d as a,w as g,e as C,x as u,s as $,u as P,f as T}from"./index-6bafa8fa.js";import{c as E}from"./cart-7537e2d4.js";import"./sweetalert2.all-9d04cdfb.js";const{VITE_APP_URL:p,VITE_APP_PATH:_}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"ufo060204",BASE_URL:"/Vue-Week7-Homework/",MODE:"production",DEV:!1,PROD:!0},U={data(){return{products:[],productId:"",form:{user:{name:"張育成",email:"yuga@gmail.com",tel:"0973101123",address:"台東縣東河鄉本部落30號"},message:"你好，謝謝"}}},computed:{...V(E,["cart","total","final_total"])},methods:{updateCartItem(s){const t={product_id:s.product.id,qty:s.qty};this.loadingItem=s.id,this.$http.put(`${p}v2/api/${_}/cart/${s.id}`,{data:t}).then(d=>{this.getCarts(),this.loadingItem="",alert(d.data.message)}).catch(d=>{alert(d.data.message)})},deleteCartItem(s){this.loadingItem=s.id,this.$http.delete(`${p}v2/api/${_}/cart/${s.id}`).then(t=>{this.loadingItem="",this.getCarts(),alert(t.data.message)}).catch(t=>{alert(t.data.message)})},deleteAllCart(){this.$http.delete(`${p}v2/api/${_}/carts`).then(s=>{this.getCarts(),alert(s.data.message)}).catch(s=>{alert(s.data.message)})},isRequired(s){return s?!0:"This field is required"},sendOrder(){const s=`${p}v2/api/${_}/order`;this.$http.post(s,{data:this.form}).then(t=>{const d=t.data.orderId;this.$router.push(`/orderCheck/${d}`),console.log(d),console.log(t.data.message)}).catch(t=>{console.log(t),this.$router.push("/products")})}},mounted(){}},q=e("section",{style:{height:"88px","background-image":"url(../../../src/assets/images/landing.png)","background-repeat":"no-repeat","background-size":"cover","background-position":"left top","background-attachment":"fixed"}},null,-1),A={style:{"background-image":"url(../../../src/assets/images/texture1.png)"}},N={class:"container-md"},S={class:"py-8"},D=C('<ul class="list-unstyled d-md-flex justify-content-center"><li style="background-color:#ffe8d9;" class="me-6 py-3 px-7">確認商品</li><li class="me-6 bg-primary py-3 px-7">填寫資料</li><li style="background-color:#ffe8d9;" class="me-6 py-3 px-7">確認付款</li><li style="background-color:#ffe8d9;" class="py-3 px-7">完成付款</li></ul>',1),O={class:"row row-cols-2"},R={class:"col"},B={class:"border border-text-dark p-6"},L={class:"table align-middle text-center table-borderless"},H=e("thead",null,[e("tr",null,[e("th",null,"圖片"),e("th",null,"品名"),e("th",{style:{width:"150px"}},"數量"),e("th",null,"單價")])],-1),j={class:"border-bottom border-top border-text-dark border-2"},z=["src"],F=e("td",{colspan:"3",class:"text-end"},"總計",-1),M={class:"text-end fw-bold fs-5"},W={class:"col"},G={class:"mb-3"},J=e("label",{for:"email",class:"form-label"},"Email",-1),K={class:"mb-3"},Q=e("label",{for:"name",class:"form-label"},"收件人姓名",-1),X={class:"mb-3"},Y=e("label",{for:"tel",class:"form-label"},"收件人電話",-1),Z={class:"mb-3"},ee=e("label",{for:"address",class:"form-label"},"收件人地址",-1),te={class:"mb-3"},se=e("label",{for:"message",class:"form-label"},"留言",-1),le={class:"d-md-flex justify-content-md-between align-items-md-center"},oe=e("button",{class:"btn btn-outline-primary",type:"submit"},"下一步",-1);function ae(s,t,d,re,l,v){const n=c("v-field"),i=c("error-message"),y=c("router-link"),x=c("v-form");return f(),h(b,null,[q,e("section",A,[e("div",N,[e("main",S,[D,e("div",O,[e("div",R,[e("div",B,[e("table",L,[H,e("tbody",j,[s.cart?(f(!0),h(b,{key:0},w(s.cart,o=>(f(),h("tr",{key:o.id},[e("td",null,[e("img",{style:{width:"150px"},src:o.product.imageUrl,class:"img-fluid",alt:"imageUrl"},null,8,z)]),e("td",null,m(o.product.title)+" ",1),e("td",null,m(o.qty),1),e("td",null," NT$ "+m(o.total),1)]))),128)):I("",!0)]),e("tfoot",null,[e("tr",null,[F,e("td",M,"NT$ "+m(s.total),1)])])])])]),e("div",W,[e("div",null,[a(x,{ref:"form",class:"border border-text-dark p-6 fw-bold",onSubmit:v.sendOrder},{default:g(({errors:o})=>[e("div",G,[J,a(n,{id:"email",name:"email",type:"email",class:u(["form-control",{"is-invalid":o.email}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:l.form.user.email,"onUpdate:modelValue":t[0]||(t[0]=r=>l.form.user.email=r)},null,8,["class","modelValue"]),a(i,{name:"email",class:"invalid-feedback"})]),e("div",K,[Q,a(n,{id:"name",name:"姓名",type:"text",class:u(["form-control",{"is-invalid":o.姓名}]),placeholder:"請輸入姓名",rules:"required",modelValue:l.form.user.name,"onUpdate:modelValue":t[1]||(t[1]=r=>l.form.user.name=r)},null,8,["class","modelValue"]),a(i,{name:"姓名",class:"invalid-feedback"})]),e("div",X,[Y,a(n,{id:"tel",name:"電話",type:"text",class:u(["form-control",{"is-invalid":o.電話}]),placeholder:"請輸入電話",rules:"required|min:8|max:10",modelValue:l.form.user.tel,"onUpdate:modelValue":t[2]||(t[2]=r=>l.form.user.tel=r)},null,8,["class","modelValue"]),a(i,{name:"電話",class:"invalid-feedback"})]),e("div",Z,[ee,a(n,{id:"address",name:"地址",type:"text",class:u(["form-control",{"is-invalid":o.地址}]),placeholder:"請輸入地址",rules:"required",modelValue:l.form.user.address,"onUpdate:modelValue":t[3]||(t[3]=r=>l.form.user.address=r)},null,8,["class","modelValue"]),a(i,{name:"地址",class:"invalid-feedback"})]),e("div",te,[se,$(e("textarea",{id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":t[4]||(t[4]=r=>l.form.message=r)},null,512),[[P,l.form.message]])]),e("div",le,[a(y,{to:"/cart",class:"text-decoration-none fw-bold me-6 btn btn-outline-primary"},{default:g(()=>[T("上一頁")]),_:1}),oe])]),_:1},8,["onSubmit"])])])])])])])],64)}const ce=k(U,[["render",ae]]);export{ce as default};
