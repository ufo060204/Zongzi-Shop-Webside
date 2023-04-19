<template>
  <loading v-model:active="isLoading"
                :can-cancel="false"
                :color="color"/>
  <main>
    <section
      style="
        height: 100vh;
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;
      "
      class="d-flex align-items-center landing-img bg-attachment-fixed"
    >
      <div class="container-lg">
        <div class="row">
          <div class="col-md-3">
            <div class="d-flex align-items-center justify-content-center position-relative">
              <h1
                style="border-right: 1px solid #FFFFFF66; z-index: 1"
                class="mb-0 me-6 py-3 pe-3 text-white fw-bold drop-shadow"
              >
                吉<br />祥<br />粽<br />香<br />藏<br />館
              </h1>
              <div style="z-index: 1" class="d-flex me-7">
                <h4 style="color: #e6e6e6" class="mb-0 me-3 drop-shadow">
                  傳<br />統<br />粽<br />香<br />，<br />新<br />潮<br />食<br />趣
                </h4>
                <h4 style="color: #e6e6e6" class="m-0 drop-shadow">
                  品<br />嘗<br />傳<br />承<br />40<br />年<br />故<br />鄉<br />的<br />好<br />味<br />道
                </h4>
              </div>
              <h5 style="z-index: 1" class="m-0">
                <router-link
                  to="/products"
                  class="banner-link d-block text-decoration-none p-3 text-white"
                  href="#"
                  >探<br />索<br />美<br />味</router-link
                >
              </h5>
              <img style="max-width: 492px; top: 16px;left: -104px" class="home-banner-triangle-pc d-block position-absolute" src="https://storage.googleapis.com/vue-course-api.appspot.com/ufo060204/1679126327757.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Y9t61UDHGiR5%2F2TwMpjrwEqdvna8exV5dXECGOLNDy%2BL3t8bcU0nvKppTOBivtBRh3ueo%2Fd7cVsVoJk0rVDCQIh5j1bMcOcduNtQOP5znDnXHICs%2BwmvVTTs0jfmcxWFpFh83O3rnwVSuR35mtdUjeja2fAm9MRMT2%2FIIW4wOXZtYWEidohp7KAadIJgVkL3DkLjmUJGjD6kBvKO1tIYtaCN%2F2lg%2BYuXomhP4jBQEDVfBNvu5UN8fwEKhgdwG%2Fia3MFKD4TXkdrTVh2hVJCKzW0lzVu%2BSTLhjaWYp1aZXMgeO9o6MUlnTqY1TeXGTKUqw4%2FVobddnQphdiFEdlk15g%3D%3D" alt="">
              <img style="max-width: 492px;" class="home-banner-triangle-md d-none position-absolute" src="https://storage.googleapis.com/vue-course-api.appspot.com/ufo060204/1679203122619.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=gWZHiAskR%2FLpUBvRgmXkE59cubDM7EFiIf9fZ14YSX8D7y%2B4FcyQGqjDNIYWN6atWlalA6bbzvzLxKzO10exy6nfK7AQyzS5hzmTJt5pF3kPHSxRbzdsiiO1SgnGkbFSF%2BgTa964jG7FJlqhWL5zI1VfFwTU9eAIC26Kh%2B%2F8aknXcj%2BYYGBHJ5S1zaiv13ivTGFMvQ8D1KUhcx32nf%2FJuY%2BWf2%2Fi76X%2BQY1snYXVaEMV%2F%2BW%2BG0QP2ETh2LC9iH9BeYMomPHNGIDjB3J9SHZIYgeVNeiAqlIkNbV00uAwBhKZHveTYTplc8bvQ5YXkbVvM1HOpTYvVLy06KKKTWdfAw%3D%3D" alt="">
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      class="py-8 intro"
      style="
        background-image: url('https://storage.googleapis.com/vue-course-api.appspot.com/ufo060204/1679115636333.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=WyBEJKfQTROnLwKr7SXyrWBqGPVWgYoo%2FkZfarfV4F0zXaVkwW%2BoXHaPDat7hLVAHb66GmAR2JDYzPtEiBy9Ibtcixs%2Fzx2K3J%2BwUEumgcRuCicXs8lqVN7iezp0IJCzGxhxPm0rj5LsteuA7qywatbc5L4gPUJa5%2FYCZoVjcZF6Tka6HXBrTvixlH%2FIg9NAJRNcWNglxJy7luxKpxUtUFCdCyCWH8w00QGzWhXLQQnbb9h9Ro9v%2F2JAdQPAyLPhCCr3pMXRI3zZAaqw73j7xw0weorzF4Am4vcaOcIy%2FNK5czPF3ubjVfs46t25qqiod5xZvJOLeLY%2BVtx06O5PCQ%3D%3D');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: left top;
      "
    >
      <div class="container-lg">
        <div class="row row-cols-lg-2 row-cols-1 mb-8 align-items-md-center intro-row">
          <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" class="col">
            <img
              src="../../assets/images/img1.png"
              alt="img1"
              class="img-fluid intro-img"
            />
          </div>
          <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" class="col">
            <div
              style="padding: 48px 72px;"
              class="w-100 d-md-flex intro-text-straight">
              <div class="w-100 d-md-flex justify-content-md-between">
                <h3 class="m-0 fw-bold text-text-dark pe-6">
                  用<br>料<br>精<br>選
                </h3>
                <div class="d-md-flex justify-content-md-between pe-6 w-100">
                  <h5 class="m-0 text-text-light">
                    我<br>們<br>的<br>粽<br>子<br>使<br>用<br>的<br>食<br>材
                  </h5>
                  <h5 class="m-0 text-text-light">
                    都<br>是<br>經<br>過<br>精<br>心<br>選<br>擇<br>堅<br>持
                  </h5>
                  <h5 class="m-0 text-text-light">
                    傳<br>統<br>古<br>早<br>味<br>，<br>獨<br>特<br>香<br>料
                  </h5>
                  <h5 class="m-0 text-text-light">
                    配<br>方<br>、<br>品<br>質<br>優<br>良<br>傳<br>統<br>手
                  </h5>
                  <h5 class="m-0 text-text-light">
                    工<br>製<br>作<br>方<br>式<br>製<br>作<br>，<br>保<br>證
                  </h5>
                  <h5 class="mx-0 mb-0 text-text-light">
                    口<br>感<br>道<br>地<br>。
                  </h5>
                </div>
                <div class="d-flex flex-column justify-content-between align-items-center">
                  <img
                    class=""
                    src="../../assets/images/polygon-big.svg"
                    alt=""
                  />
                  <img
                    class=""
                    src="../../assets/images/Rectangle.png"
                    alt=""
                  />
                  <h5 class="m-0">
                    <router-link
                      to="/products"
                      href="#"
                      class="product-link fw-bold d-block border border-text-dark text-text-dark text-decoration-none p-3">
                      更<br>多<br>產<br>品
                    </router-link>
                  </h5>
                </div>
              </div>
            </div>
            <div class="intro-text-horizontal">
              <div class="text-center">
                <h3 class="mb-3 fw-bold text-text-dark">
                  用料精選
                </h3>
                <div style="margin-bottom: 76px;">
                  <h5 class="m-0 text-text-light">
                    我們的粽子使用的食材都是經過精心選擇 堅持傳統古早味，獨特香料配方、品質優良 傳統手工製作方式製作，保證口感道地。
                  </h5>
                </div>
                <div class="">
                  <h5 class="m-0 position-relative">
                    <router-link
                      to="/products"
                      href="#"
                      class="product-link fw-bold d-inline-block border border-text-dark  text-text-dark text-decoration-none py-2 px-7">
                      更多產品
                    </router-link>
                    <div style="top: -52px;" class=" position-absolute d-flex flex-column justify-content-between align-items-center start-50 translate-middle-x">
                    <img
                      class="mb-1 d-block"
                      src="../../assets/images/polygon-big.svg"
                      alt=""
                    />
                    <img
                      class="d-block"
                      src="../../assets/images/Rectangle-s.png"
                      alt=""
                    />
                  </div>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row row-cols-lg-2 row-cols-1 align-items-md-center flex-column-reverse flex-lg-row">
          <div data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine" class="col">
            <div style="padding: 48px 72px;" class="w-100 d-md-flex intro-text-straight">
              <div class="w-100 d-md-flex justify-content-md-between ">
                <h3 class="m-0 fw-bold text-text-dark pe-6">
                  多<br>款<br>口<br>味<br>選<br>擇
                </h3>
                <div class="d-md-flex justify-content-md-between pe-6 w-100">
                  <h5 class="m-0 text-text-light">
                    提<br>供<br>多<br>種<br>口<br>味<br>的<br>粽<br>子<br>供
                  </h5>
                  <h5 class="m-0 text-text-light">
                    消<br>費<br>者<br>做<br>選<br>擇<br>，<br>從<br>傳<br>統
                  </h5>
                  <h5 class="m-0 text-text-light">
                    的<br>肉<br>粽<br>到<br>創<br>新<br>的<br>水<br>果<br>粽
                  </h5>
                  <h5 class="m-0 text-text-light">
                    都<br>有<br>，<br>無<br>添<br>加<br>防<br>腐<br>劑<br>，
                  </h5>
                  <h5 class="m-0 text-text-light">
                    顧<br>客<br>能<br>夠<br>安<br>心<br>享<br>用<br>到<br>新
                  </h5>
                  <h5 class="mx-0 mb-0 text-text-light">
                    鮮<br>美<br>味<br>的<br>粽<br>子<br>。
                  </h5>
                </div>
                <div class="d-flex flex-column justify-content-between align-items-center">
                  <img
                    class=""
                    src="../../assets/images/polygon-big.svg"
                    alt=""
                  />
                  <img
                    class=""
                    src="../../assets/images/Rectangle.png"
                    alt=""
                  />
                  <h5 class="m-0">
                    <router-link
                      to="/products"
                      href="#"
                      class="product-link fw-bold d-block border border-text-dark text-text-dark text-decoration-none p-3">
                      更<br>多<br>產<br>品
                    </router-link>
                  </h5>
                </div>
              </div>
            </div>
            <div class="intro-text-horizontal">
              <div class="text-center">
                <h3 class="mb-3 fw-bold text-text-dark">
                  多款口味選擇
                </h3>
                <div style="margin-bottom: 76px;">
                  <h5 class="m-0 text-text-light">
                    提供多種口味的粽子供消費者做選擇 從傳統的肉粽到創新的水果粽都有，無添加防腐劑，顧客能夠安心享用到新鮮美味的粽子。
                  </h5>
                </div>
                <div>
                  <h5 class="m-0 position-relative">
                    <router-link
                      to="/products"
                      href="#"
                      class="product-link fw-bold d-inline-block border border-text-dark  text-text-dark text-decoration-none py-2 px-7">
                      更多產品
                    </router-link>
                    <div style="top: -52px;" class=" position-absolute d-flex flex-column justify-content-between align-items-center start-50 translate-middle-x">
                    <img
                      class="mb-1 d-block"
                      src="../../assets/images/polygon-big.svg"
                      alt=""
                    />
                    <img
                      class="d-block"
                      src="../../assets/images/Rectangle-s.png"
                      alt=""
                    />
                  </div>
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine" class="col">
            <img
              src="../../assets/images/img2.png"
              alt="img1"
              class="img-fluid intro-img"
            />
          </div>
        </div>
      </div>
    </section>
    <section
      class="py-8 popular">
      <div class="container-lg">
        <h2 class="mb-10 fw-bold text-center popular-title">熱銷產品</h2>
        <div class="row">
          <router-link :to="`/product/-NM27yCriEAoX1-aPW4j`" data-aos="fade-up" data-aos-duration="3000" class="col-lg-4 text-decoration-none"
          >
            <div class="border-0 px-7 popular-card">
              <div class="product-img d-flex justify-content-center align-items-center">
                <img class="img-fluid p-9 position-absolute" src="https://storage.googleapis.com/vue-course-api.appspot.com/ufo060204/1679122640369.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=ECc5CgWHI%2FbzNcrIRXWub01pyFCMkovCLTlZMvLYydlwrKiNhGfBXXfa28UO69YIYEdKuvkVc348mvEStQrDbixqhwq%2Bam4NlDzR4x5SsLm8MA6I2WCZcaV9%2F62igSB1NgcFx6yyHw9rCrWcwxSUDYel6jJaYEGngdeznelcTOdGAAlrLQCD7bRbNf5Q4Th%2FTqdqZiCsLno7SJUFnpJeOlsHL6W8yPDsNu%2FI3EBGpf0BTsYHFWzfc%2FKpg0UhsdTW5AxtMzsJ75LaGWmvlvKmpMf8OXaXCCUJq5P2VUJxSddBgHJgRONKhmLE1vTbReNBQjhFWNmRRj06fn6onQz7Tg%3D%3D" alt="">
                <router-link
                  class="text-decoration-none product-text stretched-link"
                  :to="`/product/-NM27yCriEAoX1-aPW4j`"
                >
                  查看更多
                </router-link>
                <span
                  style="font-weight: 900; top: 0; left: 0"
                  class="position-absolute text-primary fs-1"
                  >01</span
                >
                <img style="bottom: -12px;" class="position-absolute start-50" src="../../assets/images/Rectangle-s.png" alt="">
              </div>
              <div>
                <div class="mb-3">
                  <h4 class="m-0 text-text-dark fw-bold text-center mb-3">
                    招牌北部粽
                  </h4>
                  <p
                    style="font-size: 32px"
                    class="m-0 text-primary fw-bold text-center"
                  >
                    $ 75 元
                  </p>
                </div>
                <div class="text-center">
                  <button
                    @click="() => addToCart(`-NM27yCriEAoX1-aPW4j`)"
                    type="button"
                    class="cart-hover text-text-dark d-inline-block py-3 px-7 fs-5 fw-bold text-decoration-none border border-text-dark"
                  >
                    加入購物車
                  </button>
                </div>
              </div>
            </div>
          </router-link>
          <router-link :to="`/product/-NM2d45PodDNatFQYTQ3`" data-aos="fade-up" data-aos-duration="3000" class="col-lg-4 text-decoration-none"
          >
            <div class="border-0 px-7 popular-card">
              <div class="product-img d-flex justify-content-center align-items-center">
                <img class="img-fluid p-9 position-absolute" src="https://storage.googleapis.com/vue-course-api.appspot.com/ufo060204/1679123198362.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=MYX4dfnxJK3TeDhNuC%2BaQy4kWOFQ%2F7oU%2BTwevZErSUjvBzgUsmZEYZLOJDGB0%2Fy272S61yZb8natkAW8hq6sLgm8lanrd32%2By9UZDNDFdJ9qqVcIZozkUzgCcLxsy2PDzMzpMa9R7woX2KotFjOwMW9aPMERoGxmvPwkaLIk4KAjSVUBYc%2F9px%2BRFCbgYxAdke5bDK89UMhDu0tEhTGHeDjD5RWPlLiIZ%2FusWjwInOM%2F1lDToTc5F%2FwT%2F4jR11Ezu6tEELwdMIDSSetB80VXrJWBM9tZS%2FS7Q2K2xDt%2B65MNUNQ%2FEQL7cI2MoL4HbswnBb67Glv%2BfmL%2Bq5qbGy%2FqJg%3D%3D" alt="">
                <router-link
                  class="text-decoration-none product-text stretched-link"
                  :to="`/product/-NM2d45PodDNatFQYTQ3`"
                >
                  查看更多
                </router-link>
                <span
                  style="font-weight: 900; top: 0; left: 0"
                  class="position-absolute text-primary fs-1"
                  >02</span
                >
                <img style="bottom: -12px;" class="position-absolute start-50" src="../../assets/images/Rectangle-s.png" alt="">
              </div>
              <div>
                <div class="mb-3">
                  <h4 class="m-0 text-text-dark fw-bold text-center mb-3">
                    傳統南部粽
                  </h4>
                  <p
                    style="font-size: 32px"
                    class="m-0 text-primary fw-bold text-center"
                  >
                    $ 75 元
                  </p>
                </div>
                <div class="text-center">
                  <button
                    @click="() => addToCart(`-NM2d45PodDNatFQYTQ3`)"
                    type="button"
                    class="cart-hover text-text-dark d-inline-block py-3 px-7 fs-5 fw-bold text-decoration-none border border-text-dark"
                  >
                    加入購物車
                  </button>
                </div>
              </div>
            </div>
          </router-link>
          <router-link :to="`/product/-NM2huSRBtLQp39YYdPB`" data-aos="fade-up" data-aos-duration="3000" class="col-lg-4 text-decoration-none"
          >
            <div class="border-0 px-7 popular-card">
              <div class="product-img d-flex justify-content-center align-items-center">
                <img class="img-fluid p-9 position-absolute" src="https://storage.googleapis.com/vue-course-api.appspot.com/ufo060204/1679123253511.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=fPsA7BdvnNZ93zAvJ9EqPUBvv4Qu6scveM2Y8N79L%2FXHJbmBCAazitevPvkaaGn2EAYKzYtTadJX5qJCeE15ohTkqaWUfefIrJVvZWc%2BNDhDFNCOQnbu8ExrPJbb0n%2Fis0q5AwZwhHNLCgzulYtf0s%2BS8o0NPhr8HNSsfHZm%2BRnrhwsNxzSzooHvMgxBzODzZQn7InMqueIIYeVAYsjjyBMN6pNJchPrO0BsCtNT64yjmVoCNMM8cKVroxR0igBK9T131UO6%2FA%2BxNHVLGhhiHvXApfe83mJZ024gKRr%2FGKt6DdBIJUXzA9YG4g1jaf4TdQe4bsm1N4Y%2FM5qpKVJppw%3D%3D" alt="">
                <router-link
                  class="text-decoration-none product-text stretched-link"
                  :to="`/product/-NM2huSRBtLQp39YYdPB`"
                >
                  查看更多
                </router-link>
                <span
                  style="font-weight: 900; top: 0; left: 0"
                  class="position-absolute text-primary fs-1"
                  >03</span
                >
                <img style="bottom: -12px;" class="position-absolute start-50" src="../../assets/images/Rectangle-s.png" alt="">
              </div>
              <div>
                <div class="mb-3">
                  <h4 class="m-0 text-text-dark fw-bold text-center mb-3">
                    秘傳醬汁
                  </h4>
                  <p
                    style="font-size: 32px"
                    class="m-0 text-primary fw-bold text-center"
                  >
                    $ 90 元
                  </p>
                </div>
                <div class="text-center">
                  <button
                    @click="() => addToCart(`-NM2huSRBtLQp39YYdPB`)"
                    type="button"
                    class="cart-hover text-text-dark d-inline-block py-3 px-7 fs-5 fw-bold text-decoration-none border border-text-dark"
                  >
                    加入購物車
                  </button>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </section>
    <section
      class="py-8 news"
      style="
        background-image: url('https://storage.googleapis.com/vue-course-api.appspot.com/ufo060204/1679115673055.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=UUtlULZDx%2Fu1TeA032%2BmaYh1JN%2F0xQ43B5GdJMGfw597EM1tyTbvZr7xOz9%2FshwvRfzWhY6oXwjrhw%2BAtmjfTFUM%2FjUgC1ixQe8LqNnQEDaQ3ZVL0UikQcEyPpnlNQHb%2FMBnt1%2B%2BhKIoELEfX8GwVGlGzxOzuGvA2z6U%2FiKE2jOS4LiM8LccTOjON4zFgLMLq%2FCTUtJonw8gRpSi0MJLl%2BEmiD23SrWatdIaMACGhbAJDYaDVAZISKhanvbISFrepLDDEgL%2FQ01AohwWdKTgDzZmQP5360d5CL%2FEuxYWuxNwZpIAYN4s384WK3POcRs0ta2GYXwsvfC3PXKr5fKtRw%3D%3D');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: left top;
      "
    >
      <div class="container-lg">
        <h2 class="mb-10 text-center fw-bold news-title">最新消息</h2>
        <div class="row">
          <div data-aos="zoom-in" data-aos-duration="2000" class="col-lg-6">
            <div class="d-lg-flex border-0 m-0">
              <img
                style="max-width: 270px; object-fit: cover"
                class="d-block news-img"
                src="../../assets/images/img3.png"
                alt="img3"/>
              <div class="p-4">
                <h4 class="mb-3 text-text-dark fw-bold">
                  歡慶開館 40 周年紀念，全店商品八折
                </h4>
                <p style="color: #594a3e" class="mb-3 fs-5">
                  12/31 前結帳時輸入，優惠碼 zongzi40 可享 8 折優惠！
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <img
                    src="../../assets/images/polygon-small.svg"
                    alt="polygon-small"
                  />
                  <img
                    class="img-fluid"
                    src="../../assets/images/Rectangle-m.png"
                    alt="Rectangle-m"
                  />
                  <router-link to="/home/-NR8JzTIYKZ08sSYBdjQ" class="text-decoration-none fw-bold fs-5 stretched-link"
                      href="#">
                      查看更多
                  </router-link>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="zoom-in" data-aos-duration="2000" class="col-lg-6">
            <div data-aos="zoom-in" data-aos-duration="2000" class="col">
              <div class="d-lg-flex border-0 m-0">
                <img
                  style="max-width: 270px; object-fit: cover"
                  class="d-block news-img"
                  src="../../assets/images/img4.png"
                  alt="img3"/>
                <div class="p-4">
                  <h4 class="mb-3 text-text-dark fw-bold">
                    感謝美食節目、新聞媒體報導
                  </h4>
                  <p style="color: #594a3e" class="mb-3 fs-5">
                    飄香 40 年台灣在地傳統美食 - 吉祥粽香藏館
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <img
                      src="../../assets/images/polygon-small.svg"
                      alt="polygon-small"
                    />
                    <img
                      class="img-fluid"
                      src="../../assets/images/Rectangle-m.png"
                      alt="Rectangle-m"
                    />
                    <router-link to="/home/-NR8M15bmBcBIIfsBqid" class="text-decoration-none fw-bold fs-5 stretched-link"
                      href="#">
                      查看更多
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { mapActions } from 'pinia'
import cartStore from '@/stores/cart'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  data () {
    return {
      products: [],
      popular: [],
      articles: [],
      isLoading: false,
      color: '#FF700C'
    }
  },
  components: {
    Loading
  },
  methods: {
    getProducts () {
      this.isLoading = true
      this.$http
        .get(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/products/all`)
        .then((res) => {
          this.products = res.data.products
          this.isLoading = false
        })
        .catch((err) => {
          alert(err.message)
        })
    },
    ...mapActions(cartStore, ['addToCart'])
  },
  mounted () {
    this.getProducts()
  }
}
</script>

<style scoped>
.banner-link {
  background-color: #FF700C;
}
.banner-link:hover {
  background-color: #BD5309;
}
.product-link:hover {
  background-color: #FF700C;
}
.cart-hover:hover {
  background-color: #FFE8D9;
}
.drop-shadow {
  filter: drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.48));
}
.product-img {
  width: 100%;
  aspect-ratio: 1/1;
  position: relative;
  background-color: #f0ede5;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin-bottom: 32px;
  border-radius: 50%
}
.product-img::after {
  content: '';
  background-color: #00000080;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  border-radius: 50%
}
.product-img:hover:after {
  opacity: 1;
}
.product-text {
  padding: 16px 48px;
  font-size: 20px;
  color: #fff;
  font-weight: 700;
  border: 1px solid #fff;
  opacity: 0;
  z-index: 10;
}
.product-text:hover {
  opacity: 1;
}
</style>
