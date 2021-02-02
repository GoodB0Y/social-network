import React from 'react';
import { Meta, Story } from '@storybook/react';
import Message, { MessageProps } from './Message';

export default {
  title: 'Common/Message',
  component: Message,
} as Meta;

export const Default: Story<MessageProps> = (args) => <Message {...args} />;
