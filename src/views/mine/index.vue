<template>
  <div class="mine">
    <van-cell-group v-if="user" class="topMsg">
      <!-- 顶部头像和数据信息 -->
      <van-cell center class="avatorMsg" :border="false">
        <!-- 左侧头像插槽 -->
        <div slot="icon">
          <van-image
            round
            :src="currentUser.photo"
            fit="cover"
          />
        </div>
        <!-- 左侧昵称插槽 -->
        <div slot="title">
          {{currentUser.name}}
        </div>
        <!-- 右侧按钮插槽 -->
        <div slot="right-icon">
          <van-button round size="small">编辑资料</van-button>
        </div>
      </van-cell>
      <!-- data数据 -->
      <van-grid :border="false">
        <van-grid-item>
          <div slot="text" class="title">{{currentUser.art_count}}</div>
          <div slot="text" class="text">头条</div>
        </van-grid-item>
        <van-grid-item>
          <div slot="text" class="title">{{currentUser.follow_count}}</div>
          <div slot="text" class="text">关注</div>
        </van-grid-item>
        <van-grid-item>
          <div slot="text" class="title">{{currentUser.fans_count}}</div>
          <div slot="text" class="text">粉丝</div>
        </van-grid-item>
        <van-grid-item>
          <div slot="text" class="title">{{currentUser.like_count}}</div>
          <div slot="text" class="text">获赞</div>
        </van-grid-item>
      </van-grid>
    </van-cell-group>
    <van-cell-group v-else class="no-login" :border="false">
      <van-cell>
        <div slot="title" class="no-login-wrapper" @click="$router.push('login')">
          <div>
            <i class="iconfont toutiao-wode"></i>
          </div>
          <div>登录 / 注册</div>
        </div>
      </van-cell>
    </van-cell-group>
    <van-grid class="saveMsg" :column-num="2" :border="false">
      <van-grid-item icon-prefix="iconfont toutiao" icon="shoucang" text="收藏" />
      <van-grid-item icon-prefix="iconfont toutiao" icon="lishi" text="历史" />
    </van-grid>
    <van-cell title="消息通知" />
    <van-cell title="小智同学" />
    <van-cell v-if="user"
      class="logout"
      title="退出登录"
      @click="handleLogout"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { userInfoApi } from '@/http/user'
export default {
  name: 'mine',
  data () {
    return {
      currentUser: {}
    }
  },
  computed: {
    ...mapState(['user'])
  },
  methods: {
    async getCurrentUserInfo () {
      const { data } = await userInfoApi()
      console.log('当前用户信息', data)
      this.currentUser = data.data
    },
    handleLogout () {
      this.$dialog.confirm({
        title: '退出确认',
        message: '退出当前头条账号，将不能同步收藏，发布评论和云端分享等'
      }).then(() => {
        // on close
        this.$store.commit('setUser', null)
      })
    }
  },
  created () {
    if (this.user) {
      this.getCurrentUserInfo()
    }
  }

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
  .no-login {
    height: 180px;
    background: url("./imgs/banner@2x.png");
    background-size: cover;
    display: flex;
    align-items: center;

    .van-cell {
      background: unset;

      .van-cell__title {
        text-align: center;
        color: #fff;
        font-size: 18px;
        line-height: 30px;
        .no-login-wrapper {
          display: inline-block;
          .toutiao-wode {
            font-size: 30px;
            color: #fff;
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
    margin-top: 5px;
    font-size: 15px;
    color: #d86262;
  }
}

</style>
