<template>
  <div class="searchArticle">
    <!-- 搜索框 -->
    <form action="/">
      <van-search
        v-model="searchValue"
        background="#3296fa"
        placeholder="请输入搜索关键词"
        show-action
        @search="onSearch"
        @cancel="$router.back()"
      />
    </form>
    <!-- 搜索结果 首先判断isResultShow 控制搜索结果的显示与隐藏-->
    <search-result v-if="isResultShow"></search-result>
    <!-- 搜索联想  通过searchValue有没有数据来控制显示搜索联想还是显示历史记录-->
    <search-suggestion v-else-if="searchValue" :searchValue="searchValue"></search-suggestion>
    <!-- 历史记录 -->
    <search-history v-else></search-history>
  </div>
</template>

<script>
import SearchSuggestion from './components/searchSuggestion.vue'
import SearchHistory from './components/searchHistory.vue'
import SearchResult from './components/searchResult.vue'
export default {
  name: 'SearchArticle',
  data () {
    return {
      searchValue: '',
      isResultShow: false // 控制搜索结果的显示与隐藏
    }
  },
  components: {
    SearchSuggestion,
    SearchHistory,
    SearchResult
  },
  methods: {
    // 点击搜索按钮是触发
    onSearch () {
      this.isResultShow = true
    },
    // 输入框获取焦点时触发
    onFocus () {
      // 获取焦点的时候判断一下isResultShow  如果是true说明触发了搜索事件  需要把它设置为false
      this.isResultShow = this.isResultShow && !this.isResultShow
    }
  }
}
</script>

<style scoped lang="scss">
  .van-search__action {
    color: #fff;
  }
</style>
