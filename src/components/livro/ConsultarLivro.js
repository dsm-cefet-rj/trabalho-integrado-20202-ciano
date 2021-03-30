import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CabecalhoVoltar from '../utils/CabecalhoVoltar';
import ListandoLivros from './ListandoLivros';
const ConsultarLivro = () => {

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
            <CabecalhoVoltar titulo="Consultar Livro" link='/menu/bibliotecario' />
            <form className="d-flex flex-column my-4 align-self-center perfil_formulario2 col-12 col-sm-9 col-md-7 col-lg-6 col-xl-4  w-100" action="#" method="POST" >
                <input onChange={onChangePesquisar} className="input_login w-100 h-100 box_perfil" type="text" name="tituloConsultar" placeholder="Consultar Título" />

                <div className="row justify-content-center mt-1  mb-2">
                    <Link to={`/livro/cadastrar`}> <input id="cadastro" className="btn btn-primary h-100 h2 text-center w-100 " type="submit" value="+ Cadastrar novo livro" /></Link>
                </div>
            </form>

            <div className="d-flex flex-column align-self-center perfil_formulario2 w-100 my-3">
                <ListandoLivros titulo={consultar.tituloConsultar} />
            </div>

        </div>
    );
}
export default ConsultarLivro;
