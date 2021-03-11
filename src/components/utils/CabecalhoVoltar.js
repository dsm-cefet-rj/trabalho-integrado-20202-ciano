import React from 'react';
import btnVoltar from '../img/left-arrow-white.svg';
import {Link} from 'react-router-dom';

const CabecalhoVoltar = (props) => {
    return (
        <header className="row justify-content-start align-items-center cabecalho text-white">
           <Link to={props.links} ><img className="mr-2 ml-3 h6" src={btnVoltar} alt="Seta representando voltar" /></Link>
            <h1 className="h3">{props.titulo}</h1>
        </header>
    );
}
export default CabecalhoVoltar;