<template>
  <div v-if="post" class="page-container">
    <div class="hero">
      <h1>{{ post.title }}</h1>
      <small>{{ formattedDate }}</small>
    </div>
    <p v-html="post.content" class="content"></p>
    <div class="button-container">
      <NuxtLink to="/blog" class="back-button">
        <font-awesome-icon icon="fa-solid fa-arrow-left" />
        Back to Blog
      </NuxtLink>
    </div>
  </div>
  <div v-else class="page-container">
    <p>Post not found.</p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { blogPosts } from '~/data/blogPosts.js'
import { computed } from 'vue'

const route = useRoute()
const slug = route.params.slug

const post = blogPosts.find(p => p.slug === slug)

const formattedDate = computed(() => {
  if (!post || !post.date) return 'Date Unknown'
  try {
    const date = new Date(post.date)
    if (isNaN(date.getTime())) {
      return post.date
    }
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'UTC'
    })
  } catch {
    return post.date
  }
})
</script>

<style scoped>
.page-container {
  max-width: 700px;
  margin: 40px auto;
  padding: 30px 40px;
  font-family: var(--font-family);
  color: var(--color-text);
  line-height: var(--line-height);
}

.hero {
  background: var(--gradient-background);
  border-radius: 15px;
  padding: 25px;
  color: var(--color-text);
  text-align: center;
  margin-bottom: 2rem;
}

.content {
  max-width: 600px;
  margin: 40px auto;
  padding: 30px 40px;
  background: var(--color-surface);
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(219, 180, 255, 0.3);
}

.back-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border-radius: 15px;
  background: linear-gradient(135deg, #e0c3fc, #8ec5fc);
  color: var(--color-primary);
  font-weight: bold;
  text-decoration: none;
  transition: background 0.3s ease;
}

.back-button:hover {
  background: linear-gradient(135deg, #8ec5fc, #e0c3fc);
}

.back-button svg {
  width: 16px;
  height: 16px;
}
</style>
