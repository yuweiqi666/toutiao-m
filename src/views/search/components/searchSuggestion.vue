<template>
  <div class="search-suggestion">
    <van-cell  icon="search" :key="index" v-for="(suggestion, index) in valSuggestions" @click="hanldeSearchResult(suggestion)">
      <div slot="title" v-html="heightLight(suggestion)"></div>
    </van-cell>
  </div>
</template>

<script>
import { getResultSuggestionApi } from '@/http/search.js'
import { debounce } from 'lodash'

export default {
  name: 'SearchSuggestion',
  props: {
    searchValue: {
      type: String
    }
  },
  data () {
    return {
      valSuggestions: []
    }
  },
  computed: {

  },
  methods: {
    // 高亮函数 搜索联想的数组中每个元素关键词高亮
    heightLight (value) {
      const reg = new RegExp(this.searchValue, 'gi')
      const highLightItem = value.replace(reg, `<span class='highLisght-style'>${this.searchValue}</span>`)
      return highLightItem
    },
    // 调用接口从后台获取联想建议数据
    async getResultSuggestion (value) {
      try {
        const { data } = await getResultSuggestionApi({
          q: value
        })
        this.valSuggestions = data.data.options
      } catch (err) {
        console.log('搜索联想错误')
      }
    },
    // 点击搜索联想单元格
    hanldeSearchResult (suggestion) {
      console.log('suggestion', suggestion)
      this.$emit('handleSuggestionSearch', suggestion)
    }
  },
  watch: {
    searchValue: {
      // debounce为防抖函数 防抖时间为1s
      handler: debounce(function (n, o) {
        this.getResultSuggestion(n)
      }, 500, { leading: true }),
      immediate: true
    }
  }
}
</script>

<style scoped lang="scss">
/deep/.highLisght-style {
  color: red !important;
}
</style>
