<template>
  <div>
    <header-top></header-top>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <footer-nav></footer-nav>
  </div>
</template>

<script>
import HeaderTop from './components/header'
import FooterNav from './components/footer'
export default {
  name: 'layout',
  data () {
    return {}
  },
  components: {
    HeaderTop,
    FooterNav
  }
}
</script>

<style>

</style>
