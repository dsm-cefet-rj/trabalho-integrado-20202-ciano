import React from 'react';
import CabecalhoVoltar from '../../utils/CabecalhoVoltar';
import Rodape from '../../utils/Rodape';
import InfoConsultaEmprestimo from '../InfoConsultaEmprestimo';


const RenovarEmprestimoConsulta = () => {

    return (
        <div className="container-fluid d-flex flex-column">
            <CabecalhoVoltar titulo='Renovar Empréstimo' link='/emprestimo/encerrar' />

            <InfoConsultaEmprestimo rota='/emprestimo/encerrar/' />

            <Rodape />
        </div >
    );
}

export default RenovarEmprestimoConsulta;