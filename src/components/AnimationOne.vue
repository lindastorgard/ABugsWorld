<template>
  <div class="animation">
    <img src="../assets/bug2.png" alt="Bug image" class="bug1" />
    <img src="../assets/bug3.png" alt="Bug image" class="bug2" />
    <img src="../assets/bug4.png" alt="Bug image" class="bug3" />
    <img src="../assets/bug5.png" alt="Bug image" class="bug4" />
    <img src="../assets/bug6.png" alt="Bug image" class="bug5" />
    <img src="../assets/bug7.png" alt="Bug image" class="bug6" />
    <img src="../assets/bug2.png" alt="Bug image" class="bug7" />
    <img src="../assets/bug7.png" alt="Bug image" class="bug8" />
  </div>
</template>

<script>
export default {
  name: 'AnimationOne',
};
</script>

<style scoped>
.animation {
  position: relative;
}
.bug1,
.bug7 {
  width: 30px;
  height: auto;
  animation: spin2 0.4s linear infinite;
}

.bug2,
.bug8 {
  width: 40px;
  height: auto;
  animation: spin1 0.3s linear infinite;
}

.bug3 {
  width: 30px;
  height: auto;
  animation: spin2 0.6s linear infinite;
}

.bug4 {
  width: 20px;
  height: auto;
  animation: spin1 0.8s linear infinite;
}

.bug5 {
  width: 50px;
  height: auto;
  animation: spin2 0.3s linear infinite;
}

.bug6 {
  width: 40px;
  height: auto;
  animation: spin1 0.6s linear infinite;
}
@keyframes spin1 {
  50% {
    transform: rotate(20deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes spin2 {
  50% {
    transform: rotate(-40deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
</style>
