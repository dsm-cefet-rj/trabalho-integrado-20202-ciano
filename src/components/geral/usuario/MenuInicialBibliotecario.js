import React from 'react';
import Rodape from '../../utils/Rodape';
import TelaUsuario from './TelaUsuario';
import InfsGeraisMenus from './InfsGeraisMenus';
import btnCadastrarUsuario from '../../img/botoes/btn_CadastrarUsuario.jpg';
import btnManterEmprestimos from '../../img/botoes/btn_ManterEmprestimos.jpg';
import btnManterRenovacao from '../../img/botoes/btn_RenovarEmprestimo.jpg';
import btnRelatorios from '../../img/botoes/btn_Relatorios.jpg';
const MenuInicialBibliotecario = () => {
    return (
        <div className="container-fluid">
            <TelaUsuario tituloUsuario="Bem vindo," />
            <div className="row sessao2 justify-content-center mt-1 mb-1">
                <a href=""><img src={btnCadastrarUsuario} alt="imagem nao carregou" className=" mt-2 mb-0 img-thumbnail text-white" /></a>
            </div>
            <InfsGeraisMenus img1={btnManterEmprestimos} img2={btnRelatorios} img3={btnManterRenovacao} />
           
            <Rodape />
        </div>
    );}
export default MenuInicialBibliotecario;