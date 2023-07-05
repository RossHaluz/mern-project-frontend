import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { authReducers } from "./auth/slice";
import { postReducer } from "./post/slice";
import { commentReducer } from "./comment/slice";

const persistConfig = {
    key: 'token',
    storage,
    whitelist: 'token',
  }


export const store = configureStore({
    reducer: {
        auth: persistReducer(persistConfig, authReducers),
        post: postReducer,
        comment: commentReducer
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)