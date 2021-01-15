import * as React from 'react';
import StyledError from './styles';

type Props = {
  errorMessage?: string;
};

const ErrorBlock = ({ errorMessage }: Props): JSX.Element => (
  <StyledError>{errorMessage}</StyledError>
);

export default ErrorBlock;
