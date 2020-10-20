// eslint-disable-next-line
import React, { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { loadUser, loadUserPhotos, resetUser } from '../../redux-toolkit/userSlice';
import { loadPostsByUser } from '../../redux-toolkit/postsSlice';
import { RootState } from '../../redux-toolkit/store';
import Header from '../../common/header';
import PageWrapper from '../../common/pageWrapper';
import { MainContainer } from '../../common/styledComponents';
import UserInfoHeader from './UserInfoHeader';
import Wall from './Wall';
import ErrorBlock from '../../common/errorBlock';
import LoadingBlock from '../../common/loadingBlock';
import { StyledLoadingWrapped } from './styled';

const mapStateToProps = (state: RootState) =>
  ({
    userModel: state.user,
    currentUserId: state.currentUser.data?.userId,
  });

const mapDispatch = {
  loadUser,
  loadPostsByUser,
  loadUserPhotos,
  resetUser,
};
const connector = connect(mapStateToProps, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & { userId: number };

const Main: React.FC<Props> = ({
  loadUser: _loadUser,
  loadUserPhotos: _loadUserPhotos,
  loadPostsByUser: _loadPostsByUser,
  resetUser: _resetUser,
  userModel,
  currentUserId,
  userId,
}) => {
  useEffect(() => {
    _loadUser(userId);
    _loadPostsByUser(userId);
    _loadUserPhotos(userId);
    return () => {
      _resetUser();
    };
  }, [_loadUser, _loadPostsByUser, _loadUserPhotos, _resetUser, userId]);
  const renderContent = () => {
    if (userModel?.data) {
      return (
        <>
          <UserInfoHeader
            user={userModel?.data}
            isCurrentUser={currentUserId === userModel?.data?.userId}
          />
          <Wall
            user={userModel?.data}
            photos={userModel?.photos}
            isCurrentUser={currentUserId === userModel?.data?.userId}
          />
        </>
      );
    }
    if (userModel?.loading) {
      return (
        <StyledLoadingWrapped>
          <LoadingBlock />
        </StyledLoadingWrapped>
      );
    }
    return <ErrorBlock errorMessage={userModel?.error?.message} />;
  };
  return (
    <>
      <Header />
      <MainContainer>
        <PageWrapper messages={false}>{renderContent()}</PageWrapper>
      </MainContainer>
    </>
  );
};

export default connector(Main);
