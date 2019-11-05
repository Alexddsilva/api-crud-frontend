import React, { useEffect, useState } from 'react';
import api from '../../services/api';

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
    <ul className="lista-funcionarios">
      {funcionarios.map(funcionario => (
          <li key={funcionario.id}>{funcionario.nome} {funcionario.sobrenome} {funcionario.email} {funcionario.nis}</li>
        ))
      }
    </ul>
      
   </>
  )
}