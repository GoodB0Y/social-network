import React from 'react';
import { Avatar } from 'antd';
import IComment from '../../../../../types/comment';
import { Wrapper, UserInfo, TitleWrap, Title, SubtitleTime, Text } from './styles';

interface Props {
  comment: IComment;
}

const Comment = ({ comment }: Props): JSX.Element => {
  const {
    userDto: { firstName, lastName, avatar },
    persistDate,
    comment: text,
  } = comment;

  return (
    <Wrapper>
      <UserInfo>
        <Avatar src={avatar} />
        <TitleWrap>
          <Title>{`${firstName} ${lastName}`}</Title>
          <SubtitleTime>{persistDate}</SubtitleTime>
        </TitleWrap>
      </UserInfo>
      <Text>{text}</Text>
    </Wrapper>
  );
};

export default Comment;
