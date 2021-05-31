import Vue from 'vue'
import Vuex from 'vuex'
import { getItem, setItem } from '@/utils/storage.js'

Vue.use(Vuex)

// 将存储token的名字定义为常量
const USER_KEY = 'toutiao-user'

export default new Vuex.Store({
  state: {
    // 当前用户的登录状态  token等数据
    user: getItem(USER_KEY)
  },
  mutations: {
    // 修改user数据
    setUser (state, data) {
      state.user = data

      // 为了防止页面刷新数据丢失 我们还需要把数据放到本地存储中 这里仅仅是为了数据持久化
      setItem(USER_KEY, state.user)
    }
  },
  actions: {
  },
  modules: {
  }
})
