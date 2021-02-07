import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { RootState } from '../../redux-toolkit/store';
import { IDataPost } from '../../types/post';

import ErrorBlock from '../errorBlock';
import Loader from '../Loader';
import Article from './Article/Article';

const EmptyBlockNotes = styled.div`
  text-align: center;
  color: black;
  margin: 50px auto;
`;

interface StateProps {
  loading?: boolean;
  error?: null | Error;
}

interface ParentsProps {
  data: IDataPost[] | null;
  showPostByTag?: (tag: string) => void;
}

type Props = StateProps & ParentsProps;

const mapStateToProps = (state: RootState): StateProps => ({
  loading: state.posts.loading,
  error: state.posts.error,
});

const ArticleList = ({ data, loading, error, showPostByTag }: Props) => {
  if (loading) return <Loader />;
  if (error) return <ErrorBlock errorMessage="Error occured with loading posts." />;
  if (!data || !data.length) return <EmptyBlockNotes>Ничего не найдено!</EmptyBlockNotes>;

  const articleList = data.map((postData) => (
    <Article key={postData.post.id} postData={postData} getPostsByTag={showPostByTag} />
  ));

  return <ul>{articleList}</ul>;
};

export default connect(mapStateToProps, null)(ArticleList);
