<template>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <Component :is="Component" />
    </keep-alive>
  </router-view>
</template>

<style>

</style>
