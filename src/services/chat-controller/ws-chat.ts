import React from 'react';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';

const SOCKET_URL = 'http://91.241.64.178:5561/wsp';

// пока нет бэка, необходимо запустить сервер локально
const SOCKET_URL_LOCAL = 'http://localhost:5557/wsp';

const socket = new SockJS(SOCKET_URL_LOCAL);
const stopmClient = Stomp.over(socket);

export const sendMessage = (message: any) => {
  stopmClient.send('/message/chat.sendMessage', {}, JSON.stringify(message));
};

const joinChat = (data: any) => {
  stopmClient.send('/message/chat.addUser', { 'content-type': 'application/json' }, JSON.stringify(data));
};

export const startWSConnection = (data: any, onMessageReceived: (payload: any) => void) => {
  stopmClient.connect({}, (frame) => {
    stopmClient.debug('connected to Stomp');
    stopmClient.subscribe('/topic/public', onMessageReceived);
    joinChat(data);
  });
};
