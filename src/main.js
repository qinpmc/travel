import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fastclick from 'fastclick'
import '@/assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(VueAwesomeSwiper, /* { default global options } */)

Vue.config.productionTip = false
fastclick.attach(document.body) // 解决移动端click 300ms延迟

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
