import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/LoginView.vue'
import HomeView from '@/views/HomeView.vue'
import OperatorsView from '@/views/OperatorsView.vue'
import CreateCompany from "@/views/CreateCompany.vue";
import CreateOperator from "@/views/CreateOperator.vue";
import ProfileView from '@/views/ProfileView.vue';
import NotFound from '@/views/NotFound.vue';
//import SettingsView from '@/views/SettingsView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Login",
      component: Login,
      meta: { layout: "empty" },
    },
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
    // {
    //   path: '/Settings',
    //   name: 'Settings',
    //   component: SettingsView
    // },
    {
      path: '/CreateCompany',
      name: 'CreateCompany',
      component: CreateCompany
    },
    {
      path: '/CreateOperator',
      name: 'CreateOperator',
      component: CreateOperator
    },
    { path: "/:pathMatch(.*)*", component: NotFound },
  ]
})

export default router
