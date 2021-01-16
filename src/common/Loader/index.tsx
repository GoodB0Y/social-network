import React from 'react';
import Container from './Loader.styles';

export type LoaderProps = { size?: number };

const Loader = ({ size = 150 }: LoaderProps): JSX.Element => <Container size={size} />;

export default Loader;
