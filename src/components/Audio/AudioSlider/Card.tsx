import React from 'react';
import styled from 'styled-components';

const Card = ({ image }: { image: string }): JSX.Element => {
  // const { data }: PaletteState = usePalette(image);
  // Ругается на переданный в img пропс data
  return <Img src={image} alt="cover" />;
};

export default Card;

const Img = styled.img`
  display: block;
  margin: 0 auto;
  border-radius: 10px;
  width: 800px;
  height: 400px;
  object-fit: contain;
  object-position: left;
  background: #808080;
`;
// background: ${(props) => `linear-gradient(205deg, ${props.data.lightMuted} 0, ${props.data.darkMuted} 100%)`};
