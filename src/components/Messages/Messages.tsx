import React, { useEffect, useState } from 'react';
import ScrollBar from 'react-scrollbars-custom';
import { connect, ConnectedProps } from 'react-redux';
import { Frame } from 'stompjs';
import { nanoid } from 'nanoid';
import { Ichat } from '../../types/chat';
import { RootState } from '../../redux-toolkit/store';
import moreOptionSrc from '../../img/icons/chat-more-options.svg';
import messagesClass from './Messages.module.scss';
import SubmitMessage from '../../common/chat/Submitmessage/SubmitMessage';
import PageSearchInput from '../../common/Inputs/PageSearchMessages/PageSearchInput';
import PageWrapper from '../../common/pageWrapper';
import * as actions from '../../redux-toolkit/chatSlice';
import { onFilterChats, renderchatList, renderMessages } from './helpers';
import { sendMessage, startWSConnection } from '../../services/chat-controller/ws-chat';
import MessagesChat from '../../common/chat/messages';

// import {
//   getChats,
//   getGroupChats,
//   getSingleChats,
//   removeUserFromChat,
//   setTitleGroup,
// } from '../../services/chat-controller';

const scrollBarStyles = { width: '100%', height: '100%', paddingRight: 10 };

const mapStateToProps = (state: RootState) => {
  const { chats, currentChat } = state.chat;
  const { data } = state.currentUser;
  return {
    chats,
    currentChat,
    user: data,
  };
};

const mapDispatch = actions;
const connector = connect(mapStateToProps, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux;

const Messages: React.FC<Props> = ({
  chats,
  currentChat,
  loadChatsOfUser,
  loadCurrentChat,
  user,
}) => {
  type BroadCast = {
    message: string;
    lastReductionDate: string;
    usersenderImage: string;
  };
  const [filterChats, setFilterChats] = useState<Ichat[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [broadcastMessage, setBroadcastMessage] = useState<BroadCast[]>([]);

  // получение ответа от сервера по вебсокету
  const onMessageReceived = (payload: any) => {
    const response = JSON.parse(payload.body);
    console.log('RESPONSE RESPONSE ', response);
    if (response.message) {
      setBroadcastMessage(
        [...broadcastMessage,
          { message: response.message,
            lastReductionDate: response.lastReductionDate,
            usersenderImage: response.usersenderImage }],
      );
    }
    // return response;
  };

  const onMessageReceivedWithoutSocket = (payload: any) => {
    if (payload.message) {
      setBroadcastMessage([...broadcastMessage, { message: payload.message,
        lastReductionDate: payload.lastReductionDate,
        usersenderImage: payload.usersenderImage }]);
    }
  };

  const onError = (error: string | Frame) => {
    console.log('ERROR ERROR ', error);
    setErrorMessage('No connection');
  };

  const renderBroadcastMessage = broadcastMessage.map((el) =>
    (
      <div className={`${messagesClass.messageWrapper} ${messagesClass['messageWrapper--ours']}`} key={nanoid()}>
        <MessagesChat messages={el.message} messagesType="our" date={el.lastReductionDate} />
        <img className={messagesClass.avatarIcon} alt="avatar" src={el.usersenderImage} />
      </div>
    ));

  // подключаем сокет
  // useEffect(() => {
  //   startWSConnection({}, onMessageReceived, onError);
  // });

  useEffect(() => {
    setFilterChats(chats.data);
  }, [chats.data]);

  useEffect(() => {
    if (user && chats.data.length === 0) {
      loadChatsOfUser(user.userId);
    }
  }, [chats.data.length, user, loadChatsOfUser]);

  useEffect(() => {
    if (currentChat.data.length === 0 && chats.data.length !== 0) {
      loadCurrentChat(chats.data[0].id);
    }
  }, [chats.data, currentChat.data.length, loadCurrentChat]);

  return (
    <PageWrapper messages>
      <div className={messagesClass.wrapper}>
        <div className={messagesClass.selectChat}>
          <div className={messagesClass.pageSearchInputWrapper}>
            <PageSearchInput
              placeholder="Поиск..."
              action={(value) =>
                setFilterChats(onFilterChats(value, chats.data))}
            />
          </div>
          <ScrollBar scrollTop={9999} style={scrollBarStyles}>
            <div className={messagesClass.selectChatElementsWrapper}>
              {renderchatList(chats, filterChats, loadCurrentChat)}
            </div>
          </ScrollBar>
        </div>

        <div className={messagesClass.contentWrapper}>
          <div className={messagesClass.contentHeader}>
            <img
              alt="avatar"
              src={user?.avatar}
            />
            <div className={messagesClass.contentUserInfo}>
              <span>{`${user?.firstName} ${user?.lastName}`}</span>
            </div>
          </div>

          <div className={messagesClass.content}>
            <button
              className={messagesClass.menu}
              type="button"
              onClick={() =>
                console.log('menu chats')}
            >
              <img alt="more" src={moreOptionSrc} />
            </button>

            <div className={messagesClass.messagesWrapper}>
              {errorMessage && <p className={messagesClass.messageError}>{errorMessage}</p>}
              <ScrollBar scrollTop={9999} style={scrollBarStyles}>
                <div>
                  {renderMessages(currentChat)}
                  {renderBroadcastMessage}
                </div>
              </ScrollBar>
            </div>

            <div>
              <SubmitMessage onSubmitMessage={(message) => {
                // отправить сообщение через вебсокет
                // sendMessage({ message });

                // без сокета
                onMessageReceivedWithoutSocket({ message, userSenderImage: user?.avatar, lastReductionDate: `${new Date()}` });
              }}
              />
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default connector(Messages);
