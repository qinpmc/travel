<template>
  <div class="wrapper">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide>
        <img
          class="swiper-img"
          src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20196/e440c31af79c0b9d1a1e84c577205562.jpg_750x200_0729c45b.jpg"
        >
      </swiper-slide>
      <swiper-slide>
        <img
          class="swiper-img"
          src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20195/667757f979fa38b12c4986f9930b6695.jpg_750x200_6cca7add.jpg"
          alt
        >
      </swiper-slide>
      <swiper-slide>
        <img
          class="swiper-img"
          src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/d7bbc21db442366a882e04ddc984669a.jpg_750x200_85e640d9.jpg"
          alt
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
  data() {
    return {
      swiperOption: {
        autoplay: 3000, //可选选项，自动滑动
        loop: true, //可选选项，开启循环,
        pagination:'.swiper-pagination'
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
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
    padding-bottom :31.25%;
    background :#eee;
    .swiper-img {
    width: 100%;
    }
</style>
