import React from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './style.css';

export default function Edicao (){

  async function handleSubmit(event){
    event.preventDefault();
    
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
          //onChange={}
          required
          />
        <label htmlFor="sobrenome">Sobrenome:</label>
        <input 
          type="text" 
          id="sobrenome_edicao" 
          placeholder="de 2 a 50 letras"
          pattern=".{2,50}"
          //onChange={}
          required
          />
          <label htmlFor="email">E-Mail *</label>
        <input 
          type="email" 
          id="email_edicao" 
          placeholder="E-mail do funcionário"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          //onChange={}
          required
          />
          <label htmlFor="nome">Nis:</label>
        <input 
          type="text" 
          id="nis_edicao" 
          placeholder="digite o nis (apenas números)"
          //onChange={}
          required
          />
      <button className="btn_edicao">Adicionar</button>
      </form>
      <Link to="/">
        <button className="btn_home_edicao">Home</button>
      </Link>
        
    </div>  
  )

}