<script setup lang="ts">
import Operator from '@/components/icons/SideNav/Operator.vue'
import company from '@/components/icons/SideNav/Companies.vue'

import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import { useSidebar } from '@/Hooks/useSidebar'

const { isOpen } = useSidebar()
const activeClass = ref('bg-green-600 bg-opacity-25 text-gray-100 border-green-400')
const inactiveClass = ref(
  'border-slate-800 text-gray-400 hover:bg-gray-600 hover:bg-opacity-25 hover:border-slate-600 hover:text-gray-100'
)
</script>
<template>
  <div class="flex">
    <!-- Backdrop -->
    <div
      :class="isOpen ? 'block' : 'hidden'"
      @click="isOpen = false"
      class="fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden"
    ></div>
    <!-- End Backdrop -->

    <div
      :class="isOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'"
      class="fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 transform bg-slate-800 lg:translate-x-0 lg:static lg:inset-0"
    >
      <div class="flex items-center justify-center mt-8">
        <div class="flex items-center">
          <span class="mx-2 text-2xl font-semibold text-white"
            >Devise<span class="text-green-600">HR</span></span
          >
        </div>
      </div>

      <nav class="mt-10">
        <p class="pl-4 text-xs font-semibold mb-4 text-gray-400">Menu</p>
        <router-link
          class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
          :class="[$route.name === 'Home' ? activeClass : inactiveClass]"
          to="/Home"
        >
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            ></path>
          </svg>

          <span class="mx-4">Home</span>
        </router-link>
        <router-link
          class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
          :class="[$route.name === 'Operators' ? activeClass : inactiveClass]"
          to="/Operators"
        >
          <Operator />

          <span class="mx-4">Operators</span>
        </router-link>
        <!-- <router-link
          class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
          :class="[$route.name === 'companies' ? activeClass : inactiveClass]"
          to="/companies"
        >
          <Operator />

          <span class="mx-4">Companies</span>
        </router-link> -->
        <p class="pl-4 my-2 text-xs font-semibold mb-4 text-gray-400">Ui Elements</p>

        <router-link
          class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
          :class="[$route.name === 'CreateCompany' ? activeClass : inactiveClass]"
          to="/CreateCompany"
        >
          <company />

          <span class="mx-4">Create Company</span>
        </router-link>

        <router-link
          class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
          :class="[$route.name === 'CreateOperator' ? activeClass : inactiveClass]"
          to="/CreateOperator"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
            />
            <path
              fill-rule="evenodd"
              d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
              clip-rule="evenodd"
            />
          </svg>

          <span class="mx-4">Create Operator</span>
        </router-link>

        <p class="pl-4 text-xs my-2 font-semibold mb-4 text-gray-400">About</p>
      </nav>
    </div>
  </div>
</template>
