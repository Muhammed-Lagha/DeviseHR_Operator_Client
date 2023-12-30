<script setup lang="ts">
import Chart from 'chart.js/auto'
import { ref, onMounted, } from 'vue'

const myChart = ref()

onMounted(() => {
  new Chart(myChart.value, {
    type: 'doughnut',
    data: {
      labels: ['Admin', 'Manager', 'Employee'],
      datasets: [
        {
          label: 'Revenue (million [$])',
          data: [300, 50, 100],
          backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
          hoverOffset: 4
        }
      ]
    },
    // continuation
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true
        },
        title: {
          display: true,
          text: 'Your Company Revenue In 2023'
        },
        tooltip: {
          mode: 'index',
          intersect: true
        }
      }
    }
  })
})

// const colors = [
//   'rgb(255, 99, 132)',
//   'rgb(54, 162, 235)',
//   'rgb(255, 205, 86)'
// ];

// const labels = [
//   'Red',
//   'Blue',
//   'Yellow'
// ];

// const values = [
//   300,
//   50,
//   100
// ];

// const randomColor = () => {
//   return colors[Math.floor(Math.random() * colors.length)];
// };

// const randomValue = () => {
//   return values[Math.floor(Math.random() * values.length)];
// };

// const randomLabel = () => {
//   return labels[Math.floor(Math.random() * labels.length)];
// };

// const randomDataset = () => {
//   return {
//     label: randomLabel(),
//     data: [randomValue(), randomValue(), randomValue()],
//     backgroundColor: [randomColor(), randomColor(), randomColor()],
//   };
// };

// const randomData = () => {
//   return {
//     labels: [randomLabel(), randomLabel(), randomLabel()],
//     datasets: [randomDataset(), randomDataset(), randomDataset()],
//   };
// };
</script>

<template>
  <div class="w-full rounded-3xl bg-[#fdfeff] max-h-96 p-4 max-w-sm min-w-[200px]">
    <canvas class="min-h-[300px] w-56" ref="myChart" id="myChart"></canvas>
  </div>
</template>
