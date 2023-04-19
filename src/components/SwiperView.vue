<template>
  <div>
    <SwiperSlide>
      <swiper
        :spaceBetween="30"
        :slidesPerView="slidesPerView"
        :direction="direction"
        :freeMode="true"
        :modules="modules"
        :loop="true"
        :breakpoints=" {
          768: {
              slidesPerView: 4,
              direction: 'horizontal',
          },
      }"
        class="mySwiper"
      >
        <swiper-slide v-for="category in categoryProducts"
            :key="category.id">
          <div
            class="col d-md-flex card-group"
          >
            <router-link :to="`/product/${category.id}`" class="border-0 card mb-6">
              <div
                :style="{ 'background-image': `url(${category.imageUrl})` }"
                class="text-decoration-none product-category-img d-flex justify-content-center align-items-center"
              >
                <div class="text-decoration-none product-text stretched-link">
                  查看更多
                </div>
              </div>
              <div class="bg-white p-6 card-body">
                <div class="d-flex flex-column justify-content-between h-100">
                  <div>
                    <div class="mb-3">
                      <div>
                        <h4 class="text-text-dark fw-500 text-center mb-3">
                          {{ category.title }}
                          <span style="margin-top: 10px" class="d-block fs-5"
                            >$NT {{ category.price }} 元</span
                          >
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </swiper-slide>
      </swiper>
    </SwiperSlide>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, FreeMode, Autoplay } from 'swiper'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default {
  props: ['categoryProducts'],
  data () {
    return {
      modules: [FreeMode, Pagination, Autoplay],
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
.swiper {
  width: 100%;
  max-height: 1200px;
}

.swiper-slide {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
