import React, { Fragment } from 'react';
import ManterEmprestimo from './components/emprestimo/ManterEmprestimo';
import Login from './components/geral/usuario/Login';
import MenuInicialBibliotecario from './components/geral/usuario/MenuInicialBibliotecario';
import MenuInicialUsuario from './components/geral/usuario/MenuInicialUsuario';
import AtualizarLivro from './components/livro/AtualizarLivro';
import Home from './components/geral/home/Home';
import CadastrarUsuario from './components/geral/usuario/CadastrarUsuario';
import CadastrarLivro from './components/livro/CadastrarLivro';
import atualizarLivro from './components/livro/AtualizarLivro';
import InformacoesDetalhadasConsulta from './components/livro/InformacoesDetalhadasConsulta';

function App() {
  return (
    <Fragment>
      <CadastrarLivro />
     

    </Fragment>
  );
}

export default App;
