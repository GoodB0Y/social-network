import axios, { AxiosResponse } from 'axios';
import { baseUrlv2 } from '../../services/config';

axios.defaults.baseURL = `${baseUrlv2}audio`;

export const getAllTracks = async (currentPage = 0): Promise<AxiosResponse> =>
  axios.get(`?currentPage=${currentPage}&itemsOnPage=15`);

export const getMyTracks = async (
  id = 10,
  currentPage = 0,
  itemsOnPage = 15
): Promise<AxiosResponse> =>
  axios.get(`/user/${id}?currentPage=${currentPage}&itemsOnPage=${itemsOnPage}`);

export const getFriendTracks = async (
  id = 60,
  currentPage = 0,
  itemsOnPage = 15
): Promise<AxiosResponse> =>
  axios.get(`/user/${id}?currentPage=${currentPage}&itemsOnPage=${itemsOnPage}`);

export const getMyPlaylists = async (id = 60): Promise<AxiosResponse> =>
  axios.get(`/user/${id}/playlists`);

export const getFriendPlaylists = async (id = 60): Promise<AxiosResponse> =>
  axios.get(`/user/${id}/playlists`);

export const getFriendIds = async (
  id = 10,
  currentPage = 0,
  itemsOnPage = 15
): Promise<AxiosResponse> =>
  axios.get(
    `${baseUrlv2}users/${id}/friends?currentPage=${currentPage}&itemsOnPage=${itemsOnPage}`
  );

export const getSearchedTracks = async (name = ''): Promise<AxiosResponse> =>
  axios.get(`name/${name}`);

export const getPlaylistTracks = async (
  id: number,
  limit = 100,
  offset = 0
): Promise<AxiosResponse> => axios.get(`/playlists/${id}/audio?limit=${limit}&offset=${offset}`);

export const getFriendData = async (friendId: number): Promise<AxiosResponse> =>
  axios.get(`${baseUrlv2}users/${friendId}`);
