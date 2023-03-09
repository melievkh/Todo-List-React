import React from "react";
import { useDispatch } from "react-redux";
import { AiOutlineDelete } from "react-icons/ai";
import { IoMdDoneAll } from "react-icons/io";

import { ButtonsWrapper, TodoTitle, Wrapper } from "./style";
import { completeTodo, deleteTodo } from "../../redux/slices/todos_slice";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  const onDeleteTodo = (todoId) => {
    dispatch(deleteTodo(todoId));
  };

  return (
    <Wrapper>
      <TodoTitle>
        <h2
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        >
          {todo?.name}
        </h2>
        <p style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
          {todo?.description}
        </p>
      </TodoTitle>
      <ButtonsWrapper>
        <button onClick={() => dispatch(completeTodo(todo.id))}>
          {!todo.completed ? <IoMdDoneAll size={10} /> : "completed"}
        </button>
        <button onClick={() => onDeleteTodo(todo.id)}>remove</button>
      </ButtonsWrapper>
    </Wrapper>
  );
};

export default Todo;
