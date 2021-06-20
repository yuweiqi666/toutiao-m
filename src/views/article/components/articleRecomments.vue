<template>
<div class="article-recomments">
  <div class="title">全部评论</div>
  <van-list
    v-model="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
  >
    <!-- 单个评论项封装组件 -->
    <recomment-item
      :key="index"
      v-for="(recomment, index) in recommemtsList"
      :recommentItem='recomment'
    >
    </recomment-item>
  </van-list>
  </div>
</template>

<script>
import { getArticleRecommentsApi } from '@/http/article'
import RecommentItem from './recommentItem.vue'
export default {
  name: 'ArticleRecomments',
  data () {
    return {
      finished: false,
      loading: false,
      recommemtsList: [],
      limit: 10, // 每页数据数量
      offset: null // 数据偏移量 值为评论id 不川表示从第一个数据开始读取
    }
  },
  props: {
    artId: {
      type: [Number, String, Object]
    }
  },
  components: {
    RecommentItem
  },
  methods: {
    async onLoad () {
      // 获取文章评论
      const { data } = await getArticleRecommentsApi({
        type: 'a',
        source: this.artId,
        offset: this.offset,
        limit: this.limit
      })

      console.log('文章评论', data.data)

      const { results, end_id: endId } = data.data

      this.recommemtsList = [...this.recommemtsList, ...results]

      this.loading = false

      if (results.length) {
        this.offset = endId
      } else {
        this.finished = true
      }
    }
  }

}
</script>

<style scoped lang="scss">
  .article-recomments {
    .title {
      font-size: 14px;
      margin-bottom: 20px;
    }
    .noRecomment {
      text-align: center;
      color: #ccc;
      font-size: 12px;
    }
  }
</style>
