import React from 'react';
import { Navbar } from '../componentes';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PagInicial() {
  return (
      <div>
        { useSelector(state => state.usuarioLogado) === 0 ? <Redirect to='/login' /> : null }
        <Navbar ativo={useSelector(state => state.usuarioLogado)} />
      </div> 
  );
}

export default PagInicial;