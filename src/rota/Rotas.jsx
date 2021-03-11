import React from 'react';
import ManterEmprestimo from '../components/emprestimo/ManterEmprestimo';
import Login from '../components/geral/usuario/Login';
import MenuInicialBibliotecario from '../components/geral/usuario/MenuInicialBibliotecario';
import MenuInicialUsuario from '../components/geral/usuario/MenuInicialUsuario';
import AtualizarLivro from '../components/livro/AtualizarLivro';
import Home from '../components/geral/home/Home';
import CadastrarUsuario from '../components/geral/usuario/CadastrarUsuario';
import CadastrarLivro from '../components/livro/CadastrarLivro';
import InformacoesDetalhadasConsulta from '../components/livro/InformacoesDetalhadasConsulta';
import ManterRelatorio from '../components/relatorio/ManterRelatorio';
import RelatorioDevolucoesLivros from '../components/relatorio/RelatorioDevolucoesLivros';
import RelatorioLivrosEmprestado from '../components/relatorio/RelatorioLivrosEmprestado';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function Rotas() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} />
        <Route path="/manterEmprestimo" component={ManterEmprestimo} />
        <Route path="/menu/bibliotecario" component={MenuInicialBibliotecario} />
        <Route path="/menu/usuario" component={MenuInicialUsuario} />
        <Route path="/livro/atualizar" component={AtualizarLivro} />
        <Route path="/usuario/cadastrar" component={CadastrarUsuario} />
        <Route path="/livro/cadastrar" component={CadastrarLivro} />
        <Route path="/livro/informacoes/consulta" component={InformacoesDetalhadasConsulta} />
        <Route path="/relatorio" component={ManterRelatorio} exact />
        <Route path="/relatorio/devolucoes/livros" component={RelatorioDevolucoesLivros} />
        <Route path="/relatorio/livros/Emprestados" component={RelatorioLivrosEmprestado} />
      </Switch>
    </Router>

  );
}

export default Rotas;