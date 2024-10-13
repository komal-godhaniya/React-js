import { createSlice } from "@reduxjs/toolkit";

export const todo = createSlice({
    name : "todo",
    initialState:{ students : []},
    reducers:{
        addData:(state , action) => {
            state.students.push(action.payload)
        },
        deleteData:(state , action) => {
            let data = state.students.filter((item) => item.id != action.payload)
            state.students = data
        }
    }
})

export const{addData , deleteData} = todo.actions
export default todo.reducer