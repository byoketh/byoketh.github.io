<template>
  <div class="content">
    <header class="hero">
      <h1 class="studio-title">richWorld Game Studios</h1>
      <p>Creating <em>rich</em> <strong>stories.</strong></p>
    </header>

    <section class="about">
      <p>
        At richWorld Game Studios, we're dedicated to creating unforgettable gaming
        experiences. Whether it's a sprawling fantasy world, a fast-paced action
        adventure, or a cozy 8-bit gem, our mission is simple: to build games that
        are replayable and easily expandable.
      </p>
    </section>

    <section class="projects">
      <h2>Me & Bro</h2>
      <article class="project">
        <h3>Coming Soon!!</h3>
        <p>
          In richWorld Game Studios' first FPS title, follow a protagonist, or two,
          through a lore-rich multiverse. Both players and enemies are equipped with
          hotswappable, and modifiable weapons and abilities.
        </p>
        <p>
          The story begins with a cinematic battle between the two main characters
          to teach basic combat and gameplay mechanics. As the duo progresses, they
          discover an ability to capture bosses, use them for upgrades, boosts,
          gear, or even as powerful allies. This mechanic opens up strategic
          gameplay, allowing players to experiment with boss abilities and choose
          how to use their captured creatures.
        </p>
        <p>
          Stay tuned for sneak peeks, dev diaries, and more!!
        </p>
      </article>
    </section>

    <section class="join-us">
      <h2>Join the Adventure</h2>
      <p>
        Follow us on social media for updates, behind-the-scenes looks, and the latest news:
      </p>
      <ul class="socials">
        <li><strong>Discord:</strong> <a href="https://discordapp.com/invite/N5ZHJ9qFbJ">Join our server!</a></li>
        <li><strong>Twitter:</strong> Coming soon!</li>
        <li><strong>Instagram:</strong> Coming soon!</li>
        <li><strong>YouTube:</strong> Coming soon!</li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
const appConfig = useAppConfig();
</script>

<style scoped>
/* Game studios page specific styles */
.socials li {
  margin-bottom: 5px;
}
</style>
