import React, { useState } from 'react'
import { ContainerForm, ContainerSignup, Input } from './styled'
import useForm from '../../hooks/useForm'
import { irParaLogin } from '../../Routes/coordinator'
import { useNavigate } from 'react-router-dom'

export default function Signup() {
    
    // const [nomeUsuario, setNomeUsuario] = useState("")
    // const [email, setEmail] = useState("")
    // const [senha, setSenha] = useState("")
    // const [confirmaSenha, setConfirmaSenha] = useState("")

    // const onChangeNome = (e) => {
    //     setNomeUsuario(e.target.value)
    // }
    // const onChangeEmail = (e) => {
    //     setEmail(e.target.value)
    // }
    // const onChangeSenha = (e) => {
    //     setSenha(e.target.value)
    // }
    // const onChangeConfirmaSenha = (e) => {
    //     setConfirmaSenha(e.target.value)
    // }

    const navigate = useNavigate()

    const { form, onChangeInputs, cleanFields } = useForm({
        nomeUsuario: '',
        email: '',
        senha: '',
        confirmaSenha: '',
    })

    const enviarCadastro = (event) => {
        event.preventDefault()
        //* EXTRA: validando a senha - ter certeza que o usuário sabe qual senha cadastrou
        if (form.senha === form.confirmaSenha) {
            console.log(form)
            cleanFields()
        } else {
            alert(`Senhas Diferentes`)
        }    
    }

    return (
        <ContainerSignup>
            <ContainerForm onSubmit={enviarCadastro}>
                <label htmlFor='nome'>Nome de usuario:</label>
                <Input
                    name='nomeUsuario'
                    id='nome'
                    value={form.nomeUsuario}
                    onChange={onChangeInputs}
                    placeholder="username"
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
                    pattern='^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$'
                    title='deve conter ao menos uma letra minúscula, uma letra maiúscula, um caractere especial e ao menos 8 dos caracteres mencionados'
                    required
                />
                <label htmlFor='confirma-senha'>Confirmação de senha:</label>
                <Input
                    name='confirmaSenha'
                    id='confirma-senha'
                    value={form.confirmaSenha}
                    onChange={onChangeInputs}
                    placeholder="Confirme a senha"
                    required
                />
                <button onClick={() => irParaLogin(navigate)}>Cadastrar</button>
            </ContainerForm>
        </ContainerSignup>
    )
}
