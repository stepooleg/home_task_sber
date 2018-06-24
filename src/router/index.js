import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home.html',
      name: 'Home',
      props: (route) => ({
        query: route.query.word
      }),
      component: Home
    }
  ],
  mode: 'history'
})
