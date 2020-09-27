<template>
  <div class="imageWrapper">
    <img src="../assets/tree.png" alt="tree image" class="treeImage" />
  </div>
</template>

<script>
export default {
  name: 'TreeImage',
};
</script>

<style lang="scss">
.imageWrapper {
  height: 100vh;
  width: 60%;
  overflow: hidden;
  position: absolute;
  top: 0;
  right: 0;
  @include for-medium-devices {
    width: 50%;
  }
  .treeImage {
    position: absolute;
    top: -8%;
    height: 110%;
    width: auto;
    object-fit: cover;
  }
}
</style>
