<script setup lang="ts">
import Banner from '../partials/Banner.vue'
import Breadcrumb from '../partials/Breadcrumb.vue'
import CompaniesIcon from '@/components/icons/TopNav/company/Company.vue'
import UsersIcon from '@/components/icons/other/EmpIcon.vue'
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
          <div class="flex items-center px-5 py-6 bg-white rounded-md shadow-sm">
            <div class="p-3 bg-indigo-600 bg-opacity-75 rounded-full">
              <CompaniesIcon class="w-8 h-8 text-white" />
            </div>

            <div class="mx-5">
              <h4 class="text-2xl font-semibold text-gray-700">282</h4>
              <div class="text-gray-500">New Companies</div>
            </div>
          </div>
        </div>

        <div class="w-full px-6 mt-6 sm:w-1/2 xl:w-1/3 sm:mt-0">
          <div class="flex items-center px-5 py-6 bg-white rounded-md shadow-sm">
            <div class="p-3 bg-blue-600 bg-opacity-75 rounded-full">
              <CompaniesIcon class="w-8 h-8 text-white" />
            </div>

            <div class="mx-5">
              <h4 class="text-2xl font-semibold text-gray-700">2,521</h4>
              <div class="text-gray-500">Total Companies</div>
            </div>
          </div>
        </div>

        <div class="w-full px-6 mt-6 sm:w-1/2 xl:w-1/3 xl:mt-0">
          <div class="flex items-center px-5 py-6 bg-white rounded-md shadow-sm">
            <div class="p-3 bg-pink-600 bg-opacity-75 rounded-full">
              <UsersIcon class="w-8 h-8 text-white" />
            </div>

            <div class="mx-5">
              <h4 class="text-2xl font-semibold text-gray-700">5,542</h4>
              <div class="text-gray-500">Available Operators</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End of top cards -->
    <!-- Start of main chart -->
    <div class="mt-8 flex flex-wrap max-h-fit">
      <div class="mt-5 mr-5">
        <MainChart />
      </div>
      <div class="mt-5 mx-5 px-1">
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
