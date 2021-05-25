/**
 * postcss的配置文件
 * postcss是基于nodejs运行的一个处理css的工具
 */
module.exports = {
  // 配置要只用的相关插件
  plugins: {
    // 将px转为rem
    'postcss-pxtorem': {
      // 转换的根元素基准值 正常情况下按照设计稿来
      // 750设计稿 750 / 10 = 75
      // 375 设计稿 375 / 10 = 37.5
      // 本次项目设计稿也是750的 但是因为使用的vantui是375的  所以rootValue设置为37.5 设计稿测量需要除以2
      // 如果rootValue设置为75  那么可以量多少写多少了
      // rootValue设置为37.5  比如页面元素设置为375px 最终在页面上会换算为10rem
      rootValue: 37.5,
      // 需要转换的css属性   *表示所有属性都要转换
      propList: ['*']
    }
  }
}
