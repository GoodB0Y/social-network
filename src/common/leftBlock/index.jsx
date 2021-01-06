import React from 'react';
import PropTypes from 'prop-types';

import { LeftBlockContainer } from '../styledComponents';
import Sidebar from '../sidebar/Sidebar';
import ModalChat from '../modal-chat';

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
