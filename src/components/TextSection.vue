<template>
  <div class="intro">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'TextSection',
};
</script>

<style lang="scss">
.intro {
  @include for-large-devices {
    margin-right: 80px;
  }
}
</style>
