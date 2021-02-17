import React from 'react';
import styled from 'styled-components';

import { filters } from '../../common/Articles/menuItemsData';
import Articles from '../../common/Articles/Articles';
import Chip from '../../common/Chip';

const Wrapper = styled.div`
  background: #111111;
  padding: 100px 100px 100px 0;
`;

const Container = styled.div`
  position: relative;
  max-width: 1291px;
  display: flex;
  flex-direction: column;
  padding-left: 95px;
  padding-right: 95px;

  background: #ffffff;
  text-align: center;
  margin-right: auto;
  margin-left: auto;
  margin-top: 50px;
  border-radius: 15px 15px 0px 0px;
`;

const News = (): JSX.Element => {
  const { allFilter, dateFilter, popularFilter, tagsFilter } = filters;
  const currentFilterList = [allFilter, dateFilter, popularFilter, tagsFilter];

  return (
    <Wrapper>
      <Container>
        <Chip>Новости</Chip>
        <Articles filterList={currentFilterList} />
      </Container>
    </Wrapper>
  );
};

export default News;
