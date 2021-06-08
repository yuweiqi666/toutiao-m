<template>
  <div>
    <van-cell>
      <div slot="title">
        <div class="title">{{ articleData.title }}</div>
        <div v-if="articleData.cover.type == 3">
          <van-image
            v-for="(item, index) in articleData.cover.images"
            :key="index"
            fit="cover"
            :src="item"
          />
        </div>
      </div>
      <div slot="label">
        <span v-if="articleData.is_top == 1" class="isTop">置顶</span>
        <span class="text">{{ articleData.aut_name }}</span>
        <span class="text">{{ articleData.comm_count }}评论</span>
        <span class="text">{{ articleData.pubdate }}</span>
      </div>
      <div slot="default" v-if="articleData.cover.type == 1">
        <van-image
          :src="articleData.cover.images[0]"
          fit="cover"
        />
      </div>
    </van-cell>
  </div>
</template>

<script>
export default {
  name: 'ArticleItem',
  props: {
    articleData: {
      type: Object
    }
  }
}
</script>

<style scoped lang="scss">
.van-cell {
  .van-cell__title {
    flex: 2;
    .title {
      font-size: 16px;
      font-weight: 500;
      color: #3a3a3a;
    }
  }

  .van-cell__label {
    .isTop {
      color: #e22829;
    }
    .text {
      color: #b4b4b4;
    }
  }
}
  .van-image {
    width: 100px;
    height: 74px;
  }
</style>
