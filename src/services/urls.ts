/* eslint-disable max-len */
import {
  pathApi,
  pathAudios,
  pathGetFriends,
  pathHost,
  pathUser,
  pathId,
  pathPlaylists,
} from '../constants/urlPaths';
import funcsRoutes from '../routes/funcsRoutes';

const urlApi = funcsRoutes.urlApi(pathHost, pathApi);
export const urlGetAllAudios = funcsRoutes.urlAllAudios(urlApi, pathAudios);
export const urlGetMyAudios = funcsRoutes.urlMyAudios(urlApi, pathAudios, pathUser);
export const urlGetFriends = funcsRoutes.urlFriendsAudios(urlApi, pathUser, pathGetFriends);
export const urlGetMyPlaylists = funcsRoutes.urlGetMyPlaylists(
  urlApi,
  pathAudios,
  pathUser,
  pathId,
  pathPlaylists
);
