import React from 'react';
import { Link } from 'react-router-dom';
import CapaLivro from '../img/capa-livro-exemplo.svg';

const BotaoLivroEmprestado = (props) => {
    return (
        <Link to={props.livro.link} className="d-flex flex-column w-100 p-2 m-sm-3 my-3">
            <img src={CapaLivro} alt="Livro fechado" className="size-book-10" /><br />
            <h4 className="text-center">{props.livro.titulo}</h4>
        </Link>
    );
}

const BotoesLivrosEmprestados = (props) => {
    if (props != null && props.livros.length > 0) {
        return (
            <div className="d-flex flex-column flex-sm-row justify-content-center livros overflow-auto">
                {
                    props.livros.map((livro) =>
                        <BotaoLivroEmprestado key={livro.id} livro={livro} />)
                }
            </div>
        );
    }
    else {
        return (<div id="projetos">Não possui livros.</div>)
    }
}
export default BotoesLivrosEmprestados;