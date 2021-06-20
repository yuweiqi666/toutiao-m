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
          <div class="recomment-reply">
            <van-button
              color="#f4f5f6"
              size="mini"
              round
            >
            {{ recommentItem.reply_count }} 回复
            </van-button>
          </div>
        </div>
      </div>
      <!-- 右侧点赞图标 -->
      <div slot="right-icon">
        <van-icon name="good-job-o" /> {{recommentItem.like_count}}
      </div>

    </van-cell>
  </div>
</template>

<script>
export default {
  name: 'RecommentItem',
  props: {
    recommentItem: {
      type: Object
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
