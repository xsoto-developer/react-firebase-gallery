//import { Email } from '@mui/icons-material';
import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        // status: 'not-authenticated',// 'not-authenticated' , 'authenticated', 'checking'
        status: 'checking',// 'not-authenticated' , 'authenticated', 'checking'
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
        errorMessage: null,
    },
    reducers: {
        login: (state, {payload}) => {
            state.status = 'authenticated';// 'not-authenticated' , 'authenticated', 'checking'
            state.uid = payload.uid;
            state.email = payload.email;
            state.displayName = payload.displayName;
            state.photoURL = payload.photoURL;
            state.errorMessage = null;
        },
        logout: (state, {payload}) => {
            state.status = 'not-authenticated';// 'not-authenticated' , 'authenticated', 'checking'
            state.uid = null;
            state.email = null;
            state.displayName = null;
            state.photoURL = null;
            state.errorMessage = payload?.errorMessage;
        },
        checkingCredentials: (state) => {
            state.status = 'checking';
        }
    }
});



export const { login, logout, checkingCredentials } = authSlice.actions;