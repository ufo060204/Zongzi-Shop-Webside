import{M as g}from"./modal-2600f70a.js";import{B as w}from"./BackPagination-023cbdd8.js";import{_ as C,c as o,g as P,d as y,b as t,F as h,l as u,t as d,f as p,H as O,K as f,e as V,r as k,o as l,n as D}from"./index-d673ae41.js";const{VITE_APP_URL:b,VITE_APP_PATH:m}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"ufo060204",BASE_URL:"/Zongzi-Shop-Webside/",MODE:"production",DEV:!1,PROD:!0},E={data(){return{orders:{},isNew:!1,isLoading:!1,tempOrder:{},page:1,color:"#FF700C",orderModal:"",delOrderModal:""}},components:{BackPagination:w},methods:{getOrder(a=1){this.page=a;const n=`${b}api/${m}/admin/orders?page=${a}`;this.isLoading=!0,this.$http.get(n,this.tempOrder).then(r=>{this.orders=r.data.orders,this.page=r.data.pagination,this.isLoading=!1}).catch(r=>{this.isLoading=!1,alert(r.response)})},openOrderModal(a){this.orderModal.show(),this.isNew=!1,this.tempOrder={...a}},openDelModal(a){this.delOrderModal.show(),this.tempOrder={...a}},updatePaid(a){this.isLoading=!0;const n=`${b}api/${m}/admin/order/${a.id}`,r={is_paid:a.is_paid};this.$http.put(n,{data:r}).then(_=>{this.isLoading=!1,alert(_.data.message),this.getOrder(),this.orderModal.hide()}).catch(_=>{this.isLoading=!1,alert(_.response)})},delOrder(){const a=`${b}api/${m}/admin/order/${this.tempOrder.id}`;this.isLoading=!0,this.$http.delete(a).then(n=>{this.isLoading=!1,alert(n.data.message),this.getOrder(this.page),this.delOrderModal.hide()}).catch(n=>{alert(n.response)})},dateFilter(a){return new Date(a*1e3).toLocaleDateString()}},mounted(){this.getOrder(),this.orderModal=new g(this.$refs.orderModal),this.delOrderModal=new g(this.$refs.delOrderModal)}},A={class:"container"},B={class:"table mt-4"},F=t("thead",null,[t("tr",null,[t("th",{width:"120"},"時間"),t("th",{width:"120"},"email"),t("th",{width:"120"},"款項"),t("th",{width:"120"},"金額"),t("th",{width:"100"},"是否付款"),t("th",{width:"120"},"編輯")])],-1),N=["textContent"],T={class:"text-end"},U={class:"list-unstyled"},S={class:"text-right"},I={class:"form-check form-switch"},R=["id","onUpdate:modelValue","onChange"],z={key:0},H={key:1},q={class:"btn-group"},j=["onClick"],K=["onClick"],W={id:"productModal",ref:"orderModal",class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"},Z={class:"modal-dialog modal-xl"},G={class:"modal-content border-0"},J=t("div",{class:"modal-header bg-dark text-white"},[t("h5",{id:"productModalLabel",class:"modal-title"},[t("span",null,"訂單細節")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Q={class:"modal-body"},X={class:"row"},Y={class:"col-md-4"},$=t("h3",null,"用戶資料",-1),tt={class:"table"},et={key:0},st=t("th",null,"姓名",-1),ot=t("th",null,"Email",-1),dt=t("th",null,"電話",-1),lt=t("th",null,"地址",-1),nt={class:"col-md-8"},at=t("h3",null,"訂單內容",-1),it={class:"table"},rt=t("th",null,"訂單編號",-1),ct=t("th",null,"下單時間",-1),ht=t("th",null,"付款時間",-1),_t={key:0},ut={key:1},pt=t("th",null,"付款狀態",-1),bt={key:0,class:"text-success"},mt={key:1,class:"text-muted"},gt=t("th",null,"總金額",-1),yt=t("h3",null,"選購商品",-1),Ot={class:"table"},ft=t("thead",null,[t("tr")],-1),kt={class:"text-end"},vt={class:"d-flex justify-content-end"},xt={class:"form-check"},Mt={class:"form-check-label",for:"flexCheckDefault"},Lt={key:0},wt={key:1},Ct={class:"modal-footer"},Pt=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1),Vt={id:"delOrderModal",ref:"delOrderModal",class:"modal fade",tabindex:"-1","aria-labelledby":"delOrderModalLabel","aria-hidden":"true"},Dt={class:"modal-dialog"},Et={class:"modal-content border-0"},At=V('<div class="modal-header bg-danger text-white"><h5 id="delOrderModalLabel" class="modal-title"><span>刪除</span></h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body"> 是否刪除 <strong class="text-danger"></strong> 商品(刪除後將無法恢復)。 </div>',2),Bt={class:"modal-footer"},Ft=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function Nt(a,n,r,_,e,i){const v=k("VueLoading"),x=k("BackPagination");return l(),o(h,null,[P(" 後台訂單列表 "),y(v,{active:e.isLoading,color:e.color,"z-index":9999},null,8,["active","color"]),t("div",A,[t("table",B,[F,t("tbody",null,[(l(!0),o(h,null,u(e.orders,(s,M)=>(l(),o(h,{key:M},[e.orders.length?(l(),o("tr",{key:0,class:D({"text-secondary":!s.is_paid})},[t("td",null,d(i.dateFilter(s.create_at)),1),t("td",null,[s.user?(l(),o("span",{key:0,textContent:d(s.user.email)},null,8,N)):p("",!0)]),t("td",T,[t("ul",U,[(l(!0),o(h,null,u(s.products,(c,L)=>(l(),o("li",{key:L},d(c.product.title)+" 數量："+d(c.qty)+" "+d(c.product.unit),1))),128))])]),t("td",S,d(s.total),1),t("td",null,[t("div",I,[O(t("input",{type:"checkbox",class:"form-check-input",id:`paid_switch${s.id}`,"onUpdate:modelValue":c=>s.is_paid=c,onChange:()=>i.updatePaid(s)},null,40,R),[[f,s.is_paid]])]),s.is_paid?(l(),o("span",z,"已付款")):(l(),o("span",H,"未付款"))]),t("td",null,[t("div",q,[t("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:()=>i.openOrderModal(s)}," 檢視 ",8,j),t("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:()=>i.openDelModal(s)}," 刪除 ",8,K)])])],2)):p("",!0)],64))),128))])]),t("div",W,[t("div",Z,[t("div",G,[J,t("div",Q,[t("div",X,[t("div",Y,[$,t("table",tt,[e.tempOrder.user?(l(),o("tbody",et,[t("tr",null,[st,t("td",null,d(e.tempOrder.user.name),1)]),t("tr",null,[ot,t("td",null,d(e.tempOrder.user.email),1)]),t("tr",null,[dt,t("td",null,d(e.tempOrder.user.tel),1)]),t("tr",null,[lt,t("td",null,d(e.tempOrder.user.address),1)])])):p("",!0)])]),t("div",nt,[at,t("table",it,[t("tbody",null,[t("tr",null,[rt,t("td",null,d(e.tempOrder.id),1)]),t("tr",null,[ct,t("td",null,d(i.dateFilter(e.tempOrder.create_at))+" ",1)]),t("tr",null,[ht,t("td",null,[e.tempOrder.paid_date?(l(),o("span",_t,d(i.dateFilter(e.tempOrder.paid_date)),1)):(l(),o("span",ut,"時間不正確"))])]),t("tr",null,[pt,t("td",null,[e.tempOrder.is_paid?(l(),o("strong",bt,"已付款")):(l(),o("span",mt,"未付款"))])]),t("tr",null,[gt,t("td",null,d(e.tempOrder.total),1)])]),yt,t("table",Ot,[ft,t("tbody",null,[(l(!0),o(h,null,u(e.tempOrder.products,s=>(l(),o("tr",{key:s.id},[t("th",null,d(s.product.title),1),t("td",null,d(s.qty)+" / "+d(s.product.unit),1),t("td",kt,d(s.final_total),1)]))),128))])]),t("div",vt,[t("div",xt,[O(t("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault","onUpdate:modelValue":n[0]||(n[0]=s=>e.tempOrder.is_paid=s)},null,512),[[f,e.tempOrder.is_paid]]),t("label",Mt,[e.tempOrder.is_paid?(l(),o("span",Lt,"已付款")):(l(),o("span",wt,"未付款"))])])])])])])]),t("div",Ct,[Pt,t("button",{type:"button",class:"btn btn-primary",onClick:n[1]||(n[1]=()=>i.updatePaid(e.tempOrder))}," 修改付款狀態 ")])])])],512),t("div",Vt,[t("div",Dt,[t("div",Et,[At,t("div",Bt,[Ft,t("button",{type:"button",class:"btn btn-danger",onClick:n[2]||(n[2]=()=>i.delOrder())}," 確認刪除 ")])])])],512),y(x,{pages:e.page,onEmitPages:i.getOrder},null,8,["pages","onEmitPages"])])],64)}const It=C(E,[["render",Nt]]);export{It as default};
