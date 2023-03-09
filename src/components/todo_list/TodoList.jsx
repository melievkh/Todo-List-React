import React from "react";
import { useSelector } from "react-redux";

import Todo from "../todo/Todo";
import { Wrapper } from "./style";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <Wrapper>
      {todos.length !== 0 ? (
        todos?.map((todo) => <Todo key={todo.id} todo={todo} />)
      ) : (
        <p>No todos yet!</p>
      )}
    </Wrapper>
  );
};

export default TodoList;
