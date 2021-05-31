/**
 * 本地存储模块
 */

export const getItem = name => {
  const data = window.localStorage.getItem(name)
  // 为什么把JSON.parse放到try catch中
  try {
    // 如果是json格式字符串
    return JSON.parse(data)
  } catch (err) {
    // 不是json格式字符串
    return data
  }
}

export const setItem = (name, value) => {
  if (typeof value === 'object') {
    window.localStorage.setItem(name, JSON.stringify(value))
  } else {
    window.localStorage.setItem(name, value)
  }
}

export const removeItem = name => {
  window.localStorage.removeItem(name)
}
