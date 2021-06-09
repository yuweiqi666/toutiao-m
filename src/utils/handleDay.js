/**
 * 计算相对时间 使用到了dayjs
 */

// 引入
import Vue from 'vue'

import dayjs from 'dayjs'

// 配置本地化
import 'dayjs/locale/zh-cn'

// 引入相对时间插件
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.locale('zh-cn')

dayjs.extend(relativeTime)

/**
 * 1.将处理时间的代码包装成一个可以全局使用的过滤器
 * 2.可以在任何模板中使用这个全局过滤器
 * 3.过滤器就是一个可以再模板中调用的函数  {{ xxxxx | 过滤器 }}
 * 4.管道符前面的内容作为参数传递给过滤器函数中
 * 5.过滤器函数返回值渲染到使用过滤器的模板中
 */

Vue.filter('currentDate', value => {
  return dayjs(value).fromNow()
})
