import React from 'react';
import { Link } from 'react-router-dom';

const BotoesManter = (props) => {
    return (
        <section className="row justify-content-center align-items-start flex-grow-1">
            <div className="row justify-content-center col-sm-10 col-md-7 col-lg-6 col-xl-4 my-5 conteudo">
                <div className="row ajustar_manter_emprestimo my-5 w-100">

                    {props.botoes.map((botao, index) =>
                        <Link key={index} to={botao.link} id={botao.id} className="btn pt-3 mb-4 w-100 text-white">{botao.texto}</Link>
                    )}

                </div>
            </div>
        </section>
    );
}
export default BotoesManter;