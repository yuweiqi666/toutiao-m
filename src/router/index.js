import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/layout'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login')
  },
  {
    path: '/layout',
    redirect: '/home',
    component: () => import('../views/layout'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('../views/home')
      },
      {
        path: '/qa',
        name: 'qa',
        component: () => import('../views/qa')
      },
      {
        path: '/video',
        name: 'video',
        component: () => import('../views/video')
      },
      {
        path: '/mine',
        name: 'mine',
        component: () => import('../views/mine')
      }

    ]
  },
  {
    path: '/chat',
    name: 'chat',
    component: () => import('../views/chat')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/search')
  },
  {
    // 动态路由
    path: '/articleDetail/:articleId',
    name: 'articleDetail',
    component: () => import('../views/article'),
    // 将动态路由参数映射到 props 中
    props: true
  },
  {
    path: '/editdata',
    name: 'editData',
    component: () => import('../views/editData')
  }

]

const router = new VueRouter({
  routes
})

export default router
