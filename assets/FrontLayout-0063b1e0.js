import{d as H,m as x,b as v}from"./index-5cae3d0a.js";import{R as A}from"./vue-router-0808fa9d.js";import{c as u}from"./cart-b6497e16.js";import{n as C}from"./runtime-dom.esm-bundler-8357395d.js";import{_ as B,l as m,ac as h,ad as e,aD as c,z as o,aF as F,bi as i,b5 as b,ag as N,k as r,ab as w,ah as l,aR as I,aP as T}from"./_plugin-vue_export-helper-ddde7e51.js";import"./sweetalert2.all-6567ce3e.js";import"./_commonjsHelpers-042e6b4d.js";const _=H("windowStore",{state:()=>({goTopIcon:!1,windowWidth:0,navbarWhite:!1,homeLoading:!1}),actions:{scroll(){window.onscroll=t=>{t.target.scrollingElement.scrollTop>350?this.goTopIcon=!0:this.goTopIcon=!1,t.target.scrollingElement.scrollTop>50?this.navbarWhite=!0:this.navbarWhite=!1}},getWindowWidth(){this.windowWidth=window.innerWidth,window.addEventListener("resize",()=>{this.windowWidth=window.innerWidth})},goTop(){document.documentElement.scrollTop=0}}}),E={computed:{...x(_,["goTopIcon"])},methods:{...v(_,["scroll","goTop"])},mounted(){this.scroll()}},j=e("span",{class:"material-symbols-outlined fs-4 d-block"}," arrow_upward ",-1),Z=e("p",{class:"fs-6"},"Top",-1),z=[j,Z];function W(t,n,p,k,s,f){return m(),h("div",{class:c({"d-none":!t.goTopIcon})},[e("a",{style:{right:"30px",bottom:"30px",width:"60px",height:"60px"},class:"position-fixed bg-text-light text-white rounded-circle z-index-3 d-flex flex-column justify-content-center align-items-center",href:"#",onClick:n[0]||(n[0]=C((...a)=>t.goTop&&t.goTop(...a),["prevent"]))},z)],2)}const L=B(E,[["render",W]]);const M={data(){return{headerLogoBg:"https://storage.googleapis.com/vue-course-api.appspot.com/ufo060204/1679125705044.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=H4qNaamHNCtEoWotN%2BZjgVq9Qol%2FY6jm%2FllSdDj%2BwXuwn13x6YN3ypZShFeO8BX51n6YuWoAdKCbntjUIF4ip2sbmCRP5rNLUJ8bMT48SbAp6Qop%2FfwJf2SCWE6aabeBO7%2FkseGZhZwpYE4jJo317QquAXcPBoMlPcTyQ%2BszbiUfD6koa96ELS8WjU9PWgCQbbt4xT%2BFRnL%2B02vrQvCCx%2F52w%2F5RjMG2AHP7blu2Qa2VI%2BRjbZfis2sSxMbNPelcmrdqUumAXwLIV13KttpQJjiq31czfghNtRuB1meN21%2BBHfel226McNir2D4f%2FIiabFmOZRv8ZKRNquZkKs0QZg%3D%3D",headerLogoToggleBg:"https://storage.googleapis.com/vue-course-api.appspot.com/ufo060204/1679115945853.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=hl%2BYMGtpEytDvbP3GhuL%2Bkc6T%2BYsdedskYx1OuLVUpQFu2G8gePCxGoANOZ7WBU1KH6vUG0D4GZtTEHPkEAM6XcX7Ehq3zFg0lPNwJnk2wHLg7T1YUU9Zi613Js3ddxOr4rwZUukUL6elmt85ApZ2G8vMpN24CFwAfh1jecioSsbe2dFFxNjr0FZ5wUAmQdcyzhWiD0Gqp1w0brhx0ZRUg8q6S2YalnmYZw4xsmhPfdIxCfTychXEVb3hESuBMH5PwKdf23wPF5ljMvmAURSEA%2BlDss5b5El5pXQZkWZT3K9HcrN1BNUwcq5QGMwaXwpFYfwbs2XsNEZNTKRoOAR0g%3D%3D",mobileHeadBg:!1,isAlternateBgShown:!1,scrollY:0,navMenuIcon:"menu",navCloseIcon:"close",isNavIconChange:!1}},components:{RouterView:A,GoToTop:L},computed:{...x(u,["cart"])},watch:{$route(t,n){this.collapseHide(),this.mobileHeadBg=!1,this.isAlternateBgShown=!1,this.isNavIconChange=!1},isAlternateBgShown(){this.headerLogoBg=this.isAlternateBgShown?this.headerLogoToggleBg:"https://storage.googleapis.com/vue-course-api.appspot.com/ufo060204/1679125705044.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=H4qNaamHNCtEoWotN%2BZjgVq9Qol%2FY6jm%2FllSdDj%2BwXuwn13x6YN3ypZShFeO8BX51n6YuWoAdKCbntjUIF4ip2sbmCRP5rNLUJ8bMT48SbAp6Qop%2FfwJf2SCWE6aabeBO7%2FkseGZhZwpYE4jJo317QquAXcPBoMlPcTyQ%2BszbiUfD6koa96ELS8WjU9PWgCQbbt4xT%2BFRnL%2B02vrQvCCx%2F52w%2F5RjMG2AHP7blu2Qa2VI%2BRjbZfis2sSxMbNPelcmrdqUumAXwLIV13KttpQJjiq31czfghNtRuB1meN21%2BBHfel226McNir2D4f%2FIiabFmOZRv8ZKRNquZkKs0QZg%3D%3D"},isNavIconChange(){this.navMenuIcon=this.isNavIconChange?this.navCloseIcon:"menu"},scrollY(t,n){const p=document.querySelector("#collapseMenu");t!==0?(this.mobileHeadBg=!0,this.isAlternateBgShown=!0):t===0&&p.classList.contains("show")?(this.mobileHeadBg=!0,this.isAlternateBgShown=!0):t===0&&(this.mobileHeadBg=!1,this.isAlternateBgShown=!1)}},methods:{handleScroll(){this.scrollY=window.scrollY},collapseHide(){this.$refs.navCollapse.classList.remove("show")},changeHeader(){this.isNavIconChange=!this.isNavIconChange,this.scrollY>0?(this.mobileHeadBg=!0,this.isAlternateBgShown=!0):this.scrollY===0&&(this.mobileHeadBg=!this.mobileHeadBg,this.isAlternateBgShown=!this.isAlternateBgShown)},...v(u,["getCarts"])},mounted(){document.addEventListener("scroll",this.handleScroll),this.getCarts(),this.collapseHide()}},d=t=>(I("data-v-e509d3c3"),t=t(),T(),t),U={class:"d-flex flex-column vh-100"},G={class:"container-md"},P={class:"d-md-flex justify-content-between align-items-center"},Q={class:"mb-0 d-flex justify-content-between align-items-center py-3 py-md-5"},R={class:"d-flex d-md-none align-items-center"},Y={key:0,style:{transform:"translate(-50%, -60%)"},class:"badge rounded-pill bg-danger position-absolute"},D={class:"d-none d-md-block"},q={class:"d-md-flex text-center m-0 py-11 py-md-0"},V={class:"d-none d-md-block"},K={key:0,style:{transform:"translate(-50%, -30%)"},class:"badge rounded-pill bg-danger position-absolute top-0 start-100"},J={ref:"navCollapse",class:"collapse bg-bg",id:"collapseMenu"},X={class:"d-md-flex text-center m-0 py-11 py-md-0"},O={class:"flex-grow-1"},$={class:"bg-footer"},ee={class:"container-md"},te={class:"d-md-flex justify-content-md-between py-7"},oe={class:"m-0"},se={class:"d-md-flex d-none align-items-md-center"},ae=d(()=>e("p",{class:"m-0 fs-14 text-white text-opacity-50"},"此專題僅供作品展示，非商業用途使用",-1)),ie={class:"d-md-flex mb-md-0 mb-6"},ne=N('<div class="ps-md-6 d-md-flex flex-md-column justify-content-md-between pe-40 border-lg-white border-opacity-lg-50 border-start-lg" data-v-e509d3c3><h5 class="mb-md-0 mb-3 fw-bold text-primary" data-v-e509d3c3>店鋪地址</h5><p class="mb-md-0 mb-4 text-white fs-5" data-v-e509d3c3>358 苗栗縣苑裡鎮天下路87號</p><h5 class="mb-md-0 mb-3 fw-bold text-primary" data-v-e509d3c3>聯絡電話</h5><p class="m-md-0 mb-4" data-v-e509d3c3><a class="footer-link text-white fs-5 transition" href="tel:0988-789456" data-v-e509d3c3>0988-789456</a></p></div>',1),le={class:"ps-md-6 d-md-flex flex-md-column justify-content-md-between border-lg-white border-opacity-lg-50 border-start-lg"},ce=d(()=>e("h5",{class:"mb-md-0 mb-3 fw-bold text-primary"},"電子信箱",-1)),de=d(()=>e("p",{class:"mb-md-0 mb-4"},[e("a",{class:"footer-link text-white fs-5 transition",href:"mailto:zongzi0624@gmail.com"},"zongzi0624@gmail.com")],-1)),re=d(()=>e("h5",{class:"mb-md-0 mb-3 fw-bold text-primary"},"社群平台",-1)),me={class:"mw-128px mb-0 d-flex justify-content-between"},he={class:"footer-link text-white fs-4 d-block transition",target:"_blank",href:"https://www.facebook.com/"},pe={class:"footer-link text-white fs-4 transition",target:"_blank",href:"https://www.instagram.com/"},ge={class:"footer-link text-white fs-4 transition",target:"_blank",href:"https://twitter.com/"},be={class:"d-flex d-md-none align-items-center"},fe=d(()=>e("p",{class:"m-0 fs-14 text-white text-opacity-50"},"此專題僅供作品展示，非商業用途使用",-1));function ue(t,n,p,k,s,f){const a=r("router-link"),y=r("RouterView"),g=r("font-awesome-icon"),S=r("GoToTop");return m(),h("div",U,[e("header",{class:c([{"bg-white scroll-header-bg":s.mobileHeadBg},"fixed-top transition"])},[e("div",G,[e("div",P,[e("h2",Q,[o(a,{to:"/",style:F([{backgroundImage:`url(${s.headerLogoBg})`},{width:"185px",height:"32px","background-repeat":"no-repeat","background-size":"cover"}]),class:"d-block header-logo-img"},null,8,["style"]),e("div",R,[o(a,{class:"fs-4 d-block me-4",to:"/cart"},{default:i(()=>[e("span",{class:c(["material-symbols-outlined nav-icon position-relative",{"text-text-dark":s.mobileHeadBg,"text-white":!s.mobileHeadBg}])}," shopping_cart ",2),t.cart.length!==0?(m(),h("span",Y,b(t.cart.length),1)):w("",!0)]),_:1}),e("div",{onClick:n[0]||(n[0]=()=>f.changeHeader())},[e("span",{"data-bs-toggle":"collapse",role:"button","data-bs-target":"#collapseMenu","aria-expanded":"false","aria-controls":"collapseMenu",class:c([{"text-text-dark":s.mobileHeadBg,"text-white":!s.mobileHeadBg},"material-symbols-outlined nav-icon d-block"])},b(s.navMenuIcon),3)])])]),e("nav",D,[e("ul",q,[e("li",null,[o(a,{to:"/about",class:c(["d-block nav-link text-decoration-none fw-bold me-md-6 py-2",{"text-text-dark":s.mobileHeadBg,"text-white":!s.mobileHeadBg}])},{default:i(()=>[l("品牌故事")]),_:1},8,["class"])]),e("li",null,[o(a,{to:"/products",class:c(["d-block nav-link text-decoration-none fw-bold me-md-6 py-2",{"text-text-dark":s.mobileHeadBg,"text-white":!s.mobileHeadBg}])},{default:i(()=>[l("美味專區")]),_:1},8,["class"])]),e("li",V,[o(a,{to:"/cart",class:c(["d-block nav-link text-decoration-none fw-bold me-md-2 py-2 position-relative",{"text-text-dark":s.mobileHeadBg,"text-white":!s.mobileHeadBg}])},{default:i(()=>[l(" 購物車 "),t.cart.length!==0?(m(),h("span",K,b(t.cart.length),1)):w("",!0)]),_:1},8,["class"])])])])])]),e("nav",J,[e("ul",X,[e("li",null,[o(a,{to:"/about",class:"d-block text-decoration-none fw-bold me-md-6 py-2 text-text-dark text-md-white"},{default:i(()=>[l("品牌故事")]),_:1})]),e("li",null,[o(a,{to:"/products",class:"d-block text-decoration-none fw-bold me-md-6 py-2 text-text-dark text-md-white"},{default:i(()=>[l("美味專區")]),_:1})])])],512)],2),e("div",O,[o(y)]),e("footer",$,[e("div",ee,[e("div",te,[e("div",null,[e("h2",oe,[o(a,{to:"/",class:"d-block mb-md-10 mb-6",style:{width:"299px",height:"48px","background-image":"url('https://storage.googleapis.com/vue-course-api.appspot.com/ufo060204/1679126542123.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=ErtmdGsStSzMTGeJbXm5FK%2F1qtn4%2BSJ98A%2B9YgyHA0l2egaQ1vJuJxiC2kyVOnxEUyf641bSK7CtTv7ebmGHNdEmeyfG18%2B%2B%2FbQHzW1WjZdx%2Ft4VYXt40P4KvVxI2D7HdboWyzHCAM%2BoilHaEWRUhAj0QSEqbkAfEnSH9W45agK%2B4M6qwxvUI1fnn29zvV6LfWsfFfE8kCek5tUhLPbNe7%2BpPCS4K0Ra1n9nKGyil8PUAiyASht1k5CgU2SkIF%2F3htwDnqVg6Bj%2BDCH45L61zAJByiuwn4WZpo0EyTskxe1w9jXGBeTmk8xhFt3IssQboiFAcNLPkxcqOSYEJKPJhw%3D%3D')","background-repeat":"no-repeat","background-size":"cover"}})]),e("div",se,[o(a,{to:"/login",class:"footer-link text-white fs-12 bg-white bg-opacity-20 p-2 me-2 fw-bold transition"},{default:i(()=>[l("後台管理")]),_:1}),ae])]),e("div",ie,[ne,e("div",le,[ce,de,re,e("ul",me,[e("li",null,[e("a",he,[o(g,{icon:"fa-brands fa-facebook"})])]),e("li",null,[e("a",pe,[o(g,{icon:"fa-brands fa-instagram"})])]),e("li",null,[e("a",ge,[o(g,{icon:"fa-brands fa-twitter"})])])])])]),e("div",be,[o(a,{to:"/login",class:"footer-link text-white bg-white bg-opacity-20 p-2 me-2 fw-bold fs-12"},{default:i(()=>[l("後台管理")]),_:1}),fe])])])]),o(S)])}const Se=B(M,[["render",ue],["__scopeId","data-v-e509d3c3"]]);export{Se as default};
