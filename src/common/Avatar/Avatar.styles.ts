import styled from 'styled-components';
import { AvatarProps } from './index';

const Container = styled.div<AvatarProps>`
  cursor: pointer;
  margin: 0 auto;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  max-width: 100%;
  max-height: 100%;
  background-image: url(${({ path }) => path});
  border-radius: 50%;
  box-shadow: 9px 9px 25px rgba(0, 0, 0, 0.25);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export default Container;
