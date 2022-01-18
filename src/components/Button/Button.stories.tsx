import type { ComponentStoryObj } from '@storybook/react';
import Button from './Button';

type Story = ComponentStoryObj<typeof Button>;

export default { component: Button };

export const Primary: Story = {
  args: {
    title: 'ボタン',
    styleType: 'primary',
    type: 'button',
    size: 'md',
    isLoading: false,
  },
};

export const Secondary: Story = {
  args: { title: 'ボタン', styleType: 'secondary', type: 'button', size: 'md' },
};
