import{_ as m,a as u,c as h,b as a,e as d,g as b,w as l,h as n,r as g,o as x,j as s,p as A,k as _}from"./index-52b16234.js";import{c as w}from"./cart-84f5c1f5.js";import"./sweetalert2.all-9f52efee.js";const y="/Zongzi-Shop-Webside/assets/img1-c09414a7.png",c="/Zongzi-Shop-Webside/assets/polygon-big-3e80b9d3.svg",f="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAABQCAYAAAAz8KTYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAkSURBVHgB7cYxDQAACAOwgRZuFCAO6XDMxJL1akzX4iXIcXRz2FkBrtmSpOYAAAAASUVORK5CYII=",r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAoCAYAAAA/tpB3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAfSURBVHgB1cQxDQAADAIwMi37UYB/WYANehTi+1DbBVIEAd4HbjKEAAAAAElFTkSuQmCC",k="/Zongzi-Shop-Webside/assets/img2-14b01c78.png",B="/Zongzi-Shop-Webside/assets/img3-dd4fbadb.png",p="/Zongzi-Shop-Webside/assets/polygon-small-d8ee8841.svg",v="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMcAAAACCAYAAADsIMjBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAlSURBVHgB7cDBDQAABATBozL9eipAZ+ItUcKOdWWMFAJwuAC8Fnr6A5/Hs4/2AAAAAElFTkSuQmCC",z="/Zongzi-Shop-Webside/assets/img4-ae98b986.png";const{VITE_APP_URL:F,VITE_APP_PATH:D}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"ufo060204",BASE_URL:"/Zongzi-Shop-Webside/",MODE:"production",DEV:!1,PROD:!0},E={data(){return{products:[],popular:[],articles:[],isLoading:!1,color:"#FF700C"}},components:{},methods:{getProducts(){this.isLoading=!0,this.$http.get(`${F}v2/api/${D}/products/all`).then(e=>{this.products=e.data.products,this.isLoading=!1}).catch(e=>{alert(e.message)})},...u(w,["addToCart"])},mounted(){this.getProducts()}},t=e=>(A("data-v-b3bf4aa6"),e=e(),_(),e),I={style:{height:"100vh","background-repeat":"no-repeat","background-size":"cover","background-attachment":"fixed"},class:"d-flex align-items-center landing-img bg-attachment-fixed"},C={class:"container-lg"},T={class:"row","data-aos":"fade-zoom-in","data-aos-duration":"3000"},N={class:"col-md-3"},Y={class:"d-flex align-items-center justify-content-center position-relative"},S=n('<h1 style="border-right:1px solid #FFFFFF66;z-index:1;" class="mb-0 me-6 py-3 pe-3 text-white fw-bold drop-shadow" data-v-b3bf4aa6> 吉<br data-v-b3bf4aa6>祥<br data-v-b3bf4aa6>粽<br data-v-b3bf4aa6>香<br data-v-b3bf4aa6>藏<br data-v-b3bf4aa6>館 </h1><div style="z-index:1;" class="d-flex me-7" data-v-b3bf4aa6><h4 style="color:#e6e6e6;" class="mb-0 me-3 drop-shadow" data-v-b3bf4aa6> 傳<br data-v-b3bf4aa6>統<br data-v-b3bf4aa6>粽<br data-v-b3bf4aa6>香<br data-v-b3bf4aa6>，<br data-v-b3bf4aa6>新<br data-v-b3bf4aa6>潮<br data-v-b3bf4aa6>食<br data-v-b3bf4aa6>趣 </h4><h4 style="color:#e6e6e6;" class="m-0 drop-shadow" data-v-b3bf4aa6> 品<br data-v-b3bf4aa6>嘗<br data-v-b3bf4aa6>傳<br data-v-b3bf4aa6>承<br data-v-b3bf4aa6>40<br data-v-b3bf4aa6>年<br data-v-b3bf4aa6>故<br data-v-b3bf4aa6>鄉<br data-v-b3bf4aa6>的<br data-v-b3bf4aa6>好<br data-v-b3bf4aa6>味<br data-v-b3bf4aa6>道 </h4></div>',2),L={style:{"z-index":"1"},class:"m-0"},j=t(()=>a("br",null,null,-1)),M=t(()=>a("br",null,null,-1)),Q=t(()=>a("br",null,null,-1)),U=t(()=>a("img",{style:{"max-width":"492px",top:"16px",left:"-104px"},class:"home-banner-triangle-pc d-block position-absolute",src:"https://storage.googleapis.com/vue-course-api.appspot.com/ufo060204/1679126327757.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Y9t61UDHGiR5%2F2TwMpjrwEqdvna8exV5dXECGOLNDy%2BL3t8bcU0nvKppTOBivtBRh3ueo%2Fd7cVsVoJk0rVDCQIh5j1bMcOcduNtQOP5znDnXHICs%2BwmvVTTs0jfmcxWFpFh83O3rnwVSuR35mtdUjeja2fAm9MRMT2%2FIIW4wOXZtYWEidohp7KAadIJgVkL3DkLjmUJGjD6kBvKO1tIYtaCN%2F2lg%2BYuXomhP4jBQEDVfBNvu5UN8fwEKhgdwG%2Fia3MFKD4TXkdrTVh2hVJCKzW0lzVu%2BSTLhjaWYp1aZXMgeO9o6MUlnTqY1TeXGTKUqw4%2FVobddnQphdiFEdlk15g%3D%3D",alt:""},null,-1)),V=t(()=>a("img",{style:{"max-width":"492px"},class:"home-banner-triangle-md d-none position-absolute",src:"https://storage.googleapis.com/vue-course-api.appspot.com/ufo060204/1679203122619.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=gWZHiAskR%2FLpUBvRgmXkE59cubDM7EFiIf9fZ14YSX8D7y%2B4FcyQGqjDNIYWN6atWlalA6bbzvzLxKzO10exy6nfK7AQyzS5hzmTJt5pF3kPHSxRbzdsiiO1SgnGkbFSF%2BgTa964jG7FJlqhWL5zI1VfFwTU9eAIC26Kh%2B%2F8aknXcj%2BYYGBHJ5S1zaiv13ivTGFMvQ8D1KUhcx32nf%2FJuY%2BWf2%2Fi76X%2BQY1snYXVaEMV%2F%2BW%2BG0QP2ETh2LC9iH9BeYMomPHNGIDjB3J9SHZIYgeVNeiAqlIkNbV00uAwBhKZHveTYTplc8bvQ5YXkbVvM1HOpTYvVLy06KKKTWdfAw%3D%3D",alt:""},null,-1)),R={class:"py-8 intro",style:{"background-image":"url('https://storage.googleapis.com/vue-course-api.appspot.com/ufo060204/1679115636333.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=WyBEJKfQTROnLwKr7SXyrWBqGPVWgYoo%2FkZfarfV4F0zXaVkwW%2BoXHaPDat7hLVAHb66GmAR2JDYzPtEiBy9Ibtcixs%2Fzx2K3J%2BwUEumgcRuCicXs8lqVN7iezp0IJCzGxhxPm0rj5LsteuA7qywatbc5L4gPUJa5%2FYCZoVjcZF6Tka6HXBrTvixlH%2FIg9NAJRNcWNglxJy7luxKpxUtUFCdCyCWH8w00QGzWhXLQQnbb9h9Ro9v%2F2JAdQPAyLPhCCr3pMXRI3zZAaqw73j7xw0weorzF4Am4vcaOcIy%2FNK5czPF3ubjVfs46t25qqiod5xZvJOLeLY%2BVtx06O5PCQ%3D%3D')","background-repeat":"no-repeat","background-size":"cover","background-position":"left top"}},W={class:"container-lg"},K={class:"row row-cols-lg-2 row-cols-1 mb-8 align-items-md-center intro-row"},X=t(()=>a("div",{"data-aos":"fade-zoom-in","data-aos-duration":"3000",class:"col"},[a("img",{src:y,alt:"img1",class:"img-fluid intro-img"})],-1)),P={"data-aos":"fade-zoom-in","data-aos-duration":"3000",class:"col"},G={style:{padding:"48px 72px"},class:"w-100 d-md-flex intro-text-straight"},J={class:"w-100 d-md-flex justify-content-md-between"},O=n('<h3 class="m-0 fw-bold text-text-dark pe-6" data-v-b3bf4aa6> 用<br data-v-b3bf4aa6>料<br data-v-b3bf4aa6>精<br data-v-b3bf4aa6>選 </h3><div class="d-md-flex justify-content-md-between pe-6 w-100" data-v-b3bf4aa6><h5 class="m-0 text-text-light" data-v-b3bf4aa6> 我<br data-v-b3bf4aa6>們<br data-v-b3bf4aa6>的<br data-v-b3bf4aa6>粽<br data-v-b3bf4aa6>子<br data-v-b3bf4aa6>使<br data-v-b3bf4aa6>用<br data-v-b3bf4aa6>的<br data-v-b3bf4aa6>食<br data-v-b3bf4aa6>材 </h5><h5 class="m-0 text-text-light" data-v-b3bf4aa6> 都<br data-v-b3bf4aa6>是<br data-v-b3bf4aa6>經<br data-v-b3bf4aa6>過<br data-v-b3bf4aa6>精<br data-v-b3bf4aa6>心<br data-v-b3bf4aa6>選<br data-v-b3bf4aa6>擇<br data-v-b3bf4aa6>堅<br data-v-b3bf4aa6>持 </h5><h5 class="m-0 text-text-light" data-v-b3bf4aa6> 傳<br data-v-b3bf4aa6>統<br data-v-b3bf4aa6>古<br data-v-b3bf4aa6>早<br data-v-b3bf4aa6>味<br data-v-b3bf4aa6>，<br data-v-b3bf4aa6>獨<br data-v-b3bf4aa6>特<br data-v-b3bf4aa6>香<br data-v-b3bf4aa6>料 </h5><h5 class="m-0 text-text-light" data-v-b3bf4aa6> 配<br data-v-b3bf4aa6>方<br data-v-b3bf4aa6>、<br data-v-b3bf4aa6>品<br data-v-b3bf4aa6>質<br data-v-b3bf4aa6>優<br data-v-b3bf4aa6>良<br data-v-b3bf4aa6>傳<br data-v-b3bf4aa6>統<br data-v-b3bf4aa6>手 </h5><h5 class="m-0 text-text-light" data-v-b3bf4aa6> 工<br data-v-b3bf4aa6>製<br data-v-b3bf4aa6>作<br data-v-b3bf4aa6>方<br data-v-b3bf4aa6>式<br data-v-b3bf4aa6>製<br data-v-b3bf4aa6>作<br data-v-b3bf4aa6>，<br data-v-b3bf4aa6>保<br data-v-b3bf4aa6>證 </h5><h5 class="mx-0 mb-0 text-text-light" data-v-b3bf4aa6> 口<br data-v-b3bf4aa6>感<br data-v-b3bf4aa6>道<br data-v-b3bf4aa6>地<br data-v-b3bf4aa6>。 </h5></div>',2),Z={class:"d-flex flex-column justify-content-between align-items-center"},H=t(()=>a("img",{class:"",src:c,alt:""},null,-1)),q=t(()=>a("img",{class:"",src:f,alt:""},null,-1)),$={class:"m-0"},aa=t(()=>a("br",null,null,-1)),ta=t(()=>a("br",null,null,-1)),sa=t(()=>a("br",null,null,-1)),ea={class:"intro-text-horizontal"},oa={class:"text-center"},da=t(()=>a("h3",{class:"mb-3 fw-bold text-text-dark"}," 用料精選 ",-1)),ba=t(()=>a("div",{style:{"margin-bottom":"76px"}},[a("h5",{class:"m-0 text-text-light"}," 我們的粽子使用的食材都是經過精心選擇 堅持傳統古早味，獨特香料配方、品質優良 傳統手工製作方式製作，保證口感道地。 ")],-1)),ia={class:""},ra={class:"m-0 position-relative"},ca=t(()=>a("div",{style:{top:"-52px"},class:"position-absolute d-flex flex-column justify-content-between align-items-center start-50 translate-middle-x"},[a("img",{class:"mb-1 d-block",src:c,alt:""}),a("img",{class:"d-block",src:r,alt:""})],-1)),la={class:"row row-cols-lg-2 row-cols-1 align-items-md-center flex-column-reverse flex-lg-row"},na={"data-aos":"fade-zoom-in","data-aos-duration":"3000",class:"col"},fa={style:{padding:"48px 72px"},class:"w-100 d-md-flex intro-text-straight"},pa={class:"w-100 d-md-flex justify-content-md-between"},va=n('<h3 class="m-0 fw-bold text-text-dark pe-6" data-v-b3bf4aa6> 多<br data-v-b3bf4aa6>款<br data-v-b3bf4aa6>口<br data-v-b3bf4aa6>味<br data-v-b3bf4aa6>選<br data-v-b3bf4aa6>擇 </h3><div class="d-md-flex justify-content-md-between pe-6 w-100" data-v-b3bf4aa6><h5 class="m-0 text-text-light" data-v-b3bf4aa6> 提<br data-v-b3bf4aa6>供<br data-v-b3bf4aa6>多<br data-v-b3bf4aa6>種<br data-v-b3bf4aa6>口<br data-v-b3bf4aa6>味<br data-v-b3bf4aa6>的<br data-v-b3bf4aa6>粽<br data-v-b3bf4aa6>子<br data-v-b3bf4aa6>供 </h5><h5 class="m-0 text-text-light" data-v-b3bf4aa6> 消<br data-v-b3bf4aa6>費<br data-v-b3bf4aa6>者<br data-v-b3bf4aa6>做<br data-v-b3bf4aa6>選<br data-v-b3bf4aa6>擇<br data-v-b3bf4aa6>，<br data-v-b3bf4aa6>從<br data-v-b3bf4aa6>傳<br data-v-b3bf4aa6>統 </h5><h5 class="m-0 text-text-light" data-v-b3bf4aa6> 的<br data-v-b3bf4aa6>肉<br data-v-b3bf4aa6>粽<br data-v-b3bf4aa6>到<br data-v-b3bf4aa6>創<br data-v-b3bf4aa6>新<br data-v-b3bf4aa6>的<br data-v-b3bf4aa6>水<br data-v-b3bf4aa6>果<br data-v-b3bf4aa6>粽 </h5><h5 class="m-0 text-text-light" data-v-b3bf4aa6> 都<br data-v-b3bf4aa6>有<br data-v-b3bf4aa6>，<br data-v-b3bf4aa6>無<br data-v-b3bf4aa6>添<br data-v-b3bf4aa6>加<br data-v-b3bf4aa6>防<br data-v-b3bf4aa6>腐<br data-v-b3bf4aa6>劑<br data-v-b3bf4aa6>， </h5><h5 class="m-0 text-text-light" data-v-b3bf4aa6> 顧<br data-v-b3bf4aa6>客<br data-v-b3bf4aa6>能<br data-v-b3bf4aa6>夠<br data-v-b3bf4aa6>安<br data-v-b3bf4aa6>心<br data-v-b3bf4aa6>享<br data-v-b3bf4aa6>用<br data-v-b3bf4aa6>到<br data-v-b3bf4aa6>新 </h5><h5 class="mx-0 mb-0 text-text-light" data-v-b3bf4aa6> 鮮<br data-v-b3bf4aa6>美<br data-v-b3bf4aa6>味<br data-v-b3bf4aa6>的<br data-v-b3bf4aa6>粽<br data-v-b3bf4aa6>子<br data-v-b3bf4aa6>。 </h5></div>',2),ma={class:"d-flex flex-column justify-content-between align-items-center"},ua=t(()=>a("img",{class:"",src:c,alt:""},null,-1)),ha=t(()=>a("img",{class:"",src:f,alt:""},null,-1)),ga={class:"m-0"},xa=t(()=>a("br",null,null,-1)),Aa=t(()=>a("br",null,null,-1)),_a=t(()=>a("br",null,null,-1)),wa={class:"intro-text-horizontal"},ya={class:"text-center"},ka=t(()=>a("h3",{class:"mb-3 fw-bold text-text-dark"}," 多款口味選擇 ",-1)),Ba=t(()=>a("div",{style:{"margin-bottom":"76px"}},[a("h5",{class:"m-0 text-text-light"}," 提供多種口味的粽子供消費者做選擇 從傳統的肉粽到創新的水果粽都有，無添加防腐劑，顧客能夠安心享用到新鮮美味的粽子。 ")],-1)),za={class:"m-0 position-relative"},Fa=t(()=>a("div",{style:{top:"-52px"},class:"position-absolute d-flex flex-column justify-content-between align-items-center start-50 translate-middle-x"},[a("img",{class:"mb-1 d-block",src:c,alt:""}),a("img",{class:"d-block",src:r,alt:""})],-1)),Da=t(()=>a("div",{"data-aos":"fade-zoom-in","data-aos-duration":"3000",class:"col"},[a("img",{src:k,alt:"img1",class:"img-fluid intro-img"})],-1)),Ea={class:"py-8 popular"},Ia={class:"container-lg"},Ca=t(()=>a("h2",{class:"mb-10 fw-bold text-center popular-title"},"熱銷產品",-1)),Ta={class:"row row-cols-1 row-cols-md-3"},Na={class:"col mb-7 mb-lg-0","data-aos":"fade-up","data-aos-duration":"3000"},Ya=t(()=>a("div",{class:"border-0 px-7 popular-card"},[a("div",{class:"popular-product-img d-flex justify-content-center align-items-center"},[a("img",{class:"img-fluid p-9 position-absolute",src:"https://storage.googleapis.com/vue-course-api.appspot.com/ufo060204/1679122640369.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=ECc5CgWHI%2FbzNcrIRXWub01pyFCMkovCLTlZMvLYydlwrKiNhGfBXXfa28UO69YIYEdKuvkVc348mvEStQrDbixqhwq%2Bam4NlDzR4x5SsLm8MA6I2WCZcaV9%2F62igSB1NgcFx6yyHw9rCrWcwxSUDYel6jJaYEGngdeznelcTOdGAAlrLQCD7bRbNf5Q4Th%2FTqdqZiCsLno7SJUFnpJeOlsHL6W8yPDsNu%2FI3EBGpf0BTsYHFWzfc%2FKpg0UhsdTW5AxtMzsJ75LaGWmvlvKmpMf8OXaXCCUJq5P2VUJxSddBgHJgRONKhmLE1vTbReNBQjhFWNmRRj06fn6onQz7Tg%3D%3D",alt:"招牌北部粽"}),a("div",{class:"text-decoration-none product-product-text"}," 查看更多 "),a("span",{style:{"font-weight":"900",top:"0",left:"0"},class:"position-absolute text-primary fs-1"},"01"),a("img",{style:{bottom:"-12px"},class:"position-absolute start-50",src:r,alt:"rectangle"})]),a("div",{class:"mb-6"},[a("h4",{class:"text-text-dark fw-bold text-center mb-3"}," 招牌北部粽 "),a("p",{style:{"font-size":"32px"},class:"m-0 text-primary fw-bold text-center"}," $ 75 元 ")])],-1)),Sa={class:"text-center"},La={class:"col mb-7 mb-lg-0","data-aos":"fade-up","data-aos-duration":"3000"},ja=t(()=>a("div",{class:"border-0 px-7 popular-card"},[a("div",{class:"popular-product-img d-flex justify-content-center align-items-center"},[a("img",{class:"img-fluid p-9 position-absolute",src:"https://storage.googleapis.com/vue-course-api.appspot.com/ufo060204/1679123198362.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=MYX4dfnxJK3TeDhNuC%2BaQy4kWOFQ%2F7oU%2BTwevZErSUjvBzgUsmZEYZLOJDGB0%2Fy272S61yZb8natkAW8hq6sLgm8lanrd32%2By9UZDNDFdJ9qqVcIZozkUzgCcLxsy2PDzMzpMa9R7woX2KotFjOwMW9aPMERoGxmvPwkaLIk4KAjSVUBYc%2F9px%2BRFCbgYxAdke5bDK89UMhDu0tEhTGHeDjD5RWPlLiIZ%2FusWjwInOM%2F1lDToTc5F%2FwT%2F4jR11Ezu6tEELwdMIDSSetB80VXrJWBM9tZS%2FS7Q2K2xDt%2B65MNUNQ%2FEQL7cI2MoL4HbswnBb67Glv%2BfmL%2Bq5qbGy%2FqJg%3D%3D",alt:"傳統南部粽"}),a("div",{class:"text-decoration-none product-product-text"}," 查看更多 "),a("span",{style:{"font-weight":"900",top:"0",left:"0"},class:"position-absolute text-primary fs-1"},"02"),a("img",{style:{bottom:"-12px"},class:"position-absolute start-50",src:r,alt:"rectangle"})]),a("div",{class:"mb-6"},[a("h4",{class:"m-0 text-text-dark fw-bold text-center mb-3"}," 傳統南部粽 "),a("p",{style:{"font-size":"32px"},class:"m-0 text-primary fw-bold text-center"}," $ 75 元 ")])],-1)),Ma={class:"text-center"},Qa={class:"col","data-aos":"fade-up","data-aos-duration":"3000"},Ua=t(()=>a("div",{class:"border-0 px-7 popular-card"},[a("div",{class:"popular-product-img d-flex justify-content-center align-items-center"},[a("img",{class:"img-fluid p-9 position-absolute",src:"https://storage.googleapis.com/vue-course-api.appspot.com/ufo060204/1679123253511.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=fPsA7BdvnNZ93zAvJ9EqPUBvv4Qu6scveM2Y8N79L%2FXHJbmBCAazitevPvkaaGn2EAYKzYtTadJX5qJCeE15ohTkqaWUfefIrJVvZWc%2BNDhDFNCOQnbu8ExrPJbb0n%2Fis0q5AwZwhHNLCgzulYtf0s%2BS8o0NPhr8HNSsfHZm%2BRnrhwsNxzSzooHvMgxBzODzZQn7InMqueIIYeVAYsjjyBMN6pNJchPrO0BsCtNT64yjmVoCNMM8cKVroxR0igBK9T131UO6%2FA%2BxNHVLGhhiHvXApfe83mJZ024gKRr%2FGKt6DdBIJUXzA9YG4g1jaf4TdQe4bsm1N4Y%2FM5qpKVJppw%3D%3D",alt:"秘傳醬汁"}),a("div",{class:"text-decoration-none product-product-text"}," 查看更多 "),a("span",{style:{"font-weight":"900",top:"0",left:"0"},class:"position-absolute text-primary fs-1"},"03"),a("img",{style:{bottom:"-12px"},class:"position-absolute start-50",src:r,alt:"rectangle"})]),a("div",{class:"mb-6"},[a("h4",{class:"m-0 text-text-dark fw-bold text-center mb-3"}," 秘傳醬汁 "),a("p",{style:{"font-size":"32px"},class:"m-0 text-primary fw-bold text-center"}," $ 90 元 ")])],-1)),Va={class:"text-center"},Ra={class:"py-8 news",style:{"background-image":"url('https://storage.googleapis.com/vue-course-api.appspot.com/ufo060204/1679115673055.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=UUtlULZDx%2Fu1TeA032%2BmaYh1JN%2F0xQ43B5GdJMGfw597EM1tyTbvZr7xOz9%2FshwvRfzWhY6oXwjrhw%2BAtmjfTFUM%2FjUgC1ixQe8LqNnQEDaQ3ZVL0UikQcEyPpnlNQHb%2FMBnt1%2B%2BhKIoELEfX8GwVGlGzxOzuGvA2z6U%2FiKE2jOS4LiM8LccTOjON4zFgLMLq%2FCTUtJonw8gRpSi0MJLl%2BEmiD23SrWatdIaMACGhbAJDYaDVAZISKhanvbISFrepLDDEgL%2FQ01AohwWdKTgDzZmQP5360d5CL%2FEuxYWuxNwZpIAYN4s384WK3POcRs0ta2GYXwsvfC3PXKr5fKtRw%3D%3D')","background-repeat":"no-repeat","background-size":"cover","background-position":"left top"}},Wa={class:"container-lg"},Ka=t(()=>a("h2",{class:"mb-10 text-center fw-bold news-title"},"最新消息",-1)),Xa={class:"row"},Pa={"data-aos":"fade-zoom-in","data-aos-duration":"3000",class:"col-lg-6"},Ga=t(()=>a("img",{style:{"max-width":"270px","object-fit":"cover"},class:"d-block news-img",src:B,alt:"img3"},null,-1)),Ja=t(()=>a("div",{class:"p-4 d-md-flex flex-md-column justify-content-md-between"},[a("h4",{class:"mb-3 text-text-dark fw-bold"}," 歡慶開館 40 周年紀念，全店商品八折 "),a("p",{style:{color:"#594a3e"},class:"mb-3 fs-5"}," 12/31 前結帳時輸入，優惠碼 zongzi40 可享 8 折優惠！ "),a("div",{class:"d-flex justify-content-between align-items-center"},[a("img",{src:p,alt:"polygon-small"}),a("img",{class:"img-fluid",src:v,alt:"Rectangle-m"}),a("p",{class:"fw-bold fs-5"}," 查看更多 ")])],-1)),Oa={"data-aos":"fade-zoom-in","data-aos-duration":"3000",class:"col-lg-6"},Za=t(()=>a("img",{style:{"max-width":"270px","object-fit":"cover"},class:"d-block news-img",src:z,alt:"img3"},null,-1)),Ha=t(()=>a("div",{class:"p-4 d-md-flex flex-md-column justify-content-md-between"},[a("h4",{class:"mb-3 text-text-dark fw-bold"}," 感謝美食節目、新聞媒體報導 "),a("p",{style:{color:"#594a3e"},class:"mb-3 fs-5"}," 飄香 40 年台灣在地傳統美食 - 吉祥粽香藏館 "),a("div",{class:"d-flex justify-content-between align-items-center"},[a("img",{src:p,alt:"polygon-small"}),a("img",{class:"img-fluid",src:v,alt:"Rectangle-m"}),a("p",{class:"fw-bold fs-5"}," 查看更多 ")])],-1));function qa(e,i,$a,at,tt,st){const o=g("router-link");return x(),h("main",null,[a("section",I,[a("div",C,[a("div",T,[a("div",N,[a("div",Y,[S,a("h5",L,[d(o,{to:"/products",class:"banner-link d-block text-decoration-none p-3 text-white transition",href:"#"},{default:b(()=>[s("探"),j,s("索"),M,s("美"),Q,s("味")]),_:1})]),U,V])])])])]),a("section",R,[a("div",W,[a("div",K,[X,a("div",P,[a("div",G,[a("div",J,[O,a("div",Z,[H,q,a("h5",$,[d(o,{to:"/products",href:"#",class:"product-link fw-bold d-block border border-text-dark text-text-dark text-decoration-none p-3 transition"},{default:b(()=>[s(" 更"),aa,s("多"),ta,s("產"),sa,s("品 ")]),_:1})])])])]),a("div",ea,[a("div",oa,[da,ba,a("div",ia,[a("h5",ra,[d(o,{to:"/products",href:"#",class:"product-link fw-bold d-inline-block border border-text-dark text-text-dark text-decoration-none py-2 px-7 transition"},{default:b(()=>[s(" 更多產品 ")]),_:1}),ca])])])])])]),a("div",la,[a("div",na,[a("div",fa,[a("div",pa,[va,a("div",ma,[ua,ha,a("h5",ga,[d(o,{to:"/products",href:"#",class:"product-link fw-bold d-block border border-text-dark text-text-dark text-decoration-none p-3 transition"},{default:b(()=>[s(" 更"),xa,s("多"),Aa,s("產"),_a,s("品 ")]),_:1})])])])]),a("div",wa,[a("div",ya,[ka,Ba,a("div",null,[a("h5",za,[d(o,{to:"/products",href:"#",class:"product-link fw-bold d-inline-block border border-text-dark text-text-dark text-decoration-none py-2 px-7 transition"},{default:b(()=>[s(" 更多產品 ")]),_:1}),Fa])])])])]),Da])])]),a("section",Ea,[a("div",Ia,[Ca,a("div",Ta,[a("div",Na,[d(o,{to:"/product/-NM27yCriEAoX1-aPW4j",class:"text-decoration-none popular-product-link"},{default:b(()=>[Ya]),_:1}),a("div",Sa,[a("button",{onClick:i[0]||(i[0]=l(()=>e.addToCart("-NM27yCriEAoX1-aPW4j"),["prevent"])),type:"button",class:"cart-hover text-text-dark d-inline-block py-3 px-7 fs-5 fw-bold text-decoration-none border border-text-dark transition"}," 加入購物車 ")])]),a("div",La,[d(o,{to:"/product/-NM2d45PodDNatFQYTQ3",class:"text-decoration-none popular-product-link"},{default:b(()=>[ja]),_:1}),a("div",Ma,[a("button",{onClick:i[1]||(i[1]=l(()=>e.addToCart("-NM2d45PodDNatFQYTQ3"),["prevent"])),type:"button",class:"cart-hover text-text-dark d-inline-block py-3 px-7 fs-5 fw-bold text-decoration-none border border-text-dark transition"}," 加入購物車 ")])]),a("div",Qa,[d(o,{to:"/product/-NM2huSRBtLQp39YYdPB",class:"text-decoration-none popular-product-link"},{default:b(()=>[Ua]),_:1}),a("div",Va,[a("button",{onClick:i[2]||(i[2]=l(()=>e.addToCart("-NM2huSRBtLQp39YYdPB"),["prevent"])),type:"button",class:"cart-hover text-text-dark d-inline-block py-3 px-7 fs-5 fw-bold text-decoration-none border border-text-dark transition"}," 加入購物車 ")])])])])]),a("section",Ra,[a("div",Wa,[Ka,a("div",Xa,[a("div",Pa,[d(o,{to:"/home/-NR8JzTIYKZ08sSYBdjQ",class:"d-lg-flex border-0 m-0 h-100"},{default:b(()=>[Ga,Ja]),_:1})]),a("div",Oa,[d(o,{to:"/home/-NR8M15bmBcBIIfsBqid",class:"d-lg-flex border-0 m-0 h-100"},{default:b(()=>[Za,Ha]),_:1})])])])])])}const bt=m(E,[["render",qa],["__scopeId","data-v-b3bf4aa6"]]);export{bt as default};