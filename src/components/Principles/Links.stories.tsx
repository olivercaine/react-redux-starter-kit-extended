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
    <li>Link text should be descriptive so that users can quickly find what they're looking for.
      <ol>
        <li>Ok: "If you want to learn more, read our documentation <a href='#'>here</a>"</li>
        <li>Better: "If you want to learn more, <a href='#'>read our documentation</a>"</li>
      </ol>
    </li>
  </ol>
</div>
