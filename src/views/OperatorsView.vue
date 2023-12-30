<script lang="ts" setup>
import Breadcrumb from '@/partials/Breadcrumb.vue'
import RenderUsers from '@/components/layout/Tables/RenderUsers.vue'
</script>
<template>
  <Breadcrumb breadcrumb="Operators" />

  <div class="px-2 pt-0 max-h-fit flex flex-col">
    <RenderUsers />
  </div>
</template>

<style></style>
