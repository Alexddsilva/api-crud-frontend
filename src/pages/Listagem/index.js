import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import './style.css';

export default function Listagem(){
  const [funcionarios, setFuncionarios] = useState([]);

  useEffect(() => {
    async function loadFuncionarios () {
      const response = await api.get('/api/funcionarios')

      setFuncionarios(response.data);
    }
    loadFuncionarios();
  }, [funcionarios]);


  async function deleteFuncionario(id){
    await api.delete(`/api/funcionarios/${id}`)
  }

  return (
   <div className="content_tab">
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Sobrenome</th>
            <th>E-mail</th>
            <th>nis</th>
            <th>Opções</th>
          </tr>
        </thead>
        <tbody>
          {funcionarios.map(funcionario => (
              <tr key={funcionario.id}>
                <td>{funcionario.nome}</td> 
                <td>{funcionario.sobrenome}</td> 
                <td>{funcionario.email}</td> 
                <td>{funcionario.nis}</td>
                <td id="options">
                  <button className="btn_editar">Editar</button>
                  <button className="btn_excluir" onClick={event => deleteFuncionario(funcionario.id)}>Excluir</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
   </div>
  )
}