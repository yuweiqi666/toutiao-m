<template>
<div class="chat">
  <!-- 头部信息 -->
  <van-nav-bar
    title="小智同学"
    left-arrow
    @click-left="$router.back()"
  />
  <!-- 消息内容区域 -->
  <van-list class="content">
    <van-cell class="msgItem" v-for="(item, index) in msgList" :key="index">
      <div slot="title">
        {{ item }}
      </div>
      <div slot="default">
        {{ item }}
      </div>
    </van-cell>
  </van-list>
  <!-- 底部输入框 -->
  <van-cell class="field-bottom">
    <!-- 输入框 -->
    <div slot="title">
      <van-field v-model="msg" placeholder="请输入消息"></van-field>
    </div>
    <!-- 发送按钮 -->
    <div slot="right-icon" class="send-btn">
      <van-button type="primary" @click='sendMsg'>发送</van-button>
    </div>
  </van-cell>
</div>
</template>
<script>

// import io from 'socket.io-client'

// const socket = io('http://ttapi.research.itcast.cn')

// socket.on('connect', function () {
//   console.log('建立连接成功...')
// })

// socket.on('disconnect', function () {
//   console.log('已断开连接...')
// })

export default {
  name: 'chat',
  data () {
    return {
      msg: '',
      msgList: []
    }
  },
  methods: {
    sendMsg () {
      console.log('chatText', this.msg)
    }
  }
}
</script>

<style scoped lang="scss">
  .chat {
    .content {
      position: fixed;
      top: 46px;
      bottom: 50px;
      width: 100%;
      overflow: auto;
      padding-top: 10px;
      .msgItem {
        margin-bottom: 10px;
        padding: 5px 15px;
        .van-cell__value {
          color: unset;
        }
      }
    }
    .field-bottom {
      position: fixed;
      bottom: 0;
      width: 100%;
      height: 50px;
      align-items: center;
      word-break: break-all;
      .send-btn {
        display: flex;
        align-items: center;
        .van-button {
          width: 70px;
          height: 30px;
        }
      }
    }
  }
</style>
