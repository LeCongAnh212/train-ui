<template>
    <div class="relative flex w-full flex-col gap-4 px-4 pt-20">
        <p class="mb-2 text-lg">
            Join us and get more benefits. We promise to keep your data safely.
        </p>

        <button
            class="flex w-full items-center justify-center rounded-2xl bg-[#4267B2] p-2 text-xl font-semibold text-white hover:shadow-md hover:shadow-blue-900"
        >
            <i class="fa-brands fa-square-facebook me-2 text-3xl"></i>
            Continue with Facebook
        </button>

        <button
            class="flex w-full items-center justify-center rounded-2xl bg-black p-2 text-xl font-semibold text-white hover:shadow-md hover:shadow-gray-300"
        >
            <i class="fa-brands fa-apple me-2 text-3xl"></i>
            Continue with Apple
        </button>

        <button
            class="flex w-full items-center justify-center rounded-2xl border bg-transparent p-2 text-xl font-semibold text-black hover:shadow-md hover:shadow-gray-300"
        >
            <IconGoogle class="me-2" />
            Continue with Google
        </button>

        <div class="mb-2 w-full text-center text-lg">or you can</div>

        <div class="relative">
            <input
                type="text"
                placeholder="Email Address"
                class="w-full border-b-2 p-2 pe-10 focus:outline-none"
            />
            <i
                class="fa-solid fa-circle-half-stroke absolute right-4 top-1/2 -translate-y-1/2 opacity-10"
            ></i>
        </div>

        <div class="relative">
            <input
                type="text"
                placeholder="Password"
                class="w-full border-b-2 p-2 pe-10 focus:outline-none"
            />
            <i
                class="fa-solid fa-circle-half-stroke absolute right-4 top-1/2 -translate-y-1/2 opacity-10"
            ></i>
        </div>

        <button
            class="mt-2 rounded-2xl bg-red-700 p-2 text-xl font-semibold text-white"
        >
            Create Account
        </button>

        <p class="mt-48 w-full text-center">
            Already have an Account?
            <router-link :to="{ name: 'login' }">
                <span
                    @click="$router.push({ name: 'login' })"
                    class="font-semibold text-primary"
                    >Sign In</span
                >
            </router-link>
        </p>
    </div>
</template>

<script setup lang="ts">
import router from '@/router';
import IconGoogle from '../../components/icon/IconGoogleComponent.vue';
import { onMounted, onUnmounted } from 'vue';

const handleResize = () => {
    if (window.innerWidth > 900) {
        router.go(-1);
    }
};

onMounted(() => {
    window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
});
</script>

<style></style>
