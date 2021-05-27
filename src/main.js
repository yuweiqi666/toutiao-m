import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles/index.scss'
import './vant/index'
// 根据屏幕宽度动态设置rem基准值
import 'amfe-flexible'

import '@/assets/icons'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
