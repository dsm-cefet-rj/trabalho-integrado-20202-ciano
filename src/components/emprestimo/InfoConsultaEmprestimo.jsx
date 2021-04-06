import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchUsuarios, selectUsuarioById } from '../geral/usuario/UsuariosSlice';
import StatusBox from '../utils/StatusBox';
import BotoesLivrosEmprestados from './BotoesLivrosEmprestados';
import { fetchEmprestimos, selectAllEmprestimos } from './EmprestimosSlice';


const InfoConsultaEmprestimo = (props) => {
    let { id } = useParams();
    id = parseInt(id);
    const dispatch = useDispatch();
    const usuariosStatus = useSelector(state => state.usuarios.status);
    const usuariosError = useSelector(state => state.usuarios.error);
    const usuario = useSelector(state => selectUsuarioById(state, id));
    const emprestimosStatus = useSelector(state => state.emprestimos.status);
    const emprestimosError = useSelector(state => state.emprestimos.error);
    const emprestimos = useSelector(selectAllEmprestimos);

    useEffect(() => {
        if (emprestimosStatus === 'not_loaded' || emprestimosStatus === 'saved' || emprestimosStatus === 'deleted') {
            dispatch(fetchEmprestimos());
        } else if (emprestimosStatus === 'failed') {
            setTimeout(() => dispatch(fetchEmprestimos()), 5000);
        }
        if (usuariosStatus === 'not_loaded' || usuariosStatus === 'saved' || usuariosStatus === 'deleted') {
            dispatch(fetchUsuarios());
        } else if (usuariosStatus === 'failed') {
            setTimeout(() => dispatch(fetchUsuarios()), 5000);
        }
    }, [emprestimosStatus, usuariosStatus, dispatch]);

    let TabelaUsuario = '';
    if ((usuariosStatus === 'loaded') && usuario) {
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

    } else if (emprestimosStatus === 'loading') {
        TabelaUsuario = <StatusBox status="Carregando usuario..." />

    } else if (emprestimosStatus === 'failed') {
        TabelaUsuario = <StatusBox status={"Erro: " + usuariosError} estilo='warning' />

    } else {
        TabelaUsuario = <StatusBox status="Usuário não encontrado." estilo='warning' />
    }

    let LivrosEmprestados = '';
    if (emprestimosStatus === 'loaded') {

        let emprestimosValidos = emprestimos.filter((emprestimo) => (emprestimo.data_devolvido === null)
            && (emprestimo.data_excluido === null) && (emprestimo.usuarioId === id));

        LivrosEmprestados = <BotoesLivrosEmprestados emprestimos={emprestimosValidos} rota={props.rota} />

    } else if (emprestimosStatus === 'loading') {
        LivrosEmprestados = <StatusBox status="Carregando emprestimos..." />

    } else if (emprestimosStatus === 'failed') {
        LivrosEmprestados = <StatusBox status={"Erro: " + emprestimosError} estilo='warning' />

    }

    return (
        <section className="row justify-content-center flex-grow-1">
            <div className="row col-12 col-sm-12 col-md-8 col-lg-7 col-xl-6 p-5 my-3 my-sm-4 align-items-start conteudo">

                {TabelaUsuario}

                <div className="align-items-start mt-4 w-100">
                    <h3 className="text-center">Livros em posse:</h3>
                    {LivrosEmprestados}
                </div>
            </div>
        </section>
    );
}

export default InfoConsultaEmprestimo;