import React from 'react';
import styled from 'styled-components';
import { CommentData } from '../../types/group';
import CommentsList from './CommentsList';

const Container = styled.div`
  padding-left: 60px;
  margin-bottom: 5px;
  padding-right: 100px;
`;

const Heading = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  color: #515151;
  height: 125px;
  line-height: 125px;
  text-align: left;
`;

const Comments = ({ data }: CommentData): JSX.Element => (
  <Container>
    <Heading>Комментарии</Heading>
    <CommentsList data={data} />
  </Container>
);

export default Comments;
