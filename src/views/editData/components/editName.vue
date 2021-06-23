<template>
<div class="edit-name">
  <!-- 头部信息 -->
  <van-nav-bar
    title="昵称"
    left-text="取消"
    right-text="完成"
    @click-left="onClickLeft"
    @click-right="onClickRight"
  />
  <!-- 文本输入框 -->
  <van-form>
    <van-field
      v-model="username"
      rows="2"
      autosize
      type="textarea"
      maxlength="7"
      placeholder="请输入留言"
      show-word-limit
      :rules="[{ required: true, message: '名称必须为1~7个字符' }]"
    />
  </van-form>
</div>
</template>

<script>
import editDataMixin from '@/mixins/editDataMixin'
import rules from '../rules/rules'
export default {
  name: 'EditName',
  mixins: [editDataMixin],
  data () {
    return {
      rules
    }
  },
  props: {
    username: {
      type: String
    }
  },
  methods: {

  }
}
</script>

<style scoped lang='scss' src='../style/editData.scss'>
</style>
