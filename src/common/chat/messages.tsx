/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import styled from 'styled-components';
import { format } from 'date-fns';

const Container = styled.div`
  margin-bottom: 25px;
`;

const MessagesWrap = styled.div<{type: string}>`
  background-color: ${({ type }) =>
    (type === 'our' ? '#FFF5E3' : '#EFEFEF')};
  border-radius: 15px;
  margin: ${({ type }) =>
    ((type === 'our') ? '0 0 0 auto' : '0 auto 0 0')};
  font-size: 16px;
  color: #000000;
  font-weight: 500;
  font-style: normal;
  width: fit-content;
  & > p {
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
    margin: 0;
  }

  & > p:last-child {
    padding-bottom: 20px;
  }

  & > p:first-child {
    padding-top: 20px;
  }
`;

const MessageInfo = styled.div<{type: string}>`
  display: flex;
  flex-direction: row;
  justify-content: ${({ type }) =>
    (type === 'our' ? 'flex-end' : 'flex-start')};
  margin-top: 10px;
`;

const MessageDate = styled.span<{type: string}>`
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  color: #b6b6b6;
  margin: ${({ type }) =>
    (type === 'our' ? '0 0 0 30px' : '0 15px 0 0')};
`;

interface Props {
  messages: string;
  messagesType: string;
  date: string;
}

const Messages: React.FC<Props> = ({ messages, messagesType, date }) => {
  const date1 = format(new Date(date), 'MM/dd/yy  HH:mm');
  return (
    <Container>
      <MessagesWrap type={messagesType}><p>{messages}</p></MessagesWrap>
      <MessageInfo type={messagesType}>
        <MessageDate type={messagesType}>{date1}</MessageDate>
      </MessageInfo>
    </Container>
  );
};

export default Messages;
