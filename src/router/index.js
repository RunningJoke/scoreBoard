import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "scoreboard" */ '../views/Home.vue')
  },
  {
    path: '/score',
    name: 'Scoreboard',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "scoreboard" */ '../views/Scoreboard.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
