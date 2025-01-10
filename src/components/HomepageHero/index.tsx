import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export default function HomepageHero() {
  return (
    <header className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Aloong Planet Documentation
        </h1>
        <p className={styles.subtitle}>
          Documentation for Aloong Planet Services
        </p>
        <div className={styles.buttons}>
          <Link
            className={styles.button}
            to="/docs/intro">
            Get Started →
          </Link>
        </div>
      </div>
    </header>
  );
} 