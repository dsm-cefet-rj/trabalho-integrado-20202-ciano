import React, {Fragment} from 'react';
import CadastrarUsuario from './Components/cadastrar-usuario';
import LivroAtualizarLivro from './Components/livro_atualizar-livro';
import LivroCadastrarLivro from './Components/livro_cadastrar-livro';
import LivroInformacoesDetalhadasConsulta from './Components/livro_informacoes-detalhadas-consulta';
import LivroInformacoesDetalhadasNaoDevolvido from './Components/livro_informacoes-detalhadas-nao-devolvido';
import LivroListaDeLivros from './Components/livro_lista-de-livros';
import LivroListaDeLivros2 from './Components/livro_lista-de-livros2';
import Login from './Components/login';
import MenuInicialBibliotecario from './Components/menu_inicial-bibliotecario'
import ConsultarEmprestimo from './Components/emprestimo_consultar-emprestimo';
import EncerrarEmprestimoConfirmacao from './Components/emprestimo_encerrar-emprestimo-confirmacao';
import EncerrarEmprestimo from './Components/emprestimo_encerrar-emprestimo';
import ManterEmprestimo from './Components/emprestimo_manter-emprestimo';
import RegistrarEmprestimo from './Components/emprestimo_registrar-emprestimo'
import MenuInicialUsuario from './Components/menu_inicial-usuario'
import BemVindo from './Components/bem-vindo';
import RelatorioDevolucoesLivros from './Components/relatorio_livros-devolucao';
import RelatorioLivrosEmprestado from './Components/relatorio_livros-emprestados';
import RelatorioOpcoes from './Components/relatorios';

function App() {
  return (
    <Fragment>

      <Login />

    </Fragment>
  );
}

export default App;
