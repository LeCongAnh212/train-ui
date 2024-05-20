<template>
  <div>{{ name }} - {{ age }}</div>
</template>
<script>
export default {
  props: {
    name: String,
    age: Number,
  },
};
</script>
<style></style>
