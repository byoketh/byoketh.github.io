import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import styles from './rich.module.css';
import Link from '@docusaurus/Link';
import Button from '@site/src/components/richButton';
import SMButton from '@site/src/components/socialMediaButton'


export default function Portfolio() {
  return (
    <Layout
      title="d2Docs"
      description="Docs for all the D2 gamers!">
      <div className={styles.content}>
        <h1 className={styles.title}>d2Docs</h1>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <SMButton to="https://github.com/byoketh/byoketh.github.io/tree/master/docs/d2docs" img="/img/github.svg" />
        </div>
        <br/>
        <p>I created this site as a convenient place for my friends and I to keep all the info we use while raiding in Destiny 2. It started as a simple way to keep our resources organized during our gaming sessions, without the annoyance of pop-ups and auto-playing videos. Since then it's become all of this!</p>
        <div className={styles.buttons}>
          <Button to='/docs/d2docs'>To d2Docs!</Button>
        </div>
      </div>
    </Layout>
  );
}