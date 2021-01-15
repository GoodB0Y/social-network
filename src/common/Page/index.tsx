import React from 'react';
import styled from 'styled-components';
import Header from '../header';
import LeftBlock from '../leftBlock';
import RightBlock from '../rightBlock';

type PageProps = { messages?: boolean; children?: React.ReactNode };

const MainContainer = styled.div`
  display: flex;
  width: 100%;
  background: #111;
`;
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
