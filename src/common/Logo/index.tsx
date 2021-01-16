import React from 'react';
import Img from './Logo.styles';
import logo from './logo.png';
import LogoSize from './Logo.types';

export default function Logo(): JSX.Element {
  return <Img src={logo} width={LogoSize.width} height={LogoSize.height} alt="Logo" />;
}
