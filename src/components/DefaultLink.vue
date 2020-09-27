<template>
  <router-link :to="to" tag="button">
    <slot />
  </router-link>
</template>

<script>
export default {
  name: 'DefaultLink',
  props: {
    to: {
      type: String,
      default: null,
    },
  },
};
</script>

<style></style>
