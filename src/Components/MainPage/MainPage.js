import React, { useState } from 'react'
import { useForm } from '../../hooks/useForm'
import { MainContainer, Form, Input } from './styles'

function MainPage() {
  /* 
   const [nome, setNome] = useState("")
   const [idade, setIdade] = useState("")
   const [email, setEmail] = useState("")*/

  //componente criado no hook
  const [form, onChangeForm, limpar] = useForm({ nome: "", idade: "", email: "", profissão:"" })


  /* const onChangeNome = (event) => {
     setNome(event.target.value)
   }
 
   const onChangeIdade = (event) => {
     setIdade(event.target.value)
   }
 
   const onChangeEmail = (event) => {
     setEmail(event.target.value)
   }*/



  const handleClick = (event) => {
    event.preventDefault()
    limpar()
    console.log(form)
    //console.log(`nome: ${nome}, idade: ${idade}, e-mail: ${email} `)
  }

  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>

      <Form onSubmit={handleClick}>
        <label htmlFor="nome">Nome:</label>
        <Input
          id="nome"
          name='nome'
          value={form.nome}
          onChange={onChangeForm}
          type="nome"
          placeholder=''
        />

        <label htmlFor="idade">Idade:</label>
        <Input
          id="idade"
          name='idade'
          value={form.idade}
          onChange={onChangeForm}
          type="number"
        />

        <label htmlFor="email">E-mail:</label>
        <Input
          id="email"
          name='email'
          value={form.email}
          onChange={onChangeForm}
          type="email"
          
        />

        <label htmlFor="email">Profissão:</label>
        <Input
          id="prodissão"
          name='profissão'
          value={form.profissão}
          onChange={onChangeForm}
          required
        />


        <button type="submit">Enviar dados</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage
