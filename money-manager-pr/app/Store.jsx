import { configureStore } from "@reduxjs/toolkit";
import  budget  from "../features/ApiSlice";

export const store = configureStore({
    reducer:{
        budgetKey: budget
    }
})