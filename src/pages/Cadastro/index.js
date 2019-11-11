import React from 'react';
import api from '../../services/api';
import './style.css';

export default function Cadastro({ history }){
  let funcionario = {
    id: 0,
    nome:'',
    sobrenome:'',
    email:'',
    nis:''
  }

  async function handleSubmit(){
    

    const response = await api.post('/api/funcionarios', {
      "nome": funcionario.nome,
      "sobrenome": funcionario.sobrenome,
      "email": funcionario.email,
      "nis": funcionario.nis
    })
    console.log(response.data);
    history.push('/api/funcionarios');
  }

  return ( 

    <div className="content">  
      <p> 
        Escreva os dados do <strong>funcionário</strong> que deseja adicionar
      </p>

      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome:</label>
        <input 
          type="text" 
          id="nome"
          maxLength="30"
          minLength="2"
          placeholder="2 a 30 letras"
          onChange={event => funcionario.nome = event.target.value}
          title="de 2 a 30 letras"
          pattern="{2,30}"
          required
          />
        <label htmlFor="sobrenome">Sobrenome:</label>
        <input 
          type="text" 
          id="sobrenome"
          maxLength="50"
          minLength="2"
          placeholder="de 2 a 50 letras"
          onChange={ event => funcionario.sobrenome = event.target.value}
          title="de 2 a 50 letras"
          pattern="{2,50}"
          required
          />
          <label htmlFor="email">E-Mail *</label>
        <input 
          type="email" 
          id="email" 
          placeholder="Digite um e-mail válido do funcionário"
          onChange={event => funcionario.email = event.target.value}
          title="Digite um e-mail váli do funcionário"
          required
          />
          <label htmlFor="nome">nis:</label>
        <input 
          type="text" 
          id="nis"
          maxLength="11"
          minLength="11"
          placeholder="digite o nis (somente números)"
          onChange={event => funcionario.nis = event.target.value}
          title="somente números"
          pattern="[0-9]*"
          required
          />
        
        <button className="btn" onClick={() => handleSubmit()}>Adicionar</button>
        
      </form>

        <button className="btn_home" onClick={history.push('/')}>Home</button>
        
    </div>  
  )
}