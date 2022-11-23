import React, { useState } from 'react'
import { MainContainer, Form, Input } from './styles'

function MainPage() {
  const [nome, setNome] = useState("")
  const [idade, setIdade] = useState("")
  const [email, setEmail] = useState("")

  const onChangeNome = (event) => {
    setNome(event.target.value)
  }

  const onChangeIdade = (event) => {
    setIdade(event.target.value)
  }

  const onChangeEmail = (event) => {
    setEmail(event.target.value)
  }

  const handleClick = (event) => {
    event.preventDefault()

    console.log(`nome: ${nome}, idade: ${idade}, e-mail: ${email} `)
  }

  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>

      <Form onSubmit={handleClick}>
        <label htmlFor="nome">Nome:</label>
        <Input 
          id="nome"
          value={nome}
          onChange={onChangeNome}
        />

        <label htmlFor="idade">Idade:</label>
        <Input 
          id="idade"
          value={idade}
          onChange={onChangeIdade}
        />

        <label htmlFor="email">E-mail:</label>
        <Input 
          id="email"
          value={email}
          onChange={onChangeEmail}
        />
        
        
      <button type="submit">Enviar dados</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage
