import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import styles from './rich.module.css';
import Button from '@site/src/components/richButton';
import SMButton from '@site/src/components/socialMediaButton'


export default function Portfolio() {
  return (
    <Layout
      title="richBot"
      description="richBot, by richWorld">
      <div className={styles.content}>
        <h1 className={styles.title}>richBot</h1>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <SMButton to="https://github.com/byoketh/richbot" img="/img/github.svg" />
        </div>
        <br/>
        <p>richBot started as a side project before I really understood programming well enough to know exactly what I was making, I wanted to make my own Discord bot that would do just what my friends and I wanted. All of the "good bots" we could find had their features locked behind a paywall, so I set out to make a good bot that worked for free.</p>
        <div className={styles.buttons}>
          <Button to='/docs/richbot/commands'>To the Docs!</Button>
        </div>
      </div>
    </Layout>
  );
}