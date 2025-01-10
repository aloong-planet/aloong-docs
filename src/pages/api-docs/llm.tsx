import React from 'react';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';
import ApiDocsLayout from '@site/src/components/ApiDocsLayout';

export default function LlmDocs() {
  return (
    <ApiDocsLayout currentPath="llm">
      <SwaggerUI url="https://raw.githubusercontent.com/aloong-planet/llm-streaming-service/main/docs/api-docs.json" />
    </ApiDocsLayout>
  );
}