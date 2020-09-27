<template>
  <div class="bgImage" />
</template>

<script>
export default {
  name: 'BackgroundImage',
};
</script>

<style lang="scss" scoped>
.bgImage {
  background-image: url('../assets/background.png');
  position: relative;
  height: 100vh;
  width: 100vw;
  background-attachment: fixed;
  background-position: top right;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
}
</style>
