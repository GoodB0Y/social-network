import React from 'react';
import Container from './Avatar.styles';
import nophoto from './assets/nophoto.png';

export type AvatarProps = { size?: number; path?: string };

const Avatar = ({ size = 150, path = nophoto }: AvatarProps): JSX.Element => (
  <Container size={size} path={path || nophoto} />
);

export default Avatar;
