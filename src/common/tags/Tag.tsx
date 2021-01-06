/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';

import { StyledTag, TagText, CloseButton, ClosePicture } from './style';

interface ITag {
  children: string;
  deleteTag: () => void;
}

const Tag: React.FC<ITag> = ({ children, deleteTag }) => (
  <StyledTag>
    <TagText>{children}</TagText>
    <CloseButton type="button" onClick={deleteTag}>
      <ClosePicture />
    </CloseButton>
  </StyledTag>
);

export default Tag;
