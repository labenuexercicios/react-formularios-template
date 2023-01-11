import React, { useState } from "react";
import useForm from "../../hooks/useForm";
import { MainContainer, Form, Input } from "./styles";

function MainPage() {
  const [formulario, onChangeInputs, clear] = 
  useForm({
    nome: "",
    idade: "",
    email: "",
  });

  const handleClick = (event) => {
    event.preventDefault();
    clear();
    console.log(
      `nome: ${formulario.nome}, 
      idade: ${formulario.idade}, 
      e-mail: ${formulario.email} `
    );
  };

  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>

      <Form onSubmit={handleClick}>
        <label htmlFor="nome">Nome:</label>
        <Input
          name="nome"
          id="nome"
          value={formulario.nome}
          onChange={onChangeInputs}
        />

        <label htmlFor="idade">Idade:</label>
        <Input
          name="idade"
          id="idade"
          value={formulario.idade}
          onChange={onChangeInputs}
        />

        <label htmlFor="email">E-mail:</label>
        <Input
          name="email"
          id="email"
          value={formulario.email}
          onChange={onChangeInputs}
        />

        <button type="submit">Enviar dados</button>
      </Form>
    </MainContainer>
  );
}

export default MainPage;
