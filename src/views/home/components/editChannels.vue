<template>
  <div class="edit-channels">
    <div class="my-channels">
      <!-- 我的频道标题区 -->
      <p class="title">
        <span>我的频道 <i>点击进入频道</i> </span>
        <van-button
          round
          plain
          color="#f85959"
          size="mini"
          @click="isEditShow = !isEditShow"
        >
        {{ isEditShow ? "完成" :  "编辑" }}
        </van-button>
      </p>
      <!-- 我的频道内容区 -->
      <van-grid :column-num="4" :gutter="11">
        <van-grid-item
          v-for="(item, index) in channelList"
          :key="item.id"
          :icon="isEditShow && index !== 0 ? 'close' : ''"
          @click="hanldeChannel(index, item.id)"
        >
          <div slot="text" class="channelText" :class="{ channelStyle : activeChannel === index }">
            {{ item.name }}
          </div>
        </van-grid-item>
      </van-grid>
    </div>
    <div class="recommand-channels">
      <p class="title">
        <span>频道编辑 <i>点击添加频道</i> </span>
      </p>
      <van-grid :column-num="4" :gutter="11">
        <van-grid-item
          v-for="item in recommendChannels"
          :key="item.id"
          :text="item.name"
          @click="addChannel(item)"
        />
      </van-grid>
    </div>
  </div>
</template>

<script>
import { getAllChannelsApi } from '@/http/user'
export default {
  name: 'EditChannels',
  created () {
    // 获取所有频道列表
    this.getAllChannels()
  },
  data () {
    return {
      // 所有频道列表
      allChannels: [],
      // 点击编辑按钮 控制每个频道右上角的关闭按钮是否显示
      isEditShow: false
    }
  },
  computed: {
    recommendChannels () {
      // 所有的频道减去我的频道才是推荐列表的数据
      return this.allChannels.filter(channel => {
        return !this.channelList.find(userChannel => userChannel.id === channel.id)
      })
    }
  },
  props: {
    channelList: {
      type: Array
    },
    activeChannel: {
      type: Number
    }
  },
  methods: {
    // 获取所有频道列表api
    async getAllChannels () {
      try {
        const { data } = await getAllChannelsApi()
        console.log('所有频道列表', data)
        const { channels } = data.data
        this.allChannels = channels
      } catch (err) {
        this.$toast.fail('获取所有频道信息失败')
      }
    },
    // 添加我的频道
    addChannel (channel) {
      console.log('添加的频道', channel)
      // 点击推荐频道中的某个频道就将这个频道添加进我的频道中去
      // 在这个子组件中自定义事件让父组件增加这个频道
      this.$emit('addChannel', channel)
    },
    hanldeChannel (channelIndex, channelId) {
      if (this.isEditShow && channelIndex !== 0) {
        // 在编辑状态下点击频道
        // 删除频道
        this.$emit('deleteChannel', channelIndex, channelId)
        // 如果删除的是当前选中频道  前面的频道  那么active需要减 1
        if (channelIndex <= this.activeChannel) {
          this.$emit('reduceActive')
        }
      } else {
        // 非编辑状态下点击频道
        // 关闭popup弹出层
        this.$emit('closePopUp')
        // 点击频道会跳转至首页对应频道的标签
        this.$emit('clickChannel', channelIndex)
      }
    }
  }

}
</script>

<style scoped lang="scss">
.edit-channels {
  padding: 48px 12px 0;
  .my-channels,
  .recommand-channels {
    margin-bottom: 20px;
    .title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;
      span {
        font-size: 16px;
        i {
          font-size: 6px;
          color: #373636;
        }
      }
      .van-button {
        width: 51px;
        height: 23px;
        span {
          font-size: 12px;
        }
      }
    }
    .van-grid {
      .van-grid-item{
        height: 43px;
        /deep/.van-grid-item__content {
          position: relative;
          background-color: #f4f5f6;
          padding: 0;
          .channelText {
            font-size: 10px;
            color: #222;
            margin-top: 0;
          }
          .channelStyle {
            color: red;
          }
          .van-icon-close {
            font-size: 16px;
            position: absolute;
            right: -5px;
            top: -5px;
            color: #ccc;
          }
        }
      }

    }
  }

}

</style>
