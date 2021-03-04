import React from 'react';
import CabecalhoVoltar from './CorpoPagina/cabecalho-voltar';
import Rodape from './CorpoPagina/rodape';

const RelatorioOpcoes = () => {
    return(
    <div className="container-fluid ">
        
        <CabecalhoVoltar titulo="Relatórios" />

        <section className="row  justify-content-center align-items-center corpo_renovar1 ">
            <div className="row ajustar_manter_emprestimo  justify-content-center align-items-start   col-sm-10 col-md-7 col-lg-6 col-xl-4 conteudo1 ">
                <div className="row ajustar_manter_emprestimo mt-5 align-items-center justify-content-center w-100">
                    <a href="" className="btn mt-5 pt-3  w-100 align-self-center mb-4 text-white ">Relatório de Livros Emprestados</a>
                    <a href="" className="btn pt-3  w-100  align-self-center text-white ">Relatório de Livros Devolvidos</a>
                    <a href="" className="btn  pt-3 w-100 align-self-center mt-5 text-white ">Relatório de Livros não Devolvidos</a>
                    <a href="" className="btn  pt-3 w-100 align-self-center mt-5 text-white ">Relatório de Livros Requeridos</a>
                </div>
            </div>
        </section>
        
        <Rodape />
    </div>
    );
}
export default RelatorioOpcoes;