import React from 'react';
import { format } from 'date-fns';
import { Container, MessageDate, MessageInfo, MessagesWrap } from './Message.styles';

export type MessageProps = {
  messages: string;
  messagesType: string;
  date: string;
};

const Messages = ({ messages, messagesType, date }: MessageProps): JSX.Element => {
  let date1;

  try {
    date1 = format(new Date(date), 'MM/dd/yy  HH:mm');
  } catch {
    date1 = 'Неизвестно';
  }

  return (
    <Container>
      <MessagesWrap type={messagesType}>
        <p>{messages}</p>
      </MessagesWrap>
      <MessageInfo type={messagesType}>
        <MessageDate type={messagesType}>{date1}</MessageDate>
      </MessageInfo>
    </Container>
  );
};

export default Messages;
