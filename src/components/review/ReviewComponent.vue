<template>
  <div class="flex">
    <div class="overflow-hidden rounded-full w-8 h-8">
      <img :src="review.avatar" class="object-cover w-full h-full" />
    </div>
    <div class="flex-1 ms-4">
      <p class="text-primary font-bold mb-2">{{ review.name }}</p>
      <p>{{ review.content }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const prop = defineProps(["review"]);
const review = ref(prop.review);
</script>

<style></style>
