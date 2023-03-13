import React from 'react'
import { useNavigate } from 'react-router-dom'
import { irParaCadastro, irParaLogin } from '../../Routes/coordinator'

export default function Home() {
  const navigate = useNavigate()
  return (
    <div>
      <h1>Boas vindas ao Labeddit!!</h1>
      <h3>Faça seu login ou cadastre-se para continuar</h3>
      <button onClick={() => irParaLogin(navigate)}>Login</button>
      <button onClick={() => irParaCadastro(navigate)}>Cadastro</button>
    </div>
  )
}
