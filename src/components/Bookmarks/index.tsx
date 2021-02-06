import React from 'react';
import Page from '../../common/Page';
import BlockNotes from '../Main/Articles';
import { BookmarksWrapper, PageMarker } from './Bookmarks.styles';

const Bookmarks: React.FC = () => (
  <Page>
    <BookmarksWrapper>
      <PageMarker>Закладки</PageMarker>
      <BlockNotes />
    </BookmarksWrapper>
  </Page>
);

export default Bookmarks;
