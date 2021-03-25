import React, { useState, useEffect } from 'react';
import CabecalhoVoltar from '../utils/CabecalhoVoltar';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllLivro, deleteLivrosServer, fetchLivro } from './LivroSlice';

import { useParams, useHistory } from 'react-router-dom';
import ListandoLivros from './ListandoLivros';
const ConsultarLivro = () => {

    const history = useHistory();
    let { id } = useParams();
    id = parseInt(id);
    let livros = useSelector(selectAllLivro)
    const status = useSelector(state => state.livros.status);
    const error = useSelector(state => state.livros.error);
    const dispatch = useDispatch();
    useEffect(() => {
        if (status === 'not_loaded') {
            dispatch(fetchLivro())
            console.log(status)
        } else if (status === 'failed') {
            dispatch(fetchLivro())
        }
    }, [status, dispatch])

    const [consultar, setConsultar] = useState({
        tituloConsultar: "",



    })
    const onChangePesquisar = (e) => {
        e.target.value = e.target.value.trim();
        setConsultar({
            ...consultar, [e.target.name]: e.target.value

        })

    }

    const onSubmitConsultar = (e) => {
        e.preventDefault();

        if (document.getElementById("pesquisa").value === "Pesquisar") {
            let Listagem = livros.filter(liv1 => liv1.titulo === consultar.tituloConsultar
            ).map(liv2 => {
                return { autores: liv2.autores, titulo: liv2.titulo, id: liv2.id }
            })

        }
        if (document.getElementById("cadastro").value === "Cadastrar") {

            history.push(`/livro/cadastrar`)

        }
        if ((document.getElementById("atualizar")) != null) {
            if (document.getElementById("atualizar").value === "Atualizar") {


            }
            if (document.getElementById("deletar").value === "deletar") {


            }

        }


    }



    return (
        <div className="container-fluid d-flex flex-column">

            <CabecalhoVoltar titulo="Consultar Livro" link='/menu/bibliotecario' />

            <form onSubmit={onSubmitConsultar} className="row flex-column align-self-center  perfil_formulario col-12 col-sm-9 col-md-7 col-lg-6 col-xl-4 form w-100" action="#" method="POST" >

                <input onChange={onChangePesquisar} className="input_login w-100 m box_perfil" type="text" name="tituloConsultar" placeholder="Consultar Título do livro" />

                <div className="row justify-content-center mb-2">
                    <input disabled="disabled" id="pesquisa" className="btn btn-dark text-center h3 mr-3  h-25 w-0 " type="submit" value="Pesquisar" />
                    <input id="cadastro" className="btn btn-primary h3 text-center h-25 w-0 " type="submit" value="Cadastrar" />
                </div>
            </form>
            <ListandoLivros />


        </div>
    );
}

export default ConsultarLivro;
