import axiosLib, { AxiosResponse } from 'axios';
import { IPost } from '../../types/post';
import IComment from '../../types/comment';
import baseUrl from '../config';

const axios = axiosLib.create();
axios.interceptors.response.use((response) => response.data);
axios.defaults.baseURL = `${baseUrl}posts`;

export async function getAllPosts(): Promise<AxiosResponse<IPost[]>> {
  return axios.get('/');
}

export async function getAllCommentsByPost(id:number): Promise<AxiosResponse<IComment[]>> {
  return axios.get(`/${id}/comments`);
}

export async function createNewPost(data: IPost): Promise<AxiosResponse<IPost>> {
  return axios.post('/create', data);
}

export async function deletePost(id: number) {
  return axios.delete(`/${id}`);
}

export async function getPostsByUser(id: number): Promise<AxiosResponse<IPost[]>> {
  return axios.get(`/user/${id}`);
}

export async function getPostsByTag(tagName : string): Promise<AxiosResponse<IPost[]>> {
  return axios.get(`/${tagName}`);
}
