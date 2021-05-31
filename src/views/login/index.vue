<template>
  <div class="login">
    <van-nav-bar
      title="注册 / 登录"
      left-arrow
      @click-left="$router.back()"
    />
    <!-- 登录表单 -->
    <van-form
      validate-first
      ref="loginForm"
      :show-error="false"
      :show-error-message="false"
    >
      <van-field
        name="mobile"
        v-model="user.mobile"
        left-icon="shouji iconfont"
        icon-prefix="toutiao"
        placeholder="请输入手机号"
        :rules="fromRules.mobileRule"
      >
      </van-field>
      <van-field
        name="code"
        v-model="user.code"
        left-icon="yanzhengma iconfont"
        icon-prefix="toutiao"
        placeholder="请输入验证码"
        :rules="fromRules.codeRule"
      >
        <template #button>
          <van-button class="send-btn" size="mini" type="default" round @click="handleSendCode">发送验证码</van-button>
        </template>
      </van-field>
    </van-form>
    <!-- 登录按钮 -->
    <div class="login-btn-wrapper">
      <van-button type="info" block @click="handleLogin">登录</van-button>
    </div>
  </div>
</template>

<script>
import { hanldeLoginApi, handleSendMobileMessageApi } from '@/http/user.js'
import { countDown } from '@/utils/tools.js'
import fromRules from './rules/index'
export default {
  name: 'login',
  data () {
    return {
      user: {
        mobile: '',
        code: ''
      },
      fromRules
    }
  },
  methods: {
    // 请求登录
    async handleLogin () {
      try {
        // 表单验证
        await this.$refs.loginForm.validate()
        this.$toast.loading({
          message: '登录中...',
          forbidClick: true,
          duration: 0
        })
        try {
          const { data } = await hanldeLoginApi(this.user)
          console.log('请求返回', data)
          this.$toast.success('登陆成功')
          // vuex存储登录接口获取的token数据
          this.$store.commit('setUser', data.data)
        } catch (err) {
          console.log('登陆失败', err)
          this.$toast.fail('登陆失败 手机号或验证码错误')
        }
      } catch (err) {
        // 自定义校验失败时的弹窗提示
        if (err[0]) {
          console.log(err, 'err')
          const failMsg = err[0].message
          this.$toast({
            message: failMsg,
            position: 'top'
          })
        }
      }
    },
    // 发送验证码
    async handleSendCode (e) {
      // 需要校验手机号这单个表单
      try {
        await this.$refs.loginForm.validate('mobile')
        // 验证码倒计时函数
        countDown(e)
        // 调后台接口发送验证码
        try {
          const res = await handleSendMobileMessageApi(this.user.mobile)
          console.log('验证码返回', res)
        } catch (err) {
          this.$toast({
            message: '发送验证码失败，请稍后再试',
            position: 'top'
          })
        }
      } catch (err) {
        console.log(err, 'err')
        const failMsg = err.message
        this.$toast({
          message: failMsg,
          position: 'top'
        })
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
