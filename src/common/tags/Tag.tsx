import React from 'react';

import { StyledTag, TagText, CloseButton, ClosePicture } from './style';

interface ITag {
  children: string;
  deleteTag: () => void;
}

const Tag = ({ children, deleteTag }: ITag): JSX.Element => (
  <StyledTag>
    <TagText>{children}</TagText>
    <CloseButton type="button" onClick={deleteTag}>
      <ClosePicture />
    </CloseButton>
  </StyledTag>
);

export default Tag;
