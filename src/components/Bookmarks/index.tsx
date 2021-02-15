import React from 'react';
import styled from 'styled-components';
import { connect, ConnectedProps } from 'react-redux';

import { RootState } from '../../redux-toolkit/store';
import { menuItemsNames } from '../../common/ArticlesMenu/menuItemsData';

import ArticlesMenu from '../../common/ArticlesMenu/ArticlesMenu';
import Page from '../../common/Page';
import Chip from '../../common/Chip';

const BookmarksWrapper = styled.div`
  background: #fff;
  font-family: 'Montserrat', sans-serif;
  border-radius: 15px;
  padding: 114px;
  margin-top: 275px;
  position: relative;
  min-height: 1200px;
`;

const mapStateToProps = (state: RootState) => ({
  user: state.user,
});

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

const Bookmarks = ({ user }: PropsFromRedux): JSX.Element => {
  const { all, myNotes, recommend } = menuItemsNames;

  return (
    <Page>
      <BookmarksWrapper>
        <Chip>Закладки</Chip>
        <ArticlesMenu itemsNames={[all, myNotes, recommend]} userId={user?.data?.userId} />
      </BookmarksWrapper>
    </Page>
  );
};

export default connector(Bookmarks);
