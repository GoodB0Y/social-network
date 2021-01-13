/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useState, useCallback } from 'react';
import SmoothCollapse from 'react-smooth-collapse';
import BlockComments from '../../blockComment/BlockComments/BlockComments';
import Loader from '../../../../../common/Loader';
import { IDataPost } from '../../../../../types/post';
import {
  WrapperNote,
  UserInfo,
  Avatar,
  TitleWrap,
  Title,
  SubtitleTime,
  UserActions,
  Action,
  ActionAddNote,
  ActionLike,
  ActionComment,
  ActionRepost,
  CountAction,
  Wrapper,
  TitleText,
  TextWithMarkdown,
  TagsList,
  BtnOpenNote,
  TagItem,
  StyledLoadingBlock,
  NoteErrorBlock,
} from './styles';
import MediaContainer from '../../../../../common/mediaContainer';

interface INote {
  dataPost: IDataPost;
}

const Note: React.FC<INote> = ({ dataPost }: INote) => {
  const { post, comments, loading, error } = dataPost;
  const [isOpen, setIsOpen] = useState(false);
  const [isCommentsOpen, setIsCommentsOpen] = useState(Boolean(comments));
  const revertOpen = useCallback(() => setIsOpen((_isOpen) => !_isOpen), [setIsOpen]);
  const revertCommentsOpen = useCallback(() => setIsCommentsOpen((_isOpen) => !_isOpen), [
    setIsCommentsOpen,
  ]);
  const renderState = useCallback(() => {
    if (loading) {
      return (
        <StyledLoadingBlock>
          <Loader size={60} />
        </StyledLoadingBlock>
      );
    }
    if (error) {
      return <NoteErrorBlock> Что-то пошло не так... </NoteErrorBlock>;
    }
    return null;
  }, [loading, error]);
  const {
    firstName,
    lastName,
    avatar,
    title,
    text,
    likeAmount,
    commentAmount,
    shareAmount,
    bookmarkAmount,
    persistDate,
    tags,
  } = post;

  return (
    <>
      <WrapperNote>
        <UserInfo>
          <Avatar src={avatar} />
          <TitleWrap>
            <Title>{`${firstName} ${lastName}`}</Title>
            <SubtitleTime>{persistDate}</SubtitleTime>
          </TitleWrap>
        </UserInfo>
        <UserActions>
          <Action>
            <ActionAddNote />
            <CountAction>{bookmarkAmount || 0}</CountAction>
          </Action>
          <Action>
            <ActionLike />
            <CountAction>{likeAmount || 0}</CountAction>
          </Action>
          <Action>
            <ActionComment onClick={revertCommentsOpen} />
            <CountAction>{commentAmount || 0}</CountAction>
            {renderState()}
          </Action>
          <Action>
            <ActionRepost />
            <CountAction>{shareAmount || 0}</CountAction>
          </Action>
        </UserActions>
      </WrapperNote>
      <Wrapper>
        <TitleText>{title}</TitleText>
        <SmoothCollapse expanded={isOpen} collapsedHeight="200px" heightTransition=".5s">
          <TextWithMarkdown $isOpen={isOpen}>{text}</TextWithMarkdown>
          <MediaContainer media={post?.media} postId={post.id} />
        </SmoothCollapse>
        <BtnOpenNote $isOpen={isOpen} onClick={revertOpen} />
        <TagsList>
          {tags?.map((item) => {
            if (!item?.id || !item?.text) {
              return null;
            }
            return <TagItem key={item.id}>{item.text}</TagItem>;
          })}
        </TagsList>

        <SmoothCollapse expanded={isCommentsOpen} heightTransition=".5s">
          <BlockComments
            isOpen={isCommentsOpen}
            setIsCommentsOpen={setIsCommentsOpen}
            id={post.id}
            comments={comments}
          />
        </SmoothCollapse>
      </Wrapper>
    </>
  );
};

export default Note;
