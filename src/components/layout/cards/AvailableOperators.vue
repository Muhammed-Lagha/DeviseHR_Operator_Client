<template>
  <div class="flex items-center px-5 py-6 bg-white rounded-md shadow-sm">
    <div class="p-3 bg-pink-600 bg-opacity-75 rounded-full">
      <UsersIcon class="w-8 h-8 text-white" />
    </div>

    <div class="mx-5">
      <h4 class="text-2xl font-semibold text-gray-700">5,542</h4>
      <div class="text-gray-500">Available Operators</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import UsersIcon from '@/components/icons/other/EmpIcon.vue'
</script>
