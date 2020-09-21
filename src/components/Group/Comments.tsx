import React from 'react';
import styled from 'styled-components';
import CommentsList from './CommentsList';

interface Icomment {
  avatar: string;
  author: string;
  date: Date;
  text: string;
}

interface Idata {
  data: Icomment[];
}

const Comments = ({ data }: Idata) => {
  return (
    <Container>
      <Heading>Комментарии</Heading>
      <CommentsList data={data} />
    </Container>
  );
};

const Container = styled.div`
  max-height: 400px;
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
export default Comments;
