<script setup lang="ts">
import SearchIcon from '../../icons/TopNav/Search/SearchIcon.vue'
import BellIcon from '../../icons/TopNav/Bell/BellIcon.vue'
import Settings from '../../icons/TopNav/Settings/Settings.vue'
import Apps from '../../icons/TopNav/Apps/AppsIcon.vue'
</script>

<template>
  <nav class="bg-[#404448]">
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
            class="pl-10 pr-4 py-2 w-64 lg:w-96 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 focus:bg-gray-100 text-gray-900 placeholder-gray-500"
            type="text"
            placeholder="Search"
          />
          <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <!-- Search Icon -->
          </div>
        </div>
        <!-- Circular Icons -->
        <div class="flex items-center gap-1 lg:space-x-5">
          <button
            class="cursor-pointer flex items-center justify-center rounded-md text-gray-300  h-9 w-9
             before:border-2 before:border-transparent bg-[#404448] 
             hover:text-[#404448] hover:bg-[linear-gradient(to_right_bottom,#70C080,#40B060)] hover:border-none "
          >
            <!-- Bell Icon -->
            <BellIcon />
          </button>
          <button
            class="cursor-pointer flex items-center justify-center rounded-md text-gray-300  h-9 w-9
             before:border-2 before:border-transparent bg-[#404448] 
             hover:text-[#404448] hover:bg-[linear-gradient(to_right_bottom,#70C080,#40B060)] hover:border-none hover:shadow-[1px_1px_2px_0_#ffffff40,inset_-2px_-2px_4px_0_#ffffff60,inset_4px_4px_4px_-1px_#000000A0]"
          >
            <!-- Settings -->
            <Settings />
          </button>
          <button
            class="cursor-pointer flex items-center justify-center rounded-md text-gray-300  h-9 w-9
             before:border-2 before:border-transparent bg-[#404448] 
             hover:text-[#404448] hover:bg-[linear-gradient(to_right_bottom,#70C080,#40B060)] hover:border-none hover:shadow-[1px_1px_2px_0_#ffffff40,inset_-2px_-2px_4px_0_#ffffff60,inset_4px_4px_4px_-1px_#000000A0]"
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
