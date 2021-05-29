/**
 * 获取验证码倒计时函数
 *
 * @param {Object} e  事件对象
 */

export const countDown = (e) => {
  let count = 60
  e.target.disabled = true
  const f = () => {
    if (e.target.innerText === '0 s') {
      count = 60
      e.target.innerText = '发送验证码'
      e.target.disabled = false
      clearInterval(getCodeInter)
      return false
    }
    count--
    e.target.innerText = count + ' s'
  }
  f()
  const getCodeInter = setInterval(f, 1000)
}
