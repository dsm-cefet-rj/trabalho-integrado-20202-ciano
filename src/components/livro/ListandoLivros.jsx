import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CapaLivro from '../../../src/components/img/capa-livro-exemplo.svg';
import { fetchLivro, selectAllLivro } from './LivroSlice';

function ListandoLivros(props) {
    const dispatch = useDispatch();
    const status = useSelector(state => state.livros.status);
    let listaLivros = useSelector(selectAllLivro);
    let livroFiltrado = listaLivros.filter(id => props.titulo.toLowerCase() === id.titulo.toLowerCase());

    if (typeof livroFiltrado[0] === 'undefined') {
        livroFiltrado = listaLivros;
    }

    useEffect(() => {
        if (status === 'not_loaded') {
            dispatch(fetchLivro());
        } else if (status === 'failed') {
            setTimeout(() => dispatch(fetchLivro()), 5000);
        }
    }, [status, dispatch])

    const onSubmitConsultar = (e) => {
        e.preventDefault();
        if ((document.getElementById("atualizar")) != null) {
            if (document.getElementById("atualizar").value === "Atualizar") {
            }
        }
    }

    return (
        <table className="table  table-striped my-1 ">
            <tbody>
                {livroFiltrado.map((livro3, index) =>
                    <tr key={index}>
                        <td className="text-center">
                            <a href={`/livro/informacoes/consulta/${livro3.id}`}>
                                <img src={CapaLivro} className=" ml-1 ajuste3" alt="imagem" />
                            </a>
                        </td>
                        <td className="d-flex flex-column justify-content-center align-items-center ">
                            <a href={`/livro/informacoes/consulta/${livro3.id}`}><div className="font-weight-bold mt-3 mb-1  h4">{livro3.titulo}</div></a>
                            <a href={`/livro/informacoes/consulta/${livro3.id}`}> <div className="font-weight-bold  h4">{livro3.autores}</div></a>
                        </td>
                        <td >
                            <form className="d-flex flex-column justify-content-center align-items-center " onSubmit={onSubmitConsultar} method="POST">
                                <Link to={`/livro/atualizar/${livro3.id}`}>
                                    <input id="Atualizar" type="submit" value="Atualizar" className="btn mt-2 w-100 mr-5  mb-1 btn-primary" />
                                </Link>
                                <Link to={`/Deletando/Livro/${livro3.id}`}>
                                    <input id="Deletar" type="submit" value="Deletar" className="btn mr-5 w-100 btn-danger" />
                                </Link>
                            </form>
                        </td>
                    </tr>)}
            </tbody>
        </table>
    );






}
export default ListandoLivros;