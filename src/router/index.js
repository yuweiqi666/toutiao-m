import Vue from 'vue'
import VueRouter from 'vue-router'

import store from '../store/index'

import { Dialog } from 'vant'
// // 获取store中的user数据（token）

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/layout'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login'),
    meta: {
      isRequireAuth: false
    }
  },
  {
    path: '/layout',
    redirect: '/home',
    component: () => import('../views/layout'),
    meta: {
      isRequireAuth: false
    },
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('../views/home'),
        meta: {
          isRequireAuth: false
        }
      },
      {
        path: '/qa',
        name: 'qa',
        component: () => import('../views/qa'),
        meta: {
          isRequireAuth: false
        }
      },
      {
        path: '/video',
        name: 'video',
        component: () => import('../views/video'),
        meta: {
          isRequireAuth: false
        }
      },
      {
        path: '/mine',
        name: 'mine',
        component: () => import('../views/mine'),
        meta: {
          isRequireAuth: false
        }
      }

    ]
  },
  {
    path: '/chat',
    name: 'chat',
    component: () => import('../views/chat'),
    meta: {
      isRequireAuth: true
    }
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/search'),
    meta: {
      isRequireAuth: false
    }
  },
  {
    // 动态路由
    path: '/articleDetail/:articleId',
    name: 'articleDetail',
    component: () => import('../views/article'),
    // 将动态路由参数映射到 props 中
    props: true,
    meta: {
      isRequireAuth: false
    }
  },
  {
    path: '/editdata',
    name: 'editData',
    component: () => import('../views/editData'),
    meta: {
      isRequireAuth: false
    }
  }

]

const router = new VueRouter({
  routes
})

// 路由导航守卫   用户权限控制 有一些页面必须要登录才能跳转
/**
 * to: 跳转到的页面
 * from: 来自那个页面
 * next： 放行的标志
 */
router.beforeEach((to, from, next) => {
  const { user } = store.state
  console.log('ar', user)
  // 在用户没有登录的情况下
  if (!user) {
    // 有权限控制的页面
    if (to.meta.isRequireAuth) {
      console.log('ar')
      Dialog.confirm({
        title: '访问提示',
        message: '该页面需要登录才能查看，是否现在登录？'
      })
        .then(() => {
          // on confirm 跳转到登录页面
          next({
            name: 'login',
            query: {
              redirect: router.history.current.fullPath
            }
          })
        })
        .catch(() => {
          // on cancel 不做任何跳转
          next(false)
        })
    } else {
      // 没有权限控制的页面
      next()
    }
  } else {
    // 登录情况下任何页面都没有权限
    next()
  }
})

export default router
