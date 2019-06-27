<template>
  <div class="wrapper">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="item of swipers" :key="item.id">
        <img
          class="swiper-img"
          :src= "item.url"
        >
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
export default {
  name: "HomeSwiper",
  props:["swipers"],
  data() {
    return {
      swiperOption: {
        autoplay: 3000, //可选选项，自动滑动
        loop: true, //可选选项，开启循环,
        pagination:'.swiper-pagination'
      }
    };
  },
  // computed: {
  //   swiper() {
  //     return this.$refs.mySwiper.swiper;
  //   }
  // },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    //console.log('this is current swiper instance object', this.swiper)
    //this.swiper.slideTo(3, 1000, false)
  }
};
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
    background:#fff;
.wrapper 
    overflow:hidden;
    width :100%;
    height :0;
    padding-bottom :26.7%;
    background :#eee;
    .swiper-img {
    width: 100%;
    }
</style>
