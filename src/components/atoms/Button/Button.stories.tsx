import { ComponentStoryObj } from '@storybook/react';
import { PrimaryButton } from './PrimaryButton';

type Story = ComponentStoryObj<typeof PrimaryButton>;

export default { component: PrimaryButton };

export const Primary: Story = {
  args: { children: 'ボタン', size: 'sm' },
};
