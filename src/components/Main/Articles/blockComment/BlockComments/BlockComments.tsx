/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import {
  Wrapper,
  Title,
  CommentsEmpty,
} from './styles';

import { loadCommentsByPost } from '../../../../../redux-toolkit/postsSlice';
import Comment from '../Comment';
import ComponentInput from '../ComponentInput';
import IComment from '../../../../../types/comment';
import { RootState } from '../../../../../redux-toolkit/store';

const mapStateToProps = (state: RootState) => ({
  user: state?.user?.shownUser,
});

const mapDispatchToProps = {
  loadCommentsByPost,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type IBlockComments = PropsFromRedux & {
  comments?: IComment[];
  loading: boolean;
  error: null | Error;
  id: number;
  isOpen: boolean;
  setIsCommentsOpen?: (state: boolean) => void;
};

const BlockComments: React.FC<IBlockComments> = ({
  user,
  comments,
  loading,
  error,
  id: postId,
  isOpen,
  setIsCommentsOpen: setIsOpen,
  loadCommentsByPost: _loadCommentsByPost,
}) => {
  useEffect(() => {
    if (!comments) {
      _loadCommentsByPost(postId);
    }
  }, [_loadCommentsByPost, comments, postId]);
  const renderComments = () => {
    if (!comments) {
      return <CommentsEmpty>Комментариев нет. Будьте первым!</CommentsEmpty>;
    }
    return comments.map((item) => (
      <Comment key={item.id} comment={item} />
    ));
  };

  return (
    <Wrapper>
      <Title>Комментарии</Title>
      { renderComments() }
      <ComponentInput setIsOpen={setIsOpen} isOpen={isOpen} postId={postId} user={user} />
    </Wrapper>
  );
};

export default connector(BlockComments);
