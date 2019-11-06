<<<<<<< HEAD
import React from 'react';
import { } from 'reactstrap'
=======
import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import './style.css';
>>>>>>> branch-bootstrap

export default function Listagem(){
  const [funcionarios, setFuncionarios] = useState([]);

<<<<<<< HEAD
  return (
    <div>

    </div>
=======
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
                <td>
                  <button className="btn_editar">Editar</button>
                  <button className="btn_excluir">Excluir</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
   </>
>>>>>>> branch-bootstrap
  )
}