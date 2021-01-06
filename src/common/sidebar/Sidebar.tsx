import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import RoutePath from '../../routes/RoutePath';

import { Wrapper, List } from '../styledComponents';

import Player from './Player';
import { RootState } from '../../redux-toolkit/store';

const ItemLink = styled(Link)`
  font-family: Montserrat, serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
  text-decoration: none;
  &:not(:last-child) {
    margin-bottom: 24px;
  }
  &:hover {
    color: #ffb11b;
  }
`;

const mapStateToProps = (state: RootState) => ({
  userId: state.currentUser.data?.userId,
});

const connector = connect(mapStateToProps);
type ReduxProps = ConnectedProps<typeof connector>;

const Sidebar: React.FC<ReduxProps> = () => (
  <Wrapper>
    <List>
      <ItemLink to={RoutePath.Main}>Моя страница</ItemLink>
      <ItemLink to={RoutePath.Friends}>Друзья</ItemLink>
      <ItemLink to={RoutePath.Messages}>Сообщения</ItemLink>
      <ItemLink to={RoutePath.News}>Новости</ItemLink>
      <ItemLink to={RoutePath.Bookmarks}>Закладки</ItemLink>
      <ItemLink to={RoutePath.Groups}>Группы</ItemLink>
      <ItemLink to={RoutePath.Photo}>Фотографии</ItemLink>
      <ItemLink to={RoutePath.Video}>Видеозаписи</ItemLink>
      <ItemLink to={RoutePath.Audio}>Аудиозаписи</ItemLink>
      <ItemLink to="#">Настройки</ItemLink>
    </List>
    <Player />
  </Wrapper>
);

export default connector(Sidebar);
