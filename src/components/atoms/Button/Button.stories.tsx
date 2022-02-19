import type { ComponentStoryObj } from '@storybook/react';
import Button from './Button';

type Story = ComponentStoryObj<typeof Button>;

export default { component: Button };

export const Primary: Story = {
  args: {
    variant: 'primary',
    type: 'button',
    size: 'md',
    isLoading: false,
    children: 'ボタン',
  },
};

export const Secondary: Story = {
  args: {
    children: 'ボタン',
    variant: 'secondary',
    type: 'button',
    size: 'md',
  },
};
