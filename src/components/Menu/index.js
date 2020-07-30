import React from 'react';
import Logo from '../../assets/img/FabiFlix.png';
import './Menu.css';
import Button from '../ButtonLink';



function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="FabiFlix logo"/>
      </a>
      <Button ass="a"  className="ButtonLink" href="/">
        Novo Vídeo
      </Button>
    </nav>
  )
}

export default Menu;