import styled from 'styled-components';

export const SingleGroupContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 31px 0px;
  align-items: center;
  border-bottom: 1px solid #b2b2b2;
`;

export const GroupDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 30px;
  justify-self: flex-start;
  padding-top: 8px;
`;
export const GroupTitle = styled.span`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 8px;
  color: #000;
`;
export const ItemLink = styled.a`
  font-family: Montserrat, serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #000;
  text-decoration: none;
  &:hover {
    color: #ffb11b;
  }
`;

export const GroupCategory = styled.span`
  color: #515151;
  font-size: 16px;
  margin-bottom: 4px;
`;
export const GroupFollowers = styled.span`
  color: #515151;
  font-size: 16px;
`;
export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
