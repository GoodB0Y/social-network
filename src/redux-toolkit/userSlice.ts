import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getUser } from './../services/SocialNetworkAPI/SocialNetwork';


const loadUser = createAsyncThunk( 
    'user/loadUser',
    async ( id: number ) => {
        const response = await getUser(id);
        return response.data;
    }   
);

const initialState = {
    data: null,
    loading: false,
    error: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setData: ( state, action ) => ({ ...state, data: action.payload, loading: false }),
        setError: ( state, action ) => ({ ...state, error: action.payload, loading: false }),
        setLoading: ( state ) => ({ ...state, loading: true }),
    },
    extraReducers: {
        [loadUser.pending.type]: ( state ) => 
            ({ ...state, loading: true }),
        [loadUser.fulfilled.type]: (state, action) => 
            ({ ...state, data: action.payload, loading: false }),
        [loadUser.rejected.type]: (state, action) =>
            ({ ...state, error: action.payload, loading: false }),
    }
});


export interface IUser {
    "userId": number,
    "firstName": string,
    "lastName": string,
    "dateOfBirth": string,
    "education": string,
    "aboutMe": string,
    "avatar": string,
    "email": string,
    "password": string,
    "city": string,
    "linkSite"?: string,
    "roleName": string,
    "status"?: string,
    "activeName"?: string
}
export const { setData, setError, setLoading } = userSlice.actions;
export { loadUser };
export const userReducer = userSlice.reducer;