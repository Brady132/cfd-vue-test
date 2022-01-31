import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/affiche1',
    name: 'Affiche 1',
    // route level code-splitting
    // this generates a separate chunk (affiche1.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "affiche1" */ '../views/affiche1.vue')
  },
  {
    path: '/affiche2',
    name: 'Affiche 2',
    // route level code-splitting
    // this generates a separate chunk (affiche2.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "affiche2" */ '../views/affiche2.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
