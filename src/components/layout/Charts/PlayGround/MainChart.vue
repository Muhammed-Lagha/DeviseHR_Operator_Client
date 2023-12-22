<script setup lang="ts">
import Chart from 'chart.js/auto';
import { ref, onMounted } from 'vue';
const myChart = ref();
onMounted(() => {
  new Chart(myChart.value, {
    type: "bar",
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Revenue (million [$])",
        data: [
          5.2, 7.8, 12.3, 11.2, 11.5, 28.8, 35.5, 40, 42.5, 45.5, 50.5, 60,
        ],
        backgroundColor: "#F4BD50",
        borderRadius: 6,
        borderSkipped: false,
      },
    ],
  },
  // continuation

  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Your Company Revenue In 2023",
        padding: {
          bottom: 16,
        },
        font: {
          size: 16,
          weight: "normal",
        },
      },
      tooltip: {
        backgroundColor: "#27292D",
      },
    },
    scales: {
      x: {
        border: {
          dash: [2, 4],
        },
        grid: {
          color: "#27292D",
        },
        title: {
          text: "2023",
        },
      },
      y: {
        grid: {
          color: "#27292D",
        },
        border: {
          dash: [2, 4],
        },
        beginAtZero: true,
        title: {
          display: true,
          text: "Revenue (million [$])",
        },
      },
    },
  },
  });
});
</script>

<template>
  
  <div class="w-full rounded-3xl bg-[#1E2023] p-4 max-w-2xl min-w-[300px]">
    <canvas class="min-h-[300px]" ref="myChart" id="myChart"></canvas>
  </div>
</template>
