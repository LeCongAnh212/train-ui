<template>
    <div
        class="no-scrollbar max-w-full overflow-scroll xs:absolute md:relative"
    >
        <div
            class="flex gap-3 text-nowrap capitalize xs:px-0 md:flex-wrap md:px-10 xl:px-28 2xl:px-36"
        >
            <div
                @click="option = value"
                v-for="value in options"
                :key="value"
                :class="value == option ? 'border-primary text-primary' : ''"
                class="cursor-pointer rounded-xl p-2 px-4 xs:border-x-0 md:border-2"
            >
                <div
                    :class="
                        value == option
                            ? 'border-primary text-primary xs:border-b-4 md:border-0'
                            : ''
                    "
                    class="w-fit"
                >
                    {{ value }}
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, reactive, defineProps } from 'vue';
const props = defineProps({
    optionList: Array
});
let option = ref('All Recommendation');
let options = reactive([
    'All Recommendation',
    'Adobe Ilustrator',
    'Adobe Photoshop',
    'Adobe XD',
    'Writing Course',
    'Photography',
    'Video Making',
    'Java beginner'
]);
if (props.optionList) {
    option = ref(props.optionList[0]);

    options = reactive(props.optionList);
}
</script>
<style></style>
