import { configureStore } from "@reduxjs/toolkit";
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
});

export const persistor = persistStore(store);

