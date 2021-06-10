<template>
  <div class="edit-channels">
    <div class="my-channels">
      <!-- 我的频道标题区 -->
      <p class="title">
        <span>我的频道</span>
        <van-button round plain color="#f85959" size="mini">编辑</van-button>
      </p>
      <!-- 我的频道内容区 -->
      <van-grid :column-num="4" :gutter="11">
        <van-grid-item
          v-for="item in channelList"
          :key="item.id"
          :text="item.name"
        />
      </van-grid>
    </div>
    <div class="recommand-channels">
      <p class="title">
        <span>频道编辑</span>
      </p>
      <van-grid :column-num="4" :gutter="11">
        <van-grid-item
          v-for="item in channels"
          :key="item.id"
          :text="item.name"
        />
      </van-grid>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditChannels',
  created () {
    console.log(123)
  },
  props: {
    channelList: {
      type: Array
    },
    channels: {
      type: Array
    }
  }
}
</script>

<style scoped lang="scss">
.edit-channels {
  padding: 48px 12px 0;
  .my-channels,
  .recommand-channels {
    margin-bottom: 20px;
    .title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;
      span {
        font-size: 16px;
      }
      .van-button {
        width: 51px;
        height: 23px;
        span {
          font-size: 12px;
        }
      }
    }
    .van-grid {
      .van-grid-item{
        height: 43px;
        /deep/.van-grid-item__content {
          background-color: #f4f5f6;
          .van-grid-item__text {
            font-size: 10px;
            color: #222;
          }
        }
      }
    }
  }

}

</style>
