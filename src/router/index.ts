import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '@/views/TabsPage.vue'
import LoginPage from '@/views/LoginPage.vue'
import ProductPage from '@/views/ProductPage/ProductPage.vue'
import ProductsList from '@/views/ProductPage/ProductsList.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1Page.vue'),
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2Page.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3Page.vue')
      }
    ],
    name:'Tabs'
  },
  {
    path: '/login',
    component:LoginPage
  },
  {
    path:'/product/:price',
    name:'ProductPage',
    component: ProductPage
  },
  {
    path:'/product/list/:id',
    name:'ProductsList',
    component:ProductsList
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
