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
        deleteTodo: (state, action: PayloadAction<string>) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
          },
          toggleComplete: (state, action: PayloadAction<string>) => {
            const todo = state.todos.find((todo) => todo.id === action.payload);
            if (todo) {
              todo.isCompleted = !todo.isCompleted;
            }
          },
          updateTodo: (
            state,
            action: PayloadAction<{ id: string; title: string; description: string }>
          ) => {
            const { id, title, description } = action.payload;
            const todoToUpdate = state.todos.find((todo) => todo.id === id);
            if (todoToUpdate) {
              todoToUpdate.title = title;
              todoToUpdate.description = description;
            }
          },
    },
});

export const  {AddTodo ,deleteTodo,toggleComplete, updateTodo} = todoSlice.actions

export default todoSlice.reducer;