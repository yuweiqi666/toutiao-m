<template>
  <div>
    <header-top></header-top>
    <!-- 二级路由 -->
    <keep-alive :exclude="childAcaheViews">
      <router-view></router-view>
    </keep-alive>
    <footer-nav></footer-nav>
  </div>
</template>

<script>
import HeaderTop from './components/header'
import FooterNav from './components/footer'
import { mapState } from 'vuex'
export default {
  name: 'layout',
  data () {
    return {}
  },
  computed: {
    ...mapState(['childAcaheViews'])
  },
  components: {
    HeaderTop,
    FooterNav
  },
  mounted () {
    // 跳转layout页面 都要判断是否需要重新缓存页面 因为切换登陆会清楚页面的缓存
    this.$store.commit('addAcaheView', 'layout')
  }
}
</script>

<style>

</style>
