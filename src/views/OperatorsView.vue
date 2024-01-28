<script lang="ts" setup>
import Breadcrumb from '@/partials/Breadcrumb.vue'
import RenderOperator from '@/components/layout/Tables/RenderOperator.vue'
</script>
<template>
  <Breadcrumb breadcrumb="Operators" />

  <div class="px-2 pt-0 max-h-fit flex flex-col">
    <RenderOperator />
  </div>
</template>

<style></style>
