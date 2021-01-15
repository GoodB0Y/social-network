import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Sidebar from '../sidebar/Sidebar';
import ModalChat from '../modal-chat';

const LeftBlockContainer = styled.div`
  margin-top: 109px;
  background: #111;
  min-height: 100%;
  flex-basis: 40%;
  padding: 23px;
  color: white;
  display: flex;
  flex-direction: column;
`;

const LeftBlock = ({ messages }) => (
  <LeftBlockContainer>
    <Sidebar />
    {!messages && <ModalChat />}
  </LeftBlockContainer>
);
LeftBlock.defaultProps = {
  messages: false,
};

LeftBlock.propTypes = {
  messages: PropTypes.bool,
};

export default LeftBlock;
