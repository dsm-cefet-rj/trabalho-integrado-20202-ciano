import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ConsultarEmprestimo from '../components/emprestimo/consultar/ConsultarEmprestimo';
import EncerrarEmprestimo from '../components/emprestimo/encerrar/EncerrarEmprestimo';
import EncerrarEmprestimoConfirmacao from '../components/emprestimo/encerrar/EncerrarEmprestimoConfirmacao';
import ManterEmprestimo from '../components/emprestimo/ManterEmprestimo';
import RegistrarEmprestimo from '../components/emprestimo/RegistrarEmprestimo';
import RenovarEmprestimo from '../components/emprestimo/renovar/RenovarEmprestimo';
import RenovarEmprestimoConfirmacao from '../components/emprestimo/renovar/RenovarEmprestimoConfirmacao';
import RenovarEmprestimoConsulta from '../components/emprestimo/renovar/RenovarEmprestimoConsulta';
import Home from '../components/geral/home/Home';
import CadastrarUsuario from '../components/geral/usuario/CadastrarUsuario';
import Login from '../components/geral/usuario/Login';
import MenuInicialBibliotecario from '../components/geral/usuario/MenuInicialBibliotecario';
import MenuInicialUsuario from '../components/geral/usuario/MenuInicialUsuario';
import AtualizarLivro from '../components/livro/AtualizarLivro';
import CadastrarLivro from '../components/livro/CadastrarLivro';
import ConsultarLivro from '../components/livro/ConsultarLivro';
import InformacoesDetalhadasConsulta from '../components/livro/InformacoesDetalhadasConsulta';
import ListandoLivros from '../components/livro/ListandoLivros';
import InformacoesDetalhadasNaoDevolvido from '../components/relatorio/InformacoesDetalhadasNaoDevolvido';
import ManterRelatorio from '../components/relatorio/ManterRelatorio';
import RelatorioDevolucoesLivros from '../components/relatorio/RelatorioDevolucoesLivros';
import RelatorioLivrosEmprestado from '../components/relatorio/RelatorioLivrosEmprestado';
import EncerrarEmprestimoConsulta from '../components/emprestimo/encerrar/EncerrarEmprestimoConsulta';
import ConsultarEmprestimoCompleto from '../components/emprestimo/consultar/ConsultarEmprestimoCompleto';
import ConsultarEmprestimoMatricula from '../components/emprestimo/consultar/ConsultarEmprestimoMatricula';

function Rotas() {
	return (
		<Router>
			<Switch>
				<Route path="/" component={Home} exact />
				<Route path="/login" component={Login} />
				<Route path="/menu/bibliotecario" component={MenuInicialBibliotecario} />
				<Route path="/menu/usuario" component={MenuInicialUsuario} />

				{/* ---------------- Usuário ---------------- */}
				<Route path="/usuario/cadastrar" component={CadastrarUsuario} />

				{/* --------------- Emprestimo --------------- */}
				<Route path="/emprestimo" component={ManterEmprestimo} exact />
				<Route path="/emprestimo/registrar" component={RegistrarEmprestimo} />

				<Route path="/emprestimo/encerrar" component={EncerrarEmprestimo} exact />
				<Route path="/emprestimo/encerrar/:id" component={EncerrarEmprestimoConsulta} exact />
				<Route path="/emprestimo/encerrar/:id/confirmacao" component={EncerrarEmprestimoConfirmacao} />
				
				<Route path="/emprestimo/consultar" component={ConsultarEmprestimoMatricula} exact />
				<Route path="/emprestimo/consultar/:id" component={ConsultarEmprestimo} exact />
				<Route path="/emprestimo/consultar/:id/confirmacao" component={ConsultarEmprestimoCompleto} />
				
				<Route path="/emprestimo/renovar" component={RenovarEmprestimo} exact />
				<Route path="/emprestimo/renovar/:id" component={RenovarEmprestimoConsulta} exact />
				<Route path="/emprestimo/renovar/:id/confirmacao" component={RenovarEmprestimoConfirmacao} />

				{/* ---------------- Relatório ---------------- */}
				<Route path="/relatorio" component={ManterRelatorio} exact />
				<Route path="/relatorio/livros/devolucoes" component={RelatorioDevolucoesLivros} exact />
				<Route path="/relatorio/livros/devolucoes/informacoes" component={InformacoesDetalhadasNaoDevolvido} />
				<Route path="/relatorio/livros/emprestados" component={RelatorioLivrosEmprestado} />

				{/* ---------------- Livro ---------------- */}
				<Route path="/livro/cadastrar" component={CadastrarLivro} />
				<Route path="/livro/atualizar/:id" component={AtualizarLivro} />
				<Route path="/livro/consultar" component={ConsultarLivro} />
				<Route path="/livro/consultar/listagem/:id" component={ListandoLivros} exact />
				<Route path="/livro/informacoes/consulta/:id" component={InformacoesDetalhadasConsulta} />
			</Switch>
		</Router>
	);
}

export default Rotas;