import Vue from 'vue'
import VueRouter from 'vue-router'
import Packages from '../views/Packages.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Packages',
    component: Packages
  },
]

const router = new VueRouter({
  routes
})

export default router
