import Vue from 'vue'
import Router from 'vue-router'
import Footer from '@/components/footer'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      components: {
        default: () => import('@/views/Home'),
        footer: Footer
      },
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/theatre',
      name: 'theatre',
      components: {
        default: () => import('@/views/Theatre'),
        footer: Footer
      }
    },
    {
      path: '/ticket/:id',
      name: 'ticket',
      components: {
        default: () => import('@/views/Ticket'),
        footer: () => import('@/components/ticket/addbuy')
      },
      props: { default: true }
    },
    {
      path: '/collect',
      name: 'collect',
      components: {
        default: () => import('@/views/Collection'),
        footer: Footer
      }
    },
    {
      path: '/user',
      name: 'user',
      components: {
        default: () => import('@/views/User'),
        footer: Footer
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login')
    },
    {
      path: '/user/follow',
      name: 'follow',
      component: () => import('@/views/MyFollow')
    }
  ]
})
