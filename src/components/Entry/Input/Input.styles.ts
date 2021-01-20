import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  padding: 10px 0;
  border: none;
  border-bottom: 1px solid #ffb11b;
  margin-top: 30px;
  font-family: Montserrat, Arial, sans-serif;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.05em;
  color: #ffffff;
  background-color: #111111;

  &::placeholder {
    color: #959595;
  }

  &:first-child {
    margin-top: 0;
  }

  &:focus {
    outline: none;
  }
`;

export default Input;
