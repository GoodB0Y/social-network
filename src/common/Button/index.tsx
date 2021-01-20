import React, { ButtonHTMLAttributes } from 'react';
import StyledButton, { ButtonProps as StyledButtonProps } from './Button.styles';

export type ButtonProps = {
  label: string;
};

const Button = ({
  label,
  ...rest
}: ButtonProps & StyledButtonProps & ButtonHTMLAttributes<HTMLButtonElement>): JSX.Element => (
  <StyledButton {...rest}>{label}</StyledButton>
);

export default Button;
