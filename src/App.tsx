import React from 'react';
import Cabecalho from '../src/componentes/cabecalho/cabecalho';
import Corpo from '../src/componentes/corpo/corpo'
import Rodape from './componentes/rodape/rodape';
import Login from './componentes/login/login'
import { Routes, Route } from 'react-router-dom';
import Home from './paginas/home';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
