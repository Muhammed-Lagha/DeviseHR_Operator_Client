<script setup lang="ts">
import { ref } from 'vue'
import { useSidebar } from '@/hooks/useSidebar'
import { RouterLink } from 'vue-router'
import BurgerIcon from '@/components/icons/TopNav/burger menu/BurgerIcon.vue'
import ArrowIcon from '@/components/icons/TopNav/P&A/ArrowIcon.vue'
import PlusIcon from '@/components/icons/TopNav/P&A/PlusIcon.vue'
import SearchComp from '@/components/layout/Navigation/SearchComp.vue'
import Operator from '@/components/icons/TopNav/Operator/OperatorIcon.vue'
import company from '@/components/icons/TopNav/company/Company.vue'
import NoteIcon from '@/components/icons/TopNav/Note/NoteIcon.vue'
import ProfileIcon from '@/components/icons/TopNav/user Profile/ProfileIcon.vue'
import GenerateImage from '@/assets/Functions/GenerateImage.vue'
import Logout from '@/components/icons/SideNav/Logout.vue'

import useUserStore from '@/stores/UserStore'
import { storeToRefs } from 'pinia'
import { clearTokenCookies } from '@/helpers/getTokens'

const userStore = useUserStore()
const { user } = storeToRefs(userStore)

const logout = () => {
  userStore.user = {
    email: null,
    firstName: null,
    lastName: null,
    id: null,
    profile_picture: null,
    user_role: null
  }
  clearTokenCookies()
}
const { isOpen } = useSidebar()

const selectedButton = ref(-1)
</script>

<template>
  <header
    class="flex items-center justify-between px-6 py-1 bg-stone-100 border-b-4 border-green-700"
  >
    <div class="flex items-center">
      <!-- hamburger menu -->
      <button @click="isOpen = true" class="text-gray-500 focus:outline-none lg:hidden">
        <burgerIcon />
      </button>
      <!-- search -->
      <div class="max-w-full mx-4">
        <SearchComp />
      </div>
    </div>

    <div class="flex items-center">
      <div class="flex items-center justify-end gap-2">
        <!-- create new -->
        <div class="relative">
          <el-tooltip content="Create new" placement="bottom" effect="dark">
            <button
              class="flex p-1 text-gray-600 border-[1px] border-black rounded-md focus:outline-none"
              @click="selectedButton = 0"
            >
              <PlusIcon />
              <ArrowIcon />
            </button>
          </el-tooltip>

          <div
            v-show="selectedButton === 0"
            @click="selectedButton = -1"
            class="fixed inset-0 h-full w-full z-10"
          ></div>

          <div
            v-show="selectedButton === 0"
            class="absolute right-0 mt-2 w-44 py-3 bg-white rounded-lg shadow-xl overflow-hidden z-10"
            style="width: 11rem"
          >
            <RouterLink to="/CreateOperator" class="flex items-center justify-center text-gray-600">
              <div
                class="flex flex-row p-2 hover:border-2 hover:rounded-md hover:text-white hover:bg-green-700"
              >
                <operator />
                <span class="mx-2 text-xs font-semibold flex flex-row justify-between">
                  Create Operator
                </span>
              </div>
            </RouterLink>

            <RouterLink to="/CreateCompany" class="flex items-center justify-center text-gray-600">
              <div
                class="flex flex-row p-2 hover:border-2 hover:rounded-md hover:text-white hover:bg-green-600"
              >
                <company />
                <span class="mx-2 text-xs font-semibold flex flex-row justify-between">
                  Create Company
                </span>
              </div>
            </RouterLink>

            <RouterLink
              to="/CreateCompany"
              class="flex items-center justify-center text-gray-600 hover:text-white"
            >
              <div
                class="flex flex-row p-2 hover:border-2 hover:rounded-md hover:text-white hover:bg-green-600"
              >
                <NoteIcon />
                <span class="mx-5 text-xs font-semibold flex flex-row justify-between">
                  Create Note
                </span>
              </div>
            </RouterLink>
          </div>
        </div>
        <!-- Notification -->
        <!-- <div class="relative">
          <button
            @click="notificationOpen = !notificationOpen"
            class="flex mr-4 p-1 text-gray-600 border-[1px] border-black rounded-md focus:outline-none"
          >
            <BellIcon />
          </button>

          <div
            v-show="notificationOpen"
            @click="notificationOpen = false"
            class="fixed inset-0 h-full w-full z-10"
          ></div>

          <div
            v-show="notificationOpen"
            class="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl overflow-hidden z-10"
            style="width: 20rem"
          >
            <a
              href="#"
              class="flex items-center px-4 py-3 text-gray-600 hover:text-white hover:bg-indigo-600 -mx-2"
            >
              <img
                class="h-8 w-8 rounded-full object-cover mx-1"
                src="https://images.unsplash.com/photo-1552774021-9ebbb764f03e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
                alt="avatar"
              />
              <p class="text-sm mx-2">
                <span class="font-bold" href="#">Evan Josh</span> replied on the
                <span class="font-bold text-indigo-400" href="#">Upload Image</span>
                artical . 2m
              </p>
            </a>
            <a
              href="#"
              class="flex items-center px-4 py-3 text-gray-600 hover:text-white hover:bg-indigo-600 -mx-2"
            >
              <img
                class="h-8 w-8 rounded-full object-cover mx-1"
                src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                alt="avatar"
              />
              <p class="text-sm mx-2">
                <span class="font-bold" href="#">Slick Net</span> start following you . 45m
              </p>
            </a>
            <a
              href="#"
              class="flex items-center px-4 py-3 text-gray-600 hover:text-white hover:bg-indigo-600 -mx-2"
            >
              <img
                class="h-8 w-8 rounded-full object-cover mx-1"
                src="https://images.unsplash.com/photo-1450297350677-623de575f31c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                alt="avatar"
              />
              <p class="text-sm mx-2">
                <span class="font-bold" href="#">Jane Doe</span> Like Your reply on
                <span class="font-bold text-indigo-400" href="#">Test with TDD</span>
                artical . 1h
              </p>
            </a>
            <a
              href="#"
              class="flex items-center px-4 py-3 text-gray-600 hover:text-white hover:bg-indigo-600 -mx-2"
            >
              <img
                class="h-8 w-8 rounded-full object-cover mx-1"
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=398&q=80"
                alt="avatar"
              />
              <p class="text-sm mx-2">
                <span class="font-bold" href="#">Abigail Bennett</span>
                start following you . 3h
              </p>
            </a>
          </div>
        </div> -->
      </div>
      <!-- Avatar -->
      <div class="relative py-2 px-4">
        <ElTooltip content="Profile" placement="bottom" effect="dark">
          <button
            @click="selectedButton = 1"
            class="relative z-10 block overflow-hidden rounded-full shadow focus:outline-none"
          >
            <div
              :class="user?.profile_picture === null"
              class="object-cover w-full h-full border-4 border-solid border-[#fefefd] rounded-[50%] cursor-pointer transition-[0.3s] hover:scale-[1.002] hover:brightness-90"
            >
              <GenerateImage
                class="flex items-center justify-center"
                :firstName="user?.firstName!"
                :lastName="user?.lastName!"
              />
            </div>
            <img
              class="object-cover w-full h-full"
              :class="user?.profile_picture === null ? 'hidden' : 'block'"
              :src="user?.profile_picture!"
              alt="Your avatar"
            />
          </button>
        </ElTooltip>
        <div
          v-show="selectedButton === 1"
          @click="selectedButton = -1"
          class="fixed inset-0 z-10 w-full h-full"
        ></div>

        <transition
          enter-active-class="transition duration-150 ease-out transform"
          enter-from-class="scale-95 opacity-0"
          enter-to-class="scale-100 opacity-100"
          leave-active-class="transition duration-150 ease-in transform"
          leave-from-class="scale-100 opacity-100"
          leave-to-class="scale-95 opacity-0"
        >
          <div
            v-show="selectedButton === 1"
            class="absolute right-0 z-20 w-48 py-1 mt-2 bg-white rounded-lg shadow-xl"
          >
            <RouterLink
              to="/Profile"
              class="px-4 py-2 flex rounded-md text-sm text-gray-700 hover:bg-green-600 hover:text-white"
            >
              <ProfileIcon />
              Profile</RouterLink
            >
            <!-- <RouterLink
              to="/Settings"
              class="flex rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
            >
              <settings />
              Settings</RouterLink
            > -->
            <a
              href="/login"
              class="flex px-4 py-2 rounded-md text-sm text-gray-700 hover:bg-green-600 hover:text-white"
              @click="logout"
            >
              <Logout />
              Log out
            </a>
          </div>
        </transition>
      </div>
    </div>
  </header>
</template>
