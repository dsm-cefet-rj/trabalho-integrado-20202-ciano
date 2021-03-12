import React from 'react';
import CabecalhoVoltar from '../utils/CabecalhoVoltar';
import FormLivro from './FormLivros';
const CadastrarLivro = () => {
    return (
        <div className="container-fluid d-flex flex-column">
            <CabecalhoVoltar titulo="Cadastrar Livro" link='/menu/bibliotecario'/>
            <FormLivro btnNome="Cadastrar" idNome="cadastrar" />
        </div>
    );
}
export default CadastrarLivro;