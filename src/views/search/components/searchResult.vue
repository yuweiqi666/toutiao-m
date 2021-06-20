<template>
  <div class="search-result">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell
        v-for="item in searchResultList"
        :key="+item.art_id"
        :title="item.title"
        @click="handleArticleDetail(item.art_id)"
      />
    </van-list>
  </div>
</template>

<script>
import { getSearchResultApi } from '@/http/search'
export default {
  name: 'SearchResult',
  data () {
    return {
      finished: false,
      loading: false,
      searchResultList: [],
      page: 1
    }
  },
  props: {
    searchValue: {
      type: String
    }
  },
  methods: {
    async onLoad () {
      try {
        const { data } = await getSearchResultApi({
          q: this.searchValue,
          page: this.page
        })

        const { results } = data.data

        this.searchResultList.push(...results)

        console.log('this.searchResultList', this.searchResultList)

        this.loading = false

        if (results.length === 0) {
          this.finished = true
        } else {
          this.page++
        }
      } catch (err) {
        console.log('获取搜索结果失败', err)
      }
    },
    // 点击单个搜索结果进入文章详情
    handleArticleDetail (artId) {
      console.log('跳转详情页', artId)
      this.$router.push({
        name: 'articleDetail',
        params: {
          articleId: artId
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
  .search-result {
    position: fixed;
    width: 100%;
    top: 53px;
    bottom: 0;
    overflow: auto;
  }
</style>
