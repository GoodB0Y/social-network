import React from 'react';
import { Meta } from '@storybook/react';
import Logo from './index';

export default {
  title: 'Common/Logo',
  component: Logo,
} as Meta;

export const JMSN = (): JSX.Element => <Logo />;
