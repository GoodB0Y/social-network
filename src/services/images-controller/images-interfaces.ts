export interface GetImages {
  limit: number;
  offset: number;
  userId: number;
}

export interface IGetImagesInAlbum {
  limit: number;
  offset: number;
  albumId: number;
}

export interface GetAlbums {
  limit: number;
  offset: number;
  userId: number;
}

export interface PostAlbum {
  icon: string;
  name: string;
  userId: number;
}
