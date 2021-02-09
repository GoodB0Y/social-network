import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

export const Container = styled.section`
  padding: 50px 0 45px 0;
  border-bottom: 1px solid #515151;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 100px;
  margin-bottom: 30px;
`;

export const ActionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 324px;
  margin-left: auto;
`;

export const Content = styled.article`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  position: relative;
  width: 100%;
  max-height: none;
  padding-right: 82px;
  overflow: hidden;
  color: #000000;
`;

export const Title = styled.div`
  line-height: 160%;
  margin: 0 auto 20px 0;
  font-weight: 600;
  font-size: 20px;
`;

export const OneArticle = styled(ReactMarkdown)`
  width: 100%;
  min-height: 120px;
  line-height: 165%;
  text-align: justify;
  font-size: 16px;
`;

export const TagList = styled.ul`
  display: flex;
  min-width: 175px;
  min-height: 30px;
  line-height: 165%;
  margin: 30px 0 0 0;
  padding: 0;
  align-content: center;
  font-size: 16px;
`;

export const TagItem = styled.li`
  list-style-type: none;
  cursor: pointer;
  color: #000;

  &:hover,
  &:active {
    transform: scale(1.05);
    color: #ffb11b;
  }

  &:focus {
    outline: none;
  }
`;
