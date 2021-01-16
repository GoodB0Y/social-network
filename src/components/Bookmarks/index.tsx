import React from 'react';
import styled from 'styled-components';
import Page from '../../common/Page';
import { PageMarker } from '../Friends/Friends';
import BlockNotes from '../Main/Articles/blockNotes/BlockNotes';

const BookmarksWrapper = styled.div`
  background: #fff;
  font-family: 'Montserrat', sans-serif;
  border-radius: 15px;
  padding: 114px;
  margin-top: 275px;
  position: relative;
  min-height: 1200px;
`;

const Bookmarks: React.FC = () => (
  <Page>
    <BookmarksWrapper>
      <PageMarker>Закладки</PageMarker>
      <BlockNotes />
    </BookmarksWrapper>
  </Page>
);

export default Bookmarks;
