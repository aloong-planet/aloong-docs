import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

interface OrgCardProps {
  name: string;
  description: string;
  link: string;
}

function OrgCard({ name, description, link }: OrgCardProps) {
  return (
    <div className={styles.card}>
      <Link to={link} className={styles.cardLink}>
        <h2>
          {name}
          <svg className={styles.linkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </h2>
        <p>{description}</p>
      </Link>
    </div>
  );
}

export default function HomepageOrgs() {
  return (
    <section className={styles.orgsSection}>
      <h1>My Organizations</h1>
      <div className={styles.cardsContainer}>
        <OrgCard
          name="Aloong Planet"
          description="A collection of services and tools for modern development workflows."
          link="https://github.com/aloong-planet"
        />
        <OrgCard
          name="Aloong Actions"
          description="Powerful GitHub Actions to enhance your CI/CD pipelines."
          link="https://github.com/aloong-actions"
        />
      </div>
    </section>
  );
} 