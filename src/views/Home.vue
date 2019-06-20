<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
  </div>
</template>


// @ is an alias to /src

<script>
import HomeHeader from "../components/Header";
import HomeSwiper from "../components/Swiper";
export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwiper
  }
};
</script>
