import * as React from 'react';
import StyledLoading from './styles';

interface ILoadingBlock {
  size?: number;
}

const Loader: React.FC<ILoadingBlock> = ({ size = 150 }) => <StyledLoading $size={size} />;

export default Loader;
