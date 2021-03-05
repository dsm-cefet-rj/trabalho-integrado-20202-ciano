import React from 'react';
import CabecalhoVoltar from '../utils/CabecalhoVoltar';
import Rodape from '../utils/Rodape';
import info_img from '../img/information-color.svg';

const RelatorioDevolucoesLivros = () => {
    return (
        <div className="container-fluid d-flex flex-column">

            <CabecalhoVoltar titulo="Relatório de Devolução de Livro" />

            <section className="row justify-content-center align-items-start flex-grow-1">
                <div className="row col-12 col-sm-11 col-md-9 col-lg-8 col-xl-7 justify-content-center p-0">

                    <div className="conteudo mx-0 w-100">
                        <div className="d-flex w-100 justify-content-center m-0">
                            <form className="px-3 pt-3 justify-content-center" action="#" method="">
                                <h2 className="h4 mb-0">Filtro:</h2>
                                <input className="input_login d-block d-sm-inline w-100" type="text" name="titulo" placeholder="Título do Livro" />
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="true" name="n-devolvido" id="n-devolvido" />
                                    <label className="form-check-label" for="n-devolvido">Não Devolvidos</label>
                                </div>
                                <input className="input_login d-block d-sm-inline" type="date" name="data-inicio" placeholder="Data Início" />
                                <input className="input_login d-block d-sm-inline" type="date" name="data-fim" placeholder="Data Fim" />
                                <input className="btn btn-block align-self-center d-block" id="enviar" type="submit" value="Filtrar" />
                            </form>
                        </div>

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
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Calculo Vol.1</td>
                                        <td>André Marques</td>
                                        <td>26/03/2020</td>
                                        <td>30/04/2020</td>
                                        <td>
                                            <a href="livro_informacoes-detalhadas.html">
                                                <img src={info_img} alt="Informação" className="mx-auto d-block mw-15rem" />
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Calculo Vol.1</td>
                                        <td>Maria Clara da Silva</td>
                                        <td>10/03/2020</td>
                                        <td>15/04/2020</td>
                                        <td>
                                            <a href="livro_informacoes-detalhadas.html">
                                                <img src={info_img} alt="Informação" className="mx-auto d-block mw-15rem" />
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Use a Cabeça Java</td>
                                        <td>André Marques</td>
                                        <td>26/03/2020</td>
                                        <td>30/04/2020</td>
                                        <td>
                                            <a href="livro_informacoes-detalhadas.html">
                                                <img src={info_img} alt="Informação" className="mx-auto d-block mw-15rem" />
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td>Calculo Vol.1</td>
                                        <td>André Marques</td>
                                        <td>26/03/2020</td>
                                        <td>30/04/2020</td>
                                        <td>
                                            <a href="livro_informacoes-detalhadas.html">
                                                <img src={info_img} alt="Informação" className="mx-auto d-block mw-15rem" />
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">5</th>
                                        <td>Calculo Vol.1</td>
                                        <td>Maria Clara da Silva</td>
                                        <td>10/03/2020</td>
                                        <td>15/04/2020</td>
                                        <td>
                                            <a href="livro_informacoes-detalhadas.html">
                                                <img src={info_img} alt="Informação" className="mx-auto d-block mw-15rem" />
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">6</th>
                                        <td>Use a Cabeça Java</td>
                                        <td>André Marques</td>
                                        <td>26/03/2020</td>
                                        <td>30/04/2020</td>
                                        <td>
                                            <a href="livro_informacoes-detalhadas.html">
                                                <img src={info_img} alt="Informação" className="mx-auto d-block mw-15rem" />
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            <Rodape />
        </div>
    );
}
export default RelatorioDevolucoesLivros;