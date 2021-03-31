import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import CapaLivro from '../../../src/components/img/capa-livro-exemplo.svg';
import { fetchLivro, selectAllLivro, softDeleteLivroServer } from './LivroSlice';

function ListandoLivros(props) {
    const dispatch = useDispatch();
    let history = useHistory()
    const status = useSelector(state => state.livros.status);
    const error = useSelector(state => state.livros.error);
    const listaLivros = (useSelector(selectAllLivro)).filter(livro => livro.data_excluido === null);
    let livroFiltrado = listaLivros.filter(livro => props.titulo.toLowerCase() === livro.titulo.toLowerCase());

    if (typeof livroFiltrado[0] === 'undefined') {
        livroFiltrado = listaLivros;
    }

    useEffect(() => {
        if (status === 'not_loaded') {
            dispatch(fetchLivro());
        } else if (status === 'failed') {
            setTimeout(() => dispatch(fetchLivro()), 5000);
        }
    }, [status, dispatch]);

    const handleClickDeletar = (livro) => {
        dispatch(softDeleteLivroServer(livro))
    }

    const handleClickAtualizar = (livro) => {
        history.push(`/livro/atualizar/${livro.id}`)
    }

    let TabelaLivro = '';
    if ((status === 'loaded' || status === 'saved' || status === 'deleted') && listaLivros[0]) {
        TabelaLivro = livroFiltrado.map((livro, index) =>
            <tr key={index}>
                <td className="text-center">
                    <a href={`/livro/informacoes/consulta/${livro.id}`}>
                        <img src={CapaLivro} className=" ml-1 ajuste3" alt="imagem" />
                    </a>
                </td>
                <td className="d-flex flex-column justify-content-center align-items-center ">
                    <a href={`/livro/informacoes/consulta/${livro.id}`}><div className="font-weight-bold mt-3 mb-1  h4">{livro.titulo}</div></a>
                    <a href={`/livro/informacoes/consulta/${livro.id}`}> <div className="font-weight-bold  h4">{livro.autores}</div></a>
                </td>
                <td >
                    <div>
                        <button onClick={(e) => { e.preventDefault(); handleClickAtualizar(livro) }}
                            className="btn mt-2 w-100 mr-5 mb-1 btn-primary">Atualizar</button>
                    </div>
                    <div>
                        <button onClick={(e) => { e.preventDefault(); handleClickDeletar(livro) }}
                            className="btn mr-5 w-100 btn-danger">Deletar</button>
                    </div>
                </td>
            </tr>)

    } else if (status === 'loading') {
        TabelaLivro = <div className="alert alert-info w-100" >Carregando livros...</div>

    } else if (status === 'failed') {
        TabelaLivro = <div className="alert alert-warning w-100">Erro: {error}</div>

    } else {
        TabelaLivro = <div className="alert alert-warning w-100">Não existe livros cadastrados.</div>
    }

    return (
        <table className="table table-striped my-1">
            <tbody>
                {TabelaLivro}
            </tbody>
        </table>
    );

}
export default ListandoLivros;