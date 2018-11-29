import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'layout',
    component: () => import('./components/layout'),
    children: [{
      path: '',
      name: 'home',
      component: () => import('./views/home/index.vue')
    }]
  }]
})