<template>
  <div class="content">
    <header class="hero">
      <h1>{{ groupName }}</h1>
      <p>{{ tagline }}</p>
    </header>

    <section class="about-us">
      <h2>About Us</h2>
      <p>{{ aboutUsText }}</p>
    </section>

    <section class="communities-list" v-if="guilds.length > 0">
      <h2>Our Communities</h2>
      <article v-for="guild in guilds" :key="guild.id" class="community-card">
        <a :href="guild.instantInvite" target="_blank" rel="noopener noreferrer" class="community-link">
          <div class="card-content">
            <div class="card-header">
              <h3>{{ guild.name }}</h3>
              <div class="small-image-container">
                <img
                  v-if="guild.id === '910363342344945675'"
                  src="/familyguyroomcrop.jpg"
                  alt="Discord Server"
                  class="small-image"
                />
                <img
                  v-else-if="guild.id === '1112013588383666269'"
                  src="/favicon.ico"
                  alt="Discord Server"
                  class="small-image"
                />
              </div>
            </div>
            <p class="meta">
              <span>{{ guild.approximateMemberCount }} members online</span>
            </p>
          </div>
        </a>
      </article>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const groupName = ref('The Babbling Baboons');
const tagline = ref('Come hang with us!');
const aboutUsText = ref('We are a mix of American and Canadian gamers and streamers. We\'re usually in vc telling  jokes, having a good time, and creating awesome content. Whether you are a casual or competitive player, you are welcome to join our community!');

const guilds = ref([]);

const fetchDiscordData = async () => {
  console.log('Starting to fetch Discord data...');
  try {
    const guildIds = ['910363342344945675', '1112013588383666269', '1285628304996700210'];
    const guildDataPromises = guildIds.map(async (id) => {
      try {
        console.log(`Fetching data for guild ${id}...`);
        const res = await fetch(`https://discord.com/api/guilds/${id}/widget.json`);
        if (!res.ok) {
          console.warn(`Failed to fetch Discord widget for guild ${id}. The widget might be disabled.`);
          return null;
        }
        const data = await res.json();
        console.log(`Fetched data for guild: ${data.name}`);
        return {
          id,
          name: data.name,
          instantInvite: data.instant_invite || '',
          approximateMemberCount: data.presence_count || 0,
        };
      } catch (e) {
        console.error(`Error fetching data for guild ${id}:`, e);
        return null;
      }
    });
    guilds.value = (await Promise.all(guildDataPromises)).filter(g => g !== null);
    console.log('Discord data fetching complete.');
  } catch (error) {
    console.error('Error fetching Discord data:', error);
  }
};

onMounted(fetchDiscordData);
</script>

<style scoped>
.content {
  font-family: var(--font-family);
  line-height: var(--line-height);
  color: var(--color-text);
}

.hero {
  text-align: center;
  margin-bottom: 40px;
}

.hero h1 {
  margin-bottom: 0.5rem;
}

.hero p {
  margin-top: 0;
  color: var(--color-muted-text);
}

.about-us {
  margin-bottom: 2rem;
}

.about-us h2,
.communities-list > h2 {
  margin-top: 0;
  margin-bottom: 20px;
  color: var(--color-muted-text);
  font-size: 1.8rem;
  font-weight: 600;
  border-bottom: 2px solid var(--color-border);
  padding-bottom: 12px;
}

.about-us p {
  margin-bottom: 0;
  color: var(--color-muted-text);
}

.communities-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

.community-card {
  border: 1px solid var(--color-border);
  border-radius: 12px;
  background-color: var(--color-surface);
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  overflow: hidden;
  color: var(--color-text);
}

.community-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 12px rgba(219, 180, 255, 0.3);
}

.community-link {
  display: block;
  text-decoration: none;
  color: inherit;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.card-image-container {
  width: 100%;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.community-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-content {
  padding: 1.5rem;
  flex-grow: 1;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.community-link h3 {
  margin: 0;
  color: var(--color-muted-text);
  font-size: 1.8rem;
  font-weight: 600;
}

.small-image-container {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
}

.small-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.meta {
  color: var(--color-secondary-text);
  font-size: 0.9rem;
  margin-bottom: 1rem;
}
</style>

