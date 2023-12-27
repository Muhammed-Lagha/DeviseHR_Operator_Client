import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import OperatorsView from '@/views/OperatorsView.vue'
import CreateCompany from "@/views/CreateCompany.vue";
import CreateOperator from "@/views/CreateOperator.vue";
import SettingsView from '@/views/SettingsView.vue';
import ProfileView from '@/views/ProfileView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/Home',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/Operators',
      name: 'Operators',
      
      component: OperatorsView
    },
    {
      path: '/operators/:id',
      name: 'userProfile',
      component:  ProfileView
    },
    {
      path: '/Settings',
      name: 'Settings',
      
      component: SettingsView
    },
    {
      path: '/CreateCompany',
      name: 'CreateCompany',
      component: CreateCompany
    },
    {
      path: '/CreateOperator',
      name: 'CreateOperator',
      component: CreateOperator
    }
  ]
})

export default router
