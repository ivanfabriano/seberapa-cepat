import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Typing from '../views/Typing.vue'
import Pushing from '../views/Pushing.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/typing',
    name: 'Typing',
    component: Typing
  },
  {
    path: '/pushing',
    name: 'Pushing',
    component: Pushing
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history', //removes # (hashtag) from url
  base: '/',
  fallback: true,
  routes
})

export default router
