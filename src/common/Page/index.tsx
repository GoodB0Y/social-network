import React from 'react';
import Header from '../header';
import LeftBlock from '../leftBlock';
import RightBlock from '../rightBlock';
import { MainContainer } from '../styledComponents';

type PageProps = { messages?: boolean; children?: React.ReactNode };

const Page = ({ messages = false, children }: PageProps): JSX.Element => (
  <>
    <Header />
    <MainContainer>
      <LeftBlock messages={messages} />
      <RightBlock>{children}</RightBlock>
    </MainContainer>
  </>
);

export default Page;
