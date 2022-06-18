import { action } from '@storybook/addon-actions';
import { ComponentMeta } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { componentTemplate } from '../../../../.storybook/helper';
import { IProps, SignInFormWrapper } from './SignInFormWrapper';

export default {
  component: SignInFormWrapper,
  title: 'Components/SignInFormWrapper',
} as ComponentMeta<typeof SignInFormWrapper>;

const template = componentTemplate(SignInFormWrapper);

const defaultArgs: IProps = {
  handleFormSubmit: action('Clicked')
}

export const Default = template({ ...defaultArgs });

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.type(canvas.getByTestId('email'), 'michael@chromatic.com');
  await userEvent.type(canvas.getByTestId('password'), 'pass');
  await userEvent.click(canvas.getByRole('button'));
  // await expect(canvas.getByText('Password needs at least one uppercase letter')).toBeInTheDocument();
}
