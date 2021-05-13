import React from 'react';
import { Link } from 'react-router-dom';

const BotoesMenuIncial = (props) => {

    return (
        <section className="d-flex justify-content-center sessao flex-grow-1">
            <div className="d-flex flex-column p-sm-3">
                {props.botoes.map((botao, index) => {
                    return <Link key={index} to={botao.link}><img id={botao.img} src={botao.img} alt="Botão com imagem de livros" className="mb-2 img-thumbnail" /></Link>
                })}
            </div>
        </section>
    );
}
export default BotoesMenuIncial;