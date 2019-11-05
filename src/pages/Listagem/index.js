import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import './style.css';

export default function Listagem(){
  const [funcionarios, setFuncionarios] = useState([]);

  useEffect(() => {
    async function loadFuncionarios () {
      const response = await api.get('/api/funcionarios')
      console.log(response);

      setFuncionarios(response.data);
    }
    loadFuncionarios();
  }, []);

  return (
   <>
    <th>Nome</th>
    <th>Sobrenome</th>
    <th>E-mail</th>
    <th>nis</th>
    <th>Opções</th>
    <ul className="lista-funcionarios">
      {funcionarios.map(funcionario => (
          <li key={funcionario.id}>
            <td>{funcionario.nome}</td> 
            <td>{funcionario.sobrenome}</td> 
            <td>{funcionario.email}</td> 
            <td>{funcionario.nis}</td> 
          </li>
        ))
      }
    </ul>
      
   </>
  )
}