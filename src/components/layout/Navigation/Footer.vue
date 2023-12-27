<template>
  <div class="text-sm p-4 w-full border-t-2 px-8 py-3 lg:flex justify-between items-center">
    <small class="mb-2 lg:mb-0">© {{ currentYear }} DeviseHR. All rights reserved.</small>

    <div class="flex">
      <a href="#" class="text-sm mr-6 hover:text-gray-900">
        <small>Terms of Service</small>
      </a>
      <a href="#" class="text-sm mr-6 hover:text-gray-900">
        <small>Privacy Policy</small>
      </a>
      <a href="#" class="text-sm hover:text-gray-900">
        <small>About Us</small>
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const currentYear = ref<number>(new Date().getFullYear())
</script>
