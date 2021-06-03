<template>
<div>
  <div>
    <van-tabbar v-model="active" route>
      <van-tabbar-item to="/home" icon="wap-home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/qa" icon="comment-o">问答</van-tabbar-item>
      <van-tabbar-item to="/video" icon="video-o">视频</van-tabbar-item>
      <van-tabbar-item to="/mine" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</div>
</template>

<script>
export default {
  name: 'footerNav',
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style>

</style>
