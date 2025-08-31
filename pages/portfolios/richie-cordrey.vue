<template>
    <main class="content">
      <section class="hero">
        <div class="hero-content">
          <h3 class="title">Hey there!!</h3>
          <img src="/richiec-profile.jpg" alt="me!" class="profile-image">
          <div class="socials">
            <a href="https://github.com/byoketh" target="_blank">
              <i><font-awesome-icon icon="fa-brands fa-github"></font-awesome-icon></i>
            </a>
            <a href="https://twitter.com/your_username" target="_blank">
              <i><font-awesome-icon icon="fa-brands fa-x-twitter"></font-awesome-icon></i>
            </a>
            <a href="https://discordapp.com/invite/N5ZHJ9qFbJ" target="_blank">
              <i><font-awesome-icon icon="fa-brands fa-discord"></font-awesome-icon></i>
            </a>
            <a href="https://www.instagram.com/byoketh" target="_blank">
              <i><font-awesome-icon icon="fa-brands fa-instagram"></font-awesome-icon></i>
            </a>
            <a href="https://www.linkedin.com/in/richiecordrey/" target="_blank">
              <i><font-awesome-icon icon="fa-brands fa-linkedin"></font-awesome-icon></i>
            </a>
          </div>
          <h3 class="title" style="font-size: 1.3rem;">Richie D. Cordrey</h3>
          <p>
            Currently a computer science student at Western Michigan University, with a strong focus in software engineering. I have a strong  
            foundation in HTML, CSS, JavaScript, Python, and SQL- there's no project I won't give a shot! Recently, I've taken to 
            creating resposive and intuitive web-apps. Aside from my interests in software development, I am an author, designer, 
            and inventor. My passion lies in creation across various fields, driving me to explore and innovate constantly in my free time.
          </p>
        </div>
      </section>
      <section class="projects">
        <h1 class="title">Projects</h1>
        <div class="projects-container">
          <div class="project-grid">
            <div v-for="project in projects" :key="project.id" class="project-card">
              <img :src="project.image" :alt="project.title" class="project-image">
              <div class="project-details">
                <h2>{{ project.title }}</h2>
                <p>{{ project.description }}</p>
                <div class="project-links">
                  <a v-if="project.liveDemo" :href="project.liveDemo" target="_blank" rel="noopener noreferrer">Live Demo</a>
                  <a v-if="project.github" :href="project.github" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="achievements">
      <h1 class="title">Achievements</h1>
        <div class="achievements-container">
          <div class="achievement-grid">
            <div v-for="achievement in achievements" :key="achievement.id" class="achievement-card">
              <img :src="achievement.image" :alt="achievement.title" class="achievement-image">
              <div class="achievement-details">
                <h2>{{ achievement.title }}</h2>
                <p>{{ achievement.description }}</p>
                <div class="achievement-links">
                  <a v-if="achievement.link" :href="achievement.link" target="_blank" rel="noopener noreferrer">Link</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </template>
  
  <script>
  export default {
    data() {
      return {
        projects: [
          {
            id: 1,
            title: 'd2Docs',
            description: 'd2Docs is the first group project I led, it started out as wanting data-focused guides when playing Destiny 2 with friends.',
            image: '/d2docs.png',
            liveDemo: 'https://richworld.ninja/d2docs',
            github: 'https://github.com/byoketh/d2docs',
          },
          {
            id: 2,
            title: 'Chronos',
            description: 'A small multi-platform timer/ToDo app',
            image: '/chronos.jpg',
            liveDemo: null,
            github: 'https://github.com/byoketh/null',
          },
          {
            id: 3,
            title: 'AthCal',
            description: 'AthCal is an athletic calendar creation script written in Python 3. It was created to automate the creation of master calendars for school districts, and lessen the load of work for district admins.',
            image: '/athcal.jpg',
            liveDemo: null,
            github: 'https://github.com/byoketh/athcal',
          },
          {
            id: 3,
            title: 'richBot',
            description: 'My discord bot! (newly) Written with discord.js (currently under rewrite, formerly discord.py)',
            image: '/bot.jpg',
            liveDemo: null,
            github: 'https://github.com/byoketh/richbot',
          },
          {
            id: 3,
            title: 'Bash Dotfiles',
            description: 'A small collection of bash files I use in my linux environments.',
            image: '/docusaurus_mountain.svg',
            liveDemo: null,
            github: 'https://github.com/byoketh/bash-dotfiles',
          },
        ],
        achievements: [
          {
            id: 1,
            title: 'UC IT Expo 2020',
            description: 'UC IT Expo I was invited to present at the University of Cincinnati\'s IT Expo in 2020 and 2021',
            image: '/soit.jpg',
            link: 'https://cech.uc.edu/soitexpo.html',
          },
          {
            id: 2,
            title: 'Nicholas R. Cordrey Foundation',
            description: 'I am the technical director at Nicholas R. Cordrey Foundation.',
            image: '/nrc.png',
            link: 'https://nicholasrcordreyfoundation.org/',
          }
        ],
      };
    },
  };
  </script>
  

<style scoped>

.title {
  text-shadow: var(--shadow-glow);
  text-align: center;
  font-size: 2.7rem;
  font-weight: 700;
  color: var(--color-text);
}

.projects .title {
  color: var(--color-muted-text);
}

.achievements .title {
  color: var(--color-muted-text);
}

.hero {
  position: sticky;
  top: 0;
  padding: var(--spacing-xl) var(--spacing-md);
  justify-content: center;
  width: 100%;
  height: 100vh;
  color: white;
  text-align: center;
  z-index: 1;
  background-image: url("/background.jpg");
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.projects {
  position: relative;
  z-index: 1;
  padding: var(--spacing-xl) var(--spacing-md);
  background-color: var(--color-surface);
}

.achievements {
  position: relative;
  z-index: 1;
  padding: var(--spacing-xl) var(--spacing-md);
  background-color: var(--color-surface);
}

.hero-content {
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  text-shadow: var(--shadow-glow);
}

.profile-image {
  width: 30%;
  height: 47%;
  border-radius: 67%;
  object-fit: cover;
  border: 4px solid white;
  margin-bottom: var(--spacing-md);
}

.projects-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-lg);
}

.achievements-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-lg);
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-lg);
}

.achievement-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-lg);
}

.project-card {
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  background-color: var(--color-surface);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.achievement-card {
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  background-color: var(--color-surface);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.achievement-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.project-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.achievement-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.project-details {
  padding: var(--spacing-lg);
}

.project-details h2 {
  color: var(--color-muted-text);
}

.project-details p {
  color: var(--color-muted-text);
}

.achievement-details {
  padding: var(--spacing-lg);
}

.achievement-details h2 {
  color: var(--color-muted-text);
}

.achievement-details p {
  color: var(--color-muted-text);
}

.project-links a {
  margin-right: var(--spacing-md);
  text-decoration: none;
  color: var(--color-primary);
}

.project-links a:hover {
  color: var(--color-hover);
}

.achievement-links a {
  margin-right: var(--spacing-md);
  text-decoration: none;
  color: var(--color-primary);
}

.achievement-links a:hover {
  color: var(--color-hover);
}

.socials a {
  margin: 0 var(--spacing-md);
  color: #ffffff;
  text-decoration: none;
}

.socials a:hover {
  color: var(--color-hover);
}

/* Responsive design */
@media (max-width: 768px) {
  .profile-image {
    width: 175px;
    height: 300px;
  }
  
  .title {
    font-size: 1.6rem;
  }
  
  .project-grid,
  .achievement-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .profile-image {
    width: 100px;
    height: 100px;
  }
  
  .title {
    font-size: 1.2rem;
  }
  
  .hero-content {
    padding: var(--spacing-sm);
  }
}
@media (max-width: 375px) {
  .profile-image {
    width: 75px;
    height: 100px;
  }
}
</style>
