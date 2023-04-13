import styled from "styled-components";

export const ContainerLogin = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30vw;
  height: 50vh;
  padding: 16px;
  margin-top: 10vh;
  min-width: fit-content;
  max-width: 100vw;
  border: 5px double darkgray;
  border-radius: 15px;
  margin-bottom: 32px;
`;

export const Input = styled.input`
  margin-bottom: 32px;
`;
