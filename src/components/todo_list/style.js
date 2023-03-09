import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 60%;
  overflow-y: scroll;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 10px;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    display: none;
  }

  p {
    color: gray;
    font-size: 18px;
    text-align: center;
  }
`;
