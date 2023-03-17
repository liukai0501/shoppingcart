<script setup lang="ts">

</script>
<template>
  <header class="mall-header cover">
    <div class="container">
      <div class="logo">
        <img src="../../assets/static/img/logo.png"/>
      </div>
      <div class="user">
        Mac商城
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
@import "src/assets/static/css/scss/mixins.scss";

.mall-header {
  height: 5rem;
  background-color: #fff;

.container {
  @include flex-container;
  height: 100%;
  justify-content: space-between;

.logo {
  width: 5rem;
  height: 100%;
  padding: 0.6rem;

img {
  height: 100%;
}
}

.user {
  display: flex;
  width: 10rem;
  height: 100%;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
}
}
}
</style>