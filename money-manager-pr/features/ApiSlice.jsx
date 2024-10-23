import { createAction, createSlice } from "@reduxjs/toolkit";

export const decrement =createAction('budget/decrement')

export const budget = createSlice({
    name:"budget",
    initialState:{count_budget:0},
    reducers:{
        increment :(state,action)=>{
            state.count_budget += action.payload
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(decrement,(state,action)=>{
            state.count_budget -= action.payload
        })
    }
})

export const{increment} = budget.actions
export default budget.reducer