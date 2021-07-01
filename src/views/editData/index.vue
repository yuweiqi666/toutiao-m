<template>
  <div class="edit-data">
    <!-- 头部信息 -->
    <van-nav-bar
      title="个人信息"
      left-arrow
      @click-left="$router.back()"
    />
    <!-- 表单编辑项 -->
    <van-cell is-link>
      <div slot="title">
        头像
      </div>
      <div slot="default">
        <van-image
          width="30"
          height="30"
          :src="userProfit.photo"
          round
          fit="cover"
        />
      </div>
    </van-cell>
    <van-cell is-link @click="showPopup('username')" title="昵称" :value="userProfit.name"></van-cell>
    <van-cell is-link @click="showPopup('gender')">
      <div slot="title">
        性别
      </div>
      <div slot="default">
        <span v-if="userProfit.gender == 0">男</span>
        <span v-else-if="userProfit.gender == 1">女</span>
      </div>
    </van-cell>
    <van-cell
      is-link
      @click="showPopup('birthday')"
      title="生日"
      :value="userProfit.birthday"
    ></van-cell>
    <!-- 弹出框 -->
    <van-popup
      class="bg"
      id="popupBottom"
      ref="vanPopup"
      position="bottom"
      v-model="popShow"
    >
      <!-- 昵称编辑 -->
      <edit-name
        v-if="editItemShow == 'username'"
        @closeEditPopup='handleCloseEditPopup'
        :userProfit='userProfit'
      ></edit-name>
      <!-- 性别编辑 -->
      <edit-gender
        v-else-if="editItemShow == 'gender'"
        @closeEditPopup='handleCloseEditPopup'
        :userProfit='userProfit'
      ></edit-gender>
      <!-- 生日编辑 -->
      <edit-birthday
        v-else-if="editItemShow == 'birthday'"
        @closeEditPopup='handleCloseEditPopup'
        :userProfit='new Date(userProfit.birthday)'
        @editBirthDay='userProfit.birthday = $event'
      ></edit-birthday>
    </van-popup>
  </div>
</template>

<script>
import { getUserProfitApi } from '@/http/user'
import EditName from './components/editName'
import EditGender from './components/editGender.vue'
import EditBirthday from './components/editBirthday.vue'
export default {
  name: 'EditData',
  data () {
    return {
      popShow: false,
      userProfit: {},
      editItemShow: '',
      username: ''
    }
  },
  components: {
    EditName,
    EditGender,
    EditBirthday
  },
  methods: {
    showPopup (value) {
      this.editItemShow = value

      this.popShow = true

      this.$nextTick(() => {
        const popupBottom = this.$refs.vanPopup.$el
        value === 'username' ? popupBottom.style.height = '100%'
          : popupBottom.style.height = '30%'
      })
    },
    handleCloseEditPopup () {
      this.popShow = false
    }
  },
  // 调接口获取用户个人信息
  async created () {
    const { data } = await getUserProfitApi()
    console.log('个人信息', data.data)
    this.userProfit = data.data
  }
}
</script>

<style scoped lang='scss'>
  .bg {
    background-color: #f5f7f9;
  }
</style>
