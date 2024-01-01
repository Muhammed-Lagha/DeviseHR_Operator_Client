<script setup lang="ts">
import Breadcrumb from '@/partials/Breadcrumb.vue'
import { ref } from 'vue'
import { onMounted } from 'vue'
import axios from 'axios'
import { opApiConnection } from '@/Connection/ConnectionStrings'

const user = ref()

onMounted(async () => {
  const userResponse = await axios.get(`${opApiConnection}/api/operators/me`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })
  user.value = userResponse.data.data
})
// update

// style ref
const activeClass = ref('bg-opacity-25 text-black border-b-2 border-blue-500')
const inactiveClass = ref(
  'border-blue-900 hover:bg-gray-600 hover:bg-opacity-25 hover:text-gray-100'
)

const selectedTab = ref(0)
</script>

<template>
  <!--Breadcrumb-->
  <Breadcrumb breadcrumb="Profile" />
  <!--Banner-->
  <main class="text-[#0f1419] bg-[#fefefd] rounded-md">
    <div class="max-w-6xl -my-2 mx-auto border border-solid">
      <header class="py-0 border-b border-solid">
        <!-- Header -->

        <div>
          <ul class="flex list-none">
            <li
              @click="selectedTab = 0"
              :class="[selectedTab === 0 ? activeClass : inactiveClass]"
              class="flex-1 text-center cursor-pointer"
              tabindex="0"
            >
              <div class="no-underline w-full whitespace-nowrap text-[#536471] font-bold px-4 py-0">
                <p class="py-4 px-0 relative duration-[0.2s]">Profile Details</p>
              </div>
            </li>
            <li
              @click="selectedTab = 1"
              :class="[selectedTab === 1 ? activeClass : inactiveClass]"
              class="flex-1 text-center cursor-pointer"
              tabindex="0"
            >
              <div class="no-underline w-full whitespace-nowrap text-[#536471] font-bold px-4 py-0">
                <p class="py-4 px-0 relative duration-[0.2s]">Notes</p>
              </div>
            </li>
          </ul>
        </div>
      </header>
      <main class="border-b border-solid border-black border-opacity-[0.1]">
        <!-- Profile Details Section Image and Name -->
        <div v-show="selectedTab === 0" class="flex flex-col">
          <section class="flex items-center justify-center flex-col py-6">
            <div class="max-w-[15%] max-f-[15%] top-[68%] left-[2%]">
              <div :class="user?.profile_picture === null">
                <GenerateImage
                  class="w-full h-full border-4 border-solid border-[#fefefd] rounded-[50%] cursor-pointer transition-[0.3s] hover:scale-[1.002] hover:brightness-90"
                  :firstName="user?.first_name"
                  :lastName="user?.last_name"
                />
              </div>
              <img
                class="w-full h-full border-4 border-solid border-[#fefefd] rounded-[50%] cursor-pointer transition-[0.3s] hover:scale-[1.002] hover:brightness-90"
                :class="user?.profile_picture === null ? 'hidden' : 'block'"
                :src="user?.profile_picture"
                alt="Your avatar"
              />
              <!-- <img
                src="https://avatars.githubusercontent.com/u/114949720?v=4"
                alt="Profile Picture"
                class="w-full h-full border-4 border-solid border-[#fefefd] rounded-[50%] cursor-pointer transition-[0.3s] hover:scale-[1.002] hover:brightness-90"
              /> -->
            </div>
            <div class="pt-2">
              <h1 class="font-extrabold text-xl whitespace-nowrap text-[#0f1419]">
                {{ user?.first_name }} {{ user?.last_name }}
              </h1>
            </div>
          </section>
          <section class="py-2 px-8">
            <!-- Buttons Section -->
            <nav class="flex justify-end items-center group-[10px]">
              <button
                class="p-2 text-[#0f1419] text-sm font-semibold rounded-full hover:transition-[0.5s] hover:bg-[#eafef3] hover:text-[#2ecc71]"
              >
                Verify
              </button>
              <button
                class="p-2 text-[#0f1419] text-sm font-semibold rounded-full hover:transition-[0.5s] hover:bg-[#fad7e3] hover:text-[#df8fa8]"
              >
                Terminate
              </button>
            </nav>
          </section>
        </div>
        <!-- Notes Section -->
        <div v-show="selectedTab === 1" class="py-6 px-8">
          <p class="text-sm text-[#0f1419]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
        </div>
      </main>
      <footer class="p-4">
        <!-- Profile Details -->
        <div v-show="selectedTab === 0" class="flex flex-wrap px-16 gap-4">
          <!-- Name -->
          <div class="pt-2">
            <p class="mt-2 font-medium text-sm whitespace-nowrap text-[#536471]">Name</p>
            <h1 class="font-bold text-xl whitespace-nowrap text-[#0f1419] border p-4 rounded-md">
              {{ user?.first_name }} {{ user?.last_name }}
            </h1>
          </div>
          <!-- Company Name -->
          <div class="pt-2">
            <p class="mt-2 font-medium text-sm whitespace-nowrap text-[#536471]">Company Name</p>
            <h1 class="font-bold text-base whitespace-nowrap text-[#0f1419] border p-4 rounded-md">
              DeviseHR
            </h1>
          </div>
          <!-- Email -->
          <div class="pt-2">
            <p class="mt-2 font-medium text-sm whitespace-nowrap text-[#536471]">Email</p>
            <h1 class="font-bold text-base whitespace-nowrap text-[#0f1419] border p-4 rounded-md">
              {{ user?.email }}
            </h1>
          </div>
          <!-- Date of Birth -->
          <div class="pt-2">
            <p class="mt-2 font-medium text-sm whitespace-nowrap text-[#536471]">Date of Birth</p>
            <h1 class="font-bold text-base whitespace-nowrap text-[#0f1419] border p-4 rounded-md">
              01/01/2000
            </h1>
          </div>
          <!-- Phone -->
          <div class="pt-2">
            <p class="mt-2 font-medium text-sm whitespace-nowrap text-[#536471]">Phone Number</p>
            <h1 class="font-bold text-base whitespace-nowrap text-[#0f1419] border p-4 rounded-md">
              0300-1234567
            </h1>
          </div>
          <!-- UserRole -->
          <div class="pt-2">
            <p class="mt-2 font-medium text-sm whitespace-nowrap text-[#536471]">Role</p>
            <h1 class="font-bold text-base whitespace-nowrap text-[#0f1419] border p-4 rounded-md">
              {{ user?.role }}
            </h1>
          </div>
          <!-- Verified Status -->
          <div class="pt-2">
            <p class="mt-2 font-medium text-sm whitespace-nowrap text-[#536471]">Verified Status</p>
            <h1 class="font-bold text-base whitespace-nowrap text-[#0f1419] border p-4 rounded-md">
              Verified
            </h1>
          </div>
        </div>

        <!-- Notes -->
        <div v-show="selectedTab === 1" class="flex flex-wrap px-16 gap-4">
          <div class="pt-2">
            <p class="mt-2 font-medium text-sm whitespace-nowrap text-[#536471]">Notes</p>
            <h1 class="font-bold text-base whitespace-nowrap text-[#0f1419] border p-4 rounded-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl sit amet
              consectetur pellentesque, nunc nisi ultricies nisl, ut ultricies nisl nunc nisi
              ultricies nisl.
            </h1>
          </div>
        </div>
      </footer>
    </div>
  </main>
</template>

<style scoped></style>
