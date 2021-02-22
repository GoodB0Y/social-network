import React, { useState } from 'react';
import ScrollBar from 'react-scrollbars-custom';
import { nanoid } from 'nanoid';
import Author from '../message-author';
import Messages from '../../Chat/Message';
import SubmitMessage from '../../Chat/Submitmessage/SubmitMessage';
import { dataMessages1 } from '../../../services/chat-controller/testFetch';
import {
  Content,
  ContentWrapper,
  Header,
  ModalChatMessageWrapper,
  ModalChatOpen,
  ModalChatWrapper,
  SubmitMessageWrap,
} from './styles';
import BroadcastMessage from './ModalChat.types';

const scrollBarStyles = { width: '100%', height: '100%', paddingRight: 35 };

const ModalChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [broadcastMessage, setBroadcastMessage] = useState<BroadcastMessage[]>([]);

  const onMessageReceivedWithoutSocket = (payload: BroadcastMessage) => {
    if (payload.message) {
      setBroadcastMessage([
        ...broadcastMessage,
        {
          message: payload.message,
          lastReductionDate: payload.lastReductionDate,
          usersenderImage: payload.usersenderImage,
        },
      ]);
    }
  };

  const switchModalStatus = () => {
    setIsOpen(!isOpen);
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const renderMessages = () =>
    dataMessages1.map((el) => {
      if (el.username === 'bogdan13') {
        return (
          <ModalChatMessageWrapper type="our" key={el.idMessage}>
            <Messages messages={el.message} messagesType="our" date={el.persistDate} />
            <Author img={el.userSenderImage} name={el.username} />
          </ModalChatMessageWrapper>
        );
      }
      return (
        <ModalChatMessageWrapper type="their" key={el.idMessage}>
          <Author img={el.userSenderImage} name={el.username} />
          <Messages messages={el.message} messagesType="their" date={el.persistDate} />
        </ModalChatMessageWrapper>
      );
    });

  const renderBroadcastMessage = broadcastMessage.map((el) => (
    <ModalChatMessageWrapper type="our" key={nanoid()}>
      <Messages messages={el.message} messagesType="our" date={el.lastReductionDate} />
      <Author img="" name="bogdan13" />
    </ModalChatMessageWrapper>
  ));

  return (
    <ModalChatWrapper isOpen={isOpen}>
      <ContentWrapper isOpen={isOpen}>
        <Header>Чат JMSN</Header>
        <Content>
          <ScrollBar style={scrollBarStyles} scrollTop={9999}>
            {renderMessages()}
            {renderBroadcastMessage}
          </ScrollBar>
        </Content>
        <SubmitMessageWrap>
          <SubmitMessage
            onSubmitMessage={(message) => {
              onMessageReceivedWithoutSocket({
                message,
                usersenderImage: '',
                lastReductionDate: `${new Date()}`,
              });
            }}
          />
        </SubmitMessageWrap>
      </ContentWrapper>
      <ModalChatOpen onClick={switchModalStatus} isOpen={isOpen} />
    </ModalChatWrapper>
  );
};

export default ModalChat;
