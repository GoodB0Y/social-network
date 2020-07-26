import React from 'react';

import Header from '../../common/header';
import LeftBlock from '../../common/leftBlock';
import RightBlock from '../../common/rightBlock';
import { MainContainer } from '../../common/styledComponents';
import UserInfoHeader from './UserInfoHeader';
import Wall from './Wall';

function Main() {
  return (
    <>
      <Header />
      <MainContainer>
        <LeftBlock />
        <RightBlock>
          <UserInfoHeader />
          <Wall />
        </RightBlock>
      </MainContainer>
    </>
  );
}

export default Main;
