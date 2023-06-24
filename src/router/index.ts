import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'login',
    component: () => import('@/views/LoginView.vue')
  },{
    path: '/home',
    name: 'home',
    component:() => import('@/views/HomeView.vue')
  },{
    path: '/dish',
    name: 'dish',
    component: () => import('@/views/dishView.vue')
  },{
    path: '/category',
    name: 'category',
    component: () => import('@/views/categoryView.vue')
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
