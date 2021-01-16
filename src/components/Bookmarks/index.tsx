import React from 'react';
import styled from 'styled-components';
import Page from '../../common/Page';
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
const PageMarker = styled.h2`
  margin: 0;
  left: 90px;
  top: -91px;
  padding: 58px 77px;
  position: absolute;
  border-radius: 15px;
  font-weight: 600;
  font-size: 32px;
  line-height: 39px;
  background: #ffb11b;
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
