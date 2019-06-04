import Vue from 'vue'
import Router from 'vue-router'

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
        footer: () => import('@/components/footer')
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
        footer: () => import('@/components/footer')
      }
    },
    {
      path: '/ticket/:id',
      name: 'ticket',
      components: {
        default: () => import('@/views/Ticket')
      },
      props: { default: true }
    }
  ]
})
