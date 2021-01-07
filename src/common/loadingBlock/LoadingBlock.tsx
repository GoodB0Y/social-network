/* eslint-disable @typescript-eslint/no-use-before-define */
import * as React from 'react';
import { StyledLoading } from './styles';

interface ILoadingBlock {
  size?: number;
}

const LoadingBLock: React.FC<ILoadingBlock> = ({ size = 150 }) => <StyledLoading $size={size} />;

export default LoadingBLock;
