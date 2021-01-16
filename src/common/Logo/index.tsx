import React from 'react';
import Img from './Logo.styles';
import logo from './assets/logo.png';
import LogoSize from './consts';

export default function Logo(): JSX.Element {
  return <Img src={logo} width={LogoSize.WIDTH} height={LogoSize.HEIGHT} alt="Logo" />;
}
