import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/Counter/CounterSlice.ts";

export default configureStore({
    reducer: {
        counter: counterReducer,
    },
});