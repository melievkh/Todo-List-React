import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
`;

export const Card = styled.div`
  width: 60%;
  height: 85%;
  margin-top: 40px;
  padding: 20px 20px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.body};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 4px;
`;

export const Title = styled.h1`
  width: 100%;
  height: 10%;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.title};
  color: ${({ theme }) => theme.colors.headingColor};
`;
