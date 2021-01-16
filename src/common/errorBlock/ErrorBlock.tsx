import * as React from 'react';
import StyledError from './styles';

type Props = {
  errorMessage?: string;
};

const ErrorBlock = ({ errorMessage = 'Something went wrong...' }: Props): JSX.Element => (
  <StyledError>{errorMessage}</StyledError>
);

export default ErrorBlock;
