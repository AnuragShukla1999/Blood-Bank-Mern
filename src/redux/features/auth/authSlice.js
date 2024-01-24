import { createSlice } from "@reduxjs/toolkit";
import { getCurrentUser, userLogin, userRetgister } from "./authActions.js";


const token = localStorage.getItem("token") ? localStorage.getItem("toekn") : null;


const initialState = {
    loading: false,
    user: null,
    token,
    error: null,
};


const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {},

    extraReducers: (builder) => {
        // login user 
        builder.addCase(userLogin.pending, (state) => {
            state.loading = true;
            state.error = null;
        });

        builder.addCase(userLogin.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.user = payload.user;
            state.token = payload.token;
        });
        
        builder.addCase(userLogin.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        });

        // registger user
        builder.addCase(userRetgister.pending, (state) => {
            state.loading = true;
            state.error = null;
        });

        builder.addCase(userRetgister.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.user = payload.user;
        });

        builder.addCase(userRetgister.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        });

        // current user
        builder.addCase(getCurrentUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        });

        builder.addCase(getCurrentUser.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        });

        builder.addCase(getCurrentUser.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        });
    },
});


export default authSlice;