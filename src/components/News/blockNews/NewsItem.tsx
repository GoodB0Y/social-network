import React, { useState } from 'react';
import * as Scroll from 'react-scroll';
import ReactMarkdown from 'react-markdown';
import SmoothCollapse from 'react-smooth-collapse';
import styled from 'styled-components';
import { IDataPost } from '../../../types/post';

import UserInfo from '../common/UserInfo';
import ActionButton from '../common/ActionButton';
import MediaContent from './MediaContent';
import ShowMoreBtn from '../common/ShowMoreBtn';
import Comments from '../blockComments/Comments';

const { Element } = Scroll;
const { scroller } = Scroll;

const Container = styled.section`
  padding: 50px 0 45px 0;
  border-bottom: 1px solid #515151;
`;

const NewsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 100px;
  margin-bottom: 30px;
`;

const ActionsWrapper = styled.div`
  width: 324px;
  margin-left: auto;
  display: flex;
  justify-content: space-between;
`;

const NewsContent = styled.article`
  position: relative;
  width: 100%;
  padding-right: 82px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  overflow: hidden;
  max-height: none;
  color: #000000;
`;

const NewsTitle = styled.div`
  margin: 0 auto 20px 0;
  font-weight: 600;
  font-size: 20px;
  line-height: 160%;
`;

const Article = styled(ReactMarkdown)`
  width: 100%;
  font-size: 16px;
  line-height: 165%;
  text-align: justify;
`;

const TagsList = styled.ul`
  margin: 30px 0 0 0;
  padding: 0;
  display: flex;
  min-width: 175px;
  min-height: 30px;
  align-content: center;
  font-size: 16px;
  line-height: 165%;
`;

const TagItem = styled.li`
  list-style-type: none;
  color: #000;
  cursor: pointer;
  &:hover,
  &:active {
    transform: scale(1.05);
    color: #ffb11b;
  }
  &:focus {
    outline: none;
  }
`;

type Props = {
  postData: IDataPost;
  getPostsByTag: (tagName: string) => void;
  addBookmarkToPost: (postId: number) => void;
  removeBookmarkFromPost: (postId: number) => void;
  addLikeToPost: (postId: number) => void;
  removeLikeFromPost: (postId: number) => void;
  sharePost: (postId: number) => void;
};

const NewsItem = ({
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
      <NewsHeader>
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
      </NewsHeader>

      <NewsContent>
        <NewsTitle>{title}</NewsTitle>

        <SmoothCollapse {...SmoothCollapseSettings}>
          <Article>{text}</Article>
          <MediaContent media={media} />
        </SmoothCollapse>

        <ShowMoreBtn
          changeIcon={showContent}
          heightHandler={(): void => setShowContent((prev) => !prev)}
        />
      </NewsContent>

      <TagsList>
        {tags?.map((tag) => (
          <TagItem key={tag.id} onClick={(): void => getPostsByTag(tag.text)}>
            {`#${tag.text} `}
          </TagItem>
        ))}
      </TagsList>

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

export default NewsItem;
