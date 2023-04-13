import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { irParaCadastro } from '../../Routes/coordinator'
import { ContainerForm, ContainerLogin, Input } from './styled'

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const onChangeEmail = (e) => {
    setEmail(e.target.value)
  }
  const onChangeSenha = (e) => {
    setPassword(e.target.value)
  }

  const enviaLogin = (e) => {
    e.preventDefault()
    console.log({ email, password })
  }

  return (
    <ContainerLogin>
      <ContainerForm onSubmit={enviaLogin}>
        <label htmlFor='email'>Email:</label>
        <Input
          id='email'
          value={email}
          onChange={onChangeEmail}
          placeholder="nome@email.com"
        />
        <label htmlFor='senha'>Senha:</label>
        <Input
          id='senha'
          value={password}
          onChange={onChangeSenha}
          placeholder="Digite sua senha"
        />
        <button>Fazer Login</button>
      </ContainerForm>
      <button onClick={() => irParaCadastro(navigate)}>Ainda não tenho uma conta</button>
    </ContainerLogin>
  )
}
