import {
  AnyAction,
  AsyncThunk,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import {
  getAllTracks,
  getMyTracks,
  getMyPlaylists,
  getFriendIds,
  getSearchedTracks,
  getPlaylistTracks,
  getFriendTracks,
  getFriendData,
} from './AudioAPI';
import IFriendData from '../../types/friendData';
import errFetchHandler from '../../helperFunctions/errFetchHandler';
import ITrack from '../../types/audios';

// TODO: вынести в константы
const Prefix = 'audios';

// Правила нейминга typePrefix у Thunk: [действие][доп.описание][сущности]
// ВАЖНО! сущности - то что получаем по API, например, треки или плейлисты
// На сущностях основаны правила для addMatcher
// Пример: fetchAllTracks

export const fetchAllTracks = createAsyncThunk(
  `${Prefix}/fetchAllTracks`,
  async (data, argThunkAPI) => {
    try {
      const response = await getAllTracks();
      return response.data;
    } catch (err) {
      return errFetchHandler(err.response.data, argThunkAPI);
    }
  }
);

export const fetchMyTracks = createAsyncThunk(
  `${Prefix}/fetchMyTracks`,
  async (data, argThunkAPI) => {
    try {
      const response = await getMyTracks();
      return response.data;
    } catch (err) {
      return errFetchHandler(err.response.data, argThunkAPI);
    }
  }
);

export const fetchFriendTracks = createAsyncThunk(
  `${Prefix}/fetchFriendTracks`,
  async (id: number, argThunkAPI) => {
    try {
      const response = await getFriendTracks(id);
      return response.data;
    } catch (err) {
      return errFetchHandler(err.response.data, argThunkAPI);
    }
  }
);

// TODO: по user-запросам использовать существующий методы / создать контролер с user-запросами
export const fetchFriends = createAsyncThunk(
  `${Prefix}/fetchFriends`,
  async (data, argThunkAPI) => {
    try {
      const arrFriendsIds = await getFriendIds();
      const arrPromiseFriendsData: Array<Promise<IFriendData>> = arrFriendsIds.data.map(
        async ({ id }: { id: number }) => {
          try {
            const friendData = await getFriendData(id);
            friendData.data.id = id;
            return friendData.data;
          } catch (e) {
            return e.response.data;
          }
        }
      );
      const arrFriendsData: Array<IFriendData> = await Promise.all(arrPromiseFriendsData);
      return arrFriendsData;
    } catch (err) {
      return errFetchHandler(err.response.data, argThunkAPI);
    }
  }
);

export const fetchMyPlaylists = createAsyncThunk(
  `${Prefix}/fetchMyPlaylists`,
  async (data, argThunkAPI) => {
    try {
      const response = await getMyPlaylists();
      return response.data;
    } catch (err) {
      return errFetchHandler(err.response.data, argThunkAPI);
    }
  }
);

export const fetchPlaylistTracks = createAsyncThunk(
  `${Prefix}/fetchPlaylistTracks`,
  async (id: number, argThunkAPI) => {
    try {
      const response = await getPlaylistTracks(id);
      return response.data;
    } catch (err) {
      return errFetchHandler(err.response.data, argThunkAPI);
    }
  }
);

export const fetchSearchedTracks = createAsyncThunk(
  `${Prefix}/fetchSearchedTracks`,
  async (name: string, argThunkAPI) => {
    try {
      const response = await getSearchedTracks(name);
      return response.data;
    } catch (err) {
      return errFetchHandler(err.response.data, argThunkAPI);
    }
  }
);

export interface IPlaylist {
  name: string;
  id: number;
  image: string;
}

export interface IAudioState {
  tracks: ITrack[];
  friends: IFriendData[];
  playlists: IPlaylist[];
  isLoading: boolean;
  error: Error | null;
}

const initialState: IAudioState = {
  tracks: [],
  friends: [],
  playlists: [],
  isLoading: true,
  error: null,
};

// Типы для addCatcher в slice в поле extraReducers

type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>;

type PendingAction = ReturnType<GenericAsyncThunk['pending']>;
type RejectedAction = ReturnType<GenericAsyncThunk['rejected']>;
type FulfilledAction = ReturnType<GenericAsyncThunk['fulfilled']>;

// Функции возвращающие boolean, по условию соответсвия action.type отпределенному паттерну

function isPendingAction(action: AnyAction): action is PendingAction {
  return action.type.endsWith('/pending') && action.type.startsWith(Prefix);
}

function isRejectedAction(action: AnyAction): action is RejectedAction {
  return action.type.endsWith('/rejected') && action.type.startsWith(Prefix);
}

function isFulfilledFetchingTracksAction(action: AnyAction): action is FulfilledAction {
  return action.type.endsWith('Tracks/fulfilled') && action.type.startsWith(Prefix);
}

const audioSlice = createSlice({
  name: 'audiosSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // после всех addCase, addMatcher отлавливает все совпадения по определенному типу акшена
    builder
      .addCase(fetchFriends.fulfilled, (state: IAudioState, action: PayloadAction<any>) => {
        state.friends = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchMyPlaylists.fulfilled, (state: IAudioState, action: PayloadAction<any>) => {
        state.playlists = action.payload;
        state.isLoading = false;
      })
      .addMatcher(
        isFulfilledFetchingTracksAction,
        (state: IAudioState, action: PayloadAction<any>) => {
          state.tracks = action.payload;
          state.isLoading = false;
        }
      )
      .addMatcher(isPendingAction, (state: IAudioState) => {
        state.isLoading = true;
      })
      .addMatcher(isRejectedAction, (state: IAudioState, action) => {
        state.isLoading = false;
        state.error = new Error(action.error.message);
      });
  },
});

export default audioSlice.reducer;
