<template>
  <div class="login">
    <van-nav-bar
      title="登录"
      left-arrow
      @click-left="$router.back()"
    />
    <!-- 登录表单 -->
    <van-cell-group>
      <van-field
        v-model="user.mobile"
        left-icon="phone-o"
        placeholder="请输入手机号"
      />
      <van-field
        v-model="user.code"
        left-icon="music-o"
        placeholder="请输入验证码"
      >
        <template #button>
          <van-button size="mini" type="primary" round>发送验证码</van-button>
        </template>
      </van-field>
    </van-cell-group>
    <!-- 登录按钮 -->
    <div class="login-btn-wrapper">
      <van-button type="info" block>登录</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      user: {
        mobile: '',
        code: ''
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .login-btn-wrapper {
    padding: 25px 14px 0;
  }
</style>
