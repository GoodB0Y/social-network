import axiosLib, { AxiosResponse } from 'axios';
import { ICreatePost, IPost } from '../../types/post';
import IComment, { ICreateComment } from '../../types/comment';
import { baseUrlv2 } from '../config';

const axios = axiosLib.create();
axios.interceptors.response.use((response) =>
  response.data);
/* axios.defaults.baseURL = `${baseUrlv2}posts`; */
axios.defaults.baseURL = `${baseUrlv2}`;

export async function getAllPosts(): Promise<AxiosResponse<IPost[]>> {
  return axios.get('posts');
}

export async function createNewPost(data: ICreatePost): Promise<AxiosResponse<string>> {
  return axios.post('post', data);
}

export async function deletePost(id: number) {
  return axios.delete(`post/${id}`);
}

export async function getAllCommentsByPost(id: number): Promise<AxiosResponse<IComment[]>> {
  return axios.get(`post/${id}/comments`);
}

export async function addNewCommentToPost(postId: number, comment: ICreateComment) {
  return axios.post(`post/${postId}/comment`, comment);
}

export async function getPostsByTag(tagName: string): Promise<AxiosResponse<IPost[]>> {
  return axios.get(`posts/${tagName}`);
}

export async function getPostsByUser(id: number): Promise<AxiosResponse<IPost[]>> {
  return axios.get(`posts/user/${id}`);
}

export async function addLikeToPost(postId: number) {
  return axios.post(`post/${postId}/like`);
}

export async function deleteLikeToPost(postId: number) {
  return axios.delete(`post/${postId}/like`);
}

export async function addBookmarkToPost(postId: number) {
  return axios.post(`post/${postId}/bookmark`);
}

export async function deleteBookmarkToPost(postId: number) {
  return axios.delete(`post/${postId}/bookmark`);
}
