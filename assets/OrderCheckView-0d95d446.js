import{S as d}from"./sweetalert2.all-4e3cb76a.js";import{_,o as s,c as r,b as t,t as o,F as c,n as p,g as m,e as f}from"./index-face757b.js";const{VITE_APP_URL:a,VITE_APP_PATH:h}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"ufo060204",BASE_URL:"/Zongzi-Shop-Webside/",MODE:"production",DEV:!1,PROD:!0},y={data(){return{orderId:"",order:[]}},methods:{getOrder(){this.orderId=this.$route.params.id;const l=`${a}v2/api/${h}/order/${this.orderId}`;this.$http.get(l).then(e=>{console.log(e),this.order=e.data.order,console.log("訂單列表",this.order)}).catch(e=>{console.log(e)})},pay(){d.fire({title:"結帳確認",text:"確認資料無誤並結帳嗎?",icon:"question",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"確認"}).then(l=>{if(l.isConfirmed){const e=`${a}v2/api/${h}/pay/${this.orderId}`;this.$http.post(e).then(i=>{console.log(i),this.cart=[],d.fire("付款完成","您已完成結帳","success"),this.$router.push("/orderFinished")})}})}},mounted(){console.log(this.$route.params),this.getOrder()}},g=t("section",{class:"landing-img landing-header"},null,-1),b={class:"bg-bg"},x={class:"container-md"},$={key:0,class:"py-8 text-center"},k=f('<ul class="list-unstyled d-md-flex justify-content-center"><li style="background-color:#ffe8d9;" class="py-3 px-7 me-6">確認商品</li><li style="background-color:#ffe8d9;" class="py-3 px-7 me-6">填寫資料</li><li class="bg-primary py-3 px-7 me-6">確認付款</li><li style="background-color:#ffe8d9;" class="py-3 px-7">完成付款</li></ul>',1),P={class:"d-md-flex justify-content-md-center"},w={class:"table align-middle border-bottom border-text-dark fs-4",style:{"max-width":"50%"}},E=t("th",{scope:"col"},"姓名",-1),V={scope:"col"},B=t("th",{scope:"row"},"Email",-1),I=t("th",{scope:"row"},"電話",-1),A=t("th",{scope:"row"},"地址",-1),C={colspan:"2"},T=t("th",{scope:"row"},"訂購產品",-1),S={class:"list-unstyled"},v=t("th",{scope:"row"},"付款金額",-1),O=t("th",null,"付款狀態",-1),D={key:0},L={key:1};function R(l,e,i,F,N,u){return s(),r(c,null,[g,t("section",b,[t("div",x,[this.order.user?(s(),r("main",$,[k,t("div",P,[t("table",w,[t("thead",null,[t("tr",null,[E,t("td",V,o(this.order.user.name),1)])]),t("tbody",null,[t("tr",null,[B,t("td",null,o(this.order.user.email),1)]),t("tr",null,[I,t("td",null,o(this.order.user.tel),1)]),t("tr",null,[A,t("td",C,o(this.order.user.address),1)]),t("tr",null,[T,t("td",null,[t("ul",S,[(s(!0),r(c,null,p(this.order.products,n=>(s(),r("li",{key:n.id},o(n.product.title)+" X "+o(n.qty),1))),128))])])]),t("tr",null,[v,t("td",null,o(this.order.total),1)]),t("tr",null,[O,this.order.is_paid?(s(),r("td",L,"已付款")):(s(),r("td",D,"未付款"))])])])]),t("button",{onClick:e[0]||(e[0]=()=>u.pay()),type:"button",class:"btn btn-outline-primary"},"確認付款")])):m("",!0)])])],64)}const q=_(y,[["render",R]]);export{q as default};
