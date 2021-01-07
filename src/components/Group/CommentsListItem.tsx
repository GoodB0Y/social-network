import React from 'react';
import styled from 'styled-components';
import { CommentsListProps } from '../../types/group';
import avatar from '../../img/icons/mock-avatar.svg';

const Container = styled.div`
  display: flex;
`;

const AvatarContainer = styled.div`
  align-self: center;
  display: flex;
  width: 85px;
  border-radius: 50%;
  margin-right: 30px;
  margin-bottom: auto;
`;

const AvatarImg = styled.img`
  display: block;
  width: 85px;
  height: 85px;
  object-fit: cover;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Author = styled.div`
  margin-bottom: 5px;

  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
`;

const Date = styled.div`
  margin-bottom: 20px;

  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;

  color: #515151;
`;

const Text = styled.div`
  text-align: left;

  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 165%;
  color: #000000;
`;

const CommentsList: React.FC<CommentsListProps> = ({ data: { author, date, text } }) => (
  <Container>
    <AvatarContainer>
      <AvatarImg src={avatar} alt="Aватар" />
    </AvatarContainer>
    <Content>
      <Author>{author}</Author>
      <Date>{date.toLocaleString()}</Date>
      <Text>{text}</Text>
    </Content>
  </Container>
);

export default CommentsList;
