import React from 'react';

const TabelaFormatada = (props) => {
    //Aguarda 2 parâmetros (titulo, informacoes)
    //informacoes precisa ser um array. Ex: [{ th: 'Nome', td: 'Marcia Andrade Cunha' }]

    return (
    <table className="table table-striped my-5">
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
export default TabelaFormatada;