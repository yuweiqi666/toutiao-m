import { mobileValidator } from '@/utils/validator.js'

// 登录手机校验
const mobileRule = [
  // 必填校验
  { required: true, message: '请输入手机号' },
  // 函数自定义校验
  { validator: mobileValidator, message: '手机号格式有误' }
]

// 验证码必填校验
const codeRule = [
  // 必填校验
  { required: true, message: '请输入验证码' }
]

export default {
  mobileRule,
  codeRule
}
