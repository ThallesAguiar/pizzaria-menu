import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/cardapio',
    name: 'Cardapio',
    component: () => import(/* webpackChunkName: "cardapio" */ '../views/Cardapio.vue'),
    children:[
      {
        path: '/pizza',
        name: 'Pizza',
        component: () => import(/* webpackChunkName: "pizza" */ '../components/cardapio/Pizza.vue')
      },
      {
        path: '/lanche',
        name: 'Lanche',
        component: () => import(/* webpackChunkName: "lanche" */ '../components/cardapio/Lanche.vue')
      },
      {
        path: '/bebida',
        name: 'Bebida',
        component: () => import(/* webpackChunkName: "bebidas" */ '../components/cardapio/Bebida.vue')
      },
    ]
  },
  {
    path: '/comoChegar',
    name: 'Mapa',
    component: () => import(/* webpackChunkName: "mapa" */ '../components/Mapa.vue')
  },
  {
    path: "/pageNotFound",
    alias: "*",
    name: "NotFound",
    component: () => import("../views/errors/NotFound")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
