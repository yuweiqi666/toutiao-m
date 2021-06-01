<template>
  <div class="mine">
    <van-cell-group class="topMsg">
      <!-- 顶部头像和数据信息 -->
      <van-cell center class="avatorMsg" :border="false">
        <!-- 左侧头像插槽 -->
        <div slot="icon">
          <van-image
            round
            src="https://img01.yzcdn.cn/vant/cat.jpeg"
            fit="cover"
          />
        </div>
        <!-- 左侧昵称插槽 -->
        <div slot="title">
          昵称
        </div>
        <!-- 右侧按钮插槽 -->
        <div slot="right-icon">
          <van-button round size="small">编辑资料</van-button>
        </div>
      </van-cell>
      <!-- data数据 -->
      <van-grid :border="false">
        <van-grid-item>
          <div slot="text" class="title">10</div>
          <div slot="text" class="text">头条</div>
        </van-grid-item>
        <van-grid-item>
          <div slot="text" class="title">10</div>
          <div slot="text" class="text">关注</div>
        </van-grid-item>
        <van-grid-item>
          <div slot="text" class="title">10</div>
          <div slot="text" class="text">粉丝</div>
        </van-grid-item>
        <van-grid-item>
          <div slot="text" class="title">10</div>
          <div slot="text" class="text">获赞</div>
        </van-grid-item>
      </van-grid>
    </van-cell-group>
    <van-grid class="saveMsg" :column-num="2" :border="false">
      <van-grid-item icon-prefix="iconfont toutiao" icon="shoucang" text="收藏" />
      <van-grid-item icon-prefix="iconfont toutiao" icon="lishi" text="历史" />
    </van-grid>
    <van-cell title="消息通知" />
    <van-cell title="小智同学" />
    <van-cell class="logout" title="退出登录" />
  </div>
</template>

<script>
export default {
  name: 'mine'
}
</script>

<style scoped lang="scss">
.mine {
  .topMsg {
    background: url("./imgs/banner@2x.png");
    background-size: cover;
    .avatorMsg {
      box-sizing: border-box;
      height: 115px;
      background-color: unset;
      padding: 38px 16px 12px 16px;
      .van-image  {
        width: 66px;
        height: 66px;
        border-radius: 66px;
        border: 1px solid #fff;
      }
      .van-cell__title {
        padding-left: 11px;
        font-size: 15px;
        color: #fff;
      }
      .van-button__text {
        // color: #c1c1c1;
      }
      .van-button {
        height: 17px;
        color: #666;
      }
    }
    .van-grid{
      height: 65px;
      .van-grid-item {
        height: 100%;
        /deep/.van-grid-item__content {
          background-color: unset !important;
          color: #fff;
          .title {
            font-size: 18px;
            margin-bottom: 8px;
          }
          .text {
            font-size: 12px;
          }
        }
      }
    }

  }
  .saveMsg {
    height: 70px;
    margin-bottom: 5px;
    .van-grid-item {
      box-sizing: border-box;
      height: 100%;
      /deep/.van-grid-item__content {

        /deep/.toutiao {
          font-size: 22px;
        }
        .toutiao-shoucang {
          color: #eb5253;
        }
        .toutiao-lishi {
          color: #ff9d1d;
        }
      }

    }
  }
  .logout {
    text-align: center;
  }
}

</style>
