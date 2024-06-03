import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import styles from './rich.module.css';
import SMButton from '@site/src/components/socialMediaButton'


export default function Portfolio() {

  const [aliasCode, setAliasCode] = useState('');

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/byoketh/bash-dotfiles/main/.bash_prompt')
      .then(response => response.text())
      .then(data => setAliasCode(data))
      .catch(error => console.error('Error fetching code content:', error));
  }, []);

  const [promptCode, setPromptCode] = useState('');

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/byoketh/bash-dotfiles/main/.bash_prompt')
      .then(response => response.text())
      .then(data => setPromptCode(data))
      .catch(error => console.error('Error fetching code content:', error));
  }, []);

  return (
    <Layout
      title="Dotfiles"
      description="Dotfiles, from richWorld">
      <div className={styles.content}>
        <h1 className={styles.title}>Bash Dotfiles</h1>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <SMButton to="https://github.com/byoketh/bash-dotfiles" img="/img/github.svg" />
        </div>
        <br/>
        <div className={styles.warn}>
          <p>These aliases work for me, in my environments, and on my systems. I make no promises other than they should work if you are careful.</p>
        </div>
        <br/>
        <p>These are bash aliases I use in most of my linux environments. I have used comments to indicate which aliases depend on certain files/packages in order to work properly. Review before using. This is a constant work in progress. So there will be frequent updates!!</p>
        <pre>
          <code>
            {aliasCode}
          </code>
        </pre>
        <p>This is how I prefer my prompt to look in most shells, it's added to .bashrc</p>
        <pre>
          <code>
            {promptCode}
          </code>
        </pre>
      </div>
    </Layout>
  );
}