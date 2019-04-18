import Vue from 'vue'
import Router from 'vue-router'
import Groups from './views/Groups.vue'
import Login from './views/Login.vue'
import Admin from './views/AdminArea.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/aa/config',
      name: 'admin',
      component: Admin
    },
    {
      path: '/aa/group',
      name: 'admin',
      component: Groups
    },
    {
      path: '/aa/img',
      name: 'admin',
      component: Login
    }
  ]
})
