import React from 'react';
import CabecalhoVoltar from '../utils/CabecalhoVoltar';
import FormLivro from './FormLivros';

const AtualizarLivro = () => {
    return (
        <div className="container-fluid d-flex flex-column">
            <CabecalhoVoltar titulo="Atualizar Livro" />
            <FormLivro btnNome="Atualização" idNome="atualizacao" />
        </div>
    );
}
export default AtualizarLivro;