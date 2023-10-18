import { StorybookConfig } from '@storybook/core-common';
import webpack from 'webpack';
const path = require('path');

const config: StorybookConfig = {
  stories: [
    "../src/**/*.stories.@(ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-actions",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  core: {
    builder: "webpack5"
  },
  features: {
    interactionsDebugger: true, // Enable playback controls
    // storyStoreV7: true, // https://storybook.js.org/docs/react/configure/webpack#bundle-splitting
  },
  typescript: {
    check: true
  },
  webpackFinal: async (config: webpack.Configuration/*, { configType }*/): Promise<webpack.Configuration> => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // TODO: https://storybook.js.org/docs/react/builders/webpack#using-your-existing-config

    // Make whatever fine-grained changes you need
    config.module?.rules?.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    return config; // Return custom config
  },
}

module.exports = config;