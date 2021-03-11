import React from 'react';
import CabecalhoVoltar from '../utils/CabecalhoVoltar';
import Rodape from '../utils/Rodape';
import ConsultarMatricula from './ConsultarMatricula';

const EncerrarEmprestimo = () => {
    return (
        <div className="container-fluid">

            <CabecalhoVoltar titulo="Encerrar Empréstimo" link='/emprestimo'/>

            <ConsultarMatricula />

            <Rodape />
        </div>
    );
}
export default EncerrarEmprestimo;