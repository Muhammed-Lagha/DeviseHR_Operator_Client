<script setup lang="ts">
import Breadcrumb from '@/partials/Breadcrumb.vue'
import { ref } from 'vue'
import { onMounted } from 'vue'
import axios from 'axios'
import { opApiConnection } from '@/Connection/ConnectionStrings'

const company = ref()

onMounted(async () => {
  const userResponse = await axios.get(`${opApiConnection}/api/company/get-company/1`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })
  company.value = userResponse.data.data
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
                <p class="py-4 px-0 relative duration-[0.2s]">Company Details</p>
              </div>
            </li>
            <li
              @click="selectedTab = 1"
              :class="[selectedTab === 1 ? activeClass : inactiveClass]"
              class="flex-1 text-center cursor-pointer"
              tabindex="0"
            >
              <div class="no-underline w-full whitespace-nowrap text-[#536471] font-bold px-4 py-0">
                <p class="py-4 px-0 relative duration-[0.2s]">Settings</p>
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
              <div :class="company?.logo === null">
                <GenerateImage
                  class="w-full h-full border-4 border-solid border-[#fefefd] rounded-[50%] cursor-pointer transition-[0.3s] hover:scale-[1.002] hover:brightness-90"
                  :firstName="company?.name"
                  :lastName="company?.country"
                />
              </div>
              <img
                class="w-full h-full border-4 border-solid border-[#fefefd] rounded-[50%] cursor-pointer transition-[0.3s] hover:scale-[1.002] hover:brightness-90"
                :class="company?.logo === null ? 'hidden' : 'block'"
                :src="company?.logo"
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
                {{ company?.name }}
              </h1>
            </div>
          </section>
        </div>
        <!-- Notes Section -->
        <div v-show="selectedTab === 1" class="py-6 px-8">
          <header class="Details__header p-6">
            <h1
              class="Details__title text-black text-2xl font-light tracking-wide text-center uppercase"
            >
              Settings
            </h1>
          </header>
        </div>
      </main>
      <footer class="p-4">
        <!-- Profile Details -->
        <div v-show="selectedTab === 0" class="flex flex-wrap px-16 gap-4">
          <!-- Name -->
          <div class="pt-2">
            <p class="mt-2 font-medium text-sm whitespace-nowrap text-[#536471]">Name</p>
            <h1 class="font-bold text-xl whitespace-nowrap text-[#0f1419] border p-4 rounded-md">
              {{ company?.name }}
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
              {{ company?.email }}
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
              {{ company?.role }}
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
          <div class="bg-gray-100 p-10 rounded-md">
            <ul class="">
              <li class="mb-6">
                <div class="flex items-center justify-between">
                  <div class="mr-6">
                    <img
                      class="Media__image"
                      id="google-drive"
                      src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Logo_of_Google_Drive.png"
                      alt=""
                    />
                  </div>
                  <div class="Media__body">
                    <div>
                      <h3 class="text-black text-lg font-semibold">Google Drive</h3>
                      <p class="text-gray-600">
                        Configure to sync design and code files from Google Drive
                      </p>
                    </div>
                  </div>
                  <div class="Media__side Media__side--right">
                    <input class="checkbox-input" id="DetailsOptionCheckbox1" type="checkbox" />
                    <label
                      class="checkbox ion-ios-checkmark-empty"
                      for="DetailsOptionCheckbox1"
                    ></label>
                  </div>
                </div>
              </li>
              <!-- Other list items omitted for brevity -->
            </ul>
          </div>
        </div>
      </footer>
    </div>
  </main>
</template>

<style scoped></style>
