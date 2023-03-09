import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  max-height: 140px;
  height: 60px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 10px 10px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.title};
`;

export const TodoTitle = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;

  h2 {
    font-size: 18px;
    color: ${({ theme }) => theme.colors.headingColor};
    font-weight: 400;
    margin: 0;
  }

  p {
    margin: 0;
    font-size: 12px;
    text-align: start;
    color: ${({ theme }) => theme.colors.headingColor};
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  width: 30%;
  justify-content: end;
  gap: 8px;

  button {
    padding: 8px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }
`;
