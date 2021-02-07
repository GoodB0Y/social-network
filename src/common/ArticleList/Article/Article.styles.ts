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
  width: 324px;
  margin-left: auto;
  display: flex;
  justify-content: space-between;
`;

export const Content = styled.article`
  position: relative;
  width: 100%;
  padding-right: 82px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  overflow: hidden;
  max-height: none;
  color: #000000;
`;

export const Title = styled.div`
  margin: 0 auto 20px 0;
  font-weight: 600;
  font-size: 20px;
  line-height: 160%;
`;

export const OneArticle = styled(ReactMarkdown)`
  width: 100%;
  min-height: 120px;
  font-size: 16px;
  line-height: 165%;
  text-align: justify;
`;

export const TagList = styled.ul`
  margin: 30px 0 0 0;
  padding: 0;
  display: flex;
  min-width: 175px;
  min-height: 30px;
  align-content: center;
  font-size: 16px;
  line-height: 165%;
`;

export const TagItem = styled.li`
  list-style-type: none;
  color: #000;
  cursor: pointer;
  &:hover,
  &:active {
    transform: scale(1.05);
    color: #ffb11b;
  }
  &:focus {
    outline: none;
  }
`;
