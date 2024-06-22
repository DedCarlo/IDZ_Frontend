import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OrdersView from '@/views/OrdersView.vue'
import ServicesView from '@/views/ServicesView.vue'
import TutorsView from '@/views/TutorsView.vue'
import OrderInstanceView from '@/views/OrderInstanceView.vue'
import ServiceInstanceView from '@/views/ServiceInstanceView.vue'
import RegistrationView from '@/views/RegistrationView.vue'
import ProfileView from '@/views/ProfileView.vue';
import LoginView from '@/views/LoginView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Orders',
      name: 'Orders',
      component: OrdersView
    },
    {
      path: '/Services',
      name: 'Services',
      component: ServicesView
    },
    {
      path: '/Tutors',
      name: 'Tutors',
      component: TutorsView
    },
    {
      path: '/OrderInstanceView',
      name: 'OrderInstanceView',
      component: OrderInstanceView
    },
    {
      path: '/ServiceInstanceView',
      name: 'ServiceInstanceView',
      component: ServiceInstanceView
    },
    {
      path: '/RegistrationView',
      name: 'RegistrationView',
      component: RegistrationView
    },
    {
      path: '/ProfileView',
      name: 'ProfileView',
      component: ProfileView
    },
    {
      path: '/LoginView',
      name: 'LoginView',
      component: LoginView
    },

  ]
})

export default router
