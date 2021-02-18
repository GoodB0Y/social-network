import React, { useState } from 'react';
import Container from './Avatar.styles';
import nophoto from './assets/nophoto.png';

export type AvatarProps = { size?: number; src?: string; onError?: () => void };

const Avatar = ({ size = 150, src = nophoto }: AvatarProps): JSX.Element => {
  const [path, setPath] = useState(src);

  return <Container size={size} src={path} onError={() => setPath(nophoto)} />;
};

export default Avatar;
