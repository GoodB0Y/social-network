import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { RootState } from '../../redux-toolkit/store';
import {
  loadAllPosts,
  loadAllTags,
  addBookmark,
  removeBookmark,
  addLike,
  removeLike,
  addShare,
} from '../../redux-toolkit/postsSlice';
import { IDataPost } from '../../types/post';
import ITag from '../../types/tag';

import ErrorBlock from '../errorBlock';
import Loader from '../Loader';
import Article from './Article/Article';

const EmptyBlockNotes = styled.div`
  text-align: center;
  color: black;
  margin: 50px auto;
`;

interface StateProps {
  loading: boolean;
  error: null | Error;
}

interface DispatchProps {
  addBookmarkToPost: (postId: number) => void;
  removeBookmarkFromPost: (postId: number) => void;
  addLikeToPost: (postId: number) => void;
  removeLikeFromPost: (postId: number) => void;
  sharePost: (postId: number) => void;
}

interface NewsProps {
  data: IDataPost[] | null;
  showPostByTag?: (tag: string) => void;
}

type Props = StateProps & DispatchProps & NewsProps;

const mapStateToProps = (state: RootState): StateProps => ({
  loading: state.posts.loading,
  error: state.posts.error,
});

const mapDispatchToProps = {
  addBookmarkToPost: addBookmark,
  removeBookmarkFromPost: removeBookmark,
  addLikeToPost: addLike,
  removeLikeFromPost: removeLike,
  sharePost: addShare,
};

const ArticleList = ({
  data,
  loading,
  error,
  showPostByTag,
  addBookmarkToPost,
  removeBookmarkFromPost,
  addLikeToPost,
  removeLikeFromPost,
  sharePost,
}: Props) => {
  if (loading) return <Loader />;
  if (error) return <ErrorBlock errorMessage="Error occured with loading posts." />;
  if (!data || !data.length) return <EmptyBlockNotes>Ничего не найдено!</EmptyBlockNotes>;

  const articleList = data.map((postData) => (
    <Article
      key={postData.post.id}
      postData={postData}
      getPostsByTag={showPostByTag}
      addBookmarkToPost={addBookmarkToPost}
      removeBookmarkFromPost={removeBookmarkFromPost}
      addLikeToPost={addLikeToPost}
      removeLikeFromPost={removeLikeFromPost}
      sharePost={sharePost}
    />
  ));

  return <ul>{articleList}</ul>;
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);
