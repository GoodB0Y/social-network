import React, { ChangeEvent } from 'react';
import search from './assets/musicSearch.svg';
import SearchArea from './Search.styles';

export type SearchProps = {
  searchSongs: (evt: ChangeEvent<HTMLInputElement>) => void;
};

const Search = ({ searchSongs }: SearchProps): JSX.Element => (
  <SearchArea>
    <input type="text" placeholder="Начните поиск музыки..." onChange={searchSongs} />
    <img src={search} alt="" />
  </SearchArea>
);

export default Search;
