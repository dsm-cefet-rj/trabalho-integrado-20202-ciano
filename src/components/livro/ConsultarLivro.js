import React, { useState, useEffect } from 'react';
import CabecalhoVoltar from '../utils/CabecalhoVoltar';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllLivro, fetchLivro } from './LivroSlice';
import { Link } from 'react-router-dom';
import ListandoLivros from './ListandoLivros';
const ConsultarLivro = () => {
    let livros = useSelector(selectAllLivro)
    const status = useSelector(state => state.livros.status);
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
        setConsultar({
            ...consultar, [e.target.name]: e.target.value
        })
    }
    return (
        <div className="container-fluid d-flex flex-column">
            <CabecalhoVoltar titulo="Consultar Livro" link='/menu/bibliotecario' />
            <form className="d-flex flex-column align-self-center  perfil_formulario col-12 col-sm-9 col-md-7 col-lg-6 col-xl-4  w-100" action="#" method="POST" >
                <input onChange={onChangePesquisar} className="input_login w-100 h-100 box_perfil" type="text" name="tituloConsultar" placeholder="Consultar Título do livro" />
            </form>
        
            <div className="row justify-content-center mt-1  mb-2">
                <Link to={`/livro/cadastrar`}> <input id="cadastro" className="btn btn-primary h-100 h2 text-center w-100 " type="submit" value="Cadastrar" /></Link>
            </div>
            <ListandoLivros titulo={consultar.tituloConsultar} />

        </div>
    );
}
export default ConsultarLivro;
