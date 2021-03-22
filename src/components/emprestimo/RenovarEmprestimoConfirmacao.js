import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import CabecalhoVoltar from '../utils/CabecalhoVoltar';
import Rodape from '../utils/Rodape';
import { fetchEmprestimos, selectEmprestimoById } from './EmprestimosSlice';
import InfosGeraisEmprestimo from './InfosGeraisEmprestimo';

function DataRenovacaoString(dataString) {
    let diasDeAcrescimo = 15;
    let dataArr = dataString.split("/");
    var data = new Date(dataArr[2], dataArr[1], dataArr[0]);
    data.setDate(data.getDate() + diasDeAcrescimo);

    return (
        ('0' + data.getDate()).slice(-2) + "/" + ('0' + data.getMonth()).slice(-2) + "/" + data.getFullYear()
    );
}

const RenovarEmprestimoConfirmacao = () => {
    let { id } = useParams();
    id = parseInt(id);
    const dispatch = useDispatch();

    const emprestimosStatus = useSelector(state => state.emprestimos.status);
    const emprestimosError = useSelector(state => state.emprestimos.error);
    const emprestimo = useSelector(state => selectEmprestimoById(state, id));

    useEffect(() => {
        if (emprestimosStatus === 'not_loaded')
            dispatch(fetchEmprestimos());
    }, [emprestimosStatus, dispatch]);

    let informacoes;

    if ((emprestimosStatus === 'loaded' || emprestimosStatus === 'saved' || emprestimosStatus === 'deleted') && emprestimo) {
        informacoes =
            <>
                <InfosGeraisEmprestimo emprestimo={emprestimo} />

                <h3 className="h4 text-center">Deseja renovar o empréstimo para o dia ({DataRenovacaoString(emprestimo.data_devolucao)})?</h3>
                <Link to='/emprestimo/renovar' className="btn align-self-end text-white botao">SIM</Link>
            </>
    } else if (emprestimosStatus === 'loading') {
        informacoes = <div className="alert alert-info w-100" >Carregando informações do Empréstimo...</div>

    } else if (emprestimosStatus === 'failed') {
        informacoes = <div className="alert alert-warning w-100">Erro: {emprestimosError}</div>

    } else {
        informacoes = <div className="alert alert-warning w-100">Empréstimo não encontrado.</div>
    }

    return (
        <div className="container-fluid ">

            <CabecalhoVoltar titulo="Renovar Empréstimo" link='/emprestimo/renovar' />

            <section className="row justify-content-center align-items-start flex-grow-1">
                <div className="row col-sm-8 col-md-7 col-lg-5 col-xl-4 justify-content-center p-0">
                    <div className="row conteudo justify-content-center px-3 py-5 mx-0 w-100">

                        {informacoes}

                    </div>
                </div>
            </section>

            <Rodape />
        </div>
    );
}
export default RenovarEmprestimoConfirmacao;