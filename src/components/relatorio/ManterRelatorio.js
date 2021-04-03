import React from 'react';
import Manter from '../utils/BotoesManter';
import CabecalhoVoltar from '../utils/CabecalhoVoltar';
import Rodape from '../utils/Rodape';

const ManterRelatorio = () => {
    let botoes = [
        { link: '/relatorio/livros/emprestados', texto: 'Relatório de Empréstimos' },
        { link: '/relatorio/livros/devolucoes', texto: 'Relatório de Devoluções' }
    ]

    return (
        <div className="container-fluid ">
            <CabecalhoVoltar titulo="Relatórios" link="/menu/bibliotecario" />

            <Manter botoes={botoes} />

            <Rodape />
        </div>
    );
}
export default ManterRelatorio;