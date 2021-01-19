import React, { ChangeEvent } from 'react';
import search from './img/musicSearch.svg';
import Container from './Search.styles';

export type SearchProps = {
  searchSongs: (evt: ChangeEvent<HTMLInputElement>) => void;
};

const Search = ({ searchSongs }: SearchProps): JSX.Element => (
  <Container>
    <input type="text" placeholder="Начните поиск музыки..." onChange={searchSongs} />
    <img src={search} alt="" />
  </Container>
);

export default Search;
