import React, { useState } from 'react';
import * as Scroll from 'react-scroll';
import SmoothCollapse from 'react-smooth-collapse';
import { connect } from 'react-redux';

import { IDataPost } from '../../../types/post';
import {
  addBookmark,
  removeBookmark,
  addLike,
  removeLike,
  addShare,
} from '../../../redux-toolkit/postsSlice';

import UserInfo from '../UserInfo/UserInfo';
import ActionButton from '../ActionButton/ActionButton';
import MediaContent from '../MediaContent/MediaContent';
import ShowMoreBtn from '../ShowMoreBtn';
import Comments from '../Comments/Comments';

import {
  Container,
  ActionsWrapper,
  Header,
  Content,
  Title,
  OneArticle,
  TagList,
  TagItem,
} from './Article.styles';

const { Element } = Scroll;
const { scroller } = Scroll;

type Props = {
  postData: IDataPost;
  getPostsByTag?: (tagName: string) => void;
  addBookmarkToPost: (postId: number) => void;
  removeBookmarkFromPost: (postId: number) => void;
  addLikeToPost: (postId: number) => void;
  removeLikeFromPost: (postId: number) => void;
  sharePost: (postId: number) => void;
};

const mapDispatchToProps = {
  addBookmarkToPost: addBookmark,
  removeBookmarkFromPost: removeBookmark,
  addLikeToPost: addLike,
  removeLikeFromPost: removeLike,
  sharePost: addShare,
};

const Article = ({
  postData,
  getPostsByTag,
  addBookmarkToPost,
  removeBookmarkFromPost,
  addLikeToPost,
  removeLikeFromPost,
  sharePost,
}: Props): JSX.Element => {
  const { post, comments, loading, error } = postData;
  const {
    id,
    firstName,
    lastName,
    avatar,
    persistDate,
    commentAmount,
    isLiked,
    isBookmarked,
    isShared,
    shareAmount,
    likeAmount,
    bookmarkAmount,
    title,
    text,
    media,
    tags,
  } = post;
  const [showContent, setShowContent] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const SmoothCollapseSettings = {
    expanded: showContent,
    heightTransition: '.70s ease',
    collapsedHeight: '200px',
  };

  const toggleLikes = () => {
    if (isLiked) return removeLikeFromPost(id);
    return addLikeToPost(id);
  };

  const toggleBookmarks = () => {
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

  const showBlockComment = (): void => {
    setShowComments((prev) => !prev);
  };

  return (
    <Container>
      <Header>
        <UserInfo avatar={avatar} firstName={firstName} lastName={lastName} date={persistDate} />
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
      </Header>

      <Content>
        <Title>{title}</Title>

        <SmoothCollapse {...SmoothCollapseSettings}>
          <OneArticle>{text}</OneArticle>
          <MediaContent media={media} />
        </SmoothCollapse>

        <ShowMoreBtn
          changeIcon={showContent}
          heightHandler={(): void => setShowContent((prev) => !prev)}
        />
      </Content>

      <TagList>
        {tags?.map((tag) => (
          <TagItem
            key={tag.id}
            onClick={(): void => {
              if (getPostsByTag) getPostsByTag(tag.text);
            }}
          >
            {`#${tag.text} `}
          </TagItem>
        ))}
      </TagList>

      <Element name={id.toString()}>
        <Comments
          id={id}
          comments={comments}
          loading={loading}
          error={error}
          showComments={showComments}
          setShowComments={showBlockComment}
        />
      </Element>
    </Container>
  );
};

export default connect(null, mapDispatchToProps)(Article);
