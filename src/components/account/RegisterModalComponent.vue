<template>
  <div :class="isRegister ? 'block' : 'hidden'">
    <div
      class="fixed -top-10 opacity-40 w-full h-[120vh] overscroll-none left-1/2 -translate-x-1/2 bg-black"
    ></div>
    <div
      class="fixed flex top-20 left-1/2 -translate-x-1/2 bg-white xs:w-[90%] lg:w-3/4 2xl:w-1/2 rounded-xl overflow-hidden max-h-[80vh]"
    >
      <div class="flex-1 overflow-hidden relative">
        <div class="w-full h-full">
          <img :src="bgLogin" class="object-cover w-full h-full" alt="" />
        </div>
        <div
          class="absolute flex items-center top-0 left-0 text-white w-full h-full bg-gradient-to-t from-[#0000007d] via-transparent via-15%"
        />

        <div class="absolute flex items-center bottom-6 left-6 text-white">
          <div
            class="w-14 h-14 box-border flex items-center border-4 border-white rounded-full overflow-hidden"
          >
            <img
              src="https://s3-alpha-sig.figma.com/img/9d91/57fc/aea3d0d6509dc6f0caca8ec174e6d1db?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ems-rw9Qfudzlnwy~l10xGz3TH~DMHa84ByS5ACB6Tpiopy5~eXvkcpFqNIY7GWRVZomhJlg4WUcK~0OdW7xo7JTFnjbVJlYogtCB7U3HWZIFa7eWfhvZdA~QEsCteckYFkjpOZqQW5BGTaoOE69SWn4q63M~njGw3vnjnLvyI8V5SYf~cDcrkGu1kCWK2CZRlWjPR8Mpj3glmEEtMlITJLxA~UDNuTGX~hwxzmh42XBamxT1mUjtSNMGLoKn6SZIcjKloVETKi-3bcTSUkHYdB6tHC5PhEzBIrwOHMChBX49UDPssLRd6ObjjO-ErslUbXhWvlXd4bWQWDleKJzyg__"
              class="object-cover w-full"
              alt=""
            />
          </div>
          <div class="ms-3">
            <p class="font-semibold text-xl">Joe Kitanoe</p>
            <p class="text-[#F9F9F999]">Software Developer</p>
          </div>
        </div>
      </div>
      <div class="flex-1 relative">
        <i
          @click="toggleModalRegister(false)"
          class="fa-solid fa-xmark absolute right-4 top-4 cursor-pointer"
        ></i>
        <div class="w-full h-full p-6 flex flex-col gap-4">
          <div class="flex items-center mt-4">
            <i
              class="fa-solid fa-bars me-2 text-primary text-xl md:hidden xs:block"
            ></i>
            <div class="w-12 h-12 bg-primary rounded-full">
              <img
                src="https://static.vecteezy.com/system/resources/previews/024/553/853/non_2x/colorful-eagle-head-logo-pop-art-style-eagle-face-sticker-pastel-cute-colors-ai-generated-png.png"
                class="object-cover"
                alt=""
              />
            </div>
            <p class="text-xl font-extrabold ml-4">Công Anh</p>
          </div>

          <p class="text-xl font-light">
            Join us and get more benefits. We promise to keep your data safely.
          </p>

          <BaseBtn
            class="w-full bg-[#4267B2] justify-center flex items-center hover:shadow-md hover:shadow-blue-900"
          >
            <i class="fa-brands fa-square-facebook text-3xl me-2"></i>
            Continue with Facebook
          </BaseBtn>

          <BaseBtn
            class="w-full bg-black justify-center flex items-center hover:shadow-md hover:shadow-gray-300"
          >
            <i class="fa-brands fa-apple text-3xl me-2"></i>
            Continue with Apple
          </BaseBtn>

          <BaseBtn
            class="w-full bg-transparent border justify-center flex items-center hover:shadow-md hover:shadow-gray-300"
          >
            <IconGoogle class="me-2" />
            <span class="text-black">Continue with Google</span>
          </BaseBtn>

          <div class="w-full text-lg text-center font-medium">or you can</div>

          <div class="flex flex-col gap-2">
            <div class="relative w-full">
              <input
                type="text"
                placeholder="Email Address"
                class="bg-[#F9F9F9E5] p-3 text-xl placeholder:text-[#1B1B1B1A] focus:outline-none focus:border-2 focus:border-primary rounded-md w-full pe-10"
              />
              <i
                class="fa-regular fa-envelope absolute text-lg text-[#adadad] right-4 top-1/2 -translate-y-1/2"
              ></i>
            </div>
            <div class="relative w-full">
              <input
                type="text"
                placeholder="Email Address"
                class="bg-[#F9F9F9E5] p-3 text-xl placeholder:text-[#1B1B1B1A] focus:outline-none focus:border-2 focus:border-primary rounded-md w-full pe-10"
              />
              <i
                class="fa-solid fa-lock absolute text-lg text-[#adadad] right-4 top-1/2 -translate-y-1/2"
              ></i>
            </div>
          </div>

          <BaseBtn
            class="w-full bg-primary hover:shadow-md hover:shadow-primary"
          >
            Create Account
          </BaseBtn>

          <p class="text-center mt-3">
            Already have an Account?
            <span @click="handleSwitchPage()" class="text-primary font-semibold"
              >Sign In</span
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import router from "@/router";
import BaseBtn from "../button/BaseButtonComponent.vue";
import IconGoogle from "../icon/IconGoogleComponent.vue";

import { ref, getCurrentInstance, watch, onMounted, onUnmounted } from "vue";

const app = getCurrentInstance();
const emitter = app.appContext.config.globalProperties.emitter;

const widthScreen = ref(window.innerWidth);
const isRegister = ref(false);

emitter.on("toggleModalRegister", (status) => {
  toggleModalRegister(status);
});
const toggleModalRegister = (status) => {
  isRegister.value = status;
};
const handleSwitchPage = () => {
  isRegister.value = !isRegister.value;
  emitter.emit("toggleModalLogin", true);
};

const handleResize = () => {
  widthScreen.value = window.innerWidth;
  if (widthScreen.value < 768 && isRegister.value) {
    router.push({ name: "register" });
  }
};

onMounted(() => {
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});

const bgLogin = ref(
  "https://s3-alpha-sig.figma.com/img/fdd5/61b6/3010c55a0a03db39cc7396de5669f4ce?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JEoi5ruhRchvozPEXWTLiMKOwYou~f8I8CtJXbR2hoG34XZxTvKuZm9Uke1~w7ICeXD2ZE6t0tBYZ41bJ8qPWtt9mA7cEfJRfrwHpe67pFUJ8lK1PrkanF67vuF1TDEpAcQM4ewEgXAqDIlWZdHnksaX4O~PeTJ61VvybYct2mB75GcqaIBTeLDZnFzoD6MqyCGYNuhCJgTqR3SsvlziaJKubKzfj~InGhxy85Z9eGi7RzANTgENL7NI62hBWP~yG5~FbQl-YL~R1uph71aaVShoHYgpM85bL0NpssqMcv6ohpI~Dc8kJtSx4L72mXo8f7JItilVGPL5EEWGx-kwlw__",
);
</script>

<style scoped></style>
