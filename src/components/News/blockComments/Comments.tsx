/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import SmoothCollapse from 'react-smooth-collapse';
import styled from 'styled-components';
import { RootState } from '../../../redux-toolkit/store';
import { loadCommentsByPost /*  addNewComment */ } from '../../../redux-toolkit/postsSlice';

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
    /* addComment: (postId: number, comment: ICreateComment) => void; */
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
  /* addComment: addNewComment, */
};

const Comments: React.FC<Props> = ({
  id,
  user,
  comments,
  loading,
  error,
  getComments,
  showComments,
  setShowComments,
  /*  addComment, */ }): JSX.Element => {
  useEffect(() => { getComments(id); }, [id, getComments]);

  const renderComments = (): JSX.Element | JSX.Element[] => {
    if (loading || !comments) return (<LoadingBlock />);
    if (error) return (<ErrorBlock>Error occured with loading comments.</ErrorBlock>);
    return comments?.map((item) => {
      const { userDto: { firstName, lastName, avatar }, lastRedactionDate, comment, id: commentId } = item;
      return (
        <CommentsItem key={commentId}>
          <UserInfo avatar={avatar} firstName={firstName} lastName={lastName} date={lastRedactionDate} />
          <Comment>
            {comment}
          </Comment>
        </CommentsItem>
      );
    });
  };

  const submitNewComment = async (comment: string) => {
    const data: ICreateComment = {
      comment,
      userDto: user!,
    };
    console.log('СЛОМАЛСЯ ЭНДПОИНТ НА ОТПРАВКУ НОВОГО КОММЕНТАРИЯ');
    /* await addComment(id, data!); */
    await getComments(id);
  };

  return (
    <Container>
      <Title>Комментарии</Title>
      <CommentsList as={SmoothCollapse} expanded={showComments}>
        {renderComments()}
      </CommentsList>
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
