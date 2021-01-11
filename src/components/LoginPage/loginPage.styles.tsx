/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { Input } from 'antd';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  background: #e5e5e5;

  img {
    position: absolute;
    left: 50px;
    top: 30px;
  }
`;

export const Main = styled.div`
  border-radius: 15px;
  background: #111111;
  margin-top: 150px;
  min-height: 636px;
  width: 498px;
  padding: 76px 75px 80px 72px;
`;

export const InputsArea = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 142px;
`;

export const SearchInpit = styled(Input)<{ isReg?: boolean }>`
  background-color: rgba(0, 125, 215, 0);
  width: 360px;
  padding: 0 0 10px 0;
  border: none;
  border-bottom: 1px solid #ffb11b;
  outline: none;
  color: aliceblue;
  font-size: 14px;
  line-height: 17px;

  &:hover {
    cursor: text;
  }

  &:not(first-child) {
    margin-top: ${(props) => (props.isReg ? '40px' : '33px')};
  }
`;

export const ButtonsArea = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 16px 0 16px;
`;

export const ButtonSingInUpTxt = styled.button<{ selected: boolean }>`
  background-color: rgba(0, 125, 215, 0);
  padding: 0;
  border: 0;
  border-bottom: ${(props) => (props.selected ? '2px solid #FFB11B' : '2px solid #111111')};

  box-shadow: none;
  span {
    color: #fff;
    font-style: normal;
    font-weight: normal;
    font-size: 26px;
    line-height: 32px;
    letter-spacing: 0.05em;
    margin-bottom: 8px;
  }
  &:hover {
    cursor: pointer;
  }
`;

export const SubmitArea = styled.div<{ isReg?: boolean }>`
  margin-top: ${(props) => (props.isReg ? '37px' : '66px')};
  display: flex;
  justify-content: center;

  & a {
    font-size: 14px;
    letter-spacing: 0.05em;
    color: #959595;
    align-self: flex-start;
    margin-left: 35px;
    text-decoration: none;
  }
  & button {
    background-color: #ffb11b;
    border: none;
    max-width: 351px;
    width: 100%;
    height: 60px;
    border-radius: ${(props) => (props.isReg ? '15px' : '4px')};
    span {
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      letter-spacing: 0.05em;
    }
  }
`;

export const ForgetPasswordArea = styled.div`
  margin-top: 28px;
`;

export const TxtLink = styled.a`
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.05em;
  color: #959595;
  text-decoration: none;
`;

export const CheckboxWrapper = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-top: 32px;

  span {
    cursor: pointer;
    color: #959595;
    font-size: 12px;
    margin-left: 15px;
  }
`;

export const InputError = styled.p`
  color: red;
  margin: 0;
  transition: all 0.5s ease;
  white-space: pre-wrap;
`;

export const getInputErrorVisibilityStyle = (isVisible: boolean): React.CSSProperties => ({
  opacity: isVisible ? 1 : 0,
  height: isVisible ? '1em' : 0,
});

export const FormWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
