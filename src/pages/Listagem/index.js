import React from 'react';
import api from '../../services/api';

export default function Listagem(){
  const funcionarios = api.get('/api/funcionarios', [])
  console.log(funcionarios);
  

  return (
   <>
      
   </>
  )
}