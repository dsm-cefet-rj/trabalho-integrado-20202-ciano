import React from 'react';
import CabecalhoVoltar from '../../utils/CabecalhoVoltar';
import FormCadastrarUsuario from './FormCadUsuario';

const CadastrarUsuario = () => {
    return (
        <div className="container-fluid d-flex flex-column">
            <CabecalhoVoltar titulo="Cadastrar Usuário" />
            <FormCadastrarUsuario />            
        </div>
    );
}
export default CadastrarUsuario;