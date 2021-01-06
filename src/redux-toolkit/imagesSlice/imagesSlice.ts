import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ImageDto, AlbumDto } from '../../types/image';
import {
  getAllImagesByUserId,
  getAllAlbumsOfUser,
  getImagesInAlbum,
} from '../../services/images-controller';

const loadAlbums = createAsyncThunk(
  'images/loadAlbums',
  async (
    { userId, limit, offset }: { userId: number; limit: number; offset: number },
    { rejectWithValue }
  ) => {
    try {
      const data = await getAllAlbumsOfUser({ limit, offset, userId });
      return data;
    } catch (error) {
      return rejectWithValue({
        status: error.response.status,
        data: error.response.data,
      });
    }
  }
);

const loadImages = createAsyncThunk(
  'images/loadImages',
  async (
    { userId, limit, offset }: { userId: number; limit: number; offset: number },
    { rejectWithValue }
  ) => {
    try {
      const data = await getAllImagesByUserId({ limit, offset, userId });
      return data;
    } catch (error) {
      return rejectWithValue({
        status: error.status,
        data: error.response.data,
      });
    }
  }
);

const loadImagesFromAlbum = createAsyncThunk(
  'images/loadImagesFromAlbum',
  async (
    { albumId, limit, offset }: { albumId: number; limit: number; offset: number },
    { rejectWithValue }
  ) => {
    try {
      const data = await getImagesInAlbum({ limit, offset, albumId });
      return data;
    } catch (error) {
      return rejectWithValue({
        status: error.status,
        data: error.response.data,
      });
    }
  }
);

interface ImagesState {
  albums: null | AlbumDto[];
  images: null | ImageDto[];
  loading: boolean;
  error: null | { status: number; data?: string };
}

const initialState: ImagesState = {
  albums: null,
  images: null,
  loading: false,
  error: null,
};

const imagesSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    resetImages: (state) => ({ ...state, images: null }),
    resetAlbums: (state) => ({ ...state, albums: null }),
  },
  extraReducers: {
    /*
    LOAD ALBUMS
      Загружает альбомы текущего юзера.
    */
    [loadAlbums.pending.type]: (state) => ({ ...state, loading: true }),
    [loadAlbums.fulfilled.type]: (state, action) => ({
      ...state,
      albums: action.payload,
      loading: false,
    }),
    [loadAlbums.rejected.type]: (state, action) => ({
      ...state,
      error: action.payload || action.error,
      loading: false,
    }),
    /*
    LOAD Images
      Загружает изобаражения текущего юзера.
    */
    [loadImages.pending.type]: (state) => ({ ...state, loading: true }),
    [loadImages.fulfilled.type]: (state, action) => ({
      ...state,
      images: action.payload,
    }),
    [loadImages.rejected.type]: (state, action) => ({
      ...state,
      error: action.payload || action.error,
    }),
    /*
    LOAD IMAGES FROM ALBUMS
      Загружает изображения по определенному альбому
    */
    [loadImagesFromAlbum.pending.type]: (state) => ({ ...state, loading: true }),
    [loadImagesFromAlbum.fulfilled.type]: (state, action) => ({
      ...state,
      images: action.payload,
      loading: false,
    }),
    [loadImagesFromAlbum.rejected.type]: (state, action) => ({
      ...state,
      error: action.payload || action.error,
      loading: false,
    }),
  },
});

export { loadImages, loadAlbums, loadImagesFromAlbum };
export const imagesReducer = imagesSlice.reducer;
export const { resetImages, resetAlbums } = imagesSlice.actions;
export { initialState };
