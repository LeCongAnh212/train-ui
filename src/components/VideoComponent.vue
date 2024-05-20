<template>
  <router-link :to="{ name: 'detail-video', params: { id: video.id } }">
    <div class="relative xs:w-80 sm:w-72 md:w-auto">
      <div class="">
        <img
          :src="video.image"
          class="xs:rounded-md md:rounded-3xl w-full aspect-video"
        />
      </div>
      <div
        class="absolute xs:top-2 md:top-4 xs:left-2 md:left-4 text-white text-[10px] font-bold flex gap-2"
      >
        <div class="bg-primary xs:rounded-sm md:rounded-xl p-1 px-2">
          Best Seller
        </div>
        <div class="bg-[#A04AE3] xs:rounded-sm md:rounded p-1 px-2">
          20% OFF
        </div>
      </div>
      <i class="absolute fa-regular fa-user me-2 bottom-4 right-4"></i>
    </div>
    <p class="font-bold text-xl">{{ video.title }}</p>
    <div>
      <i class="fa-regular fa-user me-2"></i>
      <span class="text-primary">{{ video.author }}</span>
    </div>
    <p class="text-base">{{ video.description }}</p>
    <div class="flex items-center gap-2">
      <div class="text-yellow-400 text-sm flex gap-1">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star-half-stroke"></i>
        <i class="fa-regular fa-star"></i>
      </div>
      <span>(1.2k)</span>
    </div>
    <div class="flex">
      <p class="text-xl font-bold me-2">$24.92</p>
      <span class="text-gray-500 line-through">$32.90</span>
    </div>
  </router-link>
</template>
<script>
export default {
  props: {
    video: Object,
  },
};
</script>
<style></style>
