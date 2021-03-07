import React from 'react';
import CabecalhoVoltar from '../utils/CabecalhoVoltar';
import Rodape from '../utils/Rodape';

const ManterEmprestimo = () => {
    return (
        <div className="container-fluid">

            <CabecalhoVoltar titulo="Manter Empréstimo" />

            <section className="row justify-content-center align-items-center corpo_renovar1">
                <div className="row ajustar_manter_emprestimo justify-content-center align-items-start col-sm-10 col-md-7 col-lg-6 col-xl-4 conteudo1">
                    <div className="row ajustar_manter_emprestimo mt-5 align-items-center justify-content-center w-100">
                        <a href="emprestimo_registrar-emprestimo.html" className="btn mt-5 pt-3 w-100 align-self-center mb-4 text-white">Registrar Empréstimo</a>
                        <a href="emprestimo_renovar-emprestimo.html" className="btn pt-3 w-100 align-self-center text-white">Renovar Empréstimo</a>
                        <a href="emprestimo_encerrar-emprestimo.html" className="btn pt-3 w-100 align-self-center mt-5 text-white">Encerrar Empréstimo</a>
                    </div>
                </div>
            </section>

            <Rodape />
        </div>
    );
}
export default ManterEmprestimo;