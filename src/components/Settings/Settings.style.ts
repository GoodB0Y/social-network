import styled from 'styled-components';

export const SettingsWrapper = styled.div`
  background: #fff;
  font-family: 'Montserrat', sans-serif;
  border-radius: 15px;
  padding: 114px;
  margin-top: 275px;
  position: relative;
  min-height: 1200px;
`;

export const ContainerLabel = styled.div`
  font-family: Montserrat, serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 22px;
  color: #000;
  padding: 0 0 40px;
`;

export const Container = styled.div`
  min-height: 66px;
  padding-bottom: 40px;
  display: flex;
`;

export const ContainerLast = styled.div`
  min-height: 66px;
  display: flex;
  justify-content: flex-end;
  max-width: 725px;
`;

export const Label = styled.label`
  font-family: Montserrat, serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #000;
  padding: 0 20px 0 0;
  min-width: 11em;
  display: inline-block;
`;

export const UserInput = styled.input`
  min-width: 37em;
  border: none;
  border-bottom: 2px solid #000;
  color: #000;
  &:hover,
  &:focus,
  &:active {
    outline: 0;
    outline-offset: 0;
    border-bottom: 2px solid #ffb11b;
  }
`;

export const Select = styled.select`
  min-width: 7em;
  border: none;
  border-bottom: 2px solid #000;
  color: #000;
  font-family: Montserrat, serif;
  font-style: normal;
  font-weight: 500;
  &:hover,
  &:focus,
  &:active {
    outline: 0;
    outline-offset: 0;
    border-bottom: 2px solid #ffb11b;
  }
`;

export const Birthday = styled.input`
  min-width: 3em;
  border: none;
  border-bottom: 2px solid #000;
  color: #000;
  &:hover,
  &:focus,
  &:active {
    outline: 0;
    outline-offset: 0;
    border-bottom: 2px solid #ffb11b;
  }
`;

export const TextArea = styled.textarea`
  min-width: 37em;
  color: #000;
  border: 2px solid #000;
  height: 31px;
  &:hover,
  &:focus,
  &:active {
    outline: 0;
    outline-offset: 0;
    border: 2px solid #ffb11b;
  }
`;

export const Btn = styled.button`
  padding: 24px 20px;
  border-radius: 5px;
  font-size: 16px;
  background-color: #ffb11b;
  border: none;
  height: 30px;
  color: #000;
  align-items: center;
  display: flex;
  &:hover,
  &:focus,
  &:active {
    outline: 0;
    outline-offset: 0;
    color: #fff;
    box-sizing: content-box;
    background-color: #fab943;
    border: 1px solid #000;
    padding: 8px 18px;
  }
`;
