import { PayloadAction, createSlice } from "@reduxjs/toolkit";


type TTodo ={
    id:string,
    title:string,
    description: string,
    isCompleted?:boolean,
}

type TInitialState ={
    todos:TTodo[]
}

const initialState: TInitialState = {
    todos: []
}
const todoSlice = createSlice({
    name:"todo",
    initialState, 
    reducers: {
        AddTodo: (state, action: PayloadAction<TTodo>)=>{
            state.todos.push({...action.payload, isCompleted:false})
        },
    },
});

export const  {AddTodo} = todoSlice.actions

export default todoSlice.reducer;