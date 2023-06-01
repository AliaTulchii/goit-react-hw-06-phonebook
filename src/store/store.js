import { configureStore } from "@reduxjs/toolkit";
import contactSlice from "features/contactSlice";


export const store = configureStore({
    reducer: {
        contact: contactSlice,
    },
})