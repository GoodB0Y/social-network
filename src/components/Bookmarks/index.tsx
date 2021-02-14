import React from 'react';
import Page from '../../common/Page';
import BlockNotes from '../Main/Articles/blockNotes/BlockNotes';
import Chip from '../../common/Chip';
import { BookmarksWrapper, PageMarker } from './Bookmarks.styles';

const Bookmarks: React.FC = () => (
  <Page>
    <BookmarksWrapper>
      <Chip>Закладки</Chip>
      <BlockNotes />
    </BookmarksWrapper>
  </Page>
);

export default Bookmarks;
