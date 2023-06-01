import { configureStore } from "@reduxjs/toolkit";
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import contactSlice from "features/contactSlice";

const persistConfig = {
    key: 'root',
    storage,
}

const persistedContactsReducer = persistReducer(
    persistConfig,
    contactSlice
)

export const store = configureStore({
    reducer: {
        // contact: contactSlice,
        contact: persistedContactsReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

