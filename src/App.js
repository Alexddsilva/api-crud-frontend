import React from 'react';
import Header from "./components/Header";
import FuncionarioBox from "./components/Funcionario"

function App() {
  return (
    <div className="container">
      <Header title="CRUD Funcionario"/>
      <br />
      <FuncionarioBox />
    </div>
  );
}

export default App;
