import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Lvl1 from '../components/Lvl1.vue'
import Lvl2 from '../components/Lvl2.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/help',
    name: 'help',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "help" */ '../views/Help.vue')
  },
  { 
    path: '/levels',
    name: 'levels',
    component: () => import('../views/Levels.vue')
  },
  { 
    path: '/play',
    name: 'play',
    component: () => import('../views/Play.vue'),
    children:[    
    {path: 'lvl1',name: 'lvl1',component: Lvl1},
    {path: 'lvl2',name: 'lvl2',component: Lvl2},
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
