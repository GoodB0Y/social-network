import React from 'react';
import styled from 'styled-components';

import { menuItemsNames } from '../../common/ArticlesMenu/menuItemsData';
import ArticlesMenu from '../../common/ArticlesMenu/ArticlesMenu';

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

const Label = styled.div`
  position: absolute;
  top: -100px;
  width: 299px;
  height: 155px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffb11b;
  border-radius: 15px;

  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 39px;
  color: #000000;
`;

const News = (): JSX.Element => {
  const { all, date, popular, tags } = menuItemsNames;

  return (
    <Wrapper>
      <Container>
        <Label>Новости</Label>
        <ArticlesMenu itemsNames={[all, date, popular, tags]} />
      </Container>
    </Wrapper>
  );
};

export default News;
