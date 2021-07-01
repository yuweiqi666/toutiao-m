<template>
  <div class="edit-birthday">
    <van-datetime-picker
      visible-item-count='4'
      v-model="userProfitForm"
      type="date"
      title="选择年月日"
      @confirm="onConfirm"
      @cancel="onCancel"
    />
  </div>
</template>

<script>
import editDataMixin from '@/mixins/editDataMixin'
export default {
  name: 'EditBirthday',
  mixins: [editDataMixin],
  data () {
    return {

    }
  },
  methods: {
    onConfirm (v) {
      console.log(this.userProfitForm)
      console.log(v.getFullYear())
      console.log(v.getMonth() + 1)
      console.log(v.getDate())
      this.onClickRight('birthday')
    }

  }

}
</script>

<style scoped lang="scss" src='../style/editData.scss'>
</style>
