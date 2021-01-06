import { createAsyncThunk, createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';
import errFetchHandler from '../../helperFunctions/errFetchHandler';
import { TypeRootReducer } from '../rootReducer';
import {
  fetchVideos,
  fetchAddVideo,
  fetchAllAlbum,
  fetchAddAlbum,
  fetchAllVideosInAlbum,
  fetchAddVideoInAlbum,
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
  }
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
  }
);

export const addVideoInAlbumAction = createAsyncThunk(
  'videos/addVideoInAlbumAction',
  async (videoId: number, argThunkAPI) => {
    try {
      const response = await fetchAddVideoInAlbum(2768, videoId);
      return response.data;
    } catch (err) {
      return errFetchHandler(err.response.data, argThunkAPI);
    }
  }
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
  }
);
export const AllAlbumAction = createAsyncThunk('videos/AllAlbumAction', async (argThunkAPI) => {
  try {
    const response = await fetchAllAlbum(65);
    return response.data;
  } catch (err) {
    return errFetchHandler(err.response.data, argThunkAPI);
  }
});
export const AllVideosInAlbumAction = createAsyncThunk(
  'videos/AllVideosInAlbumAction',
  async (id: number, argThunkAPI) => {
    try {
      const response = await fetchAllVideosInAlbum(id);
      return response.data;
    } catch (err) {
      return errFetchHandler(err.response.data, argThunkAPI);
    }
  }
);

const allVideosSlice = createSlice({
  name: 'allVideosSlice',
  initialState: {
    allVideos: [],
    allAlbums: [],
    videosInAlbum: [],
    loading: '',
    error: '',
    message: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    // builder.addCase(allVideosAction.pending,
    //   (state, action: PayloadAction<any>) => {
    //
    //   });
    builder.addCase(allVideosAction.fulfilled, (state: Draft<any>, action: PayloadAction<any>) => {
      state.allVideos = action.payload.sort((a: any, b: any) => b.id - a.id);
      state.loading = action.type;
    });
    builder.addCase(allVideosAction.rejected, (state: Draft<any>, action) => {
      state.loading = action.type;
      state.error = action.error.message;
    });
    // builder.addCase(addVideoAction.pending,
    //   (state, action: PayloadAction<any>) => {
    //
    //   });
    builder.addCase(addVideoAction.fulfilled, (state: Draft<any>, action: PayloadAction<any>) => {
      state.allVideos = [action.payload, ...state.allVideos];
      state.loading = action.type;
    });
    builder.addCase(addVideoAction.rejected, (state: Draft<any>, action) => {
      state.loading = action.type;
      state.error = action.error.message;
    });
    // builder.addCase(addVideoInAlbumAction.pending,
    //   (state, action: PayloadAction<any>) => {
    //
    //   });
    builder.addCase(
      addVideoInAlbumAction.fulfilled,
      (state: Draft<any>, action: PayloadAction<any>) => {
        state.message = action.payload;
        state.loading = action.type;
      }
    );
    builder.addCase(addVideoInAlbumAction.rejected, (state: Draft<any>, action) => {
      state.loading = action.type;
      state.error = action.error.message;
    });
    // builder.addCase(addAlbumAction.pending,
    //   (state, action: PayloadAction<any>) => {
    //   });
    builder.addCase(addAlbumAction.fulfilled, (state: Draft<any>, action: PayloadAction<any>) => {
      state.allAlbums = [action.payload, ...state.allAlbums];
      state.loading = action.type;
    });
    builder.addCase(addAlbumAction.rejected, (state: Draft<any>, action) => {
      state.loading = action.type;
      state.error = action.error.message;
    });
    // builder.addCase(AllAlbumAction.pending,
    //   (state, action: PayloadAction<any>) => {
    //
    //   });
    builder.addCase(AllAlbumAction.fulfilled, (state: Draft<any>, action: PayloadAction<any>) => {
      state.allAlbums = action.payload.sort((a: any, b: any) => b.id - a.id);
      state.loading = action.type;
    });
    builder.addCase(AllAlbumAction.rejected, (state: Draft<any>, action) => {
      state.loading = action.type;
      state.error = action.error.message;
    });
    // builder.addCase(AllVideosInAlbumAction.pending,
    //   (state, action: PayloadAction<any>) => {
    //
    //   });
    builder.addCase(
      AllVideosInAlbumAction.fulfilled,
      (state: Draft<any>, action: PayloadAction<any>) => {
        state.videosInAlbum = action.payload;
        state.loading = action.type;
      }
    );
    builder.addCase(AllVideosInAlbumAction.rejected, (state: Draft<any>, action) => {
      state.loading = action.type;
      state.error = action.error.message;
    });
  },
});

export const allVideosSliceSelector = (state: TypeRootReducer) => state.videos;

export const allVideosReducer = allVideosSlice.reducer;
