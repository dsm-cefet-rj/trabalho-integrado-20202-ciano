import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { formatData } from '../../../utils';
import CabecalhoVoltar from '../../utils/CabecalhoVoltar';
import Rodape from '../../utils/Rodape';
import { fetchEmprestimos, selectEmprestimoById, updateEmprestimoServer } from '../EmprestimosSlice';
import InfoCompletaEmprestimo from '../InfoCompletaEmprestimo';

const EncerrarEmprestimoConfirmacao = () => {

   const history = useHistory();
   const dispatch = useDispatch();
   let { id } = useParams();
   id = parseInt(id);
   
   const emprestimosStatus = useSelector(state => state.emprestimos.status);
   const emprestimosError = useSelector(state => state.emprestimos.error);
   const emprestimo = useSelector(state => selectEmprestimoById(state, id));

   useEffect(() => {
       if (emprestimosStatus === 'not_loaded')
           dispatch(fetchEmprestimos());
   }, [emprestimosStatus, dispatch]);


   function onClickEncerrarEmprestimo(e) {
       e.preventDefault();

       let hoje = new Date();

       let updateEmprestimo = {
           "id": emprestimo.id,
           "livroId": emprestimo.livroId,
           "usuarioId": emprestimo.usuarioId,
           "data_emprestimo": emprestimo.data_emprestimo,
           "data_devolucao": emprestimo.data_devolucao,
           "data_devolvido": formatData(hoje),
           "data_excluido": emprestimo.data_excluido
       }

       dispatch(updateEmprestimoServer(updateEmprestimo));
       history.push('/emprestimo');
   }

   let informacoes;
   if ((emprestimosStatus === 'loaded' || emprestimosStatus === 'saved' || emprestimosStatus === 'deleted') && emprestimo) {
       informacoes =
           <>
               <InfoCompletaEmprestimo emprestimo={emprestimo} />


               <button onClick={onClickEncerrarEmprestimo} id="encerrar-emprestimo" className="btn align-self-end text-white botao-red">Encerrar Empréstimo</button>
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

            <CabecalhoVoltar titulo="Encerrar Empréstimo" link='/emprestimo/encerrar' />

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
export default EncerrarEmprestimoConfirmacao;
