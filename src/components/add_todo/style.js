import styled from "styled-components";

export const InputWrapper = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 30px 0px;
  box-sizing: border-box;

  input {
    width: 80%;
    height: 40px;
    outline: none;
    border-radius: 8px;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
      rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    text-indent: 8px;
    background-color: ${({ theme }) => theme.colors.input};
    color: ${({ theme }) => theme.colors.textColor};
    border: 1px solid ${({ theme }) => theme.colors.body};

    &:focus {
      border: 1px solid ${({ theme }) => theme.colors.textColor};
    }
  }

  button {
    width: 20%;
    height: 40px;
    border-radius: 8px;
    border: none;
    background-color: ${({ theme }) => theme.colors.title};
    color: ${({ theme }) => theme.colors.headingColor};
    cursor: pointer;
    font-size: 16px;
  }
`;
