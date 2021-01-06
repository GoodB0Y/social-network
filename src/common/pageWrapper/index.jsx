import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header';
import LeftBlock from '../leftBlock';
import RightBlock from '../rightBlock';
import { MainContainer } from '../styledComponents';

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
