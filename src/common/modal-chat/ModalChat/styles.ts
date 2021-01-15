import styled from 'styled-components';
import OpenModalSrc from '../../../assets/img/icons/modal-message-open.svg';
import IisOpen from '../../../types/IisOpen';

export const ModalChatWrapper = styled.div<IisOpen>`
  position: relative;
  width: 25em;
  height: 840px;
  padding-bottom: 40px;
  overflow: hidden;
  margin: 0 auto;
  border-radius: 15px;
`;

export const ContentWrapper = styled.div
  // withConfig не позволяет пропу isOpen пройти дальше styled в Form.
  // Иначе Form "видит" неподобающий проп и ругается об этом в чат
  .withConfig({
    shouldForwardProp: (prop) => !['isOpen'].includes(prop),
  })<{ isOpen?: boolean }>`
  height: 100%;
  width: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: white;
  transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-870px)')};
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  transition: transform 1s ease-in-out, opacity 1s ease-in-out;
  border-radius: 15px;
`;

export const Header = styled.div`
  height: 112px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #ffb11b;
  font-size: 24px;
  line-height: 29px;

  color: #000000;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  padding: 35px 35px 0 35px;
  background-color: #ffffff;
  height: 560px;
  overflow-y: scroll;
  overflow: hidden;
`;

export const ModalChatMessageWrapper = styled.div<{ type?: string }>`
  display: flex;
  flex-direction: row;
  justify-content: ${({ type }) => (type === 'our' ? 'flex-end' : 'flex-start')};
  padding-right: 35px;
`;

export const SubmitMessageWrap = styled.div`
  margin: 30px;
`;

export const ModalChatOpen = styled.button
  // withConfig не позволяет пропу isOpen пройти дальше styled в Form.
  // Иначе Form "видит" неподобающий проп и ругается об этом в чат
  .withConfig({
    shouldForwardProp: (prop) => !['isOpen'].includes(prop),
  })<{ isOpen?: boolean }>`
  position: absolute;
  width: 60px;
  height: 60px;
  background: url(${OpenModalSrc}) #ffb11b center center no-repeat;
  margin: 0;
  padding: 0;
  border-radius: 50%;
  cursor: pointer;
  right: 50px;
  bottom: 10px;
  border: none;
  outline: none;
  transform: ${({ isOpen }) =>
    isOpen ? 'translateY(0) rotate(0)' : 'translateY(-750px) rotate(-180deg)'};
  transition: transform 1s ease-in-out;
`;
