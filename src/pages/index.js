import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Button from '@site/src/components/richButton';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Button to='./docs/welcome'>Welcome!</Button>
        </div>
        <br/>
        <div className={styles.buttons}>
          <Button to='/gamestudios'>richWorld Game Studios</Button>
        </div>
        <br/>
        <div className={styles.buttons}>
          <Button to='/richbot'>Our latest project!</Button>
        </div>
        <br/>
        <div className={styles.buttons}>
          <Button to='/docs/d2docs'>d2Docs</Button>
        </div>
        <br/>
        <div className={styles.buttons}>
          <Button to='/docs/lethaldocs'>lethalDocs</Button>
        </div>
        <br/>
        <div className={styles.buttons}>
          <Button to='/portfolio'>Portfolio</Button>
        </div>
        <br/>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`hello from ${siteConfig.title}`}
      description="come to do some reading?<head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
