import React from 'react';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';
import ApiDocsLayout from '@site/src/components/ApiDocsLayout';

export default function FastApiDocs() {
  return (
    <ApiDocsLayout currentPath="fastapi">
      <SwaggerUI url="https://raw.githubusercontent.com/aloong-planet/fastapi-backend/main/docs/swagger.yaml" />
    </ApiDocsLayout>
  );
}