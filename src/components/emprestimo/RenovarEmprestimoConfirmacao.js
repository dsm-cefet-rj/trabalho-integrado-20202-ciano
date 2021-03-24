import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { adiarData } from '../../utils';
import CabecalhoVoltar from '../utils/CabecalhoVoltar';
import Rodape from '../utils/Rodape';
import { fetchEmprestimos, selectEmprestimoById, updateEmprestimoServer } from './EmprestimosSlice';
import InfosGeraisEmprestimo from './InfosGeraisEmprestimo';

const RenovarEmprestimoConfirmacao = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    let { id } = useParams();
    id = parseInt(id);
    
    let diasDeAcrescimo = 15;

    const emprestimosStatus = useSelector(state => state.emprestimos.status);
    const emprestimosError = useSelector(state => state.emprestimos.error);
    const emprestimo = useSelector(state => selectEmprestimoById(state, id));

    useEffect(() => {
        if (emprestimosStatus === 'not_loaded')
            dispatch(fetchEmprestimos());
    }, [emprestimosStatus, dispatch]);


    function onClickRenovarEmprestimo(e) {
        e.preventDefault();

        let updateEmprestimo = {
            "id": emprestimo.id,
            "livroId": emprestimo.livroId,
            "usuarioId": emprestimo.usuarioId,
            "data_emprestimo": emprestimo.data_emprestimo,
            "data_devolucao": adiarData(emprestimo.data_devolucao, diasDeAcrescimo),
            "data_devolvido": null,
            "data_excluido": null
        }

        dispatch(updateEmprestimoServer(updateEmprestimo));
        history.push('/emprestimo');
    }

    let informacoes;
    if ((emprestimosStatus === 'loaded' || emprestimosStatus === 'saved' || emprestimosStatus === 'deleted') && emprestimo) {
        let dataRenovacao = adiarData(emprestimo.data_devolucao, diasDeAcrescimo);
        informacoes =
            <>
                <InfosGeraisEmprestimo emprestimo={emprestimo} />

                <h3 className="h4 text-center">Deseja renovar o empréstimo para o dia ({dataRenovacao})?</h3>
                <button onClick={onClickRenovarEmprestimo} className="btn align-self-end text-white botao">SIM</button>
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