<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <HomeRecommed></HomeRecommed>
  </div>
</template>


// @ is an alias to /src

<script>
import HomeHeader from "../components/Header";
import HomeSwiper from "../components/Swiper";
import HomeIcons from "../components/Icons";
import HomeRecommed from"../components/Recommend";

export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommed
  }
};
</script>
