import{configureStore} from "@reduxjs/toolkit";
import  todo  from "../features/TodoSlice";


export const store = configureStore({
    reducer:{
        todoKey: todo
    }
})