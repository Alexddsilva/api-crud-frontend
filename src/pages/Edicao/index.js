import React from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './style.css';

export default function Edicao (){

  var funcionario = {
    "id": localStorage.getItem('funcionario_id'),
    "nome": localStorage.getItem('funcionario_nome'),
    "sobrenome": localStorage.getItem('funcionario_sobrenome'),
    "email": localStorage.getItem('funcionario_email'),
    "nis": localStorage.getItem('funcionario_nis')
  }

  async function handleSubmit(event){
    event.preventDefault();
    if (
      funcionario.nome === "" &&
      funcionario.sobrenome === "" &&
      funcionario.email === "" &&
      funcionario.nis === ""
      ) {
        document.alert('Preencha este campo.');
      } else {
      await api.put('/api/funcionarios', {
        "id": funcionario.id,
        "nome": funcionario.nome,
        "sobrenome": funcionario.sobrenome,
        "email": funcionario.email,
        "nis": funcionario.nis
      })}
    setTimeout(() => {
      window.location.href = "/api/listagem";
    }, 500);
  }

  return (

    <div className="content_edicao">  
      <p> 
        Escreva os dados do <strong>funcionário</strong> que deseja adicionar
      </p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome:</label>
        <input 
          type="text" 
          id="nome_edicao"
          placeholder="2 a 30 letras"
          pattern=".{2,30}"
          defaultValue={funcionario.nome}
          onChange={event => funcionario.nome = event.target.value}
          required
          />
        <label htmlFor="sobrenome">Sobrenome:</label>
        <input 
          type="text" 
          id="sobrenome_edicao" 
          placeholder="de 2 a 50 letras"
          pattern=".{2,50}"
          defaultValue={funcionario.sobrenome}
          onChange={event => funcionario.sobrenome = event.target.value}
          required
          />
          <label htmlFor="email">E-Mail *</label>
        <input 
          type="email" 
          id="email_edicao" 
          placeholder="E-mail do funcionário"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          defaultValue={funcionario.email}
          onChange={event => funcionario.email = event.target.value}
          required
          />
          <label htmlFor="nome">Nis:</label>
        <input 
          type="text" 
          id="nis_edicao" 
          placeholder="digite o nis (apenas números)"
          pattern="[0-9]*"
          defaultValue={funcionario.nis}
          onChange={event =>funcionario.nis = event.target.value}
          required
          />
      <button className="btn_edicao" type="submit">Adicionar</button>
      </form>
      <Link to="/">
        <button className="btn_home_edicao">Home</button>
      </Link>
        
    </div>  
  )

}