/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import SmoothCollapse from 'react-smooth-collapse';
import styled from 'styled-components';
import { RootState } from '../../../redux-toolkit/store';
import { loadCommentsByPost } from '../../../redux-toolkit/postsSlice';
import { addNewCommentToPost } from '../../../services/post-controller/post-controller';
import IComment, { ICreateComment } from '../../../types/comment';
import { IUser } from '../../../types/user';

import ErrorBlock from '../../../common/errorBlock';
import LoadingBlock from '../../../common/loadingBlock';
import UserInfo from '../common/UserInfo';
import CommentForm from './CommentForm';
import ShowMoreBtn from '../common/ShowMoreBtn';

interface StateProps {
    user: null | IUser;
}

interface DispatchProps {
    getComments: (id: number) => void;
}

type Props = StateProps & DispatchProps & {
    id: number;
    comments?: IComment[];
    loading: boolean;
    error: Error | null;
    showComments: boolean;
    setShowComments: () => void;
};

const mapStateToProps = (state: RootState): StateProps =>
  ({
    user: state.currentUser.data,
  });

const mapDispatchToProps = {
  getComments: loadCommentsByPost,
};

const Comments: React.FC<Props> = ({ id, user, comments, loading, error, getComments, showComments, setShowComments }): JSX.Element => {
  useEffect(() => { getComments(id); }, [id, getComments]);

  const renderComments = (): JSX.Element | JSX.Element[] => {
    if (loading) return (<LoadingBlock />);
    if (error) return (<ErrorBlock>Error occured with loading comments.</ErrorBlock>);
    return (
      <CommentsList>
        {
        comments?.map((item) => {
          const { userDto: { firstName, lastName, avatar }, lastRedactionDate, comment, id: commentId } = item;
          return (
            <CommentsItem key={commentId}>
              <UserInfo avatar={avatar} firstName={firstName} lastName={lastName} date={lastRedactionDate} />
              <Comment>
                {comment}
              </Comment>
            </CommentsItem>
          );
        })
        }
      </CommentsList>
    );
  };

  const submitNewComment = async (comment: string) => {
    const data: ICreateComment = {
      comment,
      userDto: user!,
    };
    await addNewCommentToPost(id, data!);
    await getComments(id);
  };

  return (
    <Container>
      <Title>Коментарии</Title>
      <SmoothCollapse expanded={showComments}>
        {renderComments()}
      </SmoothCollapse>
      <CommentForm avatar={user?.avatar} submitNewComment={submitNewComment} />
      <ShowMoreBtn
        changeIcon={showComments}
        heightHandler={setShowComments}
      />
    </Container>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Comments);

const Container = styled.div`
position: relative;
border-top: 1px solid #515151;
padding: 41px 47px 0 47px;
margin-top: 55px;
`;

const Title = styled.h2`
font-weight: 500;
color: #515151;
text-align: left;
`;

const CommentsList = styled.ul`
padding: 0;
margin: 41px 0 0 0;
`;

const CommentsItem = styled.li`
list-style-type: none;
display: flex
flex-direction: column;
justyfy-content: center;
align-items: flex-start;`;

const Comment = styled.p`
color: #000000;
text-align: justify;
margin-left: 94px;`;
