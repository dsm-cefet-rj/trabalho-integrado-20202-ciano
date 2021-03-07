import React from 'react';
import CapaLivro from '../img/capa-livro-exemplo.svg';
import CabecalhoVoltar from '../utils/CabecalhoVoltar';
import Rodape from '../utils/Rodape';
import BotoesLivrosEmprestados from './BotoesLivrosEmprestados';

var livros = [
    { href: '#', id: '1', titulo: 'Calculo Vol.1', imagem: CapaLivro, imagemAlt: 'Livro fechado' },
    { href: '#', id: '2', titulo: 'Algebra Linear', imagem: CapaLivro, imagemAlt: 'Livro fechado' }
]
var usuarioConsultado = { nome: 'Rodrio da Silva Barreto', matricula: '19654684ADM', email: 'exemplo@email.com', telefone: '(21) 93939-9933', livros: livros }

const ConsultarEmprestimo = () => {
    return (
        <div className="container-fluid d-flex flex-column">

            <CabecalhoVoltar titulo="Consultar Empréstimo" />

            <section className="row justify-content-center flex-grow-1">
                <div className="row col-12 col-sm-12 col-md-8 col-lg-7 col-xl-6 p-5 align-items-start conteudo">
                    <table className="table table-bordered bg-white">
                        <tr>
                            <th scope="row">Nome:</th>
                            <td>{usuarioConsultado.nome}</td>
                        </tr>
                        <tr>
                            <th scope="row">Matrícula:</th>
                            <td>{usuarioConsultado.matricula}</td>
                        </tr>
                        <tr>
                            <th scope="row">E-mail:</th>
                            <td>{usuarioConsultado.email}</td>
                        </tr>
                        <tr>
                            <th scope="row">Telefone:</th>
                            <td>{usuarioConsultado.telefone}</td>
                        </tr>
                    </table>

                    <div className="align-items-start mt-4 w-100">
                        <h3 className="text-center">Livros:</h3>

                        <BotoesLivrosEmprestados livros={usuarioConsultado.livros} />
                    </div>
                </div>
            </section>

            <Rodape />
        </div>
    );
}

export default ConsultarEmprestimo;