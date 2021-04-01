import React from 'react';
import CabecalhoVoltar from '../../utils/CabecalhoVoltar';
import Rodape from '../../utils/Rodape';
import InfoConsultaEmprestimo from '../InfoConsultaEmprestimo';

const ConsultarEmprestimo = () => {
    return (
        <div className="container-fluid d-flex flex-column">
            <CabecalhoVoltar titulo='Consultar Empréstimo' link='/emprestimo/consultar' />

            <InfoConsultaEmprestimo rota='/emprestimo/consultar/' />

            <Rodape />
        </div >
    );
}

export default ConsultarEmprestimo;