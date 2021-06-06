<template>
  <div>
    {{ articleId }}列表
  </div>
</template>

<script>
export default {
  name: 'articleList',
  data () {
    return {

    }
  },
  props: {
    articleId: {
      type: Number,
      required: true
    }
  },
  created () {
    if (this.articleId === 4) {
      console.log(123)
    }
  }
}
</script>

<style>

</style>
