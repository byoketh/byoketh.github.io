<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isHeaderVisible = ref(true)
const isMobile = ref(false)
const headerRef = ref(null)
let lastScrollY = 0
let headerHeight = 0

const handleResize = () => {
  if (typeof window === 'undefined') return;
  isMobile.value = window.matchMedia('(max-width: 768px)').matches
  if (!isMobile.value) {
    isHeaderVisible.value = true // Ensure header is visible on desktop
  }
  if (isMobile.value) {
    isHeaderVisible.value = false
  }
  if (headerRef.value) {
    headerHeight = headerRef.value.offsetHeight
  }
  console.log(`[Resize] isMobile: ${isMobile.value}, headerHeight: ${headerHeight}`);
}

const handleScroll = () => {
  if (!isMobile.value) {
    isHeaderVisible.value = true; // Redundant but safe
    return
  }
  if (isMobile.value) {
    isHeaderVisible.value = false
  }

  const currentScrollY = window.scrollY
  console.log(`[Scroll] currentY: ${currentScrollY}, lastY: ${lastScrollY}, headerHeight: ${headerHeight}`);

  if (currentScrollY > lastScrollY && currentScrollY) {
    // Scrolling down and past the header
    isHeaderVisible.value = false
    console.log('[Scroll] Hiding header');
  } else {
    // Scrolling up or near the top
    isHeaderVisible.value = true
    console.log('[Scroll] Showing header');
  }
  lastScrollY = currentScrollY
}

onMounted(() => {
  if (import.meta.client) {
    handleResize() // Initial check
    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll, { passive: true })
  }
})

onUnmounted(() => {
  if (import.meta.client) {
    window.removeEventListener('resize', handleResize)
    window.removeEventListener('scroll', handleScroll)
  }
})
</script>

<template>
  <header ref="headerRef" :class="['header', { 'header-hidden': !isHeaderVisible }]">
    <div class="header-container">
      <div class="header-logo">
        <nav class="header-nav">
          <NuxtLink to="/" class="home-link">
            <img src="/favicon.ico" alt="RW Logo" />
            richWorld
          </NuxtLink>
        </nav>
      </div>
      <div class="header-right">
        <nav class="header-nav">
          <ul>
            <li><NuxtLink to="/portfolios/richie-cordrey">My Portfolio :D </NuxtLink></li>
            <li><NuxtLink to="/gamestudios">Game Studios</NuxtLink></li>
            <li><NuxtLink to="/about">About Us</NuxtLink></li>
            <li><NuxtLink to="/blog">Blog</NuxtLink></li>
          </ul>
        </nav>
        <a href="https://github.com/byoketh/byoketh.github.io" target="_blank" rel="noopener noreferrer" class="github-link">
          Open on GitHub <img src="/new-tab.png" class="new-tab-icon" />
        </a>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  background-color: var(--color-primary);
  position: fixed; /* Keeps it fixed at the top */
  z-index: 1000; /* Keeps it fixed OVER top of content and stuffs */
  top: var(--spacing-sm);
  width: calc(100% - 60px);
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 60px 30px;
  box-sizing: border-box;
  left: 30px;
  padding: var(--spacing-sm) var(--spacing-md);
  transition: transform 0.3s ease;
}

.header-hidden {
  transform: translateY(-100%);
}

.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-sm) var(--spacing-md);
  width: 100%;
  box-sizing: border-box;
}

.header-logo {
  display: flex;
  align-items: center;
}

.header-logo img {
  max-width: 50px;
  border-radius: 180px 120px;
  margin-right: var(--spacing-sm);
}

.home-link {
  display: flex;
  align-items: center;
  color: var(--color-text);
  text-decoration: none;
}

.header-right {
  display: flex;
  align-items: center;
}

.header-nav ul {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: var(--spacing-lg);
}

.header-nav a {
  color: var(--color-text);
  text-decoration: none;
  font-weight: bold;
}

.header-nav a:hover {
  color: var(--color-hover);
}

.github-link {
  display: flex;
  align-items: center;
  margin-left: var(--spacing-lg);
  text-decoration: none;
  color: var(--color-text);
  font-weight: bold;
}

.github-link:hover {
  color: var(--color-hover);
}

.new-tab-icon {
  width: 20px;
  height: 20px;
  margin-left: var(--spacing-xs);
  margin-bottom: var(--spacing-xs);
}

/* Responsive Design */
@media (max-width: 768px) {
  .header {
    width: calc(100% - 20px);
    left: 10px;
    padding: var(--spacing-xs) var(--spacing-sm);
  }

  .header-container {
    flex-direction: column;
    gap: var(--spacing-sm);
    padding: var(--spacing-xs) var(--spacing-sm);
  }

  .header-nav ul {
    gap: var(--spacing-md);
  }

  .github-link {
    margin-left: var(--spacing-sm);
    margin-top: var(--spacing-sm);
  }
}

@media (max-width: 480px) {
  .header-nav ul {
    flex-direction: column;
    gap: var(--spacing-sm);
    text-align: center;
  }

  .header-logo img {
    max-width: 40px;
  }

  .github-link {
    font-size: 0.9rem;
  }

  .new-tab-icon {
    width: 16px;
    height: 16px;
  }
}
</style>
