<template>
    <router-link :to="{ name: 'detail-video', params: { id: video.id } }">
        <div class="relative  w-auto ">
            <div class="overflow-hidden">
                <img
                    :src="video.image"
                    class="aspect-video w-full object-cover xs:rounded-md md:rounded-xl lg:rounded-3xl"
                />
            </div>
            <div
                class="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-[#ffffff7e]"
            >
                <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
            <div
                class="absolute -bottom-1 left-0 h-1 bg-primary"
                :style="{ width: video.percentCompeleted + '%' }"
            ></div>
        </div>
        <p class="mt-1 text-xl font-bold text-nowrap truncate">{{ video.title }}</p>
        <div>
            <i class="fa-regular fa-user me-2"></i>
            <span class="text-primary">{{ video.author }}</span>
        </div>

        <div>
            <div v-if="newPercent > 0 && newPercent < 10">
                {{ newPercent }} /10 Videos Completed
            </div>
            <div v-else-if="newPercent == 10" class="text-primary">
                Completed!
            </div>
            <div v-else>Not Yet Started</div>
        </div>
    </router-link>
</template>
<script setup lang="ts">
import { ref, reactive, defineProps } from 'vue';

const prop = defineProps({
    video: Object
});

const video = reactive(prop.video);
let newPercent = ref(0);

percentRounding(video.percentCompeleted);

function percentRounding(percent: number) {
    if (percent < 10 && percent > 0) {
        return (newPercent.value = 1);
    }
    newPercent.value = Math.round(percent / 10);
}
</script>
<style></style>
