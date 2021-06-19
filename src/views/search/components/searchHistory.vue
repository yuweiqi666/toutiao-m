<template>
  <div class="search-history">
    <van-cell title="历史记录">
      <!-- 右侧删除图标 -->
      <div slot="right-icon" class="search-icon" v-if="deleteShow" @click="deleteShow = !deleteShow">
        <van-icon name="delete-o"/>
      </div>
      <!-- 右侧删除文字 -->
      <div slot="default" v-else>
        <span class="delete-search" @click="deleteAllSearchHistory">全部删除</span> <span class="delete-search" @click="deleteShow = !deleteShow">完成</span>
      </div>
    </van-cell>
    <!-- 历史记录数据 -->
    <van-cell :title="item" v-for="(item, index) in searchHistories" :key="index" @click="clickSearchHistory({ item, index })">
      <div slot="right-icon" v-if="!deleteShow">
        <van-icon name="close" />
      </div>
    </van-cell>
  </div>
</template>

<script>
export default {
  name: 'SearchHistory',
  props: {
    searchHistories: {
      type: Array
    }
  },
  data () {
    return {
      deleteShow: true
    }
  },
  methods: {
    // 点击单个搜索历史
    clickSearchHistory (history) {
      if (this.deleteShow) {
        // 非编辑模式下点击历史记录 直接触发搜索结果
        this.$emit('handleClickSearchHistory', history)
      } else {
        // 编辑模式下  删除单个搜索历史
        this.$emit('handleDeleteSearchHistory', history)
      }
    },
    // 点击全部删除
    deleteAllSearchHistory () {
      this.$emit('handleDeleteAllSearchHistory')
    }
  }

}
</script>

<style scoped lang="scss">
  .search-icon {
    display: flex;
    align-items: center;
  }
</style>
