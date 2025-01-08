import React, { ReactNode } from 'react';
import Layout from '@theme/Layout';
import { useHistory } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

export const apiSpecs = [
  {
    url: 'https://raw.githubusercontent.com/aloong-planet/fastapi-backend/main/docs/swagger.yaml',
    name: 'FastAPI Backend',
    path: 'fastapi'
  },
  {
    url: 'https://raw.githubusercontent.com/aloong-planet/llm-streaming-service/main/docs/api-docs.json',
    name: 'LLM Streaming Service',
    path: 'llm'
  }
];

interface ApiDocsLayoutProps {
  currentPath?: string;
  children?: ReactNode;
}

export default function ApiDocsLayout({ currentPath, children }: ApiDocsLayoutProps) {
  const history = useHistory();
  const {siteConfig} = useDocusaurusContext();
  const baseUrl = siteConfig.baseUrl;

  const handleTabChange = (path: string) => {
    history.push(`${baseUrl}api-docs/${path}`);
  };

  return (
    <Layout
      title="API Documentation"
      description="API Documentation for Aloong Planet services">
      <main style={{ padding: '20px' }}>
        <div className={styles.apiTabs}>
          {apiSpecs.map((spec) => (
            <button
              key={spec.path}
              className={`${styles.apiTab} ${spec.path === currentPath ? styles.active : ''}`}
              onClick={() => handleTabChange(spec.path)}
            >
              {spec.name}
            </button>
          ))}
        </div>
        {children}
      </main>
    </Layout>
  );
} 