import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { formatData } from '../../../utils';
import CabecalhoVoltar from '../../utils/CabecalhoVoltar';
import Rodape from '../../utils/Rodape';
import StatusBox from '../../utils/StatusBox';
import { fetchEmprestimos, selectEmprestimoById, updateEmprestimoServer } from '../EmprestimosSlice';
import InfoCompletaEmprestimo from '../InfoCompletaEmprestimo';

const EncerrarEmprestimoConfirmacao = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    let { id } = useParams();
    id = parseInt(id);

    const emprestimosStatus = useSelector(state => state.emprestimos.status);
    const emprestimosError = useSelector(state => state.emprestimos.error);
    const emprestimo = useSelector(state => selectEmprestimoById(state, id))

    useEffect(() => {
        if (emprestimosStatus === 'not_loaded')
            dispatch(fetchEmprestimos());
    }, [emprestimosStatus, dispatch]);


    function onClickEncerrarEmprestimo(e) {
        e.preventDefault();

        let hoje = new Date();

        let updateEmprestimo = {
            "livroId": emprestimo.livroId,
            "usuarioId": emprestimo.usuarioId,
            "data_emprestimo": emprestimo.data_emprestimo,
            "data_devolucao": emprestimo.data_devolucao,
            "qtd_renovacoes": emprestimo.qtd_renovacoes,
            "data_devolvido": formatData(hoje),
            "data_excluido": emprestimo.data_excluido
        }

        dispatch(updateEmprestimoServer(emprestimo.id, updateEmprestimo));
        history.push('/emprestimo/encerrar/' + emprestimo.usuarioId);
    }

    let informacoes;
    if ((emprestimosStatus === 'loaded' || emprestimosStatus === 'saved' || emprestimosStatus === 'deleted') && emprestimo && emprestimo.data_devolvido === null && emprestimo.data_excluido === null) {
        informacoes =
            <div className="container-fluid ">

                <CabecalhoVoltar titulo="Encerrar Empréstimo" link={'/emprestimo/encerrar/' + emprestimo.usuarioId} />

                <section className="row justify-content-center align-items-start flex-grow-1">
                    <div className="row col-sm-8 col-md-7 col-lg-5 col-xl-4 justify-content-center my-3 my-sm-4 p-0">
                        <div className="row conteudo justify-content-center px-3 py-5 mx-0 w-100">

                            <InfoCompletaEmprestimo emprestimo={emprestimo} />


                            <button onClick={onClickEncerrarEmprestimo} id="encerrar-emprestimo" className="btn align-self-end text-white botao-red">Encerrar Empréstimo</button>

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
export default EncerrarEmprestimoConfirmacao;
