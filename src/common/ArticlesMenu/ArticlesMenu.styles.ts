import styled from 'styled-components';
import img from '../../assets/img/icons/search.svg';

export const MenuWrapper = styled.nav`
  min-height: 150px;
  padding: 108px 0 61px 0;
  display: flex;
  justify-content: space-between;

  font-style: normal;
  font-weight: normal;
  color: #515151;
  border-bottom: 1px solid #515151;
`;

export const Menu = styled.div`
  display: flex;
`;

export const MenuItem = styled.button`
  font-size: 16px;
  line-height: 20px;
  background: none;
  border: 0;
  color: inherit;
  cursor: pointer;
  margin-right: 50px;
  padding: 0;
  padding-bottom: 7px;
  transition: 0.1s;
  &:hover {
    transform: scale(1.05);
    border-bottom: 3px solid #ffb11b;
  }
  &:active,
  &:focus {
    outline: none;
    border-bottom: 3px solid #ffb11b;
  }
`;

export const ButtonSearch = styled.button`
  width: 35px;
  height: 35px;
  background-color: transparent;
  background: url(${img}) center no-repeat;
  border: 0;
  color: inherit;
  cursor: pointer;
  padding: 0;
  transition: 0.1s;
  &:hover {
    transform: scale(1.05);
  }
  &:focus {
    outline: none;
  }
`;

export const SearchField = styled.input.attrs(() => ({
  type: 'search',
  placeholder: 'Поиск...',
}))`
  height: 46px;
  width: 100%;
  margin: 0 0 0 24px;
  padding: 13px 18px;
  background: #ffffff;
  border: none;
  border-bottom: 2px solid #515151;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #515151;
  &:focus {
    outline: none;
    border-bottom: 3px solid #ffb11b;
  }
`;
