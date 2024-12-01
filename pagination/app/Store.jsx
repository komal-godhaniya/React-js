import { configureStore } from "@reduxjs/toolkit";
import { Api } from "../features/PaginationSlice";

export const store = configureStore({
    reducer:{
        apiKey : Api
    }
})