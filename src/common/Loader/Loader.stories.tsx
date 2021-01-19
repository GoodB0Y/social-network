import React from 'react';
import { Meta, Story } from '@storybook/react';
import Loader, { LoaderProps } from './index';

export default {
  title: 'Common/Loader',
  component: Loader,
} as Meta;

export const Default: Story<LoaderProps> = (args) => <Loader {...args} />;
