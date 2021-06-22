<template>
  <div class="recomment-item">
    <van-cell>
      <!-- 左侧评论名称 -->
      <div slot="title">
        {{ recommentItem.aut_name }}
      </div>
      <!-- 左侧头像 -->
      <div slot="icon">
        <van-image
          width="38"
          height="38"
          :src="recommentItem.aut_photo"
          round
        />
      </div>
      <!-- 评论内容 -->
      <div slot="label">
        <div class="recomment-content">
          {{ recommentItem.content }}
        </div>
        <div class="recomment-bottom">
          <div class="recomment-date">{{recommentItem.pubdate}}</div>
          <div class="recomment-reply" v-if="showReplyBtnFlag">
            <van-button
              color="#f4f5f6"
              size="mini"
              round
              @click="handleClickReply"
            >
            {{ recommentItem.reply_count }} 回复
            </van-button>
          </div>
        </div>
      </div>
      <!-- 右侧点赞图标 -->
      <div slot="right-icon">
        <van-icon
          :name="recommentItem.is_liking ? 'good-job': 'good-job-o'"
          :color="recommentItem.is_liking ? '#e22829' : '#777'"
          @click="handleLikeIcon"
        /> {{recommentItem.like_count}}
      </div>

    </van-cell>
  </div>
</template>

<script>
import { addRecommentLikeApi, cancelRecommentLikeApi } from '@/http/article'
export default {
  name: 'RecommentItem',
  props: {
    recommentItem: {
      type: Object
    },
    showReplyBtnFlag: {
      type: Boolean
    }
  },
  methods: {
    async handleLikeIcon () {
      console.log('评论id', this.recommentItem.com_id + '')
      try {
        if (this.recommentItem.is_liking) {
        // 取消对评论的点赞
          await cancelRecommentLikeApi(this.recommentItem.com_id + '')
          this.$toast.success('取消点赞')
          this.recommentItem.like_count--
        } else {
        // 对评论点赞
          await addRecommentLikeApi({
            target: this.recommentItem.com_id + ''
          })
          this.$toast.success('点赞成功')
          this.recommentItem.like_count++
        }
        this.recommentItem.is_liking = !this.recommentItem.is_liking
      } catch (err) {
        this.$toast.success('请求失败')
      }
    },
    // 点击回复按钮
    handleClickReply () {
      console.log('单个评论的数据', this.recommentItem)
      this.$emit('clickReplyRecomment', this.recommentItem)
    }
  }
}
</script>

<style scoped lang='scss'>
  .recomment-item {
    margin-bottom: 34px;
    .van-image {
      margin-right: 5px;
    }
    .van-cell__title {
      color: #406599;
    }
    .van-cell__label {
      color: #222;
      .recomment-content {
        margin-bottom: 8px;
        font-size: 16px;
      }
      .recomment-bottom {
        display: flex;
        .recomment-date {
          margin-right: 20px;
          display: flex;
          align-items: center;
        }
        .recomment-reply {
          .van-button {
            width: 67px;
            .van-button__text {
              color: #222;
            }
          }
        }
      }
    }
  }
</style>
