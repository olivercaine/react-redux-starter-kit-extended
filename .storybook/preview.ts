import { StoryTypes } from '@olliecaine/storybook-utils'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import '../src/ui/styles/project.scss'

export const parameters = {
  actions: { argTypesRegex: '^on.*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    defaultViewport: 'iphone6',
    viewports: INITIAL_VIEWPORTS
  },
  options: {
    storySort: {
      order: [
        StoryTypes.Applications,
        StoryTypes.Features,
        StoryTypes.Templates,
        StoryTypes.Components,
        StoryTypes.Basics,
        StoryTypes.Principles,
        '*'
      ],
    },
  },
}