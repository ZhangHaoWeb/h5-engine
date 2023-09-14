import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/countSlice"
import editReducer from "./features/editSlice"

export const store = configureStore({
    reducer: {
        counterReducer,
        editReducer
    },
    devTools: process.env.NODE_ENV !== 'production'
})