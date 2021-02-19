import React from 'react';
import { nanoid } from 'nanoid';
import ErrorBlock from '../../common/errorBlock/ErrorBlock';
import MessagesChat from '../../common/Chat/Message';
import messagesClass from './Messages.module.scss';
import Loader from '../../common/Loader';
import { Ichat, IsingleChat } from '../../types/chat';
import Avatar from '../../common/Avatar';

type Chats = {
  data: Ichat[];
  loading: boolean;
  error: Error | null;
};

type CurrentChat = {
  data: IsingleChat[];
  loading: boolean;
  error: Error | null;
};

const renderchatList = (
  chats: Chats,
  filterChats: Ichat[],
  loadCurrentChat: (id: number) => void
): JSX.Element | JSX.Element[] => {
  if (chats.loading) return <Loader />;
  if (chats.error) return <ErrorBlock errorMessage={chats.error.message} />;
  return filterChats.map((chat) => (
    <button
      key={chat.id}
      className={messagesClass.selectChatElement}
      type="button"
      onClick={() => loadCurrentChat(chat.id)}
    >
      <Avatar size={90} src={chat.image} alt={`Аватар ${chat.title}`} />
      <div className={messagesClass.selectChatUserInfo}>
        <span>{chat.title}</span>
        <p>{chat.lastMessage}</p>
      </div>
    </button>
  ));
};

const renderMessages = (currentChat: CurrentChat): JSX.Element | JSX.Element[] => {
  if (currentChat.loading) return <Loader />;
  if (currentChat.error) return <ErrorBlock />;
  return currentChat.data.map((el) => {
    if (el.username === 'bogdan13') {
      return (
        <div
          className={`${messagesClass.messageWrapper} ${messagesClass['messageWrapper--ours']}`}
          key={nanoid()}
        >
          <MessagesChat messages={el.message} messagesType="our" date={el.persistDate} />
          <Avatar size={61} src={el.userSenderImage} alt={`Аватар ${el.username}`} />
        </div>
      );
    }
    return (
      <div
        className={`${messagesClass.messageWrapper} ${messagesClass['messageWrapper--theirs']}`}
        key={nanoid()}
      >
        <Avatar size={61} src={el.userSenderImage} alt={`Аватар ${el.username}`} />
        <MessagesChat messages={el.message} messagesType="their" date={el.persistDate} />
      </div>
    );
  });
};

const onFilterChats = (param: string, data: Ichat[]): Ichat[] => {
  if (param === '') return data;
  const filtData = data.filter((el) => {
    const nameChat = el.title.toLowerCase();
    const findStr = param.toLowerCase();
    return nameChat.startsWith(findStr);
  });
  return filtData;
};

export { onFilterChats, renderchatList, renderMessages };
