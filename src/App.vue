<template>
  <div id="app">
    <!-- 一级路由 -->
    <keep-alive :include="acaheViews">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'App',
  data () {
    return {

    }
  },
  computed: {
    ...mapState(['acaheViews'])
  }
}
</script>

<style lang="scss" scoped>

</style>
