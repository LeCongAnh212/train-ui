<template>
    <div class="">
        <Navbar v-show="isNavbar" class="custom-spacing"></Navbar>
        <router-view class=""></router-view>
        <Footer class="custom-spacing max-md:hidden"></Footer>

        <LoginModalComponent />
        <RegisterModalComponent />
    </div>
</template>
<script setup lang="ts">
import Navbar from './navbar.vue';
import Footer from './footer.vue';
import LoginModalComponent from '@/components/account/LoginModalComponent.vue';
import RegisterModalComponent from '@/components/account/RegisterModalComponent.vue';

import {
    ref,
    computed,
    onMounted,
    onUnmounted,
    watchEffect,
    getCurrentInstance
} from 'vue';
import { useRoute } from 'vue-router';

const app: any | null = getCurrentInstance();
const emitter = app.appContext.config.globalProperties.emitter;

const route = useRoute();
const currentRouteName = computed(() => route.name);

const widthScreen = ref(window.innerWidth);
const isNavbar = ref(true);

emitter.on('toggleNavbar', (value: boolean) => {
    isNavbar.value = value;
});

const handleResize = () => {
    widthScreen.value = window.innerWidth;
    if (currentRouteName.value == 'detail-video') {
        if (widthScreen.value < 768) {
            isNavbar.value = false;
        } else {
            isNavbar.value = true;
        }
    }
};

onMounted(() => {
    window.addEventListener('resize', handleResize);
    watchEffect(() => {
        handleResize();
    });
});

onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
});
</script>
<style></style>
