<script setup lang="ts">
useHead({
  title: 'richWorld',
  meta: [
    { name: 'richWorld.ninja', content: 'Richie\'s website.' }
  ],
  script: [ { innerHTML: "console.log('Hello world!')" } ]
})
</script>

<template>
  <div class="app-container">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
/* Import global styles */
@import url('~/assets/css/global.css');

.app-container {
  min-height: 100vh;
}

/* Page transitions */
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}
.layout-enter-from,
.layout-leave-to {
  filter: blur(1rem);
}
</style>
