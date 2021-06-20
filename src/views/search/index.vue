<template>
  <div class="searchArticle">
    <!-- 搜索框 -->
    <form action="/">
      <van-search
        v-model="searchValue"
        background="#3296fa"
        placeholder="请输入搜索关键词"
        show-action
        @search="onSearch(searchValue)"
        @cancel="$router.back()"
        @focus="onFocus"
      />
    </form>
    <!-- 搜索结果 首先判断isResultShow 控制搜索结果的显示与隐藏-->
    <search-result v-if="isResultShow" :searchValue='searchValue'>
    </search-result>
    <!-- 搜索联想  通过searchValue有没有数据来控制显示搜索联想还是显示历史记录-->
    <search-suggestion
      v-else-if="searchValue"
      :searchValue="searchValue"
      @handleSuggestionSearch="onSearch($event)"
    >
    </search-suggestion>
    <!-- 历史记录 -->
    <search-history
      v-else
      :searchHistories='searchHistories'
      @handleClickSearchHistory="onSearch($event.item)"
      @handleDeleteSearchHistory='deleteHistory'
      @handleDeleteAllSearchHistory='deleteAllSearchHistory'
    >
    </search-history>
  </div>
</template>

<script>
import SearchSuggestion from './components/searchSuggestion.vue'
import SearchHistory from './components/searchHistory.vue'
import SearchResult from './components/searchResult.vue'
import { getSearchHistoryApi, deleteAllSearchHistoryApi } from '@/http/search'
import { setItem, getItem } from '@/utils/storage'
import { mapState } from 'vuex'
export default {
  name: 'SearchArticle',
  data () {
    return {
      searchValue: '',
      isResultShow: false, // 控制搜索结果的显示与隐藏
      searchResult: [],
      searchHistories: getItem('searchHistories') || [] // 搜索历史记录数据
    }
  },
  components: {
    SearchSuggestion,
    SearchHistory,
    SearchResult
  },
  computed: {
    ...mapState(['user'])
  },
  async created () {
    // 判断用户有没有登录
    if (this.user) {
      // 用户登录了
      try {
        const { data } = await getSearchHistoryApi()

        console.log('搜索历史数据', data)

        const { keywords } = data.data

        console.log('keywords', ...keywords)

        /**
         * 1.在登陆的情况下将接口数据和本地数据 进行合并
         * 2.同时对合并的数组进行去重  es6 new set()
         */
        this.searchHistories = [...new Set([...this.searchHistories, ...keywords])]

        console.log('this.searchHistories', this.searchHistories)
      } catch (err) {
        console.log('获取搜索历史失败')
      }
    }
  },
  methods: {
    // 点击搜索按钮是触发
    async onSearch (value) {
      this.searchValue = value
      // 判断搜索历史中有没有重复的数据
      const historyIndex = this.searchHistories.indexOf(this.searchValue)
      if (historyIndex !== -1) {
        // 存在重复数据的情况  先删掉原先的数据  再把最新的数据放到最前面
        this.searchHistories.splice(historyIndex, 1)
      }
      // 触发搜索的时候将 搜索的数据添加到搜索历史中
      this.searchHistories.unshift(this.searchValue)

      this.isResultShow = true
    },
    // 输入框获取焦点时触发
    onFocus () {
      // 获取焦点的时候判断一下isResultShow  如果是true说明触发了搜索事件  需要把它设置为false
      this.isResultShow = this.isResultShow && !this.isResultShow

      console.log(this.isResultShow)
    },
    // 删除单个历史记录   后天没有提供删除单个历史记录的接口  所以这边只是删除了本地的数据
    deleteHistory (history) {
      console.log('要删除的历史记录', history)
      // 删除单个历史记录
      this.searchHistories.splice(history.index, 1)
    },
    // 删除所有的历史记录
    async deleteAllSearchHistory () {
      // 删除本地的历史记录
      this.searchHistories = []

      // 判断用户是否登陆  在登陆的情况下调用接口删除线上的历史数据
      if (this.user) {
        try {
          await deleteAllSearchHistoryApi()
        } catch (err) {
          console.log('删除所有历史数据失败')
        }
      }
    }
  },
  watch: {
    searchHistories: {
      handler (n, o) {
        // 持久化处理 监听历史数据的变化 将数据存放到localstorage中
        setItem('searchHistories', n)
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .van-search__action {
    color: #fff;
  }
</style>
