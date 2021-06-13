<template>
<div>
  <!-- 顶部导航 -->
  <div class="topnav">
    <van-nav-bar>
      <!-- 使用插槽自定义标题内容 -->
      <div slot="title">
        <van-button
          round
          class="search-btn"
          icon="search"
          type="default"
          size="small"
          block
        >
        搜索
        </van-button>
      </div>
    </van-nav-bar>
  </div>
  <!-- 顶部标签页 -->
  <van-tabs v-model="active" color="#3296fa" swipeable duration="0.5" class="tabList">
    <van-tab
      :key="item.id"
      v-for="item in userTabsList"
      :title='item.name'
    >
      <!-- 文章列表组件 -->
      <article-list :articleId="item.id"></article-list>
    </van-tab>
    <!-- van- tabs 右侧内容插槽 -->
    <div slot="nav-right">
      <!-- 汉堡标签 -->
      <van-icon name="wap-nav" class="ham-icon" @click="handleOpenChannel" />
    </div>
  </van-tabs>

  <!-- 频道编辑弹出层 -->
  <van-popup
   round
   closeable
   close-icon-position="top-left"
   v-model="popUpShow"
   position="bottom"
   :style="{ height: '100%' }"
   :overlay="false"
   get-container="body"
   class="channel-edit-wrapper"
  >
    <!-- 我的频道编辑组件 -->
    <edit-channels
      :channelList="userTabsList"
      :activeChannel="active"
      @addChannel="addUserChannel"
      @deleteChannel="deleteUserChannel"
      @closePopUp="popUpShow = false"
      @clickChannel="active = $event"
      @reduceActive='active--'
    >
    </edit-channels>
  </van-popup>

</div>
</template>

<script>
import { getUserTabsListApi, addUserChannelApi, deleteUserChannelApi } from '@/http/user'
import ArticleList from './components/articleList'
import EditChannels from './components/editChannels.vue'
import { getItem, setItem } from '@/utils/storage.js'
import { mapState } from 'vuex'

export default {
  name: 'home',
  data () {
    return {
      userTabsList: [],
      popUpShow: false,
      // 选中标签的索引
      active: 0
    }
  },
  computed: {
    ...mapState(['user'])

  },
  components: {
    ArticleList,
    EditChannels
  },
  methods: {
    async getUserTabsList () {
      try {
        const { data } = await getUserTabsListApi()
        console.log('用户标签信息', data.data)
        this.userTabsList = data.data.channels
      } catch (err) {
        this.$toast.fail('获取标签信息失败')
      }
    },
    handleOpenChannel () {
      this.popUpShow = true
    },
    async addUserChannel (channel) {
      console.log('data', channel)
      this.userTabsList.push(channel)
      // 数据持久化 判断用户有没有登录
      /**
       * 如果用户没有登录 数据存储在本地
       * 如果用户登录了  调接口 数据出处在后台服务器
       */
      if (this.user) {
        // 调接口
        try {
          await addUserChannelApi({
            channels: [
              {
                id: channel.id,
                seq: this.userTabsList.length
              }
            ]
          })
        } catch (err) {
          this.$toast.fail('添加失败')
        }
      } else {
        // 本地存储localstorage
        setItem('userTabsList', this.userTabsList)
      }
    },
    async deleteUserChannel (userChannelIndex, channelId) {
      console.log('delete', userChannelIndex, channelId)
      this.userTabsList.splice(userChannelIndex, 1)
      // 删除频道数据持久化
      if (this.user) {
        // 登录状态下 调接口 删除指定的频道
        try {
          await deleteUserChannelApi(channelId)
        } catch (err) {
          this.$toast.fail('删除频道失败')
        }
      } else {
        setItem('userTabsList', this.userTabsList)
      }
    }
  },
  activated () {
    // 先判断用户有没有登录
    if (this.user) {
      this.getUserTabsList()
    } else {
      if (getItem('userTabsList')) {
      // 在判断本地存储有没有用户频道数据
        this.userTabsList = getItem('userTabsList')
      } else {
        /**
         * 没有登录同时本地存储没有频道数据 那么还是调这个接口
         * 这个接口在没有登录状态下调用获取的是默认的频道列表（通过有没有传 token来判断）
         *
         */
        this.getUserTabsList()
      }
    }
  }

}
</script>

<style scoped lang="scss">
/deep/.van-nav-bar__title {
  max-width: 100%;
  .search-btn {
    width: 278px;
    background-color: #5babfb;
    border: 0;
    .van-button__text {
      // font-size: 18px;
      color: #fff;
      .toutiao-sousuo {
        color: #fff;
      }
    }
  }
}

/deep/.van-tabs__nav--complete {
  padding-left: 0;
  padding-right: 0 !important;
  .van-tabs__line {
    width: 16px;
    top: 34px;
  }
  .van-tab {
    border: .5px solid #edeff3;
    width: 90px;
    padding: 0;
    &:nth-child(n + 1) {
      margin-left: -1px;
    }
  }
}

.ham-icon {
  position: fixed;
  height: 27px;
  top: 52px;
  vertical-align: middle;
  right: 0;
  color: #333;
  border-left: 0.5px solid rgba($color: #ccc, $alpha: 0.3);
  padding-left: 7px;
  background-color: rgba($color: #fff, $alpha: 0.8)
}

/deep/.van-popup__close-icon {
  color: black;
}

</style>
