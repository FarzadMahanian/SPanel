<template>
  <div class="splash-container uk-flex uk-flex-center uk-flex-middle">
    <img class="logo" src="../../assets/images/colorLogo.svg" alt="logo">
  </div>
</template>

<style scoped lang="scss">
.splash-container {
  height: 100%;
  .logo {
    animation: rotate 1.5s ease-out infinite;
  }
}

@keyframes rotate {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  0% {
    transform: scale(1);
  }
}
</style>
