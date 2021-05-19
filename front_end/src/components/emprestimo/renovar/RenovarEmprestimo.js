import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import CabecalhoVoltar from '../../utils/CabecalhoVoltar';
import Rodape from '../../utils/Rodape';
import ConsultarMatricula from '../ConsultarMatricula';

const RenovarEmprestimo = () => {
    const UserAuth = useSelector(state => state.logins.currentUserAuth);

    if (UserAuth.categoria === 'bibliotecario') {
        return (
            <div className="container-fluid d-flex flex-column">
                <CabecalhoVoltar titulo='Renovar Empréstimo' link='/emprestimo' />

                <ConsultarMatricula rota='/emprestimo/renovar/' />

                <Rodape />
            </div>
        );
    }
    else {
        return <Redirect to={'/emprestimo/renovar/' + UserAuth.usuario.id} />;
    }
}
export default RenovarEmprestimo;