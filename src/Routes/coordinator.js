export const irParaHome = (navigate) =>{
    navigate('/')
}

export const irParaCadastro = (navigate) =>{
    navigate('/cadastro')
}

export const irParaLogin = (navigate) =>{
    navigate('/login')
}

export const irParaFeed = (navigate) =>{
    navigate('/feed')
}

export const irParaPost = (navigate, id) =>{
    navigate(`/post/${id}`)
}