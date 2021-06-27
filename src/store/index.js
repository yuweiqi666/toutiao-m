import Vue from 'vue'
import Vuex from 'vuex'
import { getItem, setItem } from '@/utils/storage.js'

Vue.use(Vuex)

// 将存储token的名字定义为常量
const USER_KEY = 'toutiao-user'

export default new Vuex.Store({
  state: {
    // 当前用户的登录状态  token等数据
    user: getItem(USER_KEY),
    // 条件缓存的一级路由页面
    acaheViews: ['layout'],
    // 条件缓存的二级路由页面
    childAcaheViews: []
  },
  mutations: {
    // 修改user数据
    setUser (state, data) {
      state.user = data

      // 为了防止页面刷新数据丢失 我们还需要把数据放到本地存储中 这里仅仅是为了数据持久化
      setItem(USER_KEY, state.user)
    },
    // 一级路由删除缓存页面
    removeAcaheView (state, view) {
      const index = state.acaheViews.indexOf(view)
      if (index !== -1) {
        state.acaheViews.splice(index, 1)
      }
    },
    // 一级路由添加缓存页面
    addAcaheView (state, view) {
      const index = state.acaheViews.indexOf(view)
      if (index === -1) {
        state.acaheViews.push(view)
      }
    },
    // 二级路由home页面清除缓存
    addHomeAcaheView (state, view) {
      const index = state.childAcaheViews.indexOf(view)
      if (index === -1) {
        state.childAcaheViews.push(view)
      }
    },
    // 二级路由home页面添加缓存
    removeHomeAcaheView (state, view) {
      const index = state.childAcaheViews.indexOf(view)
      if (index !== -1) {
        state.childAcaheViews.splice(view, 1)
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
