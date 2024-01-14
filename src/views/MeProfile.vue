<script setup lang="ts">
import useUserStore from '@/stores/UserStore'
import { storeToRefs } from 'pinia'
import GenerateImage from '@/assets/Functions/GenerateImage.vue'
import Breadcrumb from '@/partials/Breadcrumb.vue'

const userStore = useUserStore()
const { user } = storeToRefs(userStore)
</script>

<template>
  <Breadcrumb :breadcrumb="user?.firstName! + ' ' + user?.lastName" />
  <!--Banner-->
  <main class="text-[#0f1419] bg-[#fefefd] rounded-md">
    <div class="max-w-6xl -my-2 mx-auto border border-solid">
      <main class="border-b border-solid border-black border-opacity-[0.1]">
        <div class="flex flex-col">
          <section class="py-2 px-8">
            <div class="mt-4 bg-white shadow-sm rounded-lg">
              <div class="fancy-p">
                <div class="flex justify-between px-4 items-center mb-4">
                  <div class="font-bold text-lg">Basic Info</div>
                  <div class="max-w-[15%] max-f-[15%] top-[68%] left-[2%]">
                    <div>
                      <GenerateImage
                        class="w-full h-full border-4 border-solid border-[#fefefd] rounded-[50%] cursor-pointer transition-[0.3s] hover:scale-[1.002] hover:brightness-90"
                        :class="user.profile_picture === null ? 'block' : 'hidden'"
                        :firstName="user?.firstName!"
                        :lastName="user?.lastName!"
                      />
                    </div>
                    <img
                      class="w-full h-full border-4 border-solid border-[#fefefd] rounded-[50%] cursor-pointer transition-[0.3s] hover:scale-[1.002] hover:brightness-90"
                      :class="user.profile_picture === null ? 'hidden' : 'block'"
                      :src="user?.profile_picture!"
                      alt="Your avatar"
                    />
                  </div>
                  <div class=""></div>
                </div>
                <div class="overflow-hidden sm:rounded-lg py-4">
                  <dl>
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-3.5 col-span-1 bg-gray-100">
                        <dt class="text-sm font-medium text-gray-500">Name</dt>
                        <dd class="mt-1 text-sm text-gray-900">
                          {{ user?.firstName }} {{ user?.lastName }}
                        </dd>
                      </div>
                      <div class="px-4 py-3.5 col-span-1 bg-gray-100">
                        <dt class="text-sm font-medium text-gray-500">Email</dt>
                        <dd class="mt-1 text-sm text-gray-900">{{ user?.email }}</dd>
                      </div>
                      <div class="px-4 py-3.5 col-span-1">
                        <dt class="text-sm font-medium text-gray-500">Id</dt>
                        <dd class="mt-1 text-sm text-gray-900">{{ user?.id }}</dd>
                      </div>
                      <div class="px-4 py-3.5 col-span-1">
                        <dt class="text-sm font-medium text-gray-500">User Role</dt>
                        <dd class="mt-1 text-sm text-gray-900">{{ user?.user_role }}</dd>
                      </div>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <footer class="p-4">
        <div class="px-8 py-4 sm:p-8 bg-white shadow sm:rounded-lg">
          <section class="max-w-xl">
            <header>
              <h2 class="text-lg font-medium">Update Password</h2>
              <p class="mt-1 text-sm text-gray-600">
                Ensure your account is using a long, random password to stay secure.
              </p>
            </header>
            <form class="mt-6 space-y-6">
              <div>
                <label class="block font-medium text-sm" for="current_password"
                  ><span>Current Password</span></label
                ><input
                  class="border-gray-300 focus:border-purple-500 focus:ring-purple-500 rounded-md shadow-sm mt-1 block w-full"
                  placeholder=""
                  id="current_password"
                  type="password"
                  autocomplete="current-password"
                />
                <div class="mt-2" style="">
                  <p class="text-sm text-red-600">The password is incorrect.</p>
                </div>
              </div>
              <div>
                <label class="block font-medium text-sm" for="password"
                  ><span>New Password</span></label
                ><input
                  class="border-gray-300 focus:border-purple-500 focus:ring-purple-500 rounded-md shadow-sm mt-1 block w-full"
                  placeholder=""
                  id="password"
                  type="password"
                  autocomplete="new-password"
                  aria-autocomplete="list"
                />
                <div class="mt-2" style="">
                  <p class="text-sm text-red-600">
                    The password field must be at least 8 characters.
                  </p>
                </div>
              </div>
              <div>
                <label class="block font-medium text-sm" for="password_confirmation"
                  ><span>Confirm Password</span></label
                ><input
                  class="border-gray-300 focus:border-purple-500 focus:ring-purple-500 rounded-md shadow-sm mt-1 block w-full"
                  placeholder=""
                  id="password_confirmation"
                  type="password"
                  autocomplete="new-password"
                />
                <div class="mt-2" style="display: none">
                  <p class="text-sm text-red-600"></p>
                </div>
              </div>
              <div class="flex items-center gap-4">
                <button
                  class="inline-flex items-center px-4 py-2 bg-purple-700 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-purple-600 active:bg-purple-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition ease-in-out duration-150"
                >
                  Save</button
                ><!---->
              </div>
            </form>
          </section>
        </div>
      </footer>
    </div>
  </main>
</template>
