<template>
  <div class="article-detail">
    <van-nav-bar
      title="文章详情"
      left-arrow
      @click-left="$router.back()"
    />
    <div class="main">
      <!-- 文章标题 -->
      <div class="title">{{ detailData.title }}</div>
      <!-- 文章作者信息 -->
      <div class="autor">
        <!-- 作者头像 -->
        <div class="autor-wrapper">
          <div class="autor-header">
            <van-image
              round
              :src="detailData.aut_photo"
              fit="cover"
            />
          </div>
          <!-- 作者名称 -->
          <div class="autor-text">
            <div class="autor-name">
              {{detailData.aut_name}}
            </div>
            <div class="autor-time">
              {{detailData.pubdate | currentDate }}
            </div>
          </div>
        </div>
        <!-- 关注按钮 -->
        <div class="autor-follow">
          <van-button
            size="mini"
            round v-if="detailData.is_followed"
            @click="handleAutorFollow"
            :loading="isLoading"
            loading-type="spinner"
          >
            已关注
          </van-button>
          <van-button
            v-else
            round
            type="info"
            size="mini"
            @click="handleAutorFollow"
            :loading="isLoading"
            loading-type="spinner"
          >
          关注
          </van-button>
        </div>
      </div>
      <!-- 文章内容 -->
      <div
        ref="article-content"
        class="content markdown-body"
        v-html="detailData.content"
      >
      </div>
    </div>
    <div class="article-bottom">
      <van-button round size="mini">写评论</van-button>
      <van-icon name="other-pay" color="#777"/>
      <van-icon
        :name="detailData.attitude === 1 ? 'good-job' : 'good-job-o'"
        color="#777"
        @click="handleLikeArticle"
      />
      <van-icon
        :name="detailData.is_collected ? 'star':'star-o'"
        color="#777"
        @click="handleCollectArticle"
      />
      <van-icon name="share-o" color="#777" />
    </div>
  </div>
</template>

<script>
import {
  getArticleDetailApi,
  addLikeApi,
  disLikeApi,
  collectArticleApi,
  cancelCollectArticleApi
} from '@/http/article'
import { cancelFollowAutorApi, followAutorApi } from '@/http/user'
export default {
  name: 'ArticleDetail',
  props: {
    articleId: {
      type: [Number, String, Object]
    }
  },
  data () {
    return {
      detailData: {},
      isLoading: false // 是否显示按钮的加载状态
    }
  },
  async created () {
    try {
      const { data } = await getArticleDetailApi(this.articleId)
      console.log('文章详情数据', data)
      this.detailData = data.data

      // 等到dom渲染完成后在进行DOM获取（原生js进行DOM操作）
      this.$nextTick(() => {
        /**
       * 1.获取文章内容的DOM容器
       * 2.获取DOM容器中所有的img标签
       * 3.给所有的img标签注册点击事件
       **/
        var content = this.$refs['article-content']

        var imgs = content.querySelectorAll('img')

        // 将文章详情中所有的图片的src路径处理为数组
        var imgList = [...imgs].map(img => img.src)

        var _this = this

        for (let i = 0; i < imgs.length; i++) {
          imgs[i].addEventListener('click', () => {
            // 调用图片预览函数
            _this.$imagePreview({
              images: imgList,
              startPosition: i
            })
          })
        }
      })
    } catch (err) {
      console.log('文章不存在', err)
    }
  },
  methods: {
    // 点击关注（已关注）按钮
    handleAutorFollow () {
      this.detailData.is_followed
        ? this.cancelFollowAutor()
        : this.followAutor()
    },
    // 关注用户
    async followAutor () {
      this.isLoading = true
      try {
        await followAutorApi({
          target: this.detailData.aut_id
        })
        this.detailData.is_followed = !this.detailData.is_followed
      } catch (err) {
        this.$toast.fail('关注失败')
      }
      this.isLoading = false
    },
    // 取消关注用户
    async cancelFollowAutor () {
      this.isLoading = true
      try {
        await cancelFollowAutorApi(this.detailData.aut_id)
        this.detailData.is_followed = !this.detailData.is_followed
      } catch (err) {
        this.$toast.fail('取消关注失败')
      }
      this.isLoading = false
    },
    // 点赞（取消点赞）文章
    async handleLikeArticle () {
      if (this.detailData.attitude === 1) {
        await disLikeApi({
          target: this.detailData.art_id
        })
        this.detailData.attitude = 0
      } else {
        await addLikeApi({
          target: this.detailData.art_id
        })
        this.detailData.attitude = 1
      }
    },
    // 收藏（取消收藏）文章
    async handleCollectArticle () {
      if (this.detailData.is_collected) {
        await cancelCollectArticleApi(this.detailData.art_id)
        this.detailData.is_collected = false
      } else {
        await collectArticleApi({
          target: this.detailData.art_id
        })
        this.detailData.is_collected = true
      }
    }
  }
}
</script>

<style scoped lang="scss">
  @import "./style/github-markdown.css";
  .article-detail {
    .main {
      position: fixed;
      width: 100%;
      top: 45px;
      bottom: 0;
      overflow: auto;
      padding: 22px 12px 0;
      box-sizing: border-box;
      background-color: #fff;
      .title {
        font-size: 20px;
        font-weight: 700;
        word-break: break-all;
        line-height: 25px;
        margin-bottom: 20px;
      }
      .autor {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;
        .autor-wrapper {
          display: flex;
          align-items: center;
          .autor-header {
            .van-image {
              width: 37px;
              height: 37px;
              margin-right: 8px;
            }
          }
          .autor-text {
            font-size: 14px;
            .autor-name {
              margin-bottom: 5px;
            }
            .autor-time {
              font-size: 12px;
              color: #b4b4b4;
            }
          }
        }
        .autor-follow {
          display: flex;
          align-items: center;
          .van-button {
            width: 70px;
          }
        }
      }
      .content {

      }
    }
    .article-bottom {
      position: fixed;
      bottom: 0;
      width: 100%;
      height: 45px;
      background-color: #fff;
      display: flex;
      align-items: center;
      justify-content: space-around;
      .van-button__text {
        color: #a7a7a7;
      }
      .van-button {
        width: 140px;
      }
      .van-icon {
        font-size: 24px;

      }
    }
  }
</style>
