import React, { ChangeEvent } from 'react';
import search from './assets/musicSearch.svg';
import Container from './Search.styles';

export type SearchProps = {
  searchTracks: (evt: ChangeEvent<HTMLInputElement>) => void;
};

const Search = ({ searchTracks }: SearchProps): JSX.Element => (
  <Container>
    <input type="text" placeholder="Начните поиск музыки..." onChange={searchTracks} />
    <img src={search} alt="" />
  </Container>
);

export default Search;
