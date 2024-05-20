<template>
  <div
    class="w-full xs:mt-9 xs:px-0 md:relative md:mt-5 md:max-h-[28rem] md:px-10 xl:px-28 2xl:px-36"
  >
    <div
      class="relative w-full overflow-hidden xs:rounded-none md:max-h-[26rem] md:rounded-2xl"
    >
      <div class="h-full w-full">
        <img
          src="https://cdn.shopify.com/s/files/1/0070/7032/files/how-to-create-a-facebook-business-page.png?v=1679355678"
          class="h-full w-full object-cover"
          alt=""
        />
      </div>
      <div class="absolute inset-0 w-2/6 bg-primary" />
      <div
        class="absolute inset-0 flex flex-col justify-center text-white xs:gap-2 xs:p-8 md:gap-8 md:p-20"
      >
        <legend class="font-bold leading-[4rem] xs:text-2xl md:text-5xl">
          Learning something <br />
          new everyday
        </legend>
        <p class="xs:text-sm md:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <button
          class="w-fit p-3 px-5 font-semibold xs:rounded-none xs:border xs:border-white xs:bg-transparent xs:text-sm xs:text-white md:rounded-2xl md:bg-white md:text-xl md:text-primary"
        >
          Explore Photography
        </button>
      </div>
      <div class="absolute bottom-6 right-4 w-1/2 text-white">
        <div class="flex items-center xs:justify-end md:justify-between">
          <div class="flex items-center gap-4">
            <div
              class="h-16 w-16 overflow-hidden rounded-full border-4 border-white bg-slate-300 max-md:hidden"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzIxfyDSfu-j2op39P06zOZp_gnUBtJxgX2FKNtfvvaA&s"
                alt=""
              />
            </div>
            <div class="flex flex-col items-center">
              <p class="font-semibold">Jessica Wong</p>
              <span>Photographer</span>
            </div>
          </div>
          <div class="flex flex-col items-end justify-center xs:hidden md:flex">
            <p>Winter photo 2017 Awwards</p>
            <p>Joined klevr since 2006</p>
          </div>
        </div>
      </div>

      <button
        @click="index == 5 ? (index = 1) : index++"
        class="absolute right-0 top-1/2 -translate-y-1/2 bg-[#9797978e] p-3 py-8 text-white opacity-60 hover:opacity-100 max-md:hidden"
      >
        <i class="fa-solid fa-chevron-right"></i>
      </button>

      <button
        @click="index == 1 ? (index = 5) : index--"
        class="absolute left-0 top-1/2 -translate-y-1/2 bg-[#9797978e] p-3 py-8 text-white opacity-60 hover:opacity-100 max-md:hidden"
      >
        <i class="fa-solid fa-chevron-left"></i>
      </button>
    </div>
    <div
      class="relative bottom-0 mt-3 flex w-full items-center justify-center gap-1 text-[0.25rem] text-gray-200"
    >
      <i
        v-for="i in 5"
        :class="i === index ? 'text-[0.5rem] text-primary' : ''"
        class="fa-solid fa-circle"
      ></i>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      index: 1,
    };
  },
  mounted() {
    //
  },
  methods: {
    //
  },
};
</script>
<style lang=""></style>
