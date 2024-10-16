import{configureStore} from "@reduxjs/toolkit";
import  todo  from "../fetures/TodoSlice";

export const store = configureStore({
    reducer:{
        todoKey: todo
    }
})