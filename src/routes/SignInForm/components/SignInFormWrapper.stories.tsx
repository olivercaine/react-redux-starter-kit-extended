import { Meta } from '@storybook/react';
import { IProps, SignInFormWrapper } from './SignInFormWrapper';

import { userEvent, within } from '@storybook/testing-library';

export default {
  component: SignInFormWrapper,
  title: 'Components/SignInFormWrapper',
} as Meta;

// export const CanHaveDefaultValues = {
//   args: {
//     initialValues: {
//       email: "john@mail.com",
//       password: "123"
//     }
//   } as IProps,
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     // expect username to be john@mail.com
//     // expect password to be 123
//     // await expect(canvas.getByText('Password needs at least one uppercase letter')).to.be.true;
//   },
// };

export const ExpectsPasswordToBe8Characters = {
  args: {
    initialValues: {
      email: 'lol',
      password: 'pop'
    }
  } as IProps,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByTestId('email'), 'michael@chromatic.com');
    await userEvent.type(canvas.getByTestId('password'), 'pass');
    await userEvent.click(canvas.getByRole('button'));
    // await expect(canvas.getByText('Password needs at least one uppercase letter')).to.be.true;
  },
};
