import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/LoginView.vue'
import HomeView from '@/views/HomeView.vue'
import OperatorsView from '@/views/OperatorsView.vue'
import CreateCompany from "@/views/CreateCompany.vue";
import CreateOperator from "@/views/CreateOperator.vue";
import ProfileOpView from '@/views/ProfileOpView.vue';
// import ProfileUserView from '@/views/ProfileUsersView.vue'
// import ProfileComView from '@/views/ProfileComView.vue'
import NotFound from '@/views/NotFound.vue';
import UiElements from '@/views/UiElements.vue'
//import SettingsView from '@/views/SettingsView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "Login",
      component: Login,
      meta: { layout: "empty" },
    },
    {
      path: "/",
      name: "home",
      component: HomeView,
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
      path: '/operator/:id',
      name: 'userProfile',
      component:  ProfileOpView
    },
    // {
    //   path: '/companies/:id',
    //   name: 'companyProfile',
    //   component:  ProfileComView
    // },
    // {
    //   path: '/users/:id',
    //   name: 'userProfile',
    //   component:  ProfileUserView
    // },
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
    {
      path: '/UiElements',
      name: 'UIElement',
      component : UiElements
    },
    { path: "/:pathMatch(.*)*", component: NotFound, meta: { layout: "empty" }, },
  ]
})

export default router
