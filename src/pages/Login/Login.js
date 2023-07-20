import { useNavigate } from 'react-router-dom'
import { irParaCadastro } from '../../Routes/coordinator'
import { ContainerForm, ContainerLogin, Input } from './styled'
import useForm from '../../hooks/useForm'

export default function Login() {

 const {form, onChangeInputs, cleanFields} = useForm({email:"", password:""}) // recebi do useform as funcoes e estado form, e passei os parametros necessarios.

 const navigate = useNavigate() // declarei o usenavigate para utilizar o cordinator

  const enviaLogin = (e) => {
    e.preventDefault() // prevencao para que a pagina nao recarregue automaticamente (comportamento padrao)
    console.log(form) // console com informacoes passadas no onsubmit do input
    cleanFields() // funcao feita no useForm para limpar input
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
          pattern='(?=^.{8,}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$' 
          title='deve conter ao menos uma letra minúscula, uma letra maiúscula, um numero, um caractere especial e ao menos 8 dos caracteres mencionados' 
          required
          />

        <button>Fazer Login</button>
      </ContainerForm>
      <button onClick={() => irParaCadastro(navigate)}>Ainda não tenho uma conta</button>
    </ContainerLogin>
  )
}
