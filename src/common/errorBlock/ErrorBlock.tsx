import * as React from 'react';
import StyledError from './styles';

interface IErrorBlock {
  errorMessage?: string;
}
const ErrorBlock: React.FC<IErrorBlock> = ({ errorMessage }) => (
  <StyledError>{errorMessage}</StyledError>
);

export default ErrorBlock;
