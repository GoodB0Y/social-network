import React, { useState } from 'react';
import * as Scroll from 'react-scroll';
import SmoothCollapse from 'react-smooth-collapse';

import { IDataPost } from '../../../types/post';

import UserInfo from '../UserInfo/UserInfo';
import ActionList from '../ActionList/ActionList';
import MediaContent from '../MediaContent/MediaContent';
import ShowMoreBtn from '../ShowMoreBtn';
import Comments from '../Comments/Comments';

import { Container, Header, Content, Title, OneArticle, TagList, TagItem } from './Article.styles';

const { Element } = Scroll;

type Props = {
  postData: IDataPost;
  getPostsByTag?: (tagName: string) => void;
};

const Article = ({ postData, getPostsByTag }: Props): JSX.Element => {
  const { post, comments, loading, error } = postData;
  const { id, firstName, lastName, avatar, persistDate, title, text, media, tags } = post;
  const [showContent, setShowContent] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const SmoothCollapseSettings = {
    expanded: showContent,
    heightTransition: '.70s ease',
    collapsedHeight: '200px',
  };

  const showBlockComment = (): void => {
    setShowComments((prev) => !prev);
  };

  return (
    <Container>
      <Header>
        <UserInfo avatar={avatar} firstName={firstName} lastName={lastName} date={persistDate} />
        <ActionList post={post} setShowComments={setShowComments} />
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

export default Article;
