<template>
  <div>
    <swiper
      :spaceBetween="30"
      :slidesPerView="slidesPerView"
      :direction="direction"
      :freeMode="true"
      :pagination="{
        clickable: true,
      }"
      :modules="modules"
      :breakpoints=" {
        768: {
            slidesPerView: 4,
            direction: 'horizontal',
        },
        // 992: {
        //     slidesPerView: 4,
        //     direction: 'horizontal',
        // }
    }"
      class="mySwiper"
    >
      <swiper-slide v-for="category in categoryProducts"
          :key="category.id">
        <div
          class="col d-md-flex card-group"
        >
          <div class="border-0 card mb-6">
            <router-link :to="`/product/${category.id}`"
              :style="{ 'background-image': `url(${category.imageUrl})` }"
              class="text-decoration-none product-category-img d-flex justify-content-center align-items-center"
            >
              <div class="text-decoration-none product-text stretched-link">
                查看更多
              </div>
            </router-link>
            <div class="bg-white p-6 card-body">
              <div class="d-flex flex-column justify-content-between h-100">
                <div>
                  <div class="mb-3">
                    <router-link
                      class="text-decoration-none"
                      :to="`/product/${category.id}`"
                    >
                      <h4 class="text-text-dark fw-500 text-center mb-3">
                        {{ category.title }}
                        <span style="margin-top: 10px" class="d-block fs-5"
                          >$NT {{ category.price }} 元</span
                        >
                      </h4>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, FreeMode } from 'swiper'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default {
  props: ['categoryProducts'],
  data () {
    return {
      modules: [FreeMode, Pagination],
      direction: 'vertical',
      slidesPerView: 3
    }
  },
  components: {
    Swiper,
    SwiperSlide
  }
}
</script>
<style scoped lang="scss">
// #app {
//   height: 100%;
// }
// html,
// body {
//   position: relative;
//   height: 100%;
// }

// body {
//   background: #eee;
//   font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
//   font-size: 14px;
//   color: #000;
//   margin: 0;
//   padding: 0;
// }

.swiper {
  width: 100%;
  max-height: 1200px;
  // height: 1000px;
}

.swiper-slide {
  // width: 100%;
  // height: 100%;
  text-align: center;
  // font-size: 18px;
  // background: #fff;

  // Center slide text vertically
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

</style>
