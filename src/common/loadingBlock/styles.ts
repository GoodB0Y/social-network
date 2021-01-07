import styled from 'styled-components';
import loading from '../../img/LoadingBlock.svg';

/* eslint-disable import/prefer-default-export */
export const StyledLoading = styled.div<{ $size: number }>`
  background-image: url(${loading});
  background-size: contain;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  margin: 0 auto;
`;
