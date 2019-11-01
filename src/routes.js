import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Listagem from './pages/Listagem';

export default function Routes(){
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />P
        <Route path="/api/funcionarios" exact component={Cadastro} />P
        <Route path="/api/funcionarios" exact component={Listagem} />P
      </Switch>
    </BrowserRouter>
  );
}