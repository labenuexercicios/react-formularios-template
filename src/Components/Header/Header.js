import React from 'react'
import {HeaderContainer, Logo, NavBar, OptionsList} from './styles'
import logo from '../../assets/picture.png'

function Header (){
  return (
    <HeaderContainer>
        <Logo>
            <img src={logo} alt='Logo Labenu' height={40}/>
            <p>Labenu</p>
        </Logo>
        <NavBar>
            <OptionsList>
                <li>Cursos</li>
                <li>Sobre nós</li>
                <li>Para empresas</li>
            </OptionsList>
        </NavBar>
    </HeaderContainer>
  )
}

export default Header