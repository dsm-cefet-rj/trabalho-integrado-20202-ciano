import React from 'react';
import { Link } from 'react-router-dom';
import CabecalhoVoltar from '../utils/CabecalhoVoltar';
import Rodape from '../utils/Rodape';

const ManterRelatorio = () => {
    return (
        <div className="container-fluid ">
            <CabecalhoVoltar titulo="Relatórios" link="/menu/bibliotecario" />
            <section className="row  justify-content-center align-items-center corpo_renovar1 ">
                <div className="row ajustar_manter_emprestimo  justify-content-center align-items-start   col-sm-10 col-md-7 col-lg-6 col-xl-4 conteudo1 ">
                    <div className="row ajustar_manter_emprestimo mt-5 align-items-center justify-content-center w-100">
                        <Link to="/relatorio/livros/emprestados" className="btn mt-5 pt-3  w-100 align-self-center mb-4 text-white ">Relatório de Empréstimos</Link>
                        <Link to="/relatorio/livros/devolucoes" className="btn pt-3  w-100  align-self-center text-white ">Relatório de Devoluções</Link>
                        {/* <Link to="" className="btn  pt-3 w-100 align-self-center mt-5 text-white ">Relatório de Livros Requeridos</Link> */}
                    </div>
                </div>
            </section>
            <Rodape />
        </div>
    );
}
export default ManterRelatorio;