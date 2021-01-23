import { Meta, Story } from '@storybook/react';
import React from 'react';
import Checkbox, { LabelProps } from './index';

export default {
  title: 'Pages/Entry/Checkbox',
  component: Checkbox,
  args: {
    id: 'agreement',
    name: 'agreement',
    label: 'Я даю согласие на обработку своих данных',
    checked: true,
  },
} as Meta;

export const Default: Story<LabelProps> = (args): JSX.Element => <Checkbox {...args} />;
