import React from 'react';
import Rodape from '../../utils/Rodape';
import TelaUsuario from './TelaUsuario';
import InfsGeraisMenus from './InfsGeraisMenus';
import btnCadastrarUsuario from '../../img/botoes/btn_CadastrarUsuario.jpg';
import btnManterEmprestimos from '../../img/botoes/btn_ManterEmprestimos.jpg';
import btnManterRenovacao from '../../img/botoes/btn_RenovarEmprestimo.jpg';
import btnRelatorios from '../../img/botoes/btn_Relatorios.jpg';
import { Link } from 'react-router-dom';
const MenuInicialBibliotecario = () => {
    return (
        <div className="container-fluid">
            <TelaUsuario tituloUsuario="Bem vindo," />
            <div className="row sessao2 justify-content-center mt-1 mb-1">
                <Link to="/usuario/cadastrar"><img src={btnCadastrarUsuario} alt="imagem nao carregou" className=" mt-2 mb-0 img-thumbnail text-white" /></Link>
            </div>
            <InfsGeraisMenus
                img1={btnManterEmprestimos}
                img2={btnRelatorios}
                img3={btnManterRenovacao}
                linkMenu2={"/manterEmprestimo"}
                linkMenu3={"/relatorio"}

            />

            <Rodape />
        </div>
    );
}
export default MenuInicialBibliotecario;