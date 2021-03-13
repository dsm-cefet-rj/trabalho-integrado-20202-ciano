import React from 'react';
import CabecalhoVoltar from '../utils/CabecalhoVoltar';
import Rodape from '../utils/Rodape';
import InfosGeraisRelatorio from './InfosGeraisRelatorio';

const RelatorioLivrosEmprestado = () => {
    return (
        <div className="container-fluid d-flex flex-column">

            <CabecalhoVoltar titulo="Relatório de Emprestimos" link="/relatorio" />

            <section className="row justify-content-center align-items-start flex-grow-1">
                <div className="row col-12 col-sm-10 col-md-9 col-lg-8 col-xl-7 justify-content-center p-0">

                    <div className="w-100 conteudo mx-0">
                        <div className="d-flex w-100 justify-content-center m-0">
                            <form className="px-3 pt-3 justify-content-center" action="#" method="">
                                <h2 className="h4 mb-0">Filtro:</h2>
                                {/* 
                                    Título do Livro:
                                    - String;
                                */}
                                <input className="input_login d-block w-100" type="text" name="titulo" placeholder="Título do Livro" />
                                {/* 
                                    Data de Inicio:
                                    - Date;
                                    - Deve ser igual ou anterior a data atual;
                                */}
                                <input className="input_login d-block d-sm-inline" type="date" name="data-inicio" placeholder="Data Início" />
                                
                                {/* 
                                    Data de Fim:
                                    - Date;
                                    - Deve ser igual ou anterior a data atual e também deve ser igual ou posterior a data de Inicio;
                                */}
                                <input className="input_login d-block d-sm-inline" type="date" name="data-fim" placeholder="Data Fim" />
                                <input className="btn btn-block align-self-center d-block" id="enviar" type="submit" value="Filtrar" />
                            </form>
                        </div>

                        <InfosGeraisRelatorio />
                    </div>
                </div>
            </section>

            <Rodape />
        </div>
    );
}
export default RelatorioLivrosEmprestado;