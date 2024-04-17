import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../ReduxSlice/Todo/todoSlice'

export const store = configureStore({
    reducer:todoReducer
});