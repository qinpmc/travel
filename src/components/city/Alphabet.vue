<template>
  <ul class="list">
    <li
      class="item"
      v-for="(value) of letters"
      :key="value"
      :ref="value"
      @click="handleLetterClick"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >{{value}}</li>
  </ul>
</template>
<script>
import { setTimeout } from "timers";
export default {
  name: "Alphabet",
  props: ["cities"],
  data() {
    return {
      touchStatus: false,
      startY: 0,
      timer:null
    };
  },
  updated() {
    this.startY = this.$refs["A"][0].offsetTop; //67
  },
  computed: {
    letters() {
      const letters = [];
      for (let i in this.cities) {
        letters.push(i);
      }
      return letters;
    }
  },
  methods: {
    handleLetterClick(e) {
      this.$emit("letterChange", e.target.innerText);
    },
    handleTouchStart(e) {
      this.touchStatus = true;
    },
    handleTouchMove(e) {
      if (this.touchStatus) {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          let touchY = e.touches[0].clientY - 79;
          let index = Math.floor((touchY - this.startY) / 20);
          if (index >= 0 && index < this.letters.length) {
            this.$emit("letterChange", this.letters[index]);
          }
        }, 20);
      }
    },
    handleTouchEnd(e) {
      this.touchStatus = false;
    }
  }
};
</script>

<style lang="stylus" scoped>@import '~@/assets/styles/varibles.styl';

.list {
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  width: 0.4rem;

  .item {
    line-height: 0.4rem;
    text-align: center;
    color: $bgColor;
  }
}
</style>
 
