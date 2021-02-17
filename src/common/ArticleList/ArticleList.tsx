import React from 'react';
import styled from 'styled-components';
import { connect, ConnectedProps } from 'react-redux';

import { RootState } from '../../redux-toolkit/store';
import { IDataPost } from '../../types/post';

import ErrorBlock from '../errorBlock';
import Loader from '../Loader';
import Article from './Article/Article';

const EmptyBlockNotes = styled.div`
  margin: 50px auto;
  text-align: center;
  color: black;
`;

const mapStateToProps = (state: RootState): StateProps => ({
  loading: state.posts.loading,
  error: state.posts.error,
});

const connector = connect(mapStateToProps);

interface StateProps {
  loading: boolean;
  error: null | Error;
}

interface ParentProps {
  data: IDataPost[] | null;
  showPostByTag?: (tag: string) => void;
}

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = StateProps & ParentProps & PropsFromRedux;

const ArticleList = ({ data, loading, error, showPostByTag }: Props): JSX.Element => {
  if (loading) return <Loader />;
  if (error) return <ErrorBlock errorMessage="Error occured with loading posts." />;
  if (!data || !data.length) return <EmptyBlockNotes>Ничего не найдено!</EmptyBlockNotes>;

  const articleList = data.map((postData) => (
    <Article key={postData.post.id} postData={postData} getPostsByTag={showPostByTag} />
  ));

  return <>{articleList}</>;
};

export default connector(ArticleList);
