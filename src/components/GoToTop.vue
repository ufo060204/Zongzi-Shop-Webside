<template>
  <div :class="{'d-none' : !goTopIcon }">
    <a style="right: 30px; bottom: 30px; width: 60px; height: 60px;" class="position-fixed bg-text-light text-white rounded-circle z-index-3 d-flex flex-column justify-content-center align-items-center" href="#" @click.prevent="goTop">
      <span class="material-symbols-outlined fs-4 d-block">
        arrow_upward
      </span>
      <p class="fs-6">Top</p>
    </a>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import windowStore from '../stores/windowStore'
export default {
  computed: {
    ...mapState(windowStore, ['goTopIcon'])
  },
  methods: {
    ...mapActions(windowStore, ['scroll', 'goTop'])
  },
  mounted () {
    this.scroll()
  }
}
</script>

<style lang="scss" scoped>
</style>
