<template>
  <component :is="layout">
    <router-view></router-view>
  </component>
</template>
<script lang="ts">
export default {
  computed: {
    layout() {
      return `${this.$route.meta.layout || "default"}-layout`;
    },
  },
};
</script>
<style lang=""></style>
