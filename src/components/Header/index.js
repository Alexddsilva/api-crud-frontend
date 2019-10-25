import React from 'react';
import './style.css';

const Header = ( {title }) => (
  <header>
    <h1 className="font-weight-bold"> {title?title:'Título'}</h1>
    
  </header>
);

export default Header;