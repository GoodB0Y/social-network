import styled from 'styled-components';
import loader from './loader.svg';

const StyledLoading = styled.div<{ $size: number }>`
  background-image: url(${loader});
  background-size: contain;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  margin: 0 auto;
`;

export default StyledLoading;
