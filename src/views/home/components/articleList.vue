<template>
  <div class="articleList">
    <van-pull-refresh
     success-text="刷新成功"
     v-model="refreshing"
     @refresh="onRefresh"
    >
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
      <!-- 单个文章展示组件 -->
        <article-item
         v-for="item in articleList"
         :key="+item.art_id"
         :articleData="item"
         @clickDetail="clickArticleDetail(item.art_id)"
        ></article-item>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import { getArticleListApi } from '@/http/article.js'
import ArticleItem from '@/components/articleItem/articleItem.vue'
export default {
  name: 'articleList',
  data () {
    return {
      // 文章底部加载时 触发onLoad loading变为true
      loading: false,
      // 全部加载完毕后 finished变为true 不会再加载更多数据
      finished: false,
      // 刷新时 触发onRefresh refresh变为true
      refreshing: false,
      // 文章列表
      articleList: [],
      // 调用文章接口传的时间戳 相当于是页码 用于请求历史数据 第一次请求数据是传当前的时间戳
      timestamp: null
    }
  },
  components: {
    [ArticleItem.name]: ArticleItem
  },
  props: {
    articleId: {
      type: Number,
      required: true
    }
  },
  methods: {
    async getArticleList () {
      const { data } = await getArticleListApi({
        channel_id: this.articleId,
        timestamp: this.timestamp ? this.timestamp : +new Date(),
        with_top: 1
      })
      const { results, pre_timestamp: preTimesTamp } = data.data
      this.articleList.push(...results)
      // loading设置为false表示本次的加载状态的结束 依据这个来判断是否需要进行下一次的加载 否则永远停在这里
      this.loading = false

      if (results.length) {
        // 列表还有数据
        this.timestamp = preTimesTamp
      } else {
        // 列表数据全部加载完
        this.finished = true
      }
    },
    async onRefresh () {
      /**
       * 1.请求获取数据 传的时间戳是当前时间戳（最新）
       * 2.在当前列表的顶部进行追加
       */
      try {
        const { data } = await getArticleListApi({
          channel_id: this.articleId,
          timestamp: +new Date(),
          with_top: 1
        })

        const { results } = data.data

        this.articleList.unshift(...results)

        this.$toast({
          message: `成功刷新${results.length}条数据`,
          type: 'success'
        })
      } catch (err) {
        this.$toast({
          message: '刷新失败',
          type: 'fail'
        })
      }

      this.refreshing = false
    },
    onLoad () {
      /**
     * 1、list初始化后默认先触发一次onLoad事件  触发onLoad会设置loading为false
     * 2、如果加载的数据不能铺满当前屏幕 会继续触发onLoad事件
     */
      // 接口请求列表数据
      this.getArticleList()
    },
    // 点击文章跳转详情页
    clickArticleDetail (artId) {
      console.log('跳转详情页', artId)
      this.$router.push({
        name: 'articleDetail',
        params: {
          articleId: artId + ''
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
.articleList {
  position: fixed;
  top: 90px;
  width: 100%;
  bottom: 50px;
  overflow: auto;
}
</style>
