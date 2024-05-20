<template>
  <div :class="isLogin ? 'block' : 'hidden'">
    <div
      class="fixed -top-10 opacity-40 w-full h-[120vh] overscroll-none left-1/2 -translate-x-1/2 bg-black"
    ></div>
    <div
      class="fixed flex top-20 left-1/2 -translate-x-1/2 bg-white xs:w-[90%] lg:w-3/4 2xl:w-1/2 rounded-xl overflow-hidden"
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
            class="w-14 h-14 box-border border-4 border-white rounded-full overflow-hidden"
          >
            <img
              src="https://s3-alpha-sig.figma.com/img/b896/4af0/c42901c04884c10443121741bce1ef5b?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lswz6PvQPjY28fF1Uzos7LcY1h9Isq8qe4bqAMgmyR~BqX6XPnVBlXEFq0WKHAGKwGfZ2AhIJKHBHSgSoo5HpVr4Ip2CvQndDcIxjOWdxuAatBigs5AuvsFoNfaMM9iClmbXSTDbkxHa8eBl-bFgWbXDYQWMTMrt6X7uxYbNnjKIB-d7uCS~LB-I0O5mXaY-pYJeAGJJ0X5HUsdU7DuzZXRqPBpJA~5Io2hQ0BF3oFyAXZBt9HRDtExoOZ6ARzVEWvXcdwr8LfTcezHeKcAR1j9MeFpcICXNYhWSKOScUOzaKgT~XeYt8xk3ApJF~fqbRScN1UWGKha~lqYnN8yaNA__"
              class="object-cover w-full"
              alt=""
            />
          </div>
          <div class="ms-3">
            <p class="font-semibold text-xl">Jane Kitani</p>
            <p class="text-[#F9F9F999]">Graphic Designer</p>
          </div>
        </div>
      </div>
      <div class="flex-1 relative">
        <i
          @click="toggleModalLogin(false)"
          class="fa-solid fa-xmark absolute right-4 top-4 cursor-pointer"
        ></i>
        <div class="w-full h-full p-6 flex flex-col gap-4">
          <div class="flex items-center mt-4">
            <i
              class="fa-solid fa-bars me-2 text-primary text-xl md:hidden xs:block"
            ></i>
            <div class="w-12 h-12 flex items-center bg-primary rounded-full">
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
            Login
          </BaseBtn>
          <div class="w-full text-lg text-center font-medium">or you can</div>

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
            class="w-full bg-transparent text-black border justify-center flex items-center hover:shadow-md hover:shadow-gray-300"
          >
            <IconGoogle class="me-2" />
            <span class="text-black">Continue with Google</span>
          </BaseBtn>

          <p class="text-center mt-3">
            Need an Account?
            <span @click="handleSwitchPage()" class="text-primary font-semibold"
              >Sign Up</span
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

import { ref, getCurrentInstance, onMounted, onUnmounted } from "vue";

const app = getCurrentInstance();
const emitter = app.appContext.config.globalProperties.emitter;

const widthScreen = ref(window.innerWidth);
const isLogin = ref(false);

emitter.on("toggleModalLogin", (status) => {
  toggleModalLogin(status);
});
const toggleModalLogin = (status) => {
  isLogin.value = status;
};

const handleSwitchPage = () => {
  isLogin.value = !isLogin.value;
  emitter.emit("toggleModalRegister", true);
};

const handleResize = () => {
  widthScreen.value = window.innerWidth;
  if (widthScreen.value < 768 && isLogin.value) {
    router.push({ name: "login" });
  }
};

onMounted(() => {
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});

const bgLogin = ref(
  "https://s3-alpha-sig.figma.com/img/8ec3/79ca/9fa1229bae9cf2f76f430a193f049f6d?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B-vQuyDq2YX5vEzDOgeDByaPV5840VkBgMi-AbAa1KwDYrwTUbk5uwgTWCM7ucH3h6vKZ14~2GO6pc7wLzhKcnil2jD0mE35nCSqlI4Snufh0xOhApz4VAberlpSUm2H6ABI~LxSwAEfvb-khmY2OgMjeAJEq9GkKHr06TPwP1W9IkI0C8apgtNUiwgn8hevLtigOOA8fGOCq-N2eF~xA26zCGuROb~dW~3lx6PWc8hRPA~ZitjukrKgyXiNHDG8f9hyWspBYUxUjTTvNOS2FqgBGbvlLxY1r7hTHrtmnElF188iIyLAzvPGNUfhlUavN1ERMqmD1MaIDI8CW5LUBg__",
);
</script>

<style scoped></style>
