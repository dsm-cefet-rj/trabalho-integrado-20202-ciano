import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CabecalhoVoltar from '../utils/CabecalhoVoltar';
import Rodape from '../utils/Rodape';
import InfoCompletaLivro from './InfoCompletaLivro';
import { fetchLivro, selectLivroById } from './LivroSlice';
import StatusBox from '../utils/StatusBox';

const InformacoesDetalhadasConsulta = () => {
	let { id } = useParams();
	id = parseInt(id);
	const dispatch = useDispatch();

	let livro = useSelector(state => selectLivroById(state, id));
	const status = useSelector(state => state.livros.status);
	const error = useSelector(state => state.livros.error);

	useEffect(() => {
		if (status === 'not_loaded') {
			dispatch(fetchLivro())
		} else if (status === 'failed') {
			setTimeout(() => dispatch(fetchLivro()), 5000);
		}
	}, [status, dispatch])

	if (typeof (livro) == "undefined") {

		livro = {};
	}

	let informacoes;
	if ((status === 'loaded' || status === 'saved' || status === 'deleted') && livro && livro.data_excluido === null) {

		informacoes =
			<section className="row justify-content-center align-items-start flex-grow-1">
				<div className="row col-sm-8 col-md-7 col-lg-5 col-xl-4 justify-content-center my-3 my-sm-4 p-0">
					<div className="row conteudo justify-content-center px-3 py-5 mx-0 w-100">

						<InfoCompletaLivro livro={livro} />

					</div>
				</div>
			</section>

	} else if (status === 'loading') {
		informacoes = <StatusBox status="Carregando informações do Livro..." />

	} else if (status === 'failed') {
		informacoes = <StatusBox status={"Erro: " + error} estilo='warning' />

	} else {
		informacoes = <StatusBox status="Livro não encontrado." estilo='warning' />
	}

	return (
		<div className="container-fluid d-flex flex-column">
			<CabecalhoVoltar titulo="Informações Detalhadas" link='/livro' />

			{informacoes}

			<Rodape />
		</div>
	);
}
export default InformacoesDetalhadasConsulta;