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
        v-for="(recomment, index) in commentList"
        :recommentItem='recomment'
        :showReplyBtnFlag='true'
        @clickReplyRecomment='handleClickReplyRecomment'
      >
      </recomment-item>
    </van-list>
    <!-- 点击回复出现的评论回复弹出层 -->
    <van-popup
      get-container="body"
      v-model="replyRecommentShow"
      position="bottom"
      :style="{ height: '80%' }"
    >
      <!-- 评论回复模块组件封装 -->
      <reply-comment
        :key="`replyComment_${+new Date()}`"
        :replyRecommentItem='replyRecommentItem'
        :artId='artId'
      >
      </reply-comment>
    </van-popup>
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
      // recommemtsList: [],
      limit: 10, // 每页数据数量
      offset: null, // 数据偏移量 值为评论id 不川表示从第一个数据开始读取
      replyRecommentShow: false,
      replyRecommentItem: {} // 点击回复弹出层显示的单个评论
    }
  },
  props: {
    artId: {
      type: [Number, String, Object]
    },
    commentList: {
      type: Array
    },
    type: {
      type: String,
      default: 'a'
    }
  },
  components: {
    RecommentItem
  },
  methods: {
    async onLoad () {
      console.log(123)
      // 获取文章评论
      const { data } = await getArticleRecommentsApi({
        type: this.type,
        source: this.artId,
        offset: this.offset,
        limit: this.limit
      })

      console.log('文章评论', data.data)

      const { results, end_id: endId, total_count: totalCount } = data.data

      this.$emit('handleTotalCount', totalCount)

      this.commentList.push(...results)

      this.loading = false

      if (results.length) {
        this.offset = endId
      } else {
        console.log('finished-------------------')
        this.finished = true
      }
    },
    handleClickReplyRecomment (value) {
      this.$emit('getClickReplyRecomment', value)
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
