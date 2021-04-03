import React from 'react';
import CabecalhoHome from './CabecalhoHome';
import Rodape from '../../utils/Rodape';
import Conteudo from './ConteudoPrincipal'

const Home = () => {
    return (
        <div className="container-fluid d-flex flex-column" >
            <CabecalhoHome />
            <Conteudo />
            < Rodape />
        </div>
    );
}
export default Home;