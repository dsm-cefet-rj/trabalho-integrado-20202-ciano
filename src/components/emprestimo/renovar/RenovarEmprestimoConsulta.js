import React from 'react';
import { useSelector } from 'react-redux';
import CabecalhoVoltar from '../../utils/CabecalhoVoltar';
import Rodape from '../../utils/Rodape';
import InfoConsultaEmprestimo from '../InfoConsultaEmprestimo';

const EncerrarEmprestimoConsulta = () => {
    const UserAuth = useSelector(state => state.logins.currentUserAuth);
    let link;
    if (UserAuth.categoria === 'bibliotecario') 
        link = '/emprestimo/renovar';
    else
        link = '/menu'

    return (
        <div className="container-fluid d-flex flex-column">
            <CabecalhoVoltar titulo='Renovar Empréstimo' link={link} />

            <InfoConsultaEmprestimo rota='/emprestimo/renovar/' />

            <Rodape />
        </div>
    );
}

export default EncerrarEmprestimoConsulta;