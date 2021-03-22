import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchUsuarios, selectUsuarioById } from '../geral/usuario/UsuariosSlice';
import CabecalhoVoltar from '../utils/CabecalhoVoltar';
import Rodape from '../utils/Rodape';
import BotoesLivrosEmprestados from './BotoesLivrosEmprestados';
import { fetchEmprestimosUsuario, selectAllEmprestimos } from './EmprestimosSlice';


const ConsultarEmprestimo = () => {
    let { id } = useParams();
    id = parseInt(id);
    const dispatch = useDispatch();

    const usuariosStatus = useSelector(state => state.usuarios.status);
    const usuariosError = useSelector(state => state.usuarios.error);
    const usuario = useSelector(state => selectUsuarioById(state, id));

    const emprestimosStatus = useSelector(state => state.emprestimos.status);
    const emprestimosError = useSelector(state => state.emprestimos.error);
    const emprestimos = useSelector(selectAllEmprestimos);

    let livros = [];
    if (emprestimos.length > 0) {
        livros = emprestimos.map((emprestimo) => emprestimo.livro);
    }

    useEffect(() => {
        if (emprestimosStatus === 'not_loaded') {
            dispatch(fetchEmprestimosUsuario(id));
        }
        if (usuariosStatus === 'not_loaded') {
            dispatch(fetchUsuarios());
        }
    }, [emprestimosStatus,usuariosStatus,id, dispatch]);

    let TabelaUsuario = '';
    if ((usuariosStatus === 'loaded' || usuariosStatus === 'saved' || usuariosStatus === 'deleted') && usuario) {
        TabelaUsuario =
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

    } else if (usuariosStatus === 'loading') {
        TabelaUsuario = <div className="alert alert-info w-100" >Carregando usuario...</div>

    } else if (usuariosStatus === 'failed') {
        TabelaUsuario = <div className="alert alert-warning w-100">Erro: {usuariosError}</div>

    } else {
        TabelaUsuario = <div className="alert alert-warning w-100">Usuário não encontrado.</div>
    }


    let LivrosEmprestados = '';
    if (emprestimosStatus === 'loaded' || emprestimosStatus === 'saved' || emprestimosStatus === 'deleted') {
        LivrosEmprestados = <BotoesLivrosEmprestados livros={livros} />

    } else if (emprestimosStatus === 'loading') {
        LivrosEmprestados = <div className="alert alert-info w-100">Carregando emprestimos...</div>

    } else if (emprestimosStatus === 'failed') {
        LivrosEmprestados = <div className="alert alert-warning w-100">Erro: {emprestimosError}</div>
    }

    return (
        <div className="container-fluid d-flex flex-column">

            <CabecalhoVoltar titulo="Consultar Empréstimo" link='/emprestimo' />
            <section className="row justify-content-center flex-grow-1">
                <div className="row col-12 col-sm-12 col-md-8 col-lg-7 col-xl-6 p-5 align-items-start conteudo">

                    {TabelaUsuario}

                    <div className="align-items-start mt-4 w-100">
                        <h3 className="text-center">Livros em posse:</h3>
                        {LivrosEmprestados}
                    </div>
                </div>
            </section>
            <Rodape />
        </div >
    );
}

export default ConsultarEmprestimo;