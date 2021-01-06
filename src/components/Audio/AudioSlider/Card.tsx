import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  display: block;
  margin: 0 auto;
  border-radius: 10px;
  max-width: 828px;
  max-height: 404px;
  object-fit: contain;
  object-position: left;
  background: #808080;
`;

const Card = ({ image }: { image: string }): JSX.Element => (
  // const { data }: PaletteState = usePalette(image);
  // Ругается на переданный в img пропс data
  <Img src={image} alt="cover" />
);

export default Card;
