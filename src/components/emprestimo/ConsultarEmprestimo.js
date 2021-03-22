import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchUsuarios, selectAllUsuarios, selectUsuarioById } from '../geral/usuario/UsuariosSlice';
import CabecalhoVoltar from '../utils/CabecalhoVoltar';
import Rodape from '../utils/Rodape';
import BotoesLivrosEmprestados from './BotoesLivrosEmprestados';


const ConsultarEmprestimo = () => {
    let { matricula } = useParams();
    const dispatch = useDispatch();

    const status = useSelector(state => state.usuarios.status);
    const error = useSelector(state => state.usuarios.error);

    let usuario = useSelector(state => selectUsuarioById(state, matricula));

    useEffect(() => {
        if (status === 'not_loaded')
            dispatch(fetchUsuarios());
    }, [status, dispatch]);

    let ConsultarEmprestimo = '';
    if (status === 'loaded' && typeof usuario !== 'undefined') {
        ConsultarEmprestimo =
            <>
                <table className="table table-bordered bg-white">
                    <tr>
                        <th scope="row">Nome:</th>
                        <td>{usuario.nome}</td>
                    </tr>
                    <tr>
                        <th scope="row">Matrícula:</th>
                        <td>{usuario.matricula}</td>
                    </tr>
                    <tr>
                        <th scope="row">E-mail:</th>
                        <td>{usuario.email}</td>
                    </tr>
                    <tr>
                        <th scope="row">Telefone:</th>
                        <td>{usuario.telefone}</td>
                    </tr>
                </table>

                <div className="align-items-start mt-4 w-100">
                    <h3 className="text-center">Livros em posse:</h3>

                    <BotoesLivrosEmprestados livros={usuario.livros} />
                </div>
            </>
    } else if (status === 'loading') {
        ConsultarEmprestimo = <h2>Carregando...</h2>
    } else if (status === 'failed') {
        ConsultarEmprestimo = <h2>Erro: {error}</h2>
    } else if (typeof usuario === 'undefined') {
        ConsultarEmprestimo = <h2>404 - Página não encontrada</h2>
    }

    return (
        <div className="container-fluid d-flex flex-column">

            <CabecalhoVoltar titulo="Consultar Empréstimo" link='/emprestimo' />
            <section className="row justify-content-center flex-grow-1">
                <div className="row col-12 col-sm-12 col-md-8 col-lg-7 col-xl-6 p-5 align-items-start conteudo">

                    {ConsultarEmprestimo}

                </div>
            </section>
            <Rodape />
        </div>
    );
}

export default ConsultarEmprestimo;