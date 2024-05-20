<template>
  <div
    class="relative w-full h-52 rounded-lg overflow-hidden md:flex items-center xs:hidden"
  >
    <div class="h-full w-full custom-spacing overflow-hidden">
      <img
        src="https://img.freepik.com/premium-vector/modern-blue-abstract-background-banner-square-geometric-fluid-blue-abstract-banner-design-background_181182-28910.jpg"
        class="object-cover w-full h-full"
        alt=""
      />
    </div>
    <div
      class="2xl:px-44 xl:px-36 xs:px-16 md:flex w-full absolute px-20 text-white items-center"
    >
      <div class="flex-1">
        <p class="font-bold xs:text-3xl lg:text-4xl mb-4">Join and get amazing discount</p>
        <p class="font-thin text-3xl xs:max-lg:hidden">
          With our responsive themes and mobile and desktop apps
        </p>
      </div>
      <div class="flex gap-4">
        <div class="relative">
          <input
            type="text"
            placeholder="Email Address"
            class="bg-[#a9a9a948] p-2 px-4 pe-10 placeholder:text-white rounded-md"
          />
          <i
            class="fa-solid fa-magnifying-glass absolute right-4 top-1/2 -translate-y-1/2"
          ></i>
        </div>
        <button class="bg-primary text-white px-4 py-2 rounded-sm">
          Subscribe
        </button>
      </div>
    </div>
  </div>

  <div class="md:hidden xs:block h-[20rem] px-10 mb-20">
    <div class="flex rounded-lg overflow-hidden relative">
      <div class="flex-[5] bg-primary"></div>
      <div class="flex-[7] bg-green-200 overflow-hidden">
        <img
          class=""
          src="https://s3-alpha-sig.figma.com/img/d2dc/fcf2/02980a93a70e32c9933d02c02902a5fc?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QC4KrnpkXxLHgz-ecM7f14Jx5PJCAlL6e9I8x7LYRvZqtS36NupOZYHc3iOtrQ3Cx-NV5x7IIQZN8u8WWBxJaNr3MvjtwFTjD9pt-vUibg3BzpLJtegGRzHtM9ZzI351RMs26viz8bsonamVpABzbl08PZM3kkhi1LHhQzhXL90zSd2iVVG7LGrEVOF9j5wFQ3X9FZugpa6~OL99BeuD0KpBMi8ZOmUBm2VmMEbZmV1jI4tcvsMfQvFsqRekeIdf4NOwQL2koTAPxtRvt1WaziXyjGSptyrtAPo7KuwXzekm6RzIP9XQpysphoTn~DlIzM~2D56kAePPJibpAaZw5g__"
        />
      </div>
      <div class="absolute h-full p-6 text-white flex flex-col justify-between">
        <div>
          <p class="font-medium">WEBINAR</p>
          <p class="font-thin text-[#F9F9F9E5] text-[0.64rem]">
            August 16, 2020
          </p>
        </div>
        <div class="leading-10">
          <p class="text-3xl font-semibold">
            Film Maker <br />
            Skillset for <br />
            Beginner.
          </p>
          <p class="font-light">Kitani Sarasvati</p>
        </div>
        <button class="border border-white rounded-sm p-1 px-4 w-fit">
          Get it Now
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style></style>
