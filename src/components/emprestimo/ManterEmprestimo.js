import React from 'react';
import { Link } from 'react-router-dom';
import CabecalhoVoltar from '../utils/CabecalhoVoltar';
import Rodape from '../utils/Rodape';

const ManterEmprestimo = () => {
    return (
        <div className="container-fluid">

            <CabecalhoVoltar titulo="Manter Empréstimo" link="/menu/bibliotecario" />

            <section className="row justify-content-center align-items-center corpo_renovar1">
                <div className="row ajustar_manter_emprestimo justify-content-center align-items-start col-sm-10 col-md-7 col-lg-6 col-xl-4 conteudo1">
                    <div className="row ajustar_manter_emprestimo mt-5 align-items-center justify-content-center w-100">
                        <Link to="/emprestimo/registrar" className="btn mt-5 pt-3 w-100 align-self-center mb-4 text-white">Registrar Empréstimo</Link>
                        <Link to="/emprestimo/consultar" className="btn pt-3 mb-4 w-100 align-self-center text-white">Consultar Empréstimo</Link>
                        <Link to="/emprestimo/renovar" className="btn pt-3 w-100 align-self-center text-white">Renovar Empréstimo</Link>
                        <Link to="/emprestimo/encerrar" className="btn pt-3 w-100 align-self-center mt-5 text-white">Encerrar Empréstimo</Link>
                    </div>
                </div>
            </section>

            <Rodape />
        </div>
    );
}
export default ManterEmprestimo;