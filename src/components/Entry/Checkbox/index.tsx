import React, { InputHTMLAttributes } from 'react';
import { CheckboxInput, CheckboxLabel } from './Checkbox.styles';

export interface LabelProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Checkbox = ({ id, label, ...rest }: LabelProps): JSX.Element => (
  <>
    <CheckboxInput id={id} {...rest} />
    <CheckboxLabel htmlFor={id}>{label}</CheckboxLabel>
  </>
);

export default Checkbox;
