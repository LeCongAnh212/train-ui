<template>
    <div class="flex w-full">
        <div
            class="md:container xs:mx-0 xs:w-full xs:px-0 sm:mx-auto lg:w-3/5 xl:w-1/2 2xl:w-2/5"
        >
            <legend
                class="mb-4 mt-20 text-center text-2xl font-bold xs:hidden sm:block"
            >
                My Account
            </legend>
            <div
                class="no-scrollbar flex flex-nowrap justify-between border-b px-10 xs:gap-5 xs:max-md:overflow-y-auto"
            >
                <div
                    v-for="item in options"
                    :key="item"
                    @click="option = item"
                    class="cursor-pointer text-nowrap py-2 text-lg font-medium"
                    :class="
                        option == item
                            ? 'border-b-2 border-primary xs:text-primary md:text-black'
                            : ''
                    "
                >
                    {{ item }}
                </div>
            </div>
            <div class="mb-10 mt-14 w-full text-center">
                <div class="relative mx-auto w-fit">
                    <div
                        class="flex h-28 w-28 items-center overflow-hidden rounded-full"
                    >
                        <img
                            :src="imageUrl"
                            class="h-full w-full object-cover"
                        />
                    </div>
                    <div
                        @click="selectInput()"
                        class="absolute bottom-0 right-0 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-[#1a1a1adb] text-white"
                    >
                        <i class="fa-solid fa-camera-retro text-sm"></i>
                    </div>
                    <input
                        ref="selectImage"
                        type="file"
                        style="display: none"
                        @change="onFileChange"
                        accept="image/*"
                    />
                </div>
            </div>
            <div class="flex flex-col gap-3 xs:px-4 sm:px-16">
                <div class="relative">
                    <input
                        v-model="info.firstName"
                        type="text"
                        class="peer mt-4 box-border w-full border-b-2 px-2 py-1 focus:border-2 focus:border-primary focus:outline-none"
                    />
                    <small
                        class="pointer-events-none absolute left-0 mb-1 ms-2 w-full select-none  text-gray-500 transition-all duration-300 ease-in-out peer-focus:-top-1"
                        :class="info.firstName ? '-top-1' : 'top-5'"
                    >
                        First Name
                    </small>
                </div>
                <div class="relative">
                    <input
                        v-model="info.lastName"
                        type="text"
                        class="peer mt-4 box-border w-full border-b-2 px-2 py-1 focus:border-2 focus:border-primary focus:outline-none"
                    />
                    <small
                        class="pointer-events-none absolute left-0 mb-1 ms-2 w-full select-none  text-gray-500 transition-all duration-300 ease-in-out peer-focus:-top-1"
                        :class="info.lastName ? '-top-1' : 'top-5'"
                    >
                        Last Name
                    </small>
                </div>
                <div class="relative">
                    <input
                        v-model="info.headline"
                        type="text"
                        class="peer mt-4 box-border w-full border-b-2 px-2 py-1 focus:border-2 focus:border-primary focus:outline-none"
                    />
                    <small
                        class="pointer-events-none absolute left-0 mb-1 ms-2 w-full select-none text-gray-500 transition-all duration-300 ease-in-out peer-focus:-top-1"
                        :class="info.headline ? '-top-1' : 'top-5'"
                    >
                        Headline
                    </small>
                </div>
                <div class="relative">
                    <input
                        v-model="info.language"
                        type="text"
                        class="peer mt-4 box-border w-full border-b-2 px-2 py-1 focus:border-2 focus:border-primary focus:outline-none"
                    />
                    <small
                        class="pointer-events-none absolute left-0 mb-1 ms-2 w-full select-none  text-gray-500 transition-all duration-300 ease-in-out peer-focus:-top-1"
                        :class="info.language ? '-top-1' : 'top-5'"
                    >
                        Language
                    </small>
                </div>
                <div class="relative">
                    <input
                        v-model="info.link"
                        type="text"
                        class="peer mt-4 box-border w-full border-b-2 px-2 py-1 focus:border-2 focus:border-primary focus:outline-none"
                    />
                    <small
                        class="pointer-events-none absolute left-0 mb-1 ms-2 w-full select-none  text-gray-500 transition-all duration-300 ease-in-out peer-focus:-top-1"
                        :class="info.link ? '-top-1' : 'top-5'"
                    >
                        Link
                    </small>
                </div>
            </div>

            <div class="mb-20 mt-14 w-full px-4 text-center">
                <button
                    @click="updateInfo"
                    class="rounded-3xl p-3 px-20 text-white xs:w-full xs:bg-red-700 sm:mx-auto sm:bg-primary"
                >
                    Save
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const selectImage = ref(null);
let imageUrl = ref(store.getters.getAvatar);

const options = reactive([
    'profile',
    'Personalisation',
    'Account',
    'Payment Methods',
    'Notifications',
    'Privacy'
]);
const option = ref(options[0]);
const info = reactive({
    firstName: 'Jonathan',
    lastName: 'Doe',
    headline: '',
    language: 'English',
    link: 'www.kitani.io'
});

function selectInput() {
    selectImage.value.click();
}
function onFileChange(event) {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
        imageUrl.value = URL.createObjectURL(file);
    }
}
function updateInfo() {
    store.commit('SET_AVATAR', imageUrl.value);
}
</script>

<style scoped>
/* .xyz {
    &:has(input:not([value=''])) {
        small {
            top: 0;
        }
    }
} */
</style>
