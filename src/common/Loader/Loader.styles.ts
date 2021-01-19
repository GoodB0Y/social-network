import styled from 'styled-components';
import { LoaderProps } from './index';
import loader from './assets/loader.svg';

const Container = styled.div<LoaderProps>`
  margin: 0 auto;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  background-image: url(${loader});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export default Container;
