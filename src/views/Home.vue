<template>
  <div>
    <home-header :city="city"></home-header>
    <home-swiper ></home-swiper>
    <home-icons :icons="iconList"></home-icons>
    <HomeRecommed></HomeRecommed>
    <HomeWeekend></HomeWeekend>
  </div>
</template>

// @ is an alias to /src

<script>
import HomeHeader from "../components/Header";
import HomeSwiper from "../components/Swiper";
import HomeIcons from "../components/Icons";
import HomeRecommed from "../components/Recommend";
import HomeWeekend from "../components/Weekend";
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
      axios.get("http://localhost:8081/index.json").then(this.getHomeInfoSucc);
    },
    getHomeInfoSucc(res) {
      if(res.data.ret){
        this.weekendList = res.data.data.weekendList;
        this.recommendList = res.data.data.recommendList;
        this.iconList = res.data.data.iconList;
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
      iconList: []
    };
  }
};
</script>
