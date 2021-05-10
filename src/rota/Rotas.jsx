import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
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
import MenuInicial from '../components/geral/usuario/MenuInicial';
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
	const login = useSelector(state => state.logins);

	function PrivateRoute({ children, ...rest }) {
		console.log(children);
		console.log(rest);
		return (
			<Route {...rest} render={({ location }) => {
				if (login.status === 'logged_in') {
					if (typeof rest.authorize !== 'undefined') {
						let UserAuth = login.currentUserAuth;
						let authorize = rest.authorize;

						// Verifica se a categoria do usuário autenticado está contido na categoria exigida pela autorização da rota.
						if (authorize.filter(categoria => categoria === UserAuth.categoria).length !== 0)
							return children;
						else
							return <Redirect to={{
								pathname: '/menu',
								state: { from: location }
							}} />
					}
					else
						return children;
				}
				else
					return <Redirect to={{
						pathname: '/login',
						state: { from: location }
					}} />
			}}
			/>
		)
	}

	return (
		<Router>
			<Switch>
				<Route path="/" component={Home} exact />
				<Route path="/login" component={Login} />
				<PrivateRoute path="/menu/bibliotecario" authorize={['bibliotecario']} >
					<MenuInicialBibliotecario />
				</PrivateRoute>

				<Route path="/menu/usuario" component={MenuInicialUsuario} />

				<PrivateRoute path="/menu" >
					<MenuInicial />
				</PrivateRoute>

				{/* ---------------- Usuário ---------------- */}
				<PrivateRoute path="/usuario/cadastrar" authorize={['bibliotecario']} >
					<CadastrarUsuario />
				</PrivateRoute>

				{/* --------------- Emprestimo --------------- */}
				<PrivateRoute path="/emprestimo" exact >
					<ManterEmprestimo />
				</PrivateRoute>

				<PrivateRoute path="/emprestimo/registrar" authorize={['bibliotecario']} >
					<RegistrarEmprestimo />
				</PrivateRoute>

				<PrivateRoute path="/emprestimo/encerrar" authorize={['bibliotecario']} exact >
					<EncerrarEmprestimo />
				</PrivateRoute>
				<PrivateRoute path="/emprestimo/encerrar/:id" authorize={['bibliotecario']} exact >
					<EncerrarEmprestimoConsulta />
				</PrivateRoute>
				<PrivateRoute path="/emprestimo/encerrar/:id/confirmacao" authorize={['bibliotecario']} >
					<EncerrarEmprestimoConfirmacao />
				</PrivateRoute>

				<PrivateRoute path="/emprestimo/consultar" exact >
					<ConsultarEmprestimoMatricula />
				</PrivateRoute>
				<PrivateRoute path="/emprestimo/consultar/:id" exact >
					<ConsultarEmprestimo />
				</PrivateRoute>
				<PrivateRoute path="/emprestimo/consultar/:id/confirmacao" >
					<ConsultarEmprestimoCompleto />
				</PrivateRoute>

				<PrivateRoute path="/emprestimo/renovar" exact >
					<RenovarEmprestimo />
				</PrivateRoute>
				<PrivateRoute path="/emprestimo/renovar/:id" exact >
					<RenovarEmprestimoConsulta />
				</PrivateRoute>
				<PrivateRoute path="/emprestimo/renovar/:id/confirmacao" >
					<RenovarEmprestimoConfirmacao />
				</PrivateRoute>

				{/* ---------------- Relatório ---------------- */}
				<PrivateRoute path="/relatorio" authorize={['bibliotecario']} exact >
					<ManterRelatorio />
				</PrivateRoute>
				<PrivateRoute path="/relatorio/devolucoes" authorize={['bibliotecario']} exact >
					<RelatorioDevolucoesLivros />
				</PrivateRoute>
				<PrivateRoute path="/relatorio/emprestimos" authorize={['bibliotecario']} >
					<RelatorioLivrosEmprestado />
				</PrivateRoute>
				<PrivateRoute path="/relatorio/emprestimo/:id" authorize={['bibliotecario']} >
					<InformacoesDetalhadasEmprestimo />
				</PrivateRoute>

				{/* ---------------- Livro ---------------- */}
				<PrivateRoute path="/livro" exact >
					<ConsultarLivro />
				</PrivateRoute>
				<PrivateRoute path="/livro/cadastrar" authorize={['bibliotecario']} >
					<CadastrarLivro />
				</PrivateRoute>
				<PrivateRoute path="/livro/atualizar/:id" authorize={['bibliotecario']} >
					<AtualizarLivro />
				</PrivateRoute>
				<PrivateRoute path="/livro/informacoes/:id" >
					<InformacoesDetalhadasConsulta />
				</PrivateRoute>
			</Switch>
		</Router>
	);
}

export default Rotas;