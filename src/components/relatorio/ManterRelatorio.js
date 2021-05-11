import React from 'react';
import Manter from '../utils/BotoesManter';
import CabecalhoVoltar from '../utils/CabecalhoVoltar';
import Rodape from '../utils/Rodape';

const ManterRelatorio = () => {
    let botoes = [
        { link: '/relatorio/emprestimos', texto: 'Relatório de Empréstimos' },
        { link: '/relatorio/devolucoes', texto: 'Relatório de Devoluções' }
    ]

    return (
        <div className="container-fluid d-flex flex-column">
            <CabecalhoVoltar titulo="Relatórios" link="/menu" />

            <Manter botoes={botoes} />

            <Rodape />
        </div>
    );
}
export default ManterRelatorio;