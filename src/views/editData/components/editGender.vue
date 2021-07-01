<template>
<div class="edit-gender">
  <!-- 性别选择器 -->
  <van-picker
    ref='pickerEdit'
    title="性别"
    show-toolbar
    confirm-button-text='完成'
    :default-index='userProfitForm.gender'
    visible-item-count='4'
    :columns="columns"
    @confirm="onConfirm"
    @cancel="onCancel"
  />
</div>
</template>

<script>
import editDataMixin from '@/mixins/editDataMixin'
export default {
  name: 'EditGender',
  mixins: [editDataMixin],
  data () {
    return {
      columns: ['男', '女']
    }
  },
  methods: {
    onConfirm () {
      this.onClickRight('gender')
    }
  }
}
</script>

<style scoped lang="scss" src='../style/editData.scss'>
.van-picker {
  /deep/.van-picker-columns {
    height: 220px;
  }
}
</style>
