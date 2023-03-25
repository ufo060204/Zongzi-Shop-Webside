<template>
  <div>
    <swiper
      :slidesPerView="4"
      :spaceBetween="30"
      :freeMode="true"
      :pagination="{
        clickable: true,
      }"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="category in categoryProducts"
          :key="category.id">
        <div
          class="col d-md-flex card-group"
        >
          <div class="border-0 card mb-6">
            <div
              :style="{ 'background-image': `url(${category.imageUrl})` }"
              class="product-category-img d-md-flex justify-content-md-center align-items-md-center"
            >
              <router-link
                class="text-decoration-none product-text stretched-link"
                :to="`/product/${category.id}`"
              >
                查看更多
              </router-link>
            </div>
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
      modules: [FreeMode, Pagination]
    }
  },
  components: {
    Swiper,
    SwiperSlide
  }
}
</script>
<style scoped>
#app {
  height: 100%;
}
html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
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
