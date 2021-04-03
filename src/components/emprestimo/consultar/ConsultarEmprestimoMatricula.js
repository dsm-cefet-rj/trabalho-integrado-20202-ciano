import React from 'react';
import CabecalhoVoltar from '../../utils/CabecalhoVoltar';
import Rodape from '../../utils/Rodape';
import ConsultarMatricula from '../ConsultarMatricula';

const ConsultarEmprestimoMatricula = () => {
    return (
        <div className="container-fluid d-flex flex-column">
            <CabecalhoVoltar titulo='Consultar Empréstimo' link='/emprestimo'/>
            
            <ConsultarMatricula rota='/emprestimo/consultar/'/>

            <Rodape />
        </div>
    );
}
export default ConsultarEmprestimoMatricula;