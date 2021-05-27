<template>
  <div class="login">
    <van-nav-bar
      title="注册 / 登录"
      left-arrow
      @click-left="$router.back()"
    />
    <!-- 登录表单 -->
    <van-cell-group>
      <van-field
        v-model="user.mobile"
        left-icon="shouji iconfont"
        icon-prefix="toutiao"
        placeholder="请输入手机号"
      >
      </van-field>
      <van-field
        v-model="user.code"
        left-icon="yanzhengma iconfont"
        icon-prefix="toutiao"
        placeholder="请输入验证码"
      >
        <template #button>
          <van-button class="send-btn" size="mini" type="default" round>发送验证码</van-button>
        </template>
      </van-field>
    </van-cell-group>
    <!-- 登录按钮 -->
    <div class="login-btn-wrapper">
      <van-button type="info" block @click="handleLogin">登录</van-button>
    </div>
  </div>
</template>

<script>
import { hanldeLoginApi } from '@/http/user.js'
export default {
  name: 'login',
  data () {
    return {
      user: {
        mobile: '',
        code: ''
      }
    }
  },
  methods: {
    // 请求登录
    async handleLogin () {
      this.$toast.loading({
        message: '登录中...',
        forbidClick: true,
        duration: 0
      })
      try {
        const res = await hanldeLoginApi(this.user)
        console.log('请求返回', res)
        this.$toast.success('登陆成功')
      } catch (err) {
        console.log('登陆失败', err)
        this.$toast.fail('登陆失败 手机号或验证码错误')
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .login {
    .van-field__button {
      border: 1px solid pink;
      .send-btn {
        width: 75px;
        height: 24px;
        background-color: #ededed;
        .van-button__text {
          color: #666;
          font-size: 11px;
        }
      }
    }
    .login-btn-wrapper {
      padding: 25px 14px 0;
      .van-button {
        border: 0;
        .van-button__text {
          font-size: 15px;
        }
      }
    }
  }
</style>
