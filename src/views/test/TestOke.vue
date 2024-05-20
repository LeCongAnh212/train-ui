<template>
    <div>
        <input
            ref="selectImage"
            type="file"
            style="display: none"
            @change="onFileChange"
            accept="image/*"
        />
        <button @click="selectInput">Chọn ảnh</button>
        <div v-if="imageUrl">
            <img :src="imageUrl" alt="Selected Image" />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            imageUrl: null
        };
    },
    methods: {
        selectInput() {
            this.$refs.selectImage.click();
        },
        onFileChange(event) {
            const file = event.target.files[0];
            if (file && file.type.startsWith('image/')) {
                this.imageUrl = URL.createObjectURL(file);
            } else {
                this.imageUrl = null;
                alert('Vui lòng chọn một tệp hình ảnh.');
            }
        }
    }
};
</script>

<style scoped>
img {
    max-width: 100%;
    height: auto;
    display: block;
    margin-top: 10px;
}
</style>
