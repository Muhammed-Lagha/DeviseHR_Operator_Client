<script setup lang="ts">
import { ref } from 'vue'

const username = ref('')
const email = ref('')

const saveSettings = () => {
  // Perform save settings logic here
  console.log('Username:', username.value)
  console.log('Email:', email.value)
}
</script>

<template>
  <section class="Details bg-white rounded-md shadow-lg relative z-10">
    <header class="Details__header p-6">
      <h1 class="Details__title text-black text-2xl font-light tracking-wide text-center uppercase">
        Settings
      </h1>
    </header>
    <nav class="p-6">
      <ul class="flex justify-between">
        <li class="border-b-2 pb-6 text-gray-600 cursor-pointer relative">Profile</li>
        <li class="border-b-2 pb-6 text-gray-600 cursor-pointer relative">Password</li>
        <li class="border-b-2 pb-6 text-gray-600 cursor-pointer relative">Notifications</li>
        <li class="border-b-2 pb-6 text-gray-600 cursor-pointer relative font-bold border-blue-500">
          Sync
        </li>
        <li class="border-b-2 pb-6 text-gray-600 cursor-pointer relative">Advanced</li>
      </ul>
    </nav>
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
              <input
                class="checkbox-input"
                id="DetailsOptionCheckbox1"
                type="checkbox"
              />
              <label class="checkbox ion-ios-checkmark-empty" for="DetailsOptionCheckbox1"></label>
            </div>
          </div>
        </li>
        <!-- Other list items omitted for brevity -->
      </ul>
    </div>
    <button
      class="bg-blue-500 rounded-full text-white text-3xl w-16 h-16 absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2"
    >
      <span class="a-spin ion-loop">Save</span>
    </button>
  </section>
</template>
