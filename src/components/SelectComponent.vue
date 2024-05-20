<template>
    <div class="relative h-fit bg-blue-100">
        <select
            class="hide-icon-select w-fit rounded-md border border-gray-400 bg-white p-2.5 focus:border-primary focus:outline-none sm:px-4 sm:pe-8 lg:px-6 lg:pe-10"
        >
            <option v-for="option in options" :key="option" :value="option">
                {{ option }}
            </option>
        </select>
        <i
            class="fa-solid fa-angle-down pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 select-none"
        ></i>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
    options: Array
});

const options = props.options;
</script>
<style></style>
