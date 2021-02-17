import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getUserById } from '../services/user-controller';
import { IUser } from '../types/user';
import { ImageDto } from '../types/image';
import { getAllImagesByUserId } from '../services/images-controller';

const loadUser = createAsyncThunk('user/loadUser', async (id: number) => getUserById(id));

/* Данный метод используется ТОЛЬКО для загрузки фотографий юзера поверх
остальных данных, чтобы их отобразить на странице Main. Если нужна подгрузка
данных для страницы Фотографии пишите новый slice. */
const loadUserPhotos = createAsyncThunk('user/loadUserImages', async (userId: number) =>
  getAllImagesByUserId({ limit: 4, offset: 0, userId })
);

export interface UserState {
  data: null | IUser;
  loading: boolean;
  error: null | Error;
  photos: null | ImageDto[];
  errorPhotos: null | Error;
}

const initialState: UserState = {
  data: null,
  photos: null,
  loading: false,
  error: null,
  errorPhotos: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetUser: () => initialState,
    setData: (state, action) => ({ ...state, data: action.payload }),
  },
  extraReducers: {
    /*
    LOAD USER
      Загружает текущего отображаемого юзера.
      Использовать для отображения личной страницы другого пользователя и т.д.
    */
    [loadUser.pending.type]: (state) => ({ ...state, loading: true }),
    [loadUser.fulfilled.type]: (state, action) => ({
      ...state,
      data: action.payload,
      loading: false,
    }),
    [loadUser.rejected.type]: (state, action) => ({
      ...state,
      error: action.error,
      loading: false,
    }),
    [loadUserPhotos.fulfilled.type]: (state, action) => ({
      ...state,
      photos: action.payload,
    }),
    [loadUserPhotos.rejected.type]: (state, action) => ({
      ...state,
      errorPhotos: action.error,
    }),
  },
});

export { loadUser, loadUserPhotos };
export const { resetUser, setData } = userSlice.actions;
export const userReducer = userSlice.reducer;
