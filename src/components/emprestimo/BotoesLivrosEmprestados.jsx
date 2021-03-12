import React from 'react';
import { Link } from 'react-router-dom';

const BotaoLivroEmprestado = (props) => {
    return (
        <Link to={props.livro.link} className="d-flex flex-column w-100 p-2 m-sm-3 my-3">
            <img src={props.livro.imagem} alt={props.livro.imagemAlt} className="size-book-10" /><br />
            <h4 className="text-center">{props.livro.titulo}</h4>
        </Link>
    );
}

const BotoesLivrosEmprestados = (props) => {
    return (
        <div className="d-flex flex-column flex-sm-row justify-content-center livros overflow-auto">
            {
                props.livros.map((livro) =>
                    <BotaoLivroEmprestado key={livro.id} livro={livro} />)
            }
        </div>
    );
}
export default BotoesLivrosEmprestados;