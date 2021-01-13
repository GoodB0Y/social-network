import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from '../header';
import LeftBlock from '../leftBlock';
import RightBlock from '../rightBlock';

const MainContainer = styled.div`
  display: flex;
  width: 100%;
  background: #111;
`;
const PageWrapper = ({ messages, children }) => (
  <>
    <Header />
    <MainContainer>
      <LeftBlock messages={messages} />
      <RightBlock>{children}</RightBlock>
    </MainContainer>
  </>
);

PageWrapper.defaultProps = {
  messages: false,
};

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  messages: PropTypes.bool,
};

export default PageWrapper;
