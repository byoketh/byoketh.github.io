<template>
  <div class="content">
    <header class="hero">
      <h1>About richWorld</h1>
      <p>Designing <em>rich</em> <strong>creations.</strong></p>
    </header>

    <section class="mission-vision">
    <h2>Current Objective:</h2>
      <p>
        To build a diverse portfolio of ventures, each a leader in its respective field, all united by a shared commitment to excellence, creativity, and purpose. Our mission is simple: to create rich content, rich products, and rich experiences that resonate deeply with a global audience.
      </p>
    </section>

    <section class="what-we-do">
      <div class="venture">
        <h3>richWorld Game Studios</h3>
        <a href="/gamestudios">To studio page</a>
        <p>Crafting unforgettable, immersive gaming experiences.</p>
        <p>Currently developing a thrilling new looter shooter!</p>
      </div>

      <div class="venture">
        <h3>richDocs (Under Development)</h3>
        <p>A user-friendly and author-centric dynamic documentation framework.</p>
      </div>

      <div class="venture">
        <h3>richEdge (WIP)</h3>
        <p>Pushing boundaries with innovative projects.</p>
      </div>

      <p>With each venture, we strive to deliver something unique - products and services designed with depth, creativity, and a sense of purpose.</p>
    </section>

    <section class="team">
      <h2>Meet the Team!</h2>
      <p>
        richWorld LLC is powered by a passionate team of creators, innovators, and visionaries. With diverse talents and a shared set of values, we are united by a single goal: to build something extraordinary.
      </p>

      <div class="team-member">
        <h3>Richie D. Cordrey CEO & Founder</h3>
        <p><NuxtLink to="/portfolios/richie-cordrey">Richie's Portfolio</NuxtLink></p>
      </div>
    </section>

    <section class="contact">
      <h2>Get in Touch!</h2>
      <p>
        Whether you have questions, ideas, or are interested in joining us on this journey, we'd love to hear from you.
      </p>
      <p><strong>Email:</strong> <a href="mailto:byoketh@gmail.com">byoketh@gmail.com</a></p>
    </section>
  </div>
</template>

<style scoped>
/* About page specific styles */
.venture, .core-value, .team-member {
  margin-bottom: 20px;
}

.venture h3, .core-value h3, .team-member h3 {
  margin-bottom: 5px;
}

.studio-link {
  color: inherit;
  text-decoration: underline;
  font-weight: normal;
  cursor: pointer;
}
</style>
