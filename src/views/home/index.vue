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
  <van-tabs color="#3296fa" swipeable duration="0.5" class="tabList">
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
    <edit-channels :channelList="userTabsList" :channels="channels"></edit-channels>
  </van-popup>

</div>
</template>

<script>
import { getUserTabsListApi, getAllChannelsApi } from '@/http/user'
import ArticleList from './components/articleList'
import EditChannels from './components/editChannels.vue'
export default {
  name: 'home',
  data () {
    return {
      userTabsList: [],
      popUpShow: false,
      channels: []
    }
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

    async getAllChannels () {
      try {
        const { data } = await getAllChannelsApi()
        console.log('所有频道列表', data)
        const { channels } = data.data
        this.channels = channels
      } catch (err) {
        this.$toast.fail('获取所有频道信息失败')
      }
    },
    handleOpenChannel () {
      this.popUpShow = true
    }
  },
  activated () {
    this.getUserTabsList()
  },
  created () {
    this.getAllChannels()
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
