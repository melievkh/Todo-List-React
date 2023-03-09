import { useDispatch, useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import AddTodo from "../components/add_todo/AddTodo";
import ThemeButton from "../components/theme_button/theme_button";
import TodoList from "../components/todo_list/TodoList";
import { setDarkTheme, setDefaultTheme } from "../redux/slices/theme_slice";
import { Card, Title, Wrapper } from "./main.style";

function Main() {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  console.log(theme.darkmode);

  const toggleTheme = () => {
    return !theme.darkmode
      ? dispatch(setDarkTheme())
      : dispatch(setDefaultTheme());
  };

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Card>
          <ThemeButton toggleTheme={toggleTheme} />
          <Title>Todo List</Title>
          <AddTodo />
          <TodoList />
        </Card>
      </Wrapper>
    </ThemeProvider>
  );
}

export default Main;
