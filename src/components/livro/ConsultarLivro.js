import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CabecalhoVoltar from '../utils/CabecalhoVoltar';
import ListandoLivros from './ListandoLivros';

const ConsultarLivro = () => {

    const UserAuth = useSelector(state => state.logins.currentUserAuth);

    let cadastrar = '';
    if (UserAuth.categoria === 'bibliotecario') {
        cadastrar =
            <div className="row justify-content-center">
                <Link to={`/livro/cadastrar`}> <input id="cadastro" className="btn btn-primary h-100 h2 text-center w-100 " type="submit" value="+ Cadastrar Novo Livro" /></Link>
            </div>
    } else {

    }

    const [consultar, setConsultar] = useState({
        tituloConsultar: "",
    })

    const onChangePesquisar = (e) => {
        setConsultar({
            ...consultar, [e.target.name]: e.target.value
        })
    }

    return (
        <div className="container-fluid d-flex flex-column">

            <CabecalhoVoltar titulo="Consultar Livro" link='/menu' />

            <section className="row my-3 my-sm-4 justify-content-center align-content-start flex-grow-1">
                <form className="d-flex py-3 flex-column perfil_formulario2 col-12 col-sm-9 col-md-7 col-lg-6 col-xl-4">
                    <input onChange={onChangePesquisar} className="input_login w-100 h-100 box_perfil" type="text" name="tituloConsultar" placeholder="Consultar Título" />

                    {cadastrar}
                </form>

                <div className="d-flex flex-column p-2 mt-3 mt-sm-4 conteudo col-12 col-sm-9">
                    <ListandoLivros titulo={consultar.tituloConsultar} />
                </div>
            </section>

        </div>
    );
}
export default ConsultarLivro;
