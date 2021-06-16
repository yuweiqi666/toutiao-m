<template>
  <div class="search-result">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell v-for="item in searchResuleList" :key="item" :title="item" />
    </van-list>
  </div>
</template>

<script>
export default {
  name: 'SearchResult',
  data () {
    return {
      finished: false,
      loading: false,
      searchResuleList: []
    }
  },
  methods: {
    onLoad () {
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.searchResuleList.push(this.searchResuleList.length + 1)
        }
        this.loading = false

        if (this.searchResuleList.length >= 40) {
          this.finished = true
        }
      }, 1000)
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
