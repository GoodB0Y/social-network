import React from 'react';
import styled from 'styled-components';
import { connect, ConnectedProps } from 'react-redux';

import { RootState } from '../../redux-toolkit/store';
import { filters } from '../../common/Articles/menuItemsData';

import Articles from '../../common/Articles/Articles';
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
  const { allFilter, myNotesFilter, recommendFilter } = filters;
  const currentFilterList = [allFilter, myNotesFilter, recommendFilter];
  return (
    <Page>
      <BookmarksWrapper>
        <Chip>Закладки</Chip>
        <Articles filterList={currentFilterList} userId={user?.data?.userId} />
      </BookmarksWrapper>
    </Page>
  );
};

export default connector(Bookmarks);
