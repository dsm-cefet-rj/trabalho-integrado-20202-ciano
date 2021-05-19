import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import CapaLivro from '../../../src/components/img/capa-livro-exemplo.svg';
import { fetchLivro, selectAllLivro, softDeleteLivroServer } from './LivroSlice';

function ListandoLivros(props) {
    const dispatch = useDispatch();
    let history = useHistory()
    const status = useSelector(state => state.livros.status);
    const error = useSelector(state => state.livros.error);
    const listaLivros = (useSelector(selectAllLivro)).filter(livro => livro.data_excluido === null);
    let livroFiltrado = listaLivros.filter(livro => livro.titulo.toLowerCase().indexOf(props.titulo.toLowerCase()) !== -1);

    if (typeof livroFiltrado[0] === 'undefined') {
        livroFiltrado = listaLivros;
    }

    useEffect(() => {
        if (status === 'not_loaded' || status === 'saved' || status === 'deleted') {
            dispatch(fetchLivro());
        } else if (status === 'failed') {
            setTimeout(() => dispatch(fetchLivro()), 5000);
        }
    }, [status, dispatch]);

    const handleClickDeletar = (livro) => {
        dispatch(softDeleteLivroServer(livro.id))
    }

    const handleClickAtualizar = (livro) => {
        history.push(`/livro/atualizar/${livro.id}`)
    }

    function botoesAlteracao(livro, isBibliotecario) {
        let botoes = '';
        if (isBibliotecario) {
            botoes = <>
                <button onClick={(e) => { e.preventDefault(); handleClickAtualizar(livro) }}
                    className="btn w-100 mb-1 btn-primary">Atualizar</button>
                <button onClick={(e) => { e.preventDefault(); handleClickDeletar(livro) }}
                    className="btn w-100 mt-1 btn-danger">Deletar</button>
            </>
        }
        return botoes;
    }

    let TabelaLivro = '';
    if (status === 'loaded' && livroFiltrado[0]) {
        TabelaLivro =
            <div className="table-responsive">
                <table className="table table-striped table-hover m-0">
                    <tbody>
                        {livroFiltrado.map((livro, index) => {
                            let aux = 0;

                            return <tr key={index} className="py-3">
                                <td className="justify-content-center align-middle">
                                    <Link to={`/livro/informacoes/${livro.id}`}>
                                        <img src={CapaLivro} className="ajuste3" alt="imagem" />
                                    </Link>
                                </td>
                                <td className="align-middle">
                                    <Link to={`/livro/informacoes/${livro.id}`}><p className="font-weight-bold h4 text-center">{livro.titulo}</p></Link>
                                    <Link to={`/livro/informacoes/${livro.id}`}>
                                        <p className="font-weight-bold h4 mt-3 text-center">
                                            {livro.autores.map(autor => aux++ === 0 ? autor : ", " + autor)}
                                        </p>
                                    </Link>
                                </td>
                                <td className="pr-4 align-middle">

                                    {botoesAlteracao(livro, props.bliotecario)}

                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>

    } else if (status === 'loading') {
        TabelaLivro = <div className="alert alert-info w-100" >Carregando livros...</div>

    } else if (status === 'failed') {
        TabelaLivro = <div className="alert alert-warning w-100">Erro: {error}</div>

    } else {
        TabelaLivro = <div className="alert alert-warning w-100">Não existe livros cadastrados.</div>
    }

    return (TabelaLivro);

}
export default ListandoLivros;