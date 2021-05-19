import React from 'react';
import CabecalhoVoltar from '../utils/CabecalhoVoltar';
import FormLivro from './FormLivros';
const CadastrarLivro = () => {

    return (
        <div className="container-fluid d-flex flex-column">
            <CabecalhoVoltar titulo="Cadastrar Livro" link='/livro' />       

            <FormLivro />
        </div>
    );
}
export default CadastrarLivro;