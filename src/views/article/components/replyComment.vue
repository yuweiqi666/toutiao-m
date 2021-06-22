<template>
<div class="reply-comment">
  <!-- 评论回复标题 -->
  <van-nav-bar
    :title="replyTitleCount + '条回复'"
  />
  <!-- 当前需要回复的评论 -->
  <recomment-item
    :recommentItem='replyRecommentItem'
    :showReplyBtnFlag='false'
  >
  </recomment-item>
  <!-- 对当前评论的回复 -->
  <div class="reply-wrapper">
    <p class="title">全部评论</p>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <recomment-item
        v-for="(recommentItem, index) in replyRecomment"
        :key='index'
        :recommentItem='recommentItem'
        :showReplyBtnFlag='true'
      >
      </recomment-item>
    </van-list>
  </div>
  <!-- 底部评论按钮 -->
  <div class="bottom-btn">
    <van-button
      @click="writeComment"
      round
    >
    写评论
    </van-button>
  </div>
  <van-popup
    get-container="body"
    v-model="recommentShow"
    position="bottom"
    :style="{ height: '15%' }"
  >
    <pub-field
      :articleId='artId'
      :comId='replyRecommentItem.com_id'
      @pubSuccess='handlePubSuccess'
      @addCommentCount='recommandTotal++'
    >
    </pub-field>
  </van-popup>

</div>
</template>

<script>
import RecommentItem from './recommentItem.vue'
import { getArticleRecommentsApi } from '@/http/article'
import PubField from './pubField.vue'
export default {
  name: 'ReplyComment',
  data () {
    return {
      // 回复数量
      replyTitleCount: this.replyRecommentItem.reply_count,
      loading: false,
      finished: false,
      offset: null,
      limit: 10,
      replyRecomment: [],
      recommentShow: false
    }
  },
  props: {
    replyRecommentItem: {
      type: Object
    },
    artId: {
      type: [Number, String, Object]
    }
  },
  components: {
    RecommentItem,
    PubField
  },
  methods: {
    async onLoad () {
      const { data } = await getArticleRecommentsApi({
        type: 'c',
        source: this.replyRecommentItem.com_id + '',
        offset: this.offset,
        limit: this.limit
      })
      const { results, end_id: endId } = data.data
      console.log('回复评论123', results)
      this.replyRecomment.push(...results)
      this.loading = false
      if (results.length) {
        this.offset = endId
      } else {
        this.finished = true
      }
    },
    writeComment () {
      console.log('写评论')
      this.recommentShow = true
    },
    handlePubSuccess (recommentData) {
      this.recommentShow = false
      console.log('recommentData', recommentData)
      this.replyRecomment.unshift(recommentData)
      this.replyTitleCount++
    }
  }
}
</script>

<style scoped lang="scss">
.reply-comment {
  /deep/.van-nav-bar__content{
    background-color: unset;
    .van-nav-bar__title {
      color: #323233;
    }
  }
  .reply-wrapper {
    position: fixed;
    top: 287px;
    bottom: 30px;
    width: 100%;
    overflow: auto;
    width: 100%;
    padding: 0 10px;
    box-sizing: border-box;
    .title {
      padding-bottom: 10px;
      font-size: 14px;
      border-bottom: 0.5px solid rgba($color: #ccc, $alpha: 0.5);
    }
  }
  .bottom-btn {
    position: fixed;
    bottom: 0;
    width: 100%;
    .van-button {
      width: 100%;
      height: 30px;
      font-size: 12px;
    }
  }
}

</style>
