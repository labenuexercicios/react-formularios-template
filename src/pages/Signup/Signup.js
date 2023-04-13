import React, { useState } from 'react'
import { ContainerForm, ContainerSignup, Input } from './styled'

export default function Signup() {
    const [nomeUsuario, setNomeUsuario] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [confirmaSenha, setConfirmaSenha] = useState("")

    const onChangeNome = (e) => {
        setNomeUsuario(e.target.value)
    }
    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const onChangeSenha = (e) => {
        setSenha(e.target.value)
    }
    const onChangeConfirmaSenha = (e) => {
        setConfirmaSenha(e.target.value)
    }

    const enviarCadastro = () => {
        //* EXTRA: validando a senha - ter certeza que o usuário sabe qual senha cadastrou
        if (senha === confirmaSenha) {
            console.log({nomeUsuario, email, senha, confirmaSenha})
        }
    }

    return (
        <ContainerSignup>
            <ContainerForm onSubmit={enviarCadastro}>
                <label htmlFor='nome'>Nome de usuario:</label>
                <Input
                    id='nome'
                    value={nomeUsuario}
                    onChange={onChangeNome}
                    placeholder="username"
                />
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
                    value={senha}
                    onChange={onChangeSenha}
                    placeholder="Crie sua senha"
                />
                <label htmlFor='confirma-senha'>Confirmação de senha:</label>
                <Input
                    id='confirma-senha'
                    value={confirmaSenha}
                    onChange={onChangeConfirmaSenha}
                    placeholder="Confirme a senha"
                />
                <button>Cadastrar</button>
            </ContainerForm>
        </ContainerSignup>
    )
}
