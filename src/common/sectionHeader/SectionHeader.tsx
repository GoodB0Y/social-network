import React from 'react';
import styled from 'styled-components';

const Headline = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 37px;
  vertical-align: middle;
  color: #000;
  white-space: break-spaces;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 67px;
  margin: 65px 0;
`;

interface ISectionHeader {
  headline: string;
  children?: (React.ReactElement | undefined)[] | React.ReactElement;
}

const SectionHeader: React.FC<ISectionHeader> = ({ headline, children }) => (
  <Container>
    <Headline>{headline}</Headline>
    {children || null}
  </Container>
);

export default SectionHeader;
