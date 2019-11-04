import React from 'react';
import './style.css';

export default function Home({ history }){  

  return (
    <div className="home">
      <h1>CRUD FUNCIONÁRIOS</h1>
      <button className="btn_cadastrar" onClick={() => history.push('/api/funcionarios')}>Cadastrar Funcionários</button>
      <button className="btn_listar" onClick={() => history.push('/api/listagem')}>Lista de Funcionários</button>
    </div>
    
  )
}