import { createSlice } from "@reduxjs/toolkit";
import { register, login, getCurrentUser, logout } from "./operations";

const initialState = {
  user: null,
  isUserLogin: false,
  status: null,
  token: "",
  isLoading: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    removeStatus: (state, __) => {
      state.status = null;
    },
  },
  extraReducers: {
    [register.pending](state) {
      state.isLoading = true;
      state.status = null;
    },
    [register.fulfilled](state, action) {
      state.user = action.payload.newUser;
      state.status = action.payload.message;
      state.isUserLogin = true;
      state.isLoading = false;
      state.token = action.payload?.token;
      state.isRefreshing = true
    },
    [register.rejected](state, action) {
      const errorMessage = action.payload.split(" ");
      const lastElementIndex = errorMessage.length - 1;
      const error = errorMessage[lastElementIndex];
      if (error === "409") {
        state.status = "Даний користувач уже зареєстрований";
      }
      state.isLoading = false;
      state.isRefreshing = false;
    },
    [login.pending](state, action) {
      state.isLoading = true;
    },
    [login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.status = action.payload.message;
      state.token = action.payload.user.token;
      state.isUserLogin = true;
      state.isLoading = false;
      state.isRefreshing = true;
    },
    [login.rejected](state, action) {
      const errorMessage = action.payload.split(" ");
      const lastElementIndex = errorMessage.length - 1;
      const error = errorMessage[lastElementIndex];
      if (error === "400") {
        state.status = "Не валідний пароль або імя користувача";
      }
      state.isLoading = false;
      state.isRefreshing = false;
    },
    [getCurrentUser.pending](state, action) {
      state.isLoading = true;
    },
    [getCurrentUser.fulfilled](state, action) {
      state.user = action.payload
      state.isLoading = false;
      state.isUserLogin = true;
      state.token = action.payload?.token;
      state.isRefreshing = true;
    },
    [getCurrentUser.rejected](state, action) {
        state.isLoading = false
        state.isRefreshing = false
    },
    [logout.pending](state, action) {
     
    },
    [logout.fulfilled](state, action) {
      state.user = null;
      state.isUserLogin = false;
      state.status = action.payload.message;
      state.token = "";
      state.isLoading = false;
      state.isRefreshing = false;
    },
    [logout.rejected](state, action) {},
  },
});

export const { removeStatus } = authSlice.actions;

export const authReducers = authSlice.reducer;
