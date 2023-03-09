import React from "react";
import { BiMoon } from "react-icons/bi";
import { BsSun } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Wrapper } from "./style";

const ThemeButton = ({ toggleTheme }) => {
  const darkmode = useSelector((state) => state.theme.darkmode);

  return (
    <Wrapper>
      <button onClick={() => toggleTheme()}>
        {darkmode ? <BsSun /> : <BiMoon />}
      </button>
    </Wrapper>
  );
};

export default ThemeButton;
