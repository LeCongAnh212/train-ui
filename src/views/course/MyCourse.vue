<template>
    <div class="">
        <div class="xs:max-sm:hidden">
            <SlideComponent />
        </div>

        <div class="h-10 border-b xs:block sm:hidden">
            <TabsMenuComponent :optionList="options" />
        </div>

        <div class="custom-spacing mt-12 flex justify-between xs:max-sm:hidden">
            <div class="text-xl">
                <p class="text-2xl font-bold">My Course</p>
                <p>List of your courses</p>
            </div>
            <div class="flex gap-5">
                <SelectComponent :options="options" />
            </div>
        </div>

        <div
            class="custom-spacing grid gap-5 xs:mt-10 xs:grid-cols-1 mb-12 sm:mt-8 min-[500px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
            <template v-for="video in videoList" :key="video.id">
                <VideoMyCourseComponent :video="video" />
            </template>
        </div>

        <div class="custom-spacing mt-8 xs:max-md:hidden">
            <div class="mx-auto flex w-fit gap-10">
                <button
                    @click="switchPage(-1)"
                    :class="
                        currentPage === 1
                            ? 'border-gray-300 text-gray-300'
                            : 'border-black text-black hover:border-primary hover:text-primary'
                    "
                    class="rounded-md border p-1 px-4"
                    :disabled="currentPage === 1"
                >
                    <i class="fa-solid fa-chevron-left"></i>
                </button>

                <div class="flex gap-2">
                    <template v-for="page in pages" :key="page">
                        <button
                            @click="currentPage = page"
                            :class="
                                currentPage === page
                                    ? 'border-primary text-primary'
                                    : ''
                            "
                            class="rounded-xl border border-gray-400 p-1 px-3 hover:border-primary hover:text-primary"
                        >
                            {{ page }}
                        </button>
                    </template>
                </div>

                <button
                    @click="switchPage(1)"
                    :class="
                        currentPage === pages
                            ? 'border-gray-300 text-gray-300'
                            : 'border-black text-black hover:border-primary hover:text-primary'
                    "
                    class="rounded-md border p-1 px-4"
                    :disabled="currentPage === pages"
                >
                    <i class="fa-solid fa-chevron-right"></i>
                </button>
            </div>
        </div>
        <div class="mt-16 xs:max-md:hidden">
            <PromoComponent />
        </div>
    </div>
</template>

<script setup lang="ts">
import SlideComponent from '@/components/SlideComponent.vue';
import SelectComponent from '@/components/SelectComponent.vue';
import VideoMyCourseComponent from '@/components/VideoMyCourseComponent.vue';
import PromoComponent from '@/components/PromoComponent.vue';
import TabsMenuComponent from '@/components/TabsMenuComponent.vue';

import { ref, reactive } from 'vue';

const options = reactive([
    'All Recommendation',
    'Courses',
    'Wishlist',
    'Completed',
    'Purchased',
    'Archived'
]);
const pages = ref(12);
const currentPage = ref(1);

const videoList = reactive([
    {
        id: 1,
        image: 'https://picsum.photos/300/200',
        title: 'Java Programming Beginner',
        author: 'John Doe',
        percentCompeleted: 13
    },
    {
        id: 2,
        image: 'https://picsum.photos/400/200',
        title: 'iOS 13 & Swift 5 - Complete iOS...',
        author: 'Kitani Studio',
        percentCompeleted: 72
    },
    {
        id: 3,
        image: 'https://picsum.photos/400/300',
        title: 'Java Programming Beginner',
        author: 'John Doe',
        percentCompeleted: 0
    },
    {
        id: 4,
        image: 'https://picsum.photos/600/400',
        title: 'Wordpress Course Intermediate',
        author: 'Song Kang',
        percentCompeleted: 43
    },
    {
        id: 5,
        image: 'https://picsum.photos/500/300',
        title: 'Java Programming Intermediate',
        author: 'Lee jong suk',
        percentCompeleted: 0
    },
    {
        id: 6,
        image: 'https://picsum.photos/600/200',
        title: 'Ruby on Rails Intermediate',
        author: 'Jungkook',
        percentCompeleted: 25
    },
    {
        id: 7,
        image: 'https://picsum.photos/700/400',
        title: '.NET Programming',
        author: 'Kim tae hyun',
        percentCompeleted: 12
    },
    {
        id: 8,
        image: 'https://picsum.photos/700/300',
        title: 'Python Programming Beginner',
        author: 'Bae Suzy',
        percentCompeleted: 100
    }
]);
function switchPage(a) {
    currentPage.value += a;
}
</script>

<style></style>
