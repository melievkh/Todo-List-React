import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, setTodos } from "../../redux/slices/todos_slice";
import { InputWrapper } from "./style";

const AddTodo = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    getTodosFromStorage();
  }, []);

  useEffect(() => {
    setTodosToStorage(todos);
  }, [todos]);

  const onAddTodo = (name, description) => {
    if (name.trim().length === 0 || description.trim().length === 0) {
      alert("Write some todo!");
      return;
    }
    dispatch(addTodo({ name, description }));
    setName("");
    setDescription("");
  };

  const setTodosToStorage = async (todos) => {
    try {
      const stringifyTodos = JSON.stringify(todos);
      await localStorage.setItem("todos", stringifyTodos);
    } catch (error) {
      console.log(error);
    }
  };

  const getTodosFromStorage = async () => {
    try {
      const savedTodos = await JSON.parse(localStorage.getItem("todos"));
      return savedTodos != null ? dispatch(setTodos(savedTodos)) : null;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <InputWrapper>
      <input
        placeholder="title"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={() => onAddTodo(name, description)}>Add</button>
    </InputWrapper>
  );
};

export default AddTodo;
