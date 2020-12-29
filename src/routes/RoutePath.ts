enum RoutePath {
  Main = '/',
  MainWithId = '/:id/',
  Login = '/social-network',
  Friends = '/friends',
  Messages = '/messages',
  Photo = '/photo/',
  PhotoWithId = '/:userId/photo/',
  AlbumWithId = '/:userId/photo/album/:albumId',
  News = '/news',
  Groups = '/groups',
  Group = '/group/:slug',
  Bookmarks = '/bookmarks',
  Video = '/video',
  Audio = '/audio',
}

export default RoutePath;
