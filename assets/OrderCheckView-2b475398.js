import{S as l}from"./sweetalert2.all-6567ce3e.js";import{_ as b,ac as o,z as g,ad as t,b5 as e,M as n,aV as u,ab as y,ag as f,k as x,l as i}from"./_plugin-vue_export-helper-ddde7e51.js";import"./_commonjsHelpers-042e6b4d.js";const{VITE_APP_URL:a,VITE_APP_PATH:h}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"ufo060204",BASE_URL:"/Zongzi-Shop-Webside/",MODE:"production",DEV:!1,PROD:!0},w={data(){return{orderId:"",order:[],isLoading:!1,color:"#FF700C"}},methods:{getOrder(){this.isLoading=!0,this.orderId=this.$route.params.id;const r=`${a}v2/api/${h}/order/${this.orderId}`;this.$http.get(r).then(s=>{this.order=s.data.order,this.isLoading=!1}).catch(s=>{this.isLoading=!1,l.fire(s.message)})},pay(){l.fire({title:"結帳確認",text:"確認資料無誤並結帳嗎?",icon:"question",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"確認",cancelButtonText:"取消"}).then(r=>{if(r.isConfirmed){const s=`${a}v2/api/${h}/pay/${this.orderId}`;this.$http.post(s).then(_=>{this.cart=[],l.fire("付款完成","您已完成結帳","success"),this.$router.push("/orderFinished")})}})}},mounted(){this.getOrder()}},V=t("section",{class:"landing-img landing-header"},null,-1),k={class:"bg-bg"},v={class:"container-lg"},$={key:0,class:"py-7 py-lg-8 text-center"},L=f('<ul class="list-unstyled d-md-flex justify-content-center mb-3"><li class="border border-boderlight py-3 px-7">確認商品</li><li class="d-flex align-items-center justify-content-center px-1"><i class="bi bi-chevron-right fs-4 text-text-light shopping-process-icon"></i></li><li class="border border-boderlight py-3 px-7">填寫資料</li><li class="d-flex align-items-center justify-content-center px-1"><i class="bi bi-chevron-right fs-4 text-text-light shopping-process-icon"></i></li><li class="bg-white border border-boderlight py-3 px-7">確認付款</li><li class="d-flex align-items-center justify-content-center px-1"><i class="bi bi-chevron-right fs-4 text-text-light shopping-process-icon"></i></li><li class="border border-boderlight py-3 px-7">完成付款</li></ul>',1),P={class:"row justify-content-lg-center"},B={class:"col-lg-6"},C={style:{"box-shadow":"0 0 16px rgba(0, 0, 0, 0.08)"},class:"table text-text-dark bg-white fs-5"},E=t("tr",{class:"bg-boderlight"},[t("th",{class:"py-3 fs-4"},"訂單資訊")],-1),T={style:{margin:"0 -6px"},class:"row border-bottom py-3"},I=t("th",{class:"col-md-5"},"姓名",-1),A={class:"col-md-7"},S={class:"row border-bottom py-3 m-0 align-items-center"},j=t("th",{class:"col-md-5"},"Email",-1),N={style:{"word-wrap":"break-word"},class:"col-md-7"},O={class:"row border-bottom py-3 m-0 align-items-center"},D=t("th",{class:"col-md-5"},"電話",-1),F={class:"col-md-7"},R={class:"row border-bottom py-3 m-0 align-items-center"},z=t("th",{class:"col-md-5"},"地址",-1),U={style:{"word-wrap":"break-word"},class:"col-md-7"},q={class:"row border-bottom py-3 m-0 align-items-center"},H=t("th",{class:"col-md-5"},"訂購產品",-1),M={class:"col-md-7"},W={class:"list-unstyled bg-white"},X={class:"row border-bottom py-3 m-0"},Z=t("th",{class:"col-md-5"},"付款金額",-1),G={class:"col-md-7"},J={class:"row border-bottom py-3 m-0"},K=t("th",{class:"col-md-5"},"付款狀態",-1),Q={key:0,class:"col-md-7"},Y={key:1,class:"col-md-7"};function tt(r,s,_,st,d,p){const m=x("VueLoading");return i(),o(n,null,[V,g(m,{active:d.isLoading,color:d.color,"z-index":9999},null,8,["active","color"]),t("section",k,[t("div",v,[this.order.user?(i(),o("main",$,[L,t("div",P,[t("div",B,[t("table",C,[E,t("tr",T,[I,t("td",A,e(this.order.user.name),1)]),t("tr",S,[j,t("td",N,e(this.order.user.email),1)]),t("tr",O,[D,t("td",F,e(this.order.user.tel),1)]),t("tr",R,[z,t("td",U,e(this.order.user.address),1)]),t("tr",q,[H,t("td",M,[t("ul",W,[(i(!0),o(n,null,u(this.order.products,c=>(i(),o("li",{key:c.id},e(c.product.title)+" X "+e(c.qty),1))),128))])])]),t("tr",X,[Z,t("td",G,"$NT "+e(this.order.total),1)]),t("tr",J,[K,this.order.is_paid?(i(),o("td",Y,"已付款")):(i(),o("td",Q,"未付款"))])])])]),t("button",{onClick:s[0]||(s[0]=()=>p.pay()),type:"button",class:"btn btn-outline-primary btn-lg rounded-0"},"確認付款")])):y("",!0)])])],64)}const rt=b(w,[["render",tt]]);export{rt as default};
