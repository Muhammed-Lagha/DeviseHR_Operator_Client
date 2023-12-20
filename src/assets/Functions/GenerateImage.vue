<template>
  <div>
    <img
      :src="generateInitialsImage"
      class="w-14 h-14 rounded-[50%] object-cover"
      alt="Initials Image"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const props = defineProps<{
  firstName: String;
  lastName: String;
}>();

console.log(props);

const generateInitialsImage = ref('');

onMounted(() => {
  const firstName = props.firstName;
  const lastName = props.lastName;

  const initials = `${firstName?.charAt(0) || ''}${lastName?.charAt(0) || ''}`;
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  if (context) {
    // Set canvas dimensions
    canvas.width = 100;
    canvas.height = 100;

    // Generate a random color
    const randomColor = getRandomColor();

    // Set the background color
    context.fillStyle = randomColor;
    context.fillRect(0, 0, canvas.width, canvas.height);

    // Draw initials on the canvas
    context.font = '50px Arial';
    context.fillStyle = '#ffffff';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(initials, canvas.width / 2, canvas.height / 2);

    // Set the generated image as the src
    generateInitialsImage.value = canvas.toDataURL();
  } else {
    // Set a default image URL if canvas is not supported
    generateInitialsImage.value = 'default-image-url';
  }
});

function getRandomColor() {
  const colors = [
    '#FF6384',
    '#36A2EB',
    '#FFCE56',
    '#4BC0C0',
    '#9966FF',
    '#FF9F40',
  ];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}
</script>
