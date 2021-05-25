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
  }

]

const router = new VueRouter({
  routes
})

export default router
