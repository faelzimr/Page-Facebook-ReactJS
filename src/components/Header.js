import React from 'react';
import { FaUserCircle } from "react-icons/fa";

import logo from '../assets/facebook.png';

export default function Header() {
  return (
    <header>
      <div className="Conteiner">
        <img src={logo} alt="Facebook"/>
        <div className="user">
          <p>Meu perfil</p>
          <FaUserCircle size={20}/>
        </div>
      </div>
      
    </header>
  );
}
