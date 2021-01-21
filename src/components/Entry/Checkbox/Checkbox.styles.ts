import styled from 'styled-components';
import { InputHTMLAttributes } from 'react';
import visuallyHidden from '../../../constants/a11y';
import iconArrow from './assets/icon-arrow.svg';

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  column-gap: 18px;
  color: #959595;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.05em;
  cursor: pointer;

  &::before {
    content: '';
    width: 22px;
    height: 22px;
    border: 1px solid #ffb11b;
    border-radius: 4px;
  }
`;

export const CheckboxInput = styled.input.attrs<InputHTMLAttributes<HTMLInputElement>>(() => ({
  type: 'checkbox',
}))`
  ${visuallyHidden};

  &:checked ~ ${CheckboxLabel}::before {
    background-image: url(${iconArrow});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 13px 9px;
  }

  &:focus ~ ${CheckboxLabel} {
    text-decoration: underline;
  }
`;
