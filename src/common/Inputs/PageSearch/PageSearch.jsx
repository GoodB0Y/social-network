import styled from 'styled-components';
import PropTypes from 'prop-types';
import React from 'react';

import SearchIcon from '../../../assets/img/icons/search.svg';

const SearchBlock = styled.div`
  display: flex;
  font-size: 16px;
  line-height: 20px;
  align-items: center;
  position: relative;
  min-width: 100%;
  border-top: 1px solid #b3b3b3;
  border-bottom: 1px solid #b3b3b3;
  &::after {
    top: 49px;
    right: 0;
    position: absolute;
    height: 30px;
    width: 30px;
    background-color: #515151;
    mask-image: url(${SearchIcon});
    mask-size: cover;
    content: '';
  }
`;

const SearchInput = styled.input`
  color: #515151;
  min-width: 100%;
  padding-right: 30px;
  margin: 53px 0px 57px 0px;
  border: none;
  outline: none;
  font-size: 16px;
  line-height: 20px;
  position: relative;
  &:hover {
    cursor: text;
  }
`;

const PageSearchInput = ({ action, placeholder, defaultValue }) => (
  <SearchBlock>
    <SearchInput
      defaultValue={defaultValue}
      placeholder={placeholder}
      onChange={action}
      nostyle="true"
    />
  </SearchBlock>
);

PageSearchInput.defaultProps = {
  defaultValue: '',
  placeholder: '',
  /* eslint-disable @typescript-eslint/no-empty-function */
  action: () => {},
};

PageSearchInput.propTypes = {
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
  action: PropTypes.func,
};

export default PageSearchInput;
