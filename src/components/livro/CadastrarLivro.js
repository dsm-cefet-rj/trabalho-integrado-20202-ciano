import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CabecalhoVoltar from '../utils/CabecalhoVoltar';
import FormLivro from './FormLivros';
import { fetchLivro } from './LivroSlice';


const CadastrarLivro = () => {

    const status = useSelector(state => state.livros.status);
    const error = useSelector(state => state.livros.error);
    const dispatch = useDispatch();

    useEffect(() => {

        if (status === 'not_loaded') {
            dispatch(fetchLivro())
            console.log(status)
        } else if (status === 'failed') {
            setTimeout(() => dispatch(fetchLivro()), 5000);
        }
    }, [status, dispatch])

    let formulario = '';

    if (status === 'loaded' || status === 'saved' || status === 'deleted') {
        formulario = <FormLivro btnNome="Cadastrar" idNome="cadastrar" />;
    } else if (status === 'loading') {
        formulario = <div className="alert h3 text-sucess text-center mt-2 alert-success">Carregando...</div>
    } else if (status === 'failed') {
        formulario = <div className="alert h3 text-danger text-center mt-2 alert-danger" >Error: {error}</div>
    }
    return (

        <div className="container-fluid d-flex flex-column">
            <CabecalhoVoltar titulo="Cadastrar Livro" link='/menu/bibliotecario' />
            
            {formulario}

        </div>
    );
}
export default CadastrarLivro;