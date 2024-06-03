import React from 'react';
import styles from './styles.module.css'

function richButton({ onClick, to, children }) {
  return (
    <a href={to} className={styles.button} onClick={onClick}>
        {children}
        <br/>
    </a>
  );
}

export default richButton;