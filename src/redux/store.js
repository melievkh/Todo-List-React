import { configureStore } from "@reduxjs/toolkit";
import theme_slice from "./slices/theme_slice";
import todos_slice from "./slices/todos_slice";

export default configureStore({
  reducer: {
    todos: todos_slice,
    theme: theme_slice,
  },
});
