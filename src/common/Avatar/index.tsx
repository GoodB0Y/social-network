import React, { useState, useEffect } from 'react';
import { AvatarImage, ModalAvatarImage } from './Avatar.styles';
import nophoto from './assets/nophoto.png';

export type AvatarProps = {
  src?: string;
  size: number;
  alt: string;
  modalAvatar?: boolean;
};

const Avatar = ({ size, src = nophoto, alt, modalAvatar }: AvatarProps): JSX.Element => {
  const [currentUrl, setCurrentUrl] = useState<string>(nophoto);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setCurrentUrl(src);
  }, [src]);

  if (modalAvatar) {
    return <ModalAvatarImage size={size} small={currentUrl} medium={currentUrl} alt={alt} />;
  }

  return <AvatarImage size={size} src={currentUrl} alt={alt} />;
};

export default Avatar;
