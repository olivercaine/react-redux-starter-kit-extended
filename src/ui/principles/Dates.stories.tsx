import { Meta } from '@storybook/react'
import { Story } from '@storybook/react/types-6-0'
import React from 'react'

export default {
  title: 'Principles/Dates',
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
} as Meta

export const Dates: Story = () => <div>

  <h2>Design</h2>
  <ol>
    <li>Never use numbers for months in dates</li>
  </ol>

  <h2>Technical</h2>
  <ol>
    <li>Always store dates as Unix timestamps. Timezone-based times are for the view layer only.</li>
  </ol>

</div>
