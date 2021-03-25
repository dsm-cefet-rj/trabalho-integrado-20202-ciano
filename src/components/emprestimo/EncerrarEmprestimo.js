import React from 'react';
import CabecalhoVoltar from '../utils/CabecalhoVoltar';
import Rodape from '../utils/Rodape';
import ConsultarMatricula from './ConsultarMatricula';
//import { useDispatch, useSelector } from 'react-redux';
//import { useParams } from 'react-router-dom';
//import { selectEmprestimoById, updateEmprestimoServer } from "./EmprestimosSlice";

const EncerrarEmprestimo = () => {

    /*const { id } = useParams();
    const dispatch = useDispatch()
    const emprestimoFound = useSelector(state => selectEmprestimoById(state, id));

    function emprestimosStatus(id) {
        dispatch(updateEmprestimoServer(id));
    }*/
    

    return (
        <div className="container-fluid">

            <CabecalhoVoltar titulo="Encerrar Empréstimo" link='/emprestimo'/>

            <ConsultarMatricula />

            <Rodape />
        </div>
    );
}
export default EncerrarEmprestimo;