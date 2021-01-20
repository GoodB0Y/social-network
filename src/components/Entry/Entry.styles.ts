import styled from 'styled-components';
import { Input, Tabs as TabsANTD } from 'antd';
import Button from '../../common/Button';
import jm from './assets/jm.svg';
import sn from './assets/sn.svg';

export const EntryPage = styled.div`
  padding: 48px 60px;
  background-color: #ffffff;
`;

export const Tabs = styled(TabsANTD)`
  width: 500px;
  padding: 75px;
  border-radius: 15px;
  color: #ffffff;
  font-family: Montserrat, Arial, sans-serif;
  background-color: #111111;

  .ant-tabs-nav {
    padding: 0 15px;
    margin-bottom: 120px;

    &::before {
      border-bottom: none;
    }
  }

  .ant-tabs-nav-list {
    justify-content: space-between;
    width: 100%;
  }

  .ant-tabs-tab {
    padding: 8px 0;
    margin: 0;
    font-size: 26px;
    line-height: 32px;
    letter-spacing: 0.05em;

    &:hover {
      color: #ffb11b;
    }
  }

  .ant-tabs-tab-btn {
    &:focus,
    &:active {
      color: #ffb11b;
    }
  }

  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: #ffffff;
    font-weight: 400;
  }

  .ant-tabs-ink-bar {
    background-color: #ffb11b;
  }
`;

export const TabsWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${Tabs} {
    z-index: 10;
  }

  &::before,
  &::after {
    content: '';
    z-index: 5;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }

  &::before {
    width: 429px;
    height: 214px;
    margin-bottom: -104px;
    margin-left: -17px;
    background-image: url(${jm});
  }

  &::after {
    width: 401px;
    height: 218px;
    margin-top: -108px;
    background-image: url(${sn});
  }
`;

// -------------------------------------------------------------------------------------------------

export const InputsArea = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SearchInpit = styled(Input)<{ $isReg?: boolean }>`
  background-color: rgba(17, 17, 17, 1);
  padding: 0 0 10px 0;
  border: none;
  border-bottom: 1px solid #ffb11b;
  outline: none;
  color: #ffb11b;
  font-size: 18px;
  font-weight: bold;
  line-height: 17px;
  font-family: Montserrat, Arial, sans-serif;
  letter-spacing: 0.1em;

  &:hover {
    cursor: text;
  }

  &:not(first-child) {
    margin-top: ${(props) => (props.$isReg ? '40px' : '33px')};
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
