<script setup lang="ts">
import Header from '@/components/layout/Navigation/HeaderBar.vue'
import SideNav from '@/components/layout/Navigation/SideBar.vue'
import Footer from '@/components/layout/Navigation/Footer.vue'
</script>

<template>
  <div class="flex h-screen bg-gray-200 font-roboto">
    <SideNav />
    <div class="flex-1 flex flex-col overflow-hidden">
      <Header />
      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
      <div class="container mx-auto px-6 py-8">
        <slot />
      </div>
    </main>
    <Footer />
  
    </div>
  </div>
</template>

<style scoped></style>
