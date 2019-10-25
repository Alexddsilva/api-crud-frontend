import React, { Component } from 'react';

import { 
  Table,
  Button,
  Form,
  FormGroup,
  Label,
  Input

} from 'reactstrap';

class AddFunc extends Component {

  state = { 
    model: {
      id:0, 
      nome:'', 
      sobrenome:'', 
      email:'', 
      niss:''
    }
  };

  setValues = (e, info) => {
    const { model } = this.state;
    model[info] = e.target.value;
    this.setState = ({model});
  }

  
  render(){

    return (
      <Form>
        <FormGroup>
          <Label for="nome"> Nome:</Label>
          <Input id="nome" type="text" value={this.state.model.nome} placeholder="Entre 2 e 30 caracteres"/>
        </FormGroup>
        <FormGroup>
          <Label for="sobrenome"> Sobrenome:</Label>
          <Input id="sobrenome" type="text" value={this.state.model.sobrenome} placeholder="Entre 2 e 50 caracteres)"/>
        </FormGroup>
        <FormGroup>
          <Label for="email"> Email:</Label>
          <Input id="email" type="email" value={this.state.model.email} placeholder="De 2 a 30 letras"/>
        </FormGroup>
        <FormGroup>   
          <Label for="niss"> NISS:</Label>
          <Input id="niss" type="text" value={this.state.model.niss} placeholder="Somente números"/>
        </FormGroup>
        <Button color="success" block> Salvar </Button>
      </Form>
    ); 
  }
}

class ListFunc extends Component {
  
  render(){
    const { funcionarios } = this.props;
    console.log(funcionarios);
    return (
      <Table className="table-bordered text-center">
        <thead className="thead-dark">
          <tr>
            <th>Nome</th>
            <th>Sobrenome</th>
            <th>Email</th>
            <th>NISS</th>
            <th>Opções</th>
          </tr>
        </thead>
        <tbody>
          {
            funcionarios.map(funcionarios => (
              <tr key={funcionarios.id}>
                <td>{funcionarios.nome}</td>
                <td>{funcionarios.sobrenome}</td>
                <td>{funcionarios.email}</td>
                <td>{funcionarios.niss}</td>
                <td>
                  <Button color="info" size="sm">Editar</Button>
                  <Button color="danger" size="sm">Excluir</Button>
                </td>
              </tr>
            ))
          }
        </tbody>

      </Table>
    );
  }
} 

export default class FuncionarioBox extends Component {
  
  //atualizar com useState e useEffect

  Url= "http://localhost:8080/api/funcionarios";

  state = {
    funcionarios: [],

  }

  componentDidMount(){
    fetch(this.Url)
    .then(response => response.json())
    .then(funcionarios => this.setState({ funcionarios }))
    .catch(e => console.log(e));
  }

  create = (funcionarios) => {
    console.log(funcionarios)

  }

  render(){
    return (
      <div className="row">
        <div className="col-md-6 my-3">
          <h2 className="font-weight-bold text-center"> Cadastro de Funcionario </h2>

          <AddFunc addFuncionario ={this.create}/>
        </div>

        <div className="col-md-6 my-3">
          <h2 className="font-weight-bold text-center"> Lista de Funcionarios</h2>

          <ListFunc funcionarios={this.state.funcionarios}/>
        </div>
    </div>
    );
  }
}