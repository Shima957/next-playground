import { ComponentStoryObj } from '@storybook/react';
import Input from './Input';

type Story = ComponentStoryObj<typeof Input>;
export default { component: Input };

export const Default: Story = {
  args: { defaultValue: 'test' },
};
