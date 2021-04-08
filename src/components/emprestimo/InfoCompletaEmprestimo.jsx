import React from 'react';
import InfoCompletaLivro from '../livro/InfoCompletaLivro';
import TabelaFormatada from '../utils/TabelaFormatada';

const InfoCompletaEmprestimo = (props) => {
    let emprestimo = props.emprestimo;
    let usuario = emprestimo.usuario;
    let livro = emprestimo.livro;

    return (
        <>
            <InfoCompletaLivro livro={livro} />

            <div className="table-responsive">
                <TabelaFormatada titulo="Usuário" informacoes={[
                    { th: 'Nome:', td: usuario.nome },
                    { th: 'Matrícula:', td: usuario.matricula }
                ]} />
            </div>

            <div className="table-responsive">
                <TabelaFormatada titulo="Empréstimo" informacoes={[
                    { th: 'Data de Emprestimo:', td: emprestimo.data_emprestimo },
                    { th: 'Data de Devolução:', td: emprestimo.data_devolucao },
                    { th: 'Quantidade de Renovação(ões):', td: emprestimo.qtd_renovacoes },
                    { th: 'Data de Devolvido:', td: (emprestimo.data_devolvido ? emprestimo.data_devolvido : 'Não Devolvido') }
                ]} />
            </div>

        </>
    );
}
export default InfoCompletaEmprestimo;