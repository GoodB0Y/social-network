import styled from 'styled-components';
import searchLogo from '../../icons/search-logo.svg';

export const Wrapper = styled.div`
  border-bottom: 1px solid #515151;
  font-family: Montserrat, serif;
  font-style: normal;
`;
export const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;
  border-bottom: 1px solid #515151;
`;
export const Menu = styled.ul`
  display: flex;
  align-items: center;
  padding: 0;
  margin-bottom: 61px;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #515151;
`;

export const MenuItem = styled.li`
  list-style: none;
  cursor: pointer;
  color: black;
  &:not(:last-child) {
    margin-right: 60px;
  }

  &.active {
    border-bottom: 3px solid #ffb11b;
  }

  &:hover {
    color: #ffb11b;
  }
`;
export const ComponentSearch = styled.div`
  width: 30px;
  height: 30px;
  background-image: url(${searchLogo});
  background-position: center center;
  background-repeat: no-repeat;
  cursor: pointer;
`;

export const InputSearch = styled.input`
  width: 200px;
  height: 35px;
  background: #ffffff;
  border: 1px solid #515151;
  border-radius: 10px;
  font-size: 16px;
  line-height: 20px;
  color: #515151;
  padding: 10px;
`;

export const EmptyBlockNotes = styled.div`
  text-align: center;
  color: black;
  margin: 50px auto;
`;
