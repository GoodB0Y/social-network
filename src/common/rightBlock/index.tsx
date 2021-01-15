import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactChild;
}

const RightBlockContainer = styled.div`
  background: #111;
  position: relative;
  padding-right: 23px;
  height: 100%;
  width: 100%;
  overflow: hidden;
  color: white;
  margin-top: 109px;
`;

const RightBlock: React.FC<Props> = (props: Props) => {
  const { children } = props;
  return <RightBlockContainer>{children}</RightBlockContainer>;
};

export default RightBlock;
