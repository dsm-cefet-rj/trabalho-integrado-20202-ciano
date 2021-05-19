import React from 'react';
import { Link } from 'react-router-dom';
import info_img from '../img/information-color.svg';

const LinhaRelatorio = (props) => {
    let emprestimo = props.emprestimo;
    let indice = props.indice;

    return (
        <tr>
            <th scope="row">{indice}</th>
            <td>{emprestimo.livro.titulo}</td>
            <td>{emprestimo.usuario.nome}</td>
            <td>{emprestimo.data_emprestimo}</td>
            <td>{emprestimo.data_devolucao}</td>
            <td>
                <Link to={"/relatorio/emprestimo/" + emprestimo.id}>
                    <img src={info_img} alt="Informação" className="mx-auto d-block mw-15rem" />
                </Link>
            </td>
        </tr>
    );
}

const TabelaRelatorio = (props) => {
    let emprestimos = props.emprestimos;
    let cont = 0;

    return (
        <div className="table-responsive">
            <table className="table table-striped table-sm table-hover">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Título</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Data Emp.</th>
                        <th scope="col">Data Dev.</th>
                        <th scope="col">Info.</th>
                    </tr>
                </thead>
                <tbody>
                    {emprestimos.map((emprestimo) =>
                        <LinhaRelatorio key={emprestimo.id} indice={++cont} emprestimo={emprestimo} />
                    )}
                </tbody>
            </table>
        </div>
    );
}
export default TabelaRelatorio;