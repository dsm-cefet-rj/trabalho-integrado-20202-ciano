import React from 'react';
import CabecalhoVoltar from '../../utils/CabecalhoVoltar';
import Rodape from '../../utils/Rodape';
import ConsultarMatricula from '../ConsultarMatricula';

const RenovarEmprestimo = () => {
    return (
        <div className="container-fluid">
            <CabecalhoVoltar titulo='Renovar Empréstimo' link='/emprestimo' />

            <ConsultarMatricula rota='/emprestimo/renovar/' />

            <Rodape />
        </div>
    );
}
export default RenovarEmprestimo;