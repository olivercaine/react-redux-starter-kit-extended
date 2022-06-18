import { defineConfig } from 'cypress';

export default defineConfig({
  viewportWidth: 375,
  viewportHeight: 667,
  e2e: {
    baseUrl: 'http://localhost:3000',
    supportFile: 'cypress/support/index.ts',
  },
  component: {
    devServer: {
      framework: 'react',
      bundler: 'webpack',
    },
  },
});
