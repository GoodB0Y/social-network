import React, { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Wrapper, Title, CommentsEmpty } from './styles';

import { loadCommentsByPost } from '../../../../../redux-toolkit/postsSlice';
import Comment from '../Comment';
import ComponentInput from '../ComponentInput';
import IComment from '../../../../../types/comment';
import { RootState } from '../../../../../redux-toolkit/store';

const mapStateToProps = (state: RootState) => ({
  user: state?.user?.data,
  currentUser: state?.currentUser?.data,
});

const mapDispatchToProps = {
  loadCommentsByPost,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type IBlockComments = PropsFromRedux & {
  comments?: IComment[];
  id: number;
  isOpen: boolean;
  setIsCommentsOpen: (state: boolean) => void;
};

const renderComments = (comments: IComment[] | undefined) => {
  if (!comments || !comments.length) {
    return <CommentsEmpty>Комментариев нет. Будьте первым!</CommentsEmpty>;
  }
  return comments.map((item) => <Comment key={item.id} comment={item} />);
};

const BlockComments: React.FC<IBlockComments> = ({
  currentUser,
  comments,
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

  return (
    <Wrapper>
      <Title>Комментарии</Title>
      {renderComments(comments)}
      <ComponentInput setIsOpen={setIsOpen} isOpen={isOpen} postId={postId} user={currentUser} />
    </Wrapper>
  );
};

export default connector(BlockComments);
