<template>
    <nav class="flex w-full border-b py-4 text-sm">
        <div class="flex items-center">
            <i
                v-if="currentRoute == enums.HOME"
                class="fa-solid fa-bars me-2 text-xl text-primary xs:block md:hidden"
            ></i>
            <i
                v-else
                @click="$router.go(-1)"
                class="fa-solid fa-arrow-left me-2 hidden text-xl text-black max-md:block"
            ></i>

            <router-link :to="{ name: 'home' }" class="flex items-center">
                <div class="h-14 w-14 rounded-full bg-primary">
                    <img
                        src="https://static.vecteezy.com/system/resources/previews/024/553/853/non_2x/colorful-eagle-head-logo-pop-art-style-eagle-face-sticker-pastel-cute-colors-ai-generated-png.png"
                        class="object-cover"
                        alt=""
                    />
                </div>
                <p class="font-bold xs:ml-2 xs:text-xl md:ml-4 md:text-2xl">
                    Công Anh
                </p>
            </router-link>
        </div>

        <div
            class="flex flex-1 items-center justify-end xs:gap-4 lg:gap-6 [&>i]:text-[#868686]"
        >
            <div class="relative xs:hidden md:block md:w-[15rem] 2xl:w-[30rem]">
                <input
                    type="text" 
                    placeholder="Search for course"
                    class="w-full rounded-sm bg-[#f7f7f7] p-2 pe-10 focus:outline-none"
                />
                <i
                    class="fa-solid fa-magnifying-glass absolute right-4 top-1/2 -translate-y-1/2 text-sm"
                ></i>
            </div>
            <p class="w-fit xs:hidden xl:block">Become Instructor</p>
            <i class="fa-solid fa-cart-shopping"></i>
            <router-link
                v-if="currentRoute != enums.HOME"
                :to="{ name: 'search' }"
                class="hidden max-sm:block"
            >
                <i class="fa-solid fa-magnifying-glass"></i>
            </router-link>
            <i
                v-if="isLogin && currentRoute === enums.HOME"
                class="far fa-bell"
            ></i>
            <router-link
                :to="{ name: enums.ACCOUNT }"
                v-if="isLogin"
                class="flex h-10 w-10 items-center overflow-hidden rounded-full xs:hidden sm:block"
            >
                <img :src="avatar" class="h-full w-full object-cover" />
            </router-link>
            <button
                v-if="!isLogin"
                @click="toggleModalLogin()"
                class="rounded-xl border-2 border-black px-5 py-2 font-medium hover:border-primary hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary max-md:hidden"
            >
                Login
            </button>

            <router-link
                :to="{ name: 'login' }"
                v-if="!isLogin"
                class="w-5 xs:block md:hidden"
            >
                <img
                    src="https://cdn-icons-png.flaticon.com/512/152/152532.png"
                    alt=""
                />
            </router-link>
            <button
                v-if="!isLogin"
                @click="toggleModalRegister()"
                class="rounded-xl border-2 border-primary bg-primary px-5 py-2 font-medium text-white hover:bg-primary hover:shadow-lg hover:shadow-primary max-md:hidden"
            >
                <i class="fa-solid fa-circle-half-stroke me-2"></i>
                Sign up
            </button>
        </div>
    </nav>
</template>
<script setup>
import { getCurrentInstance, computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import enums from '../../enums/routerName.ts';
import { useStore } from 'vuex';

const store = useStore();
const avatar = computed(() => store.getters.getAvatar);
const isLogin = ref(false);
const route = useRoute();

const currentRoute = computed(() => {
    return route.name;
});

const app = getCurrentInstance();
const emitter = app.appContext.config.globalProperties.emitter;

const toggleModalLogin = () => {
    emitter.emit('toggleModalLogin', true);
};

const toggleModalRegister = () => {
    emitter.emit('toggleModalRegister', true);
};
</script>
<style lang=""></style>
