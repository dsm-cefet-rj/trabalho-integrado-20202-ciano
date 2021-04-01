import React from 'react';
import CapaLivro from '../img/capa-livro-exemplo.svg';

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

let autoresFormatado = (autores) => {
    let autorF = ["Autor:", ""];
    if (autores.length > 0) {
        let aux = 0;
        
        autores.forEach(
            (autor) => {
                if (aux === 0)
                    autorF[1] = autor;
                else {
                    autorF[0] = "Autores:"
                    autorF[1] = autorF[1].concat(', ', autor);
                }
                ++aux;
            }
        )
    }
    return autorF;
}

const InfoCompletaEmprestimo = (props) => {
    let emprestimo = props.emprestimo;
    let usuario = emprestimo.usuario;
    let livro = emprestimo.livro;

    let autores = autoresFormatado(livro.autores);

    return (
        <>
            <img src={CapaLivro} alt="Livro fechado" className="size-book-10" />

            <div className="table-responsive">

                <TabelaFormatada titulo="Livro" informacoes={[
                    { th: 'Título:', td: livro.titulo },
                    { th: 'Edição:', td: livro.edicao },
                    { th: autores[0], td: autores[1] },
                    { th: 'Cod. Localização:', td: livro.cod_localizacao },
                    { th: 'ISBN:', td: livro.isbn },
                    { th: 'QTD Total:', td: livro.qtd_total }
                ]} />

                <TabelaFormatada titulo="Usuário" informacoes={[
                    { th: 'Nome:', td: usuario.nome },
                    { th: 'Matrícula:', td: usuario.matricula }
                ]} />

                <TabelaFormatada titulo="Empréstimo" informacoes={[
                    { th: 'Data de Emprestimo:', td: emprestimo.data_emprestimo },
                    { th: 'Data de Devolução:', td: emprestimo.data_devolucao },
                    { th: 'Data de Devolvido:', td: (emprestimo.data_devolvido ? emprestimo.data_devolvido : 'Não Devolvido' )}
                ]} />

            </div>
        </>
    );
}
export default InfoCompletaEmprestimo;