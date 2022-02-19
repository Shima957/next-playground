import { ComponentStoryObj } from '@storybook/react';
import Input from '../Input/Input';
import FieldWrapper from './FormField';

type Story = ComponentStoryObj<typeof FieldWrapper>;
export default { component: FieldWrapper };

export const Default: Story = {
  args: {
    label: 'email',
    children: <Input type='email' placeholder='email' />,
  },
};
