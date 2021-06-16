<template>
  <div class="search-suggestion">
    <van-cell :title="suggestion" icon="search" :key="index" v-for="(suggestion, index) in valSuggestions"></van-cell>
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
  methods: {
    // 调用接口从后台获取联想建议数据
    async getResultSuggestion (value) {
      try {
        const { data } = await getResultSuggestionApi({
          q: value
        })
        console.log('搜索联想的值', data.data.options)
        this.valSuggestions = data.data.options
      } catch (err) {
        console.log('搜索联想错误')
      }
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

<style>

</style>
