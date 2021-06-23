<template>
<div class="edit-gender">
  <van-nav-bar
    title="性别"
    left-text="取消"
    right-text="完成"
    @click-left="onClickLeft"
    @click-right="onClickRight"
  />
</div>
</template>

<script>
import editDataMixin from '@/mixins/editDataMixin'
export default {
  name: 'EditGender',
  mixins: [editDataMixin]
}
</script>

<style scoped lang="scss" src='../style/editData.scss'>
</style>
