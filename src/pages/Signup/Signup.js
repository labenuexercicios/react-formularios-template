import { ContainerForm, ContainerSignup, Input } from './styled'
import useForm from '../../hooks/useForm'

export default function Signup() {


    const {form, onChangeInputs, cleanInputs} = useForm({nome:"", email:"", senha: "", confirmaSenha:""}) // recebi do useform as funcoes e estado form, e passei os parametros necessarios.

   
     const enviaLogin = (e) => {
    e.preventDefault() // prevencao para que a pagina nao recarregue automaticamente (comportamento padrao)
        
       if (form.senha === form.confirmaSenha){
       console.log(form) // console com informacoes passadas no onsubmit do input
        cleanInputs() // funcao feita no useForm para limpar input   
        alert("Cadastrado com sucesso! :)")
       } else {
        alert("Por favor, confirme sua senha corretamente!")
       }
     }



    return (
        <ContainerSignup>
            <ContainerForm onSubmit={enviaLogin}>
                <label htmlFor='nome'>Nome de usuario:</label>
                <Input
                    name='nome'
                    id='nome'
                    value={form.nome}
                    onChange={onChangeInputs}
                    placeholder="Username"
                    required
                />
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
                     name='senha'
                    id='senha'
                    value={form.senha}
                    onChange={onChangeInputs}
                    placeholder="Crie sua senha"
                    type='password'
                    required
                />
                <label htmlFor='confirma-senha'>Confirmação de senha:</label>
                <Input
                    name='confirmaSenha'
                    id='confirma-senha'
                    value={form.confirmaSenha}
                    onChange={onChangeInputs}
                    placeholder="Confirme a senha"
                    type='password'
                    required
                />
                <button>Cadastrar</button>
            </ContainerForm>
        </ContainerSignup>
    )
}
