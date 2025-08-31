<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-content">
        <div class="footer-logo">
          <NuxtLink to="/">
            <img src="/favicon.ico" alt="RW Logo" />
          </NuxtLink>
        </div>
        <div class="footer-nav">
          <ul>
            <li></li>
          </ul>
        </div>
        <div class="footer-social">
          <a href="https://twitter.com/byoketh" target="_blank">
            <i><font-awesome-icon icon="fa-brands fa-x-twitter"></font-awesome-icon></i>
          </a>
          <a href="https://github.com/byoketh" target="_blank">
            <i><font-awesome-icon icon="fa-brands fa-github"></font-awesome-icon></i>
          </a>
          <a href="https://www.linkedin.com/in/richiecordrey/" target="_blank">
            <i><font-awesome-icon icon="fa-brands fa-linkedin"></font-awesome-icon></i>
          </a>
        </div>
        <div class="footer-copyright">
          <p>Made with 🤍 by &copy; {{ new Date().getFullYear() }} richWorld LLC. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--color-primary);
  width: calc(100% - 60px);
  position: relative;
  bottom: var(--spacing-xs);
  text-align: center;
  border-radius: 60px 30px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  left: 30px;
  margin-top: var(--spacing-sm);
  padding: var(--spacing-md);
}

.footer-container {
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  gap: var(--spacing-md);
}

.footer-copyright {
  font-size: 0.8rem;
  margin-left: 0;
  text-align: center;
}

.footer-logo img {
  max-width: 120px;
  border-radius: 180px 120px;
  margin-right: var(--spacing-md);
  flex-shrink: 0;
}

.footer-nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: var(--spacing-md);
  flex-wrap: wrap;
  justify-content: center;
  flex: 2 1 auto;
}

.footer-nav li {
  display: inline-block;
  margin-right: 0;
}

.footer-nav a {
  color: var(--color-text);
  text-decoration: none;
  font-weight: 600;
}

.footer-nav a:hover {
  color: var(--color-hover);
}

.footer-social {
  display: flex;
  gap: var(--spacing-md);
  flex: 1 1 auto;
  justify-content: center;
}

.footer-social a {
  color: var(--color-text);
  text-decoration: none;
  font-size: 1.2rem;
}

.footer-social a:hover {
  color: var(--color-hover);
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    align-items: center;
  }

  .footer-logo img {
    margin-right: 0;
    margin-bottom: var(--spacing-sm);
  }

  .footer-nav ul {
    justify-content: center;
    gap: var(--spacing-sm);
  }

  .footer-social {
    margin-top: var(--spacing-sm);
  }
}

@media (max-width: 480px) {
  .footer-nav ul {
    flex-direction: column;
    gap: var(--spacing-xs);
  }

  .footer-social {
    gap: var(--spacing-xs);
  }
}
</style>
