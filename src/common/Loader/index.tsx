import React from 'react';
import LoaderProps from './Loader.types';
import Container from './Loader.styles';

const Loader = ({ size = 150 }: LoaderProps): JSX.Element => <Container size={size} />;

export default Loader;
