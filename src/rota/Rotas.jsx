import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ConsultarEmprestimo from '../components/emprestimo/consultar/ConsultarEmprestimo';
import ConsultarEmprestimoCompleto from '../components/emprestimo/consultar/ConsultarEmprestimoCompleto';
import ConsultarEmprestimoMatricula from '../components/emprestimo/consultar/ConsultarEmprestimoMatricula';
import EncerrarEmprestimo from '../components/emprestimo/encerrar/EncerrarEmprestimo';
import EncerrarEmprestimoConfirmacao from '../components/emprestimo/encerrar/EncerrarEmprestimoConfirmacao';
import EncerrarEmprestimoConsulta from '../components/emprestimo/encerrar/EncerrarEmprestimoConsulta';
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
import InformacoesDetalhadasEmprestimo from '../components/relatorio/InformacoesDetalhadasEmprestimo';
import ManterRelatorio from '../components/relatorio/ManterRelatorio';
import RelatorioDevolucoesLivros from '../components/relatorio/RelatorioDevolucoesEmprestimo';
import RelatorioLivrosEmprestado from '../components/relatorio/RelatorioLivrosEmprestado';

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
				<Route path="/relatorio/devolucoes" component={RelatorioDevolucoesLivros} exact />
				<Route path="/relatorio/emprestimos" component={RelatorioLivrosEmprestado} />
				<Route path="/relatorio/emprestimo/:id" component={InformacoesDetalhadasEmprestimo} />

				{/* ---------------- Livro ---------------- */}
				<Route path="/livro" component={ConsultarLivro} exact />
				<Route path="/livro/cadastrar" component={CadastrarLivro} />
				<Route path="/livro/atualizar/:id" component={AtualizarLivro} />
			    <Route path="/livro" component={ConsultarLivro} exact />
				<Route path="/livro/informacoes/:id" component={InformacoesDetalhadasConsulta} />
			</Switch>
		</Router>
	);
}

export default Rotas;