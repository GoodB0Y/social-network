import axios, { AxiosResponse } from 'axios';
import { baseUrlv2 } from '../config';

const baseUrl = `${baseUrlv2}video`;

export const fetchVideos = async (page = 2, total = 200): Promise<AxiosResponse> =>
  axios.get(`${baseUrl}?currentPage=${page}&itemsOnPage=${total}`);

export const fetchAllVideosFromAlbum = async (albumId = 10): Promise<AxiosResponse> =>
  axios.get(`${baseUrl}/album/${albumId}/video`);

export const fetchAddVideoInAlbum = async (albumId = 10, videoId = 13): Promise<AxiosResponse> =>
  axios.put(`${baseUrl}/album/video?albumId=${albumId}&videoId=${videoId}`);

export const fetchVideoFromName = async (videoName = 'Test video 3'): Promise<AxiosResponse> =>
  axios.get(`${baseUrl}/name?name=${videoName}`);

export const fetchAllAlbum = async (userId = 60): Promise<AxiosResponse> =>
  axios.get(`${baseUrl}/user/${userId}/album`);

export const fetchAddAlbum = async (userId = 60, data = {}): Promise<AxiosResponse> =>
  axios.post(`${baseUrl}/user/${userId}/album`, data);

export const fetchGetSomeVideoFromCollection = async (page = 0, count = 15):
  Promise<AxiosResponse> =>
  axios.get(`${baseUrl}/user/60/video?currentPage=${page}&itemsOnPage=${count}`);

export const fetchAddVideo = async (userId = 60, data = {}): Promise<AxiosResponse> =>
  axios.post(`${baseUrl}/user/${userId}/video`, data);
