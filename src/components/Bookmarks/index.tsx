import React from 'react';
import styled from 'styled-components';

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

type Props = {
  userId: number;
};

const Bookmarks = ({ userId }: Props): JSX.Element => {
  const { allFilter, myNotesFilter, bookmarksFilter } = filters;
  const currentFilterList = [allFilter, myNotesFilter, bookmarksFilter];

  return (
    <Page>
      <BookmarksWrapper>
        <Chip>Закладки</Chip>
        <Articles filterList={currentFilterList} userId={userId} />
      </BookmarksWrapper>
    </Page>
  );
};

export default Bookmarks;
