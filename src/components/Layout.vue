<template>
  <div class="mainWrapper">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Layout',
};
</script>

<style lang="scss">
.mainWrapper {
  width: 90%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @include for-medium-devices {
    width: 400px;
  }
  @include for-large-devices {
    width: 600px;
  }
}
</style>
