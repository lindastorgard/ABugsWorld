<template>
  <div>
    <div class="animation">
      <img src="../assets/spider.png" alt="Spider image" class="spider" />
    </div>
    <svg
      width="2"
      height="140"
      viewBox="0 0 2 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path class="path" d="M1 0V140" stroke="black" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'AnimationTwo',
};
</script>

<style scoped>
svg {
  height: 60px;
  position: relative;
  left: 24px;
  top: -50px;
  z-index: -2;
}
.path {
  stroke-dasharray: 150;
  stroke-dashoffset: 150;
  animation: dash 2.3s linear forwards;
}

@keyframes dash {
  to {
    stroke-dashoffset: 0;
  }
}

.animation {
  position: relative;
  height: 50px;
}
.spider {
  width: 30px;
  height: auto;
  animation: MoveDown 2s linear 1;
  position: absolute;
  z-index: -1;
  left: 10px;
  top: 50px;
}

@keyframes MoveDown {
  0% {
    top: -10px;
    transform: rotate(20deg);
  }
  25% {
    transform: rotate(-20deg);
  }
  50% {
    transform: rotate(20deg);
  }
  75% {
    transform: rotate(-20deg);
  }
  100% {
    top: 50px;
    transform: rotate(20deg);
  }
}
</style>
