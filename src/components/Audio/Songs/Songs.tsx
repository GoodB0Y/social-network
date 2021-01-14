import React from 'react';
import Container from './Songs.styles';

export type SongsProps = {
  items: boolean | JSX.Element[] | string;
};

const Search = ({ items }: SongsProps): JSX.Element => (
  <Container>
    <ul>{items}</ul>
  </Container>
);

export default Search;
