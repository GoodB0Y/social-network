import axiosLib, { AxiosResponse } from 'axios';
import { Ichat, IdataBody } from '../../types/chat';
import { baseUrlv2 } from '../config';

const axios = axiosLib.create();
axios.interceptors.response.use((response) => response.data);
axios.defaults.baseURL = `${baseUrlv2}chats`;

export async function createGroupChat(data: Ichat): Promise<AxiosResponse<Ichat>> {
  return axios.post('/group-chats', data);
}

// пока нет бэка
export async function createSingleChat(data: Ichat, userId: number): Promise<AxiosResponse<Ichat>> {
  return axios.post(`/single-chats/user/${userId}`);
}

export async function getGroupChatMessages(chatId: number): Promise<AxiosResponse<any[]>> {
  return axios.get(`/group-chats/${chatId}/messages`);
}

export async function updateGroupChatTitle(data: IdataBody): Promise<AxiosResponse<any>> {
  return axios.put('/group-chats/title', data);
}

export async function getSingleChatMessages(chatId: number): Promise<AxiosResponse<any[]>> {
  return axios.get(`/single-chats/${chatId}/messages`);
}

export async function deleteSingleChatUser(chatId: number, userId: number): Promise<AxiosResponse> {
  return axios.delete(`/single-chats/${chatId}/user/${userId}`);
}

export async function getUserChats(userId: number): Promise<AxiosResponse<Ichat[]>> {
  return axios.get(`user/${userId}/chats`);
}
