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
  <van-tabs>
    <van-tab
      :key="item.id"
      v-for="item in userTabsList"
      :title='item.name'
    >
      <article-list :articleId="item.id"></article-list>
    </van-tab>
  </van-tabs>
</div>
</template>

<script>
import { getUserTabsListApi } from '@/http/user'
import ArticleList from './components/articleList'
export default {
  name: 'home',
  data () {
    return {
      userTabsList: []
    }
  },
  components: {
    ArticleList
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
    }
  },
  activated () {
    this.getUserTabsList()
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

</style>
