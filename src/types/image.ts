export interface ImageCreateDto {
  description: string;
  url: string;
  userId: number;
}

export interface ImageDto extends ImageCreateDto {
  persistDateTime: string;
  description: string;
  url: string;
  id: number;
}

export interface AlbumCreateDto {
  icon: string;
  name: string;
  userId: number;
}

export interface AlbumDto {
  icon: string;
  id: number;
  name: string;
}
