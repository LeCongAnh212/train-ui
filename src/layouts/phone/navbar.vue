<template>
  <div class="flex px-4 items-center justify-between py-3 border-b-2">
    <div class="flex items-center gap-2">
      <i class="fa-solid fa-arrow-left" @click="$router.go(-1)"></i>
      <div class="w-10 h-10 bg-primary rounded-full">
        <img
          src="https://static.vecteezy.com/system/resources/previews/024/553/853/non_2x/colorful-eagle-head-logo-pop-art-style-eagle-face-sticker-pastel-cute-colors-ai-generated-png.png"
          class="object-cover"
          alt=""
        />
      </div>
      <p class="text-xl font-bold">Công Anh</p>
    </div>

    <div class="flex items-center gap-4 text-gray-500">
      <i class="fa-solid fa-cart-shopping"></i>
      <i class="fa-solid fa-magnifying-glass"></i>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style></style>
