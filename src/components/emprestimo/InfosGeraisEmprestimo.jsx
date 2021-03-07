import React from 'react';

let TabelaFormatada = (props) => {
    //Aguarda 2 parâmetros (titulo, informacoes)
    //informacoes precisa ser um array. Ex: [{ th: 'Nome', td: 'Marcia Andrade Cunha' }]

    return (<table className="table table-striped my-5">
        <thead className="thead-dark">
            <tr>
                <th scope="col" colspan="2" className="text-center">{props.titulo}</th>
            </tr>
        </thead>
        <tbody>
            {props.informacoes.map((informacao) =>
                <tr>
                    <th scope="row">{informacao.th}</th>
                    <td>{informacao.td}</td>
                </tr>
            )}
        </tbody>
    </table>);
}

const InfosGeraisEmprestimo = (props) => {
    let usuario = props.usuario;
    let livro = props.livro;
    let emprestimo = props.emprestimo;

    return (
        <>
            <img src={livro.imagem} alt="Livro fechado" className="size-book-10" />

            <div className="table-responsive">

                <TabelaFormatada titulo="Livro" informacoes={[
                    { th: 'Título:', td: livro.titulo },
                    { th: 'Autor:', td: livro.autor },
                    { th: 'Cod. Localização:', td: livro.codLocalizacao },
                    { th: 'ISBN:', td: livro.isbn },
                    { th: 'QTD Disponível:', td: livro.qtdDisponivel },
                    { th: 'QTD Total:', td: livro.qtdTotal }
                ]} />

                <TabelaFormatada titulo="Usuário" informacoes={[
                    { th: 'Nome:', td: usuario.nome },
                    { th: 'Matrícula:', td: usuario.matricula }
                ]} />

                <TabelaFormatada titulo="Empréstimo" informacoes={[
                    { th: 'Data de Emprestimo:', td: emprestimo.dataEmprestimo },
                    { th: 'Data de Devolução:', td: emprestimo.dataDevolucao }
                ]} />

            </div>
        </>
    );
}
export default InfosGeraisEmprestimo;