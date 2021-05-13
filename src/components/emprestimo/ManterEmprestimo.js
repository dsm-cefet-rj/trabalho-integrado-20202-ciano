import React from 'react';
import CabecalhoVoltar from '../utils/CabecalhoVoltar';
import Manter from '../utils/BotoesManter';
import Rodape from '../utils/Rodape';

const ManterEmprestimo = () => {
    let botoes = [
        { link: '/emprestimo/registrar', texto: 'Registrar Empréstimo', id:"Registrar" },
        { link: '/emprestimo/consultar', texto: 'Consultar Empréstimo', id:"Consultar" },
        { link: '/emprestimo/renovar', texto: 'Renovar Empréstimo', id:"Renovar" },
        { link: '/emprestimo/encerrar', texto: 'Encerrar Empréstimo', id:"Encerrar" }
    ]

    return (
        <div className="container-fluid d-flex flex-column">

            <CabecalhoVoltar titulo="Manter Empréstimo" link="/menu" />

            <Manter botoes={botoes} />

            <Rodape />
        </div>
    );
}
export default ManterEmprestimo;