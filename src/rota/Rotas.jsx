import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ConsultarEmprestimo from '../components/emprestimo/ConsultarEmprestimo';
import EncerrarEmprestimo from '../components/emprestimo/EncerrarEmprestimo';
import EncerrarEmprestimoConfirmacao from '../components/emprestimo/EncerrarEmprestimoConfirmacao';
import ManterEmprestimo from '../components/emprestimo/ManterEmprestimo';
import RegistrarEmprestimo from '../components/emprestimo/RegistrarEmprestimo';
import RenovarEmprestimo from '../components/emprestimo/RenovarEmprestimo';
import RenovarEmprestimoConfirmacao from '../components/emprestimo/RenovarEmprestimoConfirmacao';
import Home from '../components/geral/home/Home';
import CadastrarUsuario from '../components/geral/usuario/CadastrarUsuario';
import Login from '../components/geral/usuario/Login';
import MenuInicialBibliotecario from '../components/geral/usuario/MenuInicialBibliotecario';
import MenuInicialUsuario from '../components/geral/usuario/MenuInicialUsuario';
import AtualizarLivro from '../components/livro/AtualizarLivro';
import CadastrarLivro from '../components/livro/CadastrarLivro';
import InformacoesDetalhadasConsulta from '../components/livro/InformacoesDetalhadasConsulta';
import InformacoesDetalhadasNaoDevolvido from '../components/relatorio/InformacoesDetalhadasNaoDevolvido';
import ManterRelatorio from '../components/relatorio/ManterRelatorio';
import RelatorioDevolucoesLivros from '../components/relatorio/RelatorioDevolucoesLivros';
import RelatorioLivrosEmprestado from '../components/relatorio/RelatorioLivrosEmprestado';
import ConsultarLivro from '../components/livro/ConsultarLivro';
import ListandoLivros from '../components/livro/ListandoLivros';
import DeletandoLivro from '../components/livro/DeletarLivro';

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
				<Route path="/emprestimo/encerrar/:id" component={EncerrarEmprestimoConfirmacao} />
				<Route path="/emprestimo/consultar" component={RenovarEmprestimo} exact/>
				<Route path="/emprestimo/consultar/:id" component={ConsultarEmprestimo} />
				<Route path="/emprestimo/renovar" component={RenovarEmprestimo} exact />
				<Route path="/emprestimo/renovar/:id" component={RenovarEmprestimoConfirmacao} />

				{/* ---------------- Relatório ---------------- */}
				<Route path="/relatorio" component={ManterRelatorio} exact />
				<Route path="/relatorio/livros/devolucoes" component={RelatorioDevolucoesLivros} exact />
				<Route path="/relatorio/livros/devolucoes/informacoes" component={InformacoesDetalhadasNaoDevolvido} />
				<Route path="/relatorio/livros/emprestados" component={RelatorioLivrosEmprestado} />
				
				{/* ---------------- Livro ---------------- */}
				<Route path="/livro/cadastrar" component={CadastrarLivro} />
				<Route path="/livro/atualizar/:id" component={AtualizarLivro} />
				<Route path="/Deletando/Livro/:id" component={DeletandoLivro} />
				<Route path="/livro/consultar" component={ConsultarLivro} />

				<Route path="/livro/consultar/listagem/:id" component={ListandoLivros} exact/>
				<Route path="/livro/informacoes/consulta/:id" component={InformacoesDetalhadasConsulta} />
			</Switch>
		</Router>
	);
}

export default Rotas;