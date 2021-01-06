import React from 'react';
import styled from 'styled-components';

import { PageMarker } from '../../Friends/Friends';
import BlockNotes from '../../Main/Articles/blockNotes/BlockNotes';

const Wrapper = styled.div`
  background: #fff;
  font-family: 'Montserrat', sans-serif;
  border-radius: 15px;
  padding: 114px;
  margin-top: 275px;
  position: relative;
  min-height: 1200px;
`;

const BookMarksPage = () => (
  <Wrapper>
    <PageMarker>Закладки</PageMarker>
    <BlockNotes />
  </Wrapper>
);

export default BookMarksPage;
