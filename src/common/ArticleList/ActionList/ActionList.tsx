import React from 'react';
import { connect } from 'react-redux';
import * as Scroll from 'react-scroll';

import { IPost } from '../../../types/post';
import {
  addBookmark,
  removeBookmark,
  addLike,
  removeLike,
  addShare,
} from '../../../redux-toolkit/postsSlice';

import { ActionsWrapper, Icon, Button } from './ActionList.styles';

const { scroller } = Scroll;

const mapDispatchToProps = {
  addBookmarkToPost: addBookmark,
  removeBookmarkFromPost: removeBookmark,
  addLikeToPost: addLike,
  removeLikeFromPost: removeLike,
  sharePost: addShare,
};

interface ParentsProps {
  post: IPost;
  setShowComments: (value: boolean) => void;
}

interface DispatchProps {
  addBookmarkToPost: (postId: number) => void;
  removeBookmarkFromPost: (postId: number) => void;
  addLikeToPost: (postId: number) => void;
  removeLikeFromPost: (postId: number) => void;
  sharePost: (postId: number) => void;
}

type ListProps = ParentsProps & DispatchProps;

type ButtonProps = {
  name: string;
  value: number | null;
  active: boolean | null;
  handler: () => void;
};

const ActionButton = ({ name, value, active, handler }: ButtonProps): JSX.Element | null => {
  let path;
  switch (name) {
    case 'bookmark':
      path =
        'M17.1429 0.5H2.85714C1.28571 0.5 0.014286 1.958 0.014286 3.74L0 29.66L10 24.8L20 29.66V3.74C20 1.958 18.7143 0.5 17.1429 0.5ZM17.1429 24.8L10 21.2684L2.85714 24.8V3.74H17.1429V24.8Z';
      break;
    case 'like':
      path =
        'M21.75 0C19.14 0 16.635 1.32425 15 3.41689C13.365 1.32425 10.86 0 8.25 0C3.63 0 0 3.9564 0 8.99183C0 15.1717 5.1 20.2071 12.825 27.8583L15 30L17.175 27.842C24.9 20.2071 30 15.1717 30 8.99183C30 3.9564 26.37 0 21.75 0ZM15.15 25.4223L15 25.5858L14.85 25.4223C7.71 18.376 3 13.7166 3 8.99183C3 5.72207 5.25 3.26975 8.25 3.26975C10.56 3.26975 12.81 4.88828 13.605 7.12807H16.41C17.19 4.88828 19.44 3.26975 21.75 3.26975C24.75 3.26975 27 5.72207 27 8.99183C27 13.7166 22.29 18.376 15.15 25.4223Z';
      break;
    case 'comments':
      path =
        'M30.0691 3.86112C30.0691 2.25696 28.7712 0.944458 27.167 0.944458H3.83366C2.22949 0.944458 0.916992 2.25696 0.916992 3.86112V21.3611C0.916992 22.9653 2.22949 24.2778 3.83366 24.2778H24.2503L30.0837 30.1111L30.0691 3.86112ZM24.2503 18.4445H6.75033V15.5278H24.2503V18.4445ZM24.2503 14.0695H6.75033V11.1528H24.2503V14.0695ZM24.2503 9.69446H6.75033V6.77779H24.2503V9.69446Z';
      break;
    case 'share':
      path =
        'M18.3333 7.46667V0L30 13.0667L18.3333 26.1333V18.48C10 18.48 4.16667 21.4667 0 28C1.66667 18.6667 6.66667 9.33333 18.3333 7.46667Z';
      break;
    default:
      return null;
  }

  return (
    <Button onClick={handler}>
      <Icon active={active}>
        <path d={path} />
      </Icon>
      {value || 0}
    </Button>
  );
};

const ActionList = ({
  post,
  setShowComments,
  addBookmarkToPost,
  removeBookmarkFromPost,
  addLikeToPost,
  removeLikeFromPost,
  sharePost,
}: ListProps): JSX.Element => {
  const {
    id,
    commentAmount,
    isLiked,
    isBookmarked,
    isShared,
    shareAmount,
    likeAmount,
    bookmarkAmount,
  } = post;

  const toggleLikes = (): void => {
    if (isLiked) return removeLikeFromPost(id);
    return addLikeToPost(id);
  };

  const toggleBookmarks = (): void => {
    if (isBookmarked) return removeBookmarkFromPost(id);
    return addBookmarkToPost(id);
  };

  const toggleShared = (): void => {
    if (isShared) return console.log('НЕОБХОДИМ НОВЫЙ ЭНДПОИНТ НА УДАЛЕНИЕ ИЗ РЕПОСТОВ');
    return sharePost(id);
  };

  const scrollToComments = (): void => {
    scroller.scrollTo(id, {
      duration: 1000,
      delay: 10,
      smooth: true,
      offset: -100,
    });
    setShowComments(true);
  };

  return (
    <ActionsWrapper>
      <ActionButton
        name="bookmark"
        value={bookmarkAmount}
        active={isBookmarked}
        handler={toggleBookmarks}
      />

      <ActionButton name="like" value={likeAmount} active={isLiked} handler={toggleLikes} />

      <ActionButton
        name="comments"
        value={commentAmount}
        active={commentAmount ? commentAmount > 0 : null}
        handler={scrollToComments}
      />

      <ActionButton name="share" value={shareAmount} active={isShared} handler={toggleShared} />
    </ActionsWrapper>
  );
};

export default connect(null, mapDispatchToProps)(ActionList);
