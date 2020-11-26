/* eslint-disable max-len */
/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import SmoothCollapse from 'react-smooth-collapse';
import styled from 'styled-components';
import { IDataPost } from '../../../types/post';

import { addLikeToPost, addBookmarkToPost } from '../../../services/post-controller';

import UserInfo from '../common/UserInfo';
import ActionButton from '../common/ActionButton';
import MediaContent from './MediaContent';
import ShowMoreBtn from '../common/ShowMoreBtn';
import Comments from '../blockComments/Comments';

const Scroll = require('react-scroll');

const { Element } = Scroll;
const { scroller } = Scroll;

type Props = {
  postData: IDataPost;
  getPostsByTag: (tagName: string) => void;
};

const NewsItem: React.FC<Props> = ({ postData, getPostsByTag }) => {
  /* const { post, comments, loading, error } = postData;
  const { id, firstName, lastName, avatar, persistDate, commentAmount, isLiked, isBookmarked, isShared, shareAmount, likeAmount, bookmarkAmount, title, text, media, tags } = post; */
  const [showContent, setShowContent] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const SmoothCollapseSettings = {
    expanded: showContent,
    heightTransition: '.70s ease',
    collapsedHeight: '200px',
  };

  /* const renderTags = (): JSX.Element =>
    (
      <TagsList>
        {tags?.map((tag) =>
          (
            <TagItem
              key={tag.id}
              onClick={(): void =>
                getPostsByTag(tag.text)}
            >
              {`#${tag.text} `}
            </TagItem>
          ))}
      </TagsList>
    );

  const toggleLikes = (idx: number) => {
    if (isLiked) return deleteLikeToPost(idx);
    return addLikeToPost(idx);
  };

  const toggleBookmarks = (idx: number) => {
    if (isBookmarked) return deleteBookmarkToPost(idx);
    return addBookmarkToPost(idx);
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
    setShowComments((prev) =>
      !prev);
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
            handler={() =>
              toggleBookmarks(id)}
          />

          <ActionButton
            name="like"
            value={likeAmount}
            active={isLiked}
            handler={() =>
              toggleLikes(id)}
          />

          <ActionButton
            name="comments"
            value={commentAmount}
            active={commentAmount! > 0}
            handler={scrollToComments}
          />

          <ActionButton
            name="share"
            value={shareAmount}
            active={isShared}
            handler={(): void => { console.log('ЖДЕМ ЭНДПОИНТ НА РЕПОСТЫ'); }}
          />
        </ActionsWrapper>
      </NewsHeader>

      <NewsContent>
        <NewsTitle>{title}</NewsTitle>

        <SmoothCollapse {...SmoothCollapseSettings}>
          <Article>
            {text}
          </Article>
          <MediaContent media={media} />
        </SmoothCollapse>

        <ShowMoreBtn
          changeIcon={showContent}
          heightHandler={(): void =>
            setShowContent((prev) =>
              !prev)}
        />
      </NewsContent>
      {renderTags()}

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
  ); */
  return <h1>!!!!</h1>;
};

export default NewsItem;

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
  max-height: auto;
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
  text-align: justify;`;

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
  &:hover, &:active {
    transform: scale(1.05);
    color: #ffb11b;    
  }
  &: focus {
    outline: none;
  }
`;
