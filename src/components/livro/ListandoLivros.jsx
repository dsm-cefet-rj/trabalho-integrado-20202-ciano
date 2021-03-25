import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CapaLivro from '../../../src/components/img/capa-livro-exemplo.svg';
import { selectAllLivro, deleteLivroServer, selectLivroIds, selectLivroById, fetchLivro } from './LivroSlice';
import { useParams, useHistory } from 'react-router-dom';
function ListandoLivros(props) {
    let dispatch = useDispatch();
    let history = useHistory()
    let { id } = useParams();
    id = parseInt(id);
    let listaLivros = useSelector(state => selectLivroById(state, { id }.id))
    listaLivros = useSelector(selectAllLivro)
    const onSubmitConsultar = (e) => {
        e.preventDefault();
        if ((document.getElementById("atualizar")) != null) {
            if (document.getElementById("atualizar").value === "Atualizar") {
            }
            if (document.getElementById("deletar").value === "Deletar") {
                let apagarIndice=document.querySelector("#indice").value;
                console.log(apagarIndice);
                dispatch(deleteLivroServer(apagarIndice))
            }

        }
    }
    return (
        <>
            <table className="table  table-striped my-1 ">
                <thead className="thead-dark ">
                    <tr>
                    </tr>
                </thead>
                <tbody>
                    {listaLivros.map((livro3, index) =>
                        <tr key={index}>
                            <td className="text-center"><img src={CapaLivro} className=" ml-1 size-book-10" alt="imagem" /></td>
                            <td className="d-flex flex-column justify-content-center align-items-center ">
                                <div className="font-weight-bold mt-5  h4">{livro3.titulo}</div>
                                <div className="font-weight-bold h4">{livro3.autores}</div>
                            </td>
                            <td >
                                <form className="d-flex flex-column justify-content-center align-items-center " onSubmit={onSubmitConsultar} method="POST">
                                    <input id="atualizar" type="submit" value="Atualizar" className="btn mt-4 w-50 mr-5 w- mb-2 btn-primary" />
                                    <input id="deletar"  type="submit" value="Deletar" className="btn mr-5 w-50 btn-danger" />
                                     <input id="indice" value={livro3.id} hidden="hidden" />

                                </form>
                            </td>

                        </tr>
                    )}
                </tbody>
            </table>
        </>
    );






}
export default ListandoLivros;