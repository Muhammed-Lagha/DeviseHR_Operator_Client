import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/LoginView.vue'
import HomeView from '@/views/HomeView.vue'
import OperatorsView from '@/views/OperatorsView.vue'
import CreateCompany from "@/views/CreateCompany.vue";
import CreateOperator from "@/views/CreateOperator.vue";
import ProfileOpView from '@/views/ProfileOpView.vue';
import ProfileUserView from '@/views/ProfileUsersView.vue'
import ProfileComView from '@/views/ProfileComView.vue'
import NotFound from '@/views/NotFound.vue';
import UiElements from '@/views/UiElements.vue'
import Registration from '@/views/RegistrationView.vue'
import MeProfile from '@/views/MeProfile.vue'
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
      path: "/registration",
      name: "Registration",
      component: Registration,
      meta: { layout: "empty" },
    },
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: '/Home',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/profile',
      name: 'Profile',
      component: MeProfile
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
    {
      path: '/companies/:id',
      name: 'companyProfile',
      component:  ProfileComView
    },
    {
      path: '/users/:id',
      name: 'userProfile',
      component:  ProfileUserView
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
    },
    {
      path: '/UiElements',
      name: 'UIElement',
      component : UiElements
    },
    { path: "/:pathMatch(.*)*", component: NotFound, meta: { layout: "empty" }, },
  ]
})

// Navigation guard
// router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
//   const isLoggedIn = // Check if the user is logged in (e.g., check authentication state or token presence)

//   if (to.matched.some(record => record.meta.requiresAuth)) {
     // Route requires authentication
//     if (isLoggedIn) {
       // User is logged in, proceed to the route
//       next();
//     } else {
       // User is not logged in, redirect to the login page
//       next({ name: 'Login' });
//     }
//   } else {
     // Route does not require authentication
//     next();
//   }
// });

export default router
