import React from 'react';
import { Meta, Story } from '@storybook/react';
import Avatar, { AvatarProps } from './index';

export default {
  title: 'Common/Avatar',
  component: Avatar,
} as Meta;

export const Default: Story<AvatarProps> = (args) => <Avatar {...args} />;
