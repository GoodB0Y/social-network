import urlPaths from '../constants/urlPaths';
import funcsRoutes from '../routes/funcsRoutes';

const { api, audios, getFriends, host, user, id, playLists } = urlPaths;

const urlApi = funcsRoutes.urlApi(host, api);
export const urlGetAllAudios = funcsRoutes.urlAllAudios(urlApi, audios);
export const urlGetMyAudios = funcsRoutes.urlMyAudios(urlApi, audios, user);
export const urlGetFriends = funcsRoutes.urlFriendsAudios(urlApi, user, getFriends);
export const urlGetMyPlaylists = funcsRoutes.urlGetMyPlaylists(urlApi, audios, user, id, playLists);
