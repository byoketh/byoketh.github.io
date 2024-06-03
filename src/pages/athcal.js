import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import styles from './rich.module.css';
import SMButton from '@site/src/components/socialMediaButton'


export default function Portfolio() {
  return (
    <Layout
      title="AthCal"
      description="My first real project!">
      <div className={styles.content}>
        <h1 className={styles.title}>AthCal</h1>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <SMButton to="https://github.com/byoketh/AthCal" img="/img/github.svg" />
        </div>
        <br/>
        <p>I created AthCal in my 3rd and 4th years of highschool to automate the creation of master calendars for school districts, and to lessen the work load for district administrators. Now, even students can be added calendars it creates to follow their schools sports teams.</p>
      </div>
    </Layout>
  );
}