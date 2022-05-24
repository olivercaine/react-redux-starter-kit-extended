import { Meta } from '@storybook/react';
import { Story } from '@storybook/react/types-6-0';
import * as React from 'react';

export default {
  title: 'Principles/Links',
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
} as Meta;

export const Links: Story = () => <div>
  <h2>Design</h2>
  <ol>
    <li>Link text should be descriptive, e.g. "If you want to learn more, <a href='#'>read our documentation</a>" is a lot easier for users to find than "If you want to learn more, read our documentation <a href='#'>here</a>"</li>
  </ol>
</div>
