import Vue from 'vue'
import Router from 'vue-router'
import Groups from './views/Groups.vue'
import Images from './views/Images.vue'
import Login from './views/Login.vue'
import ConfigAA from './views/AA/Config.vue'
import ImageAA from './views/AA/Image.vue'
import GroupAA from './views/AA/Group.vue'
import Admin from './layout/AdminArea.vue'
import Main from './layout/Main.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/group',
      name: 'groups',
      component: Groups.default
    },
    {
      path: '/topic/:tag',
      name: 'topic',
      component: Images
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    
    {
      path: '/aa',
      name: 'admin',
      component: Admin,
      children: [
        {
          path: 'config',
          component: ConfigAA
        },
        {
          path: 'image',
          component: ImageAA
        },
        {
          path: 'group',
          component: GroupAA
        }
      ]
    }
  ]
})
