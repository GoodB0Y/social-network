import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import routes from '../../routes';

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

const mapStateToProps = (state: RootState) =>
  ({
    userId: state.currentUser.data?.userId,
  });

const connector = connect(mapStateToProps);
type ReduxProps = ConnectedProps<typeof connector>;

const Sidebar: React.FC<ReduxProps> = ({ userId }) =>
  (
    <Wrapper>
      <List>
        <ItemLink to={routes.main}>Моя страница</ItemLink>
        <ItemLink to={routes.friends}>Друзья</ItemLink>
        <ItemLink to={routes.messages}>Сообщения</ItemLink>
        <ItemLink to={routes.news}>Новости</ItemLink>
        <ItemLink to={routes.bookmarks}>Закладки</ItemLink>
        <ItemLink to={routes.groups}>Группы</ItemLink>
        <ItemLink to={routes.photo}>Фотографии</ItemLink>
        <ItemLink to={routes.video}>Видеозаписи</ItemLink>
        <ItemLink to={routes.audio}>Аудиозаписи</ItemLink>
        <ItemLink to="#">Настройки</ItemLink>
      </List>
      <Player />
    </Wrapper>
  );

export default connector(Sidebar);