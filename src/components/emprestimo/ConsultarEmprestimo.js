import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CabecalhoVoltar from '../utils/CabecalhoVoltar';
import Rodape from '../utils/Rodape';
import BotoesLivrosEmprestados from './BotoesLivrosEmprestados';


const ConsultarEmprestimo = () => {
    let { matricula } = useParams();

    const usuariosState = useSelector(state => state.usuarios);
    const usuarios = usuariosState.usuarios;
    const status = usuariosState.status;
    const error = usuariosState.error;
    let usuario = usuarios.filter((user) => user.matricula === matricula)[0];


    let ConsultarEmprestimo = '';
    if (status === 'loaded' && usuario) {
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