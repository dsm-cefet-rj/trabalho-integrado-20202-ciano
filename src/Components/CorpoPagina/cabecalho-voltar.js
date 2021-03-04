import React from 'react';
import btnVoltar from '../IMG/left-arrow-white.svg';

const CabecalhoVoltar = (props) => {
    return(
            <header className="row justify-content-start align-items-center cabecalho text-white">
                <img className="mr-2 ml-3 h6" src={btnVoltar} alt="Seta representando voltar" />
                <h1 className="h3">{props.titulo}</h1>
            </header>
    );
}
export default CabecalhoVoltar;