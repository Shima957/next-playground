import { ComponentStoryObj } from '@storybook/react';
import { userEvent, waitFor, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import Form from './Form';

type Story = ComponentStoryObj<typeof Form>;

export default { component: Form };

export const Success: Story = {
  play: async ({ canvasElement }) => {
    const screen = within(canvasElement);

    await userEvent.type(screen.getByRole('textbox'), 'sample@sample.com', {
      delay: 100,
    });

    await userEvent.type(screen.getByLabelText('password'), 'password', {
      delay: 100,
    });
    userEvent.click(screen.getByText('確定'));
  },
};

export const Error: Story = {
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

    await userEvent.type(screen.getByLabelText('password'), 'pass', {
      delay: 100,
    });

    userEvent.click(screen.getByText('確定'));
  },
};
