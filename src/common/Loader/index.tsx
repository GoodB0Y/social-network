import React from 'react';
import styled from 'styled-components';
import loader from './assets/loader.svg';

export type LoaderProps = { size?: number };

const Container = styled.div<LoaderProps>`
  margin: 0 auto;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  background-image: url(${loader});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

const Loader = ({ size = 150 }: LoaderProps): JSX.Element => <Container size={size} />;

export default Loader;
