import{_ as u,L as x,a as A,c as f,d,b as t,w as o,F as w,e as b,r as p,o as k,g as s,p as y,k as B}from"./index-d673ae41.js";import{c as F}from"./cart-7b461017.js";import"./sweetalert2.all-563a6f37.js";const z="/Zongzi-Shop-Webside/assets/img1-c09414a7.png",l="/Zongzi-Shop-Webside/assets/polygon-big-3e80b9d3.svg",v="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAABQCAYAAAAz8KTYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAkSURBVHgB7cYxDQAACAOwgRZuFCAO6XDMxJL1akzX4iXIcXRz2FkBrtmSpOYAAAAASUVORK5CYII=",r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAoCAYAAAA/tpB3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAfSURBVHgB1cQxDQAADAIwMi37UYB/WYANehTi+1DbBVIEAd4HbjKEAAAAAElFTkSuQmCC",N="/Zongzi-Shop-Webside/assets/img2-14b01c78.png",D="/Zongzi-Shop-Webside/assets/img3-dd4fbadb.png",h="/Zongzi-Shop-Webside/assets/polygon-small-d8ee8841.svg",m="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMcAAAACCAYAAADsIMjBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAlSURBVHgB7cDBDQAABATBozL9eipAZ+ItUcKOdWWMFAJwuAC8Fnr6A5/Hs4/2AAAAAElFTkSuQmCC",E="/Zongzi-Shop-Webside/assets/img4-ae98b986.png";const{VITE_APP_URL:Y,VITE_APP_PATH:C}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"ufo060204",BASE_URL:"/Zongzi-Shop-Webside/",MODE:"production",DEV:!1,PROD:!0},I={data(){return{products:[],popular:[],articles:[],isLoading:!1,color:"#FF700C"}},components:{Loading:x},methods:{getProducts(){this.isLoading=!0,this.$http.get(`${Y}v2/api/${C}/products/all`).then(c=>{this.products=c.data.products,this.isLoading=!1}).catch(c=>{alert(c.message)})},...A(F,["addToCart"])},mounted(){this.getProducts()}},a=c=>(y("data-v-d92c14b0"),c=c(),B(),c),T={style:{height:"100vh","background-repeat":"no-repeat","background-size":"cover","background-attachment":"fixed"},class:"d-flex align-items-center landing-img bg-attachment-fixed"},L={class:"container-lg"},S={class:"row"},Q={class:"col-md-3"},M={class:"d-flex align-items-center justify-content-center position-relative"},U=b('<h1 style="border-right:1px solid #FFFFFF66;z-index:1;" class="mb-0 me-6 py-3 pe-3 text-white fw-bold drop-shadow" data-v-d92c14b0> 吉<br data-v-d92c14b0>祥<br data-v-d92c14b0>粽<br data-v-d92c14b0>香<br data-v-d92c14b0>藏<br data-v-d92c14b0>館 </h1><div style="z-index:1;" class="d-flex me-7" data-v-d92c14b0><h4 style="color:#e6e6e6;" class="mb-0 me-3 drop-shadow" data-v-d92c14b0> 傳<br data-v-d92c14b0>統<br data-v-d92c14b0>粽<br data-v-d92c14b0>香<br data-v-d92c14b0>，<br data-v-d92c14b0>新<br data-v-d92c14b0>潮<br data-v-d92c14b0>食<br data-v-d92c14b0>趣 </h4><h4 style="color:#e6e6e6;" class="m-0 drop-shadow" data-v-d92c14b0> 品<br data-v-d92c14b0>嘗<br data-v-d92c14b0>傳<br data-v-d92c14b0>承<br data-v-d92c14b0>40<br data-v-d92c14b0>年<br data-v-d92c14b0>故<br data-v-d92c14b0>鄉<br data-v-d92c14b0>的<br data-v-d92c14b0>好<br data-v-d92c14b0>味<br data-v-d92c14b0>道 </h4></div>',2),V={style:{"z-index":"1"},class:"m-0"},j=a(()=>t("br",null,null,-1)),R=a(()=>t("br",null,null,-1)),W=a(()=>t("br",null,null,-1)),P=a(()=>t("img",{style:{"max-width":"492px",top:"16px",left:"-104px"},class:"home-banner-triangle-pc d-block position-absolute",src:"https://storage.googleapis.com/vue-course-api.appspot.com/ufo060204/1679126327757.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Y9t61UDHGiR5%2F2TwMpjrwEqdvna8exV5dXECGOLNDy%2BL3t8bcU0nvKppTOBivtBRh3ueo%2Fd7cVsVoJk0rVDCQIh5j1bMcOcduNtQOP5znDnXHICs%2BwmvVTTs0jfmcxWFpFh83O3rnwVSuR35mtdUjeja2fAm9MRMT2%2FIIW4wOXZtYWEidohp7KAadIJgVkL3DkLjmUJGjD6kBvKO1tIYtaCN%2F2lg%2BYuXomhP4jBQEDVfBNvu5UN8fwEKhgdwG%2Fia3MFKD4TXkdrTVh2hVJCKzW0lzVu%2BSTLhjaWYp1aZXMgeO9o6MUlnTqY1TeXGTKUqw4%2FVobddnQphdiFEdlk15g%3D%3D",alt:""},null,-1)),X=a(()=>t("img",{style:{"max-width":"492px"},class:"home-banner-triangle-md d-none position-absolute",src:"https://storage.googleapis.com/vue-course-api.appspot.com/ufo060204/1679203122619.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=gWZHiAskR%2FLpUBvRgmXkE59cubDM7EFiIf9fZ14YSX8D7y%2B4FcyQGqjDNIYWN6atWlalA6bbzvzLxKzO10exy6nfK7AQyzS5hzmTJt5pF3kPHSxRbzdsiiO1SgnGkbFSF%2BgTa964jG7FJlqhWL5zI1VfFwTU9eAIC26Kh%2B%2F8aknXcj%2BYYGBHJ5S1zaiv13ivTGFMvQ8D1KUhcx32nf%2FJuY%2BWf2%2Fi76X%2BQY1snYXVaEMV%2F%2BW%2BG0QP2ETh2LC9iH9BeYMomPHNGIDjB3J9SHZIYgeVNeiAqlIkNbV00uAwBhKZHveTYTplc8bvQ5YXkbVvM1HOpTYvVLy06KKKTWdfAw%3D%3D",alt:""},null,-1)),K={class:"py-8 intro",style:{"background-image":"url('https://storage.googleapis.com/vue-course-api.appspot.com/ufo060204/1679115636333.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=WyBEJKfQTROnLwKr7SXyrWBqGPVWgYoo%2FkZfarfV4F0zXaVkwW%2BoXHaPDat7hLVAHb66GmAR2JDYzPtEiBy9Ibtcixs%2Fzx2K3J%2BwUEumgcRuCicXs8lqVN7iezp0IJCzGxhxPm0rj5LsteuA7qywatbc5L4gPUJa5%2FYCZoVjcZF6Tka6HXBrTvixlH%2FIg9NAJRNcWNglxJy7luxKpxUtUFCdCyCWH8w00QGzWhXLQQnbb9h9Ro9v%2F2JAdQPAyLPhCCr3pMXRI3zZAaqw73j7xw0weorzF4Am4vcaOcIy%2FNK5czPF3ubjVfs46t25qqiod5xZvJOLeLY%2BVtx06O5PCQ%3D%3D')","background-repeat":"no-repeat","background-size":"cover","background-position":"left top"}},G={class:"container-lg"},J={class:"row row-cols-lg-2 row-cols-1 mb-8 align-items-md-center intro-row"},O=a(()=>t("div",{"data-aos":"fade-right","data-aos-offset":"300","data-aos-easing":"ease-in-sine",class:"col"},[t("img",{src:z,alt:"img1",class:"img-fluid intro-img"})],-1)),Z={"data-aos":"fade-right","data-aos-offset":"300","data-aos-easing":"ease-in-sine",class:"col"},H={style:{padding:"48px 72px"},class:"w-100 d-md-flex intro-text-straight"},q={class:"w-100 d-md-flex justify-content-md-between"},$=b('<h3 class="m-0 fw-bold text-text-dark pe-6" data-v-d92c14b0> 用<br data-v-d92c14b0>料<br data-v-d92c14b0>精<br data-v-d92c14b0>選 </h3><div class="d-md-flex justify-content-md-between pe-6 w-100" data-v-d92c14b0><h5 class="m-0 text-text-light" data-v-d92c14b0> 我<br data-v-d92c14b0>們<br data-v-d92c14b0>的<br data-v-d92c14b0>粽<br data-v-d92c14b0>子<br data-v-d92c14b0>使<br data-v-d92c14b0>用<br data-v-d92c14b0>的<br data-v-d92c14b0>食<br data-v-d92c14b0>材 </h5><h5 class="m-0 text-text-light" data-v-d92c14b0> 都<br data-v-d92c14b0>是<br data-v-d92c14b0>經<br data-v-d92c14b0>過<br data-v-d92c14b0>精<br data-v-d92c14b0>心<br data-v-d92c14b0>選<br data-v-d92c14b0>擇<br data-v-d92c14b0>堅<br data-v-d92c14b0>持 </h5><h5 class="m-0 text-text-light" data-v-d92c14b0> 傳<br data-v-d92c14b0>統<br data-v-d92c14b0>古<br data-v-d92c14b0>早<br data-v-d92c14b0>味<br data-v-d92c14b0>，<br data-v-d92c14b0>獨<br data-v-d92c14b0>特<br data-v-d92c14b0>香<br data-v-d92c14b0>料 </h5><h5 class="m-0 text-text-light" data-v-d92c14b0> 配<br data-v-d92c14b0>方<br data-v-d92c14b0>、<br data-v-d92c14b0>品<br data-v-d92c14b0>質<br data-v-d92c14b0>優<br data-v-d92c14b0>良<br data-v-d92c14b0>傳<br data-v-d92c14b0>統<br data-v-d92c14b0>手 </h5><h5 class="m-0 text-text-light" data-v-d92c14b0> 工<br data-v-d92c14b0>製<br data-v-d92c14b0>作<br data-v-d92c14b0>方<br data-v-d92c14b0>式<br data-v-d92c14b0>製<br data-v-d92c14b0>作<br data-v-d92c14b0>，<br data-v-d92c14b0>保<br data-v-d92c14b0>證 </h5><h5 class="mx-0 mb-0 text-text-light" data-v-d92c14b0> 口<br data-v-d92c14b0>感<br data-v-d92c14b0>道<br data-v-d92c14b0>地<br data-v-d92c14b0>。 </h5></div>',2),tt={class:"d-flex flex-column justify-content-between align-items-center"},at=a(()=>t("img",{class:"",src:l,alt:""},null,-1)),st=a(()=>t("img",{class:"",src:v,alt:""},null,-1)),dt={class:"m-0"},et=a(()=>t("br",null,null,-1)),ot=a(()=>t("br",null,null,-1)),ct=a(()=>t("br",null,null,-1)),it={class:"intro-text-horizontal"},rt={class:"text-center"},lt=a(()=>t("h3",{class:"mb-3 fw-bold text-text-dark"}," 用料精選 ",-1)),nt=a(()=>t("div",{style:{"margin-bottom":"76px"}},[t("h5",{class:"m-0 text-text-light"}," 我們的粽子使用的食材都是經過精心選擇 堅持傳統古早味，獨特香料配方、品質優良 傳統手工製作方式製作，保證口感道地。 ")],-1)),bt={class:""},pt={class:"m-0 position-relative"},vt=a(()=>t("div",{style:{top:"-52px"},class:"position-absolute d-flex flex-column justify-content-between align-items-center start-50 translate-middle-x"},[t("img",{class:"mb-1 d-block",src:l,alt:""}),t("img",{class:"d-block",src:r,alt:""})],-1)),ht={class:"row row-cols-lg-2 row-cols-1 align-items-md-center"},mt=a(()=>t("div",{"data-aos":"fade-right","data-aos-offset":"300","data-aos-easing":"ease-in-sine",class:"col"},[t("img",{src:N,alt:"img1",class:"img-fluid intro-img"})],-1)),gt={"data-aos":"fade-right","data-aos-offset":"300","data-aos-easing":"ease-in-sine",class:"col"},_t={style:{padding:"48px 72px"},class:"w-100 d-md-flex intro-text-straight"},ut={class:"w-100 d-md-flex justify-content-md-between"},xt=b('<h3 class="m-0 fw-bold text-text-dark pe-6" data-v-d92c14b0> 多<br data-v-d92c14b0>款<br data-v-d92c14b0>口<br data-v-d92c14b0>味<br data-v-d92c14b0>選<br data-v-d92c14b0>擇 </h3><div class="d-md-flex justify-content-md-between pe-6 w-100" data-v-d92c14b0><h5 class="m-0 text-text-light" data-v-d92c14b0> 提<br data-v-d92c14b0>供<br data-v-d92c14b0>多<br data-v-d92c14b0>種<br data-v-d92c14b0>口<br data-v-d92c14b0>味<br data-v-d92c14b0>的<br data-v-d92c14b0>粽<br data-v-d92c14b0>子<br data-v-d92c14b0>供 </h5><h5 class="m-0 text-text-light" data-v-d92c14b0> 消<br data-v-d92c14b0>費<br data-v-d92c14b0>者<br data-v-d92c14b0>做<br data-v-d92c14b0>選<br data-v-d92c14b0>擇<br data-v-d92c14b0>，<br data-v-d92c14b0>從<br data-v-d92c14b0>傳<br data-v-d92c14b0>統 </h5><h5 class="m-0 text-text-light" data-v-d92c14b0> 的<br data-v-d92c14b0>肉<br data-v-d92c14b0>粽<br data-v-d92c14b0>到<br data-v-d92c14b0>創<br data-v-d92c14b0>新<br data-v-d92c14b0>的<br data-v-d92c14b0>水<br data-v-d92c14b0>果<br data-v-d92c14b0>粽 </h5><h5 class="m-0 text-text-light" data-v-d92c14b0> 都<br data-v-d92c14b0>有<br data-v-d92c14b0>，<br data-v-d92c14b0>無<br data-v-d92c14b0>添<br data-v-d92c14b0>加<br data-v-d92c14b0>防<br data-v-d92c14b0>腐<br data-v-d92c14b0>劑<br data-v-d92c14b0>， </h5><h5 class="m-0 text-text-light" data-v-d92c14b0> 顧<br data-v-d92c14b0>客<br data-v-d92c14b0>能<br data-v-d92c14b0>夠<br data-v-d92c14b0>安<br data-v-d92c14b0>心<br data-v-d92c14b0>享<br data-v-d92c14b0>用<br data-v-d92c14b0>到<br data-v-d92c14b0>新 </h5><h5 class="mx-0 mb-0 text-text-light" data-v-d92c14b0> 鮮<br data-v-d92c14b0>美<br data-v-d92c14b0>味<br data-v-d92c14b0>的<br data-v-d92c14b0>粽<br data-v-d92c14b0>子<br data-v-d92c14b0>。 </h5></div>',2),At={class:"d-flex flex-column justify-content-between align-items-center"},ft=a(()=>t("img",{class:"",src:l,alt:""},null,-1)),wt=a(()=>t("img",{class:"",src:v,alt:""},null,-1)),kt={class:"m-0"},yt=a(()=>t("br",null,null,-1)),Bt=a(()=>t("br",null,null,-1)),Ft=a(()=>t("br",null,null,-1)),zt={class:"intro-text-horizontal"},Nt={class:"text-center"},Dt=a(()=>t("h3",{class:"mb-3 fw-bold text-text-dark"}," 多款口味選擇 ",-1)),Et=a(()=>t("div",{style:{"margin-bottom":"76px"}},[t("h5",{class:"m-0 text-text-light"}," 提供多種口味的粽子供消費者做選擇 從傳統的肉粽到創新的水果粽都有，無添加防腐劑，顧客能夠安心享用到新鮮美味的粽子。 ")],-1)),Yt={class:""},Ct={class:"m-0 position-relative"},It=a(()=>t("div",{style:{top:"-52px"},class:"position-absolute d-flex flex-column justify-content-between align-items-center start-50 translate-middle-x"},[t("img",{class:"mb-1 d-block",src:l,alt:""}),t("img",{class:"d-block",src:r,alt:""})],-1)),Tt={class:"py-8 popular"},Lt={class:"container-lg"},St=a(()=>t("h2",{class:"mb-10 fw-bold text-center popular-title"},"熱銷產品",-1)),Qt={class:"row"},Mt={class:"border-0 px-7 popular-card"},Ut={class:"product-img d-flex justify-content-center align-items-center"},Vt=a(()=>t("img",{class:"img-fluid p-9 position-absolute",src:"https://storage.googleapis.com/vue-course-api.appspot.com/ufo060204/1679122640369.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=ECc5CgWHI%2FbzNcrIRXWub01pyFCMkovCLTlZMvLYydlwrKiNhGfBXXfa28UO69YIYEdKuvkVc348mvEStQrDbixqhwq%2Bam4NlDzR4x5SsLm8MA6I2WCZcaV9%2F62igSB1NgcFx6yyHw9rCrWcwxSUDYel6jJaYEGngdeznelcTOdGAAlrLQCD7bRbNf5Q4Th%2FTqdqZiCsLno7SJUFnpJeOlsHL6W8yPDsNu%2FI3EBGpf0BTsYHFWzfc%2FKpg0UhsdTW5AxtMzsJ75LaGWmvlvKmpMf8OXaXCCUJq5P2VUJxSddBgHJgRONKhmLE1vTbReNBQjhFWNmRRj06fn6onQz7Tg%3D%3D",alt:""},null,-1)),jt=a(()=>t("span",{style:{"font-weight":"900",top:"0",left:"0"},class:"position-absolute text-primary fs-1"},"01",-1)),Rt=a(()=>t("img",{style:{bottom:"-12px"},class:"position-absolute start-50",src:r,alt:""},null,-1)),Wt=a(()=>t("div",{class:"mb-3"},[t("h4",{class:"m-0 text-text-dark fw-bold text-center mb-3"}," 招牌北部粽 "),t("p",{style:{"font-size":"32px"},class:"m-0 text-primary fw-bold text-center"}," $ 75 元 ")],-1)),Pt={class:"text-center"},Xt={class:"border-0 px-7 popular-card"},Kt={class:"product-img d-flex justify-content-center align-items-center"},Gt=a(()=>t("img",{class:"img-fluid p-9 position-absolute",src:"https://storage.googleapis.com/vue-course-api.appspot.com/ufo060204/1679123198362.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=MYX4dfnxJK3TeDhNuC%2BaQy4kWOFQ%2F7oU%2BTwevZErSUjvBzgUsmZEYZLOJDGB0%2Fy272S61yZb8natkAW8hq6sLgm8lanrd32%2By9UZDNDFdJ9qqVcIZozkUzgCcLxsy2PDzMzpMa9R7woX2KotFjOwMW9aPMERoGxmvPwkaLIk4KAjSVUBYc%2F9px%2BRFCbgYxAdke5bDK89UMhDu0tEhTGHeDjD5RWPlLiIZ%2FusWjwInOM%2F1lDToTc5F%2FwT%2F4jR11Ezu6tEELwdMIDSSetB80VXrJWBM9tZS%2FS7Q2K2xDt%2B65MNUNQ%2FEQL7cI2MoL4HbswnBb67Glv%2BfmL%2Bq5qbGy%2FqJg%3D%3D",alt:""},null,-1)),Jt=a(()=>t("span",{style:{"font-weight":"900",top:"0",left:"0"},class:"position-absolute text-primary fs-1"},"02",-1)),Ot=a(()=>t("img",{style:{bottom:"-12px"},class:"position-absolute start-50",src:r,alt:""},null,-1)),Zt=a(()=>t("div",{class:"mb-3"},[t("h4",{class:"m-0 text-text-dark fw-bold text-center mb-3"}," 傳統南部粽 "),t("p",{style:{"font-size":"32px"},class:"m-0 text-primary fw-bold text-center"}," $ 75 元 ")],-1)),Ht={class:"text-center"},qt={class:"border-0 px-7 popular-card"},$t={class:"product-img d-flex justify-content-center align-items-center"},ta=a(()=>t("img",{class:"img-fluid p-9 position-absolute",src:"https://storage.googleapis.com/vue-course-api.appspot.com/ufo060204/1679123253511.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=fPsA7BdvnNZ93zAvJ9EqPUBvv4Qu6scveM2Y8N79L%2FXHJbmBCAazitevPvkaaGn2EAYKzYtTadJX5qJCeE15ohTkqaWUfefIrJVvZWc%2BNDhDFNCOQnbu8ExrPJbb0n%2Fis0q5AwZwhHNLCgzulYtf0s%2BS8o0NPhr8HNSsfHZm%2BRnrhwsNxzSzooHvMgxBzODzZQn7InMqueIIYeVAYsjjyBMN6pNJchPrO0BsCtNT64yjmVoCNMM8cKVroxR0igBK9T131UO6%2FA%2BxNHVLGhhiHvXApfe83mJZ024gKRr%2FGKt6DdBIJUXzA9YG4g1jaf4TdQe4bsm1N4Y%2FM5qpKVJppw%3D%3D",alt:""},null,-1)),aa=a(()=>t("span",{style:{"font-weight":"900",top:"0",left:"0"},class:"position-absolute text-primary fs-1"},"03",-1)),sa=a(()=>t("img",{style:{bottom:"-12px"},class:"position-absolute start-50",src:r,alt:""},null,-1)),da=a(()=>t("div",{class:"mb-3"},[t("h4",{class:"m-0 text-text-dark fw-bold text-center mb-3"}," 秘傳醬汁 "),t("p",{style:{"font-size":"32px"},class:"m-0 text-primary fw-bold text-center"}," $ 90 元 ")],-1)),ea={class:"text-center"},oa={class:"py-8 news",style:{"background-image":"url('https://storage.googleapis.com/vue-course-api.appspot.com/ufo060204/1679115673055.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=UUtlULZDx%2Fu1TeA032%2BmaYh1JN%2F0xQ43B5GdJMGfw597EM1tyTbvZr7xOz9%2FshwvRfzWhY6oXwjrhw%2BAtmjfTFUM%2FjUgC1ixQe8LqNnQEDaQ3ZVL0UikQcEyPpnlNQHb%2FMBnt1%2B%2BhKIoELEfX8GwVGlGzxOzuGvA2z6U%2FiKE2jOS4LiM8LccTOjON4zFgLMLq%2FCTUtJonw8gRpSi0MJLl%2BEmiD23SrWatdIaMACGhbAJDYaDVAZISKhanvbISFrepLDDEgL%2FQ01AohwWdKTgDzZmQP5360d5CL%2FEuxYWuxNwZpIAYN4s384WK3POcRs0ta2GYXwsvfC3PXKr5fKtRw%3D%3D')","background-repeat":"no-repeat","background-size":"cover","background-position":"left top"}},ca={class:"container-lg"},ia=a(()=>t("h2",{class:"mb-10 text-center fw-bold news-title"},"最新消息",-1)),ra={class:"row"},la={"data-aos":"zoom-in","data-aos-duration":"2000",class:"col-lg-6"},na={class:"d-lg-flex border-0 m-0"},ba=a(()=>t("img",{style:{"max-width":"270px","object-fit":"cover"},class:"d-block news-img",src:D,alt:"img3"},null,-1)),pa={class:"p-4"},va=a(()=>t("h4",{class:"mb-3 text-text-dark fw-bold"}," 歡慶開館 40 周年紀念，全店商品八折 ",-1)),ha=a(()=>t("p",{style:{color:"#594a3e"},class:"mb-3 fs-5"}," 12/31 前結帳時輸入，優惠碼 zongzi40 可享 8 折優惠！ ",-1)),ma={class:"d-flex justify-content-between align-items-center"},ga=a(()=>t("img",{src:h,alt:"polygon-small"},null,-1)),_a=a(()=>t("img",{class:"img-fluid",src:m,alt:"Rectangle-m"},null,-1)),ua={"data-aos":"zoom-in","data-aos-duration":"2000",class:"col-lg-6"},xa={"data-aos":"zoom-in","data-aos-duration":"2000",class:"col"},Aa={class:"d-lg-flex border-0 m-0"},fa=a(()=>t("img",{style:{"max-width":"270px","object-fit":"cover"},class:"d-block news-img",src:E,alt:"img3"},null,-1)),wa={class:"p-4"},ka=a(()=>t("h4",{class:"mb-3 text-text-dark fw-bold"}," 感謝美食節目、新聞媒體報導 ",-1)),ya=a(()=>t("p",{style:{color:"#594a3e"},class:"mb-3 fs-5"}," 飄香 40 年台灣在地傳統美食 - 吉祥粽香藏館 ",-1)),Ba={class:"d-flex justify-content-between align-items-center"},Fa=a(()=>t("img",{src:h,alt:"polygon-small"},null,-1)),za=a(()=>t("img",{class:"img-fluid",src:m,alt:"Rectangle-m"},null,-1));function Na(c,i,Da,Ea,n,Ya){const g=p("loading"),e=p("router-link");return k(),f(w,null,[d(g,{active:n.isLoading,"onUpdate:active":i[0]||(i[0]=_=>n.isLoading=_),"can-cancel":!1,color:n.color},null,8,["active","color"]),t("main",null,[t("section",T,[t("div",L,[t("div",S,[t("div",Q,[t("div",M,[U,t("h5",V,[d(e,{to:"/products",class:"banner-link d-block text-decoration-none p-3 text-white",href:"#"},{default:o(()=>[s("探"),j,s("索"),R,s("美"),W,s("味")]),_:1})]),P,X])])])])]),t("section",K,[t("div",G,[t("div",J,[O,t("div",Z,[t("div",H,[t("div",q,[$,t("div",tt,[at,st,t("h5",dt,[d(e,{to:"/products",href:"#",class:"product-link fw-bold d-block border border-text-dark text-text-dark text-decoration-none p-3"},{default:o(()=>[s(" 更"),et,s("多"),ot,s("產"),ct,s("品 ")]),_:1})])])])]),t("div",it,[t("div",rt,[lt,nt,t("div",bt,[t("h5",pt,[d(e,{to:"/products",href:"#",class:"product-link fw-bold d-inline-block border border-text-dark text-text-dark text-decoration-none py-2 px-7"},{default:o(()=>[s(" 更多產品 ")]),_:1}),vt])])])])])]),t("div",ht,[mt,t("div",gt,[t("div",_t,[t("div",ut,[xt,t("div",At,[ft,wt,t("h5",kt,[d(e,{to:"/products",href:"#",class:"product-link fw-bold d-block border border-text-dark text-text-dark text-decoration-none p-3"},{default:o(()=>[s(" 更"),yt,s("多"),Bt,s("產"),Ft,s("品 ")]),_:1})])])])]),t("div",zt,[t("div",Nt,[Dt,Et,t("div",Yt,[t("h5",Ct,[d(e,{to:"/products",href:"#",class:"product-link fw-bold d-inline-block border border-text-dark text-text-dark text-decoration-none py-2 px-7"},{default:o(()=>[s(" 更多產品 ")]),_:1}),It])])])])])])])]),t("section",Tt,[t("div",Lt,[St,t("div",Qt,[d(e,{to:"/product/-NM27yCriEAoX1-aPW4j","data-aos":"fade-up","data-aos-duration":"3000",class:"col-lg-4 text-decoration-none"},{default:o(()=>[t("div",Mt,[t("div",Ut,[Vt,d(e,{class:"text-decoration-none product-text stretched-link",to:"/product/-NM27yCriEAoX1-aPW4j"},{default:o(()=>[s(" 查看更多 ")]),_:1}),jt,Rt]),t("div",null,[Wt,t("div",Pt,[t("button",{onClick:i[1]||(i[1]=()=>c.addToCart("-NM27yCriEAoX1-aPW4j")),type:"button",class:"cart-hover text-text-dark d-inline-block py-3 px-7 fs-5 fw-bold text-decoration-none border border-text-dark"}," 加入購物車 ")])])])]),_:1}),d(e,{to:"/product/-NM2d45PodDNatFQYTQ3","data-aos":"fade-up","data-aos-duration":"3000",class:"col-lg-4 text-decoration-none"},{default:o(()=>[t("div",Xt,[t("div",Kt,[Gt,d(e,{class:"text-decoration-none product-text stretched-link",to:"/product/-NM2d45PodDNatFQYTQ3"},{default:o(()=>[s(" 查看更多 ")]),_:1}),Jt,Ot]),t("div",null,[Zt,t("div",Ht,[t("button",{onClick:i[2]||(i[2]=()=>c.addToCart("-NM2d45PodDNatFQYTQ3")),type:"button",class:"cart-hover text-text-dark d-inline-block py-3 px-7 fs-5 fw-bold text-decoration-none border border-text-dark"}," 加入購物車 ")])])])]),_:1}),d(e,{to:"/product/-NM2huSRBtLQp39YYdPB","data-aos":"fade-up","data-aos-duration":"3000",class:"col-lg-4 text-decoration-none"},{default:o(()=>[t("div",qt,[t("div",$t,[ta,d(e,{class:"text-decoration-none product-text stretched-link",to:"/product/-NM2huSRBtLQp39YYdPB"},{default:o(()=>[s(" 查看更多 ")]),_:1}),aa,sa]),t("div",null,[da,t("div",ea,[t("button",{onClick:i[3]||(i[3]=()=>c.addToCart("-NM2huSRBtLQp39YYdPB")),type:"button",class:"cart-hover text-text-dark d-inline-block py-3 px-7 fs-5 fw-bold text-decoration-none border border-text-dark"}," 加入購物車 ")])])])]),_:1})])])]),t("section",oa,[t("div",ca,[ia,t("div",ra,[t("div",la,[t("div",na,[ba,t("div",pa,[va,ha,t("div",ma,[ga,_a,d(e,{to:"/home/-NR8JzTIYKZ08sSYBdjQ",class:"text-decoration-none fw-bold fs-5 stretched-link",href:"#"},{default:o(()=>[s(" 查看更多 ")]),_:1})])])])]),t("div",ua,[t("div",xa,[t("div",Aa,[fa,t("div",wa,[ka,ya,t("div",Ba,[Fa,za,d(e,{to:"/home/-NR8M15bmBcBIIfsBqid",class:"text-decoration-none fw-bold fs-5 stretched-link",href:"#"},{default:o(()=>[s(" 查看更多 ")]),_:1})])])])])])])])])])],64)}const La=u(I,[["render",Na],["__scopeId","data-v-d92c14b0"]]);export{La as default};
