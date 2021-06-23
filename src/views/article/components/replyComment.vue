<template>
<div class="reply-comment">
  <!-- 评论回复标题 -->
  <van-nav-bar
    :title="replyRecommentItem.reply_count + '条回复'"
  />
  <!-- 当前需要回复的评论 -->
  <recomment-item
    :recommentItem='replyRecommentItem'
    :showReplyBtnFlag='false'
  >
  </recomment-item>
  <!-- 对当前评论的回复列表 -->
  <div class="reply-wrapper">
    <article-recomments
      @getClickReplyRecomment="writeComment"
      :commentList = 'replyRecomment'
      :artId='artId'
      type='c'
    >
    </article-recomments>
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
      v-if="recommentShow"
      :currentReplyCommentR='currentReplyCommentR'
      :articleId='artId'
      :comId='replyRecommentItem.com_id'
      @pubSuccess='handlePubSuccess'
      @addCommentCount='replyRecommentItem.reply_count++'
    >
    </pub-field>
  </van-popup>

</div>
</template>

<script>
import RecommentItem from './recommentItem.vue'
import ArticleRecomments from './articleRecomments.vue'
// import { getArticleRecommentsApi } from '@/http/article'
import PubField from './pubField.vue'
export default {
  name: 'ReplyComment',
  data () {
    return {
      offset: null,
      limit: 10,
      replyRecomment: [],
      recommentShow: false,
      currentReplyCommentR: undefined
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
    PubField,
    ArticleRecomments
  },
  methods: {
    // async onLoad () {
    //   const { data } = await getArticleRecommentsApi({
    //     type: 'c',
    //     source: this.replyRecommentItem.com_id + '',
    //     offset: this.offset,
    //     limit: this.limit
    //   })
    //   const { results, end_id: endId } = data.data
    //   console.log('回复评论123', results)
    //   this.replyRecomment.push(...results)
    //   this.loading = false
    //   if (results.length) {
    //     this.offset = endId
    //   } else {
    //     this.finished = true
    //   }
    // },
    writeComment (value) {
      console.log(value)
      this.currentReplyCommentR = value.aut_name ? value : undefined
      this.recommentShow = true
    },
    handlePubSuccess (recommentData) {
      this.recommentShow = false
      console.log('recommentData', recommentData)
      this.replyRecomment.unshift(recommentData)
      this.replyTitleCount++
    }
    // // 回复评论列表中点击回复按钮
    // getClickReplyRecomment () {
    //   console.log('回复评论列表中点击回复按钮')
    //   this.$emit('getBottomRecomment')
    // }
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
