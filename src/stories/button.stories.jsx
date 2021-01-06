/* eslint-disable import/prefer-default-export */
import React from 'react';
import Button from '../common/button/Button';

export default { title: 'Button' };

export const ButtonSmall = () => (
  <Button type="button" small>
    ButtonLabel
  </Button>
);

export const ButtonMedium = () => <Button type="button">ButtonLabel</Button>;

export const ButtonWide = () => (
  <Button type="button" wide>
    ButtonLabel
  </Button>
);
