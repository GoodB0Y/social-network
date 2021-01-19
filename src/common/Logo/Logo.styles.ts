import styled from 'styled-components';
import logo from './assets/logo.png';
import LogoSize from './consts';

const Img = styled.img.attrs({
  src: logo,
  width: LogoSize.WIDTH,
  height: LogoSize.HEIGHT,
  alt: 'Logo',
})`
  display: block;
  width: ${LogoSize.WIDTH}px;
  height: ${LogoSize.HEIGHT}px;
`;

export default Img;
