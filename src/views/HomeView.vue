<script setup lang="ts">
import Banner from '@/partials/Banner.vue'
import Breadcrumb from '@/partials/Breadcrumb.vue'
import NewCompanies from '@/components/layout/cards/NewCompanies.vue'
import TotalCompanies from '@/components/layout/cards/TotalCompanies.vue'
import AvailableOperators from '@/components/layout/cards/AvailableOperators.vue'
import MainChart from '@/components/layout/Charts/PlayGround/MainChart.vue'
import DoughnutChart from '@/components/layout/Charts/PlayGround/DoughnutChart.vue'
import RenderCompanies from '@/components/layout/Tables/RenderCompanies.vue'
</script>

<template>
  <div>
    <!--Breadcrumb-->
    <Breadcrumb breadcrumb="" />
    <!--Banner-->
    <Banner />
    <!-- Card -->
    <div class="mt-4">
      <div class="flex flex-wrap -mx-6">
        <div class="w-full px-6 sm:w-1/2 xl:w-1/3">
          <NewCompanies />
        </div>

        <div class="w-full px-6 mt-6 sm:w-1/2 xl:w-1/3 sm:mt-0">
          <TotalCompanies />
        </div>

        <div class="w-full px-6 mt-6 sm:w-1/2 xl:w-1/3 xl:mt-0">
          <AvailableOperators />
        </div>
      </div>
    </div>
    <!-- End of top cards -->
    <!-- Start of main chart -->
    <div class="mt-8 flex flex-wrap">
      <div class="mt-5 mr-5 border rounded shadow-sm">
        <MainChart />
      </div>
      <div class="mt-5 mx-5 px-1 border rounded shadow-sm">
        <DoughnutChart />
      </div>
    </div>
    <!-- End of main chart -->
    <!-- Start of table -->
    <div class="mt-8">
      <RenderCompanies />
    </div>
  </div>
</template>
