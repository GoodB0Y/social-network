import React from 'react';
import styled from 'styled-components';
import ITag from '../../../types/tag';

const Container = styled.div`
  width: 1000px;
  margin: 0 auto;
  padding: 50px 0;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  @media (max-width: 1900px) {
    width: 1000px;
  }
  @media (max-width: 1650px) {
    width: 700px;
  }
`;

const TagButton = styled.button`
  //width: content;
  padding: 10px 30px;
  margin: 10px;
  background-color: #ffffff;
  color: #ffb11b;
  border-radius: 5px;
  border: solid #ffb11b 1px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: #ffb11b;
    color: #fff;
  }
`;

type Props = {
  tags: ITag[] | null;
  getPostsByTag: (tagName: string) => void;
};

const TagCloud: React.FC<Props> = ({ tags, getPostsByTag }) => {
  if (!tags || tags?.length === 0) return <h1>Теги отсутствуют</h1>;
  return (
    <Container>
      {tags.map(({ id, text }) => (
        <TagButton key={id} type="button" onClick={(): void => getPostsByTag(text)}>
          {text}
        </TagButton>
      ))}
    </Container>
  );
};

export default TagCloud;
