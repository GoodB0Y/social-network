import React from 'react';
import { Meta, Story } from '@storybook/react';
import Button, { ButtonProps } from './index';
import { ButtonProps as StyledButtonProps } from './Button.styles';

export default {
  title: 'Common/Button',
  component: Button,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
  },
} as Meta;

const Template: Story<ButtonProps & StyledButtonProps> = (args): JSX.Element => (
  <Button {...args} />
);

export const Small = Template.bind({});
Small.args = {
  label: 'Вступить в группу',
  size: 'small',
};

export const Medium = Template.bind({});
Medium.args = {
  label: 'Зарегистрироваться',
  size: 'medium',
};

export const Large = Template.bind({});
Large.args = {
  label: 'Добавить',
  size: 'large',
};
