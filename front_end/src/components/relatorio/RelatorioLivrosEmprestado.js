import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formatData } from '../../utils';
import { fetchEmprestimos, selectAllEmprestimos } from '../emprestimo/EmprestimosSlice';
import CabecalhoVoltar from '../utils/CabecalhoVoltar';
import Rodape from '../utils/Rodape';
import StatusBox from '../utils/StatusBox';
import TabelaRelatorio from './TabelaRelatorio';
import ComparaData from '../utils/ComparaData';

const RelatorioLivrosEmprestado = () => {
    const dispatch = useDispatch();

    const emprestimosStatus = useSelector(state => state.emprestimos.status);
    const emprestimosError = useSelector(state => state.emprestimos.error);
    const emprestimos = (useSelector(selectAllEmprestimos)).filter((emprestimo) => emprestimo.data_devolvido === null && emprestimo.data_excluido === null);


    const [filtro, setFiltro] = useState({
        titulo: "",
        data_inicio: "",
        data_fim: ""
    })

    const onChangeFiltro = (e) => {
        setFiltro({
            ...filtro, [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (emprestimosStatus === 'not_loaded' || emprestimosStatus === 'saved' || emprestimosStatus === 'deleted')
            dispatch(fetchEmprestimos());
    }, [emprestimosStatus, dispatch]);

    let informacoes;
    if ((emprestimosStatus === 'loaded') && emprestimos) {

        // Filtra o título.
        let emprestimosFiltrados = emprestimos.filter((emprestimo) => {
            return filtro.titulo !== "" ? emprestimo.livro.titulo.toLowerCase().indexOf(filtro.titulo.toLowerCase()) !== -1 : true;
        });

        // Filtra a data inicial.
        emprestimosFiltrados = emprestimosFiltrados.filter((emprestimo) => {
            return filtro.data_inicio !== "" ? ComparaData(emprestimo.data_emprestimo, formatData(filtro.data_inicio), true) > -1 : true;
        });

        // Filtra a data final.
        emprestimosFiltrados = emprestimosFiltrados.filter((emprestimo) => {
            return filtro.data_inicio !== "" ? ComparaData(formatData(filtro.data_fim), emprestimo.data_emprestimo, true) > -1 : true;
        })

        informacoes =
            <section className="row py-sm-4 justify-content-center align-content-start flex-grow-1">
                <div className="row m-0 p-0 justify-content-center conteudo col-12 col-sm-10 col-md-8">

                    <form className="row justify-content-center col-12 col-sm-10 col-md-8 m-2 m-sm-4" id="filtro">
                        <h2 className="h3 mb-0 w-100 text-center font-weight-bold">Filtro:</h2>

                        <input onChange={onChangeFiltro} className="mt-4 input_login col-10" type="text" name="titulo" placeholder="Título do Livro" />

                        <label className="h5 mt-3 font-weight-bold text-center w-100" htmlFor="titulo">Data inicial</label>
                        <input onChange={onChangeFiltro} className="input_login col-10" type="date" name="data_inicio" />

                        <label className="h5 mt-3 font-weight-bold text-center w-100" htmlFor="titulo">Data final</label>
                        <input onChange={onChangeFiltro} className="input_login col-10" type="date" name="data_fim" />

                    </form>

                    <TabelaRelatorio emprestimos={emprestimosFiltrados} />
                </div>
            </section>

    } else if (emprestimosStatus === 'loading') {
        informacoes = <StatusBox status="Carregando informações dos Empréstimos..." />

    } else if (emprestimosStatus === 'failed') {
        informacoes = <StatusBox status={"Erro: " + emprestimosError} estilo='warning' />

    } else {
        informacoes = <StatusBox status="Empréstimos não encontrado." estilo='warning' />
    }

    return (
        <div className="container-fluid d-flex flex-column">

            <CabecalhoVoltar titulo="Relatório de Emprestimos" link="/relatorio" />

            {informacoes}

            <Rodape />
        </div >
    );
}
export default RelatorioLivrosEmprestado;