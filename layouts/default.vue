<template>
  <div>
    <AppHeader/>
    <div class="content">
        <slot />
    </div>
    <AppFooter/>
  </div>
</template>

<style>

.content {
  padding: 55px 40px 20px 40px;
}

</style>
