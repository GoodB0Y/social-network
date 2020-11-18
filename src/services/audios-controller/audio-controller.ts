/* eslint-disable max-len */
import axios, { AxiosResponse } from 'axios';
import { baseUrlv2 } from '../config';

axios.defaults.baseURL = `${baseUrlv2}audio`;

export const fetchAudiosAll = async (currentPage = 0): Promise<AxiosResponse> =>
  axios.get(`?currentPage=${currentPage}&itemsOnPage=15`);
export const fetchMyPartAudios = async (id = 10, currentPage = 0, itemsOnPage = 15): Promise<AxiosResponse> =>
  axios.get(`/user/${id}?currentPage=${currentPage}&itemsOnPage=${itemsOnPage}`);
export const fetchFriendAudios = async (id = 60, currentPage = 0, itemsOnPage = 15): Promise<AxiosResponse> =>
  axios.get(`/user/${id}?currentPage=${currentPage}&itemsOnPage=${itemsOnPage}`);
export const fetchMyPlaylists = async (id = 60): Promise<AxiosResponse> =>
  axios.get(`/user/${id}/playlists`);
export const fetchMyFriends = async (id = 10, currentPage = 0, itemsOnPage = 15): Promise<AxiosResponse> =>
  axios.get(`${baseUrlv2}users/${id}/friends?currentPage=${currentPage}&itemsOnPage=${itemsOnPage}`);
export const fetchSearchedSongs = async (name = ''): Promise<AxiosResponse> =>
  axios.get(`name/${name}`);
export const fetchPlaylist = async (id: number, limit = 100, offset = 0): Promise<AxiosResponse> =>
  axios.get(`/playlists/${id}/audio?limit=${limit}&offset=${offset}`);
export const fetchFriends = async (friendId: number): Promise<AxiosResponse> =>
  axios.get(`${baseUrlv2}users/${friendId}`);
