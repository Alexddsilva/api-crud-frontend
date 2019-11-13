import React from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import './style.css';

export default function Cadastro(){
  let funcionario = {
    id: 0,
    nome:'',
    sobrenome:'',
    email:'',
    nis:''
  }

  async function handleSubmit(event){
    event.preventDefault();

    await api.post('/api/funcionarios', {
      "nome": funcionario.nome,
      "sobrenome": funcionario.sobrenome,
      "email": funcionario.email,
      "nis": funcionario.nis
    })
    setTimeout(() => {
      window.location.href = "/api/listagem";
    }, 100);
  }

  return ( 

    <div className="content">  
      <p> 
        Escreva os dados do <strong>funcionário</strong> que deseja adicionar
      </p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome:</label>
        <input 
          type="text" 
          id="nome"
          placeholder="2 a 30 letras"
          maxLength="30"
          pattern=".{2,30}"
          onChange={event => funcionario.nome = event.target.value.trim()}
          required
          />
        <label htmlFor="sobrenome">Sobrenome:</label>
        <input 
          type="text" 
          id="sobrenome" 
          placeholder="de 2 a 50 letras"
          maxLength="50"
          pattern=".{2,50}"
          onChange={ event => funcionario.sobrenome = event.target.value.trim()}
          required
          />
          <label htmlFor="email">E-Mail *</label>
        <input 
          type="email" 
          id="email" 
          placeholder="E-mail do funcionário"
          pattern="[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          onChange={event => funcionario.email = event.target.value.trim()}
          required
          />
          <label htmlFor="nome">Nis:</label>
        <input 
          type="text" 
          id="nis" 
          placeholder="digite o nis (apenas números)"
          maxLength="11"
          pattern="[0-9]*"
          onChange={event => funcionario.nis = event.target.value}
          required
          />
      <button className="btn" type="submit">Adicionar</button>
      </form>
      <Link to="/">
        <button className="btn_home">Home</button>
      </Link>
        
    </div>  
  )
}