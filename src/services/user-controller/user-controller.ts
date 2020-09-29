import axiosLib, { AxiosResponse } from 'axios';
import { IUser, IUserFriend } from '../../types/user';
import baseUrl from '../config';

const axios = axiosLib.create();
axios.interceptors.response.use((response) => response.data);
axios.defaults.baseURL = `${baseUrl}user`;

export async function getUserById(id: number): Promise<AxiosResponse<IUser>> {
  return axios.get(`/${id}`);
}

export async function getAllUsers(): Promise<AxiosResponse<IUser[]>> {
  return axios.get('/all');
}

export async function createNewUser(data: IUser): Promise<AxiosResponse<IUser>> {
  return axios.post('/create', data);
}

export async function removeUserById(id: number) {
  return axios.delete(`/delete/${id}`);
}

export async function getFriendsByUserId(id: number): Promise<AxiosResponse<IUserFriend[]>> {
  return axios.get(`/getFriends/${id}`);
}

export async function updateUser(data: IUser): Promise<AxiosResponse<IUser>> {
  return axios.put('/update', data);
}
