<template>
  <div class="md:w-auto md:flex-1 xs:w-60 xs:flex-none">
    <div
      class="md:h-[40rem] xs:h-[25rem] relative overflow-hidden xs:rounded-md md:rounded-3xl"
    >
      <div
        class="w-full h-full absolute bg-gradient-to-b from-[#8a191500] via-[#8a19152b] to-[#00000080]"
      ></div>
      <div class="w-full h-full flex">
        <img
          :src="instructor.avatar"
          class="object-cover h-full w-full"
          alt=""
        />
      </div>
      <div
        class="absolute w-full xs:hidden md:flex bottom-4 flex-col items-center text-white"
      >
        <p class="font-bold text-3xl">{{ instructor.name }}</p>
        <p class="text-xl font-light">{{ instructor.description }}</p>
      </div>
    </div>
    <div class="w-full xs:flex md:hidden flex-col text-black">
      <p class="font-medium text-2xl">{{ instructor.name }}</p>
      <p class="text-xl font-light">{{ instructor.description }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    instructor: Object,
  },
};
</script>
<style></style>
