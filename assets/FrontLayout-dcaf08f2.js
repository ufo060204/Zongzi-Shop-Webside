import{_ as h,R as f,m as g,a as x,r,o as i,c as m,b as e,d as t,w as c,F as b,e as _,f as n,t as w,g as v}from"./index-fd729ac0.js";import{c as u}from"./cart-183d1959.js";import"./sweetalert2.all-bfa050d5.js";const F={data(){return{}},components:{RouterView:f},computed:{...g(u,["cart"])},methods:{scrollHeader(){const a=document.querySelector("header"),l=document.querySelectorAll(".nav-text-white"),d=document.querySelector(".header-logo-img");console.log(l),document.addEventListener("scroll",function(){window.pageYOffset>0?(a.classList.add("scroll-header-bg"),d.style["background-image"]="url('https://storage.googleapis.com/vue-course-api.appspot.com/ufo060204/1679115945853.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=hl%2BYMGtpEytDvbP3GhuL%2Bkc6T%2BYsdedskYx1OuLVUpQFu2G8gePCxGoANOZ7WBU1KH6vUG0D4GZtTEHPkEAM6XcX7Ehq3zFg0lPNwJnk2wHLg7T1YUU9Zi613Js3ddxOr4rwZUukUL6elmt85ApZ2G8vMpN24CFwAfh1jecioSsbe2dFFxNjr0FZ5wUAmQdcyzhWiD0Gqp1w0brhx0ZRUg8q6S2YalnmYZw4xsmhPfdIxCfTychXEVb3hESuBMH5PwKdf23wPF5ljMvmAURSEA%2BlDss5b5El5pXQZkWZT3K9HcrN1BNUwcq5QGMwaXwpFYfwbs2XsNEZNTKRoOAR0g%3D%3D')",l.forEach(function(s){s.classList.remove("nav-text-white"),s.classList.add("nav-text-dark")})):(a.classList.remove("scroll-header-bg"),d.style["background-image"]="url(../../src/assets/images/logo-header-default.png)",l.forEach(function(s){s.classList.remove("nav-text-dark"),s.classList.add("nav-text-white")}))})},...x(u,["getCarts"])},mounted(){this.scrollHeader(),this.getCarts()}},y={class:"fixed-top transition"},k={class:"container-md"},E={class:"d-md-flex justify-content-between align-items-md-center py-5"},L={class:"mb-0"},N={class:"d-md-flex list-unstyled mb-0"},S={key:0,style:{transform:"translate(-50%, -70%)"},class:"badge rounded-pill bg-danger position-absolute top-0 start-100"},A={style:{"background-color":"#241000"}},U={class:"container-md"},Z={class:"d-md-flex justify-content-md-between py-7"},z={class:"m-0"},B={class:"d-md-flex align-items-md-center"},G=e("p",{style:{color:"#FFFFFF80","font-size":"14px"},class:"m-0"},"此專題僅供作品展示，非商業用途使用",-1),V=_('<div class="d-md-flex"><div class="ps-6 d-md-flex flex-md-column justify-content-md-between" style="border-left:1px solid #FFFFFF80;padding-right:40px;"><h5 class="mb-0 fw-bold text-primary">店鋪地址</h5><p class="mb-0 text-white fs-5">358 苗栗縣苑裡鎮天下路87號</p><h5 class="mb-0 fw-bold text-primary">聯絡電話</h5><p class="m-0 text-white fs-5">0988-789456</p></div><div class="ps-6 d-md-flex flex-md-column justify-content-md-between" style="border-left:1px solid #FFFFFF80;"><h5 class="mb-0 fw-bold text-primary">電子信箱</h5><p class="mb-0 text-white fs-5">zongzi0624@gmail.com</p><h5 class="mb-0 fw-bold text-primary">社群平台</h5><ul class="d-md-flex list-unstyled"><li><a href=""><i class="fa-brands fa-facebook"></i></a></li><li><a href=""></a></li><li><a href=""></a></li></ul></div></div>',1);function C(a,l,d,s,R,T){const o=r("router-link"),p=r("RouterView");return i(),m(b,null,[e("header",y,[e("div",k,[e("div",E,[e("h1",L,[t(o,{to:"/",class:"d-block header-logo-img",style:{width:"185px",height:"32px","background-repeat":"no-repeat","background-size":"cover"}})]),e("nav",null,[e("ul",N,[e("li",null,[t(o,{to:"/about",class:"text-decoration-none fw-bold me-6 nav-text-white"},{default:c(()=>[n("品牌故事")]),_:1})]),e("li",null,[t(o,{to:"/products",class:"text-decoration-none fw-bold me-6 nav-text-white"},{default:c(()=>[n("美味專區")]),_:1})]),e("li",null,[t(o,{to:"/cart",class:"text-decoration-none fw-bold me-2 nav-text-white position-relative"},{default:c(()=>[n(" 購物車 "),a.cart.length!==0?(i(),m("span",S,w(a.cart.length),1)):v("",!0)]),_:1})])])])])])]),t(p),e("footer",A,[e("div",U,[e("div",Z,[e("div",null,[e("h2",z,[t(o,{to:"/",class:"d-block mb-10",style:{width:"299px",height:"48px","background-image":"url(../../src/assets/images/logo-footer-default.png)","background-repeat":"no-repeat","background-size":"cover"}})]),e("div",B,[t(o,{to:"/admin/products",style:{"background-color":"#FFFFFF33","font-size":"12px"},class:"text-decoration-none text-white p-2 me-2 fw-bold"},{default:c(()=>[n("後台管理")]),_:1}),G])]),V])])])],64)}const D=h(F,[["render",C]]);export{D as default};
