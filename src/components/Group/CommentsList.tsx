import React from 'react';
import styled from 'styled-components';
import { CommentData, Comment } from '../../types/group';
import CommentsListItem from './CommentsListItem';
import InputComment from './InputComment';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const CommentsList: React.FC<CommentData> = ({ data }) => (
  <Container>
    {data.map((item: Comment) => (
      <CommentsListItem
        // API отстутствует, временно key формируем так.
        // Когда с сервера будет приходить Id, заменить на него
        key={item.author + new Date().toLocaleDateString()}
        data={item}
      />
    ))}
    <InputComment />
  </Container>
);

export default CommentsList;
