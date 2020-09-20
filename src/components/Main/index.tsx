// eslint-disable-next-line
import React, {useEffect, useCallback} from 'react';
import { connect } from 'react-redux';
import { loadUser, IUser } from '../../redux-toolkit/userSlice';
import { IStore } from '../../redux-toolkit/store';
import { Spin } from 'antd';

import Header from '../../common/header';
import PageWrapper from '../../common/pageWrapper';
import { MainContainer } from '../../common/styledComponents';
import UserInfoHeader from './UserInfoHeader';
import Wall from './Wall';

interface MainProps {
  loadUser: ( arg: number ) => void,
  user: IUser,
  loading: boolean,
  error: Error
}

const Main: React.FC<MainProps> = ({
  loadUser: _loadUser,
  user,
  loading,
  error
}: MainProps) => {
  useEffect(() => {
    _loadUser(2);
  }, [_loadUser]);
  const renderContent = useCallback(() => {
    if (!user) {
      return <Spin></Spin>
    }
    const profession = 'Программист на HTML';
    const lastStatus = 'online';
    const {
      firstName,
      lastName,
      avatar
    } = user;
    return (
    <>
      <UserInfoHeader 
        firstName={firstName}
        lastName={lastName}
        profession={profession}
        lastStatus={lastStatus}
        avatar={avatar}
      />
      <Wall />
    </>)
  }, [user]);

  return (
  <>
    <Header />
    <MainContainer>
        <PageWrapper messages={false}>
          {renderContent()}
        </PageWrapper>
    </MainContainer>
  </>
);
};

const mapStateToProps = (state:IStore) => ({
  user: state.user.data,
  loading: state.user.loading,
  error: state.user.error
})

const mapDispatchToProps = {
  loadUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
