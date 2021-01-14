import styled from 'styled-components';

const SearchArea = styled.div`
  display: flex;
  justify-content: space-between;
  height: 70px;
  max-width: 1000px;
  margin: 60px auto 40px auto;
  border-top: 1px solid #000000;
  border-bottom: 1px solid #000000;
  align-items: center;
  input {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    &:focus {
      outline: none;
    }
    &:hover {
      cursor: text;
    }
  }
`;

export default SearchArea;
