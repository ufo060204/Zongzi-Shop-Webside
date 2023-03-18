import{_ as x,L as b,a as f,r,o as _,c as A,d as c,b as t,w as i,F as w,e as l,f as a,p as y,k}from"./index-face757b.js";import{c as F}from"./cart-9ffd31ec.js";import"./sweetalert2.all-4e3cb76a.js";const z="/Zongzi-Shop-Webside/assets/img1-c09414a7.png",h="/Zongzi-Shop-Webside/assets/polygon-big-3e80b9d3.svg",g="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAABQCAYAAAAz8KTYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAkSURBVHgB7cYxDQAACAOwgRZuFCAO6XDMxJL1akzX4iXIcXRz2FkBrtmSpOYAAAAASUVORK5CYII=",B="/Zongzi-Shop-Webside/assets/img2-14b01c78.png",C="/Zongzi-Shop-Webside/assets/img3-dd4fbadb.png",p="/Zongzi-Shop-Webside/assets/polygon-small-d8ee8841.svg",m="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMcAAAACCAYAAADsIMjBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAlSURBVHgB7cDBDQAABATBozL9eipAZ+ItUcKOdWWMFAJwuAC8Fnr6A5/Hs4/2AAAAAElFTkSuQmCC",D="/Zongzi-Shop-Webside/assets/img4-ae98b986.png";const{VITE_APP_URL:L,VITE_APP_PATH:j}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"ufo060204",BASE_URL:"/Zongzi-Shop-Webside/",MODE:"production",DEV:!1,PROD:!0},E={data(){return{products:[],popular:[],isLoading:!1,color:"#FF700C"}},components:{Loading:b},methods:{getProducts(){this.isLoading=!0,this.$http.get(`${L}v2/api/${j}/products/all`).then(e=>{this.products=e.data.products,this.isLoading=!1,console.log("產品列表",this.products)}).catch(e=>{alert(e.message)})},...f(F,["addToCart"]),getPopular(){this.popular=this.products.slice(0,3),console.log(this.popular)}},mounted(){this.getProducts()}},s=e=>(y("data-v-834c2027"),e=e(),k(),e),N={style:{height:"100vh","background-repeat":"no-repeat","background-size":"cover","background-position":"left top","background-attachment":"fixed"},class:"d-flex align-items-center landing-img"},T={class:"container"},I={class:"row"},S={class:"col-md-3"},U={class:"d-flex align-items-center position-relative"},M=l('<h1 style="border-right:1px solid #FFFFFF66;z-index:1;" class="mb-0 me-6 py-3 pe-3 text-white fw-bold drop-shadow" data-v-834c2027> 吉<br data-v-834c2027>祥<br data-v-834c2027>粽<br data-v-834c2027>香<br data-v-834c2027>藏<br data-v-834c2027>館 </h1><div style="z-index:1;" class="d-flex me-7" data-v-834c2027><h4 style="color:#e6e6e6;" class="mb-0 me-3 drop-shadow" data-v-834c2027> 傳<br data-v-834c2027>統<br data-v-834c2027>粽<br data-v-834c2027>香<br data-v-834c2027>，<br data-v-834c2027>新<br data-v-834c2027>潮<br data-v-834c2027>食<br data-v-834c2027>趣 </h4><h4 style="color:#e6e6e6;" class="m-0 drop-shadow" data-v-834c2027> 品<br data-v-834c2027>嘗<br data-v-834c2027>傳<br data-v-834c2027>承<br data-v-834c2027>40<br data-v-834c2027>年<br data-v-834c2027>故<br data-v-834c2027>鄉<br data-v-834c2027>的<br data-v-834c2027>好<br data-v-834c2027>味<br data-v-834c2027>道 </h4></div>',2),V={style:{"z-index":"1"},class:"m-0"},Y=s(()=>t("br",null,null,-1)),Q=s(()=>t("br",null,null,-1)),R=s(()=>t("br",null,null,-1)),P=s(()=>t("div",{class:"position-absolute translate-middle-x",style:{width:"492px",height:"421px","background-image":"url('https://storage.googleapis.com/vue-course-api.appspot.com/ufo060204/1679126327757.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Y9t61UDHGiR5%2F2TwMpjrwEqdvna8exV5dXECGOLNDy%2BL3t8bcU0nvKppTOBivtBRh3ueo%2Fd7cVsVoJk0rVDCQIh5j1bMcOcduNtQOP5znDnXHICs%2BwmvVTTs0jfmcxWFpFh83O3rnwVSuR35mtdUjeja2fAm9MRMT2%2FIIW4wOXZtYWEidohp7KAadIJgVkL3DkLjmUJGjD6kBvKO1tIYtaCN%2F2lg%2BYuXomhP4jBQEDVfBNvu5UN8fwEKhgdwG%2Fia3MFKD4TXkdrTVh2hVJCKzW0lzVu%2BSTLhjaWYp1aZXMgeO9o6MUlnTqY1TeXGTKUqw4%2FVobddnQphdiFEdlk15g%3D%3D')","background-repeat":"no-repeat","background-position":"top",top:"16px",left:"50%"}},null,-1)),W={class:"py-8",style:{"background-image":"url('https://storage.googleapis.com/vue-course-api.appspot.com/ufo060204/1679115636333.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=WyBEJKfQTROnLwKr7SXyrWBqGPVWgYoo%2FkZfarfV4F0zXaVkwW%2BoXHaPDat7hLVAHb66GmAR2JDYzPtEiBy9Ibtcixs%2Fzx2K3J%2BwUEumgcRuCicXs8lqVN7iezp0IJCzGxhxPm0rj5LsteuA7qywatbc5L4gPUJa5%2FYCZoVjcZF6Tka6HXBrTvixlH%2FIg9NAJRNcWNglxJy7luxKpxUtUFCdCyCWH8w00QGzWhXLQQnbb9h9Ro9v%2F2JAdQPAyLPhCCr3pMXRI3zZAaqw73j7xw0weorzF4Am4vcaOcIy%2FNK5czPF3ubjVfs46t25qqiod5xZvJOLeLY%2BVtx06O5PCQ%3D%3D')","background-repeat":"no-repeat","background-size":"cover","background-position":"left top"}},J={class:"container-md"},X={class:"row mb-8 align-items-md-center"},K=s(()=>t("div",{"data-aos":"fade-right","data-aos-offset":"300","data-aos-easing":"ease-in-sine",class:"col-md-6"},[t("img",{src:z,alt:"img1",class:"img-fluid"})],-1)),O={"data-aos":"fade-right","data-aos-offset":"300","data-aos-easing":"ease-in-sine",class:"col-md-6"},G={class:"d-md-flex justify-content-md-center py-7",style:{height:"396px"}},Z={class:"d-md-flex"},H=l('<h3 style="height:192px;" class="wm-lr m-0 pe-6 fw-bold text-text-dark text-justify" data-v-834c2027> 用料精選 </h3><div class="d-md-flex" data-v-834c2027><h5 class="wm-lr m-0 px-3 text-text-light text-justify" data-v-834c2027> 我們的粽子使用的食材 </h5><h5 class="wm-lr m-0 px-3 text-text-light text-justify" data-v-834c2027> 都是經過精心選擇堅持 </h5><h5 class="wm-lr m-0 px-3 text-text-light text-justify" data-v-834c2027> 傳統古早味，獨特香料 </h5><h5 class="wm-lr m-0 px-3 text-text-light text-justify" data-v-834c2027> 配方、品質優良傳統手 </h5><h5 class="wm-lr m-0 px-3 text-text-light text-justify" data-v-834c2027> 工製作方式製作，保證 </h5><h5 style="height:150px;" class="wm-lr mx-0 mb-0 px-3 text-text-light text-justify" data-v-834c2027> 口感道地。 </h5></div>',2),q={style:{"text-align":"-webkit-center"},class:"ps-6"},$=s(()=>t("img",{class:"d-block mb-4",src:h,alt:""},null,-1)),tt=s(()=>t("img",{class:"d-block mb-4",src:g,alt:""},null,-1)),st={class:"m-0"},et={class:"row align-items-md-center"},at={"data-aos":"fade-left","data-aos-offset":"300","data-aos-easing":"ease-in-sine",class:"col-md-6"},ot={class:"d-md-flex justify-content-md-center py-7",style:{height:"396px"}},ct={class:"d-md-flex"},dt=l('<h3 style="height:288px;" class="wm-lr m-0 pe-6 fw-bold text-text-dark text-justify" data-v-834c2027> 多款口味選擇 </h3><div style="color:#594a3e;" class="d-md-flex" data-v-834c2027><h5 class="wm-lr m-0 px-3 fw-normal text-justify" data-v-834c2027> 提供多種口味的粽子供 </h5><h5 class="wm-lr m-0 px-3 fw-normal text-justify" data-v-834c2027> 消費者做選擇，從傳統 </h5><h5 class="wm-lr m-0 px-3 fw-normal text-justify" data-v-834c2027> 的肉粽到創新的水果粽 </h5><h5 class="wm-lr m-0 px-3 fw-normal text-justify" data-v-834c2027> 都有，無添加防腐劑， </h5><h5 class="wm-lr m-0 px-3 fw-normal text-justify" data-v-834c2027> 顧客能夠安心享用到新 </h5><h5 style="height:210px;" class="wm-lr mx-0 mb-0 px-3 text-text-light text-justify" data-v-834c2027> 鮮美味的粽子。 </h5></div>',2),it={style:{"text-align":"-webkit-center"},class:"ps-6"},lt=s(()=>t("img",{class:"d-block mb-4",src:h,alt:""},null,-1)),nt=s(()=>t("img",{class:"d-block mb-4",src:g,alt:""},null,-1)),rt={class:"m-0"},pt=s(()=>t("div",{"data-aos":"fade-left","data-aos-offset":"300","data-aos-easing":"ease-in-sine",class:"col-6"},[t("img",{src:B,alt:"img2",class:"img-fluid"})],-1)),mt={class:"py-8"},ht={class:"container-md"},gt=s(()=>t("h2",{class:"mb-10 fw-bold text-center"},"熱銷產品",-1)),ut={class:"row"},vt={"data-aos":"fade-up","data-aos-duration":"3000",class:"col-md-4"},xt={class:"border-0 px-7"},bt={style:{"background-image":"url('https://storage.googleapis.com/vue-course-api.appspot.com/ufo060204/1679122640369.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=ECc5CgWHI%2FbzNcrIRXWub01pyFCMkovCLTlZMvLYydlwrKiNhGfBXXfa28UO69YIYEdKuvkVc348mvEStQrDbixqhwq%2Bam4NlDzR4x5SsLm8MA6I2WCZcaV9%2F62igSB1NgcFx6yyHw9rCrWcwxSUDYel6jJaYEGngdeznelcTOdGAAlrLQCD7bRbNf5Q4Th%2FTqdqZiCsLno7SJUFnpJeOlsHL6W8yPDsNu%2FI3EBGpf0BTsYHFWzfc%2FKpg0UhsdTW5AxtMzsJ75LaGWmvlvKmpMf8OXaXCCUJq5P2VUJxSddBgHJgRONKhmLE1vTbReNBQjhFWNmRRj06fn6onQz7Tg%3D%3D')","background-size":"60%","background-position":"center"},class:"product-img d-md-flex justify-content-md-center align-items-md-center"},ft=s(()=>t("span",{style:{"font-weight":"900",top:"0",left:"0"},class:"position-absolute text-primary fs-1"},"01",-1)),_t=s(()=>t("div",{class:"mb-3"},[t("h4",{class:"m-0 text-text-dark fw-bold text-center mb-3"}," 招牌北部粽 "),t("p",{style:{"font-size":"32px"},class:"m-0 text-primary fw-bold text-center"}," $ 75 元 ")],-1)),At={class:"text-center"},wt={"data-aos":"fade-up","data-aos-duration":"3000",class:"col-md-4"},yt={class:"border-0 px-7"},kt={style:{"background-image":"url('https://storage.googleapis.com/vue-course-api.appspot.com/ufo060204/1679123198362.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=MYX4dfnxJK3TeDhNuC%2BaQy4kWOFQ%2F7oU%2BTwevZErSUjvBzgUsmZEYZLOJDGB0%2Fy272S61yZb8natkAW8hq6sLgm8lanrd32%2By9UZDNDFdJ9qqVcIZozkUzgCcLxsy2PDzMzpMa9R7woX2KotFjOwMW9aPMERoGxmvPwkaLIk4KAjSVUBYc%2F9px%2BRFCbgYxAdke5bDK89UMhDu0tEhTGHeDjD5RWPlLiIZ%2FusWjwInOM%2F1lDToTc5F%2FwT%2F4jR11Ezu6tEELwdMIDSSetB80VXrJWBM9tZS%2FS7Q2K2xDt%2B65MNUNQ%2FEQL7cI2MoL4HbswnBb67Glv%2BfmL%2Bq5qbGy%2FqJg%3D%3D')","background-size":"60%","background-position":"center"},class:"product-img zongzi2-bg d-md-flex justify-content-md-center align-items-md-center"},Ft=s(()=>t("span",{style:{"font-weight":"900",top:"0",left:"0"},class:"position-absolute text-primary fs-1"},"02",-1)),zt=s(()=>t("div",{class:"mb-3"},[t("h4",{class:"m-0 text-text-dark fw-bold text-center mb-3"}," 傳統南部粽 "),t("p",{style:{"font-size":"32px"},class:"m-0 text-primary fw-bold text-center"}," $ 75 元 ")],-1)),Bt={class:"text-center"},Ct={"data-aos":"fade-up","data-aos-duration":"3000",class:"col-md-4"},Dt={class:"border-0 px-7"},Lt={style:{"background-image":"url('https://storage.googleapis.com/vue-course-api.appspot.com/ufo060204/1679123253511.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=fPsA7BdvnNZ93zAvJ9EqPUBvv4Qu6scveM2Y8N79L%2FXHJbmBCAazitevPvkaaGn2EAYKzYtTadJX5qJCeE15ohTkqaWUfefIrJVvZWc%2BNDhDFNCOQnbu8ExrPJbb0n%2Fis0q5AwZwhHNLCgzulYtf0s%2BS8o0NPhr8HNSsfHZm%2BRnrhwsNxzSzooHvMgxBzODzZQn7InMqueIIYeVAYsjjyBMN6pNJchPrO0BsCtNT64yjmVoCNMM8cKVroxR0igBK9T131UO6%2FA%2BxNHVLGhhiHvXApfe83mJZ024gKRr%2FGKt6DdBIJUXzA9YG4g1jaf4TdQe4bsm1N4Y%2FM5qpKVJppw%3D%3D')","background-size":"70%","background-position":"center"},class:"product-img d-md-flex justify-content-md-center align-items-md-center"},jt=s(()=>t("span",{style:{"font-weight":"900",top:"0",left:"0"},class:"position-absolute text-primary fs-1"},"03",-1)),Et=s(()=>t("div",{class:"mb-3"},[t("h4",{class:"m-0 text-text-dark fw-bold text-center mb-3"}," 秘傳醬汁 "),t("p",{style:{"font-size":"32px"},class:"m-0 text-primary fw-bold text-center"}," $ 90 元 ")],-1)),Nt={class:"text-center"},Tt=l('<section class="py-8" style="background-image:url(&#39;https://storage.googleapis.com/vue-course-api.appspot.com/ufo060204/1679115673055.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&amp;Expires=1742169600&amp;Signature=UUtlULZDx%2Fu1TeA032%2BmaYh1JN%2F0xQ43B5GdJMGfw597EM1tyTbvZr7xOz9%2FshwvRfzWhY6oXwjrhw%2BAtmjfTFUM%2FjUgC1ixQe8LqNnQEDaQ3ZVL0UikQcEyPpnlNQHb%2FMBnt1%2B%2BhKIoELEfX8GwVGlGzxOzuGvA2z6U%2FiKE2jOS4LiM8LccTOjON4zFgLMLq%2FCTUtJonw8gRpSi0MJLl%2BEmiD23SrWatdIaMACGhbAJDYaDVAZISKhanvbISFrepLDDEgL%2FQ01AohwWdKTgDzZmQP5360d5CL%2FEuxYWuxNwZpIAYN4s384WK3POcRs0ta2GYXwsvfC3PXKr5fKtRw%3D%3D&#39;);background-repeat:no-repeat;background-size:cover;background-position:left top;" data-v-834c2027><div class="container-md" data-v-834c2027><h2 class="mb-10 text-center fw-bold" data-v-834c2027>最新消息</h2><div class="row" data-v-834c2027><div data-aos="zoom-in" data-aos-duration="2000" class="col-md-6" data-v-834c2027><div style="height:200px;" class="position-relative d-md-flex" data-v-834c2027><img class="img-fluid" src="'+C+'" alt="img3" data-v-834c2027><div class="p-4" data-v-834c2027><h4 class="mb-3 text-text-dark fw-bold" data-v-834c2027> 春節優惠活動，全店商品八折 </h4><p style="color:#594a3e;" class="mb-3 fs-5" data-v-834c2027> 01/29 前結帳時輸入，優惠碼 Happy2023 可享 8 折優惠！ </p><div class="d-flex justify-content-between align-items-center" data-v-834c2027><img src="'+p+'" alt="polygon-small" data-v-834c2027><img src="'+m+'" alt="Rectangle-m" data-v-834c2027><a class="text-decoration-none fw-bold fs-5 stretched-link" href="#" data-v-834c2027>查看更多</a></div></div></div></div><div data-aos="zoom-in" data-aos-duration="2000" class="col-md-6" data-v-834c2027><div style="height:200px;" class="position-relative d-md-flex" data-v-834c2027><img class="img-fluid" src="'+D+'" alt="img4" data-v-834c2027><div class="p-4" data-v-834c2027><h4 class="mb-3 text-text-dark fw-bold" data-v-834c2027> 感謝美食節目、新聞媒體報導 </h4><p style="color:#594a3e;" class="mb-3 fs-5" data-v-834c2027> 飄香 40 年台灣在地傳統美食 - 吉祥粽香藏館 </p><div class="d-flex justify-content-between align-items-center" data-v-834c2027><img src="'+p+'" alt="polygon-small" data-v-834c2027><img src="'+m+'" alt="Rectangle-m" data-v-834c2027><a class="text-decoration-none fw-bold fs-5 stretched-link" href="#" data-v-834c2027>查看更多</a></div></div></div></div></div></div></section>',1);function It(e,o,St,Ut,n,Mt){const u=r("loading"),d=r("router-link");return _(),A(w,null,[c(u,{active:n.isLoading,"onUpdate:active":o[0]||(o[0]=v=>n.isLoading=v),"can-cancel":!1,color:n.color},null,8,["active","color"]),t("main",null,[t("section",N,[t("div",T,[t("div",I,[t("div",S,[t("div",U,[M,t("h5",V,[c(d,{to:"/products",class:"banner-link d-block text-decoration-none p-3 text-white",href:"#"},{default:i(()=>[a("探"),Y,a("索"),Q,a("美"),R,a("味")]),_:1})]),P])])])])]),t("section",W,[t("div",J,[t("div",X,[K,t("div",O,[t("div",G,[t("div",Z,[H,t("div",q,[$,tt,t("h5",st,[c(d,{to:"/products",style:{height:"152px"},href:"#",class:"product-link wm-lr border border-text-dark fw-bold text-text-dark text-decoration-none p-3 text-justify"},{default:i(()=>[a("更多產品")]),_:1})])])])])])]),t("div",et,[t("div",at,[t("div",ot,[t("div",ct,[dt,t("div",it,[lt,nt,t("h5",rt,[c(d,{to:"/products",style:{height:"152px"},href:"#",class:"product-link wm-lr border border-text-dark fw-bold text-text-dark text-decoration-none p-3 text-justify"},{default:i(()=>[a("更多產品")]),_:1})])])])])]),pt])])]),t("section",mt,[t("div",ht,[gt,t("div",ut,[t("div",vt,[t("div",xt,[t("div",bt,[c(d,{class:"text-decoration-none product-text stretched-link",to:"/product/-NM27yCriEAoX1-aPW4j"},{default:i(()=>[a(" 查看更多 ")]),_:1}),ft]),t("div",null,[_t,t("div",At,[t("button",{onClick:o[1]||(o[1]=()=>e.addToCart("-NM27yCriEAoX1-aPW4j")),type:"button",class:"cart-hover text-text-dark d-inline-block py-3 px-7 fs-5 fw-bold text-decoration-none border border-text-dark"}," 加入購物車 ")])])])]),t("div",wt,[t("div",yt,[t("div",kt,[c(d,{class:"text-decoration-none product-text stretched-link",to:"/product/-NM2d45PodDNatFQYTQ3"},{default:i(()=>[a(" 查看更多 ")]),_:1}),Ft]),t("div",null,[zt,t("div",Bt,[t("button",{onClick:o[2]||(o[2]=()=>e.addToCart("-NM2d45PodDNatFQYTQ3")),type:"button",class:"cart-hover text-text-dark d-inline-block py-3 px-7 fs-5 fw-bold text-decoration-none border border-text-dark"}," 加入購物車 ")])])])]),t("div",Ct,[t("div",Dt,[t("div",Lt,[c(d,{class:"text-decoration-none product-text stretched-link",to:"/product/-NM2huSRBtLQp39YYdPB"},{default:i(()=>[a(" 查看更多 ")]),_:1}),jt]),t("div",null,[Et,t("div",Nt,[t("button",{onClick:o[3]||(o[3]=()=>e.addToCart("-NM2huSRBtLQp39YYdPB")),type:"button",class:"cart-hover text-text-dark d-inline-block py-3 px-7 fs-5 fw-bold text-decoration-none border border-text-dark"}," 加入購物車 ")])])])])])])]),Tt])],64)}const Rt=x(E,[["render",It],["__scopeId","data-v-834c2027"]]);export{Rt as default};