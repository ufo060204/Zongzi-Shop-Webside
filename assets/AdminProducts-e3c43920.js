import{M as g}from"./modal-537db33d.js";import{S as m}from"./sweetalert2.all-48cffbc8.js";import{B as M}from"./BackPagination-05ad504d.js";import{_ as w,c as d,e as x,b as t,F as h,s as P,V,i as L,w as C,t as u,W as r,X as c,$ as A,j as f,r as v,o as l}from"./index-4db09092.js";const{VITE_APP_URL:b,VITE_APP_PATH:_}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"ufo060204",BASE_URL:"/Zongzi-Shop-Webside/",MODE:"production",DEV:!1,PROD:!0},E={data(){return{products:[],tempProduct:{imagesUrl:[]},isNew:!1,page:{},isLoading:!1,color:"#FF700C",productModal:"",delProductModal:""}},methods:{getProducts(i=1){const e=`${b}api/${_}/admin/products/?page=${i}`;this.isLoading=!0,this.$http.get(e).then(n=>{this.products=n.data.products,this.page=n.data.pagination,this.isLoading=!1}).catch(n=>{m.fire(n.data.message)})},openModal(i,e){i==="create"?(this.productModal.show(),this.isNew=!0,this.tempProduct={imagesUrl:[]}):i==="edit"?(this.productModal.show(),this.isNew=!1,this.tempProduct={...e}):i==="delete"&&(this.delProductModal.show(),this.tempProduct={...e})},updateProduct(){this.isLoading=!0;let i=`${b}api/${_}/admin/product`,e="post";this.isNew||(i=`${b}api/${_}/admin/product/${this.tempProduct.id}`,e="put"),this.$http[e](i,{data:this.tempProduct}).then(n=>{this.getProducts(),this.isLoading=!1,this.productModal.hide(),m.fire(n.data.message)}).catch(n=>{m.fire(n.data.message)})},createImages(){this.tempProduct.imagesUrl=[],this.tempProduct.imagesUrl.push("")},deleteProduct(){const i=`${b}api/${_}/admin/product/${this.tempProduct.id}`;this.isLoading=!0,this.$http.delete(i).then(e=>{this.getProducts(),this.isLoading=!1,this.delProductModal.hide(),m.fire(e.data.message)}).catch(e=>{m.fire(e.data.message)})}},components:{BackPagination:M},mounted(){this.getProducts(),this.productModal=new g(this.$refs.productModal),this.delProductModal=new g(this.$refs.delProductModal)}},B={class:"container-lg"},N={class:"text-end mt-4"},T={class:"table mt-4"},I=t("thead",null,[t("tr",null,[t("th",{width:"120"},"分類"),t("th",null,"產品名稱"),t("th",{width:"120"},"原價"),t("th",{width:"120"},"售價"),t("th",{width:"100"},"是否啟用"),t("th",{width:"120"},"編輯")])],-1),S={key:0,class:"text-success"},q={key:1},D={class:"btn-group"},F=["onClick"],R=["onClick"],z={id:"productModal",ref:"productModal",class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"},H={class:"modal-dialog modal-xl"},O={class:"modal-header bg-dark text-white"},W={id:"productModalLabel",class:"modal-title"},j=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),X={class:"modal-body"},Z={class:"row"},G={class:"col-sm-4"},J={class:"mb-2"},K={class:"mb-3"},Q=t("label",{for:"imageUrl",class:"form-label"},"輸入圖片網址",-1),Y=["src"],$=t("h4",null,"多圖設置",-1),tt=["onUpdate:modelValue"],et=["src"],ot={key:1},st={class:"col-sm-8"},lt={class:"mb-3"},it=t("label",{for:"title",class:"form-label"},"標題",-1),dt={class:"row"},rt={class:"mb-3 col-md-6"},nt=t("label",{for:"category",class:"form-label"},"分類",-1),at={class:"mb-3 col-md-6"},ct=t("label",{for:"price",class:"form-label"},"單位",-1),ut={class:"row"},mt={class:"mb-3 col-md-6"},pt=t("label",{for:"origin_price",class:"form-label"},"原價",-1),ht={class:"mb-3 col-md-6"},bt=t("label",{for:"price",class:"form-label"},"售價",-1),_t=t("hr",null,null,-1),gt={class:"mb-3"},Pt=t("label",{for:"description",class:"form-label"},"產品描述",-1),ft={class:"mb-3"},vt=t("label",{for:"content",class:"form-label"},"說明內容",-1),yt={class:"mb-3"},Ut={class:"form-check"},kt=t("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1),Mt=t("div",{class:"modal-footer"},[t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 "),t("button",{type:"submit",class:"btn btn-primary"}," 確認 ")],-1),wt={id:"delProductModal",ref:"delProductModal",class:"modal fade",tabindex:"-1","aria-labelledby":"delProductModalLabel","aria-hidden":"true"},xt={class:"modal-dialog"},Vt={class:"modal-content border-0"},Lt=t("div",{class:"modal-header bg-danger text-white"},[t("h5",{id:"delProductModalLabel",class:"modal-title"},[t("span",null,"刪除產品")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Ct={class:"modal-body"},At=t("strong",{class:"text-danger"},null,-1),Et={class:"modal-footer"},Bt=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function Nt(i,e,n,Tt,o,a){const y=v("VueLoading"),U=v("BackPagination");return l(),d(h,null,[x(y,{active:o.isLoading,color:o.color,"z-index":9999},null,8,["active","color"]),t("div",B,[t("div",N,[t("button",{class:"btn btn-primary",onClick:e[0]||(e[0]=()=>a.openModal("create"))}," 建立新的產品 ")]),t("table",T,[I,t("tbody",null,[(l(!0),d(h,null,P(o.products,s=>(l(),d("tr",{key:s.id},[t("td",null,u(s.category),1),t("td",null,u(s.title),1),t("td",null,u(s.origin_price),1),t("td",null,u(s.price),1),t("td",null,[s.is_enabled?(l(),d("span",S,"啟用")):(l(),d("span",q,"未啟用"))]),t("td",null,[t("div",D,[t("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:()=>a.openModal("edit",s)}," 編輯 ",8,F),t("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:()=>a.openModal("delete",s)}," 刪除 ",8,R)])])]))),128))])]),o.page?(l(),V(U,{key:0,pages:o.page,onEmitPages:a.getProducts},null,8,["pages","onEmitPages"])):L("",!0)]),t("div",z,[t("div",H,[t("form",{onSubmit:e[13]||(e[13]=C((...s)=>a.updateProduct&&a.updateProduct(...s),["prevent"])),class:"modal-content border-0"},[t("div",O,[t("h5",W,[t("span",null,u(o.isNew?"新增產品":"編輯產品"),1)]),j]),t("div",X,[t("div",Z,[t("div",G,[t("div",J,[t("div",K,[Q,r(t("input",{type:"text",class:"form-control",placeholder:"請輸入圖片連結","onUpdate:modelValue":e[1]||(e[1]=s=>o.tempProduct.imageUrl=s)},null,512),[[c,o.tempProduct.imageUrl]])]),t("img",{class:"img-fluid",src:o.tempProduct.imageUrl,alt:""},null,8,Y)]),t("div",null,[$,Array.isArray(o.tempProduct.imagesUrl)?(l(),d(h,{key:0},[(l(!0),d(h,null,P(o.tempProduct.imagesUrl,(s,p)=>(l(),d("div",{key:p+1234},[r(t("input",{type:"text",class:"form-control","onUpdate:modelValue":k=>o.tempProduct.imagesUrl[p]=k},null,8,tt),[[c,o.tempProduct.imagesUrl[p]]]),t("img",{src:o.tempProduct.imagesUrl[p],alt:"",class:"img-fluid mb-2"},null,8,et)]))),128)),!o.tempProduct.imagesUrl.length||o.tempProduct.imagesUrl[o.tempProduct.imagesUrl.length-1]?(l(),d("button",{key:0,class:"btn btn-outline-primary btn-sm d-block w-100",onClick:e[2]||(e[2]=()=>o.tempProduct.imagesUrl.push(""))}," 新增圖片 ")):(l(),d("button",{key:1,class:"btn btn-outline-danger btn-sm d-block w-100",onClick:e[3]||(e[3]=()=>o.tempProduct.imagesUrl.pop())}," 刪除圖片 "))],64)):(l(),d("div",ot,[t("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:e[4]||(e[4]=(...s)=>a.createImages&&a.createImages(...s))}," 新增圖片 ")]))])]),t("div",st,[t("div",lt,[it,r(t("input",{id:"title",type:"text",class:"form-control",placeholder:"請輸入標題","onUpdate:modelValue":e[5]||(e[5]=s=>o.tempProduct.title=s),required:""},null,512),[[c,o.tempProduct.title]])]),t("div",dt,[t("div",rt,[nt,r(t("input",{id:"category",type:"text",class:"form-control",placeholder:"請輸入分類","onUpdate:modelValue":e[6]||(e[6]=s=>o.tempProduct.category=s),required:""},null,512),[[c,o.tempProduct.category]])]),t("div",at,[ct,r(t("input",{id:"unit",type:"text",class:"form-control",placeholder:"請輸入單位","onUpdate:modelValue":e[7]||(e[7]=s=>o.tempProduct.unit=s),required:""},null,512),[[c,o.tempProduct.unit]])])]),t("div",ut,[t("div",mt,[pt,r(t("input",{id:"origin_price",type:"number",min:"0",class:"form-control",placeholder:"請輸入原價","onUpdate:modelValue":e[8]||(e[8]=s=>o.tempProduct.origin_price=s),required:""},null,512),[[c,o.tempProduct.origin_price,void 0,{number:!0}]])]),t("div",ht,[bt,r(t("input",{id:"price",type:"number",min:"0",class:"form-control",placeholder:"請輸入售價","onUpdate:modelValue":e[9]||(e[9]=s=>o.tempProduct.price=s),required:""},null,512),[[c,o.tempProduct.price,void 0,{number:!0}]])])]),_t,t("div",gt,[Pt,r(t("textarea",{id:"description",type:"text",class:"form-control",placeholder:"請輸入產品描述","onUpdate:modelValue":e[10]||(e[10]=s=>o.tempProduct.content=s)},`\r
                `,512),[[c,o.tempProduct.content]])]),t("div",ft,[vt,r(t("textarea",{id:"description",type:"text",class:"form-control",placeholder:"請輸入說明內容","onUpdate:modelValue":e[11]||(e[11]=s=>o.tempProduct.description=s)},`\r
                `,512),[[c,o.tempProduct.description]])]),t("div",yt,[t("div",Ut,[r(t("input",{id:"is_enabled",class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,"onUpdate:modelValue":e[12]||(e[12]=s=>o.tempProduct.is_enabled=s)},null,512),[[A,o.tempProduct.is_enabled]]),kt])])])])]),Mt],32)])],512),t("div",wt,[t("div",xt,[t("div",Vt,[Lt,t("div",Ct,[f(" 是否刪除 "),At,f(" "+u(o.tempProduct.title)+"(刪除後將無法恢復)。 ",1)]),t("div",Et,[Bt,t("button",{type:"button",class:"btn btn-danger",onClick:e[14]||(e[14]=()=>a.deleteProduct())}," 確認刪除 ")])])])],512)],64)}const Ft=w(E,[["render",Nt]]);export{Ft as default};
