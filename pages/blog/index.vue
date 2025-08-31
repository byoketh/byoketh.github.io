<template>
  <div class="content">
    <header class="hero">
      <h1>Blog</h1>
      <p>Welcome to the blog! Here are the latest posts:</p>
    </header>
    <section class="posts-list">
      <article v-for="post in blogPosts" :key="post.slug" class="post-card">
        <NuxtLink :to="`/blog/${post.slug}`" class="post-link">
          <h2>{{ post.title }}</h2>
          <p class="meta">
            <span v-if="post.author">By {{ post.author }} • </span>
            <span>{{ formatDate(post.date) }}</span>
          </p>
          <p>{{ post.description }}</p>
        </NuxtLink>
      </article>
    </section>
  </div>
</template>

<script setup>

import { blogPosts } from '~/data/blogPosts.js'

const formatDate = (dateString) => {
  if (!dateString) return 'Date Unknown';
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return dateString;
    }
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'UTC'
    });
  } catch {
    return dateString;
  }
}
</script>

<style scoped>
.content {
  font-family: var(--font-family);
  line-height: var(--line-height);
  color: var(--color-text);
}

.posts-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

.post-card {
  border: 1px solid var(--color-border);
  border-radius: 12px;
  background-color: var(--color-surface);
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  overflow: hidden;
  padding: 1.5rem;
  color: var(--color-text);
}

.post-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 12px rgba(219, 180, 255, 0.3);
}

.post-link {
  display: block;
  text-decoration: none;
  color: inherit;
}

.post-link h2 {
  margin-top: 0;
  margin-bottom: 20px;
  color: var(--color-muted-text);
  font-size: 1.8rem;
  font-weight: 600;
  border-bottom: 2px solid var(--color-border);
  padding-bottom: 12px;
}

.meta {
  color: var(--color-secondary-text);
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.post-link p:last-of-type {
  margin-bottom: 0;
  color: var(--color-muted-text);
}
</style>

