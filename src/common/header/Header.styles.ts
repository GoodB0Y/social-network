import styled from 'styled-components';
import Iimg from '../../types/Iimg';

export const HeaderContainer = styled.div`
  background: #111;
  height: 109px;
  color: white;
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: fixed;
  z-index: 15;
`;

export const Logo = styled.img.attrs((props: Iimg) => ({ src: props.img }))`
  height: 32px;
  width: 67px;
  margin-top: 57px;
  margin-left: 146px;
  &:hover {
    cursor: pointer;
  }
`;

export const IconHeader = styled.img.attrs((props: Iimg) => ({ src: props.img }))`
  height: 30px;
  width: 30px;
  margin-left: 55px;
  &:hover {
    cursor: pointer;
  }
`;

export const IconSearch = styled.img.attrs((props: Iimg) => ({ src: props.img }))`
  height: 30px;
  width: 30px;
  &:hover {
    cursor: pointer;
  }
`;

export const RightBlockHeader = styled.div`
  margin-right: 110px;
  margin-top: 58px;
  display: flex;
`;

export const ButtonSearch = styled.button`
  background: none;
  border: none;
  margin-bottom: 20px;
  outline: none !important;
`;

export const InputHeader = styled.input`
  width: 295px;
  margin-left: 10px;
  background: none;
  border: none;
  border-bottom: 1px solid #ffb11b;
  color: white;
  outline: none !important;
  font-size: 24px;
  &:hover {
    cursor: text;
  }
`;
