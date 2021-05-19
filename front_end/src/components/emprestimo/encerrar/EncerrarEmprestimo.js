import React from 'react';
import CabecalhoVoltar from '../../utils/CabecalhoVoltar';
import Rodape from '../../utils/Rodape';
import ConsultarMatricula from '../ConsultarMatricula';

const EncerrarEmprestimo = () => {
    return (
        <div className="container-fluid d-flex flex-column">
            <CabecalhoVoltar titulo="Encerrar Empréstimo" link='/emprestimo' />

            <ConsultarMatricula rota='/emprestimo/encerrar/' />

            <Rodape />
        </div>
    );
}
export default EncerrarEmprestimo;