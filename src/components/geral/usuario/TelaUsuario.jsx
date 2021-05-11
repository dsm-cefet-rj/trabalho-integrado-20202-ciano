import React from 'react';
import { Link } from 'react-router-dom';
import btnProFileUserWhite from '../../img/profile-user-white.svg';
const TelaUsuario = (props) => {
    const desligar = () => {
        document.getElementById("tela_fundo").style.display = "none";
    }
    const ligar = () => {
        document.getElementById("tela_fundo").style.display = "block";
        document.getElementById("tela_fundo").style.backgroundColor = "#436D7C";
        document.querySelector("#tela_fundo").style.height = "400px";
        document.querySelector("#tela_fundo").style.width = "400px";
        document.getElementById("tela_fundo").style.zIndex = "4";
        document.getElementById("tela_fundo").style.border = "10px solid white";
        document.getElementById("tela_fundo").style.borderRadius = "10px";
        document.getElementById("tela_fundo").style.position = "fixed";
        document.getElementById("tela_fundo").style.top = "0px";
        document.getElementById("tela_fundo").style.left = "4px";
        document.getElementById("visualizar_perfil").style.marginTop = "110px";
        document.querySelector("#tela_sair").style.marginLe = "350px";
    }
    return (
        <>
            <div className="text-white font-weight-bold align-items-center justify-content-center" id="tela_fundo" style={{ display: 'none' }}>
                <span className="mt-2  d-flex btn justify-content-end" id="tela_sair" onClick={desligar}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                </span>
                <h1 className="row justify-content-center align-items-center">Perfil</h1>
                <hr style={{ height: '10px' }} className="bg-white font-weight-bold w-100" />
                <a href="editar-perfil.html" id="visualizar_perfil" className="btn btn-block font-weight-bold btn-success">Editar Perfil</a>
                <Link to="/" id="sair_perfil" className="btn mt-3 font-weight-bold btn-block btn-danger">Logout</Link>
            </div>
            <header className="row d-flex flex-row justify-content-center justify-content-sm-start align-items-center text-white cabecalho">
                <img onClick={ligar} src={btnProFileUserWhite} alt="Icone do usuário" className="btn mr-3 ml-3" />
                <h1 className="h2 font-weight-bold text-center p-2">{props.tituloUsuario}</h1>
            </header>
        </>
    );
}
export default TelaUsuario;