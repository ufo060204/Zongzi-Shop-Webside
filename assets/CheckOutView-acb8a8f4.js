import{m as V}from"./index-5cae3d0a.js";import{c as k}from"./cart-b6497e16.js";import{l as w}from"./runtime-dom.esm-bundler-8357395d.js";import{_ as T,ac as d,ad as e,M as h,aV as P,ab as _,b5 as i,z as o,bi as g,ag as E,k as p,l as c,ah as a,aD as b,bk as N}from"./_plugin-vue_export-helper-ddde7e51.js";import"./vue-router-0808fa9d.js";import"./sweetalert2.all-6567ce3e.js";import"./_commonjsHelpers-042e6b4d.js";const{VITE_APP_URL:U,VITE_APP_PATH:S}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"ufo060204",BASE_URL:"/Zongzi-Shop-Webside/",MODE:"production",DEV:!1,PROD:!0},q={data(){return{products:[],productId:"",form:{user:{name:"",email:"",tel:"",address:""},message:""}}},computed:{...V(k,["cart","total","final_total"])},methods:{isRequired(n){return n?!0:"This field is required"},sendOrder(){const n=`${U}v2/api/${S}/order`;this.$http.post(n,{data:this.form}).then(t=>{const f=t.data.orderId;this.$router.push(`/orderCheck/${f}`)}).catch(t=>{alert(t.data.message),this.$router.push("/products")})}},mounted(){}},A=e("section",{class:"landing-img landing-header"},null,-1),I={class:"bg-bg"},C={class:"container-lg"},D={class:"py-7 py-lg-8"},j=E('<ul class="list-unstyled d-md-flex justify-content-center text-center mb-3"><li class="border border-boderlight py-3 px-7">確認商品</li><li class="d-flex align-items-center justify-content-center px-1"><i class="bi bi-chevron-right fs-4 text-text-light shopping-process-icon"></i></li><li class="bg-white border border-boderlight py-3 px-7">填寫資料</li><li class="d-flex align-items-center justify-content-center px-1"><i class="bi bi-chevron-right fs-4 text-text-light shopping-process-icon"></i></li><li class="border border-boderlight py-3 px-7">確認付款</li><li class="d-flex align-items-center justify-content-center px-1"><i class="bi bi-chevron-right fs-4 text-text-light shopping-process-icon"></i></li><li class="border border-boderlight py-3 px-7">完成付款</li></ul>',1),O={class:"row"},R={class:"col-lg-6"},B={class:"border border-text-dark p-6"},L={class:"table align-middle text-center table-borderless"},z=e("thead",null,[e("tr",null,[e("th",{colspan:"2"},"內容"),e("th",null,"小計")])],-1),M={class:"border-bottom border-top border-text-light border-2"},$=["src"],H=e("br",null,null,-1),F={class:"d-lg-none"},W={class:"d-none d-lg-block"},X=e("br",{class:"d-none d-lg-block"},null,-1),Z={key:0},G={key:1},J=e("br",null,null,-1),K={key:0,class:"text-success fs-12"},Q=e("td",{colspan:"2",class:"text-end"},"總計",-1),Y={class:"text-end text-nowrap fw-bold fs-5 text-danger"},ee={class:"col-lg-6"},se={class:"mb-3"},te=e("label",{for:"email",class:"form-label"},[e("span",{class:"text-danger"},"*"),a(" Email")],-1),le={class:"mb-3"},oe=e("label",{for:"name",class:"form-label"},[e("span",{class:"text-danger"},"*"),a(" 收件人姓名")],-1),re={class:"mb-3"},ae=e("label",{for:"tel",class:"form-label"},[e("span",{class:"text-danger"},"*"),a(" 收件人電話")],-1),ne={class:"mb-3"},ie=e("label",{for:"address",class:"form-label"},[e("span",{class:"text-danger"},"*"),a(" 收件人地址")],-1),de={class:"mb-3"},ce=e("label",{for:"message",class:"form-label"},"留言",-1),me={class:"d-flex justify-content-between align-items-center"},ue=e("i",{class:"bi bi-arrow-left"},null,-1),_e=e("button",{class:"btn btn-outline-primary d-block rounded-0",type:"submit"},[a("下一步"),e("i",{class:"bi bi-arrow-right"})],-1);function pe(n,t,f,be,l,x){const m=p("v-field"),u=p("error-message"),v=p("router-link"),y=p("v-form");return c(),d(h,null,[A,e("section",I,[e("div",C,[e("main",D,[j,e("div",O,[e("div",R,[e("div",B,[e("table",L,[z,e("tbody",M,[n.cart?(c(!0),d(h,{key:0},P(n.cart,s=>(c(),d("tr",{key:s.id},[e("td",null,[e("img",{style:{"max-width":"100px"},src:s.product.imageUrl,class:"img-fluid",alt:"產品圖片"},null,8,$),H,e("span",F,i(s.product.title),1)]),e("td",null,[e("span",W,i(s.product.title),1),X,a(" NT$ "+i(s.product.price)+" X "+i(s.qty),1)]),s.total===s.final_total?(c(),d("td",Z," NT$ "+i(s.total),1)):_("",!0),s.total!==s.final_total?(c(),d("td",G,[a(" NT$ "+i(s.final_total)+" ",1),J,s.coupon?(c(),d("span",K,"已用優惠券")):_("",!0)])):_("",!0)]))),128)):_("",!0)]),e("tfoot",null,[e("tr",null,[Q,e("td",Y,"NT$ "+i(n.final_total),1)])])])])]),e("div",ee,[e("div",null,[o(y,{ref:"form",class:"border border-text-dark p-6 fw-bold",onSubmit:x.sendOrder},{default:g(({errors:s})=>[e("div",se,[te,o(m,{id:"email",name:"email",type:"email",class:b(["form-control",{"is-invalid":s.email}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:l.form.user.email,"onUpdate:modelValue":t[0]||(t[0]=r=>l.form.user.email=r)},null,8,["class","modelValue"]),o(u,{name:"email",class:"invalid-feedback"})]),e("div",le,[oe,o(m,{id:"name",name:"姓名",type:"text",class:b(["form-control",{"is-invalid":s.姓名}]),placeholder:"請輸入姓名",rules:"required",modelValue:l.form.user.name,"onUpdate:modelValue":t[1]||(t[1]=r=>l.form.user.name=r)},null,8,["class","modelValue"]),o(u,{name:"姓名",class:"invalid-feedback"})]),e("div",re,[ae,o(m,{id:"tel",name:"電話",type:"tel",class:b(["form-control",{"is-invalid":s.電話}]),placeholder:"請輸入電話",rules:"required|numeric|min:8|max:10",modelValue:l.form.user.tel,"onUpdate:modelValue":t[2]||(t[2]=r=>l.form.user.tel=r)},null,8,["class","modelValue"]),o(u,{name:"電話",class:"invalid-feedback"})]),e("div",ne,[ie,o(m,{id:"address",name:"地址",type:"text",class:b(["form-control",{"is-invalid":s.地址}]),placeholder:"請輸入地址",rules:"required",modelValue:l.form.user.address,"onUpdate:modelValue":t[3]||(t[3]=r=>l.form.user.address=r)},null,8,["class","modelValue"]),o(u,{name:"地址",class:"invalid-feedback"})]),e("div",de,[ce,N(e("textarea",{id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":t[4]||(t[4]=r=>l.form.message=r)},null,512),[[w,l.form.message]])]),e("div",me,[o(v,{to:"/cart",class:"text-decoration-none d-inline-block btn btn-outline-text-light rounded-0"},{default:g(()=>[ue,a("上一頁")]),_:1}),_e])]),_:1},8,["onSubmit"])])])])])])])],64)}const ke=T(q,[["render",pe]]);export{ke as default};
