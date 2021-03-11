import React from 'react';
import { Link } from 'react-router-dom';
import info_img from '../img/information-color.svg';


let relatorioEmprestimos = [
    {
        id: '1',
        tituloLivro: 'Calculo Vol. 1',
        nomeUsuario: 'Maria Clara',
        dataEmprestimo: '26/03/2021',
        dataDevolucao: '15/04/2021',
        informacoes: '/relatorio/livros/devolucoes/informacoes'
    },

    {
        id: '2',
        tituloLivro: 'Calculo Vol. 2',
        nomeUsuario: 'Maria Clara',
        dataEmprestimo: '26/03/2021',
        dataDevolucao: '15/04/2021',
        informacoes: '/relatorio/livros/devolucoes/informacoes'
    },

    {
        id: '3',
        tituloLivro: 'Calculo Vol. 3',
        nomeUsuario: 'Maria Clara',
        dataEmprestimo: '26/03/2021',
        dataDevolucao: '15/04/2021',
        informacoes: '/relatorio/livros/devolucoes/informacoes'
    },

    {
        id: '4',
        tituloLivro: 'Calculo Vol. 4',
        nomeUsuario: 'Maria Clara',
        dataEmprestimo: '26/03/2021',
        dataDevolucao: '15/04/2021',
        informacoes: '/relatorio/livros/devolucoes/informacoes'
    },

    {
        id: '5',
        tituloLivro: 'Calculo Vol. 5',
        nomeUsuario: 'Maria Clara',
        dataEmprestimo: '26/03/2021',
        dataDevolucao: '15/04/2021',
        informacoes: '/relatorio/livros/devolucoes/informacoes'
    },

    {
        id: '6',
        tituloLivro: 'Calculo Vol. 6',
        nomeUsuario: 'Maria Clara',
        dataEmprestimo: '26/03/2021',
        dataDevolucao: '15/04/2021',
        informacoes: '/relatorio/livros/devolucoes/informacoes'
    }
]


let TabelaFormatada = (props) => {

    let cont = 0;

    return (
        <tbody>
            {props.relatorioEmprestimos.map((emprestimo) =>
                <tr>
                    <th scope="row">{++cont}</th>
                    <td>{emprestimo.tituloLivro}</td>
                    <td>{emprestimo.nomeUsuario}</td>
                    <td>{emprestimo.dataEmprestimo}</td>
                    <td>{emprestimo.dataDevolucao}</td>
                    <td>
                        <Link to={emprestimo.informacoes}>
                            <img src={info_img} alt="Informação" className="mx-auto d-block mw-15rem" />
                        </Link>
                    </td>
                </tr>
            )}
        </tbody>
    );
}


const InfosGeraisRelatorio = () => {

    return (
        <>
            <div className="table-responsive-sm">
                <table className="table table-hover table-sm table-striped">
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

                    <TabelaFormatada key={relatorioEmprestimos.id} relatorioEmprestimos={relatorioEmprestimos} />
                </table>
            </div>
        </>
    );
}
export default InfosGeraisRelatorio;