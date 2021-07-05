import { editUserProfitApi } from '@/http/user'
import { cloneDeep } from 'lodash'
export default {
  data () {
    return {
      userProfitForm: cloneDeep(this.userProfit)
    }
  },
  props: ['userProfit'],
  methods: {
    // 点击取消
    onClickLeft () {
      this.$emit('closeEditPopup')
    },
    // 点击完成
    async onClickRight (value) {
      try {
        if (value === 'name') {
          await this.$refs.editNameForm.validate()
        }
        this.handleEditProfit(value)
      } catch (err) {
        console.log(err)
        this.$toast.fail(err[0].message)
      }
    },
    async handleEditProfit (value) {
      try {
        const { data } = await editUserProfitApi({
          name: value === 'name' ? this.userProfitForm.name : null,
          gender: value === 'gender' ? this.$refs.pickerEdit.getIndexes()[0] : null,
          birthday: value === 'birthday' ? this.userProfitForm.getFullYear() + '-' + (this.userProfitForm.getMonth() + 1) + '-' + this.userProfitForm.getDate() : null
        })
        const { name, gender, birthday } = data.data
        if (value === 'name') {
          this.userProfit.name = name
        } else if (value === 'gender') {
          this.userProfit.gender = gender
        } else if (value === 'birthday') {
          console.log('this.userProfit', this.userProfit)
          // this.userProfit.birthday = birthday
          this.$emit('editBirthDay', birthday)
        }
        this.$emit('closeEditPopup')
      } catch (err) {
        this.$toast.fail('编辑失败')
      }
    },
    onCancel () {
      this.onClickLeft()
    }

  }
}
