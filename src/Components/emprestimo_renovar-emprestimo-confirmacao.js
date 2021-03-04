import React from 'react';
import Cabecalho from './CorpoPagina/cabecalho-voltar';
import Rodape from './CorpoPagina/rodape';
import CapaLivro from './IMG/capa-livro-exemplo.svg';

const RenovarEmprestimoConfirmacao = () => {
    return (
        <div className="container-fluid ">

            <Cabecalho titulo="Renovar Empréstimo" />

            <section className="row justify-content-center align-items-start flex-grow-1">
                <div className="row col-sm-8 col-md-7 col-lg-5 col-xl-4 justify-content-center p-0">
                    <div className="row conteudo justify-content-center px-3 py-5 mx-0 w-100">

                        <img src={CapaLivro} alt="Livro fechado" className="size-book-10" />

                        <div className="table-responsive">
                            <table className="table table-striped mt-5">
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col" colspan="2" className="text-center">Livro</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">Título:</th>
                                        <td>Calculo Vol.1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Autor:</th>
                                        <td>James Stewart</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Cod. Localização:</th>
                                        <td>S15P5-6</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">ISBN:</th>
                                        <td>C978-85-221-1461-0</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">QTD Disponível:</th>
                                        <td>9</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">QTD Total:</th>
                                        <td>15</td>
                                    </tr>
                                </tbody>
                            </table>

                            <table className="table table-striped my-5">
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col" colspan="2" className="text-center">Usuário</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">Nome:</th>
                                        <td>Carla Philips da Conceição</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Matrícula:</th>
                                        <td>12374754BCC</td>
                                    </tr>
                                </tbody>
                            </table>

                            <table className="table table-striped my-5">
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col" colspan="2" className="text-center">Empréstimo</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">Data de Emprestimo:</th>
                                        <td>19/03/2020</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Data de Devolução:</th>
                                        <td>05/04/2020</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 className="h4 text-center">Deseja renovar o empréstimo para o dia (20/04/2020)?</h3>
                        <a href="#" id="sim" className="btn align-self-end text-white botao">SIM</a>

                    </div>
                </div>
            </section>

            <Rodape />
        </div>
    );
}
export default RenovarEmprestimoConfirmacao;