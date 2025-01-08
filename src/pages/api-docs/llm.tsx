import React from 'react';
import ApiDocsLayout, { apiSpecs } from '../../components/ApiDocsLayout';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

export default function LlmDocs() {
  const service = 'llm';
  const activeSpec = apiSpecs.find(spec => spec.path === service);

  return (
    <ApiDocsLayout currentPath={service}>
      <SwaggerUI url={activeSpec.url} />
    </ApiDocsLayout>
  );
}