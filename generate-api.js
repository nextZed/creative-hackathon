const OpenAPI = require('openapi-typescript-codegen');

OpenAPI.generate({
  input: 'https://disease.sh/apidocs/swagger_v3.json',
  output: './src/shared/api',
  useOptions: true,
});
