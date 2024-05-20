<template>
    <div class="flex flex-col gap-5">
        <div
            class="custom-spacing justify-between border-b py-6 xs:hidden md:flex"
        >
            <div class="flex md:gap-2 lg:gap-4">
                <div class="relative">
                    <select
                        class="hide-icon-select rounded-md border border-gray-400 bg-white p-2.5 focus:border-primary focus:outline-none md:px-4 md:pe-8 lg:px-6 lg:pe-10"
                    >
                        <option selected value="2">Programming</option>
                    </select>
                    <i
                        class="fa-solid fa-angle-down absolute right-4 top-1/2 -translate-y-1/2"
                    ></i>
                </div>
                <div class="relative">
                    <select
                        class="hide-icon-select rounded-md border border-gray-400 bg-white p-2.5 focus:border-primary focus:outline-none md:px-4 md:pe-8 lg:px-6 lg:pe-10"
                    >
                        <option class="mt-2" value="1">Programming</option>
                        <option selected value="2">All Duration</option>
                    </select>
                    <i
                        class="fa-solid fa-angle-down absolute right-4 top-1/2 -translate-y-1/2"
                    ></i>
                </div>
                <div class="relative">
                    <select
                        class="hide-icon-select rounded-md border border-gray-400 bg-white p-2.5 focus:border-primary focus:outline-none md:px-4 md:pe-8 lg:px-6 lg:pe-10"
                    >
                        <option selected value="2">All Level</option>
                    </select>
                    <i
                        class="fa-solid fa-angle-down absolute right-4 top-1/2 -translate-y-1/2"
                    ></i>
                </div>
                <div class="relative">
                    <select
                        class="hide-icon-select rounded-md border border-gray-400 bg-white p-2.5 focus:border-primary focus:outline-none md:px-4 md:pe-8 lg:px-6 lg:pe-10"
                    >
                        <option selected value="2">English</option>
                    </select>
                    <i
                        class="fa-solid fa-angle-down absolute right-4 top-1/2 -translate-y-1/2"
                    ></i>
                </div>
            </div>
            <div
                class="text-nowrap rounded-2xl bg-primary py-2 font-semibold text-white md:px-8 lg:px-14"
            >
                Apply Filter
            </div>
        </div>

        <div class="custom-spacing justify-between xs:hidden md:flex">
            <p>Showing 2,312 results of Kitani Studio</p>
            <div class="relative">
                <select
                    class="hide-icon-select rounded-md border border-gray-400 bg-white p-2.5 px-6 pe-10 focus:border-primary focus:outline-none"
                >
                    <option class="mt-2" value="1">Programming</option>
                    <option selected value="2">Top Rated</option>
                </select>
                <i
                    class="fa-solid fa-angle-down absolute right-4 top-1/2 -translate-y-1/2"
                ></i>
            </div>
        </div>

        <div class="custom-spacing">
            <div>
                <p class="mb-2 text-3xl font-bold xs:max-sm:hidden">
                    Top Result
                </p>
                <p class="mb-2 mt-10 text-2xl font-bold xs:block sm:hidden">
                    Popular Search
                </p>
                <p>We know the best things for You. Top picks for You.</p>
            </div>
        </div>

        <div
            class="custom-spacing no-scrollbar w-full gap-5 overflow-y-auto xs:flex xs:flex-nowrap sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
            <div v-for="item in listSearch" :key="item.id">
                <VideoComponent :video="item" />
            </div>
        </div>

        <button
            class="mx-auto mt-4 w-fit rounded-2xl bg-primary p-3 font-semibold text-white outline-none hover:drop-shadow-md xs:hidden md:block md:px-32 lg:px-12"
        >
            Show More
        </button>

        <div class="xs:max-md:hidden">
            <PromoComponent />
        </div>

        <p class="custom-spacing -mb-6 text-2xl font-bold">
            Popular Instructor
        </p>
        <div
            class="no-scrollbar custom-spacing mb-10 w-full xs:overflow-x-scroll"
        >
            <div class="mt-8 flex flex-nowrap gap-5">
                <card-component
                    v-for="instructor in instructors"
                    :key="instructor"
                    :instructor="instructor"
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import VideoComponent from '@/components/VideoComponent.vue';
import PromoComponent from '@/components/PromoComponent.vue';
import CardComponent from '@/components/CardComponent.vue';

import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const listSearch = computed(() => store.getters.getListSearch);
const instructors = computed(() => store.getters.getInstructors);
</script>

<style></style>
