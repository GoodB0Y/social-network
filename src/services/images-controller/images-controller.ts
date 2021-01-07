import axiosLib, { AxiosResponse } from 'axios';
import { ImageCreateDto, ImageDto, AlbumCreateDto, AlbumDto } from '../../types/image';
import { GetImages, IGetImagesInAlbum, GetAlbums } from './images-interfaces';
import { baseUrlv2 } from '../config';

const axios = axiosLib.create();
axios.interceptors.response.use((response: AxiosResponse) => response.data);
axios.defaults.baseURL = `${baseUrlv2}images`;

export async function getAllImagesByUserId({
  limit,
  offset,
  userId,
}: GetImages): Promise<AxiosResponse<ImageDto[]>> {
  return axios.get('', {
    params: {
      limit,
      offset,
      userId,
    },
  });
}

export async function createImage(
  imageCreateBundle: ImageCreateDto
): Promise<AxiosResponse<ImageDto>> {
  return axios.post('', imageCreateBundle);
}

export async function deleteImage(imageId: number) {
  return axios.delete(`/${imageId}`);
}

export async function getImageById(imageId: number): Promise<AxiosResponse<ImageDto>> {
  return axios.get(`/${imageId}`);
}

export async function getAllAlbumsOfUser({
  limit,
  offset,
  userId,
}: GetAlbums): Promise<AxiosResponse<AlbumDto[]>> {
  return axios.get('/albums', {
    params: {
      limit,
      offset,
      userId,
    },
  });
}

export async function createAlbum({
  icon,
  name,
  userId,
}: AlbumCreateDto): Promise<AxiosResponse<AlbumDto>> {
  return axios.post('/albums', { icon, name, userId });
}

export async function deleteAlbum(albumId: number) {
  return axios.delete(`/albums/${albumId}`);
}

export async function getAlbumById(albumId: number): Promise<AxiosResponse<AlbumDto>> {
  return axios.get(`/albums/${albumId}`);
}

export async function getImagesInAlbum({
  offset,
  limit,
  albumId,
}: IGetImagesInAlbum): Promise<AxiosResponse<ImageDto[]>> {
  return axios.get(`/albums/${albumId}/images`, { params: { offset, limit } });
}

export async function addImageToAlbum(albumId: number, imageId: number) {
  return axios.put(`/albums/${albumId}/images`, null, { params: { id: imageId } });
}

export async function deleteImageFromAlbum(albumId: number, imageId: number) {
  return axios.delete(`/albums/${albumId}/images`, { params: { id: imageId } });
}

/* Написал не все функции контроллера, добавляйте по-необходимости */
