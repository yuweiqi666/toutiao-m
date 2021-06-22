<template>
  <div class="pub-field">
    <van-field
      v-model.trim="content"
      rows="2"
      maxlength='50'
      autosize
      show-word-limit
      type="textarea"
      placeholder="优质评论将会被优先展示"
    />
    <span class="pub-text" @click="handlePub">发布</span>
  </div>
</template>

<script>
import { pubRecommentApi } from '@/http/article'
export default {
  name: 'PubField',
  data () {
    return {
      content: ''
    }
  },
  props: {
    articleId: [Number, String, Object],
    comId: [Number, String, Object]

  },
  methods: {
    // 对文章发布评论
    async handlePub () {
      console.log('this.articleId', this.articleId)
      if (this.content) {
        this.$toast.loading({
          duration: 0, // 持续展示 toast
          forbidClick: true,
          message: '发布中'
        })
        try {
          const { data } = await pubRecommentApi({
            target: this.comId ? this.comId + '' : this.articleId + '',
            content: this.content,
            art_id: this.comId ? this.articleId + '' : null
          })
          console.log('发表评论', data)
          // this.recommentShow = false
          this.$toast.success('发布成功')
          this.content = ''

          this.$emit('pubSuccess', data.data.new_obj)

          this.$emit('addCommentCount')
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
