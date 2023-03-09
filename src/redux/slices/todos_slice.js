import { createSlice } from "@reduxjs/toolkit";

const todos_slice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    setTodos: (state, { payload }) => {
      return (state = payload);
    },

    addTodo: (state, { payload }) => {
      const newTodo = {
        id: Math.random().toString(),
        name: payload.name,
        description: payload.description,
        completed: false,
      };
      return (state = [...state, newTodo]);
    },

    deleteTodo: (state, { payload }) => {
      return state.filter((todo) => todo.id !== payload);
    },

    completeTodo: (state, { payload }) => {
      const foundTodo = state.find((todo) => todo.id === payload);
      if (foundTodo) {
        foundTodo.completed = !foundTodo.completed;
      }
    },
  },
});

export const { setTodos, addTodo, deleteTodo, completeTodo } =
  todos_slice.actions;
export default todos_slice.reducer;
