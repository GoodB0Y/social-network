import React from 'react';
import { Meta, Story } from '@storybook/react';
import SubmitMessage, { SubmitMessageProps } from './SubmitMessage';

export default {
  title: 'Common/SubmitMessage',
  component: SubmitMessage,
} as Meta;

export const Default: Story<SubmitMessageProps> = (args) => <SubmitMessage {...args} />;
