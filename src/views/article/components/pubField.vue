<template>
  <div class="pub-field">
    <van-field
      v-model.trim="content"
      rows="2"
      maxlength='50'
      autosize
      show-word-limit
      type="textarea"
      placeholder="请输入评论"
    />
    <span class="pub-text" @click="handlePub">发布</span>
  </div>
</template>

<script>
import { addRecommentLikeApi } from '@/http/article'
export default {
  name: 'PubField',
  data () {
    return {
      content: ''
    }
  },
  props: {
    articleId: [Number, String, Object]
  },
  methods: {
    // 对文章发布评论
    async handlePub () {
      if (this.content) {
        try {
          const { data } = await addRecommentLikeApi({
            target: this.articleId,
            content: this.content
          })
          console.log('发表评论', data)
          // this.recommentShow = false
          this.$toast.success('发布成功')
          this.content = ''
          this.$emit('pubSuccess', data.data)
        } catch (err) {
          this.$toast.success('发布失败')
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.pub-field {
  display: flex;
  align-items: center;
  /deep/.van-field__control {
    width: 250px;
  }
  .van-field {
    padding: 10px;
    margin-right: 25px;
    width: 77%;
    /deep/.van-cell__value {
      box-sizing: border-box;
      padding: 5px;
      background-color: rgba($color: #ccc, $alpha: 0.2);
    }
  }
  .pub-text {
    color: #406599;
    font-size: 16px;
    line-height: 10px;
  }
}

</style>
