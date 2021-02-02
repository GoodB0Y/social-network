import styled from 'styled-components';

export const TextWrap = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  flex-grow: 1;

  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
`;

export const FileIcon = styled.img`
  position: absolute;
  cursor: pointer;
  top: 10px;
  padding: 5px;
  right: 0;
  transform: translateX(-100%);
`;

export const SignInUpTxt = styled.button`
  min-width: 21px;
  min-height: 18px;
  margin-left: 25px;
  border: none;
  background: none;
  background-image: url('../../../assets/img/icons/send-message.svg');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  &:hover {
    opacity: 0.7;
  }
`;
