import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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

  function selectFuncionaro(funcionario){
    const dadosFuncionario = {
      "id": funcionario.id,
      "nome": funcionario.nome,
      "sobrenome": funcionario.sobrenome,
      "email": funcionario.email,
      "nis": funcionario.nis
    }
    console.log(dadosFuncionario);
    localStorage.setItem('funcionario_id', dadosFuncionario.id);
    localStorage.setItem('funcionario_nome', dadosFuncionario.nome);
    localStorage.setItem('funcionario_sobrenome', dadosFuncionario.sobrenome);
    localStorage.setItem('funcionario_email', dadosFuncionario.email);
    localStorage.setItem('funcionario_nis', dadosFuncionario.nis);
    setTimeout(() => {
      window.location.href = "/api/edicao";
    }, 1000);
  }

  return (
    <div className="main">
      <Link to="/api/funcionarios">
      <button className="btn">Cadastrar novo funcionário</button>
      </Link>
      <Link to="/">
      <button className="btn_tab_home">Home</button>
      </Link>
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
                      <button className="btn_editar" type="submit" onClick={event => selectFuncionaro(funcionario)}>Editar</button>
                      <button className="btn_excluir" onClick={event => deleteFuncionario(funcionario.id)}>Excluir</button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
      </div>
    </div>
  )
}