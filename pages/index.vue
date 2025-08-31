<template>
  <div class="container">
    <div class="site-title">
      <h1 class="title">
        <span class="animated-word">rich</span>World
      </h1>
      <h1 class="title">
        Creating <span class="animated-word">rich</span><span class="animated-text">{{ currentWord }}</span>
      </h1>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

definePageMeta({
  layout: 'home',
});

// Words to cycle through
const words = [
  'Apps',
  'Games',
  'Docs',
  'Guides',
  'Software',
  'Stories',
  'Code',
  'Tools',
  'Designs'
];

const currentWord = ref(words[0]);
let wordIndex = 0;

onMounted(() => {
  setInterval(() => {
    wordIndex = (wordIndex + 1) % words.length;
    currentWord.value = words[wordIndex];
  }, 4000); // every 4 seconds
});
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: var(--gradient-home);
  font-family: var(--font-family-alt);
  color: #4b0082;
  text-align: center;
  overflow: hidden;
}

/* Hero section styling */
.site-title {
  flex-direction: column;
  align-items: center;
  background: none
}

/* Main title */
.title {
  font-size: 3rem;
  font-weight: 700;
  margin: 0;
  line-height: 1.2;
  color: #4b0082;
}

/* Animating the cycling word */
.animated-word {
  color: #d88eff;
}

.animated-text {
  display: inline-block;
  width: 8ch; /* Match the longest word's width */
  text-align: left;
  animation: fade-in-out 4s ease-in-out infinite;
  font-weight: 700;
  color: #ff6ec7;
}

/* Animations */
@keyframes fade-in-out {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

/* Responsive design for home page */
@media (max-width: 768px) {
  .title {
    font-size: 2.7rem;
  }
}

@media (max-width: 480px) {
  .title {
    font-size: 1.8rem;
  }
}
</style>
