import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { adiarData } from '../../../utils';
import CabecalhoVoltar from '../../utils/CabecalhoVoltar';
import Rodape from '../../utils/Rodape';
import StatusBox from '../../utils/StatusBox';
import { fetchEmprestimos, selectEmprestimoById, updateEmprestimoServer } from '../EmprestimosSlice';
import InfoCompletaEmprestimo from '../InfoCompletaEmprestimo';

const RenovarEmprestimoConfirmacao = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    let { id } = useParams();
    id = parseInt(id);

    let diasDeAcrescimo = 15;
    let limiteRenovacoes = 2;

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
            "data_devolucao": adiarData(emprestimo.data_devolucao, diasDeAcrescimo),
            "qtd_renovacoes": emprestimo.qtd_renovacoes + 1,
        }

        dispatch(updateEmprestimoServer(emprestimo.id, updateEmprestimo));
        history.push('/emprestimo/renovar/' + emprestimo.usuarioId);
    }

    let informacoes;
    if ((emprestimosStatus === 'loaded' || emprestimosStatus === 'saved' || emprestimosStatus === 'deleted') && emprestimo && emprestimo.data_devolvido === null && emprestimo.data_excluido === null) {
        let dataRenovacao = adiarData(emprestimo.data_devolucao, diasDeAcrescimo);

        informacoes =
            <div className="container-fluid ">

                <CabecalhoVoltar titulo="Renovar Empréstimo" link={'/emprestimo/renovar/' + emprestimo.usuarioId} />

                <section className="row justify-content-center align-items-start flex-grow-1">
                    <div className="row col-sm-8 col-md-7 col-lg-5 col-xl-4 justify-content-center my-3 my-sm-4 p-0">
                        <div className="row conteudo justify-content-center px-3 py-5 mx-0 w-100">



                            <InfoCompletaEmprestimo emprestimo={emprestimo} />

                            <h3 className="h4 text-center">Deseja renovar o empréstimo para o dia ({dataRenovacao})?</h3>
                            <button onClick={onClickRenovarEmprestimo} disabled={emprestimo.qtd_renovacoes >= limiteRenovacoes} className="btn align-self-end text-white botao">SIM</button>

                        </div>
                    </div>
                </section>

                <Rodape />
            </div>
    } else if (emprestimosStatus === 'loading') {
        informacoes = <StatusBox status="Carregando informações do Empréstimo..." />

    } else if (emprestimosStatus === 'failed') {
        informacoes = <StatusBox status={"Erro: " + emprestimosError} estilo='warning' />

    } else {
        informacoes = <StatusBox status="Empréstimo não encontrado." estilo='warning' />
    }


    return (informacoes);
}
export default RenovarEmprestimoConfirmacao;