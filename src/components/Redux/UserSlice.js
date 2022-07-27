import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { httpPost } from './utils';

const baseUrl = 'http://localhost:3004';

export const login = createAsyncThunk("user/login", async (credentials) => {
    return await httpPost(`${baseUrl}/users/login`, credentials);
});

export const signUp = createAsyncThunk("user/signup", async (credentials) => {
    return await httpPost(`${baseUrl}/users/signup`, credentials);
});

const initialState = {
    token: "",
    userInfo: {
        email: "",
        isSeller: false
    },
    count: 0,
    profileStats: {
        name: "Nome do Cliente",
        username: "teste",
        pic: process.env.PUBLIC_URL + "/static/media/exemplo1.7ca3377e5e8501c6a6bd.jpeg",
        photoCount: 2,
        stars: 4.5,
        followers: 500, 
        following: 500
    }
};

export const logout = createAction('user/logout');

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: () => initialState,
    },
    extraReducers: {
        [login.pending]: (state) => { state.status = "loading"; },
        [login.fulfilled]: (state, action) => {
            const { token, name, email, profilePicture: pic, isSeller, username } = action.payload;
            return { 
                ...state,
                status: "loaded",
                token,
                userInfo: { ...state.userInfo, email, isSeller, name }, 
                profileStats: {...state.profileStats, pic, username}
            };
        },
        [login.rejected]: (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        },
        [signUp.pending]: (state) => { state.status = "loading"; },
        [signUp.rejected]: (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        },
    }
})

export default userSlice.reducer