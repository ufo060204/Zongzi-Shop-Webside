import{b as g}from"./index-0aa2624e.js";import{c as h}from"./cart-ab2ac6c5.js";/* empty css              */import{n}from"./runtime-dom.esm-bundler-8357395d.js";import{_ as u,ac as A,ad as t,z as e,bi as l,ag as b,k as x,l as _,ah as a,aR as f,aP as w}from"./_plugin-vue_export-helper-ddde7e51.js";import"./vue-router-0808fa9d.js";import"./sweetalert2.all-6567ce3e.js";import"./_commonjsHelpers-042e6b4d.js";const k="/Zongzi-Shop-Webside/assets/img1-c09414a7.png",i="/Zongzi-Shop-Webside/assets/polygon-big-3e80b9d3.svg",p="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAABQCAYAAAAz8KTYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAkSURBVHgB7cYxDQAACAOwgRZuFCAO6XDMxJL1akzX4iXIcXRz2FkBrtmSpOYAAAAASUVORK5CYII=",c="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAoCAYAAAA/tpB3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAfSURBVHgB1cQxDQAADAIwMi37UYB/WYANehTi+1DbBVIEAd4HbjKEAAAAAElFTkSuQmCC",B="/Zongzi-Shop-Webside/assets/img2-14b01c78.png",y="/Zongzi-Shop-Webside/assets/img3-dd4fbadb.png",v="/Zongzi-Shop-Webside/assets/polygon-small-d8ee8841.svg",m="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMcAAAACCAYAAADsIMjBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAlSURBVHgB7cDBDQAABATBozL9eipAZ+ItUcKOdWWMFAJwuAC8Fnr6A5/Hs4/2AAAAAElFTkSuQmCC",z="/Zongzi-Shop-Webside/assets/img4-ae98b986.png";const{VITE_APP_URL:F,VITE_APP_PATH:D}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"ufo060204",BASE_URL:"/Zongzi-Shop-Webside/",MODE:"production",DEV:!1,PROD:!0},E={data(){return{products:[],popular:[],articles:[],isLoading:!1,color:"#FF700C"}},components:{},methods:{getProducts(){this.isLoading=!0,this.$http.get(`${F}v2/api/${D}/products/all`).then(s=>{this.products=s.data.products,this.isLoading=!1}).catch(s=>{alert(s.message)})},...g(h,["addToCart"])},mounted(){this.getProducts()}},d=s=>(f("data-v-10d357d8"),s=s(),w(),s),I={class:"vh-100 d-flex align-items-center landing-img bg-repeat-no-repeat bg-size-cover bg-attachment-scroll bg-attachment-lg-fixed"},C={class:"container"},T={class:"row","data-aos":"fade-zoom-in","data-aos-duration":"3000"},N={class:"col-lg-3 offset-lg-2 offset-xl-0"},Y={class:"d-flex align-items-center justify-content-center position-relative"},S=b('<h1 class="z-1 me-6 py-3 pe-3 text-white fw-bold border-end border-white border-opacity-40 drop-shadow" data-v-10d357d8> 吉<br data-v-10d357d8>祥<br data-v-10d357d8>粽<br data-v-10d357d8>香<br data-v-10d357d8>藏<br data-v-10d357d8>館 </h1><div class="z-1 d-flex me-7" data-v-10d357d8><h4 class="me-3 drop-shadow lh-lg text-slogan" data-v-10d357d8> 傳<br data-v-10d357d8>統<br data-v-10d357d8>粽<br data-v-10d357d8>香<br data-v-10d357d8>，<br data-v-10d357d8>新<br data-v-10d357d8>潮<br data-v-10d357d8>食<br data-v-10d357d8>趣 </h4><h4 class="m-0 drop-shadow lh-lg text-slogan" data-v-10d357d8> 品<br data-v-10d357d8>嘗<br data-v-10d357d8>傳<br data-v-10d357d8>承<br data-v-10d357d8>40<br data-v-10d357d8>年<br data-v-10d357d8>故<br data-v-10d357d8>鄉<br data-v-10d357d8>的<br data-v-10d357d8>好<br data-v-10d357d8>味<br data-v-10d357d8>道 </h4></div>',2),L=d(()=>t("br",null,null,-1)),R=d(()=>t("br",null,null,-1)),j=d(()=>t("br",null,null,-1)),M=d(()=>t("img",{style:{"max-width":"492px",top:"16px",left:"-104px"},class:"d-none d-lg-block position-absolute",src:"https://storage.googleapis.com/vue-course-api.appspot.com/ufo060204/1679126327757.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Y9t61UDHGiR5%2F2TwMpjrwEqdvna8exV5dXECGOLNDy%2BL3t8bcU0nvKppTOBivtBRh3ueo%2Fd7cVsVoJk0rVDCQIh5j1bMcOcduNtQOP5znDnXHICs%2BwmvVTTs0jfmcxWFpFh83O3rnwVSuR35mtdUjeja2fAm9MRMT2%2FIIW4wOXZtYWEidohp7KAadIJgVkL3DkLjmUJGjD6kBvKO1tIYtaCN%2F2lg%2BYuXomhP4jBQEDVfBNvu5UN8fwEKhgdwG%2Fia3MFKD4TXkdrTVh2hVJCKzW0lzVu%2BSTLhjaWYp1aZXMgeO9o6MUlnTqY1TeXGTKUqw4%2FVobddnQphdiFEdlk15g%3D%3D",alt:"品牌背景圖-pc"},null,-1)),Q=d(()=>t("img",{style:{"max-width":"492px"},class:"d-block d-lg-none position-absolute",src:"https://storage.googleapis.com/vue-course-api.appspot.com/ufo060204/1679203122619.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=gWZHiAskR%2FLpUBvRgmXkE59cubDM7EFiIf9fZ14YSX8D7y%2B4FcyQGqjDNIYWN6atWlalA6bbzvzLxKzO10exy6nfK7AQyzS5hzmTJt5pF3kPHSxRbzdsiiO1SgnGkbFSF%2BgTa964jG7FJlqhWL5zI1VfFwTU9eAIC26Kh%2B%2F8aknXcj%2BYYGBHJ5S1zaiv13ivTGFMvQ8D1KUhcx32nf%2FJuY%2BWf2%2Fi76X%2BQY1snYXVaEMV%2F%2BW%2BG0QP2ETh2LC9iH9BeYMomPHNGIDjB3J9SHZIYgeVNeiAqlIkNbV00uAwBhKZHveTYTplc8bvQ5YXkbVvM1HOpTYvVLy06KKKTWdfAw%3D%3D",alt:"品牌背景圖-md"},null,-1)),U={class:"py-7 py-lg-8 bg-size-cover bg-repeat-no-repeat",style:{"background-image":"url('https://storage.googleapis.com/vue-course-api.appspot.com/ufo060204/1679115636333.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=WyBEJKfQTROnLwKr7SXyrWBqGPVWgYoo%2FkZfarfV4F0zXaVkwW%2BoXHaPDat7hLVAHb66GmAR2JDYzPtEiBy9Ibtcixs%2Fzx2K3J%2BwUEumgcRuCicXs8lqVN7iezp0IJCzGxhxPm0rj5LsteuA7qywatbc5L4gPUJa5%2FYCZoVjcZF6Tka6HXBrTvixlH%2FIg9NAJRNcWNglxJy7luxKpxUtUFCdCyCWH8w00QGzWhXLQQnbb9h9Ro9v%2F2JAdQPAyLPhCCr3pMXRI3zZAaqw73j7xw0weorzF4Am4vcaOcIy%2FNK5czPF3ubjVfs46t25qqiod5xZvJOLeLY%2BVtx06O5PCQ%3D%3D')","background-position":"left top"}},V={class:"container"},W={class:"row row-cols-lg-2 row-cols-1 mb-7 mb-lg-8 align-items-md-center"},K=d(()=>t("div",{"data-aos":"fade-zoom-in","data-aos-duration":"3000",class:"col"},[t("img",{src:k,alt:"用料精選",class:"img-fluid mb-7 mb-md-0"})],-1)),X={"data-aos":"fade-zoom-in","data-aos-duration":"3000",class:"col"},P={class:"w-100 d-md-flex d-none d-lg-block py-7 px-72"},G={class:"w-100 d-md-flex justify-content-md-between"},J=b('<h3 class="m-0 fw-bold text-text-dark pe-6" data-v-10d357d8> 用<br data-v-10d357d8>料<br data-v-10d357d8>精<br data-v-10d357d8>選 </h3><div class="d-md-flex justify-content-md-between pe-6 w-100" data-v-10d357d8><h5 class="m-0 text-text-light lh-lg" data-v-10d357d8> 我<br data-v-10d357d8>們<br data-v-10d357d8>的<br data-v-10d357d8>粽<br data-v-10d357d8>子<br data-v-10d357d8>使<br data-v-10d357d8>用<br data-v-10d357d8>的<br data-v-10d357d8>食<br data-v-10d357d8>材 </h5><h5 class="m-0 text-text-light lh-lg" data-v-10d357d8> 都<br data-v-10d357d8>是<br data-v-10d357d8>經<br data-v-10d357d8>過<br data-v-10d357d8>精<br data-v-10d357d8>心<br data-v-10d357d8>選<br data-v-10d357d8>擇<br data-v-10d357d8>堅<br data-v-10d357d8>持 </h5><h5 class="m-0 text-text-light lh-lg" data-v-10d357d8> 傳<br data-v-10d357d8>統<br data-v-10d357d8>古<br data-v-10d357d8>早<br data-v-10d357d8>味<br data-v-10d357d8>，<br data-v-10d357d8>獨<br data-v-10d357d8>特<br data-v-10d357d8>香<br data-v-10d357d8>料 </h5><h5 class="m-0 text-text-light lh-lg" data-v-10d357d8> 配<br data-v-10d357d8>方<br data-v-10d357d8>、<br data-v-10d357d8>品<br data-v-10d357d8>質<br data-v-10d357d8>優<br data-v-10d357d8>良<br data-v-10d357d8>傳<br data-v-10d357d8>統<br data-v-10d357d8>手 </h5><h5 class="m-0 text-text-light lh-lg" data-v-10d357d8> 工<br data-v-10d357d8>製<br data-v-10d357d8>作<br data-v-10d357d8>方<br data-v-10d357d8>式<br data-v-10d357d8>製<br data-v-10d357d8>作<br data-v-10d357d8>，<br data-v-10d357d8>保<br data-v-10d357d8>證 </h5><h5 class="mx-0 text-text-light lh-lg" data-v-10d357d8> 口<br data-v-10d357d8>感<br data-v-10d357d8>道<br data-v-10d357d8>地<br data-v-10d357d8>。 </h5></div>',2),O={class:"d-flex flex-column justify-content-between align-items-center"},Z=d(()=>t("img",{src:i,alt:"polygon"},null,-1)),H=d(()=>t("img",{src:p,alt:"Rectangle"},null,-1)),q={class:"m-0"},$=d(()=>t("br",null,null,-1)),tt=d(()=>t("br",null,null,-1)),dt=d(()=>t("br",null,null,-1)),at={class:"d-block d-md-none"},st={class:"text-center"},ot=d(()=>t("h3",{class:"mb-3 fw-bold text-text-dark"}," 用料精選 ",-1)),et=d(()=>t("div",{style:{"margin-bottom":"76px"}},[t("h5",{class:"m-0 text-text-light"}," 我們的粽子使用的食材都是經過精心選擇 堅持傳統古早味，獨特香料配方、品質優良 傳統手工製作方式製作，保證口感道地。 ")],-1)),lt={class:"m-0 position-relative"},rt=d(()=>t("div",{style:{top:"-52px"},class:"position-absolute d-flex flex-column justify-content-between align-items-center start-50 translate-middle-x"},[t("img",{class:"mb-1 d-block",src:i,alt:"polygon"}),t("img",{class:"d-block",src:c,alt:"Rectangle"})],-1)),ct={class:"row row-cols-lg-2 row-cols-1 align-items-md-center flex-column-reverse flex-lg-row"},it={"data-aos":"fade-zoom-in","data-aos-duration":"3000",class:"col"},nt={class:"w-100 d-md-flex d-none d-lg-block py-7 px-72"},bt={class:"w-100 d-md-flex justify-content-md-between"},pt=b('<h3 class="m-0 fw-bold text-text-dark pe-6" data-v-10d357d8> 多<br data-v-10d357d8>款<br data-v-10d357d8>口<br data-v-10d357d8>味<br data-v-10d357d8>選<br data-v-10d357d8>擇 </h3><div class="d-md-flex justify-content-md-between pe-6 w-100" data-v-10d357d8><h5 class="m-0 text-text-light lh-lg" data-v-10d357d8> 提<br data-v-10d357d8>供<br data-v-10d357d8>多<br data-v-10d357d8>種<br data-v-10d357d8>口<br data-v-10d357d8>味<br data-v-10d357d8>的<br data-v-10d357d8>粽<br data-v-10d357d8>子<br data-v-10d357d8>供 </h5><h5 class="m-0 text-text-light lh-lg" data-v-10d357d8> 消<br data-v-10d357d8>費<br data-v-10d357d8>者<br data-v-10d357d8>做<br data-v-10d357d8>選<br data-v-10d357d8>擇<br data-v-10d357d8>，<br data-v-10d357d8>從<br data-v-10d357d8>傳<br data-v-10d357d8>統 </h5><h5 class="m-0 text-text-light lh-lg" data-v-10d357d8> 的<br data-v-10d357d8>肉<br data-v-10d357d8>粽<br data-v-10d357d8>到<br data-v-10d357d8>創<br data-v-10d357d8>新<br data-v-10d357d8>的<br data-v-10d357d8>水<br data-v-10d357d8>果<br data-v-10d357d8>粽 </h5><h5 class="m-0 text-text-light lh-lg" data-v-10d357d8> 都<br data-v-10d357d8>有<br data-v-10d357d8>，<br data-v-10d357d8>無<br data-v-10d357d8>添<br data-v-10d357d8>加<br data-v-10d357d8>防<br data-v-10d357d8>腐<br data-v-10d357d8>劑<br data-v-10d357d8>， </h5><h5 class="m-0 text-text-light lh-lg" data-v-10d357d8> 顧<br data-v-10d357d8>客<br data-v-10d357d8>能<br data-v-10d357d8>夠<br data-v-10d357d8>安<br data-v-10d357d8>心<br data-v-10d357d8>享<br data-v-10d357d8>用<br data-v-10d357d8>到<br data-v-10d357d8>新 </h5><h5 class="mx-0 text-text-light lh-lg" data-v-10d357d8> 鮮<br data-v-10d357d8>美<br data-v-10d357d8>味<br data-v-10d357d8>的<br data-v-10d357d8>粽<br data-v-10d357d8>子<br data-v-10d357d8>。 </h5></div>',2),vt={class:"d-flex flex-column justify-content-between align-items-center"},mt=d(()=>t("img",{src:i,alt:"polygon"},null,-1)),gt=d(()=>t("img",{src:p,alt:"Rectangle"},null,-1)),ht={class:"m-0"},ut=d(()=>t("br",null,null,-1)),At=d(()=>t("br",null,null,-1)),xt=d(()=>t("br",null,null,-1)),_t={class:"d-block d-md-none"},ft={class:"text-center"},wt=d(()=>t("h3",{class:"mb-3 fw-bold text-text-dark"}," 多款口味選擇 ",-1)),kt=d(()=>t("div",{style:{"margin-bottom":"76px"}},[t("h5",{class:"m-0 text-text-light"}," 提供多種口味的粽子供消費者做選擇 從傳統的肉粽到創新的水果粽都有，無添加防腐劑，顧客能夠安心享用到新鮮美味的粽子。 ")],-1)),Bt={class:"m-0 position-relative"},yt=d(()=>t("div",{style:{top:"-52px"},class:"position-absolute d-flex flex-column justify-content-between align-items-center start-50 translate-middle-x"},[t("img",{class:"mb-1 d-block",src:i,alt:"polygon"}),t("img",{class:"d-block",src:c,alt:"Rectangle"})],-1)),zt=d(()=>t("div",{"data-aos":"fade-zoom-in","data-aos-duration":"3000",class:"col"},[t("img",{src:B,alt:"多款口味選擇",class:"img-fluid mb-7 mb-md-0"})],-1)),Ft={class:"py-lg-8 py-7"},Dt={class:"container"},Et=d(()=>t("h2",{class:"mb-7 mb-lg-10 fw-bold text-center"},"熱銷產品",-1)),It={class:"row row-cols-1 row-cols-md-3"},Ct={class:"col mb-7 mb-lg-0","data-aos":"fade-up","data-aos-duration":"3000"},Tt=d(()=>t("div",{class:"border-0 px-7 popular-card"},[t("div",{class:"popular-product-img d-flex justify-content-center align-items-center"},[t("img",{class:"img-fluid p-9 position-absolute",src:"https://storage.googleapis.com/vue-course-api.appspot.com/ufo060204/1679122640369.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=ECc5CgWHI%2FbzNcrIRXWub01pyFCMkovCLTlZMvLYydlwrKiNhGfBXXfa28UO69YIYEdKuvkVc348mvEStQrDbixqhwq%2Bam4NlDzR4x5SsLm8MA6I2WCZcaV9%2F62igSB1NgcFx6yyHw9rCrWcwxSUDYel6jJaYEGngdeznelcTOdGAAlrLQCD7bRbNf5Q4Th%2FTqdqZiCsLno7SJUFnpJeOlsHL6W8yPDsNu%2FI3EBGpf0BTsYHFWzfc%2FKpg0UhsdTW5AxtMzsJ75LaGWmvlvKmpMf8OXaXCCUJq5P2VUJxSddBgHJgRONKhmLE1vTbReNBQjhFWNmRRj06fn6onQz7Tg%3D%3D",alt:"招牌北部粽"}),t("div",{class:"product-product-text"}," 查看更多 "),t("span",{class:"position-absolute text-primary fs-1 top-0 start-0 fw-bolder z-1"},"01"),t("img",{style:{bottom:"-12px"},class:"position-absolute start-50",src:c,alt:"rectangle"})]),t("div",{class:"mb-6"},[t("h4",{class:"text-text-dark fw-bold text-center mb-3"}," 招牌北部粽 "),t("p",{class:"m-0 text-primary fw-bold text-center fs-32"}," $ 75 元 ")])],-1)),Nt={class:"text-center"},Yt={class:"col mb-7 mb-lg-0","data-aos":"fade-up","data-aos-duration":"3000"},St=d(()=>t("div",{class:"border-0 px-7 popular-card"},[t("div",{class:"popular-product-img d-flex justify-content-center align-items-center"},[t("img",{class:"img-fluid p-9 position-absolute",src:"https://storage.googleapis.com/vue-course-api.appspot.com/ufo060204/1679123198362.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=MYX4dfnxJK3TeDhNuC%2BaQy4kWOFQ%2F7oU%2BTwevZErSUjvBzgUsmZEYZLOJDGB0%2Fy272S61yZb8natkAW8hq6sLgm8lanrd32%2By9UZDNDFdJ9qqVcIZozkUzgCcLxsy2PDzMzpMa9R7woX2KotFjOwMW9aPMERoGxmvPwkaLIk4KAjSVUBYc%2F9px%2BRFCbgYxAdke5bDK89UMhDu0tEhTGHeDjD5RWPlLiIZ%2FusWjwInOM%2F1lDToTc5F%2FwT%2F4jR11Ezu6tEELwdMIDSSetB80VXrJWBM9tZS%2FS7Q2K2xDt%2B65MNUNQ%2FEQL7cI2MoL4HbswnBb67Glv%2BfmL%2Bq5qbGy%2FqJg%3D%3D",alt:"傳統南部粽"}),t("div",{class:"product-product-text"}," 查看更多 "),t("span",{class:"position-absolute text-primary fs-1 top-0 start-0 fw-bolder z-1"},"02"),t("img",{style:{bottom:"-12px"},class:"position-absolute start-50",src:c,alt:"rectangle"})]),t("div",{class:"mb-6"},[t("h4",{class:"m-0 text-text-dark fw-bold text-center mb-3"}," 傳統南部粽 "),t("p",{class:"m-0 text-primary fw-bold text-center fs-32"}," $ 75 元 ")])],-1)),Lt={class:"text-center"},Rt={class:"col","data-aos":"fade-up","data-aos-duration":"3000"},jt=d(()=>t("div",{class:"border-0 px-7 popular-card"},[t("div",{class:"popular-product-img d-flex justify-content-center align-items-center"},[t("img",{class:"img-fluid p-9 position-absolute",src:"https://storage.googleapis.com/vue-course-api.appspot.com/ufo060204/1679123253511.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=fPsA7BdvnNZ93zAvJ9EqPUBvv4Qu6scveM2Y8N79L%2FXHJbmBCAazitevPvkaaGn2EAYKzYtTadJX5qJCeE15ohTkqaWUfefIrJVvZWc%2BNDhDFNCOQnbu8ExrPJbb0n%2Fis0q5AwZwhHNLCgzulYtf0s%2BS8o0NPhr8HNSsfHZm%2BRnrhwsNxzSzooHvMgxBzODzZQn7InMqueIIYeVAYsjjyBMN6pNJchPrO0BsCtNT64yjmVoCNMM8cKVroxR0igBK9T131UO6%2FA%2BxNHVLGhhiHvXApfe83mJZ024gKRr%2FGKt6DdBIJUXzA9YG4g1jaf4TdQe4bsm1N4Y%2FM5qpKVJppw%3D%3D",alt:"秘傳醬汁"}),t("div",{class:"product-product-text"}," 查看更多 "),t("span",{class:"position-absolute text-primary fs-1 top-0 start-0 fw-bolder z-1"},"03"),t("img",{style:{bottom:"-12px"},class:"position-absolute start-50",src:c,alt:"rectangle"})]),t("div",{class:"mb-6"},[t("h4",{class:"m-0 text-text-dark fw-bold text-center mb-3"}," 秘傳醬汁 "),t("p",{class:"m-0 text-primary fw-bold text-center fs-32"}," $ 90 元 ")])],-1)),Mt={class:"text-center"},Qt={class:"py-7 py-lg-8",style:{"background-image":"url('https://storage.googleapis.com/vue-course-api.appspot.com/ufo060204/1679115673055.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=UUtlULZDx%2Fu1TeA032%2BmaYh1JN%2F0xQ43B5GdJMGfw597EM1tyTbvZr7xOz9%2FshwvRfzWhY6oXwjrhw%2BAtmjfTFUM%2FjUgC1ixQe8LqNnQEDaQ3ZVL0UikQcEyPpnlNQHb%2FMBnt1%2B%2BhKIoELEfX8GwVGlGzxOzuGvA2z6U%2FiKE2jOS4LiM8LccTOjON4zFgLMLq%2FCTUtJonw8gRpSi0MJLl%2BEmiD23SrWatdIaMACGhbAJDYaDVAZISKhanvbISFrepLDDEgL%2FQ01AohwWdKTgDzZmQP5360d5CL%2FEuxYWuxNwZpIAYN4s384WK3POcRs0ta2GYXwsvfC3PXKr5fKtRw%3D%3D')","background-repeat":"no-repeat","background-size":"cover","background-position":"left top"}},Ut={class:"container"},Vt=d(()=>t("h2",{class:"d-none d-md-block mb-10 text-center fw-bold"},"最新消息",-1)),Wt={class:"row"},Kt={"data-aos":"fade-zoom-in","data-aos-duration":"3000",class:"col-lg-6 mb-md-3 mb-lg-0"},Xt=d(()=>t("img",{class:"d-block object-fit-cover mw-100 mw-md-270px",src:y,alt:"歡慶開館"},null,-1)),Pt=d(()=>t("div",{class:"p-4 d-md-flex flex-md-column justify-content-md-between"},[t("h4",{class:"mb-3 text-text-dark fw-bold"}," 歡慶開館 40 周年紀念，全店商品八折 "),t("p",{class:"mb-3 fs-5 text-news"}," 12/31 前結帳時輸入，優惠碼 zongzi40 可享 8 折優惠！ "),t("div",{class:"d-flex justify-content-between align-items-center"},[t("img",{src:v,alt:"polygon-small"}),t("img",{class:"img-fluid",src:m,alt:"Rectangle-m"}),t("p",{class:"fw-bold fs-5"}," 查看更多 ")])],-1)),Gt={"data-aos":"fade-zoom-in","data-aos-duration":"3000",class:"col-lg-6"},Jt=d(()=>t("img",{class:"d-block object-fit-cover mw-100 mw-md-270px",src:z,alt:"媒體報導"},null,-1)),Ot=d(()=>t("div",{class:"p-4 d-md-flex flex-md-column justify-content-md-between"},[t("h4",{class:"mb-3 text-text-dark fw-bold"}," 感謝美食節目、新聞媒體報導 "),t("p",{class:"mb-3 fs-5 text-news"}," 飄香 40 年台灣在地傳統美食 - 吉祥粽香藏館 "),t("div",{class:"d-flex justify-content-between align-items-center"},[t("img",{src:v,alt:"polygon-small"}),t("img",{class:"img-fluid",src:m,alt:"Rectangle-m"}),t("p",{class:"fw-bold fs-5"}," 查看更多 ")])],-1));function Zt(s,r,Ht,qt,$t,td){const o=x("router-link");return _(),A("main",null,[t("section",I,[t("div",C,[t("div",T,[t("div",N,[t("div",Y,[S,e(o,{to:"/products",class:"z-1 banner-link d-block fw-bold fs-5 lh-lg p-3 text-white transition",href:"#"},{default:l(()=>[a("探"),L,a("索"),R,a("美"),j,a("味")]),_:1}),M,Q])])])])]),t("section",U,[t("div",V,[t("div",W,[K,t("div",X,[t("div",P,[t("div",G,[J,t("div",O,[Z,H,t("h5",q,[e(o,{to:"/products",href:"#",class:"product-link fw-bold d-block border border-text-dark text-text-dark p-3 transition"},{default:l(()=>[a(" 更"),$,a("多"),tt,a("產"),dt,a("品 ")]),_:1})])])])]),t("div",at,[t("div",st,[ot,et,t("div",null,[t("h5",lt,[e(o,{to:"/products",href:"#",class:"product-link fw-bold d-inline-block border border-text-dark text-text-dark py-2 px-7 transition"},{default:l(()=>[a(" 更多產品 ")]),_:1}),rt])])])])])]),t("div",ct,[t("div",it,[t("div",nt,[t("div",bt,[pt,t("div",vt,[mt,gt,t("h5",ht,[e(o,{to:"/products",href:"#",class:"product-link fw-bold d-block border border-text-dark text-text-dark p-3 transition"},{default:l(()=>[a(" 更"),ut,a("多"),At,a("產"),xt,a("品 ")]),_:1})])])])]),t("div",_t,[t("div",ft,[wt,kt,t("div",null,[t("h5",Bt,[e(o,{to:"/products",href:"#",class:"product-link fw-bold d-inline-block border border-text-dark text-text-dark py-2 px-7 transition"},{default:l(()=>[a(" 更多產品 ")]),_:1}),yt])])])])]),zt])])]),t("section",Ft,[t("div",Dt,[Et,t("div",It,[t("div",Ct,[e(o,{to:"/product/-NM27yCriEAoX1-aPW4j",class:"popular-product-link"},{default:l(()=>[Tt]),_:1}),t("div",Nt,[t("button",{onClick:r[0]||(r[0]=n(()=>s.addToCart("-NM27yCriEAoX1-aPW4j"),["prevent"])),type:"button",class:"cart-hover text-text-dark d-inline-block py-3 px-7 fs-5 fw-bold border border-text-dark transition"}," 加入購物車 ")])]),t("div",Yt,[e(o,{to:"/product/-NM2d45PodDNatFQYTQ3",class:"popular-product-link"},{default:l(()=>[St]),_:1}),t("div",Lt,[t("button",{onClick:r[1]||(r[1]=n(()=>s.addToCart("-NM2d45PodDNatFQYTQ3"),["prevent"])),type:"button",class:"cart-hover text-text-dark d-inline-block py-3 px-7 fs-5 fw-bold border border-text-dark transition"}," 加入購物車 ")])]),t("div",Rt,[e(o,{to:"/product/-NM2huSRBtLQp39YYdPB",class:"popular-product-link"},{default:l(()=>[jt]),_:1}),t("div",Mt,[t("button",{onClick:r[2]||(r[2]=n(()=>s.addToCart("-NM2huSRBtLQp39YYdPB"),["prevent"])),type:"button",class:"cart-hover text-text-dark d-inline-block py-3 px-7 fs-5 fw-bold border border-text-dark transition"}," 加入購物車 ")])])])])]),t("section",Qt,[t("div",Ut,[Vt,t("div",Wt,[t("div",Kt,[e(o,{to:"/home/-NR8JzTIYKZ08sSYBdjQ",class:"d-md-flex border-0 m-0 h-100"},{default:l(()=>[Xt,Pt]),_:1})]),t("div",Gt,[e(o,{to:"/home/-NR8M15bmBcBIIfsBqid",class:"d-md-flex border-0 m-0 h-100"},{default:l(()=>[Jt,Ot]),_:1})])])])])])}const id=u(E,[["render",Zt],["__scopeId","data-v-10d357d8"]]);export{id as default};