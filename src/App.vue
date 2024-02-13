<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
@import './scss/vars';
@import './scss/reset';

body {
  background-color: $main-bg;
  color: $main-color;
  font-family: $font-main;

  font-style: normal;
  font-weight: 400;
}

.container {
  max-width: 1256px;
  padding: 0 30px;
  margin: 0 auto;
}

.title-1 {
  font-size: 36px;
  font-weight: 800;
  line-height: 42px;
}

.title-2 {
  font-size: 26px;
  font-weight: 800;
  line-height: 24px;
}

.title-3 {
  font-size: 20px;
  font-weight: 700;
  line-height: 18px;
}

.right {
  justify-content: flex-end;
}

@media (max-width: 991px) {
  .title-1 {
    font-size: 26px;
  }

  .title-2 {
    font-size: 22px;
  }
}

@media (max-width: 767px) {
  .container {
    padding: 0 15px;
  }

  .title-1 {
    font-size: 24px;
  }

  .title-2 {
    font-size: 22px;
  }
}

</style>