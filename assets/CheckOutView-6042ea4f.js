import{_ as V,m as k,c,b as e,F as f,l as w,f as h,t as m,d as o,w as g,e as P,r as u,o as p,g as i,n as _,H as T,I as E}from"./index-ae658158.js";import{c as U}from"./cart-a10d9ba1.js";import"./sweetalert2.all-9f5f8b95.js";const{VITE_APP_URL:I,VITE_APP_PATH:S}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"ufo060204",BASE_URL:"/Zongzi-Shop-Webside/",MODE:"production",DEV:!1,PROD:!0},q={data(){return{products:[],productId:"",form:{user:{name:"",email:"",tel:"",address:""},message:""}}},computed:{...k(U,["cart","total","final_total"])},methods:{isRequired(a){return a?!0:"This field is required"},sendOrder(){const a=`${I}v2/api/${S}/order`;this.$http.post(a,{data:this.form}).then(s=>{const b=s.data.orderId;this.$router.push(`/orderCheck/${b}`)}).catch(s=>{alert(s.data.message),this.$router.push("/products")})}},mounted(){}},A=e("section",{class:"landing-img landing-header"},null,-1),N={class:"bg-bg"},C={class:"container-lg"},j={class:"py-8"},D=P('<ul class="list-unstyled d-md-flex justify-content-center text-center"><li class="border border-boderlight py-3 px-7">確認商品</li><li class="d-flex align-items-center justify-content-center px-1"><i class="bi bi-chevron-right fs-4 text-text-light shopping-process-icon"></i></li><li class="bg-white border border-boderlight py-3 px-7">填寫資料</li><li class="d-flex align-items-center justify-content-center px-1"><i class="bi bi-chevron-right fs-4 text-text-light shopping-process-icon"></i></li><li class="border border-boderlight py-3 px-7">確認付款</li><li class="d-flex align-items-center justify-content-center px-1"><i class="bi bi-chevron-right fs-4 text-text-light shopping-process-icon"></i></li><li class="border border-boderlight py-3 px-7">完成付款</li></ul>',1),O={class:"row"},R={class:"col-lg-6"},B={class:"border border-text-dark p-6"},L={class:"table align-middle text-center table-borderless"},H=e("thead",null,[e("tr",null,[e("th",null,"圖片"),e("th",null,"品名"),e("th",{style:{width:"50px"}},"數量"),e("th",null,"單價")])],-1),z={class:"border-bottom border-top border-text-light border-2"},F=["src"],M=e("br",null,null,-1),W={key:0,class:"text-success fs-6"},Z=e("td",{colspan:"2",class:"text-end"},"總計",-1),$={colspan:"2",class:"text-end fw-bold fs-5 text-danger"},G={class:"col-lg-6"},J={class:"mb-3"},K=e("label",{for:"email",class:"form-label"},[e("span",{class:"text-danger"},"*"),i(" Email")],-1),Q={class:"mb-3"},X=e("label",{for:"name",class:"form-label"},[e("span",{class:"text-danger"},"*"),i(" 收件人姓名")],-1),Y={class:"mb-3"},ee=e("label",{for:"tel",class:"form-label"},[e("span",{class:"text-danger"},"*"),i(" 收件人電話")],-1),se={class:"mb-3"},te=e("label",{for:"address",class:"form-label"},[e("span",{class:"text-danger"},"*"),i(" 收件人地址")],-1),le={class:"mb-3"},oe=e("label",{for:"message",class:"form-label"},"留言",-1),re={class:"d-flex justify-content-between align-items-center"},ae=e("i",{class:"bi bi-arrow-left"},null,-1),ie=e("button",{class:"btn btn-outline-primary d-block rounded-0",type:"submit"},[i("下一步"),e("i",{class:"bi bi-arrow-right"})],-1);function ne(a,s,b,de,l,x){const n=u("v-field"),d=u("error-message"),v=u("router-link"),y=u("v-form");return p(),c(f,null,[A,e("section",N,[e("div",C,[e("main",j,[D,e("div",O,[e("div",R,[e("div",B,[e("table",L,[H,e("tbody",z,[a.cart?(p(!0),c(f,{key:0},w(a.cart,t=>(p(),c("tr",{key:t.id},[e("td",null,[e("img",{style:{"max-width":"100px"},src:t.product.imageUrl,class:"img-fluid",alt:"imageUrl"},null,8,F)]),e("td",null,[i(m(t.product.title),1),M,t.coupon?(p(),c("span",W,"已套用優惠券")):h("",!0)]),e("td",null,m(t.qty),1),e("td",null," NT$ "+m(t.total),1)]))),128)):h("",!0)]),e("tfoot",null,[e("tr",null,[Z,e("td",$,"NT$ "+m(a.final_total),1)])])])])]),e("div",G,[e("div",null,[o(y,{ref:"form",class:"border border-text-dark p-6 fw-bold",onSubmit:x.sendOrder},{default:g(({errors:t})=>[e("div",J,[K,o(n,{id:"email",name:"email",type:"email",class:_(["form-control",{"is-invalid":t.email}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:l.form.user.email,"onUpdate:modelValue":s[0]||(s[0]=r=>l.form.user.email=r)},null,8,["class","modelValue"]),o(d,{name:"email",class:"invalid-feedback"})]),e("div",Q,[X,o(n,{id:"name",name:"姓名",type:"text",class:_(["form-control",{"is-invalid":t.姓名}]),placeholder:"請輸入姓名",rules:"required",modelValue:l.form.user.name,"onUpdate:modelValue":s[1]||(s[1]=r=>l.form.user.name=r)},null,8,["class","modelValue"]),o(d,{name:"姓名",class:"invalid-feedback"})]),e("div",Y,[ee,o(n,{id:"tel",name:"電話",type:"text",class:_(["form-control",{"is-invalid":t.電話}]),placeholder:"請輸入電話",rules:"required|min:8|max:10",modelValue:l.form.user.tel,"onUpdate:modelValue":s[2]||(s[2]=r=>l.form.user.tel=r)},null,8,["class","modelValue"]),o(d,{name:"電話",class:"invalid-feedback"})]),e("div",se,[te,o(n,{id:"address",name:"地址",type:"text",class:_(["form-control",{"is-invalid":t.地址}]),placeholder:"請輸入地址",rules:"required",modelValue:l.form.user.address,"onUpdate:modelValue":s[3]||(s[3]=r=>l.form.user.address=r)},null,8,["class","modelValue"]),o(d,{name:"地址",class:"invalid-feedback"})]),e("div",le,[oe,T(e("textarea",{id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":s[4]||(s[4]=r=>l.form.message=r)},null,512),[[E,l.form.message]])]),e("div",re,[o(v,{to:"/cart",class:"text-decoration-none d-inline-block btn btn-outline-text-light rounded-0"},{default:g(()=>[ae,i("上一頁")]),_:1}),ie])]),_:1},8,["onSubmit"])])])])])])])],64)}const pe=V(q,[["render",ne]]);export{pe as default};
