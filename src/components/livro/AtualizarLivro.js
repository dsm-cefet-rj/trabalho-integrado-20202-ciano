import React from 'react';
import CabecalhoVoltar from '../utils/CabecalhoVoltar';
import FormLivro from './FormLivros';
const AtualizarLivro = () => {
    return (
        <div className="container-fluid d-flex flex-column">
            <CabecalhoVoltar titulo="Atualizar Livro" link='/menu/bibliotecario'/>
            <FormLivro btnNome="Atualização" idNome="atualizacao" />
        </div>
    );
}
export default AtualizarLivro;