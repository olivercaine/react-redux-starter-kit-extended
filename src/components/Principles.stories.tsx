import { Meta } from '@storybook/react';
import { Story } from '@storybook/react/types-6-0';
import * as React from 'react';

export default {
  title: 'Principles',
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
} as Meta;

export const Forms: Story = () => <div>

  <h2>Design</h2>
  <ol>
    <li>If the form has a mix of required/no-required fields, add <small>(required)</small> in their label </li>
    <li>Button text should be descriptive e.g. "Update password" instead of "Save"</li>
    <li>Labels should be positioned above the input field</li>
    <li>Input fields should have placeholders</li>
    <li>Validation error messages should be coloured red</li>
  </ol>

  <h2>Functional</h2>
  <ol>
    <li>Validation
      <ol>
        <li>Submitting a form should trigger form validation for all fields</li>
        <li>Validation error messages should appear when invalid fields gets blurred or when invalid
          character type entered (i.e. text instead of number)</li>
      </ol>
    </li>
    <li>Submitting
      <ol>
        <li>Enter key should submit form</li>
        <li>Submit button text should visibly show the user when the submit is in progress,
          e.g. append with "...", so "Update preferences" changes to "Updating preferences..."</li>
        <li>Submit buttons should change to disabled during a submit</li>
      </ol>
    </li>
    <li>First input field should auto focus on first element</li>
    <li>Form submit buttons should always be visible and clickable</li>
    <li>Undo changes buttons should only be visible once changes have been made</li>
    <li>Password fields should have “show password” functionality</li>
  </ol>

  <h2>Technical</h2>
  <ol>
    <li>Use &lt;form autocomplete=&rdquo;on&rdquo;/&gt; to prepopulate fields previously entered by the user</li>
    <li>Use correct inputmode attributes for form fields to provide appropriate keyboard for users.
      Input type should usually be text for numbers (others too?) so that desktop browsers don’t ignore
      incorrect text entry from users (which confuses users), e.g.
      text (default) | decimal | numeric | tel | search | email | url</li>
    <li>Label "for", input "id" and "name" attributes should all have identical values</li>
    <li>Forms should have a "novalidate" attribute so that the browser validation is disabled</li>
    <li>Form element should always have action and method attributes</li>
    <li>Use required for required fields. The browser auto highlights the problem inputs to users.</li>
    <li>Add analytics to gather feedback on problematic fields</li>
    <li>Use &lt;input name=&rdquo;current-password&rdquo;/&gt; &amp; &lt;input name=&rdquo;new-password&rdquo;/&gt;
      for password resets</li>
  </ol>

</div>

export const Links: Story = () => <div>
  <h2>Design</h2>
  <ol>
    <li>Link text should be descriptive, e.g. "If you want to learn more, <a href='#'>read our documentation</a>" is a lot easier for users to find than "If you want to learn more, read our documentation <a href='#'>here</a>"</li>
  </ol>
</div>
