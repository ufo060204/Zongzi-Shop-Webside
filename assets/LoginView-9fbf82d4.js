import{S as u}from"./sweetalert2.all-4b4f968c.js";import{_ as m,c as p,d as _,b as s,s as h,H as l,I as d,K as g,F as f,r as b,o as w}from"./index-74925d86.js";const{VITE_APP_URL:v}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"ufo060204",BASE_URL:"/Zongzi-Shop-Webside/",MODE:"production",DEV:!1,PROD:!0},x={data(){return{user:{username:"",password:""},isLoading:!1,color:"#FF700C"}},methods:{login(){const i=`${v}admin/signin`;this.isLoading=!0,this.$http.post(i,this.user).then(e=>{const{expired:r,token:a}=e.data;document.cookie=`ufoToken=${a}; expires=${new Date(r)};`,this.isLoading=!1,this.$router.push("/admin/products")}).catch(e=>{this.isLoading=!1,u.fire(e.message)})}},mounted(){}},L=s("section",{class:"landing-img landing-header"},null,-1),V={style:{"background-color":"#F0EDE5"}},y={class:"container"},E={style:{height:"100vh"},class:"row justify-content-center align-items-center"},P={style:{"box-shadow":"0 0 16px rgba(0, 0, 0, 0.08)"},class:"col-md-4 border border-boderlight py-9"},k=s("h1",{class:"text-center fs-4 mb-5"},"後台管理",-1),D={class:"form-floating mb-3"},T=s("label",{for:"username"},"Email address",-1),A={class:"form-floating"},F=s("label",{for:"password"},"Password",-1),S=s("button",{class:"btn btn-lg btn-text-dark w-100 mt-3",type:"submit",id:"login"}," 登入 ",-1);function U(i,e,r,a,t,n){const c=b("VueLoading");return w(),p(f,null,[L,_(c,{active:t.isLoading,color:t.color,"z-index":9999},null,8,["active","color"]),s("section",V,[s("main",null,[s("div",y,[s("div",E,[s("div",P,[k,s("form",{id:"form",class:"form-signin",onSubmit:e[3]||(e[3]=h((...o)=>n.login&&n.login(...o),["prevent"]))},[s("div",D,[l(s("input",{type:"email",class:"form-control",id:"username","onUpdate:modelValue":e[0]||(e[0]=o=>t.user.username=o),placeholder:"name@example.com",required:"",autofocus:""},null,512),[[d,t.user.username]]),T]),s("div",A,[l(s("input",{onKeydown:e[1]||(e[1]=g((...o)=>n.login&&n.login(...o),["enter"])),type:"password",class:"form-control",id:"password","onUpdate:modelValue":e[2]||(e[2]=o=>t.user.password=o),placeholder:"Password",required:""},null,544),[[d,t.user.password]]),F]),S],32)])])])])])],64)}const R=m(x,[["render",U]]);export{R as default};