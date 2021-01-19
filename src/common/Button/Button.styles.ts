import styled from 'styled-components';
import { ButtonStyles, defaultSize } from './consts';

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large';
};

const Button = styled.button<ButtonProps>`
  display: block;
  padding: ${({ size = defaultSize }) => ButtonStyles.padding[size]};
  border: none;
  border-radius: ${({ size = defaultSize }) => ButtonStyles.borderRadius[size]};
  font-family: inherit;
  font-size: ${({ size = defaultSize }) => ButtonStyles.fontSize[size]};
  font-weight: ${({ size = defaultSize }) => ButtonStyles.fontWeight[size]};
  line-height: ${({ size = defaultSize }) => ButtonStyles.lineHeight[size]};
  letter-spacing: ${({ size = defaultSize }) => ButtonStyles.letterSpacing[size]};
  text-transform: ${({ size = defaultSize }) => ButtonStyles.textTransform[size]};
  background-color: #ffb11b;
  color: #000000;
  transition: all 0.2s ease-out;

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 0 3px #ffffff, 0 0 0 5px #ffb11b;
  }

  &:active {
    outline: none;
    box-shadow: 0 0 0 3px #ffffff, 0 0 0 5px #000000;
    transition: none;
  }

  &:focus {
    outline: none;
  }
`;

export default Button;
