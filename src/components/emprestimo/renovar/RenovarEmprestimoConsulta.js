import React from 'react';
import CabecalhoVoltar from '../../utils/CabecalhoVoltar';
import Rodape from '../../utils/Rodape';
import InfoConsultaEmprestimo from '../InfoConsultaEmprestimo';


const EncerrarEmprestimoConsulta = () => {

    return (
        <div className="container-fluid d-flex flex-column">
            <CabecalhoVoltar titulo='Renovar Empréstimo' link='/emprestimo/renovar' />

            <InfoConsultaEmprestimo rota='/emprestimo/renovar/' />

            <Rodape />
        </div >
    );
}

export default EncerrarEmprestimoConsulta;