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
