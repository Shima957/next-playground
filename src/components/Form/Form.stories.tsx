import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import Form from './Form';

type Meta = ComponentMeta<typeof Form>;
type Story = ComponentStoryObj<typeof Form>;

const Meta: Meta = { component: Form };
export default Meta;

export const Success: Story = {
  play: async ({ canvasElement }) => {
    const screen = within(canvasElement);

    await userEvent.type(screen.getByRole('textbox'), 'sample@sample.com', {
      delay: 100,
    });

    await userEvent.type(screen.getByLabelText('パスワード'), 'password', {
      delay: 100,
    });
    userEvent.click(screen.getByText('確定'));
  },
};

export const RequiredError: Story = {
  play: async ({ canvasElement }) => {
    const screen = within(canvasElement);
    userEvent.click(screen.getByText('確定'));
  },
};

export const ValidationError: Story = {
  play: async ({ canvasElement }) => {
    const screen = within(canvasElement);
    await userEvent.type(screen.getByRole('textbox'), 'sample', {
      delay: 100,
    });

    await userEvent.type(screen.getByLabelText('パスワード'), 'pass', {
      delay: 100,
    });

    userEvent.click(screen.getByText('確定'));
  },
};
