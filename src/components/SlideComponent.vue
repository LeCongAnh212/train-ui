<template>
    <div
        class="md:custom-spacing w-full overflow-hidden xs:mt-9 xs:h-52 xs:px-0 md:mt-5 md:h-64 lg:h-96"
    >
        <div
            class="relative h-full w-full overflow-hidden xs:rounded-none md:rounded-2xl"
        >
            <div
                class="relative inset-0 left-0 float-left -mr-[100%] flex h-full w-full transform items-center overflow-hidden transition-all duration-1000 ease-in-out"
                :class="active == item.id ? '!left-0' : '!-left-full'"
                v-for="item in listSlide"
                :key="item.id"
            >
                <div
                    class="z-10 h-full flex-[5]"
                    :class="[item.bgColor, item.classShadow]"
                ></div>
                <div class="h-full w-full flex-[6]">
                    <img
                        :src="item.coverImage"
                        class="h-full w-full object-cover"
                    />
                </div>

                <div
                    class="absolute inset-0 z-20 flex flex-col justify-center text-white xs:gap-2 xs:p-8 md:gap-8 md:p-20"
                >
                    <legend
                        class="font-bold leading-[4rem] xs:text-2xl md:text-4xl lg:text-5xl"
                    >
                        Learning something <br />
                        new everyday
                    </legend>
                    <p class="xs:text-sm md:text-lg lg:text-xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <button
                        class="w-fit p-3 px-5 font-semibold xs:rounded-none xs:border xs:border-white xs:bg-transparent xs:text-sm xs:text-white md:rounded-2xl md:bg-white md:text-xl md:text-primary"
                    >
                        Explore Photography
                    </button>
                </div>

                <div class="absolute bottom-6 right-4 w-1/2 text-white">
                    <div
                        class="flex items-center xs:justify-end md:justify-between"
                    >
                        <div class="flex items-center gap-4">
                            <div
                                class="h-16 w-16 overflow-hidden rounded-full border-4 border-white bg-slate-300 max-md:hidden"
                            >
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzIxfyDSfu-j2op39P06zOZp_gnUBtJxgX2FKNtfvvaA&s"
                                    alt=""
                                />
                            </div>
                            <div class="flex flex-col">
                                <p class="font-semibold">{{ item.author }}</p>
                                <span>Photographer</span>
                            </div>
                        </div>
                        <div
                            class="flex flex-col items-end justify-center text-end xs:hidden md:flex md:max-lg:text-sm"
                        >
                            <p>Winter photo 2017 Awwards</p>
                            <p>Joined klevr since 2006</p>
                        </div>
                    </div>
                </div>

                <button
                    @click="handleSwitchSlide(1)"
                    class="absolute right-0 top-1/2 z-20 -translate-y-1/2 bg-[#9797978e] p-3 py-8 text-white opacity-60 hover:opacity-100 max-md:hidden"
                >
                    <i class="fa-solid fa-chevron-right"></i>
                </button>

                <button
                    @click="handleSwitchSlide(-1)"
                    class="absolute left-0 top-1/2 z-20 -translate-y-1/2 bg-[#9797978e] p-3 py-8 text-white opacity-60 hover:opacity-100 max-md:hidden"
                >
                    <i class="fa-solid fa-chevron-left"></i>
                </button>
            </div>
        </div>
    </div>
    <div class="mt-2 flex w-full items-center justify-center gap-1">
        <i
            v-for="i in listSlide.length"
            :key="i"
            class="fa-solid fa-circle text-[5px]"
            :class="active == i ? 'text-[7px] text-primary' : 'text-[#979797]'"
        ></i>
    </div>
</template>

<script setup>
import { reactive, ref, onMounted, onUnmounted } from 'vue';

const listSlide = reactive([
    {
        id: 1,
        coverImage:
            'https://s3-alpha-sig.figma.com/img/0a35/2142/b8f0a007a4b3dd5bb2e7a0ced1a70304?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N6NPN7GqpCUplayHeFFf8bstHV69XDSUi0-kGWfeN5EQK5uJgf4IRd4Dxqj2GYNyllAfY7ZXf6l-88gmH14B79S3VnqO-9ydeLt0GkWEg8Xa6IYPIMFj9BYHXFpWzixNPj-oz9bdfPNZmcfeHnzW2y-Ek5MU3ZTX6m8Vsm6HtC2tYfZsvZrAlSmmLwpn7RfiOOBE0S2moO~hejiLWqbNI~2EyOTAVyTcjxbvUmQiuOYboEpHQd7a0g~uAFuGL5uGo4WHWrR85VbL0Nor6~ylferO42~wCxPiZsg6oL968GuU6E3HjjZ~TAwVCTfh5B5hjex8EQGf4C6FZZNlr0NP1A__',
        author: 'KFC',
        classShadow: 'shadow-right-yellow',
        bgColor: 'bg-yellow-400'
    },
    {
        id: 2,
        coverImage:
            'https://s3-alpha-sig.figma.com/img/72c9/71a1/4f4fe2a68bf395529c3d861cbe33ba7a?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N~PPX4xCbkO1ZFCKh5qKTzwhyt16nMksXMoujDG9v1C-AdN1~cump6wqyw-2hLzpxW1kk8Ua18Ij2RUewllD2Px~oh7zH1QCmjg0ygTh8FvSwPTStiBvRf-nM2nNYSdmWV3RwDzfw-YOtkXdR0jIAAg9GztHI049GApH9i8T~aXikzaJovfZvoof752XLYb1Yl5CLI2bllrwWcDv4pOalHPrxfRvY9DtLosgdHFm4WgFIBhpth~kWYpsyNov7H~-F2pvAJ5VRW0Wl-3PZTZq~e04KTelIL-DTp8stdWaY1d6ZL-8eziK08eWdNVLVBj4RfaOfSR0iSGGxeuo2LBFZw__',
        author: 'Jollibee',
        classShadow: 'shadow-right-red',
        bgColor: 'bg-[#C60102]'
    },
    {
        id: 3,
        coverImage:
            'https://t4.ftcdn.net/jpg/04/71/08/21/360_F_471082199_GqGvsX5BPH03nC2bZqFbZiQHckXlINxn.jpg',
        author: 'MC Donald',
        classShadow: 'shadow-right-purple',
        bgColor: 'bg-[#892BBF]'
    }
]);
const active = ref(1);
let switchSlide = null;

function handleSwitchSlide(a) {
    active.value += a;
    if (active.value > listSlide.length) {
        active.value = 1;
    } else if (active.value < 1) {
        active.value = listSlide.length;
    }

    if (switchSlide) {
        clearInterval(switchSlide);
    }

    switchSlide = setInterval(() => {
        handleSwitchSlide(1);
    }, 4000);
}

onMounted(() => {
    switchSlide = setInterval(() => {
        handleSwitchSlide(1);
    }, 4000);
});
onUnmounted(() => {
    clearInterval(switchSlide);
});
</script>
<style>
.shadow-right-yellow {
    box-shadow: 50px 0px 50px #facc15;
}

.shadow-right-red {
    box-shadow: 50px 0px 50px #c60102;
}

.shadow-right-purple {
    box-shadow: 50px 0px 50px #892bbf;
}
</style>
