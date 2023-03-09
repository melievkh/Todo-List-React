import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 10%;

  button {
    padding: 14px;
    border: none;
    border-radius: 100%;
    background-color: ${({ theme }) => theme.colors.title};
    color: ${({ theme }) => theme.colors.headingColor};
  }
`;
