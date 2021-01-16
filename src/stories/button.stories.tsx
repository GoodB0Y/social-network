import React from 'react';
import Button from '../common/Button/Button';

export default { title: 'Button' };

export const ButtonSmall = (): JSX.Element => (
  <Button type="button" small>
    ButtonLabel
  </Button>
);

export const ButtonMedium = (): JSX.Element => <Button type="button">ButtonLabel</Button>;

export const ButtonWide = (): JSX.Element => (
  <Button type="button" wide>
    ButtonLabel
  </Button>
);
