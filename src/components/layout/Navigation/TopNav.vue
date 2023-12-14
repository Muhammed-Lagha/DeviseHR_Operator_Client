<script setup lang="ts">
import SearchIcon from '../../icons/TopNav/Search/SearchIcon.vue';
import BellIcon from '../../icons/TopNav/Bell/BellIcon.vue';
import  Settings  from '../../icons/TopNav/Settings/Settings.vue';
import Apps from '../../icons/TopNav/Apps/AppsIcon.vue';

</script>

<template>
  <nav class="bg-gray-700">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo and Company Name -->
        <div class="flex-shrink-0">
          <a href="#" class="flex items-center">
            <span class="text-white font-bold text-xl ml-2">DeviseHR</span>
          </a>
        </div>
        <!-- Search Bar -->
        <div class="relative left-3">
          <input
            class="pl-10 pr-4 py-2 w-64 lg:w-96 rounded-lg bg-white focus:outline-none focus:bg-gray-100 text-gray-900 placeholder-gray-500"
            type="text"
            placeholder="Search"
          />
          <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <!-- Search Icon -->
            <SearchIcon />
          </div>
        </div>
        <!-- Circular Icons -->
        <div class="flex items-center space-x-2 lg:space-x-5">
          <button
            class="ml-4 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
          >
            <!-- Bell Icon -->
            <BellIcon />
          </button>
          <button
            class="ml-2 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
          >
            <!-- Settings -->
            <Settings />
          </button>
          <button
            class="ml-2 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
          >
            <!-- Apps -->
            <Apps />
          </button>
          <div class="flex items-center ml-3">
            <!-- User Profile Photo -->
            <div>
              <button
                type="button"
                class="flex text-lg bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300"
              >
                <img
                  class="w-9 h-9 rounded-full"
                  src="https://avatars.githubusercontent.com/u/114949720?v=4"
                  alt="user photo"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
