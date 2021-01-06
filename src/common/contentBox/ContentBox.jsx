import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Box = styled.div`
  position: relative;
  background-color: #ffffff;
  border-radius: 15px;
  margin-top: 150px;
  padding: 85px;
  color: #000000;
  max-width: 1291px;
`;

const Headline = styled.h1`
  position: absolute;
  display: inline-block;
  background: #ffb11b;
  border-radius: 15px;
  padding: 60px 80px;
  margin: 0;
  top: -90px;
`;

const ContentBox = ({ headline, children }) => (
  <Box>
    <Headline>{headline}</Headline>
    {children}
  </Box>
);

export default ContentBox;

ContentBox.defaultProps = {
  headline: '',
  children: [],
};

ContentBox.propTypes = {
  headline: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.object,
};
