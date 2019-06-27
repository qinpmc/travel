<template>
  <div>
    <home-header :city="city"></home-header>
    <home-swiper :swipers="swipers" ></home-swiper>
    <home-icons :icons="iconList"></home-icons>
    <HomeRecommed :recommends="recommendList"></HomeRecommed>
    <HomeWeekend :weekends="weekendList"></HomeWeekend>
  </div>
</template>

// @ is an alias to /src

<script>
import HomeHeader from "../components/home/Header";
import HomeSwiper from "../components/home/Swiper";
import HomeIcons from "../components/home/Icons";
import HomeRecommed from "../components/home/Recommend";
import HomeWeekend from "../components/home/Weekend";
import axios from "axios";
export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommed,
    HomeWeekend
  },
  methods: {
    getHomeInfo() {
      axios.get("http://localhost:8080/index.json").then(this.getHomeInfoSucc);
    },
    getHomeInfoSucc(res) {
      if(res.data.ret){
        this.weekendList = res.data.data.weekendList;
        this.recommendList = res.data.data.recommendList;
        this.iconList = res.data.data.iconList;
        this.swipers = res.data.data.swiperList;
        this.city = res.data.data.city;
      }

    }
  },
  mounted() {
    this.getHomeInfo();
  },
  data() {
    return {
      city:'',
      weekendList: [],
      recommendList: [],
      iconList: [],
      swipers:[]
    };
  }
};
</script>
