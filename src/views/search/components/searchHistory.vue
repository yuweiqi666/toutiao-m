<template>
  <div class="search-history">
    <van-cell title="历史记录">
      <!-- 右侧删除图标 -->
      <div slot="right-icon" class="search-icon" v-if="deleteShow" @click="deleteShow = !deleteShow">
        <van-icon name="delete-o"/>
      </div>
      <!-- 右侧删除文字 -->
      <div slot="default" v-else>
        <span class="delete-search">全部删除</span> <span class="delete-search" @click="deleteShow = !deleteShow">完成</span>
      </div>
    </van-cell>
    <!-- 历史记录数据 -->
    <van-cell title="搜索文字">
      <div slot="right-icon">
        <van-icon name="close" />
      </div>
    </van-cell>
  </div>
</template>

<script>
export default {
  name: 'SearchHistory',
  data () {
    return {
      deleteShow: true
    }
  }
}
</script>

<style scoped lang="scss">
  .search-icon {
    display: flex;
    align-items: center;
  }
  // .search-history {
  //   /deep/.delete-search {
  //     font-size: 10px;
  //   }
  // }
</style>
