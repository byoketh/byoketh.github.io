<template>
  <div class="layout">
    <AppHeader />
      <div>
          <slot />
      </div>
    <AppFooter class="footer"/>
  </div>
</template>

<style scoped>

.layout {
  background: var(--gradient-home);
}

</style>