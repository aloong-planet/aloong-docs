import React from 'react';
import Layout from '@theme/Layout';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

export default function ApiDocs() {
  return (
    <Layout
      title="API Documentation"
      description="API Documentation for Aloong Planet services">
      <main style={{ padding: '20px' }}>
        <h1>FastAPI Backend API Documentation</h1>
        <SwaggerUI url="/swagger/fastapi-backend.yaml" />
      </main>
    </Layout>
  );
}
