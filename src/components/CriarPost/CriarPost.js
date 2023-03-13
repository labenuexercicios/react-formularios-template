import React from 'react'
import { FormPost, Input, TextArea } from './styled'

export default function CriarPost() {

  const enviarPost = (e) => {
    console.log("entrou")
  }

  return (
    <FormPost onSubmit={enviarPost}>
      <label htmlFor='tituloPost'>Título:</label>
      <Input placeholder='digite um título para o seu post' />
      <label htmlFor='textoPost'>Texto:</label>
      <TextArea placeholder='crie um post!' />
      <button>Enviar</button>
    </FormPost>
  )
}
