import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import contactSlice from "features/contactSlice";

const persistConfig = {
    key: 'root',
    storage,
  }

export const store = configureStore({
    reducer: {
        contact: contactSlice,
    },
})