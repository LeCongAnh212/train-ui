<template>
    <div class="custom-spacing mt-4">
        <div class="mx-auto flex w-3/5 gap-10">
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
                        class="rounded-xl border border-gray-400 p-1 px-4 hover:border-primary hover:text-primary"
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
</template>
