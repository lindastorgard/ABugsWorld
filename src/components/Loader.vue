<template>
  <div class="animation">
    <img src="../assets/bug1.png" alt="Loading bug" />
  </div>
</template>

<script>
export default {
  name: 'Loader',
  props: {
    isLoading: {
      type: Boolean,
    },
  },
};
</script>

<style scoped>
img {
  width: 30px;
  height: auto;
}
.animation {
  width: 50px;
  margin: 0 auto;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}
</style>
