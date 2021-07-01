<template>
<div class="edit-name">
  <!-- 头部信息 -->
  <van-nav-bar
    title="昵称"
    left-text="取消"
    right-text="完成"
    @click-left="onClickLeft"
    @click-right="onClickRight('name')"
  />
  <!-- 文本输入框 -->
  <van-form ref="editNameForm" :show-error-message='false' :show-error='false'>
    <van-field
      v-model="userProfitForm.name"
      rows="2"
      autosize
      type="textarea"
      maxlength="7"
      placeholder="请输入昵称"
      show-word-limit
      :rules="[{ required: true, message: '昵称必须在1~7个字符之间' }]"
    />
  </van-form>
</div>
</template>

<script>
import editDataMixin from '@/mixins/editDataMixin'
// 父组件传过来的数据进行深拷贝  减引用
export default {
  name: 'EditName',
  mixins: [editDataMixin]
}
</script>

<style scoped lang='scss' src='../style/editData.scss'>
</style>
