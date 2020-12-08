import { createAsyncThunk, createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';
import errFetchHandler from '../../helperFunctions/errFetchHandler';
import { TypeRootReducer } from '../rootReducer';
import {
  fetchVideos,
  fetchAddVideo,
  fetchAllAlbum,
  fetchAddAlbum,
} from '../../services/videos-controller/video-controller';

export const allVideosAction = createAsyncThunk(
  'videos/allVideosAction',
  async (page: number, argThunkAPI) => {
    try {
      const response = await fetchVideos(page, 20);
      return response.data;
    } catch (err) {
      return errFetchHandler(err.response.data, argThunkAPI);
    }
  },
);
export const addVideoAction = createAsyncThunk(
  'videos/addVideoAction',
  async (video: any, argThunkAPI) => {
    try {
      const response = await fetchAddVideo(65, video);
      return response.data;
    } catch (err) {
      return errFetchHandler(err.response.data, argThunkAPI);
    }
  },
);
export const addAlbumAction = createAsyncThunk(
  'videos/addAlbumAction',
  async (album: any, argThunkAPI) => {
    try {
      const response = await fetchAddAlbum(65, album);
      return response.data;
    } catch (err) {
      return errFetchHandler(err.response.data, argThunkAPI);
    }
  },
);
export const AllAlbumAction = createAsyncThunk(
  'videos/AllAlbumAction',
  async (argThunkAPI) => {
    try {
      const response = await fetchAllAlbum(65);
      return response.data;
    } catch (err) {
      return errFetchHandler(err.response.data, argThunkAPI);
    }
  },
);

const allVideosSlice = createSlice({
  name: 'allVideosSlice',
  initialState: { allVideos: [], allAlbums: [], loading: '', error: '' },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(allVideosAction.pending,
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      (state, action: PayloadAction<any>) => {

      });
    builder.addCase(allVideosAction.fulfilled,
      (state: Draft<any>, action: PayloadAction<any>) => {
        state.allVideos = action.payload.sort((a: any, b: any) =>
          b.id - a.id);
        state.loading = action.type;
      });
    builder.addCase(allVideosAction.rejected,
      (state: Draft<any>, action) => {
        state.loading = action.type;
        state.error = action.error.message;
      });
    builder.addCase(addVideoAction.pending,
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      (state, action: PayloadAction<any>) => {

      });
    builder.addCase(addVideoAction.fulfilled,
      (state: Draft<any>, action: PayloadAction<any>) => {
        state.allVideos = [action.payload, ...state.allVideos];
        state.loading = action.type;
      });
    builder.addCase(addVideoAction.rejected,
      (state: Draft<any>, action) => {
        state.loading = action.type;
        state.error = action.error.message;
      });
    builder.addCase(addAlbumAction.pending,
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      (state, action: PayloadAction<any>) => {

      });
    builder.addCase(addAlbumAction.fulfilled,
      (state: Draft<any>, action: PayloadAction<any>) => {
        state.allAlbums = [action.payload, ...state.allAlbums];
        state.loading = action.type;
      });
    builder.addCase(addAlbumAction.rejected,
      (state: Draft<any>, action) => {
        state.loading = action.type;
        state.error = action.error.message;
      });
    builder.addCase(AllAlbumAction.pending,
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      (state, action: PayloadAction<any>) => {

      });
    builder.addCase(AllAlbumAction.fulfilled,
      (state: Draft<any>, action: PayloadAction<any>) => {
        state.allAlbums = action.payload.sort((a: any, b: any) =>
          b.id - a.id);
        state.loading = action.type;
      });
    builder.addCase(AllAlbumAction.rejected,
      (state: Draft<any>, action) => {
        state.loading = action.type;
        state.error = action.error.message;
      });
  },

});

export const allVideosSliceSelector = (state: TypeRootReducer) =>
  state.videos;

export const allVideosReducer = allVideosSlice.reducer;
