/* eslint-disable @typescript-eslint/ban-types */
import axios from 'axios';
import { IsingleChat, Ichat, IdataBody } from '../../types/chat';

const fetchChat = axios.create({
  baseURL: 'http://91.241.64.178:5561/api/user/',
  headers: { 'Content-Type': 'application/json' },
});

export const getSingleChats = async (id: number): Promise<IsingleChat> => {
  const res = await fetchChat.get(`singleChats/${id}/messages`);
  return res.data;
};

export const getChats = async (): Promise<Ichat[]> => {
  const res = await fetchChat.get('chats');
  return res.data;
};

export const getGroupChats = async (id: number): Promise<IsingleChat> => {
  const res = await fetchChat.get(`singleChats/${id}/messages`);
  return res.data;
};

export const setTitleGroup = async (data: IdataBody): Promise<Ichat> => {
  const res = await fetchChat.put('chat/group/edit/title', data);
  return res.data;
};

export const removeUserFromChat = async (idUser: number, idChat: number): Promise<{}> => {
  const res = await fetchChat.put(`${idChat}/user/${idUser}/delete`);
  return res.data;
};
