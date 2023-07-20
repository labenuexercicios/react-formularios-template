import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { irParaCadastro } from '../../Routes/coordinator'
import { ContainerForm, ContainerLogin, Input } from './styled'
import useForm from '../../hooks/useForm'

export default function Login() {
  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")
  
  // const onChangeEmail = (e) => {
  //   setEmail(e.target.value)
  // }
  // const onChangeSenha = (e) => {
  //   setPassword(e.target.value)
  // }

  //--------------------------

  // const [form, setForm] = useState({email:'', password:''})

  // const onChangeInputs = (event) => {
  //   const {name, value} = event.target
  //   setForm({...form, [name]: value})
  // }

  const {form, onChangeInputs, cleanFields} = useForm({email:'', password:''})

  const navigate = useNavigate()

  const enviaLogin = (e) => {
    e.preventDefault()
    cleanFields()
    // console.log(form.email, form.password)
  }

  return (
    <ContainerLogin>
      <ContainerForm onSubmit={enviaLogin}>
        <label htmlFor='email'>Email:</label>
        <Input
          name='email'
          id='email'
          value={form.email}
          onChange={onChangeInputs}
          placeholder="nome@email.com"
          type='email'
          required
        />
        <label htmlFor='senha'>Senha:</label>
        <Input
          name='password'
          id='senha'
          value={form.password}
          onChange={onChangeInputs}
          placeholder="Digite sua senha"
          type='password'
          pattern='^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$'
          title='deve conter ao menos uma letra minúscula, uma letra maiúscula, um caractere especial e ao menos 8 dos caracteres mencionados'
          required
        />
        <button>Fazer Login</button>
      </ContainerForm>
      <button onClick={() => irParaCadastro(navigate)}>Ainda não tenho uma conta</button>
    </ContainerLogin>
  )
}
