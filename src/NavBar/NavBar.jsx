import React, {useState} from 'react'
import LOGO from './logo.svg'
import {Nav, Logo, Hamburger, MenuLink, Menu} from './styles'


const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
        <Nav>
            <Logo href="/">
                <img src={LOGO} alt="Logo Star Wars"/>
            </Logo>
            <Hamburger onClick={() => setIsOpen(!isOpen)}>
                <span/>
                <span/>
                <span/>
            </Hamburger>
            <Menu isOpen={isOpen}>
                <MenuLink to="/">HOME</MenuLink>

                <MenuLink to="/Characters">CHARACTERS</MenuLink>
    
                <MenuLink to="/Movies">MOVIES</MenuLink>
                 
                <MenuLink to="/Game">GAME</MenuLink>
            </Menu>
        </Nav>
  )
}

export default NavBar