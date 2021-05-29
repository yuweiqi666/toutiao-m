// 手机校验正则
const mobileReg = /^1[3456789]\d{9}$/

export const mobileValidator = (val) => {
  return mobileReg.test(val)
}
