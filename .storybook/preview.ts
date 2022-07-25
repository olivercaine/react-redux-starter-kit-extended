import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import '../src/ui/styles/project.scss';

export const parameters = {
  actions: { argTypesRegex: '^on.*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    defaultViewport: 'iphone5',
    viewports: INITIAL_VIEWPORTS
  },
  options: {
    storySort: {
      order: [
        'Applications',
        'Features',
        'Templates',
        'Components',
        'Basics',
        'Principles',
        '*'
      ],
    },
  },
}