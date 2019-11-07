import React from 'react';
import api from '../../services/api';
import './style.css';

export default function Cadastro( { history }){
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
  }

  return ( /* colocar alguma reação quando clica no botão "Adicionar" */

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
          onChange={event => funcionario.nome = event.target.value}
          />
        <label htmlFor="sobrenome">Sobrenome:</label>
        <input 
          type="text" 
          id="sobrenome" 
          placeholder="de 2 a 50 letras"
          onChange={ event => funcionario.sobrenome = event.target.value}
          />
          <label htmlFor="email">E-Mail *</label>
        <input 
          type="email" 
          id="email" 
          placeholder="E-mail do funcionário"
          onChange={event => funcionario.email = event.target.value}
          />
          <label htmlFor="nome">Nis:</label>
        <input 
          type="text" 
          id="nis" 
          placeholder="digite o nis (apenas números)"
          onChange={event => funcionario.nis = event.target.value}
          />
        <button className="btn">Adicionar</button>
        
      </form>
        <button className="btn_home" onClick={()=> history.push('/')}>Home</button>
    </div>  
  )
}