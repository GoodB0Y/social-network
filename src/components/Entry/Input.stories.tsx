import React, { InputHTMLAttributes } from 'react';
import { Meta, Story } from '@storybook/react';
import Input from './Input.styles';

export default {
  title: 'Pages/Entry/Input',
  component: Input,
  args: {
    type: 'text',
    placeholder: 'Введите ваше имя',
  },
} as Meta;

export const Example: Story<InputHTMLAttributes<HTMLInputElement>> = (args): JSX.Element => (
  <Input {...args} />
);
