import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CabecalhoVoltar from '../../utils/CabecalhoVoltar';
import FormCadastrarUsuario from './FormCadUsuario';
import { fetchUsuarios } from './UsuariosSlice';

const CadastrarUsuario = () => {
    const status = useSelector(state => state.usuarios.status);
    const error = useSelector(state => state.usuarios.error);
    
    const dispatch = useDispatch();
    
    useEffect(() => {
        if (status === 'not_loaded') {
            dispatch(fetchUsuarios())
        } else if (status === 'failed') {
            setTimeout(() => dispatch(fetchUsuarios()), 5000);
        }
    }, [status, dispatch])
    
    let formulario = '';
    
    if (status === 'loaded' || status === 'saved' || status === 'deleted') {
        formulario = <FormCadastrarUsuario />;
    
    } else if (status === 'loading') {
        formulario = <div className="alert h3 text-sucess text-center mt-2 alert-success">Carregando os usuarios...</div>
    
    } else if (status === 'failed') {
        formulario = <div className="alert h3 text-danger text-center mt-2 alert-danger" >Error: {error}</div>
    }
    
    return (
        <div className="container-fluid d-flex flex-column">
            <CabecalhoVoltar titulo="Cadastrar Usuário" link="/menu/bibliotecario" />
            {formulario}
        </div>
    );
}

export default CadastrarUsuario;