<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import TopNav from "@/components/layout/Navigation/TopNav.vue";

</script>

<template>
  <header>
    <TopNav />
    <!-- <div class="flex justify-center items-center ">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div> -->
    
  </header>

  <RouterView />
</template>

<style scoped></style>
