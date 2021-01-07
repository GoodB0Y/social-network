import styled from 'styled-components';
import { textColor, secondaryColor, divideColorStrong } from '../../colors.module';

export const Button = styled.button`
  background-color: ${secondaryColor};
  border: 1px solid ${secondaryColor};
  padding: 5px 10px;
  color: ${textColor};
  border-radius: 5px;
`;

export const Input = styled.input<{ $error?: boolean }>`
  margin-bottom: 15px;
  border-color: ${({ $error }) => ($error ? 'red' : 'initial')};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white !important;
`;

export const InputTitle = styled.div`
  font-size: 15px;
  color: ${divideColorStrong};
  margin-left: 15px;
`;

export const ErrorText = styled.div`
  color: red;
  font-size: 13px;
`;
